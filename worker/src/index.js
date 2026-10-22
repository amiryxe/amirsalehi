import { ADMIN_HTML } from './admin.js'

// Tiny API for amirsalehi.ir: comments + contact form (Cloudflare Worker + D1)

const LIMITS = { name: 80, email: 120, phone: 30, body: 3000, slug: 200 }
const RATE = { max: 5, windowSec: 600 } // 5 posts per 10 min per IP

const json = (data, status, cors) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...cors },
  })

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

function corsHeaders(req, env) {
  const origin = req.headers.get('origin') || ''
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim())
  if (!allowed.includes(origin)) return {}
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'GET,POST,DELETE,OPTIONS',
    'access-control-allow-headers': 'content-type,x-admin-token',
    vary: 'origin',
  }
}

async function rateLimited(env, req, scope) {
  const ip = req.headers.get('cf-connecting-ip') || 'local'
  const key = `${scope}:${ip}`
  const now = Math.floor(Date.now() / 1000)
  const row = await env.DB.prepare('SELECT count, window_start FROM rate_limits WHERE key = ?').bind(key).first()
  if (!row || now - row.window_start > RATE.windowSec) {
    await env.DB.prepare('INSERT OR REPLACE INTO rate_limits (key, count, window_start) VALUES (?, 1, ?)').bind(key, now).run()
    return false
  }
  if (row.count >= RATE.max) return true
  await env.DB.prepare('UPDATE rate_limits SET count = count + 1 WHERE key = ?').bind(key).run()
  return false
}

async function readBody(req) {
  try {
    return await req.json()
  } catch {
    return null
  }
}

function isAdmin(req, env) {
  const a = new TextEncoder().encode(req.headers.get('x-admin-token') || '')
  const b = new TextEncoder().encode(env.ADMIN_TOKEN || '')
  if (!b.length) return false
  let diff = a.length ^ b.length
  for (let i = 0; i < b.length; i++) diff |= (a[i] ?? 0) ^ b[i]
  return diff === 0
}

export default {
  async fetch(req, env) {
    const cors = corsHeaders(req, env)
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })

    const url = new URL(req.url)
    const path = url.pathname.replace(/\/+$/, '')

    if (path === '/admin' && req.method === 'GET') {
      return new Response(ADMIN_HTML, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'no-store',
          'x-frame-options': 'DENY',
          'referrer-policy': 'no-referrer',
        },
      })
    }

    try {
      // Public: approved comments of a post
      if (path === '/comments' && req.method === 'GET') {
        const slug = clean(url.searchParams.get('slug'), LIMITS.slug)
        if (!slug) return json({ error: 'slug required' }, 400, cors)
        const { results } = await env.DB.prepare(
          'SELECT id, name, body, created_at FROM comments WHERE post_slug = ? AND approved = 1 ORDER BY id'
        ).bind(slug).all()
        return json(results, 200, cors)
      }

      // Public: new comment (needs approval)
      if (path === '/comments' && req.method === 'POST') {
        const b = await readBody(req)
        if (!b) return json({ error: 'bad json' }, 400, cors)
        if (b.website) return json({ ok: true }, 200, cors) // honeypot
        const slug = clean(b.slug, LIMITS.slug)
        const name = clean(b.name, LIMITS.name)
        const email = clean(b.email, LIMITS.email)
        const body = clean(b.body, LIMITS.body)
        if (!slug || !name || !body) return json({ error: 'missing fields' }, 400, cors)
        if (await rateLimited(env, req, 'c')) return json({ error: 'too many requests' }, 429, cors)
        await env.DB.prepare('INSERT INTO comments (post_slug, name, email, body) VALUES (?, ?, ?, ?)')
          .bind(slug, name, email, body).run()
        return json({ ok: true }, 201, cors)
      }

      // Public: contact form
      if (path === '/contact' && req.method === 'POST') {
        const b = await readBody(req)
        if (!b) return json({ error: 'bad json' }, 400, cors)
        if (b.website) return json({ ok: true }, 200, cors) // honeypot
        const body = clean(b.body, LIMITS.body)
        if (!body) return json({ error: 'message required' }, 400, cors)
        if (await rateLimited(env, req, 'm')) return json({ error: 'too many requests' }, 429, cors)
        await env.DB.prepare('INSERT INTO messages (name, email, phone, body) VALUES (?, ?, ?, ?)')
          .bind(clean(b.name, LIMITS.name), clean(b.email, LIMITS.email), clean(b.phone, LIMITS.phone), body).run()
        // TODO (optional): email notification
        return json({ ok: true }, 201, cors)
      }

      // Admin (header x-admin-token)
      if (path.startsWith('/admin/')) {
        if (!isAdmin(req, env)) return json({ error: 'unauthorized' }, 401, cors)

        if (path === '/admin/comments' && req.method === 'GET') {
          const pending = url.searchParams.get('all') ? '' : 'WHERE approved = 0'
          const { results } = await env.DB.prepare(`SELECT * FROM comments ${pending} ORDER BY id DESC LIMIT 200`).all()
          return json(results, 200, cors)
        }
        if (path === '/admin/messages' && req.method === 'GET') {
          const { results } = await env.DB.prepare('SELECT * FROM messages ORDER BY id DESC LIMIT 200').all()
          return json(results, 200, cors)
        }
        let m = path.match(/^\/admin\/comments\/(\d+)\/approve$/)
        if (m && req.method === 'POST') {
          await env.DB.prepare('UPDATE comments SET approved = 1 WHERE id = ?').bind(m[1]).run()
          return json({ ok: true }, 200, cors)
        }
        m = path.match(/^\/admin\/(comments|messages)\/(\d+)$/)
        if (m && req.method === 'DELETE') {
          await env.DB.prepare(`DELETE FROM ${m[1]} WHERE id = ?`).bind(m[2]).run()
          return json({ ok: true }, 200, cors)
        }
      }

      return json({ error: 'not found' }, 404, cors)
    } catch (err) {
      console.error(err)
      return json({ error: 'server error' }, 500, cors)
    }
  },
}

# amirsalehi-api

Cloudflare Worker + D1 for blog comments and the contact form.

## Local
    cp .dev.vars.example .dev.vars
    npx wrangler d1 execute amirsalehi --local --file=schema.sql
    npx wrangler dev   # http://localhost:8787

## Deploy (once)
    npx wrangler login
    npx wrangler d1 create amirsalehi          # put database_id in wrangler.toml
    npx wrangler d1 execute amirsalehi --remote --file=schema.sql
    npx wrangler d1 execute amirsalehi --remote --file=migrate-pockethost.sql
    npx wrangler secret put ADMIN_TOKEN
    npx wrangler deploy
Then add custom domain `api.amirsalehi.ir` to the worker (dashboard, or uncomment `routes` in wrangler.toml)
and build the site with `GATSBY_API_URL=https://api.amirsalehi.ir`.

## API
- `GET /comments?slug=...` approved comments
- `POST /comments` `{slug,name,email,body}` (pending until approved)
- `POST /contact` `{name,email,phone,body}`
- Admin (header `x-admin-token`): `GET /admin/comments[?all=1]`, `GET /admin/messages`,
  `POST /admin/comments/:id/approve`, `DELETE /admin/comments/:id`, `DELETE /admin/messages/:id`

Example: `curl -H "x-admin-token: $T" https://api.amirsalehi.ir/admin/comments`

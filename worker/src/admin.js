export const ADMIN_HTML = `<!doctype html>
<html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>مدیریت امیر صالحی</title>
<style>
*{box-sizing:border-box}body{margin:0;font-family:Vazirmatn,Tahoma,system-ui,sans-serif;background:#f4f4f5;color:#18181b;font-size:14px}
.wrap{max-width:860px;margin:0 auto;padding:24px 16px}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
h1{font-size:20px;margin:0}button,input{font:inherit}button{border:0;border-radius:8px;padding:7px 14px;cursor:pointer;background:#3f3f46;color:#fff}
button.ghost{background:#e4e4e7;color:#18181b}button.ok{background:#16a34a}button.del{background:#dc2626}
.tabs{display:flex;gap:8px;margin-bottom:16px}.tabs button{background:#e4e4e7;color:#18181b}.tabs button.on{background:#18181b;color:#fff}
.card{background:#fff;border:1px solid #e4e4e7;border-radius:12px;padding:14px;margin-bottom:10px}.card.pending{border-color:#f59e0b}
.meta{display:flex;flex-wrap:wrap;gap:12px;color:#71717a;font-size:13px;margin-bottom:8px}.meta b{color:#18181b}
.body{white-space:pre-wrap;line-height:1.8;margin-bottom:10px}.acts{display:flex;gap:8px}.badge{background:#fef3c7;color:#92400e;border-radius:6px;padding:1px 8px}
.login{max-width:380px;margin:15vh auto;background:#fff;padding:24px;border-radius:12px;border:1px solid #e4e4e7}
.login input{width:100%;padding:10px;border:1px solid #d4d4d8;border-radius:8px;margin:12px 0;direction:ltr}
.empty,.err{color:#71717a;text-align:center;padding:30px}.err{color:#dc2626}a{color:#2563eb}
</style></head><body>
<div id="app"></div>
<script>
const KEY='adminToken';let tab='messages';const app=document.getElementById('app');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const fmt=d=>{try{return new Date(d).toLocaleString('fa-IR',{dateStyle:'medium',timeStyle:'short'})}catch{return d}};
async function api(path,method='GET'){const r=await fetch(path,{method,headers:{'x-admin-token':localStorage.getItem(KEY)||''},cache:'no-store'});
 if(r.status===401){localStorage.removeItem(KEY);render();throw new Error('توکن نامعتبر است')}if(!r.ok)throw new Error('خطا '+r.status);return r.json()}
function render(){if(!localStorage.getItem(KEY)){app.innerHTML='<form class="login" id="lf"><h1>ورود به مدیریت</h1><input id="tk" type="password" placeholder="ADMIN_TOKEN" autocomplete="off"><button>ورود</button></form>';
 document.getElementById('lf').onsubmit=e=>{e.preventDefault();const v=document.getElementById('tk').value.trim();if(v){localStorage.setItem(KEY,v);render()}};return}
 app.innerHTML='<div class="wrap"><header><h1>مدیریت سایت</h1><button class="ghost" id="lo">خروج</button></header><div class="tabs"><button data-t="messages">پیام‌ها</button><button data-t="comments">دیدگاه‌ها</button></div><div id="list"><div class="empty">در حال بارگذاری...</div></div></div>';
 document.getElementById('lo').onclick=()=>{localStorage.removeItem(KEY);render()};
 document.querySelectorAll('.tabs button').forEach(b=>{b.classList.toggle('on',b.dataset.t===tab);b.onclick=()=>{tab=b.dataset.t;render()}});load()}
async function load(){const el=document.getElementById('list');try{
 if(tab==='messages'){const rows=await api('/admin/messages');el.innerHTML=rows.length?rows.map(m=>'<div class="card"><div class="meta"><b>'+esc(m.name||'بی‌نام')+'</b>'+(m.email?'<a href="mailto:'+esc(m.email)+'" dir="ltr">'+esc(m.email)+'</a>':'')+(m.phone?'<span dir="ltr">'+esc(m.phone)+'</span>':'')+'<span>'+fmt(m.created_at)+'</span></div><div class="body">'+esc(m.body)+'</div><div class="acts"><button class="del" data-del="messages/'+m.id+'">حذف</button></div></div>').join(''):'<div class="empty">پیامی نیست</div>'}
 else{const rows=(await api('/admin/comments?all=1')).sort((a,b)=>a.approved-b.approved||b.id-a.id);el.innerHTML=rows.length?rows.map(c=>'<div class="card'+(c.approved?'':' pending')+'"><div class="meta">'+(c.approved?'':'<span class="badge">در انتظار تأیید</span>')+'<b>'+esc(c.name)+'</b>'+(c.email?'<span dir="ltr">'+esc(c.email)+'</span>':'')+'<a target="_blank" href="https://amirsalehi.ir/blog/'+encodeURIComponent(c.post_slug)+'/">'+esc(c.post_slug)+'</a><span>'+fmt(c.created_at)+'</span></div><div class="body">'+esc(c.body)+'</div><div class="acts">'+(c.approved?'':'<button class="ok" data-ok="'+c.id+'">تأیید</button>')+'<button class="del" data-del="comments/'+c.id+'">حذف</button></div></div>').join(''):'<div class="empty">دیدگاهی نیست</div>'}
 el.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{if(confirm('حذف شود؟')){await api('/admin/'+b.dataset.del,'DELETE');load()}});
 el.querySelectorAll('[data-ok]').forEach(b=>b.onclick=async()=>{await api('/admin/comments/'+b.dataset.ok+'/approve','POST');load()});
}catch(e){el.innerHTML='<div class="err">'+esc(e.message)+'</div>'}}
render();
</script></body></html>`

"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[6334],{1179:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return f}});a(9391);var r=a(5651),l=a(6540),m=a(7666),n=a(4794),o=a(2532),c=a(5172),s=a(1042),d=a(1562);const u=new m.Ay("https://amir.pockethost.io/");u.beforeSend=function(e,t){return t.headers.x_token="352fa0d7-94fa-476c-b2b1-464b84ed20e3",{url:e,options:t}};const i=e=>{let{data:t,children:a,pageContext:r}=e;const{0:m,1:s}=(0,l.useState)(!1),{0:i,1:g}=(0,l.useState)(""),{0:f,1:b}=(0,l.useState)([]),y=(0,o.c)(t.mdx.frontmatter.hero_image),{categories:x}=t.mdx.frontmatter;l.useEffect((()=>{(async()=>{const e=await u.collection("comments").getFullList({filter:'postSlug="'+r.frontmatter__slug+'"&&isApproved=true'});b(e)})()}),[]);return l.createElement(c.A,null,l.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),l.createElement("em",null,(0,d.A)(t.mdx.frontmatter.date)),y&&l.createElement("div",{className:"flex justify-center"},l.createElement(o.G,{image:y,alt:t.mdx.frontmatter.hero_image_alt,className:"my-8 rounded-md"})),l.createElement("div",{className:"mb-16 post"},a),l.createElement("div",{className:"flex gap-4"},"دسته‌بندی‌ها:",l.createElement("div",{className:"flex gap-2"},null==x?void 0:x.map((e=>l.createElement(n.Link,{key:e.slug,className:"font-bold underline",to:"/categories/"+e.slug},e.name))))),l.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:t,email:a,text:l}=e.target,m={postSlug:r.frontmatter__slug,name:t.value,email:a.value,text:l.value};s(!0),await u.collection("comments").create(m).then((()=>{g("دیدگاه شما با موفقیت ارسال شد"),t.value="",a.value="",l.value=""})).catch((e=>{g("خطا در ارسال دیدگاه")})).finally((()=>{s(!1)}))},className:"space-y-8 mt-12"},l.createElement("div",{className:"flex gap-4 max-sm:flex-col"},l.createElement("div",{className:"sm:w-1/2 flex flex-col gap-5"},l.createElement("div",null,l.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium "},"نام شما"),l.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),l.createElement("div",null,l.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium "},"ایمیل"),l.createElement("input",{type:"text",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"}))),l.createElement("div",{className:"sm:w-full"},l.createElement("div",{className:"sm:col-span-2"},l.createElement("label",{htmlFor:"text",className:"block mb-2 text-sm font-medium"},"متن دیدگاه"),l.createElement("textarea",{required:!0,id:"text",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن دیدگاه خود را وارد کنید..."})))),l.createElement("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},m?"در حال ارسال...":"ارسال دیدگاه")),i&&l.createElement("p",null,i),(null==f?void 0:f.length)>0&&l.createElement("div",{className:"mt-12"},l.createElement("hr",{className:"my-4"}),f.map((e=>l.createElement("div",{key:e.id,className:"mb-4 border border-gray-200 rounded-md p-3"},l.createElement("div",{className:"flex justify-between"},l.createElement("h3",{className:"font-bold"},e.name),l.createElement("em",null,(0,d.A)(e.created))),l.createElement("p",null,e.text))))))},g=e=>{let{data:t}=e;return l.createElement(s.A,{title:t.mdx.frontmatter.title})};function f(e){return l.createElement(i,e,l.createElement(r.A,e))}},1562:function(e,t,a){function r(e){const t=new Date(e);return new Intl.DateTimeFormat("fa-IR").format(t)}a.d(t,{A:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-storage-blog-2-index-mdx-0d5dd654b58985d101bb.js.map
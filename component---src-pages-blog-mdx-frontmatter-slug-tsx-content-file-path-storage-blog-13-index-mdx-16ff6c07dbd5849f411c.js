"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[2398],{1336:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return y}});var r=a(9887),l=a(6540),n=a(7666),m=a(4794),o=a(2532),c=a(5172),s=a(1042),d=a(1562);const u={}.POCKETBASE_URL,i=new n.Ay(u);i.beforeSend=function(e,t){return t.headers.x_token={}.POCKETBASE_KEY,{url:e,options:t}};const g=e=>{let{data:t,children:a,pageContext:r}=e;const{0:n,1:s}=(0,l.useState)(!1),{0:u,1:g}=(0,l.useState)(""),{0:f,1:y}=(0,l.useState)([]),b=(0,o.c)(t.mdx.frontmatter.hero_image),{categories:x}=t.mdx.frontmatter;l.useEffect((()=>{(async()=>{const e=await i.collection("comments").getFullList({filter:`postSlug="${r.frontmatter__slug}"&&isApproved=true`});y(e)})()}),[]);return l.createElement(c.A,null,l.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),l.createElement("em",null,(0,d.A)(t.mdx.frontmatter.date)),b&&l.createElement("div",{className:"flex justify-center"},l.createElement(o.G,{image:b,alt:t.mdx.frontmatter.hero_image_alt,className:"my-8 rounded-md"})),l.createElement("div",{className:"mb-16 post"},a),l.createElement("div",{className:"flex gap-4"},"دسته‌بندی‌ها:",l.createElement("div",{className:"flex gap-2"},null==x?void 0:x.map((e=>l.createElement(m.Link,{key:e.slug,className:"font-bold underline",to:"/categories/"+e.slug},e.name))))),l.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:t,email:a,text:l}=e.target,n={postSlug:r.frontmatter__slug,name:t.value,email:a.value,text:l.value};s(!0),await i.collection("comments").create(n).then((()=>{g("دیدگاه شما با موفقیت ارسال شد"),t.value="",a.value="",l.value=""})).catch((e=>{g("خطا در ارسال دیدگاه")})).finally((()=>{s(!1)}))},className:"space-y-8 mt-12"},l.createElement("div",{className:"flex gap-4 max-sm:flex-col"},l.createElement("div",{className:"sm:w-1/2 flex flex-col gap-5"},l.createElement("div",null,l.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium "},"نام شما"),l.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),l.createElement("div",null,l.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium "},"ایمیل"),l.createElement("input",{type:"text",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"}))),l.createElement("div",{className:"sm:w-full"},l.createElement("div",{className:"sm:col-span-2"},l.createElement("label",{htmlFor:"text",className:"block mb-2 text-sm font-medium"},"متن دیدگاه"),l.createElement("textarea",{required:!0,id:"text",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن دیدگاه خود را وارد کنید..."})))),l.createElement("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},n?"در حال ارسال...":"ارسال دیدگاه")),u&&l.createElement("p",null,u),(null==f?void 0:f.length)>0&&l.createElement("div",{className:"mt-12"},l.createElement("hr",{className:"my-4"}),f.map((e=>l.createElement("div",{key:e.id,className:"mb-4 border border-gray-200 rounded-md p-3"},l.createElement("div",{className:"flex justify-between"},l.createElement("h3",{className:"font-bold"},e.name),l.createElement("em",null,(0,d.A)(e.created))),l.createElement("p",null,e.text))))))},f=e=>{let{data:t}=e;return l.createElement(s.A,{title:t.mdx.frontmatter.title})};function y(e){return l.createElement(g,e,l.createElement(r.A,e))}},1562:function(e,t,a){function r(e){const t=new Date(e);return new Intl.DateTimeFormat("fa-IR").format(t)}a.d(t,{A:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-storage-blog-13-index-mdx-16ff6c07dbd5849f411c.js.map
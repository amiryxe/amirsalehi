"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[4417],{9939:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return y}});var r=a(2220),l=a(6540),n=a(7666),m=a(4794),o=a(2532),s=a(5172),c=a(1042),d=a(1562),i=a(1052);const u={}.POCKETBASE_URL,g=new n.Ay(u);g.beforeSend=function(e,t){return t.headers.x_token={}.POCKETBASE_KEY,{url:e,options:t}};const f=e=>{let{data:t,children:a,pageContext:r}=e;const{0:n,1:c}=(0,l.useState)(!1),{0:u,1:f}=(0,l.useState)(""),{0:b,1:y}=(0,l.useState)([]),x=(0,o.c)(t.mdx.frontmatter.hero_image),{categories:E}=t.mdx.frontmatter;l.useEffect((()=>{(async()=>{const e=await g.collection("comments").getFullList({filter:`postSlug="${r.frontmatter__slug}"&&isApproved=true`});y(e)})()}),[]);return l.createElement(s.A,null,l.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),l.createElement("em",null,(0,d.A)(t.mdx.frontmatter.date)),x&&l.createElement("div",{className:"flex justify-center"},l.createElement(o.G,{image:x,alt:t.mdx.frontmatter.hero_image_alt,className:"my-8 rounded-md"})),l.createElement("div",{className:"mb-16 post"},a),l.createElement("div",{className:"flex gap-4"},"دسته‌بندی‌ها:",l.createElement("div",{className:"flex gap-2"},null==E?void 0:E.map((e=>l.createElement(m.Link,{key:e.slug,className:"font-bold underline",to:"/categories/"+e.slug},e.name))))),l.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:t,email:a,text:l}=e.target,n={postSlug:r.frontmatter__slug,name:t.value,email:a.value,text:l.value};c(!0),await g.collection("comments").create(n).then((()=>{f("دیدگاه شما با موفقیت ارسال شد و پس از تائید نمایش داده می‌شود"),t.value="",a.value="",l.value=""})).catch((e=>{f("خطا در ارسال دیدگاه")})).finally((()=>{c(!1)}))},className:"space-y-8 mt-12"},l.createElement("div",{className:"flex gap-4 max-sm:flex-col"},l.createElement("div",{className:"sm:w-1/2 flex flex-col gap-5"},l.createElement("div",null,l.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium "},"نام شما"),l.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),l.createElement("div",null,l.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium "},"ایمیل"),l.createElement("input",{type:"text",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"}))),l.createElement("div",{className:"sm:w-full"},l.createElement("div",{className:"sm:col-span-2"},l.createElement("label",{htmlFor:"text",className:"block mb-2 text-sm font-medium"},"متن دیدگاه"),l.createElement("textarea",{required:!0,id:"text",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن دیدگاه خود را وارد کنید..."})))),l.createElement("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},n?"در حال ارسال...":"ارسال دیدگاه")),u&&l.createElement("p",{className:"mt-4 flex gap-2 animate-[pulse_1s_linear_2_forwards]"},l.createElement(i.A,{className:"w-6 text-green-500"}),u),(null==b?void 0:b.length)>0&&l.createElement("div",{className:"mt-12"},l.createElement("hr",{className:"my-4"}),b.map((e=>l.createElement("div",{key:e.id,className:"mb-4 border border-gray-200 rounded-md p-3"},l.createElement("div",{className:"flex justify-between"},l.createElement("h3",{className:"font-bold"},e.name),l.createElement("em",null,(0,d.A)(e.created))),l.createElement("p",null,e.text))))))},b=e=>{let{data:t}=e;return l.createElement(c.A,{title:t.mdx.frontmatter.title})};function y(e){return l.createElement(f,e,l.createElement(r.A,e))}},1562:function(e,t,a){function r(e){const t=new Date(e);return new Intl.DateTimeFormat("fa-IR").format(t)}a.d(t,{A:function(){return r}})},1052:function(e,t,a){var r=a(6540);function l({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"}))}const n=r.forwardRef(l);t.A=n}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-storage-blog-9-index-mdx-c60f984319a41d415fa3.js.map
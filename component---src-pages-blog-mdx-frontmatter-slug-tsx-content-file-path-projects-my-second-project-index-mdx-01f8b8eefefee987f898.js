"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[625],{9394:function(e,t,r){var n=r(8453),a=r(6540);function l(e){const t=Object.assign({span:"span",p:"p"},(0,n.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<style class=\"grvsc-styles\">\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n</style>"}}),"\n",a.createElement(t.p,null,"this is content 2"))}t.A=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)}},7930:function(e,t,r){r.r(t),r.d(t,{Head:function(){return u},default:function(){return f}});r(9391);var n=r(9394),a=r(6540),l=r(7666),o=r(4794),s=r(2532),c=r(5172),d=r(1042),i=r(1562);const m=new l.Ay("https://amir.pockethost.io/");m.beforeSend=function(e,t){return t.headers.x_token="352fa0d7-94fa-476c-b2b1-464b84ed20e3",{url:e,options:t}};const g=e=>{let{data:t,children:r,pageContext:n}=e;const{0:l,1:d}=(0,a.useState)(!1),{0:g,1:u}=(0,a.useState)(""),{0:f,1:p}=(0,a.useState)([]),b=(0,s.c)(t.mdx.frontmatter.hero_image),{categories:v}=t.mdx.frontmatter;a.useEffect((()=>{(async()=>{const e=await m.collection("comments").getFullList({filter:'postSlug="'+n.frontmatter__slug+'"&&isApproved=true'});p(e)})()}),[]);return a.createElement(c.A,null,a.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),a.createElement("em",null,(0,i.A)(t.mdx.frontmatter.date)),b&&a.createElement("div",{className:"flex justify-center"},a.createElement(s.G,{image:b,alt:t.mdx.frontmatter.hero_image_alt,className:"my-8 rounded-md"})),a.createElement("div",{className:"mb-16 post"},r),a.createElement("div",{className:"flex gap-4"},"دسته‌بندی‌ها:",a.createElement("div",{className:"flex gap-2"},v.map((e=>a.createElement(o.Link,{key:e.slug,className:"font-bold underline",to:"/categories/"+e.slug},e.name))))),a.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:t,email:r,text:a}=e.target,l={postSlug:n.frontmatter__slug,name:t.value,email:r.value,text:a.value};d(!0),await m.collection("comments").create(l).then((()=>{u("دیدگاه شما با موفقیت ارسال شد"),t.value="",r.value="",a.value=""})).catch((e=>{u("خطا در ارسال دیدگاه")})).finally((()=>{d(!1)}))},className:"space-y-8 mt-12"},a.createElement("div",{className:"flex gap-4 max-sm:flex-col"},a.createElement("div",{className:"sm:w-1/2 flex flex-col gap-5"},a.createElement("div",null,a.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium "},"نام شما"),a.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),a.createElement("div",null,a.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium "},"ایمیل"),a.createElement("input",{type:"text",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"}))),a.createElement("div",{className:"sm:w-full"},a.createElement("div",{className:"sm:col-span-2"},a.createElement("label",{htmlFor:"text",className:"block mb-2 text-sm font-medium"},"متن دیدگاه"),a.createElement("textarea",{required:!0,id:"text",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن دیدگاه خود را وارد کنید..."})))),a.createElement("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},l?"در حال ارسال...":"ارسال دیدگاه")),g&&a.createElement("p",null,g),(null==f?void 0:f.length)>0&&a.createElement("div",{className:"mt-12"},a.createElement("hr",{className:"my-4"}),f.map((e=>a.createElement("div",{key:e.id,className:"mb-4 border border-gray-200 rounded-md p-3"},a.createElement("div",{className:"flex justify-between"},a.createElement("h3",{className:"font-bold"},e.name),a.createElement("em",null,(0,i.A)(e.created))),a.createElement("p",null,e.text))))))},u=e=>{let{data:t}=e;return a.createElement(d.A,{title:t.mdx.frontmatter.title})};function f(e){return a.createElement(g,e,a.createElement(n.A,e))}},1562:function(e,t,r){function n(e){const t=new Date(e);return new Intl.DateTimeFormat("fa-IR").format(t)}r.d(t,{A:function(){return n}})},8453:function(e,t,r){r.d(t,{R:function(){return o}});var n=r(6540);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-projects-my-second-project-index-mdx-01f8b8eefefee987f898.js.map
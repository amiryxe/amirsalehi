"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[8313],{2511:function(e,r,a){a.r(r),a.d(r,{Head:function(){return d}});a(9391);var t=a(6540),l=a(5172),o=a(1042);const s=new(a(7666).Ay)("https://amir.pockethost.io/");s.beforeSend=function(e,r){return r.headers.x_token="352fa0d7-94fa-476c-b2b1-464b84ed20e3",{url:e,options:r}};const d=()=>t.createElement(o.A,{title:"تماس با من"});r.default=()=>{const{0:e,1:r}=(0,t.useState)(!1),{0:a,1:o}=(0,t.useState)("");return t.createElement(l.A,{pageTitle:"تماس با من"},t.createElement("div",{className:"mx-auto max-w-screen-md"},t.createElement("p",{className:"mb-6 lg:mb-10 text-center"},"از طریق فرم زیر میتونید با من در ارتباط باشید. سعی می‌کنم در سریع‌ترین زمان پاسخگوی پیغام شما باشم :)"),t.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:a,email:t,phone:l,message:d}=e.target,c={name:a.value,email:t.value,phone:l.value,message:d.value};r(!0),await s.collection("contacts").create(c).then((()=>{o("پیام شما با موفقیت ارسال شد"),a.value="",t.value="",l.value="",d.value=""})).catch((e=>{o("خطا در ارسال پیام")})).finally((()=>{r(!1)}))},className:"space-y-8"},t.createElement("div",null,t.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm "},"نام شما"),t.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),t.createElement("div",null,t.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm "},"ایمیل"),t.createElement("input",{type:"email",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"})),t.createElement("div",null,t.createElement("label",{htmlFor:"phone",className:"block mb-2 text-sm "},"شماره همراه"),t.createElement("input",{type:"text",id:"phone",dir:"ltr",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),t.createElement("div",{className:"sm:col-span-2"},t.createElement("label",{htmlFor:"message",className:"block mb-2 text-sm"},"پیام شما"),t.createElement("textarea",{required:!0,id:"message",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن پیام خود را وارد کنید..."})),t.createElement("button",{type:"submit",className:"py-3 px-5 text-sm text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},e?"در حال ارسال...":"ارسال پیام"),a&&t.createElement("p",null,a))))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-dab43454dc60ed6d34f1.js.map
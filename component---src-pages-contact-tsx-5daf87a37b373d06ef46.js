(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[8313],{5172:function(e,t,a){"use strict";a.d(t,{A:function(){return h}});var r=a(6540),l=a(4794);var n=r.forwardRef((function({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}));var o=r.forwardRef((function({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}));var c=r.forwardRef((function({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}));var s=r.forwardRef((function({title:e,titleId:t,...a},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))})),i=a(9207),d=a.n(i);const m=[{title:"بلاگ",path:"/blog"},{title:"رزومه",path:"/cv"},{title:"پروژه‌ها",path:"/projects"},{title:"ویدئوها",path:"/videos"},{title:"درباره من",path:"/about"}];function u(){const[e,t]=r.useState(),[a,i]=r.useState(!1);r.useEffect((()=>{"dark"===localStorage.theme&&(document.documentElement.classList.add("dark"),t(!0))}));return r.createElement("nav",{className:"flex justify-between items-center"},r.createElement("div",{className:"flex items-center gap-10"},r.createElement(l.Link,{to:"/",title:"صفحه اصلی"},r.createElement(d(),{className:"dark:fill-white hover:fill-lime-500 transition-all duration-100 max-lg:w-20"})),r.createElement("div",{className:"flex gap-3 items-center max-md:hidden max-lg:gap-2"},m.map((e=>r.createElement(l.Link,{key:e.title,to:e.path,className:"btn-link"},e.title))))),r.createElement("div",{className:"flex items-center gap-4 max-md:gap-3"},r.createElement("button",{type:"button",className:"p-3 max-md:p-2",onClick:()=>{"dark"===localStorage.getItem("theme")?(document.documentElement.classList.remove("dark"),localStorage.theme="light",t(!1)):(document.documentElement.classList.add("dark"),localStorage.theme="dark",t(!0))}},e?r.createElement(n,{className:"h-5"}):r.createElement(o,{className:"h-5"})),r.createElement(l.Link,{to:"/contact",className:"btn-primary max-md:text-sm max-md:px-2"},"تماس با من"),r.createElement("button",{type:"button",onClick:()=>i(!a)},r.createElement(c,{className:"h-6 pr-1 hidden max-md:block"}))),r.createElement("div",{className:(a?"block":"hidden")+" fixed top-0 left-0 w-full h-screen bg-slate-900/50 z-10 backdrop-blur-[2px]",onClick:()=>i(!1)}),r.createElement("div",{className:(a?"translate-x-0":"-translate-x-full")+" fixed top-0 left-0 h-screen bg-slate-900/90 z-10 duration-300 w-3/4 text-white"},r.createElement("button",{type:"button",className:"text-white p-3",onClick:()=>i(!a)},r.createElement(s,{className:"h-6"})),r.createElement("div",{className:"flex flex-col gap-4 p-4"},m.map((e=>r.createElement(l.Link,{key:e.title,to:e.path,className:"btn-link text-center text-lg",onClick:()=>i(!1)},e.title))))))}function g(){return r.createElement("div",{className:"mt-auto pt-8 border-t flex justify-between items-center dark:border-gray-700 max-sm:pt-4"},r.createElement("p",{className:"font-light text-sm"},"© 2024. تمامی حقوق محفوظ است"),r.createElement("div",{className:"group"},r.createElement(l.Link,{to:"/",title:"صفحه اصلی",className:"flex flex-col items-end "},r.createElement(d(),{width:64,height:24,className:"group-hover:fill-lime-500 transition-all duration-100 dark:fill-white"}),r.createElement("span",{className:"font-bold font-mono text-xs group-hover:text-lime-500 transition-all duration-100"},"AmirSalehi.ir"))))}var h=e=>{let{pageTitle:t,children:a}=e;return r.createElement("div",{className:"container py-8 flex flex-col min-h-screen max-sm:py-2",dir:"rtl"},r.createElement("svg",{className:"pointer-events-none absolute h-full isolate opacity-50 mix-blend-multiply dark:mix-blend-color-dodge dark:opacity-20 left-0 top-0",width:"100%",height:"100%"},r.createElement("filter",{id:"noise"},r.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"4",stitchTiles:"stitch"})),r.createElement("rect",{width:"100%",height:"100%",filter:"url(#noise)"})),r.createElement(u,null),r.createElement("main",{className:"py-16 max-sm:py-8"},t&&r.createElement("h1",{className:"font-bold mb-10 text-xl"},t),a),r.createElement(g,null))}},1042:function(e,t,a){"use strict";var r=a(6540);t.A=e=>{let{title:t}=e;return r.createElement("title",null,t)}},2511:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return c}});a(9391);var r=a(6540),l=a(5172),n=a(1042);const o=new(a(7666).Ay)("https://amir.pockethost.io/");o.beforeSend=function(e,t){return t.headers.x_token="352fa0d7-94fa-476c-b2b1-464b84ed20e3",{url:e,options:t}};const c=()=>r.createElement(n.A,{title:"تماس با من"});t.default=()=>{const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:n}=(0,r.useState)("");return r.createElement(l.A,{pageTitle:"تماس با من"},r.createElement("div",{className:"mx-auto max-w-screen-md"},r.createElement("p",{className:"mb-6 lg:mb-10 text-center"},"از طریق فرم زیر میتونید با من در ارتباط باشید. سعی می‌کنم در سریع‌ترین زمان پاسخگوی پیغام شما باشم :)"),r.createElement("form",{onSubmit:async e=>{e.preventDefault();const{name:a,email:r,phone:l,message:c}=e.target,s={name:a.value,email:r.value,phone:l.value,message:c.value};t(!0),await o.collection("contacts").create(s).then((()=>{n("پیام شما با موفقیت ارسال شد"),a.value="",r.value="",l.value="",c.value=""})).catch((()=>{n("خطا در ارسال پیام")})).finally((()=>{t(!1)}))},className:"space-y-8"},r.createElement("div",null,r.createElement("label",{htmlFor:"name",className:"block mb-2 text-sm "},"نام شما"),r.createElement("input",{type:"text",id:"name",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),r.createElement("div",null,r.createElement("label",{htmlFor:"email",className:"block mb-2 text-sm "},"ایمیل"),r.createElement("input",{type:"email",id:"email",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light",placeholder:"you@email.com",dir:"ltr"})),r.createElement("div",null,r.createElement("label",{htmlFor:"phone",className:"block mb-2 text-sm "},"شماره همراه"),r.createElement("input",{type:"text",id:"phone",dir:"ltr",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"})),r.createElement("div",{className:"sm:col-span-2"},r.createElement("label",{htmlFor:"message",className:"block mb-2 text-sm"},"پیام شما"),r.createElement("textarea",{required:!0,id:"message",rows:6,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500",placeholder:"متن پیام خود را وارد کنید..."})),r.createElement("button",{type:"submit",className:"py-3 px-5 text-sm text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},e?"در حال ارسال...":"ارسال پیام"),a&&r.createElement("p",null,a))))}},9207:function(e,t,a){var r=a(6540);function l(e){return r.createElement("svg",e,[r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M148.104 0.996883L154 1.10935C154 1.10935 153.174 19.5458 153.32 27.9896C152.911 34.3721 153.142 40.9907 152.753 47.3344C151.5 49.0985 148.766 48.4954 147.991 47.7843C146.104 28.9709 148.104 0.996883 148.104 0.996883Z",key:0}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.2788 0C46.2702 10.8045 45.9679 21.6016 45.3717 32.3913C43.9004 45.431 31.6714 45.206 29.611 35.8779C27.9465 35.7942 26.2836 35.8317 24.622 35.9903C25.0805 45.7204 21.58 49.8985 15.5511 50.7239C6.32644 52.0916 1.96933 46.745 0.697552 38.2397C0.159421 30.4512 -0.0673516 22.6532 0.0172345 14.846L4.55268 15.071C4.69487 21.4529 4.99738 27.8261 5.45977 34.1908C6.98803 49.8165 19.7052 45.0528 19.633 36.8901C17.7477 37.1049 15.8577 37.1425 13.9637 37.0026L13.6236 36.6651C13.4723 34.9405 13.6236 31.0417 13.6236 31.0417C22.3957 29.6271 17.3642 30.6205 28.7039 29.1297C28.8738 28.7396 28.9872 28.3273 29.0441 27.8925C29.3475 22.8417 29.1208 17.8181 28.3638 12.8216C27.8114 10.1634 26.2618 9.22612 23.7149 10.0098C18.6527 12.2154 21.2304 17.4324 21.3259 22.1494C21.3259 22.1494 18.7181 22.2686 16.3875 22.1825C15.3112 15.13 13.7237 5.33526 23.0346 3.26162C28.5368 2.79982 31.2924 3.92175 32.8992 8.09782C34.3949 14.2959 33.4678 16.6473 34.7134 33.2911C34.9382 36.8542 38.7947 37.312 39.7024 33.516C40.2947 31.1526 40.6728 28.7531 40.8363 26.3179C41.1084 17.5439 40.5038 8.77129 40.8363 0H46.2788Z",key:1}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.7324 2.56447C50.9739 11.8564 50.967 21.128 51.7583 30.4355C52.0016 32.0011 52.4551 33.5005 53.1189 34.9343C53.787 36.0466 54.7317 36.8339 55.9535 37.2962C60.23 38.3221 63.3291 36.9351 65.2512 33.1348C66.9064 35.644 69.2497 37.0688 72.2812 37.4086C72.7288 39.1078 73.6418 42.4698 73.6418 42.4698L77.4969 42.0199C77.4969 42.0199 78.1905 37.4121 78.1772 37.1837C87.4583 35.6826 88.8681 24.8505 88.8355 18.1763C89.1417 14.9309 88.499 11.8942 86.908 9.06626C85.0747 5.88435 77.0941 5.25949 74.2087 13.3401C72.4682 18.8273 71.7124 24.4508 71.941 30.2106C70.5083 29.2436 69.4501 27.9691 68.7662 26.3866C68.0875 24.1109 67.5189 19.4135 67.5189 19.4135C67.5189 19.4135 63.8299 19.2518 63.0969 19.4135C63.0969 19.4135 61.5546 26.702 59.6953 29.9856C58.9934 30.8465 58.3131 30.8465 57.6543 29.9856C56.8559 28.2759 56.4023 26.4764 56.2937 24.5871C55.7408 15.8657 57.831 2.54433 57.831 2.54433L51.7324 2.56447ZM81.5253 14.8058C84.746 15.7497 83.6776 19.6091 83.4595 23.6281C83.2204 28.0334 81.1285 29.0562 79.2671 29.0563C77.4058 29.0562 77.3339 23.9605 77.4082 21.6509C77.5377 17.6281 79.052 14.0809 81.5253 14.8058Z",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.028 15.1761C121.822 15.6983 123.886 26.4699 115.82 32.6063C114.894 26.4809 116.338 16.0574 107.883 16.1857C96.1648 16.2038 99.0435 26.9874 97.5822 35.0639C96.0424 43.5748 90.6613 43.6206 83.8337 47.0701C84.4092 49.9727 85.9649 52.8546 86.6794 53.6381C90.5853 51.6727 94.711 50.1526 98.2448 47.5648C107.738 38.655 99.8673 28.0262 105.048 23.7212C111.589 19.4893 110.129 33.0515 111.267 36.6969C112.406 40.3478 118.843 41.832 123.53 34.1809C123.783 35.968 124.468 37.616 125.312 39.2352C127.656 43.7322 136.419 45.4603 140.278 37.0326C143.49 30.0173 143.279 15.1452 132.028 15.1761ZM132.345 20.3883C134.864 20.388 136.425 24.2224 136.425 28.8539C136.425 33.4856 134.085 37.4687 131.566 37.4684C129.046 37.4683 127.302 33.4853 127.302 28.8539C127.302 24.2227 129.825 20.3884 132.345 20.3883Z",key:3}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523L103.461 50.264C103.461 50.264 103.331 55.9169 103.347 56C109.629 55.1599 113.554 54.3024 119.788 53.1883C119.851 51.6972 119.889 49.2157 119.902 47.4523Z",key:4}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523C119.889 49.2157 119.851 51.6972 119.788 53.1883C113.554 54.3024 109.629 55.1599 103.347 56C103.331 55.9169 103.461 50.264 103.461 50.264L119.902 47.4523Z",key:5})])}l.defaultProps={width:"154",height:"56",viewBox:"0 0 154 56",fill:"#0F172A"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-5daf87a37b373d06ef46.js.map
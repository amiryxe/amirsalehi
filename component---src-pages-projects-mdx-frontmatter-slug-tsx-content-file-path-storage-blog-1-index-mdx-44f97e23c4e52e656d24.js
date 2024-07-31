(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[7615],{9396:function(e,t,n){"use strict";var a=n(8453),r=n(6540);function l(e){const t=Object.assign({span:"span",p:"p",a:"a",h2:"h2"},(0,a.R)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<style class=\"grvsc-styles\">\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n</style>"}}),"\n",r.createElement(t.p,null,"بلاخره بعد از سال‌ها پشت گوش انداختن، سایت شخصی خودم رو راه‌اندازی کردم و این اولین نوشته‌ی من در ",r.createElement(t.a,{href:"https://amirsalehi.ir/blog/"},"بلاگم")," هست. مدت‌ها بود که قصد داشتم این کار رو بکنم ولی وجود معضلی بنام کمال‌گرایی که همچنان دارم باهاش دست و پنجه نرم می‌کنم و البته مشغله‌های مختلف بهم این اجازه رو نداده بود که سایت خودم رو داشته باشم."),"\n",r.createElement(t.p,null,"با این حال یکی از اهدافی که برای خودم توی سال ۱۴۰۳ تعریف کردم این بود که حتما و هر طور که شده سایت خودم رو راه بندازم و علاقه سال‌های پیشین خودم یعنی نوشتن رو ادامه بدم. خوشحالم که تونستم توی همون ماه اول سال این هدف رو تیک بزنم و شروع کنم به محتوا گذاشتن داخل سایت. (امیدوارم همینجوری بقیه هدف‌هام تیک بخوره)"),"\n",r.createElement(t.h2,null,"پیاده‌سازی پروژه وب‌سایت"),"\n",r.createElement(t.p,null,"از وقتی قصد کردم توسعه سایت رو شروع کنم به خودم قول دادم سخت نگیریم و به ساده‌ترین و سریع‌ترین شکل ممکن پروژه رو پیاده کنم. تکنولوژی‌ها و گزینه‌های روی میز مثل همیشه سردرگمم میکرد و من تنها از یه چیز مطمئن بودم و این بود که نمی‌خواستم وردپرس باشه. از طرف دیگه نوشتن سرور و پنل مدیریت هم به نظر لازم نمیومد و همین موارد در نتیجه من رو رسوند به ۲ گزینه ",r.createElement(t.a,{href:"https://nextjs.org/"},"Next")," و ",r.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),". با توجه به اینکه با فریمورک Next زیاد کار کردم به نظر برام پیاده‌سازی باهاش راحت‌تر بود اما هیجان تست و کار با گتسبی من رو تشویق کرد به انتخاب گتسبی و در نهایت باید بگم که انتخاب خوبی بود و واقعا ازش راضی هستم."),"\n",r.createElement(t.p,null,"نهایتا همونطور که گفتم سایت رو با گتسبی که یک فریم‌ورک Static Site Generator بر پایه ",r.createElement(t.a,{href:"https://react.dev/"},"React")," هست پیاده کردم و برای نوشتن محتوا هم از فایل‌های با قالب ",r.createElement(t.a,{href:"https://mdxjs.com/"},"MDX")," استفاده کردم. نوشته‌های بلاگ صرفا به صورت فایل ذخیره میشن و در فرایند بیلد تبدیل میشن به کدنهایی قابل فهم برای مرورگر و همین موضوع باعث میشه از سرور جهت Render بی‌نیاز بشم. این موضوع برای این تیپ وب‌سایت‌ها کفایت میکنه مخصوصا اینکه باعث میشه بتونید پروژه خودتون رو روی بسترهایی مثه Github Pages دیپلوی کنین که هزینه‌ای برای میزبانی نداره و رایگانه. به همین جهت من هم پروژه رو روی Github Pages ران کردم و البته سورس کل پروژه هم به صورت اپن‌سورس داخل ",r.createElement(t.a,{href:"https://github.com/amiryxe/amirsalehi"},"گیت‌هاب")," منتشر کردم شاید به کار یه نفر دیگه اومد."),"\n",r.createElement(t.h2,null,"نوشتن مقاله و انتشار آموزش"),"\n",r.createElement(t.p,null,"یکی از مهمترین هدف‌های من برای راه‌اندازی این سایت نوشتن مقاله‌های آموزشیه. اینم یکی دیگه از اون مواردی بوده که همیشه دوست داشتم انجام بدم ولی تا امروز اون طوری که میخواستم انجام نشده. امیدوارم بتونم از این بستر اون اندک دانشی که طی این سال‌ها بدست آوردم رو باهاتون به اشتراک بگذارم."))}t.A=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.R)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)}},8782:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return o},default:function(){return s}});var a=n(9396),r=n(6540),l=n(5172),i=n(1042);const c=e=>{let{data:t,children:n,pageContext:a}=e;return r.createElement(l.A,null,r.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),r.createElement("div",{className:"mb-16 post"},n))},o=e=>{let{data:t}=e;return r.createElement(i.A,{title:t.mdx.frontmatter.title})};function s(e){return r.createElement(c,e,r.createElement(a.A,e))}},5172:function(e,t,n){"use strict";n.d(t,{A:function(){return g}});var a=n(6540),r=n(4794);var l=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}));var i=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}));var c=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}));var o=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))})),s=n(9207),d=n.n(s);const m=[{title:"بلاگ",path:"/blog"},{title:"رزومه",path:"/cv"},{title:"پروژه‌ها",path:"/projects"},{title:"ویدئوها",path:"/videos"},{title:"درباره من",path:"/about"}];function u(){const[e,t]=a.useState(),[n,s]=a.useState(!1);a.useEffect((()=>{"dark"===localStorage.theme&&(document.documentElement.classList.add("dark"),t(!0))}));return a.createElement("nav",{className:"flex justify-between items-center"},a.createElement("div",{className:"flex items-center gap-10"},a.createElement(r.Link,{to:"/",title:"صفحه اصلی"},a.createElement(d(),{className:"dark:fill-white hover:fill-lime-500 transition-all duration-100 max-lg:w-20"})),a.createElement("div",{className:"flex gap-3 items-center max-md:hidden max-lg:gap-2"},m.map((e=>a.createElement(r.Link,{key:e.title,to:e.path,className:"btn-link"},e.title))))),a.createElement("div",{className:"flex items-center gap-4 max-md:gap-3"},a.createElement("button",{type:"button",className:"p-3 max-md:p-2",onClick:()=>{"dark"===localStorage.getItem("theme")?(document.documentElement.classList.remove("dark"),localStorage.theme="light",t(!1)):(document.documentElement.classList.add("dark"),localStorage.theme="dark",t(!0))}},e?a.createElement(l,{className:"h-5"}):a.createElement(i,{className:"h-5"})),a.createElement(r.Link,{to:"/contact",className:"btn-primary max-md:text-sm max-md:px-2"},"تماس با من"),a.createElement("button",{type:"button",onClick:()=>s(!n)},a.createElement(c,{className:"h-6 pr-1 hidden max-md:block"}))),a.createElement("div",{className:(n?"block":"hidden")+" fixed top-0 left-0 w-full h-screen bg-slate-900/50 z-10 backdrop-blur-[2px]",onClick:()=>s(!1)}),a.createElement("div",{className:(n?"translate-x-0":"-translate-x-full")+" fixed top-0 left-0 h-screen bg-slate-900/90 z-10 duration-300 w-3/4 text-white"},a.createElement("button",{type:"button",className:"text-white p-3",onClick:()=>s(!n)},a.createElement(o,{className:"h-6"})),a.createElement("div",{className:"flex flex-col gap-4 p-4"},m.map((e=>a.createElement(r.Link,{key:e.title,to:e.path,className:"btn-link text-center text-lg",onClick:()=>s(!1)},e.title))))))}function p(){return a.createElement("div",{className:"mt-auto pt-8 border-t flex justify-between items-center dark:border-gray-700 max-sm:pt-4"},a.createElement("p",{className:"font-light text-sm"},"© 2024. تمامی حقوق محفوظ است"),a.createElement("div",{className:"group"},a.createElement(r.Link,{to:"/",title:"صفحه اصلی",className:"flex flex-col items-end "},a.createElement(d(),{width:64,height:24,className:"group-hover:fill-lime-500 transition-all duration-100 dark:fill-white"}),a.createElement("span",{className:"font-bold font-mono text-xs group-hover:text-lime-500 transition-all duration-100"},"AmirSalehi.ir"))))}var g=e=>{let{pageTitle:t,children:n}=e;return a.createElement("div",{className:"container py-8 flex flex-col min-h-screen max-sm:py-2",dir:"rtl"},a.createElement("svg",{className:"pointer-events-none absolute h-full isolate opacity-50 mix-blend-multiply dark:mix-blend-color-dodge dark:opacity-20 left-0 top-0",width:"100%",height:"100%"},a.createElement("filter",{id:"noise"},a.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"4",stitchTiles:"stitch"})),a.createElement("rect",{width:"100%",height:"100%",filter:"url(#noise)"})),a.createElement(u,null),a.createElement("main",{className:"py-16 max-sm:py-8"},t&&a.createElement("h1",{className:"font-bold mb-10 text-xl"},t),n),a.createElement(p,null))}},1042:function(e,t,n){"use strict";var a=n(6540);t.A=e=>{let{title:t}=e;return a.createElement("title",null,t)}},9207:function(e,t,n){var a=n(6540);function r(e){return a.createElement("svg",e,[a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M148.104 0.996883L154 1.10935C154 1.10935 153.174 19.5458 153.32 27.9896C152.911 34.3721 153.142 40.9907 152.753 47.3344C151.5 49.0985 148.766 48.4954 147.991 47.7843C146.104 28.9709 148.104 0.996883 148.104 0.996883Z",key:0}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.2788 0C46.2702 10.8045 45.9679 21.6016 45.3717 32.3913C43.9004 45.431 31.6714 45.206 29.611 35.8779C27.9465 35.7942 26.2836 35.8317 24.622 35.9903C25.0805 45.7204 21.58 49.8985 15.5511 50.7239C6.32644 52.0916 1.96933 46.745 0.697552 38.2397C0.159421 30.4512 -0.0673516 22.6532 0.0172345 14.846L4.55268 15.071C4.69487 21.4529 4.99738 27.8261 5.45977 34.1908C6.98803 49.8165 19.7052 45.0528 19.633 36.8901C17.7477 37.1049 15.8577 37.1425 13.9637 37.0026L13.6236 36.6651C13.4723 34.9405 13.6236 31.0417 13.6236 31.0417C22.3957 29.6271 17.3642 30.6205 28.7039 29.1297C28.8738 28.7396 28.9872 28.3273 29.0441 27.8925C29.3475 22.8417 29.1208 17.8181 28.3638 12.8216C27.8114 10.1634 26.2618 9.22612 23.7149 10.0098C18.6527 12.2154 21.2304 17.4324 21.3259 22.1494C21.3259 22.1494 18.7181 22.2686 16.3875 22.1825C15.3112 15.13 13.7237 5.33526 23.0346 3.26162C28.5368 2.79982 31.2924 3.92175 32.8992 8.09782C34.3949 14.2959 33.4678 16.6473 34.7134 33.2911C34.9382 36.8542 38.7947 37.312 39.7024 33.516C40.2947 31.1526 40.6728 28.7531 40.8363 26.3179C41.1084 17.5439 40.5038 8.77129 40.8363 0H46.2788Z",key:1}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.7324 2.56447C50.9739 11.8564 50.967 21.128 51.7583 30.4355C52.0016 32.0011 52.4551 33.5005 53.1189 34.9343C53.787 36.0466 54.7317 36.8339 55.9535 37.2962C60.23 38.3221 63.3291 36.9351 65.2512 33.1348C66.9064 35.644 69.2497 37.0688 72.2812 37.4086C72.7288 39.1078 73.6418 42.4698 73.6418 42.4698L77.4969 42.0199C77.4969 42.0199 78.1905 37.4121 78.1772 37.1837C87.4583 35.6826 88.8681 24.8505 88.8355 18.1763C89.1417 14.9309 88.499 11.8942 86.908 9.06626C85.0747 5.88435 77.0941 5.25949 74.2087 13.3401C72.4682 18.8273 71.7124 24.4508 71.941 30.2106C70.5083 29.2436 69.4501 27.9691 68.7662 26.3866C68.0875 24.1109 67.5189 19.4135 67.5189 19.4135C67.5189 19.4135 63.8299 19.2518 63.0969 19.4135C63.0969 19.4135 61.5546 26.702 59.6953 29.9856C58.9934 30.8465 58.3131 30.8465 57.6543 29.9856C56.8559 28.2759 56.4023 26.4764 56.2937 24.5871C55.7408 15.8657 57.831 2.54433 57.831 2.54433L51.7324 2.56447ZM81.5253 14.8058C84.746 15.7497 83.6776 19.6091 83.4595 23.6281C83.2204 28.0334 81.1285 29.0562 79.2671 29.0563C77.4058 29.0562 77.3339 23.9605 77.4082 21.6509C77.5377 17.6281 79.052 14.0809 81.5253 14.8058Z",key:2}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.028 15.1761C121.822 15.6983 123.886 26.4699 115.82 32.6063C114.894 26.4809 116.338 16.0574 107.883 16.1857C96.1648 16.2038 99.0435 26.9874 97.5822 35.0639C96.0424 43.5748 90.6613 43.6206 83.8337 47.0701C84.4092 49.9727 85.9649 52.8546 86.6794 53.6381C90.5853 51.6727 94.711 50.1526 98.2448 47.5648C107.738 38.655 99.8673 28.0262 105.048 23.7212C111.589 19.4893 110.129 33.0515 111.267 36.6969C112.406 40.3478 118.843 41.832 123.53 34.1809C123.783 35.968 124.468 37.616 125.312 39.2352C127.656 43.7322 136.419 45.4603 140.278 37.0326C143.49 30.0173 143.279 15.1452 132.028 15.1761ZM132.345 20.3883C134.864 20.388 136.425 24.2224 136.425 28.8539C136.425 33.4856 134.085 37.4687 131.566 37.4684C129.046 37.4683 127.302 33.4853 127.302 28.8539C127.302 24.2227 129.825 20.3884 132.345 20.3883Z",key:3}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523L103.461 50.264C103.461 50.264 103.331 55.9169 103.347 56C109.629 55.1599 113.554 54.3024 119.788 53.1883C119.851 51.6972 119.889 49.2157 119.902 47.4523Z",key:4}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523C119.889 49.2157 119.851 51.6972 119.788 53.1883C113.554 54.3024 109.629 55.1599 103.347 56C103.331 55.9169 103.461 50.264 103.461 50.264L119.902 47.4523Z",key:5})])}r.defaultProps={width:"154",height:"56",viewBox:"0 0 154 56",fill:"#0F172A"},e.exports=r,r.default=r},8453:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var a=n(6540);const r={},l=a.createContext(r);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-tsx-content-file-path-storage-blog-1-index-mdx-44f97e23c4e52e656d24.js.map
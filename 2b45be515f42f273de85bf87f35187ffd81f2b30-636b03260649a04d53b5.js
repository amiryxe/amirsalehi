(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[5633],{2729:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=r(c)===c&&n(c)!==c,s=i,i=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){"use strict";a.d(t,{G:function(){return A},L:function(){return h},M:function(){return k},P:function(){return w},S:function(){return Z},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return o}});var r=a(6540),n=(a(2729),a(5556)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=s(e,y);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,i({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:`${t}-${l}-${a}`,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var C;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,E);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(C=b.propTypes)?void 0:C.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},I={image:l().object.isRequired,alt:S},R=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],j=new Set;let T,$;const O=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,f=s(e,R);const{width:y,height:v,layout:b}=n,C=d(y,v,b),{style:E,className:w}=C,k=s(C,M),x=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(b,y,v);return(0,r.useEffect)((()=>{T||(T=a.e(1108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return $=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if($&&j.has(L))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(L),image:n},f)),j.has(L)||(t=requestAnimationFrame((()=>{x.current&&(r=s(x.current,L,j,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(L)&&$&&(x.current.innerHTML=$(i({isLoading:j.has(L),isLoaded:j.has(L),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},E,l,{backgroundColor:c}),className:`${w}${u?` ${u}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));A.propTypes=I,A.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=s(t,q);return l&&console.warn(l),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=W((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:f,objectFit:y,objectPosition:v}=e,b=s(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=i({objectFit:y,objectPosition:v,backgroundColor:f},g);const{width:C,height:E,layout:S,images:I,placeholder:R,backgroundColor:M}=o,j=d(C,E,S),{style:T,className:$}=j,O=s(j,L),A={fallback:void 0,sources:[]};return I.fallback&&(A.fallback=i({},I.fallback,{srcSet:I.fallback.srcSet?N(I.fallback.srcSet):void 0})),I.sources&&(A.sources=I.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},T,l,{backgroundColor:f}),className:`${$}${a?` ${a}`:""}`}),r.createElement(h,{layout:S,width:C,height:E},r.createElement(w,i({},m(R,!1,S,C,E,M,y,v))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},b,u("eager"===c,!1,A,c,g)))))})),_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:S,width:_,height:_,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=F;const Z=W(A);Z.displayName="StaticImage",Z.propTypes=F},5172:function(e,t,a){"use strict";a.d(t,{A:function(){return v}});var r=a(6540),n=a(4794);function l({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}var i=r.forwardRef(l);function s({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))}var o=r.forwardRef(s);function c({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}var d=r.forwardRef(c);function u({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}var m=r.forwardRef(u),p=a(9207),g=a.n(p);const h=[{title:"بلاگ",path:"/blog"},{title:"رزومه",path:"/cv"},{title:"پروژه‌ها",path:"/projects"},{title:"ویدئوها",path:"/videos"},{title:"درباره من",path:"/about"}];function f(){const[e,t]=r.useState(),[a,l]=r.useState(!1);r.useEffect((()=>{"dark"===localStorage.theme&&(document.documentElement.classList.add("dark"),t(!0))}));return r.createElement("nav",{className:"flex justify-between items-center"},r.createElement("div",{className:"flex items-center gap-10"},r.createElement(n.Link,{to:"/",title:"صفحه اصلی"},r.createElement(g(),{className:"dark:fill-white hover:fill-lime-500 transition-all duration-100 max-lg:w-20"})),r.createElement("div",{className:"flex gap-3 items-center max-md:hidden max-lg:gap-2"},h.map((e=>r.createElement(n.Link,{key:e.title,to:e.path,className:"btn-link"},e.title))))),r.createElement("div",{className:"flex items-center gap-4 max-md:gap-3"},r.createElement("button",{type:"button",className:"p-3 max-md:p-2",onClick:()=>{"dark"===localStorage.getItem("theme")?(document.documentElement.classList.remove("dark"),localStorage.theme="light",t(!1)):(document.documentElement.classList.add("dark"),localStorage.theme="dark",t(!0))}},e?r.createElement(i,{className:"h-5"}):r.createElement(o,{className:"h-5"})),r.createElement(n.Link,{to:"/contact",className:"btn-primary max-md:text-sm max-md:px-2"},"تماس با من"),r.createElement("button",{type:"button",onClick:()=>l(!a)},r.createElement(d,{className:"h-6 pr-1 hidden max-md:block"}))),r.createElement("div",{className:(a?"block":"hidden")+" fixed top-0 left-0 w-full h-screen bg-slate-900/50 z-10 backdrop-blur-[2px]",onClick:()=>l(!1)}),r.createElement("div",{className:(a?"translate-x-0":"-translate-x-full")+" fixed top-0 left-0 h-screen bg-slate-900/90 z-10 duration-300 w-3/4 text-white"},r.createElement("button",{type:"button",className:"text-white p-3",onClick:()=>l(!a)},r.createElement(m,{className:"h-6"})),r.createElement("div",{className:"flex flex-col gap-4 p-4"},h.map((e=>r.createElement(n.Link,{key:e.title,to:e.path,className:"btn-link text-center text-lg",onClick:()=>l(!1)},e.title))))))}function y(){return r.createElement("div",{className:"mt-auto pt-8 border-t flex justify-between items-center dark:border-gray-700 max-sm:pt-4"},r.createElement("p",{className:"font-light text-sm"},"© 2024. تمامی حقوق محفوظ است"),r.createElement("div",{className:"group"},r.createElement(n.Link,{to:"/",title:"صفحه اصلی",className:"flex flex-col items-end "},r.createElement(g(),{width:64,height:24,className:"group-hover:fill-lime-500 transition-all duration-100 dark:fill-white"}),r.createElement("span",{className:"font-bold font-mono text-xs group-hover:text-lime-500 transition-all duration-100"},"AmirSalehi.ir"))))}var v=e=>{let{pageTitle:t,children:a}=e;return r.createElement("div",{className:"container py-8 flex flex-col min-h-screen max-sm:py-2",dir:"rtl"},r.createElement("svg",{className:"pointer-events-none absolute h-full isolate opacity-50 mix-blend-multiply dark:mix-blend-color-dodge dark:opacity-20 left-0 top-0",width:"100%",height:"100%"},r.createElement("filter",{id:"noise"},r.createElement("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"4",stitchTiles:"stitch"})),r.createElement("rect",{width:"100%",height:"100%",filter:"url(#noise)"})),r.createElement(f,null),r.createElement("main",{className:"py-16 max-sm:py-8"},t&&r.createElement("h1",{className:"font-bold mb-10 text-xl"},t),a),r.createElement(y,null))}},1042:function(e,t,a){"use strict";var r=a(6540);t.A=e=>{let{title:t}=e;return r.createElement("title",null,t)}},9207:function(e,t,a){var r=a(6540);function n(e){return r.createElement("svg",e,[r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M148.104 0.996883L154 1.10935C154 1.10935 153.174 19.5458 153.32 27.9896C152.911 34.3721 153.142 40.9907 152.753 47.3344C151.5 49.0985 148.766 48.4954 147.991 47.7843C146.104 28.9709 148.104 0.996883 148.104 0.996883Z",key:0}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.2788 0C46.2702 10.8045 45.9679 21.6016 45.3717 32.3913C43.9004 45.431 31.6714 45.206 29.611 35.8779C27.9465 35.7942 26.2836 35.8317 24.622 35.9903C25.0805 45.7204 21.58 49.8985 15.5511 50.7239C6.32644 52.0916 1.96933 46.745 0.697552 38.2397C0.159421 30.4512 -0.0673516 22.6532 0.0172345 14.846L4.55268 15.071C4.69487 21.4529 4.99738 27.8261 5.45977 34.1908C6.98803 49.8165 19.7052 45.0528 19.633 36.8901C17.7477 37.1049 15.8577 37.1425 13.9637 37.0026L13.6236 36.6651C13.4723 34.9405 13.6236 31.0417 13.6236 31.0417C22.3957 29.6271 17.3642 30.6205 28.7039 29.1297C28.8738 28.7396 28.9872 28.3273 29.0441 27.8925C29.3475 22.8417 29.1208 17.8181 28.3638 12.8216C27.8114 10.1634 26.2618 9.22612 23.7149 10.0098C18.6527 12.2154 21.2304 17.4324 21.3259 22.1494C21.3259 22.1494 18.7181 22.2686 16.3875 22.1825C15.3112 15.13 13.7237 5.33526 23.0346 3.26162C28.5368 2.79982 31.2924 3.92175 32.8992 8.09782C34.3949 14.2959 33.4678 16.6473 34.7134 33.2911C34.9382 36.8542 38.7947 37.312 39.7024 33.516C40.2947 31.1526 40.6728 28.7531 40.8363 26.3179C41.1084 17.5439 40.5038 8.77129 40.8363 0H46.2788Z",key:1}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M51.7324 2.56447C50.9739 11.8564 50.967 21.128 51.7583 30.4355C52.0016 32.0011 52.4551 33.5005 53.1189 34.9343C53.787 36.0466 54.7317 36.8339 55.9535 37.2962C60.23 38.3221 63.3291 36.9351 65.2512 33.1348C66.9064 35.644 69.2497 37.0688 72.2812 37.4086C72.7288 39.1078 73.6418 42.4698 73.6418 42.4698L77.4969 42.0199C77.4969 42.0199 78.1905 37.4121 78.1772 37.1837C87.4583 35.6826 88.8681 24.8505 88.8355 18.1763C89.1417 14.9309 88.499 11.8942 86.908 9.06626C85.0747 5.88435 77.0941 5.25949 74.2087 13.3401C72.4682 18.8273 71.7124 24.4508 71.941 30.2106C70.5083 29.2436 69.4501 27.9691 68.7662 26.3866C68.0875 24.1109 67.5189 19.4135 67.5189 19.4135C67.5189 19.4135 63.8299 19.2518 63.0969 19.4135C63.0969 19.4135 61.5546 26.702 59.6953 29.9856C58.9934 30.8465 58.3131 30.8465 57.6543 29.9856C56.8559 28.2759 56.4023 26.4764 56.2937 24.5871C55.7408 15.8657 57.831 2.54433 57.831 2.54433L51.7324 2.56447ZM81.5253 14.8058C84.746 15.7497 83.6776 19.6091 83.4595 23.6281C83.2204 28.0334 81.1285 29.0562 79.2671 29.0563C77.4058 29.0562 77.3339 23.9605 77.4082 21.6509C77.5377 17.6281 79.052 14.0809 81.5253 14.8058Z",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M132.028 15.1761C121.822 15.6983 123.886 26.4699 115.82 32.6063C114.894 26.4809 116.338 16.0574 107.883 16.1857C96.1648 16.2038 99.0435 26.9874 97.5822 35.0639C96.0424 43.5748 90.6613 43.6206 83.8337 47.0701C84.4092 49.9727 85.9649 52.8546 86.6794 53.6381C90.5853 51.6727 94.711 50.1526 98.2448 47.5648C107.738 38.655 99.8673 28.0262 105.048 23.7212C111.589 19.4893 110.129 33.0515 111.267 36.6969C112.406 40.3478 118.843 41.832 123.53 34.1809C123.783 35.968 124.468 37.616 125.312 39.2352C127.656 43.7322 136.419 45.4603 140.278 37.0326C143.49 30.0173 143.279 15.1452 132.028 15.1761ZM132.345 20.3883C134.864 20.388 136.425 24.2224 136.425 28.8539C136.425 33.4856 134.085 37.4687 131.566 37.4684C129.046 37.4683 127.302 33.4853 127.302 28.8539C127.302 24.2227 129.825 20.3884 132.345 20.3883Z",key:3}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523L103.461 50.264C103.461 50.264 103.331 55.9169 103.347 56C109.629 55.1599 113.554 54.3024 119.788 53.1883C119.851 51.6972 119.889 49.2157 119.902 47.4523Z",key:4}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.902 47.4523C119.889 49.2157 119.851 51.6972 119.788 53.1883C113.554 54.3024 109.629 55.1599 103.347 56C103.331 55.9169 103.461 50.264 103.461 50.264L119.902 47.4523Z",key:5})])}n.defaultProps={width:"154",height:"56",viewBox:"0 0 154 56",fill:"#0F172A"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=2b45be515f42f273de85bf87f35187ffd81f2b30-636b03260649a04d53b5.js.map
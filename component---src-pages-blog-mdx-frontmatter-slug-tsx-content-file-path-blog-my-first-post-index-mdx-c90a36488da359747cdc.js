(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[54],{5320:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),a=r(n(4893)),i=r(n(6221)),s=r(n(6540)),u=r(n(5556)),l=n(868),d=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="amirsalehi",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,i=(0,a.default)(e,["config","className","placeholder"]),u="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,o.default)({className:u,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i),r)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string,className:u.default.string}},7898:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),a=r(n(4893)),i=r(n(6221)),s=r(n(6540)),u=r(n(5556)),l=function(e){function t(){return e.apply(this,arguments)||this}(0,i.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,a.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:u.default.oneOfType([u.default.number,u.default.string]).isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}},7759:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.default=void 0;var o=r(n(4634)),a=r(n(4893)),i=r(n(6221)),s=r(n(6540)),u=r(n(5556)),l=n(868),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="amirsalehi",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,a.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=d,d.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string}),className:u.default.string}},9849:function(e,t,n){"use strict";var r=n(4994);var o=r(n(7759));t.E8=o.default,r(n(5320)).default,r(n(7898)).default,o.default},868:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];var s=this,u=n&&!r;window.clearTimeout(r),r=setTimeout((function(){r=null,n||e.apply(s,a)}),t),u&&e.apply(s,a)}},t.isReactElement=i,t.shallowComparison=function e(t,n){var r,a=new Set(Object.keys(t).concat(Object.keys(n))),s=(r=[]).concat.apply(r,(0,o.default)(a)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!i(t[r]))return!0;return!1}));return 0!==s.length};var o=r(n(1132)),a=r(n(6540));function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},9749:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return h},default:function(){return w}});var r=n(6540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},i(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"بلاخره بعد از سال‌ها پشت گوش انداختن، سایت شخصی خودم رو راه‌اندازی کردم و این اولین نوشته‌ی من در ",r.createElement(t.a,{href:"https://amirsalehi.ir/blog/"},"بلاگم")," هست. مدت‌ها بود که قصد داشتم این کار رو بکنم ولی وجود معضلی بنام کمال‌گرایی که همچنان دارم باهاش دست و پنجه نرم می‌کنم و البته مشغله‌های مختلف بهم این اجازه رو نداده بود که سایت خودم رو داشته باشم."),"\n",r.createElement(t.p,null,"با این حال یکی از اهدافی که برای خودم توی سال ۱۴۰۳ تعریف کردم این بود که حتما و هر طور که شده سایت خودم رو راه بندازم و علاقه سال‌های پیشین خودم یعنی نوشتن رو ادامه بدم. خوشحالم که تونستم توی همون ماه اول سال این هدف رو تیک بزنم و شروع کنم به محتوا گذاشتن داخل سایت. (امیدوارم همینجوری بقیه هدف‌هام تیک بخوره)"),"\n",r.createElement(t.h2,null,"پیاده‌سازی پروژه وب‌سایت"),"\n",r.createElement(t.p,null,"از وقتی قصد کردم توسعه سایت رو شروع کنم به خودم قول دادم سخت نگیریم و به ساده‌ترین و سریع‌ترین شکل ممکن پروژه رو پیاده کنم. تکنولوژی‌ها و گزینه‌های روی میز مثل همیشه سردرگمم میکرد و من تنها از یه چیز مطمئن بودم و این بود که نمی‌خواستم وردپرس باشه. از طرف دیگه نوشتن سرور و پنل مدیریت هم به نظر لازم نمیومد و همین موارد در نتیجه من رو رسوند به ۲ گزینه ",r.createElement(t.a,{href:"https://nextjs.org/"},"Next")," و ",r.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),". با توجه به اینکه با فریمورک Next زیاد کار کردم به نظر برام پیاده‌سازی باهاش راحت‌تر بود اما هیجان تست و کار با گتسبی من رو تشویق کرد به انتخاب گتسبی و در نهایت باید بگم که انتخاب خوبی بود و واقعا ازش راضی هستم."),"\n",r.createElement(t.p,null,"نهایتا همونطور که گفتم سایت رو با گتسبی که یک فریم‌ورک Static Site Generator بر پایه ",r.createElement(t.a,{href:"https://react.dev/"},"React")," هست پیاده کردم و برای نوشتن محتوا هم از فایل‌های با قالب ",r.createElement(t.a,{href:"https://mdxjs.com/"},"MDX")," استفاده کردم. نوشته‌های بلاگ صرفا به صورت فایل ذخیره میشن و در فرایند بیلد تبدیل میشن به کدنهایی قابل فهم برای مرورگر و همین موضوع باعث میشه از سرور جهت Render بی‌نیاز بشم. این موضوع برای این تیپ وب‌سایت‌ها کفایت میکنه مخصوصا اینکه باعث میشه بتونید پروژه خودتون رو روی بسترهایی مثه Github Pages دیپلوی کنین که هزینه‌ای برای میزبانی نداره و رایگانه. به همین جهت من هم پروژه رو روی Github Pages ران کردم و البته سورس کل پروژه هم به صورت اپن‌سورس داخل ",r.createElement(t.a,{href:"https://github.com/amiryxe/amirsalehi"},"گیت‌هاب")," منتشر کردم شاید به کار یه نفر دیگه اومد."),"\n",r.createElement(t.h2,null,"نوشتن مقاله و انتشار آموزش"),"\n",r.createElement(t.p,null,"یکی از مهمترین هدف‌های من برای راه‌اندازی این سایت نوشتن مقاله‌های آموزشیه. اینم یکی دیگه از اون مواردی بوده که همیشه دوست داشتم انجام بدم ولی تا امروز اون طوری که میخواستم انجام نشده. امیدوارم بتونم از این بستر اون اندک دانشی که طی این سال‌ها بدست آوردم رو باهاتون به اشتراک بگذارم."))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},i(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)},l=n(2532),d=n(9849),c=n(5172),f=n(1042),m=n(1562);const p=e=>{let{data:t,children:n}=e;const o=(0,l.c)(t.mdx.frontmatter.hero_image);return r.createElement(c.A,null,r.createElement("h1",{className:"text-2xl font-extrabold"},t.mdx.frontmatter.title),r.createElement("em",null,(0,m.A)(t.mdx.frontmatter.date)),r.createElement("div",{className:"flex justify-center"},r.createElement(l.G,{image:o,alt:t.mdx.frontmatter.hero_image_alt,className:"my-8 rounded-md"})),r.createElement("div",{className:"mb-16 post"},n),r.createElement(d.E8,{config:{title:t.mdx.frontmatter.title}}))},h=e=>{let{data:t}=e;return r.createElement(f.A,{title:t.mdx.frontmatter.title})};function w(e){return r.createElement(p,e,r.createElement(u,e))}},1042:function(e,t,n){"use strict";var r=n(6540),o=n(4794);t.A=e=>{let{title:t}=e;const n=(0,o.useStaticQuery)("3159585216");return r.createElement("title",null,t," - ",n.site.siteMetadata.title)}},1562:function(e,t,n){"use strict";function r(e){const t=new Date(e);return new Intl.DateTimeFormat("fa-IR").format(t)}n.d(t,{A:function(){return r}})},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,n){var r=n(79);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,n){var r=n(5901),o=n(9291),a=n(7122),i=n(1869);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,n){var r=n(79);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-blog-my-first-post-index-mdx-c90a36488da359747cdc.js.map
"use strict";(self.webpackChunkamirsalehi=self.webpackChunkamirsalehi||[]).push([[461],{3497:function(s,c,a){var n=a(8453),r=a(6540);function t(s){const c=Object.assign({span:"span",p:"p",h2:"h2",code:"code",strong:"strong"},(0,n.R)(),s.components);return r.createElement(r.Fragment,null,r.createElement(c.span,{dangerouslySetInnerHTML:{__html:"<style class=\"grvsc-styles\">\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-source:empty::after {\n    content: ' ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n  .quiet-light { background-color: #F5F5F5; }\n  .quiet-light .grvsc-tZ0ymb-i { font-style: italic; }\n  .quiet-light .grvsc-tZ0ymb-b { font-weight: bold; }\n  .quiet-light .grvsc-tZ0ymb-7 { color: #7A3E9D; }\n  .quiet-light .grvsc-tZ0ymb-1 { color: #333333; }\n  .quiet-light .grvsc-tZ0ymb-6 { color: #777777; }\n  .quiet-light .grvsc-tZ0ymb-5 { color: #9C5D27; }\n  .quiet-light .grvsc-tZ0ymb-9 { color: #AA3731; }\n  .quiet-light .grvsc-tZ0ymb-3 { color: #AAAAAA; }\n  .quiet-light .grvsc-tZ0ymb-4 { color: #448C27; }\n  .quiet-light .grvsc-tZ0ymb-10 { color: #4B69C6; }\n  .quiet-light .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(0, 0, 0, 0.05));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(0, 0, 0, 0.2));\n  }\n  html[class=dark] .grvsc-ps-tsSx3w {\n    background-color: #272822;\n    color: #f8f8f2;\n  }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-i { font-style: italic; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-9 { color: #66D9EF; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-1 { color: #F8F8F2; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-7 { color: #F92672; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-4 { color: #AE81FF; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-5 { color: #A6E22E; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-10 { color: #FD971F; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-3 { color: #75715E; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-tsSx3w-6 { color: #E6DB74; }\n  html[class=dark] .grvsc-ps-tsSx3w .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n</style>"}}),"\n",r.createElement(c.p,null,"جاوااسکریپت یکی از زبان‌های برنامه‌نویسی پرکاربرد و قدرتمند در دنیای وب است. یکی از ویژگی‌های مهم اکثر زبان‌های برنامه‌نویسی این است که در پایان هر خط از دستورات نیاز به نوشتن کاراکتر سمی‌کالن یا همان نقطه‌ویرگول است. جاوااسکریپت اما به شما این امکان را می‌دهد که سمی‌کالن را در پایان دستورات ننویسید و به نوعی در بسیاری از موارد نوشتن آن اختیاری است.\nیکی از ویژگی‌های جالب این زبان، توانایی آن در درج خودکار سمی‌کالن‌ها (Semicolon) است که به آن Automatic Semicolon Insertion (ASI) می‌گویند. با این حال، گاهی اوقات ننوشتن سمی‌کالن‌ها می‌تواند باعث بروز مشکلات و رفتارهای غیرمنتظره در کد شما شود. در این مقاله، به بررسی مواردی می‌پردازیم که در آن‌ها نبودن سمی‌کالن می‌تواند مشکلاتی ایجاد کند و چرا بهتر است که همیشه از آن‌ها استفاده کنیم."),"\n",r.createElement(c.h2,null,"شروع خطوط با براکت مربع ",r.createElement(c.code,null,"([)")),"\n",r.createElement(c.p,null,"یکی از مواردی که نبودن سمی‌کالن می‌تواند مشکل‌ساز شود، زمانی است که یک خط با براکت مربع ",r.createElement(c.code,null,"([)")," شروع می‌شود. در این حالت، جاوااسکریپت ممکن است به اشتباه تصور کند که این براکت به خط قبلی تعلق دارد."),"\n",r.createElement(c.p,null,"مثال:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="0"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">5</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">[</span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">1</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">2</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">3</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">]</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">forEach</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-10 grvsc-tsSx3w-i">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">=&gt;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">))</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"بدون سمی‌کالن، جاوااسکریپت این کد را به صورت زیر تفسیر می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="1"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">5</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">[</span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">1</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">2</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">3</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">]</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">forEach</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-10 grvsc-tsSx3w-i">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">=&gt;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">))</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"که باعث ",r.createElement(c.strong,null,"بروز خطا")," می‌شود. با افزودن سمی‌کالن، کد به درستی کار می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="2"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">5</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-3 grvsc-tZ0ymb-i grvsc-tsSx3w-3">// اینجا</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">[</span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">1</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">2</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">,</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-5 grvsc-tsSx3w-4">3</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">]</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">forEach</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-10 grvsc-tsSx3w-i">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">=&gt;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">n</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">))</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span></span></span></code></pre>'}}),"\n",r.createElement(c.h2,null,"شروع خطوط با پرانتز ",r.createElement(c.code,null,"(()")),"\n",r.createElement(c.p,null,"مشابه با براکت مربع، شروع خطوط با پرانتز نیز می‌تواند مشکل‌ساز باشد."),"\n",r.createElement(c.p,null,"مثال:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="3"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{}</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">Hello!</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">) </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)()</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"بدون سمی‌کالن، جاوااسکریپت این کد را به صورت زیر تفسیر می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="4"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{}</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">Hello!</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">) </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)()</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"که باعث بروز خطا می‌شود. با افزودن سمی‌کالن، کد به درستی کار می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="5"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">x</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{};</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tZ0ymb-b grvsc-tsSx3w-9 grvsc-tsSx3w-i">console</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-9">log</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">Hello!</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">) </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)()</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span></span></span></code></pre>'}}),"\n",r.createElement(c.h2,null,"دستورات return، throw، continue و break"),"\n",r.createElement(c.p,null,"عدم استفاده از سمی‌کالن بعد از این دستورات می‌تواند منجر به رفتارهای غیرمنتظره شود."),"\n",r.createElement(c.p,null,"مثال:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="6"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">getObject</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-10 grvsc-tsSx3w-7">return</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">        key</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">:</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">value</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"بدون سمی‌کالن، جاوااسکریپت این کد را به صورت زیر تفسیر می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="7"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">getObject</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-10 grvsc-tsSx3w-7">return</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">        key</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">:</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">value</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"که منجر به بازگشت undefined می‌شود. با افزودن سمی‌کالن، کد به درستی کار می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="8"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">function</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">getObject</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-10 grvsc-tsSx3w-7">return</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">{</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">        key</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">:</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span><span class="grvsc-tZ0ymb-4 grvsc-tsSx3w-6">value</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-6">&#39;</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">    </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">};</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">}</span></span></span></code></pre>'}}),"\n",r.createElement(c.h2,null,"جایی که ASI ممکن است به اشتباه عمل کند"),"\n",r.createElement(c.p,null,"گاهی اوقات جاوااسکریپت نمی‌تواند به درستی پایان دستورات را تشخیص دهد و درج سمی‌کالن به صورت صریح ضروری است."),"\n",r.createElement(c.p,null,"مثال:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="9"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">a</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">b</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">c</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">d</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">e</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">print</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">()</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"بدون سمی‌کالن، جاوااسکریپت این کد را به صورت زیر تفسیر می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="10"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">a</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">b</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">c</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">d</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">e</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">print</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">()</span></span></span></code></pre>'}}),"\n",r.createElement(c.p,null,"که باعث بروز خطا می‌شود. با افزودن سمی‌کالن، کد به درستی کار می‌کند:"),"\n",r.createElement(c.span,{dangerouslySetInnerHTML:{__html:'<pre class="grvsc-container quiet-light grvsc-ps-tsSx3w" data-language="javascript" data-index="11"><code class="grvsc-code"><span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-9 grvsc-tsSx3w-i">let</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">a</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">=</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">b</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">c</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span></span></span>\n<span class="grvsc-line"><span class="grvsc-source"><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">(</span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">d</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-7">+</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1"> </span><span class="grvsc-tZ0ymb-7 grvsc-tsSx3w-1">e</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">)</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">.</span><span class="grvsc-tZ0ymb-9 grvsc-tZ0ymb-b grvsc-tsSx3w-5">print</span><span class="grvsc-tZ0ymb-1 grvsc-tsSx3w-1">()</span><span class="grvsc-tZ0ymb-6 grvsc-tsSx3w-1">;</span></span></span></code></pre>'}}),"\n",r.createElement(c.h2,null,"نتیجه‌گیری"),"\n",r.createElement(c.p,null,"اگرچه جاوااسکریپت در بسیاری از موارد سمی‌کالن‌ها را به صورت خودکار درج می‌کند، اما برای جلوگیری از بروز مشکلات و رفتارهای غیرمنتظره، بهتر است که همیشه به صورت صریح از سمی‌کالن‌ها استفاده کنیم. این کار نه تنها کد شما را خواناتر می‌کند، بلکه از ",r.createElement(c.strong,null,"بروز خطاهای ناخواسته")," نیز جلوگیری می‌کند."),"\n",r.createElement(c.p,null,"به شخصه خودم هنگام کدنویسی علاقه‌ای به نوشتن سمی‌کالن در انتهای دستورات ندارم. به نظرم نبودش کد رو قشنگ‌تر میکنه. اما دونستن مطلبی که ذکر شد می‌تونه کمک بکنه در صورتی که داخل کدمون خطایی داشتیم، احتمال بدیم که به دلیل عدم وجود سمی‌کالن در یک جای ضروری بوده."))}c.A=function(s){void 0===s&&(s={});const{wrapper:c}=Object.assign({},(0,n.R)(),s.components);return c?r.createElement(c,s,r.createElement(t,s)):t(s)}},8453:function(s,c,a){a.d(c,{R:function(){return g}});var n=a(6540);const r={},t=n.createContext(r);function g(s){const c=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(c):{...c,...s}}),[c,s])}}}]);
//# sourceMappingURL=ae2381a253a0629b52d063a51b2d8be014d389b8-e5909d474817d2c3fc2a.js.map
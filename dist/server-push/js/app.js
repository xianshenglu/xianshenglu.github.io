(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},a=[];function c(e){return s.p+"js/"+({Introduction:"Introduction",Project:"Project",Skill:"Skill",UnitLang:"UnitLang",UnitNav:"UnitNav",UpgradeButton:"UpgradeButton"}[e]||e)+"."+{Introduction:"244c3b8a",Project:"69617c9f",Skill:"43880c7d",UnitLang:"58ed8f7c",UnitNav:"10e60a30",UpgradeButton:"a3968683"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={Introduction:1,Project:1,Skill:1,UnitLang:1,UnitNav:1,UpgradeButton:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({Introduction:"Introduction",Project:"Project",Skill:"Skill",UnitLang:"UnitLang",UnitNav:"UnitNav",UpgradeButton:"UpgradeButton"}[e]||e)+"."+{Introduction:"1200887b",Project:"d44554b3",Skill:"c596ace9",UnitLang:"0a71ac37",UnitNav:"4467e64d",UpgradeButton:"d1392748"}[e]+".css",r=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],h.parentNode.removeChild(h),n(a)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;a.push([0,"npm-core-js","npm-vue"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"1d3a":function(e,t,n){var o,i;function r(e){return s(e)||c(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r,a){"object"===u(t)&&"undefined"!=typeof e?e.exports=a():(o=a,i="function"===typeof o?o.call(t,n,t,e):o,void 0===i||(e.exports=i))}(0,(function(){"use strict";var e="undefined"!=typeof window,t=e&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=e&&"IntersectionObserver"in window,o=e&&"classList"in document.createElement("p"),i={elements_selector:"img",container:t||e?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(e,t){var n,o=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},c=function(e,t){return e.getAttribute("data-"+t)},s=function(e,t,n){var o="data-"+t;null!==n?e.setAttribute(o,n):e.removeAttribute(o)},u=function(e){return"true"===c(e,"was-processed")},d=function(e,t){return s(e,"ll-timeout",t)},h=function(e){return c(e,"ll-timeout")},f=function(e,t,n,o){e&&(void 0===o?void 0===n?e(t):e(t,n):e(t,n,o))},g=function(e,t){e._loadingCount+=t,0===e._elements.length&&0===e._loadingCount&&f(e._settings.callback_finish,e)},m=function(e){for(var t,n=[],o=0;t=e.children[o];o+=1)"SOURCE"===t.tagName&&n.push(t);return n},p=function(e,t,n){n&&e.setAttribute(t,n)},v=function(e,t){p(e,"sizes",c(e,t.data_sizes)),p(e,"srcset",c(e,t.data_srcset)),p(e,"src",c(e,t.data_src))},b={IMG:function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&m(n).forEach((function(e){v(e,t)})),v(e,t)},IFRAME:function(e,t){p(e,"src",c(e,t.data_src))},VIDEO:function(e,t){m(e).forEach((function(e){p(e,"src",c(e,t.data_src))})),p(e,"poster",c(e,t.data_poster)),p(e,"src",c(e,t.data_src)),e.load()}},_=function(e,t){var n,o,i=t._settings,r=e.tagName,a=b[r];if(a)return a(e,i),g(t,1),void(t._elements=(n=t._elements,o=e,n.filter((function(e){return e!==o}))));!function(e,t){var n=c(e,t.data_src),o=c(e,t.data_bg);n&&(e.style.backgroundImage='url("'.concat(n,'")')),o&&(e.style.backgroundImage=o)}(e,i)},y=function(e,t){o?e.classList.add(t):e.className+=(e.className?" ":"")+t},k=function(e,t){o?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},w=function(e,t,n){e.addEventListener(t,n)},x=function(e,t,n){e.removeEventListener(t,n)},S=function(e,t,n){x(e,"load",t),x(e,"loadeddata",t),x(e,"error",n)},E=function(e,t,n){var o=n._settings,i=t?o.class_loaded:o.class_error,r=t?o.callback_loaded:o.callback_error,a=e.target;k(a,o.class_loading),y(a,i),f(r,a,n),g(n,-1)},j=function(e,t){var n=function n(i){E(i,!0,t),S(e,n,o)},o=function o(i){E(i,!1,t),S(e,n,o)};!function(e,t,n){w(e,"load",t),w(e,"loadeddata",t),w(e,"error",n)}(e,n,o)},C=["IMG","IFRAME","VIDEO"],L=function(e,t){var n=t._observer;N(e,t),n&&t._settings.auto_unobserve&&n.unobserve(e)},I=function(e){var t=h(e);t&&(clearTimeout(t),d(e,null))},U=function(e,t){var n=t._settings.load_delay,o=h(e);o||(o=setTimeout((function(){L(e,t),I(e)}),n),d(e,o))},N=function(e,t,n){var o=t._settings;!n&&u(e)||(C.indexOf(e.tagName)>-1&&(j(e,t),y(e,o.class_loading)),_(e,t),function(e){s(e,"was-processed","true")}(e),f(o.callback_reveal,e,t),f(o.callback_set,e,t))},A=function(e){return!!n&&(e._observer=new IntersectionObserver((function(t){t.forEach((function(t){return function(e){return e.isIntersecting||e.intersectionRatio>0}(t)?function(e,t,n){var o=n._settings;f(o.callback_enter,e,t,n),o.load_delay?U(e,n):L(e,n)}(t.target,t,e):function(e,t,n){var o=n._settings;f(o.callback_exit,e,t,n),o.load_delay&&I(e)}(t.target,t,e)}))}),{root:(t=e._settings).container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),!0);var t},T=["IMG","IFRAME"],P=function(e,t){return function(e){return e.filter((function(e){return!u(e)}))}((n=e||function(e){return e.container.querySelectorAll(e.elements_selector)}(t),Array.prototype.slice.call(n)));var n},O=function(e){var t=e._settings;r(t.container.querySelectorAll("."+t.class_error)).forEach((function(e){k(e,t.class_error),function(e){s(e,"was-processed",null)}(e)})),e.update()},H=function(t,n){var o;this._settings=function(e){return l({},i,e)}(t),this._loadingCount=0,A(this),this.update(n),o=this,e&&window.addEventListener("online",(function(e){O(o)}))};return H.prototype={update:function(e){var n,o=this,i=this._settings;this._elements=P(e,i),!t&&this._observer?(function(e){return e.use_native&&"loading"in HTMLImageElement.prototype}(i)&&((n=this)._elements.forEach((function(e){-1!==T.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),N(e,n))})),this._elements=P(e,i)),this._elements.forEach((function(e){o._observer.observe(e)}))):this.loadAll()},destroy:function(){var e=this;this._observer&&(this._elements.forEach((function(t){e._observer.unobserve(t)})),this._observer=null),this._elements=null,this._settings=null},load:function(e,t){N(e,this,t)},loadAll:function(){var e=this;this._elements.forEach((function(t){L(t,e)}))}},e&&function(e,t){if(t)if(t.length)for(var n,o=0;n=t[o];o+=1)a(e,n);else a(e,t)}(H,window.lazyLoadOptions),H}))},2575:function(e,t,n){e.exports=n.p+"img/avator.bf7988a6.jpg"},2877:function(e,t,n){"use strict";function o(e,t,n,o,i,r,a,c){var s,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(l.functional){l._injectStyles=s;var u=l.render;l.render=function(e,t){return s.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))},"3d38":function(e,t,n){e.exports=n.p+"media/to-do-mvc.b2da547c.mp4"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("UnitLang",{attrs:{langs:e.authorData.langs},on:{langChange:e.langChangeHandler}}),n("UnitNav",{attrs:{navs:e.sections},on:{navChange:e.navChangeHandler}}),n("Index",{attrs:{id:"index",index:e.findSection("index")}}),n("Introduction",{attrs:{id:"introduction",introduction:e.findSection("introduction")}}),n("Skill",{attrs:{id:"skill",skill:e.findSection("skill")}}),n("Project",{attrs:{id:"project",project:e.findSection("project")}}),n("UpgradeButton",{attrs:{isVisible:e.isUpgradeReady},on:{"update:isVisible":function(t){e.isUpgradeReady=t},"update:is-visible":function(t){e.isUpgradeReady=t}}})],1)},r=[],a=(n("7db0"),n("a630"),n("caad"),n("a9e3"),n("d3b7"),n("2532"),n("3ca3"),n("159b"),n("2575")),c=n("e53b"),s=n("8f17"),l=n("3d38"),u={langs:[{name:"中文",id:"chinese",checked:"",sections:[{id:"index",checked:"",name:"首页",icon:"icon-index",author:"陆先生",avatar:a,career:"前端新人，请多指教",social:[{name:"Github",icon:"icon-github",url:"https://github.com/xianshenglu"},{name:"博客[中]",icon:"icon-blog",url:"https://www.cnblogs.com/xianshenglu/"},{name:"SegmentFault",icon:"icon-segmentfault",url:"https://segmentfault.com/u/xianshenglu"},{name:"Stackoverflow",icon:"icon-stackoverflow",url:"https://stackoverflow.com/users/9147721/xianshenglu"}]},{id:"introduction",checked:"",name:"个人介绍",icon:"icon-me",value:"前端工程师，熟悉 javascript，目前正在找工作",data:{info:[{name:"出生年月:",value:"1993.08",url:"#",icon:"icon-birth"},{name:"毕业院校:",value:"南京审计大学·金融系",url:"http://www.nau.edu.cn",icon:"icon-university"},{name:"最近工作:",value:"东方财富网·数据编辑",url:"http://www.eastmoney.com/",icon:"icon-eastmoney"}],contact:[{name:"邮箱:",value:"xianshenglu@foxmail.com",icon:"icon-email"},{name:"手机:",value:"+86 18221508921",icon:"icon-phone"},{name:"地址:",value:"中国·上海",icon:"icon-location"}]}},{id:"skill",checked:"",name:"技能",icon:"icon-skill",data:{native:[{name:"HTML",percent:70,color:"#e54d25"},{name:"CSS",percent:60,color:"#0070ba"},{name:"JS",percent:60,color:"#fac052"},{name:"SQL",percent:40,color:"#31c5b3"}],frame:[{name:"jQuery",icon:"icon-jquery1",percent:25,color:"#0769ad"},{name:"Vue",icon:"icon-vue1",percent:25,color:"#41b883"},{name:"Webpack",icon:"icon-webpack",percent:20,color:"#1c78c0"}]}},{id:"project",checked:"",name:"项目",icon:"icon-project",data:[{img:s,description:{title:"Vue.js 的个人主页",subtitle:"亮点",highlights:["支持页内中英文切换，不损失原来的浏览位置","滚动条位置和语言偏好记忆"]},source:{name:"源码",url:"https://github.com/xianshenglu/xianshenglu.github.io/tree/master/home"},preview:{name:"预览",url:"https://xianshenglu.github.io/home/dist/index.html"}},{img:l,description:{title:"Vue.js 的 ToDoList",subtitle:"亮点",highlights:["数据保存在 localStroage，供未来使用"]},source:{name:"源码",url:"https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc"},preview:{name:"预览",url:"https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html"}},{img:c,description:{title:" Hexo 和 Next 搭建的博客",subtitle:"亮点",highlights:["通过配置、脚本把项目搭建在 blog 仓库下，而不是默认的 username.github.io"]},source:{name:"源码",url:"https://github.com/xianshenglu/blog"},preview:{name:"预览",url:"https://xianshenglu.github.io/blog/"}}],more:{name:"更多请戳我的 Github",url:"https://github.com/xianshenglu",icon:"icon-github"}}]},{name:"English",id:"english",checked:"",sections:[{id:"index",checked:"",name:"Index",icon:"icon-index",author:"Xiansheng Lu",avatar:a,career:"Freshmen in FrontEnd, Nice to Meet You!",social:[{name:"Github",icon:"icon-github",url:"https://github.com/xianshenglu"},{name:"Blog",icon:"icon-blog",url:"https://xianshenglu.github.io/blog/"},{name:"Stackoverflow",icon:"icon-stackoverflow",url:"https://stackoverflow.com/users/9147721/xianshenglu"}]},{id:"introduction",checked:"",name:"Introduction",icon:"icon-me",value:"Front-End Engineer, familiar with javascript, between jobs right now",data:{info:[{name:"Date of Birth:",value:"1993.08",url:"#",icon:"icon-birth"},{name:"University:",value:"NAU·Finance",url:"http://www.nau.edu.cn",icon:"icon-university"},{name:"Last Job:",value:"EM·Data Processor",url:"http://www.eastmoney.com/",icon:"icon-eastmoney"}],contact:[{name:"Email:",value:"xianshenglu@foxmail.com",icon:"icon-email"},{name:"Phone:",value:"+86 18221508921",icon:"icon-phone"},{name:"Location:",value:"Shanghai,China",icon:"icon-location"}]}},{id:"skill",checked:"",name:"Skill",icon:"icon-skill",data:{native:[{name:"HTML",percent:70,color:"#e54d25"},{name:"CSS",percent:60,color:"#0070ba"},{name:"JS",percent:60,color:"#fac052"},{name:"SQL",percent:40,color:"#31c5b3"}],frame:[{name:"jQuery",percent:25,color:"#0769ad"},{name:"Vue",percent:25,color:"#41b883"},{name:"Webpack",percent:20,color:"#1c78c0"}]}},{id:"project",checked:"",name:"Project",icon:"icon-project",data:[{img:s,description:{title:"Homepage built by Vue.js",subtitle:"Highlights",highlights:["Support language switch without losing position in one page.","Scrollbar and language memory."]},source:{name:"Source",url:"https://github.com/xianshenglu/xianshenglu.github.io/tree/master/home"},preview:{name:"Preview",url:"https://xianshenglu.github.io/home/dist/index.html"}},{img:l,description:{title:"ToDoList built by Vue.js",subtitle:"Highlights",highlights:["User's data was saved in localStroage for future use."]},source:{name:"Source",url:"https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc"},preview:{name:"Preview",url:"https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html"}},{img:c,description:{title:"Blog built by Hexo and Next",subtitle:"Highlights",highlights:["Built under custom repository not the default repo like username.github.io "]},source:{name:"Source",url:"https://github.com/xianshenglu/blog"},preview:{name:"Preview",url:"https://xianshenglu.github.io/blog/"}}],more:{name:"More on Github",url:"https://github.com/xianshenglu",icon:"icon-github"}}]}]},d=u,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page page-index"},[n("div",{staticClass:"page-index-detail index-avatar"},[n("img",{staticClass:"index-avatar-img",attrs:{src:e.index.avatar}})]),n("div",{staticClass:"page-index-detail index-author"},[e._v(e._s(e.index.author))]),n("div",{staticClass:"page-index-detail index-career"},[e._v(e._s(e.index.career))]),n("div",{staticClass:"page-index-detail index-social"},e._l(e.index.social,(function(e,t){return n("a",{key:t,staticClass:"social-link",attrs:{href:e.url,target:"_blank"}},[n("svg",{class:"icon social-link-img "+e.icon,attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#"+e.icon}})])])})),0)])},f=[],g={name:"Index",props:["index"]},m=g,p=(n("f9cf"),n("2877")),v=Object(p["a"])(m,h,f,!1,null,"1d1461ec",null),b=v.exports;function _(e){return Array.from(document.querySelectorAll(e))}var y={name:"App",components:{Index:b,UnitLang:function(){return n.e("UnitLang").then(n.bind(null,"6b96"))},Introduction:function(){return n.e("Introduction").then(n.bind(null,"5368"))},Skill:function(){return n.e("Skill").then(n.bind(null,"2c58"))},Project:function(){return n.e("Project").then(n.bind(null,"1766"))},UnitNav:function(){return n.e("UnitNav").then(n.bind(null,"bd42"))},UpgradeButton:function(){return n.e("UpgradeButton").then(n.bind(null,"ffd3"))}},data:function(){return{currentNavId:"index",animationFrameId:1,authorData:d,isUpgradeReady:!1}},computed:{sections:function(){return this.authorData.langs.find((function(e){return"checked"===e.checked})).sections}},beforeCreate:function(){d.langs[1].checked="checked"},created:function(){this.langBackToLast(),this.listenServiceWorkerRegistrationEvents()},destroyed:function(){this.removeServiceWorkerRegistrationEvents(),window.removeEventListener("scroll",this.scrollHandlerGlobal,{capture:!0},!0)},mounted:function(){this.$nextTick((function(){this.scrollToLastPos(),window.addEventListener("scroll",this.scrollHandlerGlobal,{capture:!0},!0)}))},methods:{listenServiceWorkerRegistrationEvents:function(){var e=this;navigator.serviceWorker.getRegistration().then((function(t){[null,void 0].includes(t)?"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js"):t.addEventListener("updatefound",e.onServiceWorkerMsg)}))},removeServiceWorkerRegistrationEvents:function(){var e=this;navigator.serviceWorker.getRegistration().then((function(t){null!==t&&t.removeEventListener("updatefound",e.onServiceWorkerMsg)}))},onServiceWorkerMsg:function(e){this.isUpgradeReady=!0},closest:function(e,t){var n=_(t);while("html"!==e.tagName.toLowerCase()){if(n.includes(e))return e;e=e.parentNode}},smoothScoll:function(e){var t=this,n=.1,o=0,i=2e3;function r(a){o=o||a;var c=a-o,s=e-_("html")[0].scrollTop,l=n*s;switch(Math.ceil(l)){case 0:l=-1;break;case 1:l=1;break}0!==s&&c<i&&(window.scrollTo(0,_("html")[0].scrollTop+l),t.animationFrameId=window.requestAnimationFrame(r))}window.cancelAnimationFrame(t.animationFrameId),t.animationFrameId=window.requestAnimationFrame(r)},findSection:function(e){return this.sections.find((function(t){return t.id===e}))},langClear:function(){this.authorData.langs.forEach((function(e){e.checked=""}))},langBackToLast:function(){var e=localStorage.getItem("lang");e&&(this.langClear(),this.authorData.langs.find((function(t){return t.id===e})).checked="checked")},langChangeHandler:function(e){this.langClear();var t=e.target.getAttribute("data-preferred-lang-id");localStorage.setItem("lang",t);var n=this.authorData.langs.find((function(e){return e.id===t}));n.checked="checked",this.syncNavBetweenLangs()},syncNavBetweenLangs:function(){var e=this;this.navClear(),this.sections.find((function(t){return t.id===e.currentNavId})).checked="checked"},navClear:function(){this.sections.forEach((function(e){e.checked=""}))},navUpdate:function(e){this.currentNavId=e,this.sections.find((function(t){return t.id===e})).checked="checked"},navChangeHandler:function(e){this.navClear();var t=this.closest(e.target,"[data-target-nav-id]").getAttribute("data-target-nav-id");this.navUpdate(t);var n=_("#"+t)[0].getBoundingClientRect().top+_("html")[0].scrollTop;this.smoothScoll(n)},scrollHandlerGlobal:function(){localStorage.setItem("currentHtmlScrollTop",_("html")[0].scrollTop),this.scrollHandlerForSkill(),this.scrollHandlerForNav()},scrollHandlerForSkill:function(){var e=_("#skill")[0].getBoundingClientRect().top,t=_("html")[0].clientHeight,n=Boolean(e>=-t/1.3&&e<=t/2);function o(e){var t=Array.from(document.querySelectorAll("circle[data-percent]"));t.forEach((function(t){var n=t.getAttribute("data-percent"),o=t.getAttribute("data-stroke");t.style.strokeDasharray=e?n+" 100":"",t.style.stroke=o,t.parentNode.parentNode.style.color=o}))}o(n)},scrollHandlerForNav:function(){this.navClear();var e=Math.min(Math.round(_("html")[0].scrollTop/_("html")[0].clientHeight),3);this.currentNavId=this.sections[e].id,this.sections[e].checked="checked"},scrollToLastPos:function(){var e=Number(localStorage.getItem("currentHtmlScrollTop"));e?_("html")[0].scrollTop=e:this.sections[0].checked="checked"}}},k=y,w=(n("034f"),Object(p["a"])(k,i,r,!1,null,null,null)),x=w.exports,S=(n("b20f"),n("1d3a")),E=n.n(S);o["a"].prototype.$lazyLoadVm=new E.a({elements_selector:".lazy"}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},"8f17":function(e,t,n){e.exports=n.p+"media/homepage.5a2d51ce.mp4"},a0b4:function(e,t,n){},b20f:function(e,t,n){},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},e53b:function(e,t,n){e.exports=n.p+"media/blog.042e0a51.mp4"},f9cf:function(e,t,n){"use strict";var o=n("a0b4"),i=n.n(o);i.a}});
//# sourceMappingURL=app.js.map
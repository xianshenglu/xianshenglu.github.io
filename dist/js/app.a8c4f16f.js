(function(e){function t(t){for(var i,o,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={app:0},r={app:0},a=[];function c(e){return l.p+"js/"+({Index:"Index",Introduction:"Introduction",Project:"Project",Skill:"Skill",UnitLang:"UnitLang",UnitNav:"UnitNav",UpgradeButton:"UpgradeButton"}[e]||e)+"."+{Index:"ac28435e",Introduction:"8cd0cc48",Project:"855ca5e0",Skill:"b102cde4",UnitLang:"e1b5e93b",UnitNav:"70dd3eda",UpgradeButton:"dcfb5c19"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={Index:1,Introduction:1,Project:1,Skill:1,UnitLang:1,UnitNav:1,UpgradeButton:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({Index:"Index",Introduction:"Introduction",Project:"Project",Skill:"Skill",UnitLang:"UnitLang",UnitNav:"UnitNav",UpgradeButton:"UpgradeButton"}[e]||e)+"."+{Index:"e3acc4a6",Introduction:"45c7c913",Project:"8abb0626",Skill:"24d5a2c8",UnitLang:"8999fb0c",UnitNav:"d23d0dfc",UpgradeButton:"c5f866dc"}[e]+".css",r=l.p+i,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===i||s===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===i||s===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("8bbf"),o=n.n(i),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("UnitLang",{attrs:{langs:e.authorData.langs},on:{langChange:e.langChangeHandler}}),n("UnitNav",{attrs:{navs:e.sections},on:{navChange:e.navChangeHandler}}),n("Index",{attrs:{id:"index",index:e.findSection("index")}}),n("Introduction",{attrs:{id:"introduction",introduction:e.findSection("introduction")}}),n("Skill",{attrs:{id:"skill",skill:e.findSection("skill")}}),n("Project",{attrs:{id:"project",project:e.findSection("project")}}),n("UpgradeButton",{attrs:{isVisible:e.isUpgradeReady},on:{"update:isVisible":function(t){e.isUpgradeReady=t},"update:is-visible":function(t){e.isUpgradeReady=t}}})],1)},a=[],c=(n("7db0"),n("a630"),n("caad"),n("a9e3"),n("d3b7"),n("2532"),n("3ca3"),n("159b"),n("c837")),l=n("ed8f"),u=n("8370"),s=n("d8f8"),d={langs:[{name:"中文",id:"chinese",checked:"",sections:[{id:"index",checked:"",name:"首页",icon:"icon-index",author:"陆先生",avatar:c,career:"前端新人，请多指教",social:[{name:"Github",icon:"icon-github",url:"https://github.com/xianshenglu"},{name:"博客[中]",icon:"icon-blog",url:"https://www.cnblogs.com/xianshenglu/"},{name:"SegmentFault",icon:"icon-segmentfault",url:"https://segmentfault.com/u/xianshenglu"},{name:"Stackoverflow",icon:"icon-stackoverflow",url:"https://stackoverflow.com/users/9147721/xianshenglu"}]},{id:"introduction",checked:"",name:"个人介绍",icon:"icon-me",value:"前端工程师，熟悉 javascript，目前正在找工作",data:{info:[{name:"出生年月:",value:"1993.08",url:"#",icon:"icon-birth"},{name:"毕业院校:",value:"南京审计大学·金融系",url:"http://www.nau.edu.cn",icon:"icon-university"},{name:"最近工作:",value:"东方财富网·数据编辑",url:"http://www.eastmoney.com/",icon:"icon-eastmoney"}],contact:[{name:"邮箱:",value:"xianshenglu@foxmail.com",icon:"icon-email"},{name:"手机:",value:"+86 18221508921",icon:"icon-phone"},{name:"地址:",value:"中国·上海",icon:"icon-location"}]}},{id:"skill",checked:"",name:"技能",icon:"icon-skill",data:{native:[{name:"HTML",percent:70,color:"#e54d25"},{name:"CSS",percent:60,color:"#0070ba"},{name:"JS",percent:60,color:"#fac052"},{name:"SQL",percent:40,color:"#31c5b3"}],frame:[{name:"jQuery",icon:"icon-jquery1",percent:25,color:"#0769ad"},{name:"Vue",icon:"icon-vue1",percent:25,color:"#41b883"},{name:"Webpack",icon:"icon-webpack",percent:20,color:"#1c78c0"}]}},{id:"project",checked:"",name:"项目",icon:"icon-project",data:[{img:u,description:{title:"Vue.js 的个人主页",subtitle:"亮点",highlights:["支持页内中英文切换，不损失原来的浏览位置","滚动条位置和语言偏好记忆"]},source:{name:"源码",url:"https://github.com/xianshenglu/xianshenglu.github.io/tree/master/home"},preview:{name:"预览",url:"https://xianshenglu.github.io/home/dist/index.html"}},{img:s,description:{title:"Vue.js 的 ToDoList",subtitle:"亮点",highlights:["数据保存在 localStroage，供未来使用"]},source:{name:"源码",url:"https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc"},preview:{name:"预览",url:"https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html"}},{img:l,description:{title:" Hexo 和 Next 搭建的博客",subtitle:"亮点",highlights:["通过配置、脚本把项目搭建在 blog 仓库下，而不是默认的 username.github.io"]},source:{name:"源码",url:"https://github.com/xianshenglu/blog"},preview:{name:"预览",url:"https://xianshenglu.github.io/blog/"}}],more:{name:"更多请戳我的 Github",url:"https://github.com/xianshenglu",icon:"icon-github"}}]},{name:"English",id:"english",checked:"",sections:[{id:"index",checked:"",name:"Index",icon:"icon-index",author:"Xiansheng Lu",avatar:c,career:"Freshmen in FrontEnd, Nice to Meet You!",social:[{name:"Github",icon:"icon-github",url:"https://github.com/xianshenglu"},{name:"Blog",icon:"icon-blog",url:"https://xianshenglu.github.io/blog/"},{name:"Stackoverflow",icon:"icon-stackoverflow",url:"https://stackoverflow.com/users/9147721/xianshenglu"}]},{id:"introduction",checked:"",name:"Introduction",icon:"icon-me",value:"Front-End Engineer, familiar with javascript, between jobs right now",data:{info:[{name:"Date of Birth:",value:"1993.08",url:"#",icon:"icon-birth"},{name:"University:",value:"NAU·Finance",url:"http://www.nau.edu.cn",icon:"icon-university"},{name:"Last Job:",value:"EM·Data Processor",url:"http://www.eastmoney.com/",icon:"icon-eastmoney"}],contact:[{name:"Email:",value:"xianshenglu@foxmail.com",icon:"icon-email"},{name:"Phone:",value:"+86 18221508921",icon:"icon-phone"},{name:"Location:",value:"Shanghai,China",icon:"icon-location"}]}},{id:"skill",checked:"",name:"Skill",icon:"icon-skill",data:{native:[{name:"HTML",percent:70,color:"#e54d25"},{name:"CSS",percent:60,color:"#0070ba"},{name:"JS",percent:60,color:"#fac052"},{name:"SQL",percent:40,color:"#31c5b3"}],frame:[{name:"jQuery",percent:25,color:"#0769ad"},{name:"Vue",percent:25,color:"#41b883"},{name:"Webpack",percent:20,color:"#1c78c0"}]}},{id:"project",checked:"",name:"Project",icon:"icon-project",data:[{img:u,description:{title:"Homepage built by Vue.js",subtitle:"Highlights",highlights:["Support language switch without losing position in one page.","Scrollbar and language memory."]},source:{name:"Source",url:"https://github.com/xianshenglu/xianshenglu.github.io/tree/master/home"},preview:{name:"Preview",url:"https://xianshenglu.github.io/home/dist/index.html"}},{img:s,description:{title:"ToDoList built by Vue.js",subtitle:"Highlights",highlights:["User's data was saved in localStroage for future use."]},source:{name:"Source",url:"https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc"},preview:{name:"Preview",url:"https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html"}},{img:l,description:{title:"Blog built by Hexo and Next",subtitle:"Highlights",highlights:["Built under custom repository not the default repo like username.github.io "]},source:{name:"Source",url:"https://github.com/xianshenglu/blog"},preview:{name:"Preview",url:"https://xianshenglu.github.io/blog/"}}],more:{name:"More on Github",url:"https://github.com/xianshenglu",icon:"icon-github"}}]}]},h=d;function g(e){return Array.from(document.querySelectorAll(e))}var m={name:"App",components:{Index:function(){return n.e("Index").then(n.bind(null,"86d6"))},UnitLang:function(){return n.e("UnitLang").then(n.bind(null,"6b96"))},Introduction:function(){return n.e("Introduction").then(n.bind(null,"5368"))},Skill:function(){return n.e("Skill").then(n.bind(null,"2c58"))},Project:function(){return n.e("Project").then(n.bind(null,"1766"))},UnitNav:function(){return n.e("UnitNav").then(n.bind(null,"bd42"))},UpgradeButton:function(){return n.e("UpgradeButton").then(n.bind(null,"ffd3"))}},data:function(){return{currentNavId:"index",animationFrameId:1,authorData:h,isUpgradeReady:!1}},computed:{sections:function(){return this.authorData.langs.find((function(e){return"checked"===e.checked})).sections}},beforeCreate:function(){h.langs[1].checked="checked"},created:function(){this.langBackToLast(),this.listenServiceWorkerRegistrationEvents()},destroyed:function(){this.removeServiceWorkerRegistrationEvents()},mounted:function(){this.$nextTick((function(){this.scrollToLastPos(),window.addEventListener("scroll",this.scrollHandlerGlobal,{capture:!0},!0)}))},methods:{listenServiceWorkerRegistrationEvents:function(){var e=this;navigator.serviceWorker.getRegistration().then((function(t){null!==t&&t.addEventListener("updatefound",e.onServiceWorkerMsg)}))},removeServiceWorkerRegistrationEvents:function(){var e=this;navigator.serviceWorker.getRegistration().then((function(t){null!==t&&t.removeEventListener("updatefound",e.onServiceWorkerMsg)}))},onServiceWorkerMsg:function(e){this.isUpgradeReady=!0},closest:function(e,t){var n=g(t);while("html"!==e.tagName.toLowerCase()){if(n.includes(e))return e;e=e.parentNode}},smoothScoll:function(e){var t=this,n=.1,i=0,o=2e3;function r(a){i=i||a;var c=a-i,l=e-g("html")[0].scrollTop,u=n*l;switch(Math.ceil(u)){case 0:u=-1;break;case 1:u=1;break}0!==l&&c<o&&(window.scrollTo(0,g("html")[0].scrollTop+u),t.animationFrameId=window.requestAnimationFrame(r))}window.cancelAnimationFrame(t.animationFrameId),t.animationFrameId=window.requestAnimationFrame(r)},findSection:function(e){return this.sections.find((function(t){return t.id===e}))},langClear:function(){this.authorData.langs.forEach((function(e){e.checked=""}))},langBackToLast:function(){var e=localStorage.getItem("lang");e&&(this.langClear(),this.authorData.langs.find((function(t){return t.id===e})).checked="checked")},langChangeHandler:function(e){this.langClear();var t=e.target.getAttribute("data-preferred-lang-id");localStorage.setItem("lang",t);var n=this.authorData.langs.find((function(e){return e.id===t}));n.checked="checked",this.syncNavBetweenLangs()},syncNavBetweenLangs:function(){var e=this;this.navClear(),this.sections.find((function(t){return t.id===e.currentNavId})).checked="checked"},navClear:function(){this.sections.forEach((function(e){e.checked=""}))},navUpdate:function(e){this.currentNavId=e,this.sections.find((function(t){return t.id===e})).checked="checked"},navChangeHandler:function(e){this.navClear();var t=this.closest(e.target,"[data-target-nav-id]").getAttribute("data-target-nav-id");this.navUpdate(t);var n=g("#"+t)[0].getBoundingClientRect().top+g("html")[0].scrollTop;this.smoothScoll(n)},scrollHandlerGlobal:function(){localStorage.setItem("currentHtmlScrollTop",g("html")[0].scrollTop),this.scrollHandlerForSkill(),this.scrollHandlerForNav()},scrollHandlerForSkill:function(){var e=g("#skill")[0].getBoundingClientRect().top,t=g("html")[0].clientHeight,n=Boolean(e>=-t/1.3&&e<=t/2);function i(e){var t=Array.from(document.querySelectorAll("circle[data-percent]"));t.forEach((function(t){var n=t.getAttribute("data-percent"),i=t.getAttribute("data-stroke");t.style.strokeDasharray=e?n+" 100":"",t.style.stroke=i,t.parentNode.parentNode.style.color=i}))}i(n)},scrollHandlerForNav:function(){this.navClear();var e=Math.min(Math.round(g("html")[0].scrollTop/g("html")[0].clientHeight),3);this.currentNavId=this.sections[e].id,this.sections[e].checked="checked"},scrollToLastPos:function(){var e=Number(localStorage.getItem("currentHtmlScrollTop"));e?g("html")[0].scrollTop=e:this.sections[0].checked="checked"}},destoryed:function(){window.removeEventListener("scroll",this.scrollHandlerGlobal,!0)}},p=m,f=(n("034f"),n("2877")),v=Object(f["a"])(p,r,a,!1,null,null,null),b=v.exports,k=(n("b20f"),n("1d3a")),w=n.n(k);o.a.prototype.$lazyLoadVm=new w.a({elements_selector:".lazy"}),o.a.config.productionTip=!1,new o.a({render:function(e){return e(b)}}).$mount("#app")},8370:function(e,t,n){e.exports=n.p+"img/homepage.03a081e3.gif"},"85ec":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},b20f:function(e,t,n){},c837:function(e,t,n){e.exports=n.p+"img/avator.279b0d80.png"},d8f8:function(e,t,n){e.exports=n.p+"img/to-do-mvc.b223dc08.gif"},ed8f:function(e,t,n){e.exports=n.p+"img/blog.8fc8975f.gif"}});
//# sourceMappingURL=app.a8c4f16f.js.map
(function(e){function t(t){for(var o,c,l=t[0],u=t[1],i=t[2],s=0,d=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);v&&v(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={app:0},a=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"90b284f2"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}n[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var v=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3785:function(e,t,r){"use strict";r("4570")},"3b42":function(e,t,r){"use strict";r("d522")},4570:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),n={id:"nav"},a=Object(o["f"])("Home"),c=Object(o["f"])(" | "),l=Object(o["f"])("About");function u(e,t){var r=Object(o["v"])("router-link"),u=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",n,[Object(o["g"])(r,{to:"/"},{default:Object(o["A"])((function(){return[a]})),_:1}),c,Object(o["g"])(r,{to:"/about"},{default:Object(o["A"])((function(){return[l]})),_:1})]),Object(o["g"])(u)],64)}r("3785");const i={};i.render=u;var s=i,v=r("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var d=r("6c02"),p=r("cf05"),f=r.n(p),b={class:"home"},g=Object(o["g"])("img",{alt:"Vue logo",src:f.a},null,-1);function h(e,t,r,n,a,c){var l=Object(o["v"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",b,[g,Object(o["g"])(l,{msg:"Welcome to Your Vue.js App"})])}var j=Object(o["B"])("data-v-30858ce6");Object(o["s"])("data-v-30858ce6");var m={class:"hello"},O=Object(o["e"])('<p data-v-30858ce6> For a guide and recipes on how to configure / customize this project,<br data-v-30858ce6> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>vue-cli documentation</a>. </p><h3 data-v-30858ce6>Installed CLI Plugins</h3><ul data-v-30858ce6><li data-v-30858ce6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-30858ce6>babel</a></li><li data-v-30858ce6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-30858ce6>pwa</a></li><li data-v-30858ce6><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-30858ce6>router</a></li></ul><h3 data-v-30858ce6>Essential Links</h3><ul data-v-30858ce6><li data-v-30858ce6><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>Core Docs</a></li><li data-v-30858ce6><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>Forum</a></li><li data-v-30858ce6><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>Community Chat</a></li><li data-v-30858ce6><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-30858ce6>Twitter</a></li><li data-v-30858ce6><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>News</a></li></ul><h3 data-v-30858ce6>Ecosystem</h3><ul data-v-30858ce6><li data-v-30858ce6><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>vue-router</a></li><li data-v-30858ce6><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>vuex</a></li><li data-v-30858ce6><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-30858ce6>vue-devtools</a></li><li data-v-30858ce6><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-30858ce6>vue-loader</a></li><li data-v-30858ce6><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-30858ce6>awesome-vue</a></li></ul>',7);Object(o["q"])();var k=j((function(e,t,r,n,a,c){return Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("h1",null,Object(o["x"])(r.msg),1),O])})),w={name:"HelloWorld",props:{msg:String}};r("3b42");w.render=k,w.__scopeId="data-v-30858ce6";var y=w,_={name:"Home",components:{HelloWorld:y}};_.render=h;var x=_,P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],A=Object(d["a"])({history:Object(d["b"])("/"),routes:P}),C=A;Object(o["c"])(s).use(C).mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d522:function(e,t,r){}});
//# sourceMappingURL=app.03cbf88f.js.map
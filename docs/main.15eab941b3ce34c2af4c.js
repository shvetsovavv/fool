(()=>{"use strict";var e,t,n={392:(e,t,n)=>{function r(e){e&&e.classList.add("hidden")}function a(e){e&&e.classList.remove("hidden")}function o(e){e&&e.remove()}function c(e,t,n){e.logger&&(n.innerHTML+="object"==typeof t?(JSON&&JSON.stringify?JSON.stringify(t):t)+"<br />":t+"<br />")}function s(e){switch(e.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(e)}}function l(e,t,n){const r=e.location.search,a=new URLSearchParams(r);for(const[e,t]of a)"number"==typeof n[e]?n[e]=parseInt(t,10):"boolean"==typeof n[e]?n[e]=s(t):n[e]=t}n.d(t,{Bk:()=>l,N8:()=>r,cM:()=>c,ew:()=>o,gw:()=>i,hu:()=>d,oX:()=>a});const i=e=>new Promise((t=>setTimeout(t,e)));function d(e,t){if(!e)throw t}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.m=n,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+"."+{749:"fef6493886b7bae9f884",945:"8d1ccfac1dd0f7e53580",970:"232c43694ce9cbaf5836"}[e]+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="fool:",a.l=(n,r,o,c)=>{if(e[n])e[n].push(r);else{var s,l;if(void 0!==o)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=o);var c=a.p+a.u(t),s=new Error;a.l(c,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[c,s,l]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)l(a)}for(t&&t(n);i<c.length;i++)o=c[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkfool=self.webpackChunkfool||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{const e={modes:["net","ai","server"],mode:"net",wsPort:8088,color:"red",logger:!0,networkDebug:!1};var t=a(392);function n(e,t,n,r,a){const o=t.querySelector(".places");o.replaceChildren();const c=t.createElement("ul");c.classList.add("circle-wrapper"),o.appendChild(c);const s=360/a.length;let l=90,i=null;c.addEventListener("click",(function(e){if(e.preventDefault(),e.target&&null!==e.target.dataset.id){if(i)return i.classList.remove("selected"),r.swap(i.dataset.id,e.target.dataset.id),void(i=null);i=e.target,i.classList.add("selected")}}));for(let e=0;e<a.length;++e){const n=t.createElement("li");n.innerText=a[e].name,n.dataset.id=e,n.dataset.angle=l+"deg",n.style.setProperty("--angle-deg",l+"deg"),n.classList.add("circle","clickable"),l+=s,c.appendChild(n)}const d=t.createElement("button");d.classList.add("start-button","clickable"),d.addEventListener("click",(function(e){e.preventDefault(),o.replaceChildren(),r.onSeatsFinished()})),o.appendChild(d)}function r(e){}const o={shuffle:r,deal:r,draw:r,discard:r,move:r,clearPlayer:r},c=7;let s=0,l=1,i=[],d=null,u=null;function f(e,t){return(s+(e+1)*l+t)%t}function p(){return u}function h(e){let t;if(e%14==13)return"black";switch(Math.floor(e/14)){case 0:case 4:t="red";break;case 1:case 5:t="yellow";break;case 2:case 6:t="green";break;case 3:case 7:t="blue"}return t}function m(e){switch(e%14){case 10:return"Skip";case 11:return"Reverse";case 12:return"Draw2";case 13:return Math.floor(e/14)>=4?"Draw4":"Wild";default:return"Number "+e%14}}function g(e){let t;switch(e%14){case 10:case 11:case 12:t=20;break;case 13:t=50;break;default:t=e%14}return t}async function y(){const e=function(){let e=[...Array(112).keys()];return e.splice(56,1),e.splice(69,1),e.splice(82,1),e.splice(95,1),e}();return function(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}(e),await o.shuffle(),{deal:function(){return e.pop()}}}function w(e){const t=i.length;i.push(function(e,t){const n=e,r=t,a=[];return{getName:()=>n,addCard:e=>{a.push(e)},pile:()=>[...a],getIndex:()=>r,cleanHand:async()=>{a.length=0,await o.clearPlayer(r)}}}(e,t))}async function v(e,t){const n=e.deal();return i[t].addCard(n),await o.draw(t,n),n}function b(e,t){o[e]=t}function S(){return{[Symbol.iterator](){let e=0;return{next:()=>e>=i.length?{done:!0,value:e}:{done:!1,value:i[e++]},return:()=>({done:!0})}}}}function C(){return i.length}function k(){return s}async function L(){d=await y();let e=[...i];for(;e.length>1;){const t=e.length;let n=new Array(t),r=0;for(let a=0;a<t;a++){const o=f(a,t),c=g(await v(d,e[o].getIndex()));n[o]=c,r=Math.max(r,c)}const a=[];for(let o=0;o<t;o++)n[o]===r&&a.push(e[o]);e=a}e.length>=1&&(s=e[0].getIndex())}async function E(){await async function(){u=null;for(const e of i)await e.cleanHand();d=await y()}();for(let e=0;e<c;++e){const e=i.length;for(let t=0;t<e;t++){const n=f(t,e);await v(d,i[n].getIndex())}}!async function(e){const t=e.deal();u=t,await o.discard(t)}(d)}function P(){return{chooseDealer:L,deal:E,getPlayerIterator:S,addPlayer:w,size:C,on:b,dealToPlayer:v,cardScore:g,cardColor:h,cardType:m,getDealer:k,getCardOnBoard:p}}let q=[];function x(e,t){const n=t.content.cloneNode(!0).firstElementChild;return n.style.setProperty("--sprite-x",1400-e%14*100+"%"),n.style.setProperty("--sprite-y",800-100*Math.floor(e/14)+"%"),n}function N(e,t,n){const r=e.createElement("ul"),a=e.querySelector("#card");r.classList.add("hand");for(const e of n)r.appendChild(x(e,a));t.appendChild(r)}function T(e,t,n){const r=t.querySelector(".places");r.replaceChildren();const a=t.createElement("ul");a.classList.add("circle-wrapper"),r.appendChild(a);const o=360/n.size();let c=90;const s=n.getPlayerIterator();let l=0;for(const e of s){const n=t.createElement("li"),r=t.createElement("span");r.innerText=e.getName(),n.appendChild(r),N(t,n,e.pile()),n.dataset.id=l,n.dataset.angle=c+"deg",n.style.setProperty("--angle-deg",c+"deg"),n.classList.add("circle"),c+=o,a.appendChild(n),++l}D(e,t,n.getCardOnBoard())}function D(e,t,n){const r=t.querySelector(".places");let a=r.querySelector(".center-pile");a?a.replaceChildren():(a=t.createElement("div"),a.classList.add("center-pile"),r.appendChild(a)),null!==n&&N(t,a,[n])}function j(e,n,r,a,o){const c=P();q=a;for(const e of q)c.addPlayer(e.name);n.querySelector(".hand-cont");return c.on("draw",(async()=>{T(e,n,c),await(0,t.gw)(300)})),c.on("discard",(async e=>{D(0,n,e),await(0,t.gw)(300)})),c.on("shuffle",(async()=>{T(e,n,c),await(0,t.gw)(300)})),c.on("deal",(()=>{})),{chooseDealer:async function(){return await c.chooseDealer()},deal:async function(){return await c.deal()},draw:async function(e){return await c.deal()},start:function(){}}}function O(e){}const I={move:O,gameover:O,username:O,start:O,swap:O,"uno-start":O};let M=[];function A(e,r,a){function o(e,t){I[e]=t}const c=()=>{I.start(M)},s=r.querySelector(".start");s&&s.addEventListener("click",c);const l=async e=>{await e.chooseDealer(),await(0,t.gw)(1e3),await e.deal(),await e.start()},i=async()=>{c();const t=j(e,r,0,M);await l(t)};return o("onSeatsFinished",i),{on:o,onChange:function(e){},join:(e,t,a)=>{M[e]={name:t,external_id:a},n(0,r,0,I,M)},start:c,onConnect:()=>{!function(e,t,n,r){const a=t.querySelector(".name-form-cont"),o=t.querySelector("#nameform").content.cloneNode(!0).firstElementChild;a.replaceChildren(o);const c=t.querySelector(".nameform"),s=t.querySelector(".nameinput"),l=t.querySelector(".container");let i=e.sessionStorage.getItem("username");function d(e){r.username(e),c.classList.add("hidden"),l.classList.remove("hidden")}"net"==n.mode&&l.classList.add("hidden"),i&&d(i),c.addEventListener("submit",(function(t){t.preventDefault(),e.sessionStorage.setItem("username",s.value),d(s.value)}))}(e,r,a,I)},swap:(e,t)=>{const a=M[e];M[e]=M[t],M[t]=a,n(0,r,0,I,M)},onStart:t=>{M=t;j(e,r,0,M)},main:l,afterAllJoined:i}}"serviceWorker"in navigator&&(navigator.serviceWorker.register("./sw.js",{scope:"./"}),function(e,n){const r=n.querySelector(".butInstall");let a;r.addEventListener("click",(e=>{e.preventDefault(),(0,t.N8)(r),a.prompt(),a.userChoice.then((e=>{}))})),e.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),a=e,(0,t.oX)(r)}))}(window,document)),function(n,r){(0,t.Bk)(n,r,e),"net"===e.mode?a.e(970).then(a.bind(a,970)).then((t=>{t.default(n,r,e,A)})):"server"===e.mode?a.e(749).then(a.bind(a,749)).then((t=>{t.default(n,r,e,A)})):"ai"===e.mode?a.e(945).then(a.bind(a,945)).then((t=>{t.default(n,r,e,A)})):(0,t.hu)(!1,"Unsupported mode")}(window,document)})()})();
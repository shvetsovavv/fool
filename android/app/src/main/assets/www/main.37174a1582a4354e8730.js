(()=>{"use strict";var e,t,n={392:(e,t,n)=>{function r(e){e&&e.remove()}function a(e,t,n){e.logger&&(n.innerHTML+="object"==typeof t?(JSON&&JSON.stringify?JSON.stringify(t):t)+"<br />":t+"<br />")}function o(e){switch(e.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(e)}}function c(e,t,n){const r=e.location.search,a=new URLSearchParams(r);for(const[e,t]of a)"number"==typeof n[e]?n[e]=parseInt(t,10):"boolean"==typeof n[e]?n[e]=o(t):n[e]=t}n.d(t,{Bk:()=>c,cM:()=>a,ew:()=>r,gw:()=>s,hu:()=>l});const s=e=>new Promise((t=>setTimeout(t,e)));function l(e,t){if(!e)throw t}},971:(e,t,n)=>{function r(e,t,n,r){const a=t.querySelector(".name-form-cont"),o=e.sessionStorage.getItem("username");if(o)return a.replaceChildren(),void(r&&r.username(o));if(a.childElementCount>0)return;const c=t.querySelector("#nameform").content.cloneNode(!0).firstElementChild;a.replaceChildren(c);const s=t.querySelector(".nameform"),l=t.querySelector(".nameinput"),i=t.querySelector(".container");"net"==n.mode&&i.classList.add("hidden"),s.addEventListener("submit",(function(t){var n;t.preventDefault(),e.sessionStorage.setItem("username",l.value),n=l.value,r&&r.username(n),s.classList.add("hidden"),i.classList.remove("hidden"),a.replaceChildren()}))}n.d(t,{Z:()=>r})}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.m=n,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+"."+{297:"19f6941c4105feaf1765",671:"efeced70ac821144d4ff",945:"add71c02a034bbd2d03f",970:"a02f50d3eeccec54e4b9"}[e]+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="fool:",a.l=(n,r,o,c)=>{if(e[n])e[n].push(r);else{var s,l;if(void 0!==o)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=o);var c=a.p+a.u(t),s=new Error;a.l(c,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[c,s,l]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)l(a)}for(t&&t(n);i<c.length;i++)o=c[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkfool=self.webpackChunkfool||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{const e={modes:["net","ai","server"],mode:"net",wsPort:8088,logger:!0,networkDebug:!0,cardsDeal:7,maxScore:500,showAll:!1,clickAll:!1,show:!0,externalId:"server",colorOrder:["red","yellow","green","blue","black"],sortByColor:"",seed:""};var t=a(971);function n(e,t,n,r,a){const o=t.querySelector(".places");o.replaceChildren();const c=t.createElement("ul");c.classList.add("circle-wrapper"),o.appendChild(c);const s=360/a.length;let l=90,i=null;c.addEventListener("click",(function(e){if(e.preventDefault(),e.target&&null!=e.target.dataset.id){if(i)return i.classList.remove("selected"),r.swap(i.dataset.id,e.target.dataset.id),void(i=null);i=e.target,i.classList.add("selected")}}));for(let e=0;e<a.length;++e){if(null==a[e]){l+=s;continue}const n=t.createElement("li");n.innerText=a[e].name,n.dataset.id=e,n.dataset.angle=l+"deg",n.style.setProperty("--angle-deg",l+"deg"),n.classList.add("circle","clickable"),l+=s,c.appendChild(n)}const d=t.createElement("button");d.textContent="Start",d.classList.add("start-button","clickable"),d.addEventListener("click",(function(e){e.preventDefault(),o.replaceChildren(),r.onSeatsFinished()})),o.appendChild(d)}var r=a(392);function o(e,t){for(let n=e.length-1;n>0;n--){const r=Math.floor(t()*(n+1)),a=e[n];e[n]=e[r],e[r]=a}}function c(e,t,n){let r=e;return{deal:function(){return r.pop()},addCardAndShuffle:async function(e){!function(e){r.push(e)}(e),o(r,n),await t.shuffle(r)},setDeck:function(e){r=e},checkTop:function(e){const t=r.at(-1)===e;return t}}}const s={newShuffledDeck:async function(e,t){let n=function(){const e=[...Array(112).keys()];return e.splice(56,1),e.splice(69,1),e.splice(82,1),e.splice(95,1),e}();return o(n,t),await e.shuffle(n),c(n,e,t)},newExternalDeck:c},l=["red","yellow","green","blue"];Object.freeze(l);function i(e){let t;if(e%14==13)return"black";switch(Math.floor(e/14)){case 0:case 4:t="red";break;case 1:case 5:t="yellow";break;case 2:case 6:t="green";break;case 3:case 7:t="blue"}return t}function d(e){switch(e%14){case 10:return"Skip";case 11:return"Reverse";case 12:return"Draw2";case 13:return Math.floor(e/14)>=4?"Draw4":"Wild";default:return"Number "+e%14}}function u(e){let t;switch(e%14){case 10:case 11:case 12:t=20;break;case 13:t=50;break;default:t=e%14}return t}const f={GOOD_COLORS:l,GameStage:Object.freeze({chooseDealer:1,dealing:2,round:3,gameOver:4}),cardColor:i,cardType:d,cardScore:u,sortByTemplate:function(e,t,n){e.sort(((e,r)=>{const a=i(e),o=i(r);if(a===o)return"asc"===t?u(e)-u(r):u(r)-u(e);for(const e of n){if(e===a)return"asc"===t?-1:1;if(e===o)return"asc"===t?1:-1}}))},pileHasColor:function(e,t){return null!=e.find((e=>i(e)===t))},cardToString:function(e){return i(e)+" "+d(e)}};function p(e){}function h(e){}function y(e,t){(0,r.hu)(e,t)}const w={shuffle:h,deal:h,draw:h,discard:h,move:h,clearPlayer:h,changeCurrent:h,changeDealer:h,gameover:h,roundover:h,pass:p,drawExternal:p,moveExternal:p,chooseColor:T};let m=500,g=0,C=0,v=[],b=null,x=!0,S=null,E=[],D=null,L=null,k=0,P=0,O=!0;function T(){return L}function I(){return C}function N(e,t){return y(t>0,"Bad usage"),(e+C+t)%t}function q(e,t){return(g+(e+1)*C+t)%t}function B(){return S}function A(e){if(!e)return!1;const t=v.length;return v.push(function(e,t){const n=e,r=t,a=[];let o=0;return{getName:()=>n,addCard:e=>a.push(e),pile:()=>[...a],getIndex:()=>r,cleanHand:()=>{a.length=0},removeCard:e=>{const t=a.indexOf(e);return t<0||a.splice(t,1),t},updateScore:e=>{o+=e},getScore:()=>o,setScore:e=>{o=e},hasColor:e=>f.pileHasColor(a,e),hasCard:e=>a.includes(e)}}(e,t)),!0}async function M(e,t,n){const r=e.deal();return v[t].addCard(r),n?await async function(e,...t){const n=w[e];if("function"==typeof n)return await n(...t)}("drawExternal",{playerIndex:t,card:r}):await w.draw({playerIndex:t,card:r}),r}async function j(e,t){if(!b.checkTop(t))return;await M(b,e,!0);return k++,!0}async function R(e){if(e!==D)return;if(O)return!1;if(k>0)return;k++;await M(b,D);return!0}async function H(e){if(e===D){if(O)return!1;if(0!=k)return await re(),await w.pass({playerIndex:e}),!0}}async function _(e,t,n){const r=await async function(e,t,n){const r=await async function(e,t,n){if(e!==D)return!1;if(!V().hasCard(t))return!1;if(!f.GOOD_COLORS.includes(n))return!1;if(O)return!1;if(P>0)return!1;if("Wild"===f.cardType(t))return!0;if("Draw4"===f.cardType(t))return!V().hasColor(L);if(f.cardColor(t)!==n)return!1;if(f.cardColor(t)===L)return!0;if(f.cardType(t)===f.cardType(S))return!0;return!1}(e,t,n);r&&(v[e].removeCard(t),S=t,E.push(t),L=n,++P,await w.moveExternal({playerIndex:e,card:t,currentColor:L}),x&&(await K(t,D),await ee(e)));return r}(e,t,n);return r}async function G(e){if(!b.checkTop(e))return;y(b.deal()===e,"Different cards"),S=e,await w.discard(e);const t=f.cardColor(e);"black"!==t&&(E.push(e),L=t)}function z(e,t){w[e]=t}function F(){return{[Symbol.iterator](){let e=0;return{next:()=>e>=v.length?{done:!0,value:e}:{done:!1,value:v[e++]},return:()=>({done:!0})}}}}function J(){return v.length}function W(){return g}function $(){return D}async function U(e){S=null,E=[],v[e].cleanHand(),await w.clearPlayer(e)}function Z(){D=N(D,v.length),k=0,P=0}async function K(e,t){const n=f.cardType(e);if("Reverse"===n&&(C*=-1,2===v.length&&Z()),"Skip"===n&&Z(),"Draw2"===n){Z();for(let e=0;e<2;++e)await M(b,D)}if("Draw4"===n){Z();for(let e=0;e<4;++e)await M(b,D)}await re()}async function Q(e,t){await async function(e){S=null,E=[];for(const e of v)e.cleanHand(),await w.clearPlayer(e.getIndex());b=await s.newShuffledDeck(w,e)}(t);for(let t=0;t<e;++t){const e=v.length;for(let t=0;t<e;t++){const n=q(t,e),r=v[n].getIndex();await M(b,r)}}const n=await async function(e){O=!1,D=g,await w.changeCurrent({currentPlayer:D,dealer:g,direction:C});let t=e.deal();for(S=t,await w.discard(t);"black"===f.cardColor(t);)S=null,await e.addCardAndShuffle(t),t=e.deal(),S=t,await w.discard(t);return E.push(t),L=f.cardColor(t),t}(b);await K(n)}function V(){return v[D]}async function X(e,t){if(e!==D)return!1;if(!V().hasCard(t))return!1;if(O)return!1;if(P>0)return!1;if("Wild"===f.cardType(t)){const t=await w.chooseColor(e);return!!f.GOOD_COLORS.includes(t)&&(L=t,!0)}if("Draw4"===f.cardType(t)){if(V().hasColor(L))return!1;const t=await w.chooseColor(e);return!!f.GOOD_COLORS.includes(t)&&(L=t,!0)}return f.cardColor(t)===L||f.cardType(t)===f.cardType(S)}async function Y(e,t){const n=await X(e,t);if(n){v[e].removeCard(t),S=t,E.push(t);const n=f.cardColor(t);"black"!=n&&(L=n),++P,await w.move({playerIndex:e,card:t,currentColor:L}),x&&(await K(t),await ee(e))}return n}async function ee(e){const t=v[e];if(0===t.pile().length){O=!0;const n=function(){let e=0;const t=F();for(const n of t)for(const t of n.pile())e+=f.cardScore(t);return e}();t.updateScore(n),t.getScore()>=m?await w.gameover({playerIndex:e,score:t.getScore(),diff:n}):await w.roundover({playerIndex:e,score:t.getScore(),diff:n})}}async function te(e){const t=v[e.playerIndex],n=t.getScore();k=0,P=0,O=!1,e.score==n+e.diff&&t.setScore(e.score)}function ne(e){return e==D&&re()}async function re(){return Z(),k=0,P=0,await w.changeCurrent({currentPlayer:D,dealer:g,direction:C}),!0}async function ae(){return C=1,g=N(g,v.length),D=g,O=!1,k=0,P=0,await w.changeCurrent({currentPlayer:D,dealer:g,direction:C})}async function oe(){if(O)return!1;k>0?await re():(k++,await M(b,D))}function ce(e,t,n){k=0,P=0,null!=t&&(g=t,O=!1),null!=n&&(C=n),D=e}function se(){return{currentPlayer:D,dealer:g,currentColor:L,cardOnBoard:S,color:f.cardColor(S),type:f.cardType(S)}}function le(e,t){return m=500,g=0,C=1,v=[],b=null,x=!0,S=null,E=[],D=null,L=null,k=0,P=0,O=!0,e.maxScore&&(m=e.maxScore),{chooseDealer:function(){return async function(e){b=await s.newShuffledDeck(w,e);let t=[...v];for(;t.length>1;){const e=t.length;let n=new Array(e),r=0;for(let a=0;a<e;a++){const o=q(a,e);D=t[o].getIndex();const c=await M(b,D),s=f.cardScore(c);n[o]=s,r=Math.max(r,s)}const a=[];for(let o=0;o<e;o++)n[o]===r&&a.push(t[o]);t=a}t.length>=1&&(g=t[0].getIndex()),D=g,await w.changeCurrent({currentPlayer:D,dealer:g,direction:C})}(t)},deal:function(){return Q(e.cardsDeal,t)},getPlayerIterator:F,addPlayer:A,size:J,on:z,getDealer:W,getCurrentPlayer:$,getCardOnBoard:B,tryMove:X,moveToDiscard:Y,drawCurrent:oe,setDeck:function(e){x=!1,null==b?b=s.newExternalDeck(e,w,t):b.setDeck(e)},onDraw:j,onMove:_,onDiscard:G,setCurrent:ce,cleanHand:U,nextDealer:ae,onDrawPlayer:R,pass:H,getCurrentColor:T,getDirection:I,state:se,onNewRound:te,onPass:ne}}function ie(e,t,n,r){return n.on("chooseColor",(()=>function(e,t){return new Promise((n=>{t.inColorChoose=!0;const r=e.querySelector(".color-picker-holder");r.replaceChildren();const a=e.createElement("ul");a.classList.add("color-grid"),r.appendChild(a);for(const o of f.GOOD_COLORS){const c=e.createElement("li");c.classList.add(o),c.addEventListener("click",(e=>{e.preventDefault(),r.replaceChildren(),t.inColorChoose=!1,n(o)})),a.appendChild(c)}const o=e.createElement("li");o.classList.add("cancel-color"),o.addEventListener("click",(e=>{e.preventDefault(),r.replaceChildren(),t.inColorChoose=!1,n("black")})),a.appendChild(o)}))}(t,r))),{}}function de(e,t){const n=t.content.cloneNode(!0).firstElementChild;return n.style.setProperty("--sprite-x",1400-e%14*100+"%"),n.style.setProperty("--sprite-y",800-100*Math.floor(e/14)+"%"),n.dataset.card=e,n}function ue(e,t,n,r,a){const o=e.createElement("ul"),c=e.querySelector("#card");o.classList.add("hand"),a&&a.sortByColor&&f.sortByTemplate(n,a.sortByColor,a.colorOrder);for(const e of n)o.appendChild(de(e,c));t.appendChild(o)}function fe(e,t,n,r,a,o){const c=t.querySelector(".places");let s=c.querySelector(".center-pile");s?s.replaceChildren():(s=t.createElement("div"),s.classList.add("center-pile"),c.appendChild(s)),null!==n&&function(e,t,n,r,a,o){const c=e.createElement("ul"),s=e.querySelector("#card");c.classList.add("hand"),c.appendChild(de(n,s));const l=e.querySelector("#back").content.cloneNode(!0).firstElementChild;c.appendChild(l),l.addEventListener("click",(async e=>{e.preventDefault(),"ai"===a?await r.drawCurrent():null==await r.onDrawPlayer(o)&&await r.pass(o)})),t.appendChild(c)}(t,s,n,r,a,o)}function pe(e){const t={green:"rgba(85, 170, 85, 0.4)",red:"rgba(255, 85, 85, 0.4)",yellow:"rgba(255, 170, 0, 0.4)",blue:"rgba(85, 85, 255, 0.4)"}[e];return null!=t?t:"aliceblue"}function he(e,t,n,r,a){const o=t.documentElement;o.style.setProperty("--card-width","50px"),o.style.setProperty("--current-color",pe(n.getCurrentColor()));const c=t.querySelector(".places");c.replaceChildren();const s=t.createElement("ul");s.classList.add("circle-wrapper"),c.appendChild(s);const l=360/n.size(),i=n.getPlayerIterator();let d=0;const u=n.getDealer(),f=n.getCurrentPlayer();let p=null;for(const e of i){if(d===r){p=e,++d;continue}const n=90+l*(d-r),o=t.createElement("li");if(a.show)ue(t,o,e.pile(),0,a);else{const n=t.createElement("div");n.innerText=e.pile().length,n.classList.add("card-count"),o.appendChild(n)}const c=t.createElement("div");c.classList.add("player-name"),c.innerText=e.getName(),o.appendChild(c);const i=e.getScore();if(i>0){const e=t.createElement("div");e.innerText=i,o.appendChild(e)}o.dataset.id=d,o.dataset.angle=n+"deg",o.style.setProperty("--angle-deg",n+"deg"),o.classList.add("circle"),f===d&&o.classList.add("current-player"),u===d&&o.classList.add("dealer"),++d,s.appendChild(o)}fe(0,t,n.getCardOnBoard(),n,"net",r),function(e,t,n,r,a,o,c){const s=t.createElement("div");s.classList.add("my-hand");const l=t.createElement("div");l.classList.add("row");const i=t.createElement("span");i.innerText=a.getName(),i.classList.add("player-name"),l.appendChild(i);const d=a.getScore();if(d>0){const e=t.createElement("span");e.innerText=d,l.appendChild(e)}!function(e,t,n,r){if(2===e||0===t)return;const a=r.createElement("span");a.classList.add("sprite-container");const o=r.createElement("div");o.classList.add("direction"),1===t&&o.classList.add("mirror"),a.appendChild(o),n.appendChild(a)}(n.size(),n.getDirection(),l,t),s.appendChild(l),s.dataset.id=r,n.getCurrentPlayer()===r&&s.classList.add("current-player"),n.getDealer()===r&&s.classList.add("dealer"),ue(t,s,a.pile(),0,c),s.addEventListener("click",(async e=>{e.preventDefault();const t=e.target.parentElement;if(t&&t.classList.contains("card")){const e=parseInt(t.dataset.card);await n.moveToDiscard(r,e)}})),o.appendChild(s)}(0,t,n,r,p,c,a)}const ye={drawCenter:fe,drawPlayers:function(e,t,n,r,a,o){a.clickAll?function(e,t,n,r,a,o){const c=t.documentElement;c.style.setProperty("--card-width","30px"),c.style.setProperty("--current-color",pe(n.getCurrentColor()));const s=t.querySelector(".places");s.replaceChildren();const l=t.createElement("ul");l.classList.add("circle-wrapper"),s.appendChild(l);const i=360/n.size(),d=n.getPlayerIterator();let u=0;const f=n.getDealer(),p=n.getCurrentPlayer();for(const e of d){const n=90+i*(u-r),o=t.createElement("li"),c=t.createElement("span");c.innerText=e.getName(),c.classList.add("player-name"),o.appendChild(c);const s=e.getScore();if(s>0){const e=t.createElement("span");e.innerText=s,o.appendChild(e)}ue(t,o,e.pile(),0,a),o.dataset.id=u,o.dataset.angle=n+"deg",o.style.setProperty("--angle-deg",n+"deg"),o.classList.add("circle"),f===u&&o.classList.add("dealer"),p===u&&o.classList.add("current-player"),l.appendChild(o),++u}fe(0,t,n.getCardOnBoard(),n,"ai",r),l.addEventListener("click",(async e=>{e.preventDefault();const t=e.target.parentElement;if(t&&t.classList.contains("card")){const e=t.parentElement.parentElement,r=parseInt(t.dataset.card),a=parseInt(e.dataset.id);await n.moveToDiscard(a,r)}}))}(0,t,n,r,a):he(0,t,n,r,a)},drawLayout:he};function we(e,t,n){let r=n&&n.state;r&&("object"==typeof r&&t.copy(r,t),e.state=()=>t.copy(t,{}))}class me{constructor(e){null==e&&(e=+new Date);let t=4022871197;function n(e){e=String(e);for(let n=0;n<e.length;n++){t+=e.charCodeAt(n);let r=.02519603282416938*t;t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return 2.3283064365386963e-10*(t>>>0)}this.c=1,this.s0=n(" "),this.s1=n(" "),this.s2=n(" "),this.s0-=n(e),this.s0<0&&(this.s0+=1),this.s1-=n(e),this.s1<0&&(this.s1+=1),this.s2-=n(e),this.s2<0&&(this.s2+=1)}next(){let{c:e,s0:t,s1:n,s2:r}=this,a=2091639*t+2.3283064365386963e-10*e;return this.s0=n,this.s1=r,this.s2=a-(this.c=0|a)}copy(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}}function ge(e,t,n,a,o){let c=function(e,t){let n=new me(e),r=()=>n.next();return r.double=()=>r()+11102230246251565e-32*(2097152*r()|0),r.int32=()=>4294967296*n.next()|0,r.quick=r,we(r,n,t),r}(n.seed);const s=le(n,c);let l=0,i=0;function d(r){ye.drawPlayers(e,t,s,i,n,r)}for(const e of a)s.addPlayer(e.name),e.external_id==n.externalId&&(i=l),++l;function u(e,n){const r=t.getElementsByClassName("overlay")[0],a=t.getElementsByClassName("close")[0],o=t.getElementsByClassName("install")[0];a.addEventListener("click",(function(e){e.preventDefault(),r.classList.remove("show")}),!1);r.querySelector("h2").textContent=e;r.querySelector(".content").textContent=n,r.classList.add("show"),o.classList.remove("hidden2")}return s.on("draw",(async({playerIndex:e,card:t})=>{d("draw");const a=Date.now();e!==i&&"server"!==n.mode||await o.draw({playerIndex:e,card:t});const c=Date.now();await(0,r.gw)(150-c+a)})),s.on("drawExternal",(async({playerIndex:e,card:t})=>{d("drawExternal");const a=Date.now();"server"===n.mode&&await o.draw({playerIndex:e,card:t});const c=Date.now();await(0,r.gw)(200-c+a)})),s.on("changeCurrent",(async({currentPlayer:e,dealer:t,direction:a})=>{d("changeCurrent"),"server"===n.mode&&await o.changeCurrent({currentPlayer:e,dealer:t,myIndex:i,direction:a}),await(0,r.gw)(50)})),s.on("pass",(async({playerIndex:e})=>{await o.pass({playerIndex:e,myIndex:i})})),s.on("move",(async e=>{d("move"),e.playerIndex!==i&&"server"!==n.mode||await o.move(e),await(0,r.gw)(30)})),s.on("moveExternal",(async e=>{d("moveExternal"),"server"===n.mode&&await o.move(e),await(0,r.gw)(30)})),s.on("discard",(async e=>{d("discard"),await o.discard(e),await(0,r.gw)(30)})),s.on("shuffle",(async e=>{d("shuffle"),await o.shuffle(e),await(0,r.gw)(300)})),s.on("deal",(()=>{})),s.on("gameover",(async e=>{d();u(a[e.playerIndex].name+" wins","with score "+e.score),await o.gameover(e)})),s.on("clearPlayer",(async e=>{await o.clearPlayer(e)})),ie(0,t,s,{inColorChoose:!1,inExternalMove:!1}),s.on("roundover",(async e=>{"net"!==n.mode?(await o.roundover(e),await(0,r.gw)(300),await s.nextDealer(),await s.deal()):d()})),{start:async function(){await s.chooseDealer(),await(0,r.gw)(1e3),n.showAll?n.show=!0:n.show=!1,await s.deal()},onShuffle:async function(r){await s.setDeck(r),ye.drawPlayers(e,t,s,i,n)},onDraw:function(e,t){return s.onDraw(e,t)},onDiscard:function(e){return s.onDiscard(e)},onChangeCurrent:async function(e){s.getCurrentPlayer()!==e.myIndex&&"server"==n.mode||(n.showAll?n.show=!0:n.show=!1,s.setCurrent(e.currentPlayer,e.dealer,e.direction),d())},onClearHand:async function(e){await s.cleanHand(e),d()},onMove:function(e){return s.onMove(e.playerIndex,e.card,e.currentColor)},onNewRound:async function(e){const t=await s.onNewRound(e);return d(),t},onGameOver:async function(e){return d(),u("","with score "+e.score),!0},onPass:function(e){return s.onPass(e.playerIndex)}}}function Ce(e){}function ve(e){}function be(e){let t="";for(const n of e)t+=n.external_id;return t}function xe(e,r,a){const o={move:Ce,moveExternal:Ce,drawExternal:Ce,gameover:Ce,username:Ce,start:ve,swap:ve,pass:ve,"uno-start":ve,shuffle:ve,draw:ve,discard:ve,chooseColor:ve,clearPlayer:Ce,changeCurrent:Ce,roundover:Ce};let c=null,s=[];function l(e,t){o[e]=t}const i=()=>{o.start(s)},d=r.querySelector(".start");d&&d.addEventListener("click",i);const u=async()=>{i(),a.seed||(a.seed=be(s)),c=ge(e,r,a,s,o),await c.start()};l("onSeatsFinished",u);return{on:l,onChange:function(e){if(null!=c)return c.onMove(e)},join:(e,t,a)=>(s[e]={name:t,external_id:a},n(0,r,0,o,s),!0),start:i,onConnect:()=>{(0,t.Z)(e,r,a,o)},swap:(e,t)=>{const a=s[e];s[e]=s[t],s[t]=a,n(0,r,0,o,s)},onStart:t=>{s=t,a.seed=be(s),c=ge(e,r,a,s,o);r.getElementsByClassName("places")[0].classList.remove("connected","loading","flying-cards")},afterAllJoined:u,onShuffle:e=>{if(null!=c)return c.onShuffle(e)},onDraw:(e,t)=>{if(null!=c)return c.onDraw(e,t)},onDiscard:e=>{if(null!=c)return c.onDiscard(e)},onNewRound:e=>{if(null!=c)return c.onNewRound(e)},onChangeCurrent:e=>{if(null!=c)return c.onChangeCurrent(e)},onClearHand:e=>{if(null!=c)return c.onClearHand(e)},onGameOver:e=>{if(null!=c)return c.onGameOver(e)},disconnect:e=>{const t=s.length;s=s.filter((t=>t.external_id!=e));const a=s.length;return n(0,r,0,o,s),t>a},onPass:e=>{if(null!=c)return c.onPass(e)}}}(function(t,n){(0,r.Bk)(t,n,e),"net"===e.mode?a.e(970).then(a.bind(a,970)).then((r=>{r.default(t,n,e,xe).catch((e=>{}))})):"server"===e.mode?a.e(671).then(a.bind(a,671)).then((r=>{r.default(t,n,e,xe)})):"ai"===e.mode?a.e(945).then(a.bind(a,945)).then((r=>{r.default(t,n,e,xe)})):"test"===e.mode?a.e(297).then(a.bind(a,297)).then((r=>{r.default(t,n,e,xe)})):(0,r.hu)(!1,"Unsupported mode")})(window,document)})()})();
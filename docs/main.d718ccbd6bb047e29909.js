(()=>{"use strict";var e,t,n={392:(e,t,n)=>{function r(e){e&&e.classList.add("hidden")}function a(e){e&&e.classList.remove("hidden")}function o(e){e&&e.remove()}function c(e,t,n){e.logger&&(n.innerHTML+="object"==typeof t?(JSON&&JSON.stringify?JSON.stringify(t):t)+"<br />":t+"<br />")}function l(e){switch(e.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(e)}}function s(e,t,n){const r=e.location.search,a=new URLSearchParams(r);for(const[e,t]of a)"number"==typeof n[e]?n[e]=parseInt(t,10):"boolean"==typeof n[e]?n[e]=l(t):n[e]=t}n.d(t,{Bk:()=>s,N8:()=>r,cM:()=>c,ew:()=>o,gw:()=>i,hu:()=>d,oX:()=>a});const i=e=>new Promise((t=>setTimeout(t,e)));function d(e,t){if(!e)throw t}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.m=n,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+"."+{145:"fc3d6ef11723f6bf6352",749:"8051263c340d59ebe46a",945:"b5d30806b8de58ce1389"}[e]+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="fool:",a.l=(n,r,o,c)=>{if(e[n])e[n].push(r);else{var l,s;if(void 0!==o)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[r];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=o);var c=a.p+a.u(t),l=new Error;a.l(c,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,r[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[c,l,s]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)s(a)}for(t&&t(n);i<c.length;i++)o=c[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkfool=self.webpackChunkfool||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{const e={modes:["net","ai","server"],mode:"net",wsPort:8088,logger:!0,networkDebug:!0,cardsDeal:7,maxScore:500,showAll:!0,show:!0,externalId:"server"};function t(e,t,n,r,a){const o=t.querySelector(".places");o.replaceChildren();const c=t.createElement("ul");c.classList.add("circle-wrapper"),o.appendChild(c);const l=360/a.length;let s=90,i=null;c.addEventListener("click",(function(e){if(e.preventDefault(),e.target&&null!==e.target.dataset.id){if(i)return i.classList.remove("selected"),r.swap(i.dataset.id,e.target.dataset.id),void(i=null);i=e.target,i.classList.add("selected")}}));for(let e=0;e<a.length;++e){const n=t.createElement("li");n.innerText=a[e].name,n.dataset.id=e,n.dataset.angle=s+"deg",n.style.setProperty("--angle-deg",s+"deg"),n.classList.add("circle","clickable"),s+=l,c.appendChild(n)}const d=t.createElement("button");d.classList.add("start-button","clickable"),d.addEventListener("click",(function(e){e.preventDefault(),o.replaceChildren(),r.onSeatsFinished()})),o.appendChild(d)}var n=a(392);function r(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}function o(e,t){let n=e;return{deal:function(){return n.pop()},addCardAndShuffle:async function(e){!function(e){n.push(e)}(e),r(n),await t.shuffle(n)},setDeck:function(e){n=e},checkTop:function(e){return n.at(-1)===e}}}const c={newShuffledDeck:async function(e){let t=function(){const e=[...Array(112).keys()];return e.splice(56,1),e.splice(69,1),e.splice(82,1),e.splice(95,1),e}();return r(t),await e.shuffle(t),o(t,e)},newExternalDeck:o};const l={newPlayer:function(e,t,n){const r=e,a=t,o=[];let c=0;return{getName:()=>r,addCard:e=>{o.push(e)},pile:()=>[...o],getIndex:()=>a,cleanHand:async()=>{o.length=0,await n.clearPlayer(a)},removeCard:e=>{const t=o.indexOf(e);return t<0||o.splice(t,1),t},updateScore:e=>{c+=e},getScore:()=>c}}};function s(e){}const i={shuffle:s,deal:s,draw:s,discard:s,move:s,clearPlayer:s,ready:s,changeCurrent:s,changeDealer:s,gameover:s,roundover:s,chooseColor:function(){return v}};let d=7,u=500,f=0,p=1,h=[],w=null,y=null,g=[],m=null,v=null,C=0,b=!1;function S(e,t){return(e+p+t)%t}function k(e,t){return(f+(e+1)*p+t)%t}function D(){return y}const E=["red","yellow","green","blue"];function P(e){let t;if(e%14==13)return"black";switch(Math.floor(e/14)){case 0:case 4:t="red";break;case 1:case 5:t="yellow";break;case 2:case 6:t="green";break;case 3:case 7:t="blue"}return t}function L(e){switch(e%14){case 10:return"Skip";case 11:return"Reverse";case 12:return"Draw2";case 13:return Math.floor(e/14)>=4?"Draw4":"Wild";default:return"Number "+e%14}}function x(e){let t;switch(e%14){case 10:case 11:case 12:t=20;break;case 13:t=50;break;default:t=e%14}return t}function I(e){const t=h.length;h.push(l.newPlayer(e,t,i))}async function T(e,t){const n=e.deal();return h[t].addCard(n),await i.draw({playerIndex:t,card:n}),n}async function q(e,t){if(!w.checkTop(t))return;await T(w,e)}async function N(e,t){const n=await U(e,t);return n}async function M(e){if(!w.checkTop(e))return;w.deal();y=e,await i.discard(e);const t=P(e);"black"!==t&&(g.push(e),v=t)}function A(e,t){i[e]=t}function O(){return{[Symbol.iterator](){let e=0;return{next:()=>e>=h.length?{done:!0,value:e}:{done:!1,value:h[e++]},return:()=>({done:!0})}}}}function j(){return h.length}function H(){return f}function B(){return m}async function _(){w=await c.newShuffledDeck(i);let e=[...h];for(;e.length>1;){const t=e.length;let n=new Array(t),r=0;for(let a=0;a<t;a++){const o=k(a,t),c=x(await T(w,e[o].getIndex()));n[o]=c,r=Math.max(r,c)}const a=[];for(let o=0;o<t;o++)n[o]===r&&a.push(e[o]);e=a}e.length>=1&&(f=e[0].getIndex()),m=f,await i.changeCurrent({currentPlayer:m,dealer:f})}async function F(){y=null,g=[];for(const e of h)await e.cleanHand();w=await c.newShuffledDeck(i)}async function J(e){y=null,g=[],h[e].cleanHand()}function W(){return m=S(m,h.length),X()}async function z(e,t){const n=L(e),r=P(e);if("black"!=r&&(v=r),"Reverse"!==n)if("Skip"!==n)if("Draw2"!==n)if("Draw4"!==n)await X();else{for(let e=0;e<4;++e)await T(w,S(m,h.length));await W()}else{for(let e=0;e<2;++e)await T(w,S(m,h.length));await W()}else await W();else 2===h.length?await W():await(p*=-1,X())}async function R(){await F();for(let e=0;e<d;++e){const e=h.length;for(let t=0;t<e;t++){const n=k(t,e);await T(w,h[n].getIndex())}}const e=await async function(e){let t=e.deal();for(y=t,await i.discard(t);"black"===P(t);)y=null,await e.addCardAndShuffle(t),t=e.deal(),y=t,await i.discard(t);return g.push(t),t}(w);await z(e)}async function $(e,t){if(e!==m)return!1;if(!function(e,t){return h[e].pile().includes(t)}(e,t))return!1;if(b)return!1;if("Wild"===L(t)){const t=await i.chooseColor(e);return!!E.includes(t)&&(v=t,!0)}if("Draw4"===L(t)){if(function(e,t){return h[e].pile().find((e=>P(e)===t))}(e,v))return!1;const t=await i.chooseColor(e);return!!E.includes(t)&&(v=t,!0)}return P(t)==v||L(t)==L(y)}async function U(e,t){const n=await $(e,t);if(n){h[e].removeCard(t);y=t,g.push(t),await i.move({playerIndex:e,card:t,currentColor:v}),await z(t),0===h[e].pile().length&&(b=!0,h[e].updateScore(function(){let e=0;const t=O();for(const n of t)for(const t of n.pile())e+=x(t);return e}()),h[e].getScore()>u?await i.gameover():await i.roundover())}return n}async function X(){return m=S(m,h.length),C=0,await i.changeCurrent({currentPlayer:m,dealer:f})}async function G(){return p=1,f=S(f,h.length),m=f,b=!1,await i.changeCurrent({currentPlayer:m,dealer:f})}async function K(){if(b)return!1;C>0?await X():(C++,await T(w,m))}async function Q(e){null==w?w=c.newExternalDeck(e,i):w.setDeck(e)}function V(e,t){m=e,null!=t&&(f=t)}function Y(e){return e.cardsDeal&&(d=e.cardsDeal),e.maxScore&&(u=e.maxScore),{chooseDealer:_,deal:R,getPlayerIterator:O,addPlayer:I,size:j,on:A,cardScore:x,cardColor:P,cardType:L,getDealer:H,getCurrentPlayer:B,getCardOnBoard:D,tryMove:$,moveToDiscard:U,drawCurrent:K,setDeck:Q,onDraw:q,onMove:N,onDiscard:M,setCurrent:V,cleanAllHands:F,cleanHand:J,nextDealer:G}}const Z=["red","yellow","green","blue"];function ee(e,t,n){return n.on("chooseColor",(()=>function(e){return new Promise(((t,n)=>{const r=e.querySelector(".color-picker-holder");r.replaceChildren();const a=e.createElement("ul");a.classList.add("color-grid"),r.appendChild(a);for(const n of Z){const o=e.createElement("li");o.classList.add(n),o.addEventListener("click",(e=>{e.preventDefault(),r.replaceChildren(),t(n)})),a.appendChild(o)}}))}(t))),{}}function te(e,t){const n=t.content.cloneNode(!0).firstElementChild;return n.style.setProperty("--sprite-x",1400-e%14*100+"%"),n.style.setProperty("--sprite-y",800-100*Math.floor(e/14)+"%"),n.dataset.card=e,n}function ne(e,t,n){const r=e.createElement("ul"),a=e.querySelector("#card");r.classList.add("hand");for(const e of n)r.appendChild(te(e,a));t.appendChild(r)}function re(e,t,n,r){const a=t.querySelector(".places");let o=a.querySelector(".center-pile");o?o.replaceChildren():(o=t.createElement("div"),o.classList.add("center-pile"),a.appendChild(o)),null!==n&&function(e,t,n,r){const a=e.createElement("ul"),o=e.querySelector("#card");a.classList.add("hand"),a.appendChild(te(n,o));const c=e.querySelector("#back").content.cloneNode(!0).firstElementChild;a.appendChild(c),c.addEventListener("click",(async e=>{e.preventDefault(),await r.drawCurrent()})),t.appendChild(a)}(t,o,n,r)}function ae(e,t,n,r){const a=t.querySelector(".places");a.replaceChildren();const o=t.createElement("ul");o.classList.add("circle-wrapper"),a.appendChild(o);const c=360/n.size(),l=n.getPlayerIterator();let s=0;const i=n.getDealer(),d=n.getCurrentPlayer();for(const e of l){const a=90+c*(s-r),l=t.createElement("li"),u=t.createElement("span");u.innerText=e.getName(),l.appendChild(u);const f=e.getScore();if(f>0){const e=t.createElement("span");e.innerText=f,l.appendChild(e)}if(s===r)ne(t,l,e.pile()),l.addEventListener("click",(async e=>{e.preventDefault();const t=e.target.parentElement;if(t&&t.classList.contains("card")){const e=t.parentElement.parentElement,r=parseInt(t.dataset.card),a=parseInt(e.dataset.id);await n.moveToDiscard(a,r)}}));else{const n=t.createElement("div");n.innerText=e.pile().length,l.appendChild(n)}l.dataset.id=s,l.dataset.angle=a+"deg",l.style.setProperty("--angle-deg",a+"deg"),l.classList.add("circle","player-name"),i===s&&l.classList.add("dealer"),d===s&&l.classList.add("current-player"),++s,o.appendChild(l)}re(0,t,n.getCardOnBoard(),n)}const oe={drawCenter:re,drawPlayers:function(e,t,n,r,a){a.show?function(e,t,n,r){const a=t.querySelector(".places");a.replaceChildren();const o=t.createElement("ul");o.classList.add("circle-wrapper"),a.appendChild(o);const c=360/n.size(),l=n.getPlayerIterator();let s=0;const i=n.getDealer(),d=n.getCurrentPlayer();for(const e of l){const n=90+c*(s-r),a=t.createElement("li"),l=t.createElement("span");l.innerText=e.getName(),a.appendChild(l);const u=e.getScore();if(u>0){const e=t.createElement("span");e.innerText=u,a.appendChild(e)}ne(t,a,e.pile()),a.dataset.id=s,a.dataset.angle=n+"deg",a.style.setProperty("--angle-deg",n+"deg"),a.classList.add("circle","player-name"),i===s&&a.classList.add("dealer"),d===s&&a.classList.add("current-player"),o.appendChild(a),++s}re(0,t,n.getCardOnBoard(),n),o.addEventListener("click",(async e=>{e.preventDefault();const t=e.target.parentElement;if(t&&t.classList.contains("card")){const e=t.parentElement.parentElement,r=parseInt(t.dataset.card),a=parseInt(e.dataset.id);await n.moveToDiscard(a,r)}}))}(0,t,n,r):ae(0,t,n,r)},drawLayout:ae};function ce(e,t,r,a,o){const c=Y(r);let l=0,s=0;for(const e of a)c.addPlayer(e.name),e.external_id==r.externalId&&(s=l),++l;t.querySelector(".hand-cont");return c.on("draw",(async({playerIndex:a,card:l})=>{oe.drawPlayers(e,t,c,s,r),await(0,n.gw)(30),a!==s&&"server"!==r.mode||await o.draw({playerIndex:a,card:l})})),c.on("changeCurrent",(async({currentPlayer:a,dealer:l})=>{oe.drawPlayers(e,t,c,s,r),await(0,n.gw)(30),await o.changeCurrent({currentPlayer:a,dealer:l,myIndex:s})})),c.on("move",(async({playerIndex:a,card:l})=>{oe.drawPlayers(e,t,c,s,r),await(0,n.gw)(30),a!==s&&"server"!==r.mode||await o.move({playerIndex:a,card:l})})),c.on("discard",(async r=>{oe.drawCenter(e,t,r,c),await(0,n.gw)(30),await o.discard(r)})),c.on("shuffle",(async a=>{oe.drawPlayers(e,t,c,s,r),await(0,n.gw)(300),await o.shuffle(a)})),c.on("deal",(()=>{})),c.on("gameover",(async()=>{await o.gameover()})),c.on("clearPlayer",(async e=>{await o.clearPlayer(e)})),ee(0,t,c),c.on("roundover",(async()=>{await(0,n.gw)(200),await c.cleanAllHands(),await(0,n.gw)(300),await c.nextDealer(),await c.deal()})),{start:async function(){await c.chooseDealer(),await(0,n.gw)(1e3),r.showAll?r.show=!0:r.show=!1,await c.deal()},onShuffle:async function(n){await c.setDeck(n),oe.drawPlayers(e,t,c,s,r)},onDraw:function(e,t){return c.onDraw(e,t)},onDiscard:function(e){return c.onDiscard(e)},onChangeCurrent:async function({currentPlayer:n,dealer:a,myIndex:o}){c.getCurrentPlayer()!==o&&"server"==r.mode||(c.setCurrent(n,a),oe.drawPlayers(e,t,c,o,r))},onClearHand:async function(n){await c.cleanHand(n),oe.drawPlayers(e,t,c,s,r)},onMove:function(e,t){return c.onMove(e,t)}}}function le(e){}function se(e){}const ie={move:le,gameover:le,username:le,start:se,swap:se,"uno-start":se,shuffle:se,draw:se,discard:se,chooseColor:se,clearPlayer:le,changeCurrent:le};function de(e,n,r){let a=null,o=[];function c(e,t){ie[e]=t}const l=()=>{const e=n.querySelector(".qrcode");e&&(e.innerHTML=""),ie.start(o)},s=n.querySelector(".start");s&&s.addEventListener("click",l);const i=async()=>{l(),a=ce(e,n,r,o,ie),await a.start()};c("onSeatsFinished",i);return{on:c,onChange:function(e,t){if(null!=a)return a.onMove(e,t)},join:(e,r,a)=>{o[e]={name:r,external_id:a},t(0,n,0,ie,o)},start:l,onConnect:()=>{!function(e,t,n,r){const a=t.querySelector(".name-form-cont"),o=t.querySelector("#nameform").content.cloneNode(!0).firstElementChild;a.replaceChildren(o);const c=t.querySelector(".nameform"),l=t.querySelector(".nameinput"),s=t.querySelector(".container");let i=e.sessionStorage.getItem("username");function d(e){r.username(e),c.classList.add("hidden"),s.classList.remove("hidden")}"net"==n.mode&&s.classList.add("hidden"),i&&d(i),c.addEventListener("submit",(function(t){t.preventDefault(),e.sessionStorage.setItem("username",l.value),d(l.value)}))}(e,n,r,ie)},swap:(e,r)=>{const a=o[e];o[e]=o[r],o[r]=a,t(0,n,0,ie,o)},onStart:t=>{o=t,a=ce(e,n,r,o,ie);n.getElementsByClassName("places")[0].style.backgroundColor="blueviolet"},afterAllJoined:i,onShuffle:e=>{if(null!=a)return a.onShuffle(e)},onDraw:(e,t)=>{if(null!=a)return a.onDraw(e,t)},onDiscard:e=>{if(null!=a)return a.onDiscard(e)},onChangeCurrent:e=>{if(null!=a)return a.onChangeCurrent(e)},onClearHand:e=>{if(null!=a)return a.onClearHand(e)},disconnect:e=>{const r=o.length;o=o.filter((t=>t.external_id!=e));const a=o.length;return t(0,n,0,ie,o),r>a}}}"serviceWorker"in navigator&&(navigator.serviceWorker.register("./sw.js",{scope:"./"}),function(e,t){const r=t.querySelector(".butInstall");let a;r.addEventListener("click",(e=>{e.preventDefault(),(0,n.N8)(r),a.prompt(),a.userChoice.then((e=>{}))})),e.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),a=e,(0,n.oX)(r)}))}(window,document)),function(t,r){(0,n.Bk)(t,r,e),"net"===e.mode?a.e(145).then(a.bind(a,145)).then((n=>{n.default(t,r,e,de)})):"server"===e.mode?a.e(749).then(a.bind(a,749)).then((n=>{n.default(t,r,e,de)})):"ai"===e.mode?a.e(945).then(a.bind(a,945)).then((n=>{n.default(t,r,e,de)})):(0,n.hu)(!1,"Unsupported mode")}(window,document)})()})();
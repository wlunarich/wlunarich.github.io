"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1833:(M,f,g)=>{g.d(f,{c:()=>c});var t=g(9533),m=g(2335),u=g(1363);const c=(l,s)=>{let e,n;const r=(o,p,h)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(o,p);_&&s(_)?_!==e&&(a(),i(_,h)):a()},i=(o,p)=>{e=o,n||(n=e);const h=e;(0,t.c)(()=>h.classList.add("ion-activated")),p()},a=(o=!1)=>{if(!e)return;const p=e;(0,t.c)(()=>p.classList.remove("ion-activated")),o&&n!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>r(o.currentX,o.currentY,m.a),onMove:o=>r(o.currentX,o.currentY,m.b),onEnd:()=>{a(!0),(0,m.h)(),n=void 0}})}},7438:(M,f,g)=>{g.d(f,{g:()=>t});const t=(s,e,n,r,i)=>u(s[1],e[1],n[1],r[1],i).map(a=>m(s[0],e[0],n[0],r[0],a)),m=(s,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-s*Math.pow(i-1,3),u=(s,e,n,r,i)=>l((r-=i)-3*(n-=i)+3*(e-=i)-(s-=i),3*n-6*e+3*s,3*e-3*s,s).filter(o=>o>=0&&o<=1),l=(s,e,n,r)=>{if(0===s)return((s,e,n)=>{const r=e*e-4*s*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*s),(-e-Math.sqrt(r))/(2*s)]})(e,n,r);const i=(3*(n/=s)-(e/=s)*e)/3,a=(2*e*e*e-9*e*n+27*(r/=s))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(a/2,.5)-e/3];if(o>0)return[Math.pow(-a/2+Math.sqrt(o),1/3)-Math.pow(a/2+Math.sqrt(o),1/3)-e/3];const p=Math.sqrt(Math.pow(-i/3,3)),h=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(h/3)-e/3,_*Math.cos((h+2*Math.PI)/3)-e/3,_*Math.cos((h+4*Math.PI)/3)-e/3]}},5062:(M,f,g)=>{g.d(f,{i:()=>t});const t=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(M,f,g)=>{g.r(f),g.d(f,{startFocusVisible:()=>c});const t="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=l=>{let s=[],e=!0;const n=l?l.shadowRoot:document,r=l||document.body,i=w=>{s.forEach(v=>v.classList.remove(t)),w.forEach(v=>v.classList.add(t)),s=w},a=()=>{e=!1,i([])},o=w=>{e=u.includes(w.key),e||i([])},p=w=>{if(e&&w.composedPath){const v=w.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));i(v)}},h=()=>{n.activeElement===r&&i([])};return n.addEventListener("keydown",o),n.addEventListener("focusin",p),n.addEventListener("focusout",h),n.addEventListener("touchstart",a),n.addEventListener("mousedown",a),{destroy:()=>{n.removeEventListener("keydown",o),n.removeEventListener("focusin",p),n.removeEventListener("focusout",h),n.removeEventListener("touchstart",a),n.removeEventListener("mousedown",a)},setFocus:i}}},5695:(M,f,g)=>{g.d(f,{C:()=>l,a:()=>u,d:()=>c});var t=g(5861),m=g(5359);const u=function(){var s=(0,t.Z)(function*(e,n,r,i,a,o){if(e)return e.attachViewToDom(n,r,a,i);if(!(o||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r;return i&&i.forEach(h=>p.classList.add(h)),a&&Object.assign(p,a),n.appendChild(p),yield new Promise(h=>(0,m.c)(p,h)),p});return function(n,r,i,a,o,p){return s.apply(this,arguments)}}(),c=(s,e)=>{if(e){if(s)return s.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},l=()=>{let s,e;return{attachViewToDom:function(){var i=(0,t.Z)(function*(a,o,p={},h=[]){if(s=a,o){const w="string"==typeof o?s.ownerDocument&&s.ownerDocument.createElement(o):o;h.forEach(v=>w.classList.add(v)),Object.assign(w,p),s.appendChild(w),yield new Promise(v=>(0,m.c)(w,v))}else if(s.children.length>0){const w=s.ownerDocument&&s.ownerDocument.createElement("div");h.forEach(v=>w.classList.add(v)),w.append(...s.children),s.appendChild(w)}const _=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),s.parentNode.insertBefore(e,s),_.appendChild(s),s});return function(o,p){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&e&&(e.parentNode.insertBefore(s,e),e.remove()),Promise.resolve())}}},2335:(M,f,g)=>{g.d(f,{a:()=>u,b:()=>c,c:()=>m,d:()=>s,h:()=>l});const t={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:r})},notification(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},m=()=>{t.selection()},u=()=>{t.selectionStart()},c=()=>{t.selectionChanged()},l=()=>{t.selectionEnd()},s=e=>{t.impact(e)}},6665:(M,f,g)=>{g.d(f,{s:()=>t});const t=n=>{try{if(n instanceof class e{constructor(r){this.value=r}})return n.value;if(!c()||"string"!=typeof n||""===n)return n;const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=n,s.forEach(h=>{const _=r.querySelectorAll(h);for(let w=_.length-1;w>=0;w--){const v=_[w];v.parentNode?v.parentNode.removeChild(v):r.removeChild(v);const y=u(v);for(let d=0;d<y.length;d++)m(y[d])}});const a=u(r);for(let h=0;h<a.length;h++)m(a[h]);const o=document.createElement("div");o.appendChild(r);const p=o.querySelector("div");return null!==p?p.innerHTML:o.innerHTML}catch(r){return console.error(r),""}},m=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let i=n.attributes.length-1;i>=0;i--){const a=n.attributes.item(i),o=a.name;if(!l.includes(o.toLowerCase())){n.removeAttribute(o);continue}const p=a.value;null!=p&&p.toLowerCase().includes("javascript:")&&n.removeAttribute(o)}const r=u(n);for(let i=0;i<r.length;i++)m(r[i])},u=n=>null!=n.children?n.children:n.childNodes,c=()=>{const n=window,r=n&&n.Ionic&&n.Ionic.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},l=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},8117:(M,f,g)=>{g.d(f,{a:()=>t,b:()=>a,c:()=>s,d:()=>o,e:()=>d,f:()=>u,g:()=>m,h:()=>v,i:()=>e,j:()=>r,k:()=>p,l:()=>n,m:()=>l,n:()=>c,o:()=>i,p:()=>h,q:()=>_,r:()=>w,s:()=>y});const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(M,f,g)=>{g.r(f),g.d(f,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>t,copyVisualViewport:()=>y,keyboardDidClose:()=>h,keyboardDidOpen:()=>o,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>a,setKeyboardOpen:()=>i,startKeyboardAssist:()=>n,trackViewportChanges:()=>v});const t="ionKeyboardDidShow",m="ionKeyboardDidHide";let c={},l={},s=!1;const e=()=>{c={},l={},s=!1},n=d=>{r(d),d.visualViewport&&(l=y(d.visualViewport),d.visualViewport.onresize=()=>{v(d),o()||p(d)?i(d):h(d)&&a(d)})},r=d=>{d.addEventListener("keyboardDidShow",x=>i(d,x)),d.addEventListener("keyboardDidHide",()=>a(d))},i=(d,x)=>{_(d,x),s=!0},a=d=>{w(d),s=!1},o=()=>!s&&c.width===l.width&&(c.height-l.height)*l.scale>150,p=d=>s&&!h(d),h=d=>s&&l.height===d.innerHeight,_=(d,x)=>{const E=new CustomEvent(t,{detail:{keyboardHeight:x?x.keyboardHeight:d.innerHeight-l.height}});d.dispatchEvent(E)},w=d=>{const x=new CustomEvent(m);d.dispatchEvent(x)},v=d=>{c=Object.assign({},l),l=y(d.visualViewport)},y=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},9955:(M,f,g)=>{g.d(f,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(u,c,l)=>{const s=u*c/l-u+"ms",e=2*Math.PI*c/l;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(u,c,l)=>{const s=c/l,e=u*s-u+"ms",n=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,c,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*c+(c<l/2?180:-180)}deg)`,"animation-delay":u*c/l-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,c,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*c+(c<l/2?180:-180)}deg)`,"animation-delay":u*c/l-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,c,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/l-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,c,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":u*c/l-u+"ms"}})}}},7300:(M,f,g)=>{g.d(f,{c:()=>u,g:()=>l,h:()=>m,o:()=>e});var t=g(5861);const m=(n,r)=>null!==r.closest(n),u=(n,r)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},r):r,l=n=>{const r={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(n).forEach(i=>r[i]=!0),r},s=/^[a-z][a-z0-9+\-.]*:/,e=function(){var n=(0,t.Z)(function*(r,i,a,o){if(null!=r&&"#"!==r[0]&&!s.test(r)){const p=document.querySelector("ion-router");if(p)return null!=i&&i.preventDefault(),p.push(r,a,o)}return!1});return function(i,a,o,p){return n.apply(this,arguments)}}()},5642:(M,f,g)=>{g.d(f,{K:()=>u});var t=g(4030),m=g(9863);let u=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=m.oAB({type:c}),c.\u0275inj=m.cJS({imports:[[t.Bz]]}),c})()},4662:(M,f,g)=>{g.d(f,{c:()=>n});var t=g(9863),m=g(8349),u=g(546),c=g(4030);const l=function(){return["/"]},s=function(){return["/terms"]},e=function(){return["/privacy"]};let n=(()=>{class r{constructor(a,o){this.settings=a,this.CFS=o}ngOnInit(){}copy(a){navigator.clipboard.writeText(a),navigator.vibrate(5),this.CFS.presentToast("Copied!","bottom",500,"copy-outline")}link(a){window.open(a,"_blank")}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(m.Z),t.Y36(u.b))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-footer"]],decls:78,vars:30,consts:[[1,"footer"],[1,"footer-top"],[1,"first-box"],[1,"inner-box"],[1,"label-footer"],["target","_blank","cursor-class","arrow",1,"footer-url",2,"width","260px",3,"href"],["alt","Arrow",3,"src"],[1,"copy-button",3,"click"],["name","copy-outline",2,"font-size","12px","margin","0px 0px -2px 0px"],[1,"sec-box"],["rel","nofollow","target","_blank","cursor-class","arrow",1,"footer-url",3,"href"],["target","_blank","cursor-class","arrow",1,"footer-url",3,"href"],["download","WlunaRichGang - PRESS KIT","cursor-class","arrow",1,"footer-url",3,"href"],["cursor-class","arrow",1,"footer-url",3,"routerLink"],["href","/#about","cursor-class","arrow",1,"footer-url"],["href","/#exchanges","cursor-class","arrow",1,"footer-url"],[1,"footer-url",2,"width","260px","padding","0px 0px 34px 0px"],[1,"marquee"],[1,"text"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"p",4),t._uU(5,"C."),t.qZA(),t.TgZ(6,"a",5),t._uU(7,"Ethereum Smart Contract Address "),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"p",7),t.NdJ("click",function(){return o.copy(o.settings.ethereumContract)}),t._UZ(10,"ion-icon",8),t._uU(11),t.qZA(),t.TgZ(12,"a",5),t._uU(13,"Polygon Smart Contract Address "),t._UZ(14,"img",6),t.qZA(),t.TgZ(15,"p",7),t.NdJ("click",function(){return o.copy(o.settings.polygonContract)}),t._UZ(16,"ion-icon",8),t._uU(17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",9),t.TgZ(19,"div",3),t.TgZ(20,"p",4),t._uU(21,"S."),t.qZA(),t.TgZ(22,"a",10),t._uU(23,"TWITTER "),t._UZ(24,"img",6),t.qZA(),t.TgZ(25,"a",10),t._uU(26,"OPENSEA "),t._UZ(27,"img",6),t.qZA(),t.TgZ(28,"a",10),t._uU(29,"MEDIUM "),t._UZ(30,"img",6),t.qZA(),t.TgZ(31,"p",4),t._uU(32,"E."),t.qZA(),t.TgZ(33,"a",11),t._uU(34,"EMAIL "),t._UZ(35,"img",6),t.qZA(),t.TgZ(36,"a",12),t._uU(37,"PRESS KIT "),t._UZ(38,"img",6),t.qZA(),t.qZA(),t.TgZ(39,"div",3),t.TgZ(40,"p",4),t._uU(41,"M."),t.qZA(),t.TgZ(42,"a",13),t._uU(43,"HOME "),t._UZ(44,"img",6),t.qZA(),t.TgZ(45,"a",14),t._uU(46,"ABOUT "),t._UZ(47,"img",6),t.qZA(),t.TgZ(48,"a",15),t._uU(49,"BUY/SELL "),t._UZ(50,"img",6),t.qZA(),t.TgZ(51,"a",11),t._uU(52,"WHITEPAPER "),t._UZ(53,"img",6),t.qZA(),t.TgZ(54,"a",13),t._uU(55,"TERMS "),t._UZ(56,"img",6),t.qZA(),t.TgZ(57,"a",13),t._uU(58,"PRIVACY "),t._UZ(59,"img",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"p",16),t._uU(61),t.qZA(),t.TgZ(62,"div"),t.TgZ(63,"section",17),t.TgZ(64,"h4",18),t._uU(65," WlunaRichGang "),t.qZA(),t.TgZ(66,"h4",18),t._uU(67," WlunaRichGang "),t.qZA(),t.TgZ(68,"h4",18),t._uU(69," WlunaRichGang "),t.qZA(),t.TgZ(70,"h4",18),t._uU(71," WlunaRichGang "),t.qZA(),t.TgZ(72,"h4",18),t._uU(73," WlunaRichGang - "),t.qZA(),t.TgZ(74,"h4",18),t._uU(75," WlunaRichGang - "),t.qZA(),t.TgZ(76,"h4",18),t._uU(77," WlunaRichGang - "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(6),t.s9C("href",o.settings.ethereumUrl,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(3),t.hij(" ",o.settings.ethereumContract,""),t.xp6(1),t.s9C("href",o.settings.polygonUrl,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(3),t.hij(" ",o.settings.polygonContract,""),t.xp6(5),t.s9C("href",o.settings.twitter,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.s9C("href",o.settings.opensea,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.s9C("href",o.settings.medium,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(3),t.MGl("href","mailto:",o.settings.email,"",t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.s9C("href",o.settings.pressKit,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(4),t.Q6J("routerLink",t.DdM(27,l)),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(3),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(3),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.s9C("href",o.settings.whitepaper,t.LSH),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.Q6J("routerLink",t.DdM(28,s)),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(1),t.Q6J("routerLink",t.DdM(29,e)),t.xp6(2),t.MGl("src","assets/imgs/arrow-",o.settings.darkMode,".svg",t.LSH),t.xp6(2),t.hij("",o.settings.currentYear," \xa9 Property of WlunaRichGang"))},directives:[c.yS],styles:["@media (min-width: 1024px){.footer-top[_ngcontent-%COMP%]{margin:0 0 74px;display:flex}.first-box[_ngcontent-%COMP%]{width:44%}.sec-box[_ngcontent-%COMP%]{width:56%}.inner-box[_ngcontent-%COMP%]{width:50%;display:inline-block;vertical-align:bottom}}@media (min-width: 768px) and (max-width: 1024px){.footer-top[_ngcontent-%COMP%]{margin:0 0 74px;display:flex}.first-box[_ngcontent-%COMP%], .sec-box[_ngcontent-%COMP%]{width:100%}.inner-box[_ngcontent-%COMP%]{width:50%;display:inline-block;vertical-align:bottom}}@media (max-width: 767px){.footer-top[_ngcontent-%COMP%]{margin:0 0 74px;display:block}.first-box[_ngcontent-%COMP%], .sec-box[_ngcontent-%COMP%]{width:100%}.inner-box[_ngcontent-%COMP%]{width:50%;display:inline-block;vertical-align:bottom}}.footer[_ngcontent-%COMP%]{border-top:1px solid var(--ion-border-color);padding:22px 34px 34px}.footer-url[_ngcontent-%COMP%]{padding:12px 0;margin:0;font-size:16px;color:var(--ion-text-color);text-decoration:none;width:120px;display:block;opacity:.7;position:relative;transition:all .4s cubic-bezier(.075,.82,.165,1)}.footer-url[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px;position:absolute;right:12px;top:12px;transform:translateY(-50%);transform:rotate(0);transition:all .4s cubic-bezier(.075,.82,.165,1)}.footer-url[_ngcontent-%COMP%]:hover{opacity:1}.footer-url[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:rotate(45deg)}.label-footer[_ngcontent-%COMP%]{font-size:18px;text-transform:uppercase}.copy-button[_ngcontent-%COMP%]{cursor:copy;margin:0;padding:12px 0;width:400px;font-size:14px;color:rgba(var(--ion-url-color-rgb),1)}.copy-button[_ngcontent-%COMP%]:active{animation:blink-1 .6s both}@keyframes blink-1{0%,50%,to{opacity:1}25%,75%{opacity:0}}.marquee[_ngcontent-%COMP%]{width:100%;white-space:nowrap;overflow:hidden;background:#ffffff;opacity:.7;display:flex;align-items:center}.marquee[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:inline-block;padding:6px 80px 12px 0;animation:marquee 12s linear infinite;font-size:50px;letter-spacing:10px;text-transform:uppercase;color:#000}@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-100%)}}"]}),r})()}}]);
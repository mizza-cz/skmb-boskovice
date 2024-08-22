// menu
const menuLinks=document.querySelectorAll(".menu-link"),dropdownMenus=document.querySelectorAll(".dropdown-menu"),burgerMenu=document.querySelector(".burger-menu"),menuContainer=document.querySelector(".menu-container");let menuOpened=!0;burgerMenu.addEventListener("click",(()=>{menuOpened=!menuOpened,burgerMenu.setAttribute("aria-expanded",!menuOpened),menuContainer.classList.toggle("open"),document.body.classList.toggle("overflow-hidden"),menuContainer.classList.contains("open")||dropdownMenus.forEach((e=>{e.classList.contains("open")&&(e.parentElement.classList.remove("active"),e.classList.remove("open"))}))}));for(const e of menuLinks)e.addEventListener("click",(()=>{dropdownMenus.forEach((n=>{e.parentElement!==n.parentElement&&(n.parentElement.classList.remove("active"),n.classList.remove("open"))}));const n=e.nextElementSibling;n&&(n.parentElement.classList.toggle("active"),n.classList.toggle("open"))}));
// menu
// topstory
const topstoryNavItems=document.querySelectorAll(".topstory-nav-item");for(const t of topstoryNavItems)t.addEventListener("mouseenter",(t=>{currentId=t.target.dataset.topstory,document.querySelector(".topstory-nav-item.on").classList.remove("on"),t.target.classList.add("on"),document.querySelector(".topstory-article.on").classList.remove("on"),document.querySelector(`#topstory-article-${currentId}`).classList.add("on")}));
// topstory 
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pe4u":[function(require,module,exports) {
   "use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}Object.defineProperty(exports,"__esModule",{value:!0});var e=window,n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return setTimeout(t,16)},i=window,r=i.cancelAnimationFrame||i.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},r=1,a=arguments.length;r<a;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function o(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function u(t,e,n,i){if(i)try{t.setItem(e,n)}catch(r){}return n}function l(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function v(){var t=document,e=s(),n=f(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var a,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(a=u[l],i.style.width=a,100===i.offsetWidth){r=a.replace(o,"");break}}catch(c){}return e.fake?d(e,n):i.remove(),r}function p(){var t,e=document,n=s(),i=f(n),r=e.createElement("div"),a=e.createElement("div"),o="";r.className="tns-t-subp2",a.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return a.innerHTML=o,r.appendChild(a),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):r.remove(),t}function m(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=s(),i=f(n),r=e.createElement("div"),a=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return a.type="text/css",r.className="tns-mq-test",n.appendChild(a),n.appendChild(r),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?d(n,i):r.remove(),"absolute"===t}function h(t,e){var n=document.createElement("style");return t&&n.setAttribute("media",t),e&&n.setAttribute("nonce",e),document.querySelector("head").appendChild(n),n.sheet?n.sheet:n.styleSheet}function y(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function g(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}function b(t){return("insertRule"in t?t.cssRules:t.rules).length}function x(t,e){return Math.atan2(t,e)*(180/Math.PI)}function w(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return i>=90-e?n="horizontal":i<=e&&(n="vertical"),n}function C(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var M="classList"in document.createElement("_"),T=M?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},E=M?function(t,e){T(t,e)||t.classList.add(e)}:function(t,e){T(t,e)||(t.className+=" "+e)},A=M?function(t,e){T(t,e)&&t.classList.remove(e)}:function(t,e){T(t,e)&&(t.className=t.className.replace(e,""))};function S(t,e){return t.hasAttribute(e)}function N(t,e){return t.getAttribute(e)}function L(t){return void 0!==t.item}function B(t,e){if(t=L(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function O(t,e){t=L(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function H(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function D(t,e){"none"!==t.style.display&&(t.style.display="none")}function k(t,e){"none"===t.style.display&&(t.style.display="")}function R(t){return"none"!==window.getComputedStyle(t).display}function P(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}var i=document.createElement("fakeelement");t.length;for(var r=0;r<t.length;r++){var a=t[r];if(void 0!==i.style[a])return a}return!1}function I(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),r=f(i),a=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(o),i.fake?d(i,r):a.remove(),void 0!==e&&e.length>0&&"none"!==e}function z(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var W=!1;try{var q=Object.defineProperty({},"passive",{get:function(){W=!0}});window.addEventListener("test",null,q)}catch(Y){}var F=!!W&&{passive:!0};function j(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&F;t.addEventListener(i,e[i],r)}}function V(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&F;t.removeEventListener(n,e[n],i)}}function G(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}function Q(t,e,n,i,r,a,o){var u=Math.min(a,10),l=r.indexOf("%")>=0?"%":"px",s=(r=r.replace(l,""),Number(t.style[e].replace(n,"").replace(i,"").replace(l,""))),c=(r-s)/a*u;setTimeout(function r(){a-=u;s+=c;t.style[e]=n+s+l+i;a>0?setTimeout(r,u):o()},u)}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var X=function e(i){i=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},i||{});var s=document,c=window,f={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},d={},M=i.useLocalStorage;if(M){var L=navigator.userAgent,W=new Date;try{(d=c.localStorage)?(d.setItem(W,W),M=d.getItem(W)==W,d.removeItem(W)):M=!1,M||(d={})}catch(Y){M=!1}M&&(d.tnsApp&&d.tnsApp!==L&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){d.removeItem(t)}),localStorage.tnsApp=L)}var q=d.tC?o(d.tC):u(d,"tC",v(),M),F=d.tPL?o(d.tPL):u(d,"tPL",p(),M),X=d.tMQ?o(d.tMQ):u(d,"tMQ",m(),M),K=d.tTf?o(d.tTf):u(d,"tTf",P("transform"),M),_=d.t3D?o(d.t3D):u(d,"t3D",I(K),M),J=d.tTDu?o(d.tTDu):u(d,"tTDu",P("transitionDuration"),M),U=d.tTDe?o(d.tTDe):u(d,"tTDe",P("transitionDelay"),M),Z=d.tADu?o(d.tADu):u(d,"tADu",P("animationDuration"),M),$=d.tADe?o(d.tADe):u(d,"tADe",P("animationDelay"),M),tt=d.tTE?o(d.tTE):u(d,"tTE",z(J,"Transition"),M),et=d.tAE?o(d.tAE):u(d,"tAE",z(Z,"Animation"),M),nt=c.console&&"function"==typeof c.console.warn,it=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],rt={};if(it.forEach(function(t){if("string"==typeof i[t]){var e=i[t],n=s.querySelector(e);if(rt[t]=e,!n||!n.nodeName)return void(nt&&console.warn("Can't find",i[t]));i[t]=n}}),!(i.container.children.length<1)){var at=i.responsive,ot=i.nested,ut="carousel"===i.mode;if(at){0 in at&&(i=a(i,at[0]),delete at[0]);var lt={};for(var st in at){var ct=at[st];ct="number"==typeof ct?{items:ct}:ct,lt[st]=ct}at=lt,lt=null}if(ut||function t(e){for(var n in e)ut||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(i),!ut){i.axis="horizontal",i.slideBy="page",i.edgePadding=!1;var ft=i.animateIn,dt=i.animateOut,vt=i.animateDelay,pt=i.animateNormal}var mt,ht,yt="horizontal"===i.axis,gt=s.createElement("div"),bt=s.createElement("div"),xt=i.container,wt=xt.parentNode,Ct=xt.outerHTML,Mt=xt.children,Tt=Mt.length,Et=zn(),At=!1;at&&ri(),ut&&(xt.className+=" tns-vpfix");var St,Nt,Lt,Bt=i.autoWidth,Ot=jn("fixedWidth"),Ht=jn("edgePadding"),Dt=jn("gutter"),kt=qn(),Rt=jn("center"),Pt=Bt?1:Math.floor(jn("items")),It=jn("slideBy"),zt=i.viewportMax||i.fixedWidthViewportWidth,Wt=jn("arrowKeys"),qt=jn("speed"),Ft=i.rewind,jt=!Ft&&i.loop,Vt=jn("autoHeight"),Gt=jn("controls"),Qt=jn("controlsText"),Xt=jn("nav"),Yt=jn("touch"),Kt=jn("mouseDrag"),_t=jn("autoplay"),Jt=jn("autoplayTimeout"),Ut=jn("autoplayText"),Zt=jn("autoplayHoverPause"),$t=jn("autoplayResetOnVisibility"),te=h(null,jn("nonce")),ee=i.lazyload,ne=i.lazyloadSelector,ie=[],re=jt?(Nt=function(){if(Bt||Ot&&!zt)return Tt-1;var t=Ot?"fixedWidth":"items",e=[];if((Ot||i[t]<Tt)&&e.push(i[t]),at)for(var n in at){var r=at[n][t];r&&(Ot||r<Tt)&&e.push(r)}return e.length||e.push(0),Math.ceil(Ot?zt/Math.min.apply(null,e):Math.max.apply(null,e))}(),Lt=ut?Math.ceil((5*Nt-Tt)/2):4*Nt-Tt,Lt=Math.max(Nt,Lt),Fn("edgePadding")?Lt+1:Lt):0,ae=ut?Tt+2*re:Tt+re,oe=!(!Ot&&!Bt||jt),ue=Ot?Bi():null,le=!ut||!jt,se=yt?"left":"top",ce="",fe="",de=Ot?function(){return Rt&&!jt?Tt-1:Math.ceil(-ue/(Ot+Dt))}:Bt?function(){for(var t=0;t<ae;t++)if(St[t]>=-ue)return t}:function(){return Rt&&ut&&!jt?Tt-1:jt||ut?Math.max(0,ae-Math.ceil(Pt)):ae-1},ve=Rn(jn("startIndex")),pe=ve;kn();var me,he,ye=0,ge=Bt?null:de(),be=i.preventActionWhenRunning,xe=i.swipeAngle,we=!xe||"?",Ce=!1,Me=i.onInit,Te=new G,Ee=" tns-slider tns-"+i.mode,Ae=xt.id||l(),Se=jn("disable"),Ne=!1,Le=i.freezable,Be=!(!Le||Bt)&&ii(),Oe=!1,He={click:Wi,keydown:function(t){t=Yi(t);var e=[f.LEFT,f.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?tn.disabled||Wi(t,-1):en.disabled||Wi(t,1))}},De={click:function(t){if(Ce){if(be)return;Ii()}var e=Ki(t=Yi(t));for(;e!==on&&!S(e,"data-nav");)e=e.parentNode;if(S(e,"data-nav")){var n=cn=Number(N(e,"data-nav")),i=Ot||Bt?n*Tt/ln:n*Pt,r=Fe?n:Math.min(Math.ceil(i),Tt-1);zi(r,t),fn===n&&(yn&&Gi(),cn=-1)}},keydown:function(t){t=Yi(t);var e=s.activeElement;if(!S(e,"data-nav"))return;var n=[f.LEFT,f.RIGHT,f.ENTER,f.SPACE].indexOf(t.keyCode),i=Number(N(e,"data-nav"));n>=0&&(0===n?i>0&&Xi(an[i-1]):1===n?i<ln-1&&Xi(an[i+1]):(cn=i,zi(i,t)))}},ke={mouseover:function(){yn&&(Fi(),gn=!0)},mouseout:function(){gn&&(qi(),gn=!1)}},Re={visibilitychange:function(){s.hidden?yn&&(Fi(),xn=!0):xn&&(qi(),xn=!1)}},Pe={keydown:function(t){t=Yi(t);var e=[f.LEFT,f.RIGHT].indexOf(t.keyCode);e>=0&&Wi(t,0===e?-1:1)}},Ie={touchstart:Zi,touchmove:$i,touchend:tr,touchcancel:tr},ze={mousedown:Zi,mousemove:$i,mouseup:tr,mouseleave:tr},We=Fn("controls"),qe=Fn("nav"),Fe=!!Bt||i.navAsThumbnails,je=Fn("autoplay"),Ve=Fn("touch"),Ge=Fn("mouseDrag"),Qe="tns-slide-active",Xe="tns-slide-cloned",Ye="tns-complete",Ke={load:function(t){vi(Ki(t))},error:function(t){e=Ki(t),E(e,"failed"),pi(e);var e}},_e="force"===i.preventScrollOnTouch;if(We)var Je,Ue,Ze=i.controlsContainer,$e=i.controlsContainer?i.controlsContainer.outerHTML:"",tn=i.prevButton,en=i.nextButton,nn=i.prevButton?i.prevButton.outerHTML:"",rn=i.nextButton?i.nextButton.outerHTML:"";if(qe)var an,on=i.navContainer,un=i.navContainer?i.navContainer.outerHTML:"",ln=Bt?Tt:nr(),sn=0,cn=-1,fn=In(),dn=fn,vn="tns-nav-active",pn="Carousel Page ",mn=" (Current Slide)";if(je)var hn,yn,gn,bn,xn,wn="forward"===i.autoplayDirection?1:-1,Cn=i.autoplayButton,Mn=i.autoplayButton?i.autoplayButton.outerHTML:"",Tn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ve||Ge)var En,An,Sn={},Nn={},Ln=!1,Bn=yt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Bt||Dn(Se||Be),K&&(se=K,ce="translate",_?(ce+=yt?"3d(":"3d(0px, ",fe=yt?", 0px, 0px)":", 0px)"):(ce+=yt?"X(":"Y(",fe=")")),ut&&(xt.className=xt.className.replace("tns-vpfix","")),function(){Fn("gutter"),gt.className="tns-outer",bt.className="tns-inner",gt.id=Ae+"-ow",bt.id=Ae+"-iw",""===xt.id&&(xt.id=Ae);Ee+=F||Bt?" tns-subpixel":" tns-no-subpixel",Ee+=q?" tns-calc":" tns-no-calc",Bt&&(Ee+=" tns-autowidth");Ee+=" tns-"+i.axis,xt.className+=Ee,ut?((mt=s.createElement("div")).id=Ae+"-mw",mt.className="tns-ovh",gt.appendChild(mt),mt.appendChild(bt)):gt.appendChild(bt);if(Vt){var t=mt||bt;t.className+=" tns-ah"}if(wt.insertBefore(gt,xt),bt.appendChild(xt),C(Mt,function(t,e){E(t,"tns-item"),t.id||(t.id=Ae+"-item"+e),!ut&&pt&&E(t,pt),B(t,{"aria-hidden":"true",tabindex:"-1"})}),re){for(var e=s.createDocumentFragment(),n=s.createDocumentFragment(),r=re;r--;){var a=r%Tt,o=Mt[a].cloneNode(!0);if(E(o,Xe),O(o,"id"),n.insertBefore(o,n.firstChild),ut){var u=Mt[Tt-1-a].cloneNode(!0);E(u,Xe),O(u,"id"),e.appendChild(u)}}xt.insertBefore(e,xt.firstChild),xt.appendChild(n),Mt=xt.children}}(),function(){if(!ut)for(var t=ve,e=ve+Math.min(Tt,Pt);t<e;t++){var n=Mt[t];n.style.left=100*(t-ve)/Pt+"%",E(n,ft),A(n,pt)}yt&&(F||Bt?(y(te,"#"+Ae+" > .tns-item","font-size:"+c.getComputedStyle(Mt[0]).fontSize+";",b(te)),y(te,"#"+Ae,"font-size:0;",b(te))):ut&&C(Mt,function(t,e){t.style.marginLeft=function(t){return q?q+"("+100*t+"% / "+ae+")":100*t/ae+"%"}(e)}));if(X){if(J){var r=mt&&i.autoHeight?Kn(i.speed):"";y(te,"#"+Ae+"-mw",r,b(te))}r=Vn(i.edgePadding,i.gutter,i.fixedWidth,i.speed,i.autoHeight),y(te,"#"+Ae+"-iw",r,b(te)),ut&&(r=yt&&!Bt?"width:"+Gn(i.fixedWidth,i.gutter,i.items)+";":"",J&&(r+=Kn(qt)),y(te,"#"+Ae,r,b(te))),r=yt&&!Bt?Qn(i.fixedWidth,i.gutter,i.items):"",i.gutter&&(r+=Xn(i.gutter)),ut||(J&&(r+=Kn(qt)),Z&&(r+=_n(qt))),r&&y(te,"#"+Ae+" > .tns-item",r,b(te))}else{ut&&Vt&&(mt.style[J]=qt/1e3+"s"),bt.style.cssText=Vn(Ht,Dt,Ot,Vt),ut&&yt&&!Bt&&(xt.style.width=Gn(Ot,Dt,Pt));var r=yt&&!Bt?Qn(Ot,Dt,Pt):"";Dt&&(r+=Xn(Dt)),r&&y(te,"#"+Ae+" > .tns-item",r,b(te))}if(at&&X)for(var a in at){a=parseInt(a);var o=at[a],r="",u="",l="",s="",f="",d=Bt?null:jn("items",a),v=jn("fixedWidth",a),p=jn("speed",a),m=jn("edgePadding",a),h=jn("autoHeight",a),g=jn("gutter",a);J&&mt&&jn("autoHeight",a)&&"speed"in o&&(u="#"+Ae+"-mw{"+Kn(p)+"}"),("edgePadding"in o||"gutter"in o)&&(l="#"+Ae+"-iw{"+Vn(m,g,v,p,h)+"}"),ut&&yt&&!Bt&&("fixedWidth"in o||"items"in o||Ot&&"gutter"in o)&&(s="width:"+Gn(v,g,d)+";"),J&&"speed"in o&&(s+=Kn(p)),s&&(s="#"+Ae+"{"+s+"}"),("fixedWidth"in o||Ot&&"gutter"in o||!ut&&"items"in o)&&(f+=Qn(v,g,d)),"gutter"in o&&(f+=Xn(g)),!ut&&"speed"in o&&(J&&(f+=Kn(p)),Z&&(f+=_n(p))),f&&(f="#"+Ae+" > .tns-item{"+f+"}"),(r=u+l+s+f)&&te.insertRule("@media (min-width: "+a/16+"em) {"+r+"}",te.cssRules.length)}}(),Jn();var On=jt?ut?function(){var t=ye,e=ge;t+=It,e-=It,Ht?(t+=1,e-=1):Ot&&(kt+Dt)%(Ot+Dt)&&(e-=1),re&&(ve>e?ve-=Tt:ve<t&&(ve+=Tt))}:function(){if(ve>ge)for(;ve>=ye+Tt;)ve-=Tt;else if(ve<ye)for(;ve<=ge-Tt;)ve+=Tt}:function(){ve=Math.max(ye,Math.min(ge,ve))},Hn=ut?function(){Ni(xt,""),J||!qt?(Di(),qt&&R(xt)||Ii()):Q(xt,se,ce,fe,Oi(),qt,Ii),yt||er()}:function(){ie=[];var t={};t[tt]=t[et]=Ii,V(Mt[pe],t),j(Mt[ve],t),ki(pe,ft,dt,!0),ki(ve,pt,ft),tt&&et&&qt&&R(xt)||Ii()};return{version:"2.9.4",getInfo:rr,events:Te,goTo:zi,play:function(){_t&&!yn&&(Vi(),bn=!1)},pause:function(){yn&&(Gi(),bn=!0)},isOn:At,updateSliderHeight:xi,refresh:Jn,destroy:function(){if(te.disabled=!0,te.ownerNode&&te.ownerNode.remove(),V(c,{resize:ei}),Wt&&V(s,Pe),Ze&&V(Ze,He),on&&V(on,De),V(xt,ke),V(xt,Re),Cn&&V(Cn,{click:Qi}),_t&&clearInterval(hn),ut&&tt){var e={};e[tt]=Ii,V(xt,e)}Yt&&V(xt,Ie),Kt&&V(xt,ze);var n=[Ct,$e,nn,rn,un,Mn];for(var r in it.forEach(function(e,r){var a="container"===e?gt:i[e];if("object"===t(a)&&a){var o=!!a.previousElementSibling&&a.previousElementSibling,u=a.parentNode;a.outerHTML=n[r],i[e]=o?o.nextElementSibling:u.firstElementChild}}),it=ft=dt=vt=pt=yt=gt=bt=xt=wt=Ct=Mt=Tt=ht=Et=Bt=Ot=Ht=Dt=kt=Pt=It=zt=Wt=qt=Ft=jt=Vt=te=ee=St=ie=re=ae=oe=ue=le=se=ce=fe=de=ve=pe=ye=ge=xe=we=Ce=Me=Te=Ee=Ae=Se=Ne=Le=Be=Oe=He=De=ke=Re=Pe=Ie=ze=We=qe=Fe=je=Ve=Ge=Qe=Ye=Ke=me=Gt=Qt=Ze=$e=tn=en=Je=Ue=Xt=on=un=an=ln=sn=cn=fn=dn=vn=pn=mn=_t=Jt=wn=Ut=Zt=Cn=Mn=$t=Tn=hn=yn=gn=bn=xn=Sn=Nn=En=Ln=An=Bn=Yt=Kt=null,this)"rebuild"!==r&&(this[r]=null);At=!1},rebuild:function(){return e(a(i,rt))}}}function Dn(t){t&&(Gt=Xt=Yt=Kt=Wt=_t=Zt=$t=!1)}function kn(){for(var t=ut?ve-re:ve;t<0;)t+=Tt;return t%Tt+1}function Rn(t){return t=t?Math.max(0,Math.min(jt?Tt-1:Tt-Pt,t)):0,ut?t+re:t}function Pn(t){for(null==t&&(t=ve),ut&&(t-=re);t<0;)t+=Tt;return Math.floor(t%Tt)}function In(){var t,e=Pn();return t=Fe?e:Ot||Bt?Math.ceil((e+1)*ln/Tt-1):Math.floor(e/Pt),!jt&&ut&&ve===ge&&(t=ln-1),t}function zn(){return c.innerWidth||s.documentElement.clientWidth||s.body.clientWidth}function Wn(t){return"top"===t?"afterbegin":"beforeend"}function qn(){var t=Ht?2*Ht-Dt:0;return function t(e){if(null!=e){var n,i,r=s.createElement("div");return e.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||t(e.parentNode)}}(wt)-t}function Fn(t){if(i[t])return!0;if(at)for(var e in at)if(at[e][t])return!0;return!1}function jn(t,e){if(null==e&&(e=Et),"items"===t&&Ot)return Math.floor((kt+Dt)/(Ot+Dt))||1;var n=i[t];if(at)for(var r in at)e>=parseInt(r)&&t in at[r]&&(n=at[r][t]);return"slideBy"===t&&"page"===n&&(n=jn("items")),ut||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function Vn(t,e,n,i,r){var a="";if(void 0!==t){var o=t;e&&(o-=e),a=yt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";a="margin: 0 "+(yt?u+" 0 0":"0 "+u+" 0")+";"}return!ut&&r&&J&&i&&(a+=Kn(i)),a}function Gn(t,e,n){return t?(t+e)*ae+"px":q?q+"("+100*ae+"% / "+n+")":100*ae/n+"%"}function Qn(t,e,n){var i;if(t)i=t+e+"px";else{ut||(n=Math.floor(n));var r=ut?ae:n;i=q?q+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==ot?i+";":i+" !important;"}function Xn(t){var e="";!1!==t&&(e=(yt?"padding-":"margin-")+(yt?"right":"bottom")+": "+t+"px;");return e}function Yn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Kn(t){return Yn(J,18)+"transition-duration:"+t/1e3+"s;"}function _n(t){return Yn(Z,17)+"animation-duration:"+t/1e3+"s;"}function Jn(){if(Fn("autoHeight")||Bt||!yt){var t=xt.querySelectorAll("img");C(t,function(t){var e=t.src;ee||(e&&e.indexOf("data:image")<0?(t.src="",j(t,Ke),E(t,"loading"),t.src=e):vi(t))}),n(function(){yi(H(t),function(){me=!0})}),Fn("autoHeight")&&(t=mi(ve,Math.min(ve+Pt-1,ae-1))),ee?Un():n(function(){yi(H(t),Un)})}else ut&&Hi(),$n(),ti()}function Un(){if(Bt&&Tt>1){var t=jt?ve:Tt-1;!function e(){var n=Mt[t].getBoundingClientRect().left,i=Mt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Zn():setTimeout(function(){e()},16)}()}else Zn()}function Zn(){yt&&!Bt||(wi(),Bt?(ue=Bi(),Le&&(Be=ii()),ge=de(),Dn(Se||Be)):er()),ut&&Hi(),$n(),ti()}function $n(){if(Ci(),gt.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ci()+"</span>  of "+Tt+"</div>"),he=gt.querySelector(".tns-liveregion .current"),je){var t=_t?"stop":"start";Cn?B(Cn,{"data-action":t}):i.autoplayButtonOutput&&(gt.insertAdjacentHTML(Wn(i.autoplayPosition),'<button type="button" data-action="'+t+'">'+Tn[0]+t+Tn[1]+Ut[0]+"</button>"),Cn=gt.querySelector("[data-action]")),Cn&&j(Cn,{click:Qi}),_t&&(Vi(),Zt&&j(xt,ke),$t&&j(xt,Re))}if(qe){if(on)B(on,{"aria-label":"Carousel Pagination"}),C(an=on.children,function(t,e){B(t,{"data-nav":e,tabindex:"-1","aria-label":pn+(e+1),"aria-controls":Ae})});else{for(var e="",n=Fe?"":'style="display:none"',r=0;r<Tt;r++)e+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+Ae+'" '+n+' aria-label="'+pn+(r+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",gt.insertAdjacentHTML(Wn(i.navPosition),e),on=gt.querySelector(".tns-nav"),an=on.children}if(ir(),J){var a=J.substring(0,J.length-18).toLowerCase(),o="transition: all "+qt/1e3+"s";a&&(o="-"+a+"-"+o),y(te,"[aria-controls^="+Ae+"-item]",o,b(te))}B(an[fn],{"aria-label":pn+(fn+1)+mn}),O(an[fn],"tabindex"),E(an[fn],vn),j(on,De)}We&&(Ze||tn&&en||(gt.insertAdjacentHTML(Wn(i.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Ae+'">'+Qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Ae+'">'+Qt[1]+"</button></div>"),Ze=gt.querySelector(".tns-controls")),tn&&en||(tn=Ze.children[0],en=Ze.children[1]),i.controlsContainer&&B(Ze,{"aria-label":"Carousel Navigation",tabindex:"0"}),(i.controlsContainer||i.prevButton&&i.nextButton)&&B([tn,en],{"aria-controls":Ae,tabindex:"-1"}),(i.controlsContainer||i.prevButton&&i.nextButton)&&(B(tn,{"data-controls":"prev"}),B(en,{"data-controls":"next"})),Je=Ti(tn),Ue=Ti(en),Si(),Ze?j(Ze,He):(j(tn,He),j(en,He))),ai()}function ti(){if(ut&&tt){var t={};t[tt]=Ii,j(xt,t)}Yt&&j(xt,Ie,i.preventScrollOnTouch),Kt&&j(xt,ze),Wt&&j(s,Pe),"inner"===ot?Te.on("outerResized",function(){ni(),Te.emit("innerLoaded",rr())}):(at||Ot||Bt||Vt||!yt)&&j(c,{resize:ei}),Vt&&("outer"===ot?Te.on("innerLoaded",hi):Se||hi()),di(),Se?li():Be&&ui(),Te.on("indexChanged",gi),"inner"===ot&&Te.emit("innerLoaded",rr()),"function"==typeof Me&&Me(rr()),At=!0}function ei(t){n(function(){ni(Yi(t))})}function ni(t){if(At){"outer"===ot&&Te.emit("outerResized",rr(t)),Et=zn();var e,n=ht,r=!1;at&&(ri(),(e=n!==ht)&&Te.emit("newBreakpointStart",rr(t)));var a,o,u=Pt,l=Se,c=Be,f=Wt,d=Gt,v=Xt,p=Yt,m=Kt,h=_t,x=Zt,w=$t,M=ve;if(e){var T=Ot,S=Vt,N=Qt,L=Rt,B=Ut;if(!X)var O=Dt,H=Ht}if(Wt=jn("arrowKeys"),Gt=jn("controls"),Xt=jn("nav"),Yt=jn("touch"),Rt=jn("center"),Kt=jn("mouseDrag"),_t=jn("autoplay"),Zt=jn("autoplayHoverPause"),$t=jn("autoplayResetOnVisibility"),e&&(Se=jn("disable"),Ot=jn("fixedWidth"),qt=jn("speed"),Vt=jn("autoHeight"),Qt=jn("controlsText"),Ut=jn("autoplayText"),Jt=jn("autoplayTimeout"),X||(Ht=jn("edgePadding"),Dt=jn("gutter"))),Dn(Se),kt=qn(),yt&&!Bt||Se||(wi(),yt||(er(),r=!0)),(Ot||Bt)&&(ue=Bi(),ge=de()),(e||Ot)&&(Pt=jn("items"),It=jn("slideBy"),(o=Pt!==u)&&(Ot||Bt||(ge=de()),On())),e&&Se!==l&&(Se?li():function(){if(!Ne)return;if(te.disabled=!1,xt.className+=Ee,Hi(),jt)for(var t=re;t--;)ut&&k(Mt[t]),k(Mt[ae-t-1]);if(!ut)for(var e=ve,n=ve+Tt;e<n;e++){var i=Mt[e],r=e<ve+Pt?ft:pt;i.style.left=100*(e-ve)/Pt+"%",E(i,r)}oi(),Ne=!1}()),Le&&(e||Ot||Bt)&&(Be=ii())!==c&&(Be?(Di(Oi(Rn(0))),ui()):(!function(){if(!Oe)return;Ht&&X&&(bt.style.margin="");if(re)for(var t="tns-transparent",e=re;e--;)ut&&A(Mt[e],t),A(Mt[ae-e-1],t);oi(),Oe=!1}(),r=!0)),Dn(Se||Be),_t||(Zt=$t=!1),Wt!==f&&(Wt?j(s,Pe):V(s,Pe)),Gt!==d&&(Gt?Ze?k(Ze):(tn&&k(tn),en&&k(en)):Ze?D(Ze):(tn&&D(tn),en&&D(en))),Xt!==v&&(Xt?(k(on),ir()):D(on)),Yt!==p&&(Yt?j(xt,Ie,i.preventScrollOnTouch):V(xt,Ie)),Kt!==m&&(Kt?j(xt,ze):V(xt,ze)),_t!==h&&(_t?(Cn&&k(Cn),yn||bn||Vi()):(Cn&&D(Cn),yn&&Gi())),Zt!==x&&(Zt?j(xt,ke):V(xt,ke)),$t!==w&&($t?j(s,Re):V(s,Re)),e){if(Ot===T&&Rt===L||(r=!0),Vt!==S&&(Vt||(bt.style.height="")),Gt&&Qt!==N&&(tn.innerHTML=Qt[0],en.innerHTML=Qt[1]),Cn&&Ut!==B){var R=_t?1:0,P=Cn.innerHTML,I=P.length-B[R].length;P.substring(I)===B[R]&&(Cn.innerHTML=P.substring(0,I)+Ut[R])}}else Rt&&(Ot||Bt)&&(r=!0);if((o||Ot&&!Bt)&&(ln=nr(),ir()),(a=ve!==M)?(Te.emit("indexChanged",rr()),r=!0):o?a||gi():(Ot||Bt)&&(di(),Ci(),si()),o&&!ut&&function(){for(var t=ve+Math.min(Tt,Pt),e=ae;e--;){var n=Mt[e];e>=ve&&e<t?(E(n,"tns-moving"),n.style.left=100*(e-ve)/Pt+"%",E(n,ft),A(n,pt)):n.style.left&&(n.style.left="",E(n,pt),A(n,ft)),A(n,dt)}setTimeout(function(){C(Mt,function(t){A(t,"tns-moving")})},300)}(),!Se&&!Be){if(e&&!X&&(Ht===H&&Dt===O||(bt.style.cssText=Vn(Ht,Dt,Ot,qt,Vt)),yt)){ut&&(xt.style.width=Gn(Ot,Dt,Pt));var z=Qn(Ot,Dt,Pt)+Xn(Dt);g(te,b(te)-1),y(te,"#"+Ae+" > .tns-item",z,b(te))}Vt&&hi(),r&&(Hi(),pe=ve)}e&&Te.emit("newBreakpointEnd",rr(t))}}function ii(){if(!Ot&&!Bt)return Tt<=(Rt?Pt-(Pt-1)/2:Pt);var t=Ot?(Ot+Dt)*Tt:St[Tt],e=Ht?kt+2*Ht:kt+Dt;return Rt&&(e-=Ot?(kt-Ot)/2:(kt-(St[ve+1]-St[ve]-Dt))/2),t<=e}function ri(){for(var t in ht=0,at)t=parseInt(t),Et>=t&&(ht=t)}function ai(){!_t&&Cn&&D(Cn),!Xt&&on&&D(on),Gt||(Ze?D(Ze):(tn&&D(tn),en&&D(en)))}function oi(){_t&&Cn&&k(Cn),Xt&&on&&k(on),Gt&&(Ze?k(Ze):(tn&&k(tn),en&&k(en)))}function ui(){if(!Oe){if(Ht&&(bt.style.margin="0px"),re)for(var t="tns-transparent",e=re;e--;)ut&&E(Mt[e],t),E(Mt[ae-e-1],t);ai(),Oe=!0}}function li(){if(!Ne){if(te.disabled=!0,xt.className=xt.className.replace(Ee.substring(1),""),O(xt,["style"]),jt)for(var t=re;t--;)ut&&D(Mt[t]),D(Mt[ae-t-1]);if(yt&&ut||O(bt,["style"]),!ut)for(var e=ve,n=ve+Tt;e<n;e++){var i=Mt[e];O(i,["style"]),A(i,ft),A(i,pt)}ai(),Ne=!0}}function si(){var t=ci();he.innerHTML!==t&&(he.innerHTML=t)}function ci(){var t=fi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function fi(t){null==t&&(t=Oi());var e,n,i,r=ve;if(Rt||Ht?(Bt||Ot)&&(n=-(parseFloat(t)+Ht),i=n+kt+2*Ht):Bt&&(n=St[ve],i=n+kt),Bt)St.forEach(function(t,a){a<ae&&((Rt||Ht)&&t<=n+.5&&(r=a),i-t>=.5&&(e=a))});else{if(Ot){var a=Ot+Dt;Rt||Ht?(r=Math.floor(n/a),e=Math.ceil(i/a-1)):e=r+Math.ceil(kt/a)-1}else if(Rt||Ht){var o=Pt-1;if(Rt?(r-=o/2,e=ve+o/2):e=ve+o,Ht){var u=Ht*Pt/kt;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+Pt-1;r=Math.max(r,0),e=Math.min(e,ae-1)}return[r,e]}function di(){if(ee&&!Se){var t=fi();t.push(ne),mi.apply(null,t).forEach(function(t){if(!T(t,Ye)){var e={};e[tt]=function(t){t.stopPropagation()},j(t,e),j(t,Ke),t.src=N(t,"data-src");var n=N(t,"data-srcset");n&&(t.srcset=n),E(t,"loading")}})}}function vi(t){E(t,"loaded"),pi(t)}function pi(t){E(t,Ye),A(t,"loading"),V(t,Ke)}function mi(t,e,n){var i=[];for(n||(n="img");t<=e;)C(Mt[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function hi(){var t=mi.apply(null,fi());n(function(){yi(t,xi)})}function yi(t,e){return me?e():(t.forEach(function(e,n){!ee&&e.complete&&pi(e),T(e,Ye)&&t.splice(n,1)}),t.length?void n(function(){yi(t,e)}):e())}function gi(){di(),Ci(),si(),Si(),function(){if(Xt&&(fn=cn>=0?cn:In(),cn=-1,fn!==dn)){var t=an[dn],e=an[fn];B(t,{tabindex:"-1","aria-label":pn+(dn+1)}),A(t,vn),B(e,{"aria-label":pn+(fn+1)+mn}),O(e,"tabindex"),E(e,vn),dn=fn}}()}function bi(t,e){for(var n=[],i=t,r=Math.min(t+e,ae);i<r;i++)n.push(Mt[i].offsetHeight);return Math.max.apply(null,n)}function xi(){var t=Vt?bi(ve,Pt):bi(re,Tt),e=mt||bt;e.style.height!==t&&(e.style.height=t+"px")}function wi(){St=[0];var t=yt?"left":"top",e=yt?"right":"bottom",n=Mt[0].getBoundingClientRect()[t];C(Mt,function(i,r){r&&St.push(i.getBoundingClientRect()[t]-n),r===ae-1&&St.push(i.getBoundingClientRect()[e]-n)})}function Ci(){var t=fi(),e=t[0],n=t[1];C(Mt,function(t,i){i>=e&&i<=n?S(t,"aria-hidden")&&(O(t,["aria-hidden","tabindex"]),E(t,Qe)):S(t,"aria-hidden")||(B(t,{"aria-hidden":"true",tabindex:"-1"}),A(t,Qe))})}function Mi(t){return t.nodeName.toLowerCase()}function Ti(t){return"button"===Mi(t)}function Ei(t){return"true"===t.getAttribute("aria-disabled")}function Ai(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Si(){if(Gt&&!Ft&&!jt){var t=Je?tn.disabled:Ei(tn),e=Ue?en.disabled:Ei(en),n=ve<=ye,i=!Ft&&ve>=ge;n&&!t&&Ai(Je,tn,!0),!n&&t&&Ai(Je,tn,!1),i&&!e&&Ai(Ue,en,!0),!i&&e&&Ai(Ue,en,!1)}}function Ni(t,e){J&&(t.style[J]=e)}function Li(t){return null==t&&(t=ve),Bt?(kt-(Ht?Dt:0)-(St[t+1]-St[t]-Dt))/2:Ot?(kt-Ot)/2:(Pt-1)/2}function Bi(){var t=kt+(Ht?Dt:0)-(Ot?(Ot+Dt)*ae:St[ae]);return Rt&&!jt&&(t=Ot?-(Ot+Dt)*(ae-1)-Li():Li(ae-1)-St[ae-1]),t>0&&(t=0),t}function Oi(t){var e;if(null==t&&(t=ve),yt&&!Bt)if(Ot)e=-(Ot+Dt)*t,Rt&&(e+=Li());else{var n=K?ae:Pt;Rt&&(t-=Li()),e=100*-t/n}else e=-St[t],Rt&&Bt&&(e+=Li());return oe&&(e=Math.max(e,ue)),e+=!yt||Bt||Ot?"px":"%"}function Hi(t){Ni(xt,"0s"),Di(t)}function Di(t){null==t&&(t=Oi()),xt.style[se]=ce+t+fe}function ki(t,e,n,i){var r=t+Pt;jt||(r=Math.min(r,ae));for(var a=t;a<r;a++){var o=Mt[a];i||(o.style.left=100*(a-ve)/Pt+"%"),vt&&U&&(o.style[U]=o.style[$]=vt*(a-t)/1e3+"s"),A(o,e),E(o,n),i&&ie.push(o)}}function Ri(t,e){le&&On(),(ve!==pe||e)&&(Te.emit("indexChanged",rr()),Te.emit("transitionStart",rr()),Vt&&hi(),yn&&t&&["click","keydown"].indexOf(t.type)>=0&&Gi(),Ce=!0,Hn())}function Pi(t){return t.toLowerCase().replace(/-/g,"")}function Ii(t){if(ut||Ce){if(Te.emit("transitionEnd",rr(t)),!ut&&ie.length>0)for(var e=0;e<ie.length;e++){var n=ie[e];n.style.left="",$&&U&&(n.style[$]="",n.style[U]=""),A(n,dt),E(n,pt)}if(!t||!ut&&t.target.parentNode===xt||t.target===xt&&Pi(t.propertyName)===Pi(se)){if(!le){var i=ve;On(),ve!==i&&(Te.emit("indexChanged",rr()),Hi())}"inner"===ot&&Te.emit("innerLoaded",rr()),Ce=!1,pe=ve}}}function zi(t,e){if(!Be)if("prev"===t)Wi(e,-1);else if("next"===t)Wi(e,1);else{if(Ce){if(be)return;Ii()}var n=Pn(),i=0;if("first"===t?i=-n:"last"===t?i=ut?Tt-Pt-n:Tt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Tt-1,t))),i=t-n)),!ut&&i&&Math.abs(i)<Pt){var r=i>0?1:-1;i+=ve+i-Tt>=ye?Tt*r:2*Tt*r*-1}ve+=i,ut&&jt&&(ve<ye&&(ve+=Tt),ve>ge&&(ve-=Tt)),Pn(ve)!==Pn(pe)&&Ri(e)}}function Wi(t,e){if(Ce){if(be)return;Ii()}var n;if(!e){for(var i=Ki(t=Yi(t));i!==Ze&&[tn,en].indexOf(i)<0;)i=i.parentNode;var r=[tn,en].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Ft){if(ve===ye&&-1===e)return void zi("last",t);if(ve===ge&&1===e)return void zi("first",t)}e&&(ve+=It*e,Bt&&(ve=Math.floor(ve)),Ri(n||t&&"keydown"===t.type?t:null))}function qi(){hn=setInterval(function(){Wi(null,wn)},Jt),yn=!0}function Fi(){clearInterval(hn),yn=!1}function ji(t,e){B(Cn,{"data-action":t}),Cn.innerHTML=Tn[0]+t+Tn[1]+e}function Vi(){qi(),Cn&&ji("stop",Ut[1])}function Gi(){Fi(),Cn&&ji("start",Ut[0])}function Qi(){yn?(Gi(),bn=!0):(Vi(),bn=!1)}function Xi(t){t.focus()}function Yi(t){return _i(t=t||c.event)?t.changedTouches[0]:t}function Ki(t){return t.target||c.event.srcElement}function _i(t){return t.type.indexOf("touch")>=0}function Ji(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ui(){return w(x(Nn.y-Sn.y,Nn.x-Sn.x),xe)===i.axis}function Zi(t){if(Ce){if(be)return;Ii()}_t&&yn&&Fi(),Ln=!0,An&&(r(An),An=null);var e=Yi(t);Te.emit(_i(t)?"touchStart":"dragStart",rr(t)),!_i(t)&&["img","a"].indexOf(Mi(Ki(t)))>=0&&Ji(t),Nn.x=Sn.x=e.clientX,Nn.y=Sn.y=e.clientY,ut&&(En=parseFloat(xt.style[se].replace(ce,"")),Ni(xt,"0s"))}function $i(t){if(Ln){var e=Yi(t);Nn.x=e.clientX,Nn.y=e.clientY,ut?An||(An=n(function(){!function t(e){if(!we)return void(Ln=!1);r(An);Ln&&(An=n(function(){t(e)}));"?"===we&&(we=Ui());if(we){!_e&&_i(e)&&(_e=!0);try{e.type&&Te.emit(_i(e)?"touchMove":"dragMove",rr(e))}catch(u){}var i=En,a=Bn(Nn,Sn);if(!yt||Ot||Bt)i+=a,i+="px";else{var o=K?a*Pt*100/((kt+Dt)*ae):100*a/(kt+Dt);i+=o,i+="%"}xt.style[se]=ce+i+fe}}(t)})):("?"===we&&(we=Ui()),we&&(_e=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&_e&&t.preventDefault()}}function tr(t){if(Ln){An&&(r(An),An=null),ut&&Ni(xt,""),Ln=!1;var e=Yi(t);Nn.x=e.clientX,Nn.y=e.clientY;var a=Bn(Nn,Sn);if(Math.abs(a)){if(!_i(t)){var o=Ki(t);j(o,{click:function t(e){Ji(e),V(o,{click:t})}})}ut?An=n(function(){if(yt&&!Bt){var e=-a*Pt/(kt+Dt);e=a>0?Math.floor(e):Math.ceil(e),ve+=e}else{var n=-(En+a);if(n<=0)ve=ye;else if(n>=St[ae-1])ve=ge;else for(var i=0;i<ae&&n>=St[i];)ve=i,n>St[i]&&a<0&&(ve+=1),i++}Ri(t,a),Te.emit(_i(t)?"touchEnd":"dragEnd",rr(t))}):we&&Wi(t,a>0?-1:1)}}"auto"===i.preventScrollOnTouch&&(_e=!1),xe&&(we="?"),_t&&!yn&&qi()}function er(){(mt||bt).style.height=St[ve+Pt]-St[ve]+"px"}function nr(){var t=Ot?(Ot+Dt)*Tt/kt:Tt/Pt;return Math.min(Math.ceil(t),Tt)}function ir(){if(Xt&&!Fe&&ln!==sn){var t=sn,e=ln,n=k;for(sn>ln&&(t=ln,e=sn,n=D);t<e;)n(an[t]),t++;sn=ln}}function rr(t){return{container:xt,slideItems:Mt,navContainer:on,navItems:an,controlsContainer:Ze,hasControls:We,prevButton:tn,nextButton:en,items:Pt,slideBy:It,cloneCount:re,slideCount:Tt,slideCountNew:ae,index:ve,indexCached:pe,displayIndex:kn(),navCurrentIndex:fn,navCurrentIndexCached:dn,pages:ln,pagesCached:sn,sheet:te,isOn:At,event:t||{}}}nt&&console.warn("No slides found in",i.container)};exports.tns=X;
   },{}],"A9IQ":[function(require,module,exports) {
   "use strict";var e=require("tiny-slider"),t=document.querySelector("#matches-slider");if(t){var r=Array.from(t.children).indexOf(t.querySelector('[aria-current="true"]')),o=-1===r?0:r;new e.tns({container:t,nav:!1,loop:!1,controls:!1,startIndex:o,mouseDrag:!0,items:1.1,responsive:{768:{items:2},1194:{items:3}}})}var s=document.querySelector(".partners-slider");s&&new e.tns({container:s,nav:!1,mouseDrag:!1,touch:!1,loop:!0,controls:!1,autoplay:!0,autoplayButtonOutput:!1,autoplayTimeout:3e3,gutter:40,slideBy:1,speed:1e3,items:2,responsive:{768:{items:4},1200:{items:6}}});
   },{"tiny-slider":"pe4u"}]},{},["A9IQ"], null)
parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    W0lZ: [
      function (require, module, exports) {
        "use strict";
        function e(e, r) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = t(e)) ||
              (r && e && "number" == typeof e.length)
            ) {
              n && (e = n);
              var o = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return o >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var l,
            i = !0,
            u = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (i = e.done), e;
            },
            e: function (e) {
              (u = !0), (l = e);
            },
            f: function () {
              try {
                i || null == n.return || n.return();
              } finally {
                if (u) throw l;
              }
            },
          };
        }
        function t(e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.typo = l);
        var n = document.querySelectorAll(".typo table"),
          o = document.querySelectorAll(".typo img"),
          a = document.querySelectorAll(".typo iframe");
        function l() {
          if (n.length) {
            var t,
              r = e(n);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var l = t.value,
                  i = document.createElement("div");
                (i.style.overflowX = "auto"),
                  l.parentNode.insertBefore(i, l),
                  i.appendChild(l);
              }
            } catch (d) {
              r.e(d);
            } finally {
              r.f();
            }
          }
          if (o.length) {
            var u,
              f = e(o);
            try {
              for (f.s(); !(u = f.n()).done; ) {
                u.value.loading = "lazy";
              }
            } catch (d) {
              f.e(d);
            } finally {
              f.f();
            }
          }
          if (a.length) {
            var c,
              y = e(a);
            try {
              for (y.s(); !(c = y.n()).done; ) {
                c.value.loading = "lazy";
              }
            } catch (d) {
              y.e(d);
            } finally {
              y.f();
            }
          }
        }
      },
      {},
    ],
    HRwc: [
      function (require, module, exports) {
        "use strict";
        function e() {
          var e = document.querySelector("#cover");
          if (e) {
            var o = null == e ? void 0 : e.dataset.id,
              t = null == e ? void 0 : e.dataset.permanent,
              d = localStorage.getItem("cover-id");
            if (o !== d || "false" !== t)
              e.showModal(),
                document.body.classList.add("overflow-hidden"),
                e.addEventListener("click", function (o) {
                  o.target === e &&
                    (e.remove(),
                    document.body.classList.remove("overflow-hidden"));
                }),
                window.addEventListener("keydown", function (o) {
                  "Escape" === o.key &&
                    (e.remove(),
                    document.body.classList.remove("overflow-hidden"));
                }),
                document
                  .querySelector("[data-cover-close]")
                  .addEventListener("click", function () {
                    localStorage.setItem("cover-id", o),
                      e.remove(),
                      document.body.classList.remove("overflow-hidden");
                  });
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.handleDialog = e);
      },
      {},
    ],
    yCId: [
      function (require, module, exports) {
        "use strict";
        var e = require("./typo"),
          r = require("./dialog");
        (0, e.typo)(), (0, r.handleDialog)();
      },
      { "./typo": "W0lZ", "./dialog": "HRwc" },
    ],
  },
  {},
  ["yCId"],
  null
);

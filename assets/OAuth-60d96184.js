import{u as Wa,j as Vi,Q as Xa}from"./index-58ed2c4e.js";import{r as ls,_ as Ya,C as Ja,F as Za,b as tu,d as eu,e as nu,L as we,f as su,h as hn,S as iu,i as ru,j as ou,g as au,G as uu,k as hu}from"./index-e3d5d3f4-8da5a4f0.js";import{G as cu}from"./iconBase-10507813.js";function lu(e){return cu({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}var du="firebase",fu="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls(du,fu,"app");var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,bs=bs||{},E=gu||self;function cn(){}function kn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function mu(e){return Object.prototype.hasOwnProperty.call(e,Jn)&&e[Jn]||(e[Jn]=++pu)}var Jn="closure_uid_"+(1e9*Math.random()>>>0),pu=0;function yu(e,t,n){return e.call.apply(e.bind,arguments)}function vu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=yu:J=vu,J.apply(null,arguments)}function Xe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var wu=0;Dt.prototype.s=!1;Dt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),wu!=0)&&mu(this)};Dt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Vs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ui(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(kn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var Eu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",cn,t),E.removeEventListener("test",cn,t)}catch{}return e}();function ln(e){return/^[\s\xa0]*$/.test(e)}var $i=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Zn(e,t){return e<t?-1:e>t?1:0}function Nn(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function lt(e){return Nn().indexOf(e)!=-1}function Us(e){return Us[" "](e),e}Us[" "]=cn;function Or(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Tu=lt("Opera"),Ht=lt("Trident")||lt("MSIE"),Pr=lt("Edge"),ds=Pr||Ht,Fr=lt("Gecko")&&!(Nn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),Su=Nn().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function br(){var e=E.document;return e?e.documentMode:void 0}var dn;t:{var ts="",es=function(){var e=Nn();if(Fr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Pr)return/Edge\/([\d\.]+)/.exec(e);if(Ht)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Su)return/WebKit\/(\S+)/.exec(e);if(Tu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(es&&(ts=es?es[1]:""),Ht){var ns=br();if(ns!=null&&ns>parseFloat(ts)){dn=String(ns);break t}}dn=ts}var Cu={};function Iu(){return Or(Cu,9,function(){let e=0;const t=$i(String(dn)).split("."),n=$i("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Zn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Zn(i[2].length==0,r[2].length==0)||Zn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var fs;if(E.document&&Ht){var ji=br();fs=ji||parseInt(dn,10)||void 0}else fs=void 0;var Au=fs;function Ee(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Fr){t:{try{Us(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ku[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ee.$.h.call(this)}}z(Ee,Z);var ku={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),Nu=0;function Du(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Nu,this.fa=this.ia=!1}function Dn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function $s(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vr(e){const t={};for(const n in e)t[n]=e[n];return t}const Bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ur(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Bi.length;r++)n=Bi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function xn(e){this.src=e,this.g={},this.h=0}xn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ms(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Du(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function gs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Lr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ms(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var js="closure_lm_"+(1e6*Math.random()|0),ss={};function $r(e,t,n,s,i){if(s&&s.once)return Br(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)$r(e,t[r],n,s,i);return null}return n=zs(n),e&&e[Pe]?e.O(t,n,Oe(s)?!!s.capture:!!s,i):jr(e,t,n,!1,s,i)}function jr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Oe(i)?!!i.capture:!!i,a=qs(e);if(a||(e[js]=a=new xn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=xu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Eu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(zr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xu(){function e(n){return t.call(e.src,e.listener,n)}const t=Ru;return e}function Br(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Br(e,t[r],n,s,i);return null}return n=zs(n),e&&e[Pe]?e.P(t,n,Oe(s)?!!s.capture:!!s,i):jr(e,t,n,!0,s,i)}function qr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)qr(e,t[r],n,s,i);else s=Oe(s)?!!s.capture:!!s,n=zs(n),e&&e[Pe]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ms(r,n,s,i),-1<n&&(Dn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=qs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ms(t,n,s,i)),(n=-1<e?t[e]:null)&&Bs(n))}function Bs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Pe])gs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(zr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=qs(t))?(gs(n,e),n.h==0&&(n.src=null,t[js]=null)):Dn(e)}}}function zr(e){return e in ss?ss[e]:ss[e]="on"+e}function Ru(e,t){if(e.fa)e=!0;else{t=new Ee(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Bs(e),e=n.call(s,t)}return e}function qs(e){return e=e[js],e instanceof xn?e:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(e){return typeof e=="function"?e:(e[is]||(e[is]=function(t){return e.handleEvent(t)}),e[is])}function q(){Dt.call(this),this.i=new xn(this),this.S=this,this.J=null}z(q,Dt);q.prototype[Pe]=!0;q.prototype.removeEventListener=function(e,t,n,s){qr(this,e,t,n,s)};function Q(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var i=t;t=new Z(s,e),Ur(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ye(o,s,!0,t)&&i}if(o=t.g=e,i=Ye(o,s,!0,t)&&i,i=Ye(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ye(o,s,!1,t)&&i}q.prototype.N=function(){if(q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Dn(n[s]);delete e.g[t],e.h--}}this.J=null};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ye(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&gs(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ks=E.JSON.stringify;function Mu(){var e=Qr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class _u{constructor(){this.h=this.g=null}add(t,n){const s=Kr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Kr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Lu,e=>e.reset());class Lu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ou(e){E.setTimeout(()=>{throw e},0)}function Gr(e,t){ps||Pu(),ys||(ps(),ys=!0),Qr.add(e,t)}var ps;function Pu(){var e=E.Promise.resolve(void 0);ps=function(){e.then(Fu)}}var ys=!1,Qr=new _u;function Fu(){for(var e;e=Mu();){try{e.h.call(e.g)}catch(n){Ou(n)}var t=Kr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ys=!1}function Rn(e,t){q.call(this),this.h=e||1,this.g=t||E,this.j=J(this.qb,this),this.l=Date.now()}z(Rn,q);m=Rn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(Gs(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Rn.$.N.call(this),Gs(this),delete this.g};function Qs(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Hr(e){e.g=Qs(()=>{e.g=null,e.i&&(e.i=!1,Hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class bu extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(e){Dt.call(this),this.h=e,this.g={}}z(Te,Dt);var qi=[];function Wr(e,t,n,s){Array.isArray(n)||(n&&(qi[0]=n.toString()),n=qi);for(var i=0;i<n.length;i++){var r=$r(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Xr(e){$s(e.g,function(t,n){this.g.hasOwnProperty(n)&&Bs(t)},e),e.g={}}Te.prototype.N=function(){Te.$.N.call(this),Xr(this)};Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mn(){this.g=!0}Mn.prototype.Ea=function(){this.g=!1};function Vu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Uu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function qt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ju(e,n)+(s?" "+s:"")})}function $u(e,t){e.info(function(){return"TIMEOUT: "+t})}Mn.prototype.info=function(){};function ju(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ks(n)}catch{return t}}var bt={},zi=null;function _n(){return zi=zi||new q}bt.Ta="serverreachability";function Yr(e){Z.call(this,bt.Ta,e)}z(Yr,Z);function Se(e){const t=_n();Q(t,new Yr(t))}bt.STAT_EVENT="statevent";function Jr(e,t){Z.call(this,bt.STAT_EVENT,e),this.stat=t}z(Jr,Z);function nt(e){const t=_n();Q(t,new Jr(t,e))}bt.Ua="timingevent";function Zr(e,t){Z.call(this,bt.Ua,e),this.size=t}z(Zr,Z);function Fe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Ln={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},to={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hs(){}Hs.prototype.h=null;function Ki(e){return e.h||(e.h=e.i())}function eo(){}var be={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ws(){Z.call(this,"d")}z(Ws,Z);function Xs(){Z.call(this,"c")}z(Xs,Z);var vs;function On(){}z(On,Hs);On.prototype.g=function(){return new XMLHttpRequest};On.prototype.i=function(){return{}};vs=new On;function Ve(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Te(this),this.P=Bu,e=ds?125:void 0,this.V=new Rn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var Bu=45e3,ws={},fn={};m=Ve.prototype;m.setTimeout=function(e){this.P=e};function Es(e,t,n){e.L=1,e.v=Fn(wt(t)),e.s=n,e.S=!0,so(e,null)}function so(e,t){e.G=Date.now(),Ue(e),e.A=wt(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),lo(n.i,"t",s),e.C=0,n=e.l.I,e.h=new no,e.g=Lo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new bu(J(e.Pa,e,e.g),e.O)),Wr(e.U,e.g,"readystatechange",e.nb),t=e.I?Vr(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Se(),Vu(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const c=pt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>c)&&(c!=3||ds||this.g&&(this.h.h||this.g.ja()||Wi(this.g)))){this.J||c!=4||t==7||(t==8||0>=l?Se(3):Se(2)),Pn(this);var n=this.g.da();this.aa=n;e:if(io(this)){var s=Wi(this.g);e="";var i=s.length,r=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rt(this),ge(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Uu(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ln(a)){var h=a;break e}}h=null}if(n=h)qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ts(this,n);else{this.i=!1,this.o=3,nt(12),Rt(this),ge(this);break t}}this.S?(ro(this,c,o),ds&&this.i&&c==3&&(Wr(this.U,this.V,"tick",this.mb),this.V.start())):(qt(this.j,this.m,o,null),Ts(this,o)),c==4&&Rt(this),this.i&&!this.J&&(c==4?xo(this.l,this):(this.i=!1,Ue(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Rt(this),ge(this)}}}catch{}finally{}};function io(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ro(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=qu(e,n),i==fn){t==4&&(e.o=4,nt(14),s=!1),qt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ws){e.o=4,nt(15),qt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else qt(e.j,e.m,i,null),Ts(e,i);io(e)&&i!=fn&&i!=ws&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),si(t),t.L=!0,nt(11))):(qt(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),ge(e))}m.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.C<t.length&&(Pn(this),ro(this,e,t),this.i&&e!=4&&Ue(this))}};function qu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fn:(n=Number(t.substring(n,s)),isNaN(n)?ws:(s+=1,s+n>t.length?fn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.J=!0,Rt(this)};function Ue(e){e.Y=Date.now()+e.P,oo(e,e.P)}function oo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fe(J(e.lb,e),t)}function Pn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?($u(this.j,this.A),this.L!=2&&(Se(),nt(17)),Rt(this),this.o=2,ge(this)):oo(this,this.Y-e)};function ge(e){e.l.H==0||e.J||xo(e.l,e)}function Rt(e){Pn(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Gs(e.V),Xr(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Ts(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Ss(n.h,e))){if(!e.K&&Ss(n.h,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)pn(n),Un(n);else break t;ni(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Fe(J(n.ib,n),6e3));if(1>=mo(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&pn(n),!ln(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.J=h[1],n.oa=h[2];const c=h[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const l=h[4];l!=null&&(n.Ga=l,n.j.info("SVER="+n.Ga));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const I=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.h;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ys(r,r.h),r.h=null))}if(s.F){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.Da=A,_(s.G,s.F,A))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=_o(s,s.I?s.oa:null,s.Y),o.K){po(s.h,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Pn(a),Ue(a)),s.g=o}else No(s);0<n.i.length&&$n(n)}else h[0]!="stop"&&h[0]!="close"||Mt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Mt(n,7):ei(n):h[0]!="noop"&&n.l&&n.l.Aa(h),n.A=0)}}Se(4)}catch{}}function zu(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(kn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ku(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(kn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ao(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(kn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ku(e),s=zu(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Lt){this.h=t!==void 0?t:e.h,gn(this,e.j),this.s=e.s,this.g=e.g,mn(this,e.m),this.l=e.l,t=e.i;var n=new Ce;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gi(this,n),this.o=e.o}else e&&(n=String(e).match(uo))?(this.h=!!t,gn(this,n[1]||"",!0),this.s=ce(n[2]||""),this.g=ce(n[3]||"",!0),mn(this,n[4]),this.l=ce(n[5]||"",!0),Gi(this,n[6]||"",!0),this.o=ce(n[7]||"")):(this.h=!!t,this.i=new Ce(null,this.h))}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(le(t,Qi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(le(t,Qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(le(n,n.charAt(0)=="/"?Wu:Hu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",le(n,Yu)),e.join("")};function wt(e){return new Lt(e)}function gn(e,t,n){e.j=n?ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gi(e,t,n){t instanceof Ce?(e.i=t,Ju(e.i,e.h)):(n||(t=le(t,Xu)),e.i=new Ce(t,e.h))}function _(e,t,n){e.i.set(t,n)}function Fn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Qu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qi=/[#\/\?@]/g,Hu=/[#\?:]/g,Wu=/[#\?]/g,Xu=/[#\?@]/g,Yu=/#/g;function Ce(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&Gu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ce.prototype;m.add=function(e,t){xt(this),this.i=null,e=ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ho(e,t){xt(e),t=ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function co(e,t){return xt(e),t=ne(e,t),e.g.has(t)}m.forEach=function(e,t){xt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.sa=function(){xt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.Z=function(e){xt(this);let t=[];if(typeof e=="string")co(this,e)&&(t=t.concat(this.g.get(ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return xt(this),this.i=null,e=ne(this,e),co(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function lo(e,t,n){ho(e,t),0<n.length&&(e.i=null,e.g.set(ne(e,t),Vs(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ju(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(ho(this,s),lo(this,i,n))},e)),e.j=t}var Zu=class{constructor(e,t){this.h=e,this.g=t}};function fo(e){this.l=e||th,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var th=10;function go(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function mo(e){return e.h?1:e.g?e.g.size:0}function Ss(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ys(e,t){e.g?e.g.add(t):e.h=t}function po(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yo(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Vs(e.i)}function Js(){}Js.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Js.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function eh(){this.g=new Js}function nh(e,t,n){const s=n||"";try{ao(e,function(i,r){let o=i;Oe(i)&&(o=Ks(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function sh(e,t){const n=new Mn;if(E.Image){const s=new Image;s.onload=Xe(Je,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Xe(Je,n,s,"TestLoadImage: error",!1,t),s.onabort=Xe(Je,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Xe(Je,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Je(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function $e(e){this.l=e.fc||null,this.j=e.ob||!1}z($e,Hs);$e.prototype.g=function(){return new bn(this.l,this.j)};$e.prototype.i=function(e){return function(){return e}}({});function bn(e,t){q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(bn,q);var Zs=0;m=bn.prototype;m.open=function(e,t){if(this.readyState!=Zs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ie(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=Zs};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function vo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?je(this):Ie(this),this.readyState==3&&vo(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,je(this))};m.Ya=function(e){this.g&&(this.response=e,je(this))};m.ka=function(){this.g&&je(this)};function je(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ie(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ie(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ih=E.JSON.parse;function P(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wo,this.L=this.M=!1}z(P,q);var wo="",rh=/^https?$/i,oh=["POST","PUT"];m=P.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vs.g(),this.C=this.u?Ki(this.u):Ki(vs),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Hi(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=Lr(oh,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{So(this),0<this.B&&((this.L=ah(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=Qs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Hi(this,r)}};function ah(e){return Ht&&Iu()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof bs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Hi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Eo(e),Vn(e)}function Eo(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),Vn(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),P.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?To(this):this.kb())};m.kb=function(){To(this)};function To(e){if(e.h&&typeof bs<"u"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)Qs(e.La,0,e);else if(Q(e,"readystatechange"),pt(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.I).match(uo)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!rh.test(i?i.toLowerCase():"")}n=s}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var o=2<pt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",Eo(e)}}finally{Vn(e)}}}}function Vn(e,t){if(e.g){So(e);const n=e.g,s=e.C[0]?cn:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=s}catch{}}}function So(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function pt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ih(t)}};function Wi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case wo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Co(e){let t="";return $s(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ti(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Co(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ue(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Io(e){this.Ga=0,this.i=[],this.j=new Mn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ue("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ue("baseRetryDelayMs",5e3,e),this.hb=ue("retryDelaySeedMs",1e4,e),this.eb=ue("forwardChannelMaxRetries",2,e),this.xa=ue("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new fo(e&&e.concurrentRequestLimit),this.Ja=new eh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}m=Io.prototype;m.qa=8;m.H=1;function ei(e){if(Ao(e),e.H==3){var t=e.W++,n=wt(e.G);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Be(e,n),t=new Ve(e,e.j,t,void 0),t.L=2,t.v=Fn(wt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Lo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ue(t)}Mo(e)}function Un(e){e.g&&(si(e),e.g.cancel(),e.g=null)}function Ao(e){Un(e),e.u&&(E.clearTimeout(e.u),e.u=null),pn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function $n(e){go(e.h)||e.m||(e.m=!0,Gr(e.Na,e),e.C=0)}function uh(e,t){return mo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Fe(J(e.Na,e,t),Ro(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ve(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=Vr(r),Ur(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ko(this,i,t),n=wt(this.G),_(n,"RID",e),_(n,"CVER",22),this.F&&_(n,"X-HTTP-Session-Id",this.F),Be(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Co(r)))+"&"+t:this.o&&ti(n,this.o,r)),Ys(this.h,i),this.bb&&_(n,"TYPE","init"),this.P?(_(n,"$req",t),_(n,"SID","null"),i.ba=!0,Es(i,n,null)):Es(i,n,t),this.H=2}}else this.H==3&&(e?Xi(this,e):this.i.length==0||go(this.h)||Xi(this))};function Xi(e,t){var n;t?n=t.m:n=e.W++;const s=wt(e.G);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.V),Be(e,s),e.o&&e.s&&ti(s,e.o,e.s),n=new Ve(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=ko(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ys(e.h,n),Es(n,s,t)}function Be(e,t){e.ma&&$s(e.ma,function(n,s){_(t,s,n)}),e.l&&ao({},function(n,s){_(t,s,n)})}function ko(e,t,n){n=Math.min(e.i.length,n);var s=e.l?J(e.l.Va,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{nh(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,s}function No(e){e.g||e.u||(e.ba=1,Gr(e.Ma,e),e.A=0)}function ni(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Fe(J(e.Ma,e),Ro(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,Do(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Fe(J(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,nt(10),Un(this),Do(this))};function si(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Do(e){e.g=new Ve(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=wt(e.wa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.M?"0":"1"),_(t,"AID",e.V),_(t,"TYPE","xmlhttp"),Be(e,t),e.o&&e.s&&ti(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Fn(wt(t)),n.s=null,n.S=!0,so(n,e)}m.ib=function(){this.v!=null&&(this.v=null,Un(this),ni(this),nt(19))};function pn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function xo(e,t){var n=null;if(e.g==t){pn(e),si(e),e.g=null;var s=2}else if(Ss(e.h,t))n=t.F,po(e.h,t),s=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=_n(),Q(s,new Zr(s,n)),$n(e)}else No(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(s==1&&uh(e,t)||s==2&&ni(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Ro(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Mt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=J(e.pb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||gn(n,"https"),Fn(n)),sh(n.toString(),s)}else nt(2);e.H=0,e.l&&e.l.za(t),Mo(e),Ao(e)}m.pb=function(e){e?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Mo(e){if(e.H=0,e.pa=[],e.l){const t=yo(e.h);(t.length!=0||e.i.length!=0)&&(Ui(e.pa,t),Ui(e.pa,e.i),e.h.i.length=0,Vs(e.i),e.i.length=0),e.l.ya()}}function _o(e,t,n){var s=n instanceof Lt?wt(n):new Lt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),mn(s,s.m);else{var i=E.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Lt(null,void 0);s&&gn(r,s),t&&(r.g=t),i&&mn(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&_(s,n,t),_(s,"VER",e.qa),Be(e,s),s}function Lo(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new P(new $e({ob:!0})):new P(e.va),t.Oa(e.I),t}function Oo(){}m=Oo.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.Va=function(){};function yn(){if(Ht&&!(10<=Number(Au)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new it(e,t)};function it(e,t){q.call(this),this.g=new Io(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ln(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ln(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new se(this)}z(it,q);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=_o(e,null,e.Y),$n(e)};it.prototype.close=function(){ei(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ks(e),e=n);t.i.push(new Zu(t.fb++,e)),t.H==3&&$n(t)};it.prototype.N=function(){this.g.l=null,delete this.j,ei(this.g),delete this.g,it.$.N.call(this)};function Po(e){Ws.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Po,Ws);function Fo(){Xs.call(this),this.status=1}z(Fo,Xs);function se(e){this.g=e}z(se,Oo);se.prototype.Ba=function(){Q(this.g,"a")};se.prototype.Aa=function(e){Q(this.g,new Po(e))};se.prototype.za=function(e){Q(this.g,new Fo)};se.prototype.ya=function(){Q(this.g,"b")};function hh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,hh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rs(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)rs(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){rs(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){rs(this,s),i=0;break}}this.h=i,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function R(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var ch={};function ii(e){return-128<=e&&128>e?Or(ch,e,function(t){return new R([t|0],0>t?-1:0)}):new R([e|0],0>e?-1:0)}function dt(e){if(isNaN(e)||!isFinite(e))return zt;if(0>e)return G(dt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Cs;return new R(t,0)}function bo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(bo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dt(Math.pow(t,8)),s=zt,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=dt(Math.pow(t,r)),s=s.R(r).add(dt(o))):(s=s.R(n),s=s.add(dt(o)))}return s}var Cs=4294967296,zt=ii(0),Is=ii(1),Yi=ii(16777216);m=R.prototype;m.ea=function(){if(rt(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Cs+s)*t,t*=Cs}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(yt(this))return"0";if(rt(this))return"-"+G(this).toString(e);for(var t=dt(Math.pow(e,6)),n=this,s="";;){var i=wn(n,t).g;n=vn(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,yt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function yt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function rt(e){return e.h==-1}m.X=function(e){return e=vn(this,e),rt(e)?-1:yt(e)?0:1};function G(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new R(n,~e.h).add(Is)}m.abs=function(){return rt(this)?G(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new R(n,n[n.length-1]&-2147483648?-1:0)};function vn(e,t){return e.add(G(t))}m.R=function(e){if(yt(this)||yt(e))return zt;if(rt(this))return rt(e)?G(this).R(G(e)):G(G(this).R(e));if(rt(e))return G(this.R(G(e)));if(0>this.X(Yi)&&0>e.X(Yi))return dt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*s+2*i]+=o*u,Ze(n,2*s+2*i),n[2*s+2*i+1]+=r*u,Ze(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Ze(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Ze(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new R(n,0)};function Ze(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function he(e,t){this.g=e,this.h=t}function wn(e,t){if(yt(t))throw Error("division by zero");if(yt(e))return new he(zt,zt);if(rt(e))return t=wn(G(e),t),new he(G(t.g),G(t.h));if(rt(t))return t=wn(e,G(t)),new he(G(t.g),t.h);if(30<e.g.length){if(rt(e)||rt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Is,s=t;0>=s.X(e);)n=Ji(n),s=Ji(s);var i=$t(n,1),r=$t(s,1);for(s=$t(s,2),n=$t(n,2);!yt(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=$t(s,1),n=$t(n,1)}return t=vn(e,i.R(t)),new he(i,t)}for(i=zt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=dt(n),o=r.R(t);rt(o)||0<o.X(e);)n-=s,r=dt(n),o=r.R(t);yt(r)&&(r=Is),i=i.add(r),e=vn(e,o)}return new he(i,e)}m.gb=function(e){return wn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new R(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new R(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new R(n,this.h^e.h)};function Ji(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new R(n,e.h)}function $t(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new R(i,e.h)}yn.prototype.createWebChannel=yn.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Ln.NO_ERROR=0;Ln.TIMEOUT=8;Ln.HTTP_ERROR=6;to.COMPLETE="complete";eo.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";q.prototype.listen=q.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;R.prototype.add=R.prototype.add;R.prototype.multiply=R.prototype.R;R.prototype.modulo=R.prototype.gb;R.prototype.compare=R.prototype.X;R.prototype.toNumber=R.prototype.ea;R.prototype.toString=R.prototype.toString;R.prototype.getBits=R.prototype.D;R.fromNumber=dt;R.fromString=bo;var lh=function(){return new yn},dh=function(){return _n()},os=Ln,fh=to,gh=bt,Zi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},mh=$e,tn=eo,ph=P,yh=ht,Kt=R;const tr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new ru("@firebase/firestore");function er(){return Ot.logLevel}function y(e,...t){if(Ot.logLevel<=we.DEBUG){const n=t.map(ri);Ot.debug(`Firestore (${ie}): ${e}`,...n)}}function Et(e,...t){if(Ot.logLevel<=we.ERROR){const n=t.map(ri);Ot.error(`Firestore (${ie}): ${e}`,...n)}}function Wt(e,...t){if(Ot.logLevel<=we.WARN){const n=t.map(ri);Ot.warn(`Firestore (${ie}): ${e}`,...n)}}function ri(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ie}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function M(e,t){e||T()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Za{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class wh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Eh{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new It;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new It,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new It)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Vo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new W(t)}}class Th{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Sh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Th(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ch{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ih{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.T=n.token,new Ch(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ah(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function x(e,t){return e<t?-1:e>t?1:0}function Xt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new U(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new U(0,0))}static max(){return new S(new U(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ae.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ae?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ae{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const kh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Ae{construct(t,n,s){return new Y(t,n,s)}static isValidIdentifier(t){return kh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(n)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(O.fromString(t))}static fromName(t){return new v(O.fromString(t).popFirst(5))}static empty(){return new v(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new O(t.slice()))}}function Nh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new U(n+1,0):new U(n,s));return new At(i,v.empty(),t)}function Dh(e){return new At(e.readTime,e.key,-1)}class At{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new At(S.min(),v.empty(),-1)}static max(){return new At(S.max(),v.empty(),-1)}}function xh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Rh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new f((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const h=u;n(t[h]).next(c=>{o[h]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(t,n){return new f((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function ze(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}oi.ct=-1;function jn(e){return e==null}function En(e){return e===0&&1/e==-1/0}function _h(e){return typeof e=="number"&&Number.isInteger(e)&&!En(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function re(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $o(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new en(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new en(this.root,t,this.comparator,!1)}getReverseIterator(){return new en(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new en(this.root,t,this.comparator,!0)}}class en{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??K.RED,this.left=i??K.EMPTY,this.right=r??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new K(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sr(this.data.getIterator())}getIteratorFrom(t){return new sr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class sr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new ut([])}unionWith(t){let n=new tt(Y.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Xt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jo("Invalid base64 string: "+i):i}}(t);return new et(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new et(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(e){if(M(!!e),typeof e=="string"){let t=0;const n=Lh.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:b(e.seconds),nanos:b(e.nanos)}}function b(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pt(e){return typeof e=="string"?et.fromBase64String(e):et.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ui(e){const t=e.mapValue.fields.__previous_value__;return ai(t)?ui(t):t}function ke(e){const t=kt(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,n,s,i,r,o,a,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class Ne{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ne("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ne&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ft(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ai(e)?4:Ph(e)?9007199254740991:10:T()}function gt(e,t){if(e===t)return!0;const n=Ft(e);if(n!==Ft(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ke(e).isEqual(ke(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=kt(s.timestampValue),o=kt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Pt(s.bytesValue).isEqual(Pt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return b(s.geoPointValue.latitude)===b(i.geoPointValue.latitude)&&b(s.geoPointValue.longitude)===b(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return b(s.integerValue)===b(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=b(s.doubleValue),o=b(i.doubleValue);return r===o?En(r)===En(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Xt(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(nr(r)!==nr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!gt(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function De(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function Yt(e,t){if(e===t)return 0;const n=Ft(e),s=Ft(t);if(n!==s)return x(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=b(i.integerValue||i.doubleValue),a=b(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ir(e.timestampValue,t.timestampValue);case 4:return ir(ke(e),ke(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Pt(i),a=Pt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=x(o[u],a[u]);if(h!==0)return h}return x(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=x(b(i.latitude),b(r.latitude));return o!==0?o:x(b(i.longitude),b(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=Yt(o[u],a[u]);if(h)return h}return x(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===nn.mapValue&&r===nn.mapValue)return 0;if(i===nn.mapValue)return 1;if(r===nn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=x(a[c],h[c]);if(l!==0)return l;const g=Yt(o[a[c]],u[h[c]]);if(g!==0)return g}return x(a.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function ir(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);const n=kt(e),s=kt(t),i=x(n.seconds,s.seconds);return i!==0?i:x(n.nanos,s.nanos)}function Jt(e){return As(e)}function As(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=kt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=As(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${As(s.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function ks(e){return!!e&&"integerValue"in e}function hi(e){return!!e&&"arrayValue"in e}function rr(e){return!!e&&"nullValue"in e}function or(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function on(e){return!!e&&"mapValue"in e}function me(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return re(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=me(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=me(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ph(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.value=t}static empty(){return new ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!on(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=me(n)}setAll(t){let n=Y.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=me(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());on(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];on(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){re(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ot(me(this.value))}}function Bo(e){const t=[];return re(e.fields,(n,s)=>{const i=new Y([n]);if(on(s)){const r=Bo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new X(t,0,S.min(),S.min(),S.min(),ot.empty(),0)}static newFoundDocument(t,n,s,i){return new X(t,1,n,S.min(),s,i,0)}static newNoDocument(t,n){return new X(t,2,n,S.min(),S.min(),ot.empty(),0)}static newUnknownDocument(t,n){return new X(t,3,n,S.min(),S.min(),ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof X&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n){this.position=t,this.inclusive=n}}function ar(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=Yt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ur(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Fh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{}class V extends qo{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Vh(t,n,s):n==="array-contains"?new jh(t,s):n==="in"?new Bh(t,s):n==="not-in"?new qh(t,s):n==="array-contains-any"?new zh(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Uh(t,s):new $h(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yt(n,this.value)):n!==null&&Ft(this.value)===Ft(n)&&this.matchesComparison(Yt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mt extends qo{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new mt(t,n)}matches(t){return zo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function zo(e){return e.op==="and"}function Ko(e){return bh(e)&&zo(e)}function bh(e){for(const t of e.filters)if(t instanceof mt)return!1;return!0}function Ns(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+Jt(e.value);if(Ko(e))return e.filters.map(t=>Ns(t)).join(",");{const t=e.filters.map(n=>Ns(n)).join(",");return`${e.op}(${t})`}}function Go(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&gt(n.value,s.value)}(e,t):e instanceof mt?function(n,s){return s instanceof mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Go(r,s.filters[o]),!0):!1}(e,t):void T()}function Qo(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${Jt(t.value)}`}(e):e instanceof mt?function(t){return t.op.toString()+" {"+t.getFilters().map(Qo).join(" ,")+"}"}(e):"Filter"}class Vh extends V{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class Uh extends V{constructor(t,n){super(t,"in",n),this.keys=Ho("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $h extends V{constructor(t,n){super(t,"not-in",n),this.keys=Ho("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ho(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class jh extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hi(n)&&De(n.arrayValue,this.value)}}class Bh extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&De(this.value.arrayValue,n)}}class qh extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if(De(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!De(this.value.arrayValue,n)}}class zh extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>De(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function hr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Kh(e,t,n,s,i,r,o)}function ci(e){const t=C(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ns(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),jn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Jt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Jt(s)).join(",")),t.dt=n}return t.dt}function li(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Go(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ur(e.startAt,t.startAt)&&ur(e.endAt,t.endAt)}function Ds(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Gh(e,t,n,s,i,r,o,a){return new Bn(e,t,n,s,i,r,o,a)}function di(e){return new Bn(e)}function cr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Qh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Hh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Wh(e){return e.collectionGroup!==null}function Gt(e){const t=C(e);if(t.wt===null){t.wt=[];const n=Hh(t),s=Qh(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new pe(n)),t.wt.push(new pe(Y.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new pe(Y.keyField(),r))}}}return t.wt}function Tt(e){const t=C(e);if(!t._t)if(t.limitType==="F")t._t=hr(t.path,t.collectionGroup,Gt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Gt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new pe(r.field,o))}const s=t.endAt?new Tn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Tn(t.startAt.position,t.startAt.inclusive):null;t._t=hr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function xs(e,t,n){return new Bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qn(e,t){return li(Tt(e),Tt(t))&&e.limitType===t.limitType}function Wo(e){return`${ci(Tt(e))}|lt:${e.limitType}`}function Rs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Qo(s)).join(", ")}]`),jn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Jt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Jt(s)).join(",")),`Target(${n})`}(Tt(e))}; limitType=${e.limitType})`}function zn(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Gt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ar(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Gt(n),s)||n.endAt&&!function(i,r,o){const a=ar(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Gt(n),s))}(e,t)}function Xh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xo(e){return(t,n)=>{let s=!1;for(const i of Gt(e)){const r=Yh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Yh(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Yt(a,u):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new L(v.comparator);function St(){return Jh}const Yo=new L(v.comparator);function de(...e){let t=Yo;for(const n of e)t=t.insert(n.key,n);return t}function Jo(e){let t=Yo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function _t(){return ye()}function Zo(){return ye()}function ye(){return new oe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Zh=new L(v.comparator),tc=new tt(v.comparator);function N(...e){let t=tc;for(const n of e)t=t.add(n);return t}const ec=new tt(x);function nc(){return ec}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:En(t)?"-0":t}}function ea(e){return{integerValue:""+e}}function sc(e,t){return _h(t)?ea(t):ta(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}function ic(e,t,n){return e instanceof xe?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ai(i)&&(i=ui(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Re?sa(e,t):e instanceof Me?ia(e,t):function(s,i){const r=na(s,i),o=lr(r)+lr(s.gt);return ks(r)&&ks(s.gt)?ea(o):ta(s.serializer,o)}(e,t)}function rc(e,t,n){return e instanceof Re?sa(e,t):e instanceof Me?ia(e,t):n}function na(e,t){return e instanceof Sn?ks(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class xe extends Kn{}class Re extends Kn{constructor(t){super(),this.elements=t}}function sa(e,t){const n=ra(t);for(const s of e.elements)n.some(i=>gt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Me extends Kn{constructor(t){super(),this.elements=t}}function ia(e,t){let n=ra(t);for(const s of e.elements)n=n.filter(i=>!gt(i,s));return{arrayValue:{values:n}}}class Sn extends Kn{constructor(t,n){super(),this.serializer=t,this.gt=n}}function lr(e){return b(e.integerValue||e.doubleValue)}function ra(e){return hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n){this.field=t,this.transform=n}}function ac(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Re&&s instanceof Re||n instanceof Me&&s instanceof Me?Xt(n.elements,s.elements,gt):n instanceof Sn&&s instanceof Sn?gt(n.gt,s.gt):n instanceof xe&&s instanceof xe}(e.transform,t.transform)}class uc{constructor(t,n){this.version=t,this.transformResults=n}}class vt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new vt}static exists(t){return new vt(void 0,t)}static updateTime(t){return new vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function an(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Gn{}function oa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ua(e.key,vt.none()):new Ke(e.key,e.data,vt.none());{const n=e.data,s=ot.empty();let i=new tt(Y.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Vt(e.key,s,new ut(i.toArray()),vt.none())}}function hc(e,t,n){e instanceof Ke?function(s,i,r){const o=s.value.clone(),a=fr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Vt?function(s,i,r){if(!an(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(aa(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ve(e,t,n,s){return e instanceof Ke?function(i,r,o,a){if(!an(i.precondition,r))return o;const u=i.value.clone(),h=gr(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Vt?function(i,r,o,a){if(!an(i.precondition,r))return o;const u=gr(i.fieldTransforms,a,r),h=r.data;return h.setAll(aa(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,s):function(i,r,o){return an(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function cc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=na(s.transform,i||null);r!=null&&(n===null&&(n=ot.empty()),n.set(s.field,r))}return n||null}function dr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Xt(n,s,(i,r)=>ac(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ke extends Gn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vt extends Gn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function aa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function fr(e,t,n){const s=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,rc(o,a,n[i]))}return s}function gr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ic(r,o,t))}return s}class ua extends Gn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lc extends Gn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&hc(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ve(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ve(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Zo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=oa(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&Xt(this.mutations,t.mutations,(n,s)=>dr(n,s))&&Xt(this.baseMutations,t.baseMutations,(n,s)=>dr(n,s))}}class fi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){M(t.mutations.length===s.length);let i=Zh;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new fi(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,D;function mc(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function ha(e){if(e===void 0)return Et("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(D=F||(F={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sn}static getOrCreateInstance(){return sn===null&&(sn=new gi),sn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let sn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Kt([4294967295,4294967295],0);function mr(e){const t=pc().encode(e),n=new yh;return n.update(t),new Uint8Array(n.digest())}function pr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Kt([n,s],0),new Kt([i,r],0)]}class mi{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new fe(`Invalid padding: ${n}`);if(s<0)throw new fe(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new fe(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new fe(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Kt.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply(Kt.fromNumber(s)));return i.compare(yc)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=mr(t),[s,i]=pr(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new mi(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=mr(t),[s,i]=pr(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class fe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Ge.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Qn(S.min(),i,new L(x),St(),N())}}class Ge{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ge(s,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class ca{constructor(t,n){this.targetId=t,this.Vt=n}}class la{constructor(t,n,s=et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class yr{constructor(){this.St=0,this.Dt=wr(),this.Ct=et.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=N(),n=N(),s=N();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:T()}}),new Ge(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=wr()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class vc{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=St(),this.zt=vr(),this.Wt=new L(x)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(Ds(o))if(i===0){const a=new v(o.path);this.Yt(s,a,X.newNoDocument(a,S.min()))}else M(i===1);else{const a=this.ie(s);if(a!==i){const u=this.re(t,a);if(u!==0){this.ee(s);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,h)}(n=gi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,c,l){var g,p,I,A,k,$;const j={localCacheCount:c,existenceFilterCount:l.count},st=l.unchangedNames;return st&&(j.bloomFilter={applied:h===0,hashCount:(g=st==null?void 0:st.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(A=(I=(p=st==null?void 0:st.bits)===null||p===void 0?void 0:p.bitmap)===null||I===void 0?void 0:I.length)!==null&&A!==void 0?A:0,padding:($=(k=st==null?void 0:st.bits)===null||k===void 0?void 0:k.padding)!==null&&$!==void 0?$:0}),j}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let u,h;try{u=Pt(r).toUint8Array()}catch(c){if(c instanceof jo)return Wt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{h=new mi(u,o,a)}catch(c){return Wt(c instanceof fe?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return h.It===0?1:i!==n-this.oe(t.targetId,h)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Ds(a.target)){const u=new v(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,X.newNoDocument(u,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=N();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.se(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new Qn(t,n,this.Wt,this.jt,s);return this.jt=St(),this.zt=vr(),this.Wt=new L(x),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new yr,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new tt(x),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new yr),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function vr(){return new L(v.comparator)}function wr(){return new L(v.comparator)}const wc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ec=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Tc=(()=>({and:"AND",or:"OR"}))();class Sc{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ms(e,t){return e.useProto3Json||jn(t)?t:{value:t}}function Cn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function da(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Cc(e,t){return Cn(e,t.toTimestamp())}function ft(e){return M(!!e),S.fromTimestamp(function(t){const n=kt(t);return new U(n.seconds,n.nanos)}(e))}function pi(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fa(e){const t=O.fromString(e);return M(ya(t)),t}function _s(e,t){return pi(e.databaseId,t.path)}function as(e,t){const n=fa(t);if(n.get(1)!==e.databaseId.projectId)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(ga(n))}function Ls(e,t){return pi(e.databaseId,t)}function Ic(e){const t=fa(e);return t.length===4?O.emptyPath():ga(t)}function Os(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ga(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Er(e,t,n){return{name:_s(e,t),fields:n.value.mapValue.fields}}function Ac(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(M(h===void 0||typeof h=="string"),et.fromBase64String(h||"")):(M(h===void 0||h instanceof Uint8Array),et.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:ha(u.code);return new w(h,u.message||"")}(o);n=new la(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=as(e,s.document.name),r=ft(s.document.updateTime),o=s.document.createTime?ft(s.document.createTime):S.min(),a=new ot({mapValue:{fields:s.document.fields}}),u=X.newFoundDocument(i,r,o,a),h=s.targetIds||[],c=s.removedTargetIds||[];n=new un(h,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=as(e,s.document),r=s.readTime?ft(s.readTime):S.min(),o=X.newNoDocument(i,r),a=s.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=as(e,s.document),r=s.removedTargetIds||[];n=new un([],r,i,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new gc(i,r),a=s.targetId;n=new ca(a,o)}}return n}function kc(e,t){let n;if(t instanceof Ke)n={update:Er(e,t.key,t.value)};else if(t instanceof ua)n={delete:_s(e,t.key)};else if(t instanceof Vt)n={update:Er(e,t.key,t.data),updateMask:Pc(t.fieldMask)};else{if(!(t instanceof lc))return T();n={verify:_s(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof xe)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Re)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Me)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Cc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function Nc(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ft(s.updateTime):ft(i);return r.isEqual(S.min())&&(r=ft(i)),new uc(r,s.transformResults||[])}(n,t))):[]}function Dc(e,t){return{documents:[Ls(e,t.path)]}}function xc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ls(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ls(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return pa(mt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:jt(c.field),direction:_c(c.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Ms(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Rc(e){let t=Ic(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=function(c){const l=ma(c);return l instanceof mt&&Ko(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new pe(Bt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,jn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,g=c.values||[];return new Tn(g,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,g=c.values||[];return new Tn(g,l)}(n.endAt)),Gh(t,i,o,r,a,"F",u,h)}function Mc(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ma(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bt(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bt(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bt(t.unaryFilter.field);return V.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bt(t.unaryFilter.field);return V.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return V.create(Bt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return mt.create(t.compositeFilter.filters.map(n=>ma(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function _c(e){return wc[e]}function Lc(e){return Ec[e]}function Oc(e){return Tc[e]}function jt(e){return{fieldPath:e.canonicalString()}}function Bt(e){return Y.fromServerFormat(e.fieldPath)}function pa(e){return e instanceof V?function(t){if(t.op==="=="){if(or(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NAN"}};if(rr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(or(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NAN"}};if(rr(t.value))return{unaryFilter:{field:jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jt(t.field),op:Lc(t.op),value:t.value}}}(e):e instanceof mt?function(t){const n=t.getFilters().map(s=>pa(s));return n.length===1?n[0]:{compositeFilter:{op:Oc(t.op),filters:n}}}(e):T()}function Pc(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ya(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n,s,i,r=S.min(),o=S.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ct(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t){this.fe=t}}function bc(e){const t=Rc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?xs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.rn=new Uc}addToCollectionParentIndex(t,n){return this.rn.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(At.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(At.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Uc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new tt(O.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new tt(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Zt(0)}static Mn(){return new Zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.changes=new oe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,X.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ve(s.mutation,i,ut.empty(),U.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,N()).next(()=>s))}getLocalViewOfDocuments(t,n,s=N()){const i=_t();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=de();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=_t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,N()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=St();const o=ye(),a=ye();return n.forEach((u,h)=>{const c=s.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof Vt)?r=r.insert(h.key,h):c!==void 0?(o.set(h.key,c.mutation.getFieldMask()),ve(c.mutation,h,c.mutation.getFieldMask(),U.now())):o.set(h.key,ut.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new jc(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ye();let i=new L((o,a)=>o-a),r=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=s.get(u)||ut.empty();c=a.applyToLocalView(h,c),s.set(u,c);const l=(i.get(a.batchId)||N()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=Zo();c.forEach(g=>{if(!r.has(g)){const p=oa(n.get(g),s.get(g));p!==null&&l.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Wh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):f.resolve(_t());let a=-1,u=r;return o.next(h=>f.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(c)?f.resolve():this.remoteDocumentCache.getEntry(t,c).next(g=>{u=u.insert(c,g)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,u,h,N())).next(c=>({batchId:a,changes:Jo(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(s=>{let i=de();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=de();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(h,c){return new Bn(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const h=u.getKey();r.get(h)===null&&(r=r.insert(h,X.newInvalidDocument(h)))});let o=de();return r.forEach((a,u)=>{const h=i.get(a);h!==void 0&&ve(h.mutation,u,ut.empty(),U.now()),zn(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return f.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:ft(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:bc(s.bundledQuery),readTime:ft(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.overlays=new L(v.comparator),this.ls=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=_t();return f.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=_t(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new L((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=_t(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=_t(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fc(n,s));let r=this.ls.get(n);r===void 0&&(r=N(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.fs=new tt(B.ds),this.ws=new tt(B._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new B(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new B(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new v(new O([])),s=new B(n,t),i=new B(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new v(new O([])),s=new B(n,t),i=new B(n,t+1);let r=N();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new B(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return v.comparator(t.key,n.key)||x(t.As,n.As)}static _s(t,n){return x(t.As,n.As)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new tt(B.ds)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new tt(x);return n.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),f.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new B(new v(r),0);let a=new tt(x);return this.Rs.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.As)),!0)},o),f.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return f.forEach(n.mutations,i=>{const r=new B(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new B(n,0),i=this.Rs.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.Ds=t,this.docs=new L(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(t,n){let s=St();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():X.newInvalidDocument(i))}),f.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=St();const o=n.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:c}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||xh(Dh(c),s)<=0||(i.has(c.key)||zn(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,i){T()}Cs(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Qc(this)}getSize(t){return f.resolve(this.size)}}class Qc extends $c{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.persistence=t,this.xs=new oe(n=>ci(n),li),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yi,this.targetCount=0,this.Ms=Zt.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),f.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Zt(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Fn(n),f.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,n){this.$s={},this.overlays={},this.Os=new oi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Hc(this),this.indexManager=new Vc,this.remoteDocumentCache=function(s){return new Gc(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Fc(n),this.qs=new qc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new Kc(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Xc(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return f.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class Xc extends Mh{constructor(t){super(),this.currentSequenceNumber=t}}class vi{constructor(t){this.persistence=t,this.Qs=new yi,this.js=null}static zs(t){return new vi(t)}get Ws(){if(this.js)return this.js;throw T()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ws,s=>{const i=v.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return f.or([()=>f.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=N(),i=N();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new wi(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(cr(n))return f.resolve(null);let s=Tt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xs(n,null,"F"),s=Tt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=N(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const h=this.ji(n,a);return this.zi(n,h,o,u.readTime)?this.Ki(t,xs(n,null,"F")):this.Wi(t,h,n,u)}))})))}Gi(t,n,s,i){return cr(n)||i.isEqual(S.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(er()<=we.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rs(n)),this.Wi(t,o,n,Nh(i,-1)))})}ji(t,n){let s=new tt(Xo(t));return n.forEach((i,r)=>{zn(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return er()<=we.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.Ui.getDocumentsMatchingQuery(t,n,At.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new L(x),this.Yi=new oe(r=>ci(r),li),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Bc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Zc(e,t,n,s){return new Jc(e,t,n,s)}async function va(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=N();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(h=>({er:h,removedBatchIds:o,addedBatchIds:a}))})})}function tl(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let g=f.resolve();return l.forEach(p=>{g=g.next(()=>h.getEntry(a,p)).next(I=>{const A=u.docVersions.get(p);M(A!==null),I.version.compareTo(A)<0&&(c.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function wa(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function el(e,t){const n=C(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((c,l)=>{const g=i.get(l);if(!g)return;a.push(n.Bs.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.Bs.addMatchingKeys(r,c.addedDocuments,l)));let p=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(l)!==null?p=p.withResumeToken(et.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),i=i.insert(l,p),function(I,A,k){return I.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,p,c)&&a.push(n.Bs.updateTargetData(r,p))});let u=St(),h=N();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(nl(r,o,t.documentUpdates).next(c=>{u=c.nr,h=c.sr})),!s.isEqual(S.min())){const c=n.Bs.getLastRemoteSnapshotVersion(r).next(l=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.Ji=i,r))}function nl(e,t,n){let s=N(),i=N();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=St();return n.forEach((a,u)=>{const h=r.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{nr:o,sr:i}})}function sl(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function il(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Ct(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function Ps(e,t,n){const s=C(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ze(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function Tr(e,t,n){const s=C(e);let i=S.min(),r=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=C(a),l=c.Yi.get(h);return l!==void 0?f.resolve(c.Ji.get(l)):c.Bs.getTargetData(u,h)}(s,o,Tt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:N())).next(a=>(rl(s,Xh(t),a),{documents:a,ir:r})))}function rl(e,t,n){let s=e.Xi.get(t)||S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class Sr{constructor(){this.activeTargetIds=nc()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ol{constructor(){this.Hr=new Sr,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Sr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn=null;function us(){return rn===null?rn=268435456+Math.round(2147483648*Math.random()):rn++,"0x"+rn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="WebChannelConnection";class cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=us(),a=this.To(t,n);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,i,r),this.Ao(t,a,u,s).then(h=>(y("RestConnection",`Received RPC '${t}' ${o}: `,h),h),h=>{throw Wt("RestConnection",`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",s),h})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ie,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=ul[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=us();return new Promise((o,a)=>{const u=new ph;u.setWithCredentials(!0),u.listenOnce(fh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case os.NO_ERROR:const c=u.getResponseJson();y(H,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(c)),o(c);break;case os.TIMEOUT:y(H,`RPC '${t}' ${r} timed out`),a(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const l=u.getStatus();if(y(H,`RPC '${t}' ${r} failed with status:`,l,"response text:",u.getResponseText()),l>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const p=g==null?void 0:g.error;if(p&&p.status&&p.message){const I=function(A){const k=A.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(k)>=0?k:d.UNKNOWN}(p.status);a(new w(I,p.message))}else a(new w(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y(H,`RPC '${t}' ${r} completed.`)}});const h=JSON.stringify(i);y(H,`RPC '${t}' ${r} sending request:`,i),u.send(n,"POST",h,s,15)})}Ro(t,n,s){const i=us(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=lh(),a=dh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new mh({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const c=r.join("");y(H,`Creating RPC '${t}' stream ${i}: ${c}`,u);const l=o.createWebChannel(c,u);let g=!1,p=!1;const I=new hl({ro:k=>{p?y(H,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(g||(y(H,`Opening RPC '${t}' stream ${i} transport.`),l.open(),g=!0),y(H,`RPC '${t}' stream ${i} sending:`,k),l.send(k))},oo:()=>l.close()}),A=(k,$,j)=>{k.listen($,st=>{try{j(st)}catch(ct){setTimeout(()=>{throw ct},0)}})};return A(l,tn.EventType.OPEN,()=>{p||y(H,`RPC '${t}' stream ${i} transport opened.`)}),A(l,tn.EventType.CLOSE,()=>{p||(p=!0,y(H,`RPC '${t}' stream ${i} transport closed`),I.wo())}),A(l,tn.EventType.ERROR,k=>{p||(p=!0,Wt(H,`RPC '${t}' stream ${i} transport errored:`,k),I.wo(new w(d.UNAVAILABLE,"The operation could not be completed")))}),A(l,tn.EventType.MESSAGE,k=>{var $;if(!p){const j=k.data[0];M(!!j);const st=j,ct=st.error||(($=st[0])===null||$===void 0?void 0:$.error);if(ct){y(H,`RPC '${t}' stream ${i} received error:`,ct);const We=ct.status;let Yn=function(Ha){const bi=F[Ha];if(bi!==void 0)return ha(bi)}(We),Fi=ct.message;Yn===void 0&&(Yn=d.INTERNAL,Fi="Unknown error status: "+We+" with message "+ct.message),p=!0,I.wo(new w(Yn,Fi)),l.close()}else y(H,`RPC '${t}' stream ${i} received:`,j),I._o(j)}}),A(a,gh.STAT_EVENT,k=>{k.stat===Zi.PROXY?y(H,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Zi.NOPROXY&&y(H,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){return new Sc(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,n,s,i,r,o,a,u){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Ea(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ll extends Ta{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=Ac(this.serializer,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?ft(r.readTime):S.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=Os(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Ds(a)?{documents:Dc(i,a)}:{query:xc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=da(i,r.resumeToken);const u=Ms(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(S.min())>0){o.readTime=Cn(i,r.snapshotVersion.toTimestamp());const u=Ms(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=Mc(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=Os(this.serializer),n.removeTarget=t,this.Wo(n)}}class dl extends Ta{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Nc(t.writeResults,t.commitTime),s=ft(t.commitTime);return this.listener.cu(s,n)}return M(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=Os(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>kc(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class gl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Et(n),this.mu=!1):y("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ut(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u.vu.add(4),await Qe(u),u.bu.set("Unknown"),u.vu.delete(4),await Wn(u)}(this))})}),this.bu=new gl(s,i)}}async function Wn(e){if(Ut(e))for(const t of e.Ru)await t(!0)}async function Qe(e){for(const t of e.Ru)await t(!1)}function Sa(e,t){const n=C(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Si(n)?Ti(n):ae(n).Ko()&&Ei(n,t))}function Ca(e,t){const n=C(e),s=ae(n);n.Au.delete(t),s.Ko()&&Ia(n,t),n.Au.size===0&&(s.Ko()?s.jo():Ut(n)&&n.bu.set("Unknown"))}function Ei(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ae(e).su(t)}function Ia(e,t){e.Vu.qt(t),ae(e).iu(t)}function Ti(e){e.Vu=new vc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ae(e).start(),e.bu.gu()}function Si(e){return Ut(e)&&!ae(e).Uo()&&e.Au.size>0}function Ut(e){return C(e).vu.size===0}function Aa(e){e.Vu=void 0}async function pl(e){e.Au.forEach((t,n)=>{Ei(e,t)})}async function yl(e,t){Aa(e),Si(e)?(e.bu.Iu(t),Ti(e)):e.bu.set("Unknown")}async function vl(e,t,n){if(e.bu.set("Online"),t instanceof la&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await In(e,s)}else if(t instanceof un?e.Vu.Ht(t):t instanceof ca?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(S.min()))try{const s=await wa(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.Au.get(u);h&&i.Au.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const h=i.Au.get(a);if(!h)return;i.Au.set(a,h.withResumeToken(et.EMPTY_BYTE_STRING,h.snapshotVersion)),Ia(i,a);const c=new Ct(h.target,a,u,h.sequenceNumber);Ei(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await In(e,s)}}async function In(e,t,n){if(!ze(t))throw t;e.vu.add(1),await Qe(e),e.bu.set("Offline"),n||(n=()=>wa(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Wn(e)})}function ka(e,t){return t().catch(n=>In(e,n,t))}async function Xn(e){const t=C(e),n=Nt(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;wl(t);)try{const i=await sl(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,El(t,i)}catch(i){await In(t,i)}Na(t)&&Da(t)}function wl(e){return Ut(e)&&e.Eu.length<10}function El(e,t){e.Eu.push(t);const n=Nt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Na(e){return Ut(e)&&!Nt(e).Uo()&&e.Eu.length>0}function Da(e){Nt(e).start()}async function Tl(e){Nt(e).hu()}async function Sl(e){const t=Nt(e);for(const n of e.Eu)t.uu(n.mutations)}async function Cl(e,t,n){const s=e.Eu.shift(),i=fi.from(s,t,n);await ka(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Xn(e)}async function Il(e,t){t&&Nt(e).ou&&await async function(n,s){if(i=s.code,mc(i)&&i!==d.ABORTED){const r=n.Eu.shift();Nt(n).Qo(),await ka(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Xn(n)}var i}(e,t),Na(e)&&Da(e)}async function Ir(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ut(n);n.vu.add(3),await Qe(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Wn(n)}async function Al(e,t){const n=C(e);t?(n.vu.delete(2),await Wn(n)):t||(n.vu.add(2),await Qe(n),n.bu.set("Unknown"))}function ae(e){return e.Su||(e.Su=function(t,n,s){const i=C(t);return i.fu(),new ll(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:pl.bind(null,e),ao:yl.bind(null,e),nu:vl.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),Si(e)?Ti(e):e.bu.set("Unknown")):(await e.Su.stop(),Aa(e))})),e.Su}function Nt(e){return e.Du||(e.Du=function(t,n,s){const i=C(t);return i.fu(),new dl(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Tl.bind(null,e),ao:Il.bind(null,e),au:Sl.bind(null,e),cu:Cl.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await Xn(e)):(await e.Du.stop(),e.Eu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ci(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ii(e,t){if(Et("AsyncQueue",`${t}: ${e}`),ze(e))return new w(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=de(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new Qt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.Cu=new L(v.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):T():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class te{constructor(t,n,s,i,r,o,a,u,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new te(t,n,Qt.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Nu=void 0,this.listeners=[]}}class Nl{constructor(){this.queries=new oe(t=>Wo(t),qn),this.onlineState="Unknown",this.ku=new Set}}async function Dl(e,t){const n=C(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kl),i)try{r.Nu=await n.onListen(s)}catch(o){const a=Ii(o,`Initialization of query '${Rs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&Ai(n)}async function xl(e,t){const n=C(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Rl(e,t){const n=C(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&Ai(n)}function Ml(e,t,n){const s=C(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Ai(e){e.ku.forEach(t=>{t.next()})}class _l{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new te(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){this.key=t}}class Ra{constructor(t){this.key=t}}class Ll{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=N(),this.mutatedKeys=N(),this.tc=Xo(t),this.ec=new Qt(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new Ar,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const g=i.get(c),p=zn(this.query,l)?l:null,I=!!g&&this.mutatedKeys.has(g.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;g&&p?g.data.isEqual(p.data)?I!==A&&(s.track({type:3,doc:p}),k=!0):this.rc(g,p)||(s.track({type:2,doc:p}),k=!0,(u&&this.tc(p,u)>0||h&&this.tc(p,h)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),k=!0):g&&!p&&(s.track({type:1,doc:g}),k=!0,(u||h)&&(a=!0)),k&&(p?(o=o.add(p),r=A?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((h,c)=>function(l,g){const p=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(l)-p(g)}(h.type,c.type)||this.tc(h.doc,c.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,r.length!==0||u?{snapshot:new te(this.query,t.ec,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Ar,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=N(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Ra(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new xa(s))}),n}hc(t){this.Yu=t.ir,this.Zu=N();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return te.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Ol{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Pl{constructor(t){this.key=t,this.fc=!1}}class Fl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new oe(a=>Wo(a),qn),this._c=new Map,this.mc=new Set,this.gc=new L(v.comparator),this.yc=new Map,this.Ic=new yi,this.Tc={},this.Ec=new Map,this.Ac=Zt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function bl(e,t){const n=Ql(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await il(n.localStore,Tt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Vl(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Sa(n.remoteStore,o)}return i}async function Vl(e,t,n,s,i){e.Rc=(l,g,p)=>async function(I,A,k,$){let j=A.view.sc(k);j.zi&&(j=await Tr(I.localStore,A.query,!1).then(({documents:We})=>A.view.sc(We,j)));const st=$&&$.targetChanges.get(A.targetId),ct=A.view.applyChanges(j,I.isPrimaryClient,st);return Nr(I,A.targetId,ct.cc),ct.snapshot}(e,l,g,p);const r=await Tr(e.localStore,t,!0),o=new Ll(t,r.ir),a=o.sc(r.documents),u=Ge.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),h=o.applyChanges(a,e.isPrimaryClient,u);Nr(e,n,h.cc);const c=new Ol(t,n,o);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),h.snapshot}async function Ul(e,t){const n=C(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!qn(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ps(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ca(n.remoteStore,s.targetId),Fs(n,s.targetId)}).catch(qe)):(Fs(n,s.targetId),await Ps(n.localStore,s.targetId,!0))}async function $l(e,t,n){const s=Hl(e);try{const i=await function(r,o){const a=C(r),u=U.now(),h=o.reduce((g,p)=>g.add(p.key),N());let c,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=St(),I=N();return a.Zi.getEntries(g,h).next(A=>{p=A,p.forEach((k,$)=>{$.isValidDocument()||(I=I.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(A=>{c=A;const k=[];for(const $ of o){const j=cc($,c.get($.key).overlayedDocument);j!=null&&k.push(new Vt($.key,j,Bo(j.value.mapValue),vt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,k,o)}).next(A=>{l=A;const k=A.applyToLocalDocumentSet(c,I);return a.documentOverlayCache.saveOverlays(g,A.batchId,k)})}).then(()=>({batchId:l.batchId,changes:Jo(c)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.Tc[r.currentUser.toKey()];u||(u=new L(x)),u=u.insert(o,a),r.Tc[r.currentUser.toKey()]=u}(s,i.batchId,n),await He(s,i.changes),await Xn(s.remoteStore)}catch(i){const r=Ii(i,"Failed to persist write");n.reject(r)}}async function Ma(e,t){const n=C(e);try{const s=await el(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?M(o.fc):i.removedDocuments.size>0&&(M(o.fc),o.fc=!1))}),await He(n,s,t)}catch(s){await qe(s)}}function kr(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.Mu(o)&&(u=!0)}),u&&Ai(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jl(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new L(v.comparator);o=o.insert(r,X.newNoDocument(r,S.min()));const a=N().add(r),u=new Qn(S.min(),new Map,new L(x),o,a);await Ma(s,u),s.gc=s.gc.remove(r),s.yc.delete(t),ki(s)}else await Ps(s.localStore,t,!1).then(()=>Fs(s,t,n)).catch(qe)}async function Bl(e,t){const n=C(e),s=t.batch.batchId;try{const i=await tl(n.localStore,t);La(n,s,null),_a(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await He(n,i)}catch(i){await qe(i)}}async function ql(e,t,n){const s=C(e);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(M(c!==null),h=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(s.localStore,t);La(s,t,n),_a(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await He(s,i)}catch(i){await qe(i)}}function _a(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function La(e,t,n){const s=C(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function Fs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Oa(e,s)})}function Oa(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(Ca(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ki(e))}function Nr(e,t,n){for(const s of n)s instanceof xa?(e.Ic.addReference(s.key,t),zl(e,s)):s instanceof Ra?(y("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Oa(e,s.key)):T()}function zl(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.mc.add(s),ki(e))}function ki(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new v(O.fromString(t)),s=e.Ac.next();e.yc.set(s,new Pl(n)),e.gc=e.gc.insert(n,s),Sa(e.remoteStore,new Ct(Tt(di(n.path)),s,"TargetPurposeLimboResolution",oi.ct))}}async function He(e,t,n){const s=C(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(h=>{if((h||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const c=wi.Li(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,u){const h=C(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.Fi,g=>h.persistence.referenceDelegate.addReference(c,l.targetId,g)).next(()=>f.forEach(l.Bi,g=>h.persistence.referenceDelegate.removeReference(c,l.targetId,g)))))}catch(c){if(!ze(c))throw c;y("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const g=h.Ji.get(l),p=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(p);h.Ji=h.Ji.insert(l,I)}}}(s.localStore,r))}async function Kl(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await va(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await He(n,s.er)}}function Gl(e,t){const n=C(e),s=n.yc.get(t);if(s&&s.fc)return N().add(s.key);{let i=N();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Ql(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ma.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jl.bind(null,t),t.dc.nu=Rl.bind(null,t.eventManager),t.dc.Pc=Ml.bind(null,t.eventManager),t}function Hl(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ql.bind(null,t),t}class Dr{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Zc(this.persistence,new Yc,t.initialUser,this.serializer)}createPersistence(t){return new Wc(vi.zs,this.serializer)}createSharedClientState(t){return new ol}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kl.bind(null,this.syncEngine),await Al(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Nl}createDatastore(t){const n=Hn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new cl(i));var i;return function(r,o,a,u){return new fl(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>kr(this.syncEngine,a,0),o=Cr.D()?new Cr:new al,new ml(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,h){const c=new Fl(s,i,r,o,a,u);return h&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);y("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Qe(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Et("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=Uo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ii(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function cs(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await va(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function xr(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zl(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Ir(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Ir(t.remoteStore,r)),e._onlineComponents=t}function Jl(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Zl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await cs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Jl(n))throw n;Wt("Error using user provided cache. Falling back to memory cache: "+n),await cs(e,new Dr)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await cs(e,new Dr);return e._offlineComponents}async function Pa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await xr(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await xr(e,new Wl))),e._onlineComponents}function td(e){return Pa(e).then(t=>t.syncEngine)}async function ed(e){const t=await Pa(e),n=t.eventManager;return n.onListen=bl.bind(null,t.syncEngine),n.onUnlisten=Ul.bind(null,t.syncEngine),n}function nd(e,t,n={}){const s=new It;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new Xl({next:l=>{r.enqueueAndForget(()=>xl(i,c));const g=l.docs.has(o);!g&&l.fromCache?u.reject(new w(d.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&l.fromCache&&a&&a.source==="server"?u.reject(new w(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new _l(di(o.path),h,{includeMetadataChanges:!0,Ku:!0});return Dl(i,c)}(await ed(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e,t,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function id(e,t,n,s){if(t===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Mr(e){if(!v.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ni(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function _e(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ni(e);throw new w(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}id("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fa((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class Di{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _r({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _r(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vh;switch(n.type){case"firstParty":return new Sh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Rr.get(t);n&&(y("ComponentProvider","Removing Datastore"),Rr.delete(t),n.terminate())}(this),Promise.resolve()}}function rd(e,t,n,s={}){var i;const r=(e=_e(e,Di))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&Wt("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=W.MOCK_USER;else{o=su(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new W(u)}e._authCredentials=new wh(new Vo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}}class xi{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new xi(this.firestore,t,this._query)}}class Le extends xi{constructor(t,n,s){super(t,n,di(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new v(t))}withConverter(t){return new Le(this.firestore,t,this._path)}}function od(e,t,...n){if(e=hn(e),arguments.length===1&&(t=Uo.A()),sd("doc","path",t),e instanceof Di){const s=O.fromString(t,...n);return Mr(s),new at(e,null,new v(s))}{if(!(e instanceof at||e instanceof Le))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Mr(s),new at(e.firestore,e instanceof Le?e.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Ea(this,"async_queue_retry"),this.Xc=()=>{const n=hs();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=hs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new It;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!ze(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=Ci.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Ri extends Di{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new ad,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Va(this),this._firestoreClient.terminate()}}function ud(e,t){const n=typeof e=="object"?e:tu(),s=typeof e=="string"?e:t||"(default)",i=eu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=nu("firestore");r&&rd(i,...r)}return i}function ba(e){return e._firestoreClient||Va(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Va(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,u,h){return new Oh(o,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Fa(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Yl(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ee(et.fromBase64String(t))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ee(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=/^__.*__$/;class cd{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Vt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ke(t,this.data,n,this.fieldTransforms)}}function Ua(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Oi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return An(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Ua(this.ca)&&hd.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class ld{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Hn(t)}ya(t,n,s,i=!1){return new Oi({ca:t,methodName:n,ga:s,path:Y.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dd(e){const t=e._freezeSettings(),n=Hn(e._databaseId);return new ld(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fd(e,t,n,s,i,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,i);qa("Data must be an object, but it was:",o,s);const a=ja(s,o);let u,h;if(r.merge)u=new ut(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const g=gd(t,l,n);if(!o.contains(g))throw new w(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);pd(c,g)||c.push(g)}u=new ut(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new cd(new ot(a),u,h)}class Pi extends _i{_toFieldTransform(t){return new oc(t.path,new xe)}isEqual(t){return t instanceof Pi}}function $a(e,t){if(Ba(e=hn(e)))return qa("Unsupported field value:",t,e),ja(e,t);if(e instanceof _i)return function(n,s){if(!Ua(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$a(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=hn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sc(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=U.fromDate(n);return{timestampValue:Cn(s.serializer,i)}}if(n instanceof U){const i=new U(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cn(s.serializer,i)}}if(n instanceof Li)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ee)return{bytesValue:da(s.serializer,n._byteString)};if(n instanceof at){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ni(n)}`)}(e,t)}function ja(e,t){const n={};return $o(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(e,(s,i)=>{const r=$a(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ba(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof U||e instanceof Li||e instanceof ee||e instanceof at||e instanceof _i)}function qa(e,t,n){if(!Ba(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ni(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function gd(e,t,n){if((t=hn(t))instanceof Mi)return t._internalPath;if(typeof t=="string")return za(e,t);throw An("Field path arguments must be of type string or ",e,!1,void 0,n)}const md=new RegExp("[~\\*/\\[\\]]");function za(e,t,n){if(t.search(md)>=0)throw An(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mi(...t.split("."))._internalPath}catch{throw An(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function An(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new w(d.INVALID_ARGUMENT,a+e+u)}function pd(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ga("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yd extends Ka{data(){return super.data()}}function Ga(e,t){return typeof t=="string"?za(e,t):t instanceof Mi?t._internalPath:t._delegate._internalPath}class vd{convertValue(t,n="none"){switch(Ft(t)){case 0:return null;case 1:return t.booleanValue;case 2:return b(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return re(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Li(b(t.latitude),b(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ui(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ke(t));default:return null}}convertTimestamp(t){const n=kt(t);return new U(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);M(ya(s));const i=new Ne(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||Et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qa extends Ka{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Td(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ga("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Td extends Qa{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e){e=_e(e,at);const t=_e(e.firestore,Ri);return nd(ba(t),e._key).then(n=>kd(t,e,n))}class Cd extends vd{constructor(t){super(),this.firestore=t}convertBytes(t){return new ee(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Id(e,t,n){e=_e(e,at);const s=_e(e.firestore,Ri),i=wd(e.converter,t,n);return Ad(s,[fd(dd(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,vt.none())])}function Ad(e,t){return function(n,s){const i=new It;return n.asyncQueue.enqueueAndForget(async()=>$l(await td(n),s,i)),i.promise}(ba(e),t)}function kd(e,t,n){const s=n.docs.get(t._key),i=new Cd(e);return new Qa(e,i,t._key,s,new Ed(n.hasPendingWrites,n.fromCache),t.converter)}function Nd(){return new Pi("serverTimestamp")}(function(e,t=!0){(function(n){ie=n})(iu),Ya(new Ja("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ri(new Eh(n.getProvider("auth-internal")),new Ih(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ne(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ls(tr,"3.12.0",e),ls(tr,"3.12.0","esm2017")})();const Dd={apiKey:"AIzaSyDKtajGUdjVpn_Zf8Twq2D8Gyndpu51r4o",authDomain:"realestate-b4de7.firebaseapp.com",projectId:"realestate-b4de7",storageBucket:"realestate-b4de7.appspot.com",messagingSenderId:"829677483220",appId:"1:829677483220:web:0cb9034dac811f7957b741"};ou(Dd);const xd=ud();function Ld(){const e=Wa();async function t(){try{const n=au(),s=new uu,r=(await hu(n,s)).user,o=od(xd,"users",r.uid);(await Sd(o)).exists()||await Id(o,{name:r.displayName,email:r.email,timestamp:Nd()}),e("/")}catch{Xa.error("Couldn`t autorize with Google")}}return Vi.jsxs("button",{type:"button",onClick:t,className:"flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800",children:[Vi.jsx(lu,{className:"mr-2 text-2xl bg-white rounded-full"})," Continue with Google"]})}export{Nd as G,Ld as O,xd as d,od as g,Id as m};

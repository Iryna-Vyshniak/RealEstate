(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sv={exports:{}},yu={},Iv={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),FT=Symbol.for("react.portal"),jT=Symbol.for("react.fragment"),VT=Symbol.for("react.strict_mode"),BT=Symbol.for("react.profiler"),zT=Symbol.for("react.provider"),HT=Symbol.for("react.context"),qT=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),KT=Symbol.for("react.memo"),GT=Symbol.for("react.lazy"),km=Symbol.iterator;function QT(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cv=Object.assign,xv={};function as(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||kv}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rv(){}Rv.prototype=as.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||kv}var af=of.prototype=new Rv;af.constructor=of;Cv(af,as.prototype);af.isPureReactComponent=!0;var Cm=Array.isArray,Nv=Object.prototype.hasOwnProperty,lf={current:null},Av={key:!0,ref:!0,__self:!0,__source:!0};function Pv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nv.call(e,r)&&!Av.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:lf.current}}function YT(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function XT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xm=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XT(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case FT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sc(o,0):r,Cm(i)?(n="",t!=null&&(n=t.replace(xm,"$&/")+"/"),Xa(i,e,n,"",function(u){return u})):i!=null&&(uf(i)&&(i=YT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sc(s,a);o+=Xa(s,e,n,l,i)}else if(l=QT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sc(s,a++),o+=Xa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ja={transition:null},ZT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:lf};W.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=as;W.Fragment=jT;W.Profiler=BT;W.PureComponent=of;W.StrictMode=VT;W.Suspense=WT;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Nv.call(e,l)&&!Av.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:HT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zT,_context:t},t.Consumer=t};W.createElement=Pv;W.createFactory=function(t){var e=Pv.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:qT,render:t}};W.isValidElement=uf;W.lazy=function(t){return{$$typeof:GT,_payload:{_status:-1,_result:t},_init:JT}};W.memo=function(t,e){return{$$typeof:KT,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return ct.current.useCallback(t,e)};W.useContext=function(t){return ct.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};W.useEffect=function(t,e){return ct.current.useEffect(t,e)};W.useId=function(){return ct.current.useId()};W.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return ct.current.useMemo(t,e)};W.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};W.useRef=function(t){return ct.current.useRef(t)};W.useState=function(t){return ct.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return ct.current.useTransition()};W.version="18.2.0";Iv.exports=W;var S=Iv.exports;const Y=UT(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS=S,tS=Symbol.for("react.element"),nS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,iS=eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sS={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rS.call(e,r)&&!sS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tS,type:t,key:s,ref:o,props:i,_owner:iS.current}}yu.Fragment=nS;yu.jsx=Dv;yu.jsxs=Dv;Sv.exports=yu;var T=Sv.exports,Ch={},Ov={exports:{}},xt={},Lv={exports:{}},$v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,F){var H=A.length;A.push(F);e:for(;0<H;){var he=H-1>>>1,Ee=A[he];if(0<i(Ee,F))A[he]=F,A[H]=Ee,H=he;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],H=A.pop();if(H!==F){A[0]=H;e:for(var he=0,Ee=A.length,At=Ee>>>1;he<At;){var fn=2*(he+1)-1,Tc=A[fn],Cr=fn+1,va=A[Cr];if(0>i(Tc,H))Cr<Ee&&0>i(va,Tc)?(A[he]=va,A[Cr]=H,he=Cr):(A[he]=Tc,A[fn]=H,he=fn);else if(Cr<Ee&&0>i(va,H))A[he]=va,A[Cr]=H,he=Cr;else break e}}return F}function i(A,F){var H=A.sortIndex-F.sortIndex;return H!==0?H:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function _(A){if(v=!1,g(A),!y)if(n(l)!==null)y=!0,re(E);else{var F=n(u);F!==null&&Ie(_,F.startTime-A)}}function E(A,F){y=!1,v&&(v=!1,p(R),R=-1),m=!0;var H=d;try{for(g(F),h=n(l);h!==null&&(!(h.expirationTime>F)||A&&!_e());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var Ee=he(h.expirationTime<=F);F=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),g(F)}else r(l);h=n(l)}if(h!==null)var At=!0;else{var fn=n(u);fn!==null&&Ie(_,fn.startTime-F),At=!1}return At}finally{h=null,d=H,m=!1}}var k=!1,N=null,R=-1,b=5,M=-1;function _e(){return!(t.unstable_now()-M<b)}function te(){if(N!==null){var A=t.unstable_now();M=A;var F=!0;try{F=N(!0,A)}finally{F?Ue():(k=!1,N=null)}}else k=!1}var Ue;if(typeof f=="function")Ue=function(){f(te)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Nt=Ne.port2;Ne.port1.onmessage=te,Ue=function(){Nt.postMessage(null)}}else Ue=function(){w(te,0)};function re(A){N=A,k||(k=!0,Ue())}function Ie(A,F){R=w(function(){A(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,re(E))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var H=d;d=F;try{return A()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=d;d=A;try{return F()}finally{d=H}},t.unstable_scheduleCallback=function(A,F,H){var he=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?he+H:he):H=he,A){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=H+Ee,A={id:c++,callback:F,priorityLevel:A,startTime:H,expirationTime:Ee,sortIndex:-1},H>he?(A.sortIndex=H,e(u,A),n(l)===null&&A===n(u)&&(v?(p(R),R=-1):v=!0,Ie(_,H-he))):(A.sortIndex=Ee,e(l,A),y||m||(y=!0,re(E))),A},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(A){var F=d;return function(){var H=d;d=F;try{return A.apply(this,arguments)}finally{d=H}}}})($v);Lv.exports=$v;var oS=Lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=S,kt=oS;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mv=new Set,lo={};function ri(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(lo[t]=e,t=0;t<e.length;t++)Mv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Nm={};function lS(t){return xh.call(Nm,t)?!0:xh.call(Rm,t)?!1:aS.test(t)?Nm[t]=!0:(Rm[t]=!0,!1)}function uS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cS(t,e,n,r){if(e===null||typeof e>"u"||uS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cf,hf);qe[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cf,hf);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cf,hf);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function df(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cS(e,n,i,r)&&(n=null),r||i===null?lS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),jv=Symbol.for("react.offscreen"),Am=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Ic;function Os(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var kc=!1;function Cc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function hS(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Rh:return"Profiler";case ff:return"StrictMode";case Nh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fv:return(t.displayName||"Context")+".Consumer";case Uv:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function dS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fS(t){var e=Vv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=fS(t))}function Bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dh(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zv(t,e){e=e.checked,e!=null&&df(t,"checked",e,!1)}function Oh(t,e){zv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lh(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ls(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Hv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,Wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){pS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function Kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function Gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mS=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(t,e){if(e){if(mS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jh=null,Di=null,Oi=null;function $m(t){if(t=Wo(t)){if(typeof jh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Tu(e),jh(t.stateNode,t.type,e))}}function Qv(t){Di?Oi?Oi.push(t):Oi=[t]:Di=t}function Yv(){if(Di){var t=Di,e=Oi;if(Oi=Di=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function Xv(t,e){return t(e)}function Jv(){}var xc=!1;function Zv(t,e,n){if(xc)return t(e,n);xc=!0;try{return Xv(t,e,n)}finally{xc=!1,(Di!==null||Oi!==null)&&(Jv(),Yv())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=Tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Vh=!1;if(kn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Vh=!1}function gS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ws=!1,wl=null,_l=!1,Bh=null,yS={onError:function(t){Ws=!0,wl=t}};function vS(t,e,n,r,i,s,o,a,l){Ws=!1,wl=null,gS.apply(yS,arguments)}function wS(t,e,n,r,i,s,o,a,l){if(vS.apply(this,arguments),Ws){if(Ws){var u=wl;Ws=!1,wl=null}else throw Error(C(198));_l||(_l=!0,Bh=u)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(ii(t)!==t)throw Error(C(188))}function _S(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),t;if(s===r)return bm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function t0(t){return t=_S(t),t!==null?n0(t):null}function n0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n0(t);if(e!==null)return e;t=t.sibling}return null}var r0=kt.unstable_scheduleCallback,Mm=kt.unstable_cancelCallback,ES=kt.unstable_shouldYield,TS=kt.unstable_requestPaint,Te=kt.unstable_now,SS=kt.unstable_getCurrentPriorityLevel,yf=kt.unstable_ImmediatePriority,i0=kt.unstable_UserBlockingPriority,El=kt.unstable_NormalPriority,IS=kt.unstable_LowPriority,s0=kt.unstable_IdlePriority,vu=null,rn=null;function kS(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:RS,CS=Math.log,xS=Math.LN2;function RS(t){return t>>>=0,t===0?32:31-(CS(t)/xS|0)|0}var Sa=64,Ia=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$s(a):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function NS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=NS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function PS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function a0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l0,wf,u0,c0,h0,Hh=!1,ka=[],Jn=null,Zn=null,er=null,ho=new Map,fo=new Map,jn=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OS(t,e,n,r,i){switch(e){case"focusin":return Jn=Is(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=Is(Zn,t,e,n,r,i),!0;case"mouseover":return er=Is(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,Is(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,Is(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function d0(t){var e=Pr(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=e0(n),e!==null){t.blockedOn=e,h0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=Wo(n),e!==null&&wf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Za(t)&&n.delete(e)}function LS(){Hh=!1,Jn!==null&&Za(Jn)&&(Jn=null),Zn!==null&&Za(Zn)&&(Zn=null),er!==null&&Za(er)&&(er=null),ho.forEach(Fm),fo.forEach(Fm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Hh||(Hh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,LS)))}function po(t){function e(i){return ks(i,t)}if(0<ka.length){ks(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&ks(Jn,t),Zn!==null&&ks(Zn,t),er!==null&&ks(er,t),ho.forEach(e),fo.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&jn.shift()}var Li=Ln.ReactCurrentBatchConfig,Sl=!0;function $S(t,e,n,r){var i=Z,s=Li.transition;Li.transition=null;try{Z=1,_f(t,e,n,r)}finally{Z=i,Li.transition=s}}function bS(t,e,n,r){var i=Z,s=Li.transition;Li.transition=null;try{Z=4,_f(t,e,n,r)}finally{Z=i,Li.transition=s}}function _f(t,e,n,r){if(Sl){var i=qh(t,e,n,r);if(i===null)Uc(t,e,r,Il,n),Um(t,r);else if(OS(i,t,e,n,r))r.stopPropagation();else if(Um(t,r),e&4&&-1<DS.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&l0(s),s=qh(t,e,n,r),s===null&&Uc(t,e,r,Il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uc(t,e,r,null,n)}}var Il=null;function qh(t,e,n,r){if(Il=null,t=gf(r),t=Pr(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function f0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case yf:return 1;case i0:return 4;case El:case IS:return 16;case s0:return 536870912;default:return 16}default:return 16}}var Kn=null,Ef=null,el=null;function p0(){if(el)return el;var t,e=Ef,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function jm(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:jm,this.isPropagationStopped=jm,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=Rt(ls),qo=pe({},ls,{view:0,detail:0}),MS=Rt(qo),Nc,Ac,Cs,wu=pe({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(Nc=t.screenX-Cs.screenX,Ac=t.screenY-Cs.screenY):Ac=Nc=0,Cs=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Vm=Rt(wu),US=pe({},wu,{dataTransfer:0}),FS=Rt(US),jS=pe({},qo,{relatedTarget:0}),Pc=Rt(jS),VS=pe({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=Rt(VS),zS=pe({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Rt(zS),qS=pe({},ls,{data:0}),Bm=Rt(qS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GS[t])?!!e[t]:!1}function Sf(){return QS}var YS=pe({},qo,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=Rt(YS),JS=pe({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Rt(JS),ZS=pe({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),eI=Rt(ZS),tI=pe({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),nI=Rt(tI),rI=pe({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iI=Rt(rI),sI=[9,13,27,32],If=kn&&"CompositionEvent"in window,Ks=null;kn&&"documentMode"in document&&(Ks=document.documentMode);var oI=kn&&"TextEvent"in window&&!Ks,m0=kn&&(!If||Ks&&8<Ks&&11>=Ks),Hm=String.fromCharCode(32),qm=!1;function g0(t,e){switch(t){case"keyup":return sI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function aI(t,e){switch(t){case"compositionend":return y0(e);case"keypress":return e.which!==32?null:(qm=!0,Hm);case"textInput":return t=e.data,t===Hm&&qm?null:t;default:return null}}function lI(t,e){if(_i)return t==="compositionend"||!If&&g0(t,e)?(t=p0(),el=Ef=Kn=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var uI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uI[t.type]:e==="textarea"}function v0(t,e,n,r){Qv(r),e=kl(e,"onChange"),0<e.length&&(n=new Tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,mo=null;function cI(t){N0(t,0)}function _u(t){var e=Si(t);if(Bv(e))return t}function hI(t,e){if(t==="change")return e}var w0=!1;if(kn){var Dc;if(kn){var Oc="oninput"in document;if(!Oc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Oc=typeof Km.oninput=="function"}Dc=Oc}else Dc=!1;w0=Dc&&(!document.documentMode||9<document.documentMode)}function Gm(){Gs&&(Gs.detachEvent("onpropertychange",_0),mo=Gs=null)}function _0(t){if(t.propertyName==="value"&&_u(mo)){var e=[];v0(e,mo,t,gf(t)),Zv(cI,e)}}function dI(t,e,n){t==="focusin"?(Gm(),Gs=e,mo=n,Gs.attachEvent("onpropertychange",_0)):t==="focusout"&&Gm()}function fI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(mo)}function pI(t,e){if(t==="click")return _u(e)}function mI(t,e){if(t==="input"||t==="change")return _u(e)}function gI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:gI;function go(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xh.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function E0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T0(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yI(t){var e=T0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ym(n,s);var o=Ym(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vI=kn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Wh=null,Qs=null,Kh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||Ei==null||Ei!==vl(r)||(r=Ei,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&go(Qs,r)||(Qs=r,r=kl(Wh,"onSelect"),0<r.length&&(e=new Tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Lc={},S0={};kn&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Eu(t){if(Lc[t])return Lc[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return Lc[t]=e[n];return t}var I0=Eu("animationend"),k0=Eu("animationiteration"),C0=Eu("animationstart"),x0=Eu("transitionend"),R0=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){R0.set(t,e),ri(e,[t])}for(var $c=0;$c<Jm.length;$c++){var bc=Jm[$c],wI=bc.toLowerCase(),_I=bc[0].toUpperCase()+bc.slice(1);yr(wI,"on"+_I)}yr(I0,"onAnimationEnd");yr(k0,"onAnimationIteration");yr(C0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(x0,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EI=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wS(r,e,void 0,t),t.currentTarget=null}function N0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zm(i,a,u),s=l}}}if(_l)throw t=Bh,_l=!1,Bh=null,t}function ie(t,e){var n=e[Jh];n===void 0&&(n=e[Jh]=new Set);var r=t+"__bubble";n.has(r)||(A0(e,t,2,!1),n.add(r))}function Mc(t,e,n){var r=0;e&&(r|=4),A0(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ra]){t[Ra]=!0,Mv.forEach(function(n){n!=="selectionchange"&&(EI.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Mc("selectionchange",!1,e))}}function A0(t,e,n,r){switch(f0(e)){case 1:var i=$S;break;case 4:i=bS;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zv(function(){var u=s,c=gf(n),h=[];e:{var d=R0.get(t);if(d!==void 0){var m=Tf,y=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":m=XS;break;case"focusin":y="focus",m=Pc;break;case"focusout":y="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=eI;break;case I0:case k0:case C0:m=BS;break;case x0:m=nI;break;case"scroll":m=MS;break;case"wheel":m=iI;break;case"copy":case"cut":case"paste":m=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=zm}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=co(f,p),_!=null&&v.push(vo(f,_,g)))),w)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Fh&&(y=n.relatedTarget||n.fromElement)&&(Pr(y)||y[Cn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Pr(y):null,y!==null&&(w=ii(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=Vm,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=zm,_="onPointerLeave",p="onPointerEnter",f="pointer"),w=m==null?d:Si(m),g=y==null?d:Si(y),d=new v(_,f+"leave",m,n,c),d.target=w,d.relatedTarget=g,_=null,Pr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=g,v.relatedTarget=w,_=v),w=_,m&&y)t:{for(v=m,p=y,f=0,g=v;g;g=di(g))f++;for(g=0,_=p;_;_=di(_))g++;for(;0<f-g;)v=di(v),f--;for(;0<g-f;)p=di(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=di(v),p=di(p)}v=null}else v=null;m!==null&&eg(h,d,m,v,!1),y!==null&&w!==null&&eg(h,w,y,v,!0)}}e:{if(d=u?Si(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=hI;else if(Wm(d))if(w0)E=mI;else{E=fI;var k=dI}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=pI);if(E&&(E=E(t,u))){v0(h,E,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Lh(d,"number",d.value)}switch(k=u?Si(u):window,t){case"focusin":(Wm(k)||k.contentEditable==="true")&&(Ei=k,Wh=u,Qs=null);break;case"focusout":Qs=Wh=Ei=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,Xm(h,n,c);break;case"selectionchange":if(vI)break;case"keydown":case"keyup":Xm(h,n,c)}var N;if(If)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _i?g0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(m0&&n.locale!=="ko"&&(_i||R!=="onCompositionStart"?R==="onCompositionEnd"&&_i&&(N=p0()):(Kn=c,Ef="value"in Kn?Kn.value:Kn.textContent,_i=!0)),k=kl(u,R),0<k.length&&(R=new Bm(R,t,null,n,c),h.push({event:R,listeners:k}),N?R.data=N:(N=y0(n),N!==null&&(R.data=N)))),(N=oI?aI(t,n):lI(t,n))&&(u=kl(u,"onBeforeInput"),0<u.length&&(c=new Bm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}N0(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(vo(t,s,i)),s=co(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=co(n,s),l!=null&&o.unshift(vo(n,l,a))):i||(l=co(n,s),l!=null&&o.push(vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TI=/\r\n?/g,SI=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(TI,`
`).replace(SI,"")}function Na(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(C(425))}function Cl(){}var Gh=null,Qh=null;function Yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,II=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(CI)}:Xh;function CI(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);po(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Zt="__reactFiber$"+us,wo="__reactProps$"+us,Cn="__reactContainer$"+us,Jh="__reactEvents$"+us,xI="__reactListeners$"+us,RI="__reactHandles$"+us;function Pr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[Zt])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Zt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Tu(t){return t[wo]||null}var Zh=[],Ii=-1;function vr(t){return{current:t}}function oe(t){0>Ii||(t.current=Zh[Ii],Zh[Ii]=null,Ii--)}function ne(t,e){Ii++,Zh[Ii]=t.current,t.current=e}var dr={},nt=vr(dr),yt=vr(!1),zr=dr;function qi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function xl(){oe(yt),oe(nt)}function ig(t,e,n){if(nt.current!==dr)throw Error(C(168));ne(nt,e),ne(yt,n)}function P0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,dS(t)||"Unknown",i));return pe({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,zr=nt.current,ne(nt,t),ne(yt,yt.current),!0}function sg(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=P0(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,oe(yt),oe(nt),ne(nt,t)):oe(yt),ne(yt,n)}var mn=null,Su=!1,jc=!1;function D0(t){mn===null?mn=[t]:mn.push(t)}function NI(t){Su=!0,D0(t)}function wr(){if(!jc&&mn!==null){jc=!0;var t=0,e=Z;try{var n=mn;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,Su=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),r0(yf,wr),i}finally{Z=e,jc=!1}}return null}var ki=[],Ci=0,Nl=null,Al=0,Ot=[],Lt=0,Hr=null,gn=1,yn="";function xr(t,e){ki[Ci++]=Al,ki[Ci++]=Nl,Nl=t,Al=e}function O0(t,e,n){Ot[Lt++]=gn,Ot[Lt++]=yn,Ot[Lt++]=Hr,Hr=t;var r=gn;t=yn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-qt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Cf(t){t.return!==null&&(xr(t,1),O0(t,1,0))}function xf(t){for(;t===Nl;)Nl=ki[--Ci],ki[Ci]=null,Al=ki[--Ci],ki[Ci]=null;for(;t===Hr;)Hr=Ot[--Lt],Ot[Lt]=null,yn=Ot[--Lt],Ot[Lt]=null,gn=Ot[--Lt],Ot[Lt]=null}var It=null,Et=null,ue=!1,Ht=null;function L0(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Et=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Et=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(ue){var e=Et;if(e){var n=e;if(!og(t,e)){if(ed(t))throw Error(C(418));e=tr(n.nextSibling);var r=It;e&&og(t,e)?L0(r,n):(t.flags=t.flags&-4097|2,ue=!1,It=t)}}else{if(ed(t))throw Error(C(418));t.flags=t.flags&-4097|2,ue=!1,It=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Aa(t){if(t!==It)return!1;if(!ue)return ag(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yh(t.type,t.memoizedProps)),e&&(e=Et)){if(ed(t))throw $0(),Error(C(418));for(;e;)L0(t,e),e=tr(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=It?tr(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=Et;t;)t=tr(t.nextSibling)}function Wi(){Et=It=null,ue=!1}function Rf(t){Ht===null?Ht=[t]:Ht.push(t)}var AI=Ln.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Pl=vr(null),Dl=null,xi=null,Nf=null;function Af(){Nf=xi=Dl=null}function Pf(t){var e=Pl.current;oe(Pl),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $i(t,e){Dl=t,Nf=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(Dl===null)throw Error(C(308));xi=t,Dl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Dr=null;function Df(t){Dr===null?Dr=[t]:Dr.push(t)}function b0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Df(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Df(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vf(t,n)}}function lg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=pe({},h,d);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=h}}function ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var U0=new bv.Component().refs;function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ir(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Wt(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ir(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Wt(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ir(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Wt(e,t,r,n),nl(e,t,r))}};function cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function F0(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=vt(e)?zr:nt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=U0,Of(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=vt(e)?zr:nt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Iu.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===U0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function j0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=sr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,_){return f===null||f.tag!==6?(f=Kc(g,p.mode,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,_){var E=g.type;return E===wi?c(p,f,g.props.children,_,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&dg(E)===f.type)?(_=i(f,g.props),_.ref=xs(p,f,g),_.return=p,_):(_=ll(g.type,g.key,g.props,null,p.mode,_),_.ref=xs(p,f,g),_.return=p,_)}function u(p,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Gc(g,p.mode,_),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,_,E){return f===null||f.tag!==7?(f=Fr(g,p.mode,_,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Kc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _a:return g=ll(f.type,f.key,f.props,null,p.mode,g),g.ref=xs(p,null,f),g.return=p,g;case vi:return f=Gc(f,p.mode,g),f.return=p,f;case Un:var _=f._init;return h(p,_(f._payload),g)}if(Ls(f)||Ts(f))return f=Fr(f,p.mode,g,null),f.return=p,f;Pa(p,f)}return null}function d(p,f,g,_){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(p,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:return g.key===E?l(p,f,g,_):null;case vi:return g.key===E?u(p,f,g,_):null;case Un:return E=g._init,d(p,f,E(g._payload),_)}if(Ls(g)||Ts(g))return E!==null?null:c(p,f,g,_,null);Pa(p,g)}return null}function m(p,f,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(f,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return p=p.get(_.key===null?g:_.key)||null,l(f,p,_,E);case vi:return p=p.get(_.key===null?g:_.key)||null,u(f,p,_,E);case Un:var k=_._init;return m(p,f,g,k(_._payload),E)}if(Ls(_)||Ts(_))return p=p.get(g)||null,c(f,p,_,E,null);Pa(f,_)}return null}function y(p,f,g,_){for(var E=null,k=null,N=f,R=f=0,b=null;N!==null&&R<g.length;R++){N.index>R?(b=N,N=null):b=N.sibling;var M=d(p,N,g[R],_);if(M===null){N===null&&(N=b);break}t&&N&&M.alternate===null&&e(p,N),f=s(M,f,R),k===null?E=M:k.sibling=M,k=M,N=b}if(R===g.length)return n(p,N),ue&&xr(p,R),E;if(N===null){for(;R<g.length;R++)N=h(p,g[R],_),N!==null&&(f=s(N,f,R),k===null?E=N:k.sibling=N,k=N);return ue&&xr(p,R),E}for(N=r(p,N);R<g.length;R++)b=m(N,p,R,g[R],_),b!==null&&(t&&b.alternate!==null&&N.delete(b.key===null?R:b.key),f=s(b,f,R),k===null?E=b:k.sibling=b,k=b);return t&&N.forEach(function(_e){return e(p,_e)}),ue&&xr(p,R),E}function v(p,f,g,_){var E=Ts(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var k=E=null,N=f,R=f=0,b=null,M=g.next();N!==null&&!M.done;R++,M=g.next()){N.index>R?(b=N,N=null):b=N.sibling;var _e=d(p,N,M.value,_);if(_e===null){N===null&&(N=b);break}t&&N&&_e.alternate===null&&e(p,N),f=s(_e,f,R),k===null?E=_e:k.sibling=_e,k=_e,N=b}if(M.done)return n(p,N),ue&&xr(p,R),E;if(N===null){for(;!M.done;R++,M=g.next())M=h(p,M.value,_),M!==null&&(f=s(M,f,R),k===null?E=M:k.sibling=M,k=M);return ue&&xr(p,R),E}for(N=r(p,N);!M.done;R++,M=g.next())M=m(N,p,R,M.value,_),M!==null&&(t&&M.alternate!==null&&N.delete(M.key===null?R:M.key),f=s(M,f,R),k===null?E=M:k.sibling=M,k=M);return t&&N.forEach(function(te){return e(p,te)}),ue&&xr(p,R),E}function w(p,f,g,_){if(typeof g=="object"&&g!==null&&g.type===wi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:e:{for(var E=g.key,k=f;k!==null;){if(k.key===E){if(E=g.type,E===wi){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&dg(E)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=xs(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===wi?(f=Fr(g.props.children,p.mode,_,g.key),f.return=p,p=f):(_=ll(g.type,g.key,g.props,null,p.mode,_),_.ref=xs(p,f,g),_.return=p,p=_)}return o(p);case vi:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Gc(g,p.mode,_),f.return=p,p=f}return o(p);case Un:return k=g._init,w(p,f,k(g._payload),_)}if(Ls(g))return y(p,f,g,_);if(Ts(g))return v(p,f,g,_);Pa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Kc(g,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return w}var Ki=j0(!0),V0=j0(!1),Ko={},sn=vr(Ko),_o=vr(Ko),Eo=vr(Ko);function Or(t){if(t===Ko)throw Error(C(174));return t}function Lf(t,e){switch(ne(Eo,e),ne(_o,t),ne(sn,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}oe(sn),ne(sn,e)}function Gi(){oe(sn),oe(_o),oe(Eo)}function B0(t){Or(Eo.current);var e=Or(sn.current),n=bh(e,t.type);e!==n&&(ne(_o,t),ne(sn,n))}function $f(t){_o.current===t&&(oe(sn),oe(_o))}var de=vr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function bf(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var rl=Ln.ReactCurrentDispatcher,Bc=Ln.ReactCurrentBatchConfig,qr=0,fe=null,Ae=null,Le=null,$l=!1,Ys=!1,To=0,PI=0;function We(){throw Error(C(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Uf(t,e,n,r,i,s){if(qr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?$I:bI,t=n(r,i),Ys){s=0;do{if(Ys=!1,To=0,25<=s)throw Error(C(301));s+=1,Le=Ae=null,e.updateQueue=null,rl.current=MI,t=n(r,i)}while(Ys)}if(rl.current=bl,e=Ae!==null&&Ae.next!==null,qr=0,Le=Ae=fe=null,$l=!1,e)throw Error(C(300));return t}function Ff(){var t=To!==0;return To=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?fe.memoizedState=Le=t:Le=Le.next=t,Le}function Ft(){if(Ae===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Le===null?fe.memoizedState:Le.next;if(e!==null)Le=e,Ae=t;else{if(t===null)throw Error(C(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Le===null?fe.memoizedState=Le=t:Le=Le.next=t}return Le}function So(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,fe.lanes|=c,Wr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function z0(){}function H0(t,e){var n=fe,r=Ft(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,jf(K0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Io(9,W0.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(C(349));qr&30||q0(n,e,i)}return i}function q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W0(t,e,n,r){e.value=n,e.getSnapshot=r,G0(e)&&Q0(t)}function K0(t,e,n){return n(function(){G0(e)&&Q0(t)})}function G0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Q0(t){var e=xn(t,1);e!==null&&Wt(e,t,1,-1)}function fg(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=LI.bind(null,fe,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y0(){return Ft().memoizedState}function il(t,e,n,r){var i=Jt();fe.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function ku(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&Mf(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function pg(t,e){return il(8390656,8,t,e)}function jf(t,e){return ku(2048,8,t,e)}function X0(t,e){return ku(4,2,t,e)}function J0(t,e){return ku(4,4,t,e)}function Z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ew(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,Z0.bind(null,e,t),n)}function Vf(){}function tw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nw(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rw(t,e,n){return qr&21?(Gt(n,e)||(n=o0(),fe.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function DI(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=Bc.transition;Bc.transition={};try{t(!1),e()}finally{Z=n,Bc.transition=r}}function iw(){return Ft().memoizedState}function OI(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sw(t))ow(e,n);else if(n=b0(t,e,n,r),n!==null){var i=lt();Wt(n,t,r,i),aw(n,e,r)}}function LI(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sw(t))ow(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,Df(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=b0(t,e,i,r),n!==null&&(i=lt(),Wt(n,t,r,i),aw(n,e,r))}}function sw(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function ow(t,e){Ys=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vf(t,n)}}var bl={readContext:Ut,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},$I={readContext:Ut,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,Z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OI.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:Vf,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=DI.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=Jt();if(ue){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),$e===null)throw Error(C(349));qr&30||q0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pg(K0.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,W0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=$e.identifierPrefix;if(ue){var n=yn,r=gn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bI={readContext:Ut,useCallback:tw,useContext:Ut,useEffect:jf,useImperativeHandle:ew,useInsertionEffect:X0,useLayoutEffect:J0,useMemo:nw,useReducer:zc,useRef:Y0,useState:function(){return zc(So)},useDebugValue:Vf,useDeferredValue:function(t){var e=Ft();return rw(e,Ae.memoizedState,t)},useTransition:function(){var t=zc(So)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:H0,useId:iw,unstable_isNewReconciler:!1},MI={readContext:Ut,useCallback:tw,useContext:Ut,useEffect:jf,useImperativeHandle:ew,useInsertionEffect:X0,useLayoutEffect:J0,useMemo:nw,useReducer:Hc,useRef:Y0,useState:function(){return Hc(So)},useDebugValue:Vf,useDeferredValue:function(t){var e=Ft();return Ae===null?e.memoizedState=t:rw(e,Ae.memoizedState,t)},useTransition:function(){var t=Hc(So)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:H0,useId:iw,unstable_isNewReconciler:!1};function Qi(t,e){try{var n="",r=e;do n+=hS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UI=typeof WeakMap=="function"?WeakMap:Map;function lw(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,md=r),sd(t,e)},n}function uw(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JI.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var FI=Ln.ReactCurrentOwner,mt=!1;function ot(t,e,n,r){e.child=t===null?V0(e,null,n,r):Ki(e,t.child,n,r)}function vg(t,e,n,r,i){n=n.render;var s=e.ref;return $i(e,i),r=Uf(t,e,n,r,s,i),n=Ff(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ue&&n&&Cf(e),e.flags|=1,ot(t,e,r,i),e.child)}function wg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cw(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(go(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return od(t,e,n,r,i)}function hw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ni,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Ni,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Ni,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Ni,_t),_t|=r;return ot(t,e,i,n),e.child}function dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,i){var s=vt(n)?zr:nt.current;return s=qi(e,s),$i(e,i),n=Uf(t,e,n,r,s,i),r=Ff(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ue&&r&&Cf(e),e.flags|=1,ot(t,e,n,i),e.child)}function _g(t,e,n,r,i){if(vt(n)){var s=!0;Rl(e)}else s=!1;if($i(e,i),e.stateNode===null)sl(t,e),F0(e,n,r),id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=vt(n)?zr:nt.current,u=qi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hg(e,o,r,u),Fn=!1;var d=e.memoizedState;o.state=d,Ol(e,r,o,i),l=e.memoizedState,a!==r||d!==l||yt.current||Fn?(typeof c=="function"&&(rd(e,n,c,r),l=e.memoizedState),(a=Fn||cg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,M0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=vt(n)?zr:nt.current,l=qi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hg(e,o,r,l),Fn=!1,d=e.memoizedState,o.state=d,Ol(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||yt.current||Fn?(typeof m=="function"&&(rd(e,n,m,r),y=e.memoizedState),(u=Fn||cg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,s,i)}function ad(t,e,n,r,i,s){dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sg(e,n,!1),Rn(t,e,s);r=e.stateNode,FI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&sg(e,n,!0),e.child}function fw(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),Lf(t,e.containerInfo)}function Eg(t,e,n,r,i){return Wi(),Rf(i),e.flags|=256,ot(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function pw(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Bf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,r){return r!==null&&Rf(r),Ki(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qc(Error(C(422))),Da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,s);if(!(e.mode&1))return Da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=qc(s,r,void 0),Da(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Wt(r,t,i,-1))}return Gf(),r=qc(Error(C(421))),Da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=tr(i.nextSibling),It=e,ue=!0,Ht=null,t!==null&&(Ot[Lt++]=gn,Ot[Lt++]=yn,Ot[Lt++]=Hr,gn=t.id,yn=t.overflow,Hr=e),e=Bf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VI(t,e,n){switch(e.tag){case 3:fw(e),Wi();break;case 5:B0(e);break;case 1:vt(e.type)&&Rl(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?pw(t,e,n):(ne(de,de.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,hw(t,e,n)}return Rn(t,e,n)}var gw,cd,yw,vw;gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Or(sn.current);var s=null;switch(n){case"input":i=Dh(t,i),r=Dh(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=$h(t,i),r=$h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}Mh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BI(t,e,n){var r=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return vt(e.type)&&xl(),Ke(e),null;case 3:return r=e.stateNode,Gi(),oe(yt),oe(nt),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(vd(Ht),Ht=null))),cd(t,e),Ke(e),null;case 5:$f(e);var i=Or(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ke(e),null}if(t=Or(sn.current),Aa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)ie(bs[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Pm(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Om(r,s),ie("invalid",r)}Mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",""+a]):lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ea(r),Dm(r,s,!0);break;case"textarea":Ea(r),Lm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[wo]=r,gw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uh(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)ie(bs[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Pm(t,r),i=Dh(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Om(t,r),i=$h(t,r),ie("invalid",t);break;default:i=r}Mh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&df(t,s,l,o))}switch(n){case"input":Ea(t),Dm(t,r,!1);break;case"textarea":Ea(t),Lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Or(Eo.current),Or(sn.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ke(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&Et!==null&&e.mode&1&&!(e.flags&128))$0(),Wi(),e.flags|=98560,s=!1;else if(s=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Zt]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(vd(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Pe===0&&(Pe=3):Gf())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Gi(),cd(t,e),t===null&&yo(e.stateNode.containerInfo),Ke(e),null;case 10:return Pf(e.type._context),Ke(e),null;case 17:return vt(e.type)&&xl(),Ke(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Rs(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Yi&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return Ke(e),null}else 2*Te()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=de.current,ne(de,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function zI(t,e){switch(xf(e),e.tag){case 1:return vt(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),oe(yt),oe(nt),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $f(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return Gi(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Oa=!1,Ye=!1,HI=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function hd(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Sg=!1;function qI(t,e){if(Gh=Sl,t=T0(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qh={focusedElem:t,selectionRange:n},Sl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Bt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){ye(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Sg,Sg=!1,y}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hd(e,n,s)}i=i.next}while(i!==r)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ww(t){var e=t.alternate;e!==null&&(t.alternate=null,ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[wo],delete e[Jh],delete e[xI],delete e[RI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _w(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var je=null,zt=!1;function bn(t,e,n){for(n=n.child;n!==null;)Ew(t,e,n),n=n.sibling}function Ew(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:Ye||Ri(n,e);case 6:var r=je,i=zt;je=null,bn(t,e,n),je=r,zt=i,je!==null&&(zt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(zt?(t=je,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),po(t)):Fc(je,n.stateNode));break;case 4:r=je,i=zt,je=n.stateNode.containerInfo,zt=!0,bn(t,e,n),je=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hd(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!Ye&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ye(n,e,a)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,bn(t,e,n),Ye=r):bn(t,e,n);break;default:bn(t,e,n)}}function kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HI),e.forEach(function(r){var i=ek.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,zt=!1;break e;case 3:je=a.stateNode.containerInfo,zt=!0;break e;case 4:je=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(je===null)throw Error(C(160));Ew(s,o,i),je=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ye(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Xt(t),r&4){try{Xs(3,t,t.return),Cu(3,t)}catch(v){ye(t,t.return,v)}try{Xs(5,t,t.return)}catch(v){ye(t,t.return,v)}}break;case 1:Vt(e,t),Xt(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Vt(e,t),Xt(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{uo(i,"")}catch(v){ye(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zv(i,s),Uh(a,o);var u=Uh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Gv(i,h):c==="dangerouslySetInnerHTML"?Wv(i,h):c==="children"?uo(i,h):df(i,c,h,u)}switch(a){case"input":Oh(i,s);break;case"textarea":Hv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Pi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(v){ye(t,t.return,v)}}break;case 6:if(Vt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ye(t,t.return,v)}}break;case 3:if(Vt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(v){ye(t,t.return,v)}break;case 4:Vt(e,t),Xt(t);break;case 13:Vt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qf=Te())),r&4&&kg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(u=Ye)||c,Vt(e,t),Ye=u):Vt(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,m=d.child,d.tag){case 0:case 11:case 14:case 15:Xs(4,d,d.return);break;case 1:Ri(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ye(r,n,v)}}break;case 5:Ri(d,d.return);break;case 22:if(d.memoizedState!==null){xg(h);continue}}m!==null?(m.return=d,O=m):xg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kv("display",o))}catch(v){ye(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ye(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Xt(t),r&4&&kg(t);break;case 21:break;default:Vt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_w(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(uo(i,""),r.flags&=-33);var s=Ig(t);pd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ig(t);fd(t,a,o);break;default:throw Error(C(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WI(t,e,n){O=t,Sw(t)}function Sw(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ye;a=Oa;var u=Ye;if(Oa=o,(Ye=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Rg(i):l!==null?(l.return=o,O=l):Rg(i);for(;s!==null;)O=s,Sw(s),s=s.sibling;O=i,Oa=a,Ye=u}Cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Cg(t)}}function Cg(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||Cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ug(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ye||e.flags&512&&dd(e)}catch(d){ye(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function xg(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Rg(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ye(e,i,l)}}var s=e.return;try{dd(e)}catch(l){ye(e,s,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){ye(e,o,l)}}}catch(l){ye(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var KI=Math.ceil,Ml=Ln.ReactCurrentDispatcher,zf=Ln.ReactCurrentOwner,Mt=Ln.ReactCurrentBatchConfig,G=0,$e=null,xe=null,ze=0,_t=0,Ni=vr(0),Pe=0,ko=null,Wr=0,xu=0,Hf=0,Js=null,ft=null,qf=0,Yi=1/0,pn=null,Ul=!1,md=null,rr=null,La=!1,Gn=null,Fl=0,Zs=0,gd=null,ol=-1,al=0;function lt(){return G&6?Te():ol!==-1?ol:ol=Te()}function ir(t){return t.mode&1?G&2&&ze!==0?ze&-ze:AI.transition!==null?(al===0&&(al=o0()),al):(t=Z,t!==0||(t=window.event,t=t===void 0?16:f0(t.type)),t):1}function Wt(t,e,n,r){if(50<Zs)throw Zs=0,gd=null,Error(C(185));Ho(t,n,r),(!(G&2)||t!==$e)&&(t===$e&&(!(G&2)&&(xu|=n),Pe===4&&Vn(t,ze)),wt(t,r),n===1&&G===0&&!(e.mode&1)&&(Yi=Te()+500,Su&&wr()))}function wt(t,e){var n=t.callbackNode;AS(t,e);var r=Tl(t,t===$e?ze:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?NI(Ng.bind(null,t)):D0(Ng.bind(null,t)),kI(function(){!(G&6)&&wr()}),n=null;else{switch(a0(r)){case 1:n=yf;break;case 4:n=i0;break;case 16:n=El;break;case 536870912:n=s0;break;default:n=El}n=Pw(n,Iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iw(t,e){if(ol=-1,al=0,G&6)throw Error(C(327));var n=t.callbackNode;if(bi()&&t.callbackNode!==n)return null;var r=Tl(t,t===$e?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=G;G|=2;var s=Cw();($e!==t||ze!==e)&&(pn=null,Yi=Te()+500,Ur(t,e));do try{YI();break}catch(a){kw(t,a)}while(1);Af(),Ml.current=s,G=i,xe!==null?e=0:($e=null,ze=0,e=Pe)}if(e!==0){if(e===2&&(i=zh(t),i!==0&&(r=i,e=yd(t,i))),e===1)throw n=ko,Ur(t,0),Vn(t,r),wt(t,Te()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!GI(i)&&(e=jl(t,r),e===2&&(s=zh(t),s!==0&&(r=s,e=yd(t,s))),e===1))throw n=ko,Ur(t,0),Vn(t,r),wt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Rr(t,ft,pn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=qf+500-Te(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xh(Rr.bind(null,t,ft,pn),e);break}Rr(t,ft,pn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KI(r/1960))-r,10<r){t.timeoutHandle=Xh(Rr.bind(null,t,ft,pn),r);break}Rr(t,ft,pn);break;case 5:Rr(t,ft,pn);break;default:throw Error(C(329))}}}return wt(t,Te()),t.callbackNode===n?Iw.bind(null,t):null}function yd(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=jl(t,e),t!==2&&(e=ft,ft=n,e!==null&&vd(e)),t}function vd(t){ft===null?ft=t:ft.push.apply(ft,t)}function GI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Hf,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Ng(t){if(G&6)throw Error(C(327));bi();var e=Tl(t,0);if(!(e&1))return wt(t,Te()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=zh(t);r!==0&&(e=r,n=yd(t,r))}if(n===1)throw n=ko,Ur(t,0),Vn(t,e),wt(t,Te()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ft,pn),wt(t,Te()),null}function Wf(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Yi=Te()+500,Su&&wr())}}function Kr(t){Gn!==null&&Gn.tag===0&&!(G&6)&&bi();var e=G;G|=1;var n=Mt.transition,r=Z;try{if(Mt.transition=null,Z=1,t)return t()}finally{Z=r,Mt.transition=n,G=e,!(G&6)&&wr()}}function Kf(){_t=Ni.current,oe(Ni)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,II(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Gi(),oe(yt),oe(nt),bf();break;case 5:$f(r);break;case 4:Gi();break;case 13:oe(de);break;case 19:oe(de);break;case 10:Pf(r.type._context);break;case 22:case 23:Kf()}n=n.return}if($e=t,xe=t=sr(t.current,null),ze=_t=e,Pe=0,ko=null,Hf=xu=Wr=0,ft=Js=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function kw(t,e){do{var n=xe;try{if(Af(),rl.current=bl,$l){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$l=!1}if(qr=0,Le=Ae=fe=null,Ys=!1,To=0,zf.current=null,n===null||n.return===null){Pe=1,ko=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=gg(o);if(m!==null){m.flags&=-257,yg(m,o,a,s,e),m.mode&1&&mg(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){mg(s,u,e),Gf();break e}l=Error(C(426))}}else if(ue&&a.mode&1){var w=gg(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),yg(w,o,a,s,e),Rf(Qi(l,a));break e}}s=l=Qi(l,a),Pe!==4&&(Pe=2),Js===null?Js=[s]:Js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lw(s,l,e);lg(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=uw(s,a,e);lg(s,_);break e}}s=s.return}while(s!==null)}Rw(n)}catch(E){e=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Cw(){var t=Ml.current;return Ml.current=bl,t===null?bl:t}function Gf(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),$e===null||!(Wr&268435455)&&!(xu&268435455)||Vn($e,ze)}function jl(t,e){var n=G;G|=2;var r=Cw();($e!==t||ze!==e)&&(pn=null,Ur(t,e));do try{QI();break}catch(i){kw(t,i)}while(1);if(Af(),G=n,Ml.current=r,xe!==null)throw Error(C(261));return $e=null,ze=0,Pe}function QI(){for(;xe!==null;)xw(xe)}function YI(){for(;xe!==null&&!ES();)xw(xe)}function xw(t){var e=Aw(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?Rw(t):xe=e,zf.current=null}function Rw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zI(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,xe=null;return}}else if(n=BI(n,e,_t),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Pe===0&&(Pe=5)}function Rr(t,e,n){var r=Z,i=Mt.transition;try{Mt.transition=null,Z=1,XI(t,e,n,r)}finally{Mt.transition=i,Z=r}return null}function XI(t,e,n,r){do bi();while(Gn!==null);if(G&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PS(t,s),t===$e&&(xe=$e=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,Pw(El,function(){return bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=Z;Z=1;var a=G;G|=4,zf.current=null,qI(t,n),Tw(n,t),yI(Qh),Sl=!!Gh,Qh=Gh=null,t.current=n,WI(n),TS(),G=a,Z=o,Mt.transition=s}else t.current=n;if(La&&(La=!1,Gn=t,Fl=i),s=t.pendingLanes,s===0&&(rr=null),kS(n.stateNode),wt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=md,md=null,t;return Fl&1&&t.tag!==0&&bi(),s=t.pendingLanes,s&1?t===gd?Zs++:(Zs=0,gd=t):Zs=0,wr(),null}function bi(){if(Gn!==null){var t=a0(Fl),e=Mt.transition,n=Z;try{if(Mt.transition=null,Z=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,Fl=0,G&6)throw Error(C(331));var i=G;for(G|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Xs(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,m=c.return;if(ww(c),c===u){O=null;break}if(d!==null){d.return=m,O=d;break}O=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,O=p;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(E){ye(a,a.return,E)}if(a===o){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(G=i,wr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(vu,t)}catch{}r=!0}return r}finally{Z=n,Mt.transition=e}}return!1}function Ag(t,e,n){e=Qi(n,e),e=lw(t,e,1),t=nr(t,e,1),e=lt(),t!==null&&(Ho(t,1,e),wt(t,e))}function ye(t,e,n){if(t.tag===3)Ag(t,t,n);else for(;e!==null;){if(e.tag===3){Ag(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Qi(n,t),t=uw(e,t,1),e=nr(e,t,1),t=lt(),e!==null&&(Ho(e,1,t),wt(e,t));break}}e=e.return}}function JI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(ze&n)===n&&(Pe===4||Pe===3&&(ze&130023424)===ze&&500>Te()-qf?Ur(t,0):Hf|=n),wt(t,e)}function Nw(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=lt();t=xn(t,e),t!==null&&(Ho(t,e,n),wt(t,n))}function ZI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nw(t,n)}function ek(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Nw(t,n)}var Aw;Aw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,VI(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ue&&e.flags&1048576&&O0(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=qi(e,nt.current);$i(e,n),i=Uf(null,e,r,t,i,n);var s=Ff();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Of(e),i.updater=Iu,e.stateNode=i,i._reactInternals=e,id(e,r,t,n),e=ad(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&Cf(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nk(r),t=Bt(r,t),i){case 0:e=od(null,e,r,t,n);break e;case 1:e=_g(null,e,r,t,n);break e;case 11:e=vg(null,e,r,t,n);break e;case 14:e=wg(null,e,r,Bt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),_g(t,e,r,i,n);case 3:e:{if(fw(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,M0(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(C(423)),e),e=Eg(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(C(424)),e),e=Eg(t,e,r,n,i);break e}else for(Et=tr(e.stateNode.containerInfo.firstChild),It=e,ue=!0,Ht=null,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Rn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return B0(e),t===null&&td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yh(r,i)?o=null:s!==null&&Yh(r,s)&&(e.flags|=32),dw(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return pw(t,e,n);case 4:return Lf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),vg(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Pl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!yt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$i(e,n),i=Ut(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),wg(t,e,r,i,n);case 15:return cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),sl(t,e),e.tag=1,vt(r)?(t=!0,Rl(e)):t=!1,$i(e,n),F0(e,r,i),id(e,r,i,n),ad(null,e,r,!0,t,n);case 19:return mw(t,e,n);case 22:return hw(t,e,n)}throw Error(C(156,e.tag))};function Pw(t,e){return r0(t,e)}function tk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new tk(t,e,n,r)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nk(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Fr(n.children,i,s,e);case ff:o=8,i|=8;break;case Rh:return t=bt(12,n,e,i|2),t.elementType=Rh,t.lanes=s,t;case Nh:return t=bt(13,n,e,i),t.elementType=Nh,t.lanes=s,t;case Ah:return t=bt(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case jv:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uv:o=10;break e;case Fv:o=9;break e;case pf:o=11;break e;case mf:o=14;break e;case Un:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=bt(22,t,r,e),t.elementType=jv,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yf(t,e,n,r,i,s,o,a,l){return t=new rk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function ik(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dw(t){if(!t)return dr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(vt(n))return P0(t,n,e)}return e}function Ow(t,e,n,r,i,s,o,a,l){return t=Yf(n,r,!0,t,i,s,o,a,l),t.context=Dw(null),n=t.current,r=lt(),i=ir(n),s=Tn(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,Ho(t,i,r),wt(t,r),t}function Nu(t,e,n,r){var i=e.current,s=lt(),o=ir(i);return n=Dw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Wt(t,i,o,s),nl(t,i,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){Pg(t,e),(t=t.alternate)&&Pg(t,e)}function sk(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Au.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Nu(t,e,null,null)};Au.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Nu(null,t,null,null)}),e[Cn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=c0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&d0(t)}};function Zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function ok(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vl(o);s.call(u)}}var o=Ow(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Cn]=o.current,yo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vl(l);a.call(u)}}var l=Yf(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[Cn]=l.current,yo(t.nodeType===8?t.parentNode:t),Kr(function(){Nu(e,l,n,r)}),l}function Du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Vl(o);a.call(l)}}Nu(e,o,t,i)}else o=ok(n,e,t,i,r);return Vl(o)}l0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(vf(e,n|1),wt(e,Te()),!(G&6)&&(Yi=Te()+500,wr()))}break;case 13:Kr(function(){var r=xn(t,1);if(r!==null){var i=lt();Wt(r,t,1,i)}}),Xf(t,1)}};wf=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=lt();Wt(e,t,134217728,n)}Xf(t,134217728)}};u0=function(t){if(t.tag===13){var e=ir(t),n=xn(t,e);if(n!==null){var r=lt();Wt(n,t,e,r)}Xf(t,e)}};c0=function(){return Z};h0=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};jh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tu(r);if(!i)throw Error(C(90));Bv(r),Oh(r,i)}}}break;case"textarea":Hv(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Xv=Wf;Jv=Kr;var ak={usingClientEntryPoint:!1,Events:[Wo,Si,Tu,Qv,Yv,Wf]},Ns={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lk={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{vu=$a.inject(lk),rn=$a}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ak;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(C(200));return ik(t,e,null,n)};xt.createRoot=function(t,e){if(!Zf(t))throw Error(C(299));var n=!1,r="",i=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Yf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Jf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=t0(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Kr(t)};xt.hydrate=function(t,e,n){if(!Pu(e))throw Error(C(200));return Du(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Zf(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Au(e)};xt.render=function(t,e,n){if(!Pu(e))throw Error(C(200));return Du(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(C(40));return t._reactRootContainer?(Kr(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};xt.unstable_batchedUpdates=Wf;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Du(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),Ov.exports=xt;var uk=Ov.exports,Og=uk;Ch.createRoot=Og.createRoot,Ch.hydrateRoot=Og.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Lg="popstate";function ck(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return wd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bl(i)}return dk(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ep(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hk(){return Math.random().toString(36).substr(2,8)}function $g(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,n,r){return n===void 0&&(n=null),Co({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cs(e):e,{state:n,key:e&&e.key||r||hk()})}function Bl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Co({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Qn.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:p})}function d(w,p){a=Qn.Push;let f=wd(v.location,w,p);n&&n(f,w),u=c()+1;let g=$g(f,u),_=v.createHref(f);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,p){a=Qn.Replace;let f=wd(v.location,w,p);n&&n(f,w),u=c();let g=$g(f,u),_=v.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Bl(w);return Se(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Lg,h),l=w,()=>{i.removeEventListener(Lg,h),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let p=y(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(w){return o.go(w)}};return v}var bg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(bg||(bg={}));function fk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?cs(e):e,i=tp(r.pathname||"/",n);if(i==null)return null;let s=bw(t);pk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Sk(s[a],Ck(i));return o}function bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ek(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Mw(s.path))i(s,o,l)}),e}function Mw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Mw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Tk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mk=/^:\w+$/,gk=3,yk=2,vk=1,wk=10,_k=-2,Mg=t=>t==="*";function Ek(t,e){let n=t.split("/"),r=n.length;return n.some(Mg)&&(r+=_k),e&&(r+=yk),n.filter(i=>!Mg(i)).reduce((i,s)=>i+(mk.test(s)?gk:s===""?vk:wk),r)}function Tk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Sk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Ik({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:Ak(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function Ik(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=xk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function kk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ep(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ck(t){try{return decodeURI(t)}catch(e){return ep(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xk(t,e){try{return decodeURIComponent(t)}catch(n){return ep(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function tp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Rk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cs(t):t;return{pathname:n?n.startsWith("/")?n:Nk(n,e):e,search:Pk(r),hash:Dk(i)}}function Nk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function np(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cs(t):(i=Co({},t),Se(!i.pathname||!i.pathname.includes("?"),Qc("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Qc("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Qc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Rk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Pk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Dk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uw=["post","put","patch","delete"];new Set(Uw);const Lk=["get",...Uw];new Set(Lk);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}const ip=S.createContext(null),Fw=S.createContext(null),si=S.createContext(null),Ou=S.createContext(null),$n=S.createContext({outlet:null,matches:[],isDataRoute:!1}),jw=S.createContext(null);function $k(t,e){let{relative:n}=e===void 0?{}:e;hs()||Se(!1);let{basename:r,navigator:i}=S.useContext(si),{hash:s,pathname:o,search:a}=sp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hs(){return S.useContext(Ou)!=null}function ds(){return hs()||Se(!1),S.useContext(Ou).location}function Vw(t){S.useContext(si).static||S.useLayoutEffect(t)}function Lu(){let{isDataRoute:t}=S.useContext($n);return t?Yk():bk()}function bk(){hs()||Se(!1);let t=S.useContext(ip),{basename:e,navigator:n}=S.useContext(si),{matches:r}=S.useContext($n),{pathname:i}=ds(),s=JSON.stringify(np(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return Vw(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=rp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:or([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const Mk=S.createContext(null);function Uk(t){let e=S.useContext($n).outlet;return e&&S.createElement(Mk.Provider,{value:t},e)}function sp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext($n),{pathname:i}=ds(),s=JSON.stringify(np(r).map(o=>o.pathnameBase));return S.useMemo(()=>rp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Fk(t,e){return jk(t,e)}function jk(t,e,n){hs()||Se(!1);let{navigator:r}=S.useContext(si),{matches:i}=S.useContext($n),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ds(),u;if(e){var c;let v=typeof e=="string"?cs(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Se(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=fk(t,{pathname:d}),y=qk(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:or([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?S.createElement(Ou.Provider,{value:{location:zl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qn.Pop}},y):y}function Vk(){let t=Qk(),e=Ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const Bk=S.createElement(Vk,null);class zk extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement($n.Provider,{value:this.props.routeContext},S.createElement(jw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hk(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(ip);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement($n.Provider,{value:e},r)}function qk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Se(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Bk);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=h:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(Hk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(zk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var _d;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(_d||(_d={}));var xo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(xo||(xo={}));function Wk(t){let e=S.useContext(ip);return e||Se(!1),e}function Kk(t){let e=S.useContext(Fw);return e||Se(!1),e}function Gk(t){let e=S.useContext($n);return e||Se(!1),e}function Bw(t){let e=Gk(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function Qk(){var t;let e=S.useContext(jw),n=Kk(xo.UseRouteError),r=Bw(xo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Yk(){let{router:t}=Wk(_d.UseNavigateStable),e=Bw(xo.UseNavigateStable),n=S.useRef(!1);return Vw(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zl({fromRouteId:e},s)))},[t,e])}function FL(t){let{to:e,replace:n,state:r,relative:i}=t;hs()||Se(!1);let{matches:s}=S.useContext($n),{pathname:o}=ds(),a=Lu(),l=rp(e,np(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function jL(t){return Uk(t.context)}function Pt(t){Se(!1)}function Xk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;hs()&&Se(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=cs(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=S.useMemo(()=>{let v=tp(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return y==null?null:S.createElement(si.Provider,{value:l},S.createElement(Ou.Provider,{children:n,value:y}))}function Jk(t){let{children:e,location:n}=t;return Fk(Ed(e),n)}var Ug;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Ug||(Ug={}));new Promise(()=>{});function Ed(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Ed(r.props.children,s));return}r.type!==Pt&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ed(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hl.apply(this,arguments)}function zw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Zk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eC(t,e){return t.button===0&&(!e||e==="_self")&&!Zk(t)}const tC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],nC=["aria-current","caseSensitive","className","end","style","to","children"];function rC(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=ck({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(Xk,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const iC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hw=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=zw(e,tC),{basename:d}=S.useContext(si),m,y=!1;if(typeof u=="string"&&sC.test(u)&&(m=u,iC))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=tp(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:y=!0}catch{}let v=$k(u,{relative:i}),w=oC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||w(f)}return S.createElement("a",Hl({},h,{href:m||v,onClick:y||s?r:p,ref:n,target:l}))}),VL=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=zw(e,nC),h=sp(l,{relative:c.relative}),d=ds(),m=S.useContext(Fw),{navigator:y}=S.useContext(si),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,w=d.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(w=w.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let f=w===v||!o&&w.startsWith(v)&&w.charAt(v.length)==="/",g=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),_=f?r:void 0,E;typeof s=="function"?E=s({isActive:f,isPending:g}):E=[s,f?"active":null,g?"pending":null].filter(Boolean).join(" ");let k=typeof a=="function"?a({isActive:f,isPending:g}):a;return S.createElement(Hw,Hl({},c,{"aria-current":_,className:E,ref:n,style:k,to:l}),typeof u=="function"?u({isActive:f,isPending:g}):u)});var Fg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Fg||(Fg={}));var jg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jg||(jg={}));function oC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Lu(),l=ds(),u=sp(t,{relative:o});return S.useCallback(c=>{if(eC(c,n)){c.preventDefault();let h=r!==void 0?r:Bl(l)===Bl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const aC="modulepreload",lC=function(t){return"/RealEstate/"+t},Vg={},_r=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=lC(s),s in Vg)return;Vg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":aC,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},uC="/RealEstate/assets/spinner-6bbdf916.svg",qw=()=>T.jsx("div",{className:"fixed left-0 right-0 bottom-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:T.jsx("div",{className:"",children:T.jsx("img",{src:uC,alt:"Loading...",className:"h-24"})})});/**
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
 */const Ww=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ww(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new hC;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dC=function(t){const e=Ww(t);return Kw.encodeByteArray(e,!0)},ql=function(t){return dC(t).replace(/\./g,"")},Gw=function(t){try{return Kw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pC=()=>fC().__FIREBASE_DEFAULTS__,mC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gw(t[1]);return e&&JSON.parse(e)},$u=()=>{try{return pC()||mC()||gC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>{var e,n;return(n=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yw=t=>{const e=Qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xw=()=>{var t;return(t=$u())===null||t===void 0?void 0:t.config},Jw=t=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ql(JSON.stringify(n)),ql(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function wC(){var t;const e=(t=$u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _C(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TC(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SC(){try{return typeof indexedDB=="object"}catch{return!1}}function IC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const kC="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kC,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function CC(t,e){return t.replace(xC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xC=/\{\$([^}]+)}/g;function RC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!Wl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
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
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NC(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yc),i.error===void 0&&(i.error=Yc),i.complete===void 0&&(i.complete=Yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yc(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class DC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LC(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OC(t){return t===Nr?void 0:t}function LC(t){return t.instantiationMode==="EAGER"}/**
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
 */class $C{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const bC={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},MC=Q.INFO,UC={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},FC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class op{constructor(e){this.name=e,this._logLevel=MC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const jC=(t,e)=>e.some(n=>t instanceof n);let zg,Hg;function VC(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BC(){return Hg||(Hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e1=new WeakMap,Td=new WeakMap,t1=new WeakMap,Xc=new WeakMap,ap=new WeakMap;function zC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e1.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function HC(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qC(t){Sd=t(Sd)}function WC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return t1.set(r,e.sort?e.sort():[e]),ar(r)}:BC().includes(t)?function(...e){return t.apply(Jc(this),e),ar(e1.get(this))}:function(...e){return ar(t.apply(Jc(this),e))}}function KC(t){return typeof t=="function"?WC(t):(t instanceof IDBTransaction&&HC(t),jC(t,VC())?new Proxy(t,Sd):t)}function ar(t){if(t instanceof IDBRequest)return zC(t);if(Xc.has(t))return Xc.get(t);const e=KC(t);return e!==t&&(Xc.set(t,e),ap.set(e,t)),e}const Jc=t=>ap.get(t);function GC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ar(o.result),l.oldVersion,l.newVersion,ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QC=["get","getKey","getAll","getAllKeys","count"],YC=["put","add","delete","clear"],Zc=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zc.set(e,s),s}qC(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
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
 */class XC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",Wg="0.9.10";/**
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
 */const Gr=new op("@firebase/app"),ZC="@firebase/app-compat",e2="@firebase/analytics-compat",t2="@firebase/analytics",n2="@firebase/app-check-compat",r2="@firebase/app-check",i2="@firebase/auth",s2="@firebase/auth-compat",o2="@firebase/database",a2="@firebase/database-compat",l2="@firebase/functions",u2="@firebase/functions-compat",c2="@firebase/installations",h2="@firebase/installations-compat",d2="@firebase/messaging",f2="@firebase/messaging-compat",p2="@firebase/performance",m2="@firebase/performance-compat",g2="@firebase/remote-config",y2="@firebase/remote-config-compat",v2="@firebase/storage",w2="@firebase/storage-compat",_2="@firebase/firestore",E2="@firebase/firestore-compat",T2="firebase",S2="9.22.0";/**
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
 */const kd="[DEFAULT]",I2={[Id]:"fire-core",[ZC]:"fire-core-compat",[t2]:"fire-analytics",[e2]:"fire-analytics-compat",[r2]:"fire-app-check",[n2]:"fire-app-check-compat",[i2]:"fire-auth",[s2]:"fire-auth-compat",[o2]:"fire-rtdb",[a2]:"fire-rtdb-compat",[l2]:"fire-fn",[u2]:"fire-fn-compat",[c2]:"fire-iid",[h2]:"fire-iid-compat",[d2]:"fire-fcm",[f2]:"fire-fcm-compat",[p2]:"fire-perf",[m2]:"fire-perf-compat",[g2]:"fire-rc",[y2]:"fire-rc-compat",[v2]:"fire-gcs",[w2]:"fire-gcs-compat",[_2]:"fire-fst",[E2]:"fire-fst-compat","fire-js":"fire-js",[T2]:"fire-js-all"};/**
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
 */const Kl=new Map,Cd=new Map;function k2(t,e){try{t.container.addComponent(e)}catch(n){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(Cd.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of Kl.values())k2(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const C2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lr=new Go("app","Firebase",C2);/**
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
 */class x2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=S2;function n1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=Xw()),!n)throw lr.create("no-options");const s=Kl.get(i);if(s){if(Wl(n,s.options)&&Wl(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new $C(i);for(const l of Cd.values())o.addComponent(l);const a=new x2(n,r,o);return Kl.set(i,a),a}function lp(t=kd){const e=Kl.get(t);if(!e&&t===kd&&Xw())return n1();if(!e)throw lr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=I2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(a.join(" "));return}Qr(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const R2="firebase-heartbeat-database",N2=1,Ro="firebase-heartbeat-store";let eh=null;function r1(){return eh||(eh=GC(R2,N2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ro)}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),eh}async function A2(t){try{return await(await r1()).transaction(Ro).objectStore(Ro).get(i1(t))}catch(e){if(e instanceof dn)Gr.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(n.message)}}}async function Kg(t,e){try{const r=(await r1()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,i1(t)),await r.done}catch(n){if(n instanceof dn)Gr.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gr.warn(r.message)}}}function i1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const P2=1024,D2=30*24*60*60*1e3;class O2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=D2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gg(),{heartbeatsToSend:n,unsentEntries:r}=L2(this._heartbeatsCache.heartbeats),i=ql(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gg(){return new Date().toISOString().substring(0,10)}function L2(t,e=P2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SC()?IC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await A2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return ql(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function b2(t){Qr(new fr("platform-logger",e=>new XC(e),"PRIVATE")),Qr(new fr("heartbeat",e=>new O2(e),"PRIVATE")),on(Id,Wg,t),on(Id,Wg,"esm2017"),on("fire-js","")}b2("");function up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function s1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M2=s1,o1=new Go("auth","Firebase",s1());/**
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
 */const Gl=new op("@firebase/auth");function U2(t,...e){Gl.logLevel<=Q.WARN&&Gl.warn(`Auth (${oi}): ${t}`,...e)}function ul(t,...e){Gl.logLevel<=Q.ERROR&&Gl.error(`Auth (${oi}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw cp(t,...e)}function an(t,...e){return cp(t,...e)}function a1(t,e,n){const r=Object.assign(Object.assign({},M2()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function F2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),a1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o1.create(t,...e)}function U(t,e,...n){if(!t)throw cp(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Nn(t,e){t||vn(e)}/**
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
 */function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function j2(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function V2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j2()||_C()||"connection"in navigator)?navigator.onLine:!0}function B2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=vC()||EC()}get(){return V2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hp(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class l1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const z2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const H2=new Yo(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,i={}){return u1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),l1.fetch()(c1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function u1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},z2),e);try{const i=new q2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ba(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw a1(t,c,u);jt(t,c)}}catch(i){if(i instanceof dn)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function Xo(t,e,n,r,i={}){const s=await Er(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function c1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hp(t.config,i):`${t.config.apiScheme}://${i}`}class q2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),H2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function W2(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function K2(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function G2(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=dp(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(th(i.auth_time)),issuedAtTime:eo(th(i.iat)),expirationTime:eo(th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function th(t){return Number(t)*1e3}function dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gw(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Q2(t){const e=dp(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&Y2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class X2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class h1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,K2(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ex(s.providerUserInfo):[],a=Z2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new h1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function J2(t){const e=ve(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ex(t){return t.map(e=>{var{providerId:n}=e,r=up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tx(t,e){const n=await u1(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=c1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",l1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Q2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new No;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Mn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new h1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return G2(this,e)}reload(){return J2(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xi(this,W2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:E,providerData:k,stsTokenManager:N}=n;U(g&&N,e,"internal-error");const R=No.fromJSON(this.name,N);U(typeof g=="string",e,"internal-error"),Mn(h,e.name),Mn(d,e.name),U(typeof _=="boolean",e,"internal-error"),U(typeof E=="boolean",e,"internal-error"),Mn(m,e.name),Mn(y,e.name),Mn(v,e.name),Mn(w,e.name),Mn(p,e.name),Mn(f,e.name);const b=new jr({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:R,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(b.providerData=k.map(M=>Object.assign({},M))),w&&(b._redirectEventId=w),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new No;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}}/**
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
 */const Xg=new Map;function wn(t){Nn(t instanceof Function,"Expected a class definition");let e=Xg.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xg.set(t,e),e)}/**
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
 */class d1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d1.type="NONE";const Jg=d1;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(wn(Jg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||wn(Jg);const o=cl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=jr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mi(s,e,r))}}/**
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
 */function Zg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y1(e))return"Blackberry";if(v1(e))return"Webos";if(fp(e))return"Safari";if((e.includes("chrome/")||p1(e))&&!e.includes("edge/"))return"Chrome";if(g1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f1(t=rt()){return/firefox\//i.test(t)}function fp(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p1(t=rt()){return/crios\//i.test(t)}function m1(t=rt()){return/iemobile/i.test(t)}function g1(t=rt()){return/android/i.test(t)}function y1(t=rt()){return/blackberry/i.test(t)}function v1(t=rt()){return/webos/i.test(t)}function Mu(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nx(t=rt()){var e;return Mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rx(){return TC()&&document.documentMode===10}function w1(t=rt()){return Mu(t)||g1(t)||v1(t)||y1(t)||/windows phone/i.test(t)||m1(t)}function ix(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _1(t,e=[]){let n;switch(t){case"Browser":n=Zg(rt());break;case"Worker":n=`${Zg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}async function E1(t,e){return Er(t,"GET","/v2/recaptchaConfig",ai(t,e))}function ey(t){return t!==void 0&&t.enterprise!==void 0}class T1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function sx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function S1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sx().appendChild(r)})}function ox(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ax="https://www.google.com/recaptcha/enterprise.js?render=",lx="recaptcha-enterprise",ux="NO_RECAPTCHA";class I1{constructor(e){this.type=lx,this.auth=Tr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{E1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new T1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ey(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ux)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ey(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}S1(ax+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ji(t,e,n,r=!1){const i=new I1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class cx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class hx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ty(this),this.idTokenSubscription=new ty(this),this.beforeStateQueue=new cx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ve(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}async initializeRecaptchaConfig(){const e=await E1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new T1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new I1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&U2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return ve(t)}class ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=NC(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function dx(t,e){const n=bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wl(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function fx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function px(t,e,n){const r=Tr(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=k1(e),{host:o,port:a}=mx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gx()}function k1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mx(t){const e=k1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ny(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ny(o)}}}function ny(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function yx(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nh(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}async function vx(t,e){return Er(t,"POST","/v1/accounts:sendOobCode",ai(t,e))}async function rh(t,e){return vx(t,e)}/**
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
 */async function wx(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function _x(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
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
 */class Ao extends pp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ji(e,r,"signInWithPassword");return nh(e,i)}else return nh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ji(e,r,"signInWithPassword");return nh(e,s)}else return Promise.reject(i)});case"emailLink":return wx(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _x(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ui(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
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
 */const Ex="http://localhost";class Yr extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:Ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function Tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sx(t){const e=Ms(Us(t)).link,n=e?Ms(Us(e)).deep_link_id:null,r=Ms(Us(t)).deep_link_id;return(r?Ms(Us(r)).link:null)||r||n||e||t}class mp{constructor(e){var n,r,i,s,o,a;const l=Ms(Us(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Tx((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sx(e);try{return new mp(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mp.parseLink(n);return U(r,"argument-error"),Ao._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Jo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Jo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class qn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function ih(t,e){return Xo(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=ry(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ry(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ry(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yl extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yl(e,n,r,i)}}function C1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,s,e,r):s})}async function Ix(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function kx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xi(t,C1(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=dp(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function x1(t,e,n=!1){const r="signIn",i=await C1(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Cx(t,e){return x1(Tr(t),e)}/**
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
 */function sh(t,e,n){var r;U(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function BL(t,e,n){var r;const i=Tr(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Ji(i,s,"getOobCode",!0);n&&sh(i,o,n),await rh(i,o)}else n&&sh(i,s,n),await rh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Ji(i,s,"getOobCode",!0);n&&sh(i,a,n),await rh(i,a)}else return Promise.reject(o)})}async function zL(t,e,n){var r;const i=Tr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ji(i,s,"signUpPassword");o=ih(i,u)}else o=ih(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ji(i,s,"signUpPassword");return ih(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Xr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function HL(t,e,n){return Cx(ve(t),fs.credential(e,n))}/**
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
 */async function xx(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Rx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,xx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nx(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function Ax(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function qL(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}const Xl="__sak";/**
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
 */class R1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Px(){const t=rt();return fp(t)||Mu(t)}const Dx=1e3,Ox=10;class N1 extends R1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Px()&&ix(),this.fallbackToPolling=w1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ox):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N1.type="LOCAL";const Lx=N1;/**
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
 */class A1 extends R1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A1.type="SESSION";const P1=A1;/**
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
 */function $x(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
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
 */function yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=yp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function Mx(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function D1(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Ux(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jx(){return D1()?self:null}/**
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
 */const O1="firebaseLocalStorageDb",Vx=1,Jl="firebaseLocalStorage",L1="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function Bx(){const t=indexedDB.deleteDatabase(O1);return new Zo(t).toPromise()}function Rd(){const t=indexedDB.open(O1,Vx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:L1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await Bx(),e(await Rd()))})})}async function iy(t,e,n){const r=Fu(t,!0).put({[L1]:e,value:n});return new Zo(r).toPromise()}async function zx(t,e){const n=Fu(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function sy(t,e){const n=Fu(t,!0).delete(e);return new Zo(n).toPromise()}const Hx=800,qx=3;class $1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ux(),!this.activeServiceWorker)return;this.sender=new bx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rd();return await iy(e,Xl,"1"),await sy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fu(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$1.type="LOCAL";const Wx=$1;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function b1(t,e){return e?wn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vp extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kx(t){return x1(t.auth,new vp(t),t.bypassAuthState)}function Gx(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),kx(n,new vp(t),t.bypassAuthState)}async function Qx(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Ix(n,new vp(t),t.bypassAuthState)}/**
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
 */class M1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kx;case"linkViaPopup":case"linkViaRedirect":return Qx;case"reauthViaPopup":case"reauthViaRedirect":return Gx;default:jt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yx=new Yo(2e3,1e4);async function WL(t,e,n){const r=Tr(t);F2(t,e,gp);const i=b1(r,n);return new Lr(r,"signInViaPopup",e,i).executeNotNull()}class Lr extends M1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yx.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const Xx="pendingRedirect",hl=new Map;class Jx extends M1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await Zx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zx(t,e){const n=nR(e),r=tR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eR(t,e){hl.set(t._key(),e)}function tR(t){return wn(t._redirectPersistence)}function nR(t){return cl(Xx,t.config.apiKey,t.name)}async function rR(t,e,n=!1){const r=Tr(t),i=b1(r,e),o=await new Jx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const iR=10*60*1e3;class sR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iR&&this.cachedEventUids.clear(),this.cachedEventUids.has(oy(e))}saveEventToCache(e){this.cachedEventUids.add(oy(e)),this.lastProcessedEventTime=Date.now()}}function oy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U1(t);default:return!1}}/**
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
 */async function aR(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
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
 */const lR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uR=/^https?/;async function cR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aR(t);for(const n of e)try{if(hR(n))return}catch{}jt(t,"unauthorized-domain")}function hR(t){const e=xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uR.test(n))return!1;if(lR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dR=new Yo(3e4,6e4);function ay(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fR(t){return new Promise((e,n)=>{var r,i,s;function o(){ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ay(),n(an(t,"network-request-failed"))},timeout:dR.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=ox("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},S1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dl=null,e})}let dl=null;function pR(t){return dl=dl||fR(t),dl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mR=new Yo(5e3,15e3),gR="__/auth/iframe",yR="emulator/auth/iframe",vR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,yR):`https://${t.config.authDomain}/${gR}`,r={apiKey:e.apiKey,appName:t.name,v:oi},i=wR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function ER(t){const e=await pR(t),n=ln().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:_R(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},mR.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const TR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SR=500,IR=600,kR="_blank",CR="http://localhost";class ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xR(t,e,n,r=SR,i=IR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=p1(u)?kR:n),f1(u)&&(e=e||CR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(nx(u)&&a!=="_self")return RR(e||"",a),new ly(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new ly(h)}function RR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const NR="__/auth/handler",AR="emulator/auth/handler",PR=encodeURIComponent("fac");async function uy(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(e instanceof gp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Jo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${PR}=${encodeURIComponent(l)}`:"";return`${DR(t)}?${Qo(a).slice(1)}${u}`}function DR({config:t}){return t.emulator?hp(t,AR):`https://${t.authDomain}/${NR}`}/**
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
 */const oh="webStorageSupport";class OR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P1,this._completeRedirectFn=rR,this._overrideRedirectResult=eR}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await uy(e,n,r,xd(),i);return xR(e,o,yp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await uy(e,n,r,xd(),i);return Mx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ER(e),r=new sR(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oh];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w1()||fp()||Mu()}}const LR=OR;var cy="@firebase/auth",hy="0.23.2";/**
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
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MR(t){Qr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_1(t)},u=new hx(r,i,s,l);return fx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new fr("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(r=>new $R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(cy,hy,bR(t)),on(cy,hy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const UR=5*60,FR=Jw("authIdTokenMaxAge")||UR;let dy=null;const jR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const i=n==null?void 0:n.token;dy!==i&&(dy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function F1(t=lp()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dx(t,{popupRedirectResolver:LR,persistence:[Wx,Lx,P1]}),r=Jw("authTokenSyncURL");if(r){const s=jR(r);Ax(n,s,()=>s(n.currentUser)),Nx(n,o=>s(o))}const i=Qw("auth");return i&&px(n,`http://${i}`),n}MR("Browser");var VR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,wp=wp||{},V=VR||self;function Zl(){}function ju(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ea(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BR(t){return Object.prototype.hasOwnProperty.call(t,ah)&&t[ah]||(t[ah]=++zR)}var ah="closure_uid_"+(1e9*Math.random()>>>0),zR=0;function HR(t,e,n){return t.call.apply(t.bind,arguments)}function qR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=HR:Ze=qR,Ze.apply(null,arguments)}function Ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Sr(){this.s=this.s,this.o=this.o}var WR=0;Sr.prototype.s=!1;Sr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),WR!=0)&&BR(this)};Sr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const j1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _p(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function fy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ju(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var KR=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Zl,e),V.removeEventListener("test",Zl,e)}catch{}return t}();function eu(t){return/^[\s\xa0]*$/.test(t)}var py=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lh(t,e){return t<e?-1:t>e?1:0}function Vu(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return Vu().indexOf(t)!=-1}function Ep(t){return Ep[" "](t),t}Ep[" "]=Zl;function V1(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var GR=en("Opera"),Zi=en("Trident")||en("MSIE"),B1=en("Edge"),Nd=B1||Zi,z1=en("Gecko")&&!(Vu().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),QR=Vu().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function H1(){var t=V.document;return t?t.documentMode:void 0}var tu;e:{var uh="",ch=function(){var t=Vu();if(z1)return/rv:([^\);]+)(\)|;)/.exec(t);if(B1)return/Edge\/([\d\.]+)/.exec(t);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QR)return/WebKit\/(\S+)/.exec(t);if(GR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ch&&(uh=ch?ch[1]:""),Zi){var hh=H1();if(hh!=null&&hh>parseFloat(uh)){tu=String(hh);break e}}tu=uh}var YR={};function XR(){return V1(YR,9,function(){let t=0;const e=py(String(tu)).split("."),n=py("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=lh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||lh(i[2].length==0,s[2].length==0)||lh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ad;if(V.document&&Zi){var my=H1();Ad=my||parseInt(tu,10)||void 0}else Ad=void 0;var JR=Ad;function Po(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z1){e:{try{Ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Po.$.h.call(this)}}Me(Po,et);var ZR={2:"touch",3:"pen",4:"mouse"};Po.prototype.h=function(){Po.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ta="closure_listenable_"+(1e6*Math.random()|0),eN=0;function tN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++eN,this.fa=this.ia=!1}function Bu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function q1(t){const e={};for(const n in t)e[n]=t[n];return e}const gy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<gy.length;s++)n=gy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zu(t){this.src=t,this.g={},this.h=0}zu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new tN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Pd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=j1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Sp="closure_lm_"+(1e6*Math.random()|0),dh={};function K1(t,e,n,r,i){if(r&&r.once)return Q1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)K1(t,e[s],n,r,i);return null}return n=Cp(n),t&&t[ta]?t.O(e,n,ea(r)?!!r.capture:!!r,i):G1(t,e,n,!1,r,i)}function G1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ea(i)?!!i.capture:!!i,a=kp(t);if(a||(t[Sp]=a=new zu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(X1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nN(){function t(n){return e.call(t.src,t.listener,n)}const e=rN;return t}function Q1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Q1(t,e[s],n,r,i);return null}return n=Cp(n),t&&t[ta]?t.P(e,n,ea(r)?!!r.capture:!!r,i):G1(t,e,n,!0,r,i)}function Y1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Y1(t,e[s],n,r,i);else r=ea(r)?!!r.capture:!!r,n=Cp(n),t&&t[ta]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dd(s,n,r,i),-1<n&&(Bu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=kp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dd(e,n,r,i)),(n=-1<t?e[t]:null)&&Ip(n))}function Ip(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ta])Pd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(X1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kp(e))?(Pd(n,t),n.h==0&&(n.src=null,e[Sp]=null)):Bu(t)}}}function X1(t){return t in dh?dh[t]:dh[t]="on"+t}function rN(t,e){if(t.fa)t=!0;else{e=new Po(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ip(t),t=n.call(r,e)}return t}function kp(t){return t=t[Sp],t instanceof zu?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cp(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function be(){Sr.call(this),this.i=new zu(this),this.S=this,this.J=null}Me(be,Sr);be.prototype[ta]=!0;be.prototype.removeEventListener=function(t,e,n,r){Y1(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),W1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ua(o,r,!0,e)&&i}if(o=e.g=t,i=Ua(o,r,!0,e)&&i,i=Ua(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ua(o,r,!1,e)&&i}be.prototype.N=function(){if(be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bu(n[r]);delete t.g[e],t.h--}}this.J=null};be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ua(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Pd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xp=V.JSON.stringify;function iN(){var t=e_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sN{constructor(){this.h=this.g=null}add(e,n){const r=J1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var J1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new oN,t=>t.reset());class oN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aN(t){V.setTimeout(()=>{throw t},0)}function Z1(t,e){Od||lN(),Ld||(Od(),Ld=!0),e_.add(t,e)}var Od;function lN(){var t=V.Promise.resolve(void 0);Od=function(){t.then(uN)}}var Ld=!1,e_=new sN;function uN(){for(var t;t=iN();){try{t.h.call(t.g)}catch(n){aN(n)}var e=J1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ld=!1}function Hu(t,e){be.call(this),this.h=t||1,this.g=e||V,this.j=Ze(this.qb,this),this.l=Date.now()}Me(Hu,be);P=Hu.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Rp(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Hu.$.N.call(this),Rp(this),delete this.g};function Np(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function t_(t){t.g=Np(()=>{t.g=null,t.i&&(t.i=!1,t_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cN extends Sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:t_(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Do(t){Sr.call(this),this.h=t,this.g={}}Me(Do,Sr);var yy=[];function n_(t,e,n,r){Array.isArray(n)||(n&&(yy[0]=n.toString()),n=yy);for(var i=0;i<n.length;i++){var s=K1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function r_(t){Tp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ip(e)},t),t.g={}}Do.prototype.N=function(){Do.$.N.call(this),r_(this)};Do.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qu(){this.g=!0}qu.prototype.Ea=function(){this.g=!1};function hN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ai(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pN(t,n)+(r?" "+r:"")})}function fN(t,e){t.info(function(){return"TIMEOUT: "+e})}qu.prototype.info=function(){};function pN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xp(n)}catch{return e}}var li={},vy=null;function Wu(){return vy=vy||new be}li.Ta="serverreachability";function i_(t){et.call(this,li.Ta,t)}Me(i_,et);function Oo(t){const e=Wu();He(e,new i_(e))}li.STAT_EVENT="statevent";function s_(t,e){et.call(this,li.STAT_EVENT,t),this.stat=e}Me(s_,et);function at(t){const e=Wu();He(e,new s_(e,t))}li.Ua="timingevent";function o_(t,e){et.call(this,li.Ua,t),this.size=e}Me(o_,et);function na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Ku={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},a_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ap(){}Ap.prototype.h=null;function wy(t){return t.h||(t.h=t.i())}function l_(){}var ra={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pp(){et.call(this,"d")}Me(Pp,et);function Dp(){et.call(this,"c")}Me(Dp,et);var $d;function Gu(){}Me(Gu,Ap);Gu.prototype.g=function(){return new XMLHttpRequest};Gu.prototype.i=function(){return{}};$d=new Gu;function ia(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Do(this),this.P=mN,t=Nd?125:void 0,this.V=new Hu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new u_}function u_(){this.i=null,this.g="",this.h=!1}var mN=45e3,bd={},nu={};P=ia.prototype;P.setTimeout=function(t){this.P=t};function Md(t,e,n){t.L=1,t.v=Yu(An(e)),t.s=n,t.S=!0,c_(t,null)}function c_(t,e){t.G=Date.now(),sa(t),t.A=An(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),v_(n.i,"t",r),t.C=0,n=t.l.I,t.h=new u_,t.g=F_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cN(Ze(t.Pa,t,t.g),t.O)),n_(t.U,t.g,"readystatechange",t.nb),e=t.I?q1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Oo(),hN(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Nd||this.g&&(this.h.h||this.g.ja()||Sy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Oo(3):Oo(2)),Qu(this);var n=this.g.da();this.aa=n;t:if(h_(this)){var r=Sy(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),to(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eu(a)){var u=a;break t}}u=null}if(n=u)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ud(this,n);else{this.i=!1,this.o=3,at(12),$r(this),to(this);break e}}this.S?(d_(this,c,o),Nd&&this.i&&c==3&&(n_(this.U,this.V,"tick",this.mb),this.V.start())):(Ai(this.j,this.m,o,null),Ud(this,o)),c==4&&$r(this),this.i&&!this.J&&(c==4?$_(this.l,this):(this.i=!1,sa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),$r(this),to(this)}}}catch{}finally{}};function h_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function d_(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=gN(t,n),i==nu){e==4&&(t.o=4,at(14),r=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bd){t.o=4,at(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ai(t.j,t.m,i,null),Ud(t,i);h_(t)&&i!=nu&&i!=bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fp(e),e.L=!0,at(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),$r(t),to(t))}P.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(Qu(this),d_(this,t,e),this.i&&t!=4&&sa(this))}};function gN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nu:(n=Number(e.substring(n,r)),isNaN(n)?bd:(r+=1,r+n>e.length?nu:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,$r(this)};function sa(t){t.Y=Date.now()+t.P,f_(t,t.P)}function f_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=na(Ze(t.lb,t),e)}function Qu(t){t.B&&(V.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fN(this.j,this.A),this.L!=2&&(Oo(),at(17)),$r(this),this.o=2,to(this)):f_(this,this.Y-t)};function to(t){t.l.H==0||t.J||$_(t.l,t)}function $r(t){Qu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Rp(t.V),r_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Ud(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Fd(n.h,t))){if(!t.K&&Fd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)su(n),Zu(n);else break e;Up(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=na(Ze(n.ib,n),6e3));if(1>=E_(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else br(n,11)}else if((t.K||n.g==t)&&su(n),!eu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Op(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ce(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=U_(r,r.I?r.oa:null,r.Y),o.K){T_(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Qu(a),sa(a)),r.g=o}else O_(r);0<n.i.length&&ec(n)}else u[0]!="stop"&&u[0]!="close"||br(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?br(n,7):Mp(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Oo(4)}catch{}}function yN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ju(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ju(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function p_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ju(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vN(t),r=yN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var m_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vr){this.h=e!==void 0?e:t.h,ru(this,t.j),this.s=t.s,this.g=t.g,iu(this,t.m),this.l=t.l,e=t.i;var n=new Lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_y(this,n),this.o=t.o}else t&&(n=String(t).match(m_))?(this.h=!!e,ru(this,n[1]||"",!0),this.s=Fs(n[2]||""),this.g=Fs(n[3]||"",!0),iu(this,n[4]),this.l=Fs(n[5]||"",!0),_y(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.h=!!e,this.i=new Lo(null,this.h))}Vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Ey,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Ey,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?TN:EN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,IN)),t.join("")};function An(t){return new Vr(t)}function ru(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function iu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _y(t,e,n){e instanceof Lo?(t.i=e,kN(t.i,t.h)):(n||(e=js(e,SN)),t.i=new Lo(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function Yu(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,_N),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _N(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ey=/[#\/\?@]/g,EN=/[#\?:]/g,TN=/[#\?]/g,SN=/[#\?@]/g,IN=/#/g;function Lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ir(t){t.g||(t.g=new Map,t.h=0,t.i&&wN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Lo.prototype;P.add=function(t,e){Ir(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function g_(t,e){Ir(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function y_(t,e){return Ir(t),e=ps(t,e),t.g.has(e)}P.forEach=function(t,e){Ir(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.sa=function(){Ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Ir(this);let e=[];if(typeof t=="string")y_(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Ir(this),this.i=null,t=ps(this,t),y_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function v_(t,e,n){g_(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),_p(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kN(t,e){e&&!t.j&&(Ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(g_(this,r),v_(this,i,n))},t)),t.j=e}var CN=class{constructor(t,e){this.h=t,this.g=e}};function w_(t){this.l=t||xN,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xN=10;function __(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function E_(t){return t.h?1:t.g?t.g.size:0}function Fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Op(t,e){t.g?t.g.add(e):t.h=e}function T_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}w_.prototype.cancel=function(){if(this.i=S_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function S_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _p(t.i)}function Lp(){}Lp.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Lp.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function RN(){this.g=new Lp}function NN(t,e,n){const r=n||"";try{p_(t,function(i,s){let o=i;ea(i)&&(o=xp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AN(t,e){const n=new qu;if(V.Image){const r=new Image;r.onload=Ma(Fa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(Fa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ma(Fa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(Fa,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function oa(t){this.l=t.fc||null,this.j=t.ob||!1}Me(oa,Ap);oa.prototype.g=function(){return new Xu(this.l,this.j)};oa.prototype.i=function(t){return function(){return t}}({});function Xu(t,e){be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Xu,be);var $p=0;P=Xu.prototype;P.open=function(t,e){if(this.readyState!=$p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$o(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,aa(this)),this.readyState=$p};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;I_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function I_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?aa(this):$o(this),this.readyState==3&&I_(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,aa(this))};P.Ya=function(t){this.g&&(this.response=t,aa(this))};P.ka=function(){this.g&&aa(this)};function aa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$o(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $o(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PN=V.JSON.parse;function we(t){be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=k_,this.L=this.M=!1}Me(we,be);var k_="",DN=/^https?$/i,ON=["POST","PUT"];P=we.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$d.g(),this.C=this.u?wy(this.u):wy($d),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ty(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=j1(ON,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{R_(this),0<this.B&&((this.L=LN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=Np(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ty(this,s)}};function LN(t){return Zi&&XR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof wp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function Ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,C_(t),Ju(t)}function C_(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),Ju(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ju(this,!0)),we.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?x_(this):this.kb())};P.kb=function(){x_(this)};function x_(t){if(t.h&&typeof wp<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)Np(t.La,0,t);else if(He(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(m_)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!DN.test(i?i.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",C_(t)}}finally{Ju(t)}}}}function Ju(t,e){if(t.g){R_(t);const n=t.g,r=t.C[0]?Zl:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function R_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PN(e)}};function Sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case k_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function N_(t){let e="";return Tp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=N_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function A_(t){this.Ga=0,this.i=[],this.j=new qu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new w_(t&&t.concurrentRequestLimit),this.Ja=new RN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=A_.prototype;P.qa=8;P.H=1;function Mp(t){if(P_(t),t.H==3){var e=t.W++,n=An(t.G);ce(n,"SID",t.J),ce(n,"RID",e),ce(n,"TYPE","terminate"),la(t,n),e=new ia(t,t.j,e,void 0),e.L=2,e.v=Yu(An(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=F_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),sa(e)}M_(t)}function Zu(t){t.g&&(Fp(t),t.g.cancel(),t.g=null)}function P_(t){Zu(t),t.u&&(V.clearTimeout(t.u),t.u=null),su(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function ec(t){__(t.h)||t.m||(t.m=!0,Z1(t.Na,t),t.C=0)}function $N(t,e){return E_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=na(Ze(t.Na,t,e),b_(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ia(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=q1(s),W1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=D_(this,i,e),n=An(this.G),ce(n,"RID",t),ce(n,"CVER",22),this.F&&ce(n,"X-HTTP-Session-Id",this.F),la(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(N_(s)))+"&"+e:this.o&&bp(n,this.o,s)),Op(this.h,i),this.bb&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.ba=!0,Md(i,n,null)):Md(i,n,e),this.H=2}}else this.H==3&&(t?Iy(this,t):this.i.length==0||__(this.h)||Iy(this))};function Iy(t,e){var n;e?n=e.m:n=t.W++;const r=An(t.G);ce(r,"SID",t.J),ce(r,"RID",n),ce(r,"AID",t.V),la(t,r),t.o&&t.s&&bp(r,t.o,t.s),n=new ia(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=D_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Op(t.h,n),Md(n,r,e)}function la(t,e){t.ma&&Tp(t.ma,function(n,r){ce(e,r,n)}),t.l&&p_({},function(n,r){ce(e,r,n)})}function D_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ze(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{NN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function O_(t){t.g||t.u||(t.ba=1,Z1(t.Ma,t),t.A=0)}function Up(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=na(Ze(t.Ma,t),b_(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,L_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=na(Ze(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),Zu(this),L_(this))};function Fp(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function L_(t){t.g=new ia(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);ce(e,"RID","rpc"),ce(e,"SID",t.J),ce(e,"CI",t.M?"0":"1"),ce(e,"AID",t.V),ce(e,"TYPE","xmlhttp"),la(t,e),t.o&&t.s&&bp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Yu(An(e)),n.s=null,n.S=!0,c_(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Zu(this),Up(this),at(19))};function su(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function $_(t,e){var n=null;if(t.g==e){su(t),Fp(t),t.g=null;var r=2}else if(Fd(t.h,e))n=e.F,T_(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Wu(),He(r,new o_(r,n)),ec(t)}else O_(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&$N(t,e)||r==2&&Up(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function b_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function br(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ze(t.pb,t);n||(n=new Vr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ru(n,"https"),Yu(n)),AN(n.toString(),r)}else at(2);t.H=0,t.l&&t.l.za(e),M_(t),P_(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function M_(t){if(t.H=0,t.pa=[],t.l){const e=S_(t.h);(e.length!=0||t.i.length!=0)&&(fy(t.pa,e),fy(t.pa,t.i),t.h.i.length=0,_p(t.i),t.i.length=0),t.l.ya()}}function U_(t,e,n){var r=n instanceof Vr?An(n):new Vr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),iu(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vr(null,void 0);r&&ru(s,r),e&&(s.g=e),i&&iu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ce(r,n,e),ce(r,"VER",t.qa),la(t,r),r}function F_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new we(new oa({ob:!0})):new we(t.va),e.Oa(t.I),e}function j_(){}P=j_.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function ou(){if(Zi&&!(10<=Number(JR)))throw Error("Environmental error: no available transport.")}ou.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){be.call(this),this.g=new A_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!eu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}Me(Ct,be);Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=U_(t,null,t.Y),ec(t)};Ct.prototype.close=function(){Mp(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xp(t),t=n);e.i.push(new CN(e.fb++,t)),e.H==3&&ec(e)};Ct.prototype.N=function(){this.g.l=null,delete this.j,Mp(this.g),delete this.g,Ct.$.N.call(this)};function V_(t){Pp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(V_,Pp);function B_(){Dp.call(this),this.status=1}Me(B_,Dp);function ms(t){this.g=t}Me(ms,j_);ms.prototype.Ba=function(){He(this.g,"a")};ms.prototype.Aa=function(t){He(this.g,new V_(t))};ms.prototype.za=function(t){He(this.g,new B_)};ms.prototype.ya=function(){He(this.g,"b")};function bN(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Me(Qt,bN);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ph(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ph(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ph(this,r),i=0;break}}this.h=i,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var MN={};function jp(t){return-128<=t&&128>t?V1(MN,t,function(e){return new ee([e|0],0>e?-1:0)}):new ee([t|0],0>t?-1:0)}function tn(t){if(isNaN(t)||!isFinite(t))return Fi;if(0>t)return Be(tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jd;return new ee(e,0)}function z_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(z_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tn(Math.pow(e,8)),r=Fi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=tn(Math.pow(e,s)),r=r.R(s).add(tn(o))):(r=r.R(n),r=r.add(tn(o)))}return r}var jd=4294967296,Fi=jp(0),Vd=jp(1),ky=jp(16777216);P=ee.prototype;P.ea=function(){if($t(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jd+r)*e,e*=jd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(En(this))return"0";if($t(this))return"-"+Be(this).toString(t);for(var e=tn(Math.pow(t,6)),n=this,r="";;){var i=lu(n,e).g;n=au(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,En(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function En(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $t(t){return t.h==-1}P.X=function(t){return t=au(this,t),$t(t)?-1:En(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ee(n,~t.h).add(Vd)}P.abs=function(){return $t(this)?Be(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function au(t,e){return t.add(Be(e))}P.R=function(t){if(En(this)||En(t))return Fi;if($t(this))return $t(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if($t(t))return Be(this.R(Be(t)));if(0>this.X(ky)&&0>t.X(ky))return tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ja(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ja(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ja(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ja(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ee(n,0)};function ja(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ps(t,e){this.g=t,this.h=e}function lu(t,e){if(En(e))throw Error("division by zero");if(En(t))return new Ps(Fi,Fi);if($t(t))return e=lu(Be(t),e),new Ps(Be(e.g),Be(e.h));if($t(e))return e=lu(t,Be(e)),new Ps(Be(e.g),e.h);if(30<t.g.length){if($t(t)||$t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vd,r=e;0>=r.X(t);)n=Cy(n),r=Cy(r);var i=fi(n,1),s=fi(r,1);for(r=fi(r,2),n=fi(n,2);!En(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=fi(r,1),n=fi(n,1)}return e=au(t,i.R(e)),new Ps(i,e)}for(i=Fi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=tn(n),o=s.R(e);$t(o)||0<o.X(t);)n-=r,s=tn(n),o=s.R(e);En(s)&&(s=Vd),i=i.add(s),t=au(t,o)}return new Ps(i,t)}P.gb=function(t){return lu(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ee(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ee(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ee(n,this.h^t.h)};function Cy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ee(n,t.h)}function fi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ee(i,t.h)}ou.prototype.createWebChannel=ou.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;Ku.NO_ERROR=0;Ku.TIMEOUT=8;Ku.HTTP_ERROR=6;a_.COMPLETE="complete";l_.EventType=ra;ra.OPEN="a";ra.CLOSE="b";ra.ERROR="c";ra.MESSAGE="d";be.prototype.listen=be.prototype.O;we.prototype.listenOnce=we.prototype.P;we.prototype.getLastError=we.prototype.Sa;we.prototype.getLastErrorCode=we.prototype.Ia;we.prototype.getStatus=we.prototype.da;we.prototype.getResponseJson=we.prototype.Wa;we.prototype.getResponseText=we.prototype.ja;we.prototype.send=we.prototype.ha;we.prototype.setWithCredentials=we.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=tn;ee.fromString=z_;var UN=function(){return new ou},FN=function(){return Wu()},mh=Ku,jN=a_,VN=li,xy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},BN=oa,Va=l_,zN=we,HN=Qt,ji=ee;const Ry="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let gs="9.22.0";/**
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
 */const Jr=new op("@firebase/firestore");function Ny(){return Jr.logLevel}function L(t,...e){if(Jr.logLevel<=Q.DEBUG){const n=e.map(Vp);Jr.debug(`Firestore (${gs}): ${t}`,...n)}}function Pn(t,...e){if(Jr.logLevel<=Q.ERROR){const n=e.map(Vp);Jr.error(`Firestore (${gs}): ${t}`,...n)}}function es(t,...e){if(Jr.logLevel<=Q.WARN){const n=e.map(Vp);Jr.warn(`Firestore (${gs}): ${t}`,...n)}}function Vp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function ae(t,e){t||j()}function z(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class H_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}let qN=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}};class WN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let KN=class{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new H_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Qe(e)}};class GN{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}let QN=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new GN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class YN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.T=n.token,new YN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class q_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new De(0,0))}static max(){return new B(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends bo{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const ZN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends bo{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return ZN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(se.fromString(e))}static fromName(e){return new $(se.fromString(e).popFirst(5))}static empty(){return new $(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new se(e.slice()))}}function eA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new pr(i,$.empty(),e)}function tA(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(B.min(),$.empty(),-1)}static max(){return new pr(B.max(),$.empty(),-1)}}function nA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const rA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ua(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==rA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Bp.ct=-1;function tc(t){return t==null}function uu(t){return t===0&&1/t==-1/0}function sA(t){return typeof t=="number"&&Number.isInteger(t)&&!uu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function W_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class K_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new K_("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const oA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=oA.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hp(t){const e=t.mapValue.fields.__previous_value__;return zp(e)?Hp(e):e}function Mo(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class aA{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const za={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zp(t)?4:lA(t)?9007199254740991:10:j()}function cn(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=mr(r.timestampValue),o=mr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?uu(s)===uu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ay(s)!==Ay(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!cn(s[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Fo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dy(t.timestampValue,e.timestampValue);case 4:return Dy(Mo(t),Mo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(Ce(i.latitude),Ce(s.latitude));return o!==0?o:X(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ns(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===za.mapValue&&s===za.mapValue)return 0;if(i===za.mapValue)return 1;if(s===za.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=ns(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Dy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=mr(t),r=mr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function rs(t){return Bd(t)}function Bd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=mr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Bd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Bd(r.fields[a])}`;return s+"}"}(t.mapValue):j();var e,n}function Oy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zd(t){return!!t&&"integerValue"in t}function qp(t){return!!t&&"arrayValue"in t}function Ly(t){return!!t&&"nullValue"in t}function $y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=no(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(no(this.value))}}function G_(t){const e=[];return ui(t.fields,(n,r)=>{const i=new Je([n]);if(fl(r)){const s=G_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class Xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,B.min(),B.min(),B.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,B.min(),B.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,B.min(),B.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function by(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function My(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function uA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Q_{}class Re extends Q_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hA(e,n,r):n==="array-contains"?new pA(e,r):n==="in"?new mA(e,r):n==="not-in"?new gA(e,r):n==="array-contains-any"?new yA(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dA(e,r):new fA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends Q_{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Yt(e,n)}matches(e){return Y_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Y_(t){return t.op==="and"}function X_(t){return cA(t)&&Y_(t)}function cA(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Hd(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(X_(t))return t.filters.map(e=>Hd(e)).join(",");{const e=t.filters.map(n=>Hd(n)).join(",");return`${t.op}(${e})`}}function J_(t,e){return t instanceof Re?function(n,r){return r instanceof Re&&n.op===r.op&&n.field.isEqual(r.field)&&cn(n.value,r.value)}(t,e):t instanceof Yt?function(n,r){return r instanceof Yt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&J_(s,r.filters[o]),!0):!1}(t,e):void j()}function Z_(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${rs(e.value)}`}(t):t instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Z_).join(" ,")+"}"}(t):"Filter"}class hA extends Re{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class dA extends Re{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fA extends Re{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class pA extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qp(n)&&Fo(n.arrayValue,this.value)}}class mA extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fo(this.value.arrayValue,n)}}class gA extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fo(this.value.arrayValue,n)}}class yA extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fo(this.value.arrayValue,r))}}/**
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
 */class vA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Uy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vA(t,e,n,r,i,s,o)}function Wp(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.dt=n}return e.dt}function Kp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!My(t.startAt,e.startAt)&&My(t.endAt,e.endAt)}function qd(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ys{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function wA(t,e,n,r,i,s,o,a){return new ys(t,e,n,r,i,s,o,a)}function Gp(t){return new ys(t)}function Fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function tE(t){return t.collectionGroup!==null}function Bi(t){const e=z(t);if(e.wt===null){e.wt=[];const n=nc(e),r=Qp(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Vi(n)),e.wt.push(new Vi(Je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vi(Je.keyField(),s))}}}return e.wt}function Dn(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=Uy(e.path,e.collectionGroup,Bi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Bi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vi(s.field,o))}const r=e.endAt?new cu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cu(e.startAt.position,e.startAt.inclusive):null;e._t=Uy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Wd(t,e){e.getFirstInequalityField(),nc(t);const n=t.filters.concat([e]);return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kd(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return Kp(Dn(t),Dn(e))&&t.limitType===e.limitType}function nE(t){return`${Wp(Dn(t))}|lt:${t.limitType}`}function Gd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Z_(r)).join(", ")}]`),tc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Bi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=by(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Bi(n),r)||n.endAt&&!function(i,s,o){const a=by(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Bi(n),r))}(t,e)}function _A(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rE(t){return(e,n)=>{let r=!1;for(const i of Bi(t)){const s=EA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EA(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ns(a,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return W_(this.inner)}size(){return this.innerSize}}/**
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
 */const TA=new me($.comparator);function On(){return TA}const iE=new me($.comparator);function Vs(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function sE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return ro()}function oE(){return ro()}function ro(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const SA=new me($.comparator),IA=new tt($.comparator);function q(...t){let e=IA;for(const n of t)e=e.add(n);return e}const kA=new tt(X);function CA(){return kA}/**
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
 */function aE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uu(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function xA(t,e){return sA(e)?lE(e):aE(t,e)}/**
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
 */class sc{constructor(){this._=void 0}}function RA(t,e,n){return t instanceof jo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&zp(i)&&(i=Hp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vo?cE(t,e):t instanceof Bo?hE(t,e):function(r,i){const s=uE(r,i),o=jy(s)+jy(r.gt);return zd(s)&&zd(r.gt)?lE(o):aE(r.serializer,o)}(t,e)}function NA(t,e,n){return t instanceof Vo?cE(t,e):t instanceof Bo?hE(t,e):n}function uE(t,e){return t instanceof hu?zd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class jo extends sc{}class Vo extends sc{constructor(e){super(),this.elements=e}}function cE(t,e){const n=dE(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends sc{constructor(e){super(),this.elements=e}}function hE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class hu extends sc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function jy(t){return Ce(t.integerValue||t.doubleValue)}function dE(t){return qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class AA{constructor(e,n){this.field=e,this.transform=n}}function PA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vo&&r instanceof Vo||n instanceof Bo&&r instanceof Bo?ts(n.elements,r.elements,cn):n instanceof hu&&r instanceof hu?cn(n.gt,r.gt):n instanceof jo&&r instanceof jo}(t.transform,e.transform)}class DA{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function fE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mE(t.key,Kt.none()):new ha(t.key,t.data,Kt.none());{const n=t.data,r=pt.empty();let i=new tt(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new Tt(i.toArray()),Kt.none())}}function OA(t,e,n){t instanceof ha?function(r,i,s){const o=r.value.clone(),a=By(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(r,i,s){if(!pl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=By(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(pE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof ha?function(i,s,o,a){if(!pl(i.precondition,s))return o;const l=i.value.clone(),u=zy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,s,o,a){if(!pl(i.precondition,s))return o;const l=zy(i.fieldTransforms,a,s),u=s.data;return u.setAll(pE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return pl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function LA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ts(n,r,(i,s)=>PA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function By(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NA(o,a,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RA(s,o,e))}return r}class mE extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $A extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=oE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=fE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Vy(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Vy(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=SA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
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
 */class MA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class UA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,K;function FA(t){switch(t){default:return j();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function gE(t){if(t===void 0)return Pn("GRPC error has no .code"),I.UNKNOWN;switch(t){case ke.OK:return I.OK;case ke.CANCELLED:return I.CANCELLED;case ke.UNKNOWN:return I.UNKNOWN;case ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ke.INTERNAL:return I.INTERNAL;case ke.UNAVAILABLE:return I.UNAVAILABLE;case ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ke.NOT_FOUND:return I.NOT_FOUND;case ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ke.ABORTED:return I.ABORTED;case ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ke.DATA_LOSS:return I.DATA_LOSS;default:return j()}}(K=ke||(ke={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Xp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ha}static getOrCreateInstance(){return Ha===null&&(Ha=new Xp),Ha}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ha=null;/**
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
 */function jA(){return new TextEncoder}/**
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
 */const VA=new ji([4294967295,4294967295],0);function Hy(t){const e=jA().encode(t),n=new HN;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ji([n,r],0),new ji([i,s],0)]}class Jp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ji.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ji.fromNumber(r)));return i.compare(VA)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Hy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Hy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(B.min(),i,new me(X),On(),q())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,q(),q(),q())}}/**
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
 */class ml{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class yE{constructor(e,n){this.targetId=e,this.Vt=n}}class vE{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wy{constructor(){this.St=0,this.Dt=Gy(),this.Ct=it.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=q(),n=q(),r=q();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new da(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Gy()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class BA{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=On(),this.zt=Ky(),this.Wt=new me(X)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(qd(o))if(i===0){const a=new $(o.path);this.Yt(r,a,Xe.newNoDocument(a,B.min()))}else ae(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Xp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,m,y,v,w,p;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(m=g==null?void 0:g.bits)===null||m===void 0?void 0:m.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(w=g==null?void 0:g.bits)===null||w===void 0?void 0:w.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Zr(s).toUint8Array()}catch(c){if(c instanceof K_)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Jp(l,o,a)}catch(c){return es(c instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&qd(a.target)){const l=new $(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Xe.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=q();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ac(e,n,this.Wt,this.jt,r);return this.jt=On(),this.zt=Ky(),this.Wt=new me(X),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Wy,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new tt(X),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Wy),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Ky(){return new me($.comparator)}function Gy(){return new me($.comparator)}const zA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qA=(()=>({and:"AND",or:"OR"}))();class WA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qd(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KA(t,e){return du(t,e.toTimestamp())}function un(t){return ae(!!t),B.fromTimestamp(function(e){const n=mr(e);return new De(n.seconds,n.nanos)}(t))}function Zp(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _E(t){const e=se.fromString(t);return ae(IE(e)),e}function Yd(t,e){return Zp(t.databaseId,e.path)}function gh(t,e){const n=_E(e);if(n.get(1)!==t.databaseId.projectId)throw new D(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(EE(n))}function Xd(t,e){return Zp(t.databaseId,e)}function GA(t){const e=_E(t);return e.length===4?se.emptyPath():EE(e)}function Jd(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EE(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qy(t,e,n){return{name:Yd(t,e),fields:n.value.mapValue.fields}}function QA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ae(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ae(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:gE(l.code);return new D(u,l.message||"")}(o);n=new vE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gh(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):B.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=Xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ml(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gh(t,r.document),s=r.readTime?un(r.readTime):B.min(),o=Xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gh(t,r.document),s=r.removedTargetIds||[];n=new ml([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UA(i,s),a=r.targetId;n=new yE(a,o)}}return n}function YA(t,e){let n;if(e instanceof ha)n={update:Qy(t,e.key,e.value)};else if(e instanceof mE)n={delete:Yd(t,e.key)};else if(e instanceof kr)n={update:Qy(t,e.key,e.data),updateMask:sP(e.fieldMask)};else{if(!(e instanceof $A))return j();n={verify:Yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof jo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof hu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(t,e.precondition)),n}function XA(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?un(r.updateTime):un(i);return s.isEqual(B.min())&&(s=un(i)),new DA(s,r.transformResults||[])}(n,e))):[]}function JA(t,e){return{documents:[Xd(t,e.path)]}}function ZA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return SE(Yt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:mi(c.field),direction:nP(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Qd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function eP(t){let e=GA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=TE(c);return h instanceof Yt&&X_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Vi(gi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,tc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new cu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new cu(d,h)}(n.endAt)),wA(e,i,o,s,a,"F",l,u)}function tP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gi(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=gi(e.unaryFilter.field);return Re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(e.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=gi(e.unaryFilter.field);return Re.create(s,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(gi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(n=>TE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function nP(t){return zA[t]}function rP(t){return HA[t]}function iP(t){return qA[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return Je.fromServerFormat(t.fieldPath)}function SE(t){return t instanceof Re?function(e){if(e.op==="=="){if($y(e.value))return{unaryFilter:{field:mi(e.field),op:"IS_NAN"}};if(Ly(e.value))return{unaryFilter:{field:mi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($y(e.value))return{unaryFilter:{field:mi(e.field),op:"IS_NOT_NAN"}};if(Ly(e.value))return{unaryFilter:{field:mi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(e.field),op:rP(e.op),value:e.value}}}(t):t instanceof Yt?function(e){const n=e.getFilters().map(r=>SE(r));return n.length===1?n[0]:{compositeFilter:{op:iP(e.op),filters:n}}}(t):j()}function sP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yn{constructor(e,n,r,i,s=B.min(),o=B.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oP{constructor(e){this.fe=e}}function aP(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kd(e,e.limit,"L"):e}/**
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
 */class lP{constructor(){this.rn=new uP}addToCollectionParentIndex(e,n){return this.rn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(pr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class uP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(se.comparator)).toArray()}}/**
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
 */class is{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new is(0)}static Mn(){return new is(-1)}}/**
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
 */class cP{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&io(r.mutation,i,Tt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=On();const o=ro(),a=ro();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof kr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),io(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new hP(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ro();let i=new me((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Tt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=oE();c.forEach(d=>{if(!s.has(d)){const m=fE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Mr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:sE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Vs();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new ys(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Xe.newInvalidDocument(u)))});let o=Vs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&io(u.mutation,l,Tt.empty(),De.now()),ic(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class fP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return x.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:un(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:aP(r.bundledQuery),readTime:un(r.readTime)}}(n)),x.resolve()}}/**
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
 */class pP{constructor(){this.overlays=new me($.comparator),this.ls=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Mr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Mr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MA(n,r));let s=this.ls.get(n);s===void 0&&(s=q(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class em{constructor(){this.fs=new tt(Oe.ds),this.ws=new tt(Oe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Oe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new $(new se([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new $(new se([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=q();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return $.comparator(e.key,n.key)||X(e.As,n.As)}static _s(e,n){return X(e.As,n.As)||$.comparator(e.key,n.key)}}/**
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
 */class mP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new tt(Oe.ds)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Oe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(X);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),x.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new $(s),0);let a=new tt(X);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),x.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gP{constructor(e){this.Ds=e,this.docs=new me($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,a=new $(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nA(tA(c),r)<=0||(i.has(c.key)||ic(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}Cs(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yP(this)}getSize(e){return x.resolve(this.size)}}class yP extends cP{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class vP{constructor(e){this.persistence=e,this.xs=new vs(n=>Wp(n),Kp),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new em,this.targetCount=0,this.Ms=is.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),x.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Fn(n),x.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ks.containsKey(n))}}/**
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
 */class wP{constructor(e,n){this.$s={},this.overlays={},this.Os=new Bp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new vP(this),this.indexManager=new lP,this.remoteDocumentCache=function(r){return new gP(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new oP(n),this.qs=new fP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new mP(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new _P(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return x.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class _P extends iA{constructor(e){super(),this.currentSequenceNumber=e}}class tm{constructor(e){this.persistence=e,this.Qs=new em,this.js=null}static zs(e){return new tm(e)}get Ws(){if(this.js)return this.js;throw j()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),x.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ws,r=>{const i=$.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return x.or([()=>x.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nm(e,n.fromCache,r,i)}}/**
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
 */class EP{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Fy(n))return x.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kd(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Kd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Fy(n)||i.isEqual(B.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Ny()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gd(n)),this.Wi(e,o,n,eA(i,-1)))})}ji(e,n){let r=new tt(rE(e));return n.forEach((i,s)=>{ic(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Ny()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Gd(n)),this.Ui.getDocumentsMatchingQuery(e,n,pr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class TP{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new me(X),this.Yi=new vs(s=>Wp(s),Kp),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dP(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function SP(t,e,n,r){return new TP(t,e,n,r)}async function kE(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function IP(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const v=l.docVersions.get(m);ae(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CE(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(it.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,w){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=On(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(CP(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(B.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function CP(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function xP(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RP(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Zd(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ca(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Yy(t,e,n){const r=z(t);let i=B.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.Yi.get(u);return h!==void 0?x.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:q())).next(a=>(NP(r,_A(e),a),{documents:a,ir:s})))}function NP(t,e,n){let r=t.Xi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Xy{constructor(){this.activeTargetIds=CA()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AP{constructor(){this.Hr=new Xy,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PP{Yr(e){}shutdown(){}}/**
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
 */class Jy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qa=null;function yh(){return qa===null?qa=268435456+Math.round(2147483648*Math.random()):qa++,"0x"+qa.toString(16)}/**
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
 */const DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ge="WebChannelConnection";class LP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=yh(),a=this.To(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw es("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=DP[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=yh();return new Promise((o,a)=>{const l=new zN;l.setWithCredentials(!0),l.listenOnce(jN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mh.NO_ERROR:const c=l.getResponseJson();L(Ge,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case mh.TIMEOUT:L(Ge,`RPC '${e}' ${s} timed out`),a(new D(I.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const h=l.getStatus();if(L(Ge,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(m.status);a(new D(y,m.message))}else a(new D(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(I.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{L(Ge,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(Ge,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=yh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UN(),a=FN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new BN({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(Ge,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const y=new OP({ro:w=>{m?L(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(L(Ge,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),L(Ge,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),v=(w,p,f)=>{w.listen(p,g=>{try{f(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(h,Va.EventType.OPEN,()=>{m||L(Ge,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Va.EventType.CLOSE,()=>{m||(m=!0,L(Ge,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Va.EventType.ERROR,w=>{m||(m=!0,es(Ge,`RPC '${e}' stream ${i} transport errored:`,w),y.wo(new D(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,Va.EventType.MESSAGE,w=>{var p;if(!m){const f=w.data[0];ae(!!f);const g=f,_=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(_){L(Ge,`RPC '${e}' stream ${i} received error:`,_);const E=_.status;let k=function(R){const b=ke[R];if(b!==void 0)return gE(b)}(E),N=_.message;k===void 0&&(k=I.INTERNAL,N="Unknown error status: "+E+" with message "+_.message),m=!0,y.wo(new D(k,N)),h.close()}else L(Ge,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,VN.STAT_EVENT,w=>{w.stat===xy.PROXY?L(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===xy.NOPROXY&&L(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function vh(){return typeof document<"u"?document:null}/**
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
 */function lc(t){return new WA(t,!0)}/**
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
 */class xE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class RE{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new xE(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends RE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=QA(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?un(s.readTime):B.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Jd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=qd(a)?{documents:JA(i,a)}:{query:ZA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=wE(i,s.resumeToken);const l=Qd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=du(i,s.snapshotVersion.toTimestamp());const l=Qd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=tP(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Jd(this.serializer),n.removeTarget=e,this.Wo(n)}}class bP extends RE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=XA(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.cu(r,n)}return ae(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Jd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YA(this.serializer,r))};this.Wo(n)}}/**
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
 */class MP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class UP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Pn(n),this.mu=!1):L("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class FP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{ci(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.vu.add(4),await fa(l),l.bu.set("Unknown"),l.vu.delete(4),await uc(l)}(this))})}),this.bu=new UP(r,i)}}async function uc(t){if(ci(t))for(const e of t.Ru)await e(!0)}async function fa(t){for(const e of t.Ru)await e(!1)}function NE(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),sm(n)?im(n):ws(n).Ko()&&rm(n,e))}function AE(t,e){const n=z(t),r=ws(n);n.Au.delete(e),r.Ko()&&PE(n,e),n.Au.size===0&&(r.Ko()?r.jo():ci(n)&&n.bu.set("Unknown"))}function rm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).su(e)}function PE(t,e){t.Vu.qt(e),ws(t).iu(e)}function im(t){t.Vu=new BA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.bu.gu()}function sm(t){return ci(t)&&!ws(t).Uo()&&t.Au.size>0}function ci(t){return z(t).vu.size===0}function DE(t){t.Vu=void 0}async function jP(t){t.Au.forEach((e,n)=>{rm(t,e)})}async function VP(t,e){DE(t),sm(t)?(t.bu.Iu(e),im(t)):t.bu.set("Unknown")}async function BP(t,e,n){if(t.bu.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fu(t,r)}else if(e instanceof ml?t.Vu.Ht(e):e instanceof yE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(B.min()))try{const r=await CE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),PE(i,a);const c=new Yn(u.target,a,l,u.sequenceNumber);rm(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await fu(t,r)}}async function fu(t,e,n){if(!ca(e))throw e;t.vu.add(1),await fa(t),t.bu.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await uc(t)})}function OE(t,e){return e().catch(n=>fu(t,n,e))}async function cc(t){const e=z(t),n=gr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;zP(e);)try{const i=await xP(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,HP(e,i)}catch(i){await fu(e,i)}LE(e)&&$E(e)}function zP(t){return ci(t)&&t.Eu.length<10}function HP(t,e){t.Eu.push(e);const n=gr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function LE(t){return ci(t)&&!gr(t).Uo()&&t.Eu.length>0}function $E(t){gr(t).start()}async function qP(t){gr(t).hu()}async function WP(t){const e=gr(t);for(const n of t.Eu)e.uu(n.mutations)}async function KP(t,e,n){const r=t.Eu.shift(),i=Yp.from(r,e,n);await OE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function GP(t,e){e&&gr(t).ou&&await async function(n,r){if(i=r.code,FA(i)&&i!==I.ABORTED){const s=n.Eu.shift();gr(n).Qo(),await OE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await cc(n)}var i}(t,e),LE(t)&&$E(t)}async function Zy(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.vu.add(3),await fa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await uc(n)}async function QP(t,e){const n=z(t);e?(n.vu.delete(2),await uc(n)):e||(n.vu.add(2),await fa(n),n.bu.set("Unknown"))}function ws(t){return t.Su||(t.Su=function(e,n,r){const i=z(e);return i.fu(),new $P(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:jP.bind(null,t),ao:VP.bind(null,t),nu:BP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),sm(t)?im(t):t.bu.set("Unknown")):(await t.Su.stop(),DE(t))})),t.Su}function gr(t){return t.Du||(t.Du=function(e,n,r){const i=z(e);return i.fu(),new bP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:qP.bind(null,t),ao:GP.bind(null,t),au:WP.bind(null,t),cu:KP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await cc(t)):(await t.Du.stop(),t.Eu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new om(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),ca(t))return new D(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ev{constructor(){this.Cu=new me($.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):j():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class YP{constructor(){this.Nu=void 0,this.listeners=[]}}class XP{constructor(){this.queries=new vs(e=>nE(e),rc),this.onlineState="Unknown",this.ku=new Set}}async function bE(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new YP),i)try{s.Nu=await n.onListen(r)}catch(o){const a=am(o,`Initialization of query '${Gd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&lm(n)}async function ME(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function JP(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&lm(n)}function ZP(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function lm(t){t.ku.forEach(e=>{e.next()})}class UE{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class FE{constructor(e){this.key=e}}class jE{constructor(e){this.key=e}}class eD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=q(),this.mutatedKeys=q(),this.tc=rE(e),this.ec=new zi(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new ev,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=ic(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),w=!0):this.rc(d,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),w=!0):d&&!m&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return m(h)-m(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ss(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ev,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=q(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new jE(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new FE(r))}),n}hc(e){this.Yu=e.ir,this.Zu=q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ss.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class tD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nD{constructor(e){this.key=e,this.fc=!1}}class rD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new vs(a=>nE(a),rc),this._c=new Map,this.mc=new Set,this.gc=new me($.comparator),this.yc=new Map,this.Ic=new em,this.Tc={},this.Ec=new Map,this.Ac=is.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function iD(t,e){const n=pD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await RP(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await sD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&NE(n.remoteStore,o)}return i}async function sD(t,e,n,r,i){t.Rc=(h,d,m)=>async function(y,v,w,p){let f=v.view.sc(w);f.zi&&(f=await Yy(y.localStore,v.query,!1).then(({documents:E})=>v.view.sc(E,f)));const g=p&&p.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return nv(y,v.targetId,_.cc),_.snapshot}(t,h,d,m);const s=await Yy(t.localStore,e,!0),o=new eD(e,s.ir),a=o.sc(s.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);nv(t,n,u.cc);const c=new tD(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function oD(t,e){const n=z(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!rc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),AE(n.remoteStore,r.targetId),ef(n,r.targetId)}).catch(ua)):(ef(n,r.targetId),await Zd(n.localStore,r.targetId,!0))}async function aD(t,e,n){const r=mD(t);try{const i=await function(s,o){const a=z(s),l=De.now(),u=o.reduce((d,m)=>d.add(m.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=On(),y=q();return a.Zi.getEntries(d,u).next(v=>{m=v,m.forEach((w,p)=>{p.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const w=[];for(const p of o){const f=LA(p,c.get(p.key).overlayedDocument);f!=null&&w.push(new kr(p.key,f,G_(f.value.mapValue),Kt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:sE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new me(X)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await pa(r,i.changes),await cc(r.remoteStore)}catch(i){const s=am(i,"Failed to persist write");n.reject(s)}}async function VE(t,e){const n=z(t);try{const r=await kP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ae(o.fc):i.removedDocuments.size>0&&(ae(o.fc),o.fc=!1))}),await pa(n,r,e)}catch(r){await ua(r)}}function tv(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&lm(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lD(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new me($.comparator);o=o.insert(s,Xe.newNoDocument(s,B.min()));const a=q().add(s),l=new ac(B.min(),new Map,new me(X),o,a);await VE(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),um(r)}else await Zd(r.localStore,e,!1).then(()=>ef(r,e,n)).catch(ua)}async function uD(t,e){const n=z(t),r=e.batch.batchId;try{const i=await IP(n.localStore,e);zE(n,r,null),BE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await ua(i)}}async function cD(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ae(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);zE(r,e,n),BE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await ua(i)}}function BE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function zE(t,e,n){const r=z(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||HE(t,r)})}function HE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(AE(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),um(t))}function nv(t,e,n){for(const r of n)r instanceof FE?(t.Ic.addReference(r.key,e),hD(t,r)):r instanceof jE?(L("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||HE(t,r.key)):j()}function hD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.mc.add(r),um(t))}function um(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(se.fromString(e)),r=t.Ac.next();t.yc.set(r,new nD(n)),t.gc=t.gc.insert(n,r),NE(t.remoteStore,new Yn(Dn(Gp(n.path)),r,"TargetPurposeLimboResolution",Bp.ct))}}async function pa(t,e,n){const r=z(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=nm.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ca(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function dD(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await kE(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.er)}}function fD(t,e){const n=z(t),r=n.yc.get(e);if(r&&r.fc)return q().add(r.key);{let i=q();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function pD(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lD.bind(null,e),e.dc.nu=JP.bind(null,e.eventManager),e.dc.Pc=ZP.bind(null,e.eventManager),e}function mD(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cD.bind(null,e),e}class rv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SP(this.persistence,new EP,e.initialUser,this.serializer)}createPersistence(e){return new wP(tm.zs,this.serializer)}createSharedClientState(e){return new AP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dD.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XP}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new LP(i));var i;return function(s,o,a,l){return new MP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>tv(this.syncEngine,a,0),o=Jy.D()?new Jy:new PP,new FP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new rD(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);L("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await fa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class qE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=q_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Zy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Zy(e.remoteStore,s)),t._onlineComponents=e}function vD(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vD(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new rv)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await wh(t,new rv);return t._offlineComponents}async function WE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await iv(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await iv(t,new gD))),t._onlineComponents}function _D(t){return WE(t).then(e=>e.syncEngine)}async function KE(t){const e=await WE(t),n=e.eventManager;return n.onListen=iD.bind(null,e.syncEngine),n.onUnlisten=oD.bind(null,e.syncEngine),n}function ED(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new qE({next:h=>{s.enqueueAndForget(()=>ME(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new D(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new D(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new UE(Gp(o.path),u,{includeMetadataChanges:!0,Ku:!0});return bE(i,c)}(await KE(t),t.asyncQueue,e,n,r)),r.promise}function TD(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new qE({next:h=>{s.enqueueAndForget(()=>ME(i,c)),h.fromCache&&a.source==="server"?l.reject(new D(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new UE(o,u,{includeMetadataChanges:!0,Ku:!0});return bE(i,c)}(await KE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function GE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const sv=new Map;/**
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
 */function QE(t,e,n){if(!n)throw new D(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SD(t,e,n,r){if(e===!0&&r===!0)throw new D(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!$.isDocumentKey(t))throw new D(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if($.isDocumentKey(t))throw new D(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new D(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class dc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qN;switch(n.type){case"firstParty":return new QN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sv.get(e);n&&(L("ComponentProvider","Removing Datastore"),sv.delete(e),n.terminate())}(this),Promise.resolve()}}function ID(t,e,n,r={}){var i;const s=(t=hn(t,dc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&es("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Qe.MOCK_USER;else{o=Zw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new D(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Qe(l)}t._authCredentials=new WN(new H_(o,a))}}/**
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
 */class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class ur extends hi{constructor(e,n,r){super(e,n,Gp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new $(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function YE(t,e,...n){if(t=ve(t),QE("collection","path",e),t instanceof dc){const r=se.fromString(e,...n);return av(r),new ur(t,null,r)}{if(!(t instanceof ut||t instanceof ur))throw new D(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return av(r),new ur(t.firestore,null,r)}}function XE(t,e,...n){if(t=ve(t),arguments.length===1&&(e=q_.A()),QE("doc","path",e),t instanceof dc){const r=se.fromString(e,...n);return ov(r),new ut(t,null,new $(r))}{if(!(t instanceof ut||t instanceof ur))throw new D(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return ov(r),new ut(t.firestore,t instanceof ur?t.converter:null,new $(r))}}/**
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
 */class kD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new xE(this,"async_queue_retry"),this.Xc=()=>{const n=vh();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=vh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Sn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ca(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=om.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&j()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class _s extends dc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new kD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JE(this),this._firestoreClient.terminate()}}function CD(t,e){const n=typeof t=="object"?t:lp(),r=typeof t=="string"?t:e||"(default)",i=bu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Yw("firestore");s&&ID(i,...s)}return i}function cm(t){return t._firestoreClient||JE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JE(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new aA(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,GE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new yD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(it.fromBase64String(e))}catch(n){throw new D(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pc{constructor(e){this._methodName=e}}/**
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
 */class hm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const xD=/^__.*__$/;class RD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class dm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new dm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return pu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(eT(this.ca)&&xD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ND{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}ya(e,n,r,i=!1){return new dm({ca:e,methodName:n,ga:r,path:Je.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mc(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new ND(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tT(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);pm("Data must be an object, but it was:",o,r);const a=nT(r,o);let l,u;if(s.merge)l=new Tt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=tf(e,h,n);if(!o.contains(d))throw new D(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iT(c,d)||c.push(d)}l=new Tt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new RD(new pt(a),l,u)}class gc extends pc{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gc}}class fm extends pc{_toFieldTransform(e){return new AA(e.path,new jo)}isEqual(e){return e instanceof fm}}function AD(t,e,n,r){const i=t.ya(1,e,n);pm("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ui(r,(l,u)=>{const c=mm(e,l,n);u=ve(u);const h=i.da(c);if(u instanceof gc)s.push(c);else{const d=ma(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Tt(s);return new ZE(o,a,i.fieldTransforms)}function PD(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[tf(e,r,n)],l=[i];if(s.length%2!=0)throw new D(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(tf(e,s[d])),l.push(s[d+1]);const u=[],c=pt.empty();for(let d=a.length-1;d>=0;--d)if(!iT(u,a[d])){const m=a[d];let y=l[d];y=ve(y);const v=o.da(m);if(y instanceof gc)u.push(m);else{const w=ma(y,v);w!=null&&(u.push(m),c.set(m,w))}}const h=new Tt(u);return new ZE(c,h,o.fieldTransforms)}function DD(t,e,n,r=!1){return ma(n,t.ya(r?4:3,e))}function ma(t,e){if(rT(t=ve(t)))return pm("Unsupported field value:",e,t),nT(t,e);if(t instanceof pc)return function(n,r){if(!eT(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ma(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:du(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:du(r.serializer,i)}}if(n instanceof hm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:wE(r.serializer,n._byteString)};if(n instanceof ut){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${hc(n)}`)}(t,e)}function nT(t,e){const n={};return W_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=ma(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof hm||t instanceof os||t instanceof ut||t instanceof pc)}function pm(t,e,n){if(!rT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=hc(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function tf(t,e,n){if((e=ve(e))instanceof fc)return e._internalPath;if(typeof e=="string")return mm(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const OD=new RegExp("[~\\*/\\[\\]]");function mm(t,e,n){if(e.search(OD)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(I.INVALID_ARGUMENT,a+t+l)}function iT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LD extends sT{data(){return super.data()}}function yc(t,e){return typeof e=="string"?mm(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function $D(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{}class oT extends gm{}function bD(t,e,...n){let r=[];e instanceof gm&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof ym).length,o=i.filter(a=>a instanceof vc).length;if(s>1||s>0&&o>0)throw new D(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vc extends oT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vc(e,n,r)}_apply(e){const n=this._parse(e);return aT(e._query,n),new hi(e.firestore,e.converter,Wd(e._query,n))}_parse(e){const n=mc(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){cv(c,u);const d=[];for(const m of c)d.push(uv(a,i,m));h={arrayValue:{values:d}}}else h=uv(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||cv(c,u),h=DD(o,s,c,u==="in"||u==="not-in");return Re.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MD(t,e,n){const r=e,i=yc("where",t);return vc._create(i,r,n)}class ym extends gm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ym(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)aT(s,a),s=Wd(s,a)}(e._query,n),new hi(e.firestore,e.converter,Wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vm extends oT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vm(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new D(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new D(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vi(i,s);return function(a,l){if(Qp(a)===null){const u=nc(a);u!==null&&lT(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new hi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ys(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function UD(t,e="asc"){const n=e,r=yc("orderBy",t);return vm._create(r,n)}function uv(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new D(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&n.indexOf("/")!==-1)throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!$.isDocumentKey(r))throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oy(t,new $(r))}if(n instanceof ut)return Oy(t,n._key);throw new D(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function cv(t,e){if(!Array.isArray(t)||t.length===0)throw new D(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aT(t,e){if(e.isInequality()){const r=nc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Qp(t);s!==null&&lT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lT(t,e,n){if(!n.isEqual(e))throw new D(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class FD{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hm(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=mr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);ae(IE(r));const i=new Uo(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function uT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cT extends sT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gl extends cT{data(e={}){return super.data(e)}}class jD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new gl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new gl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:VD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function YL(t){t=hn(t,ut);const e=hn(t.firestore,_s);return ED(cm(e),t._key).then(n=>qD(e,t,n))}class hT extends FD{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function BD(t){t=hn(t,hi);const e=hn(t.firestore,_s),n=cm(e),r=new hT(e);return $D(t._query),TD(n,t._query).then(i=>new jD(e,r,t,i))}function XL(t,e,n){t=hn(t,ut);const r=hn(t.firestore,_s),i=uT(t.converter,e,n);return wm(r,[tT(mc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kt.none())])}function zD(t,e,n,...r){t=hn(t,ut);const i=hn(t.firestore,_s),s=mc(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof fc?PD(s,"updateDoc",t._key,e,n,r):AD(s,"updateDoc",t._key,e),wm(i,[o.toMutation(t._key,Kt.exists(!0))])}function HD(t,e){const n=hn(t.firestore,_s),r=XE(t),i=uT(t.converter,e);return wm(n,[tT(mc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function wm(t,e){return function(n,r){const i=new Sn;return n.asyncQueue.enqueueAndForget(async()=>aD(await _D(n),r,i)),i.promise}(cm(t),e)}function qD(t,e,n){const r=n.docs.get(e._key),i=new hT(t);return new cT(t,i,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}function WD(){return new fm("serverTimestamp")}(function(t,e=!0){(function(n){gs=n})(oi),Qr(new fr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _s(new KN(n.getProvider("auth-internal")),new XN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(Ry,"3.12.0",t),on(Ry,"3.12.0","esm2017")})();var dT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hv=Y.createContext&&Y.createContext(dT),cr=globalThis&&globalThis.__assign||function(){return cr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},cr.apply(this,arguments)},KD=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function fT(t){return t&&t.map(function(e,n){return Y.createElement(e.tag,cr({key:n},e.attr),fT(e.child))})}function pT(t){return function(e){return Y.createElement(GD,cr({attr:cr({},t.attr)},e),fT(t.child))}}function GD(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=KD(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Y.createElement("svg",cr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:cr(cr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Y.createElement("title",null,s),t.children)};return hv!==void 0?Y.createElement(hv.Consumer,null,function(n){return e(n)}):e(dT)}function JL(t){return pT({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}function QD(t){return pT({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#E8EAF6",points:"42,39 6,39 6,23 24,6 42,23"}},{tag:"g",attr:{fill:"#C5CAE9"},child:[{tag:"polygon",attr:{points:"39,21 34,16 34,9 39,9"}},{tag:"rect",attr:{x:"6",y:"39",width:"36",height:"5"}}]},{tag:"polygon",attr:{fill:"#B71C1C",points:"24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"}},{tag:"rect",attr:{x:"18",y:"28",fill:"#D84315",width:"12",height:"16"}},{tag:"rect",attr:{x:"21",y:"17",fill:"#01579B",width:"6",height:"6"}},{tag:"path",attr:{fill:"#FF8A65",d:"M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"}}]})(t)}var YD="firebase",XD="9.22.0";/**
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
 */on(YD,XD,"app");const JD={apiKey:"AIzaSyDKtajGUdjVpn_Zf8Twq2D8Gyndpu51r4o",authDomain:"realestate-b4de7.firebaseapp.com",projectId:"realestate-b4de7",storageBucket:"realestate-b4de7.appspot.com",messagingSenderId:"829677483220",appId:"1:829677483220:web:0cb9034dac811f7957b741"};n1(JD);const nf=CD();function mT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=mT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Xn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=mT(t))&&(r&&(r+=" "),r+=e);return r}const so=t=>typeof t=="number"&&!isNaN(t),ti=t=>typeof t=="string",gt=t=>typeof t=="function",yl=t=>ti(t)||gt(t)?t:null,_h=t=>S.isValidElement(t)||ti(t)||gt(t)||so(t);function ZD(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function wc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=o;const m=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,v=S.useRef(0);return S.useLayoutEffect(()=>{const w=h.current,p=m.split(" "),f=g=>{g.target===h.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",f),w.removeEventListener("animationcancel",f),v.current===0&&g.type!=="animationcancel"&&w.classList.remove(...p))};w.classList.add(...p),w.addEventListener("animationend",f),w.addEventListener("animationcancel",f)},[]),S.useEffect(()=>{const w=h.current,p=()=>{w.removeEventListener("animationend",p),i?ZD(w,c,s):c()};d||(u?p():(v.current=1,w.className+=` ${y}`,w.addEventListener("animationend",p)))},[d]),Y.createElement(Y.Fragment,null,a)}}function dv(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Dt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Wa=t=>{let{theme:e,type:n,...r}=t;return Y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Eh={info:function(t){return Y.createElement(Wa,{...t},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Y.createElement(Wa,{...t},Y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Y.createElement(Wa,{...t},Y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Y.createElement(Wa,{...t},Y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Y.createElement("div",{className:"Toastify__spinner"})}};function eO(t){const[,e]=S.useReducer(m=>m+1,0),[n,r]=S.useState([]),i=S.useRef(null),s=S.useRef(new Map).current,o=m=>n.indexOf(m)!==-1,a=S.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:m=>s.get(m)}).current;function l(m){let{containerId:y}=m;const{limit:v}=a.props;!v||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(m){r(y=>m==null?[]:y.filter(v=>v!==m))}function c(){const{toastContent:m,toastProps:y,staleId:v}=a.queue.shift();d(m,y,v)}function h(m,y){let{delay:v,staleId:w,...p}=y;if(!_h(m)||function(te){return!i.current||a.props.enableMultiContainer&&te.containerId!==a.props.containerId||s.has(te.toastId)&&te.updateId==null}(p))return;const{toastId:f,updateId:g,data:_}=p,{props:E}=a,k=()=>u(f),N=g==null;N&&a.count++;const R={...E,style:E.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(p).filter(te=>{let[Ue,Ne]=te;return Ne!=null})),toastId:f,updateId:g,data:_,closeToast:k,isIn:!1,className:yl(p.className||E.toastClassName),bodyClassName:yl(p.bodyClassName||E.bodyClassName),progressClassName:yl(p.progressClassName||E.progressClassName),autoClose:!p.isLoading&&(b=p.autoClose,M=E.autoClose,b===!1||so(b)&&b>0?b:M),deleteToast(){const te=dv(s.get(f),"removed");s.delete(f),Dt.emit(4,te);const Ue=a.queue.length;if(a.count=f==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),Ue>0){const Ne=f==null?a.props.limit:1;if(Ue===1||Ne===1)a.displayedToast++,c();else{const Nt=Ne>Ue?Ue:Ne;a.displayedToast=Nt;for(let re=0;re<Nt;re++)c()}}else e()}};var b,M;R.iconOut=function(te){let{theme:Ue,type:Ne,isLoading:Nt,icon:re}=te,Ie=null;const A={theme:Ue,type:Ne};return re===!1||(gt(re)?Ie=re(A):S.isValidElement(re)?Ie=S.cloneElement(re,A):ti(re)||so(re)?Ie=re:Nt?Ie=Eh.spinner():(F=>F in Eh)(Ne)&&(Ie=Eh[Ne](A))),Ie}(R),gt(p.onOpen)&&(R.onOpen=p.onOpen),gt(p.onClose)&&(R.onClose=p.onClose),R.closeButton=E.closeButton,p.closeButton===!1||_h(p.closeButton)?R.closeButton=p.closeButton:p.closeButton===!0&&(R.closeButton=!_h(E.closeButton)||E.closeButton);let _e=m;S.isValidElement(m)&&!ti(m.type)?_e=S.cloneElement(m,{closeToast:k,toastProps:R,data:_}):gt(m)&&(_e=m({closeToast:k,toastProps:R,data:_})),E.limit&&E.limit>0&&a.count>E.limit&&N?a.queue.push({toastContent:_e,toastProps:R,staleId:w}):so(v)?setTimeout(()=>{d(_e,R,w)},v):d(_e,R,w)}function d(m,y,v){const{toastId:w}=y;v&&s.delete(v);const p={content:m,props:y};s.set(w,p),r(f=>[...f,w].filter(g=>g!==v)),Dt.emit(4,dv(p,p.props.updateId==null?"added":"updated"))}return S.useEffect(()=>(a.containerId=t.containerId,Dt.cancelEmit(3).on(0,h).on(1,m=>i.current&&u(m)).on(5,l).emit(2,a),()=>{s.clear(),Dt.emit(3,a)}),[]),S.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(m){const y=new Map,v=Array.from(s.values());return t.newestOnTop&&v.reverse(),v.forEach(w=>{const{position:p}=w.props;y.has(p)||y.set(p,[]),y.get(p).push(w)}),Array.from(y,w=>m(w[0],w[1]))},containerRef:i,isToastActive:o}}function fv(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function pv(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function tO(t){const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=S.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:d}=t;function m(_){if(t.draggable){_.nativeEvent.type==="touchstart"&&_.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p),document.addEventListener("touchend",f);const E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=E.getBoundingClientRect(),E.style.transition="",o.x=fv(_.nativeEvent),o.y=pv(_.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=E.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=E.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(_){if(o.boundingRect){const{top:E,bottom:k,left:N,right:R}=o.boundingRect;_.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=N&&o.x<=R&&o.y>=E&&o.y<=k?w():v()}}function v(){n(!0)}function w(){n(!1)}function p(_){const E=s.current;o.canDrag&&E&&(o.didMove=!0,e&&w(),o.x=fv(_),o.y=pv(_),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),E.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,E.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function f(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f);const _=s.current;if(o.canDrag&&o.didMove&&_){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();_.style.transition="transform 0.2s, opacity 0.2s",_.style.transform=`translate${t.draggableDirection}(0)`,_.style.opacity="1"}}S.useEffect(()=>{a.current=t}),S.useEffect(()=>(s.current&&s.current.addEventListener("d",v,{once:!0}),gt(t.onOpen)&&t.onOpen(S.isValidElement(t.children)&&t.children.props),()=>{const _=a.current;gt(_.onClose)&&_.onClose(S.isValidElement(_.children)&&_.children.props)}),[]),S.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",v),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const g={onMouseDown:m,onTouchStart:m,onMouseUp:y,onTouchEnd:y};return l&&u&&(g.onMouseEnter=w,g.onMouseLeave=v),d&&(g.onClick=_=>{h&&h(_),o.canCloseOnClick&&c()}),{playToast:v,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function gT(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return Y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},Y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function nO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const m=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(y.transform=`scaleX(${u})`);const v=Xn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=gt(o)?o({rtl:c,type:i,defaultClassName:v}):Xn(v,o);return Y.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:w,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const rO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=tO(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:d,position:m,className:y,style:v,bodyClassName:w,bodyStyle:p,progressClassName:f,progressStyle:g,updateId:_,role:E,progress:k,rtl:N,toastId:R,deleteToast:b,isIn:M,isLoading:_e,iconOut:te,closeOnClick:Ue,theme:Ne}=t,Nt=Xn("Toastify__toast",`Toastify__toast-theme--${Ne}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":Ue}),re=gt(y)?y({rtl:N,position:m,type:u,defaultClassName:Nt}):Xn(Nt,y),Ie=!!k||!a,A={closeToast:h,type:u,theme:Ne};let F=null;return s===!1||(F=gt(s)?s(A):S.isValidElement(s)?S.cloneElement(s,A):gT(A)),Y.createElement(d,{isIn:M,done:b,position:m,preventExitTransition:n,nodeRef:r},Y.createElement("div",{id:R,onClick:l,className:re,...i,style:v,ref:r},Y.createElement("div",{...M&&{role:E},className:gt(w)?w({type:u}):Xn("Toastify__toast-body",w),style:p},te!=null&&Y.createElement("div",{className:Xn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_e})},te),Y.createElement("div",null,o)),F,Y.createElement(nO,{..._&&!Ie?{key:`pb-${_}`}:{},rtl:N,theme:Ne,delay:a,isRunning:e,isIn:M,closeToast:h,hide:c,type:u,style:g,className:f,controlledProgress:Ie,progress:k||0})))},_c=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},iO=wc(_c("bounce",!0));wc(_c("slide",!0));wc(_c("zoom"));wc(_c("flip"));const rf=S.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=eO(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=Xn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return gt(s)?s({position:c,rtl:a,defaultClassName:h}):Xn(h,yl(s))}return S.useEffect(()=>{e&&(e.current=r.current)},[]),Y.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const d=h.length?{...o}:{...o,pointerEvents:"none"};return Y.createElement("div",{className:u(c),style:d,key:`container-${c}`},h.map((m,y)=>{let{content:v,props:w}=m;return Y.createElement(rO,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":y+1,"--len":h.length},key:`toast-${w.key}`},v)}))}))});rf.displayName="ToastContainer",rf.defaultProps={position:"top-right",transition:iO,autoClose:5e3,closeButton:gT,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Th,Ar=new Map,Hs=[],sO=1;function yT(){return""+sO++}function oO(t){return t&&(ti(t.toastId)||so(t.toastId))?t.toastId:yT()}function oo(t,e){return Ar.size>0?Dt.emit(0,t,e):Hs.push({content:t,options:e}),e.toastId}function mu(t,e){return{...e,type:e&&e.type||t,toastId:oO(e)}}function Ka(t){return(e,n)=>oo(e,mu(t,n))}function J(t,e){return oo(t,mu("default",e))}J.loading=(t,e)=>oo(t,mu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),J.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ti(i)?J.loading(i,n):J.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,d)=>{if(h==null)return void J.dismiss(r);const m={type:c,...a,...n,data:d},y=ti(h)?{render:h}:h;return r?J.update(r,{...m,...y}):J(y.render,{...m,...y}),d},u=gt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},J.success=Ka("success"),J.info=Ka("info"),J.error=Ka("error"),J.warning=Ka("warning"),J.warn=J.warning,J.dark=(t,e)=>oo(t,mu("default",{theme:"dark",...e})),J.dismiss=t=>{Ar.size>0?Dt.emit(1,t):Hs=Hs.filter(e=>t!=null&&e.options.toastId!==t)},J.clearWaitingQueue=function(t){return t===void 0&&(t={}),Dt.emit(5,t)},J.isActive=t=>{let e=!1;return Ar.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},J.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Ar.get(s||Th);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:yT()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,oo(o,s)}},0)},J.done=t=>{J.update(t,{progress:1})},J.onChange=t=>(Dt.on(4,t),()=>{Dt.off(4,t)}),J.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},J.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Dt.on(2,t=>{Th=t.containerId||t,Ar.set(Th,t),Hs.forEach(e=>{Dt.emit(0,e.content,e.options)}),Hs=[]}).on(3,t=>{Ar.delete(t.containerId||t),Ar.size===0&&Dt.off(0).off(1).off(5)});const aO=({listing:t,id:e})=>(console.log(t),T.jsx("div",{children:t.name})),lO=()=>{const t=F1(),e=Lu(),[n,r]=S.useState(),[i,s]=S.useState(null),[o,a]=S.useState(!0),[l,u]=S.useState({name:t.currentUser.displayName,email:t.currentUser.email}),{name:c,email:h}=l;function d(){t.signOut(),e("/")}function m(w){u(p=>({...p,[w.target.id]:w.target.value}))}function y(){r(w=>!w)}async function v(){try{if(t.currentUser.displayName!==c){await Rx(t.currentUser,{displayName:c});const w=XE(nf,"users",t.currentUser.uid);await zD(w,{name:c})}J.success("Profile update details")}catch{J.error("Couldn`t update profile details")}}return S.useEffect(()=>{async function w(){const p=YE(nf,"listings"),f=bD(p,MD("userRef","==",t.currentUser.uid),UD("timestamp","desc")),g=await BD(f);let _=[];g.forEach(E=>_.push({id:E.id,data:E.data()})),s(_),a(!1),console.log(_)}w()},[t.currentUser.uid]),T.jsxs(T.Fragment,{children:[T.jsxs("section",{className:"max-w-6xl mx-auto flex justify-center items-center flex-col",children:[T.jsx("h1",{className:"text-3xl text-center mt-6 font-bold",children:"My Profile"}),T.jsxs("div",{className:"w-full md:w-[50%] mt-6 px-3",children:[T.jsxs("form",{children:[T.jsx("input",{type:"text",id:"name",value:c,onChange:m,disabled:!n,className:`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out ${n&&"bg-red-600 focus:bg-red-600 text-white"}
              }`}),T.jsx("input",{type:"email",id:"email",value:h,disabled:!0,className:"mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out"}),T.jsxs("div",{className:"flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg ",children:[T.jsxs("p",{className:"flex items-center ",children:["Do you want to change your name?",T.jsx("span",{onClick:()=>{n&&v(),y()},className:"ml-1 text-red-700 hover:text-red-600 transition duration-200 ease-in-out cursor-pointer",children:n?"Apply change":"Edit"})]}),T.jsx("p",{onClick:d,className:"text-blue-700 hover:text-blue-600 transition duration-200 ease-in-out cursor-pointer",children:"Sign out"})]})]}),T.jsx("button",{type:"submit",className:"w-full bg-blue-700 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800",children:T.jsxs(Hw,{to:"/create-listing",className:"flex justify-center items-center",children:[T.jsx(QD,{className:"mr-2 text-3xl bg-red-200 rounded-full p-1 border-2"}),"Sell or rent your home"]})})]})]}),T.jsx("div",{className:"max-w-6xl px-3 mt-6 mx-auto ",children:!o&&i.length>0&&T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-2xl text-center font-semibold",children:"My Listings"}),T.jsx("ul",{children:i.map(w=>T.jsx(aO,{listing:w.data,id:w.id},w.id))})]})})]})};/**
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
 */const vT="firebasestorage.googleapis.com",wT="storageBucket",uO=2*60*1e3,cO=10*60*1e3,hO=1e3;/**
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
 */class ge extends dn{constructor(e,n,r=0){super(Sh(e),`Firebase Storage: ${n} (${Sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function Sh(t){return"storage/"+t}function _m(){const t="An unknown error occurred, please check the error payload for server response.";return new ge(le.UNKNOWN,t)}function dO(t){return new ge(le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fO(t){return new ge(le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(le.UNAUTHENTICATED,t)}function mO(){return new ge(le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gO(t){return new ge(le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _T(){return new ge(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ET(){return new ge(le.CANCELED,"User canceled the upload/download.")}function yO(t){return new ge(le.INVALID_URL,"Invalid URL '"+t+"'.")}function vO(t){return new ge(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wO(){return new ge(le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wT+"' property when initializing the app?")}function TT(){return new ge(le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _O(){return new ge(le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function EO(){return new ge(le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TO(t){return new ge(le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sf(t){return new ge(le.INVALID_ARGUMENT,t)}function ST(){return new ge(le.APP_DELETED,"The Firebase app was deleted.")}function SO(t){return new ge(le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ao(t,e){return new ge(le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ds(t){throw new ge(le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw vO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===vT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const E=g[_],k=E.regex.exec(e);if(k){const N=k[E.indices.bucket];let R=k[E.indices.path];R||(R=""),r=new St(N,R),E.postModify(r);break}}if(r==null)throw yO(e);return r}}class IO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(m,l())},w)}function d(){s&&clearTimeout(s)}function m(w,...p){if(u){d();return}if(w){d(),c.call(null,w,...p);return}if(l()||o){d(),c.call(null,w,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function CO(t){t(!1)}/**
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
 */function xO(t){return t!==void 0}function RO(t){return typeof t=="function"}function NO(t){return typeof t=="object"&&!Array.isArray(t)}function Ec(t){return typeof t=="string"||t instanceof String}function mv(t){return Em()&&t instanceof Blob}function Em(){return typeof Blob<"u"&&!wC()}function gv(t,e,n,r){if(r<e)throw sf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ga(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function IT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
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
 */function kT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class AO{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ga(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Br.NO_ERROR,l=s.getStatus();if(!a||kT(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Br.ABORT;r(!1,new Ga(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ga(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=_m();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ST():ET();o(l)}else{const l=_T();o(l)}};this.canceled_?n(!1,new Ga(!1,null,!0)):this.backoffId_=kO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $O(t,e,n,r,i,s,o=!0){const a=IT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return OO(u,e),PO(u,n),DO(u,s),LO(u,r),new AO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function bO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function MO(...t){const e=bO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Em())return new Blob(t);throw new ge(le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function FO(t){if(typeof atob>"u")throw TO("base-64");return atob(t)}/**
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
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ih{constructor(e,n){this.data=e,this.contentType=n||null}}function jO(t,e){switch(t){case nn.RAW:return new Ih(CT(e));case nn.BASE64:case nn.BASE64URL:return new Ih(xT(t,e));case nn.DATA_URL:return new Ih(BO(e),zO(e))}throw _m()}function CT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VO(t){let e;try{e=decodeURIComponent(t)}catch{throw ao(nn.DATA_URL,"Malformed data URL.")}return CT(e)}function xT(t,e){switch(t){case nn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ao(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ao(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=FO(e)}catch(i){throw i.message.includes("polyfill")?i:ao(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ao(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function BO(t){const e=new RT(t);return e.base64?xT(nn.BASE64,e.rest):VO(e.rest)}function zO(t){return new RT(t).contentType}function HO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Wn{constructor(e,n){let r=0,i="";mv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mv(this.data_)){const r=this.data_,i=UO(r,e,n);return i===null?null:new Wn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wn(r,!0)}}static getBlob(...e){if(Em()){const n=e.map(r=>r instanceof Wn?r.data_:r);return new Wn(MO.apply(null,n))}else{const n=e.map(o=>Ec(o)?jO(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function NT(t){let e;try{e=JSON.parse(t)}catch{return null}return NO(e)?e:null}/**
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
 */function qO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function KO(t,e){return e}class st{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||KO}}let Qa=null;function GO(t){return!Ec(t)||t.length<2?t:AT(t)}function PT(){if(Qa)return Qa;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(s,o){return GO(o)}const n=new st("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new st("size");return i.xform=r,t.push(i),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),Qa=t,Qa}function QO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new St(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function YO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return QO(r,t),r}function DT(t,e,n){const r=NT(e);return r===null?null:YO(t,r,n)}function XO(t,e,n,r){const i=NT(e);if(i===null||!Ec(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=ga(d,n,r),y=IT({alt:"media",token:u});return m+y})[0]}function OT(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Es{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function In(t){if(!t)throw _m()}function Tm(t,e){function n(r,i){const s=DT(t,i,e);return In(s!==null),s}return n}function JO(t,e){function n(r,i){const s=DT(t,i,e);return In(s!==null),XO(s,i,t.host,t._protocol)}return n}function ya(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mO():i=pO():n.getStatus()===402?i=fO(t.bucket):n.getStatus()===403?i=gO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function LT(t){const e=ya(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=dO(t.path)),s.serverResponse=i.serverResponse,s}return n}function ZO(t,e,n){const r=e.fullServerUrl(),i=ga(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Es(i,s,Tm(t,n),o);return a.errorHandler=LT(e),a}function eL(t,e,n){const r=e.fullServerUrl(),i=ga(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Es(i,s,JO(t,n),o);return a.errorHandler=LT(e),a}function tL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $T(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tL(null,e)),r}function nL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$T(e,r,i),c=OT(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=Wn.getBlob(h,r,d);if(m===null)throw TT();const y={name:u.fullPath},v=ga(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,f=new Es(v,w,Tm(t,n),p);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=ya(e),f}class gu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Sm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{In(!1)}return In(!!n&&(e||["active"]).indexOf(n)!==-1),n}function rL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=$T(e,r,i),a={name:o.fullPath},l=ga(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=OT(o,n),d=t.maxUploadRetryTime;function m(v){Sm(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{In(!1)}return In(Ec(w)),w}const y=new Es(l,u,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=ya(e),y}function iL(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Sm(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{In(!1)}h||In(!1);const d=Number(h);return In(!isNaN(d)),new gu(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Es(n,o,s,a);return l.headers=i,l.errorHandler=ya(e),l}const yv=256*1024;function sL(t,e,n,r,i,s,o,a){const l=new gu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw _O();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw TT();function w(_,E){const k=Sm(_,["active","final"]),N=l.current+c,R=r.size();let b;return k==="final"?b=Tm(e,s)(_,E):b=null,new gu(N,R,k==="final",b)}const p="POST",f=e.maxUploadRetryTime,g=new Es(n,p,w,f);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=ya(t),g}const dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function kh(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
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
 */class oL{constructor(e,n,r){if(RO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function pi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class aL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ds("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ds("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ds("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ds("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ds("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lL extends aL{initXhr(){this.xhr_.responseType="text"}}function yi(){return new lL}/**
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
 */class uL{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=PT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(kT(i.status,[]))if(s)i=_T();else{this.sleepTime=Math.max(this.sleepTime*2,hO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(le.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=rL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=iL(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,yi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=yv*this._chunkMultiplier,n=new gu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=sL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,yi,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){yv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=ZO(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,yi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=nL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ET(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=kh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oL(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(kh(this._state)){case dt.SUCCESS:pi(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;pi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(kh(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&pi(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&pi(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&pi(e.error.bind(e,this._error))();break;default:e.error&&pi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ni{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ni(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AT(this._location.path)}get storage(){return this._service}get parent(){const e=qO(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new ni(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SO(e)}}function cL(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new uL(t,new Wn(e),n)}function hL(t){t._throwIfRoot("getDownloadURL");const e=eL(t.storage,t._location,PT());return t.storage.makeRequestWithTokens(e,yi).then(n=>{if(n===null)throw EO();return n})}function dL(t,e){const n=WO(t._location.path,e),r=new St(t._location.bucket,n);return new ni(t.storage,r)}/**
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
 */function fL(t){return/^[A-Za-z]+:\/\//.test(t)}function pL(t,e){return new ni(t,e)}function bT(t,e){if(t instanceof Im){const n=t;if(n._bucket==null)throw wO();const r=new ni(n,n._bucket);return e!=null?bT(r,e):r}else return e!==void 0?dL(t,e):t}function mL(t,e){if(e&&fL(e)){if(t instanceof Im)return pL(t,e);throw sf("To use ref(service, url), the first argument must be a Storage instance.")}else return bT(t,e)}function vv(t,e){const n=e==null?void 0:e[wT];return n==null?null:St.makeFromBucketSpec(n,t)}function gL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zw(i,t.app.options.projectId))}class Im{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uO,this._maxUploadRetryTime=cO,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ni(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new IO(ST());{const o=$O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const wv="@firebase/storage",_v="0.11.2";/**
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
 */const MT="storage";function yL(t,e,n){return t=ve(t),cL(t,e,n)}function vL(t){return t=ve(t),hL(t)}function wL(t,e){return t=ve(t),mL(t,e)}function _L(t=lp(),e){t=ve(t);const r=bu(t,MT).getImmediate({identifier:e}),i=Yw("storage");return i&&EL(r,...i),r}function EL(t,e,n,r={}){gL(t,e,n,r)}function TL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Im(n,r,i,e,oi)}function SL(){Qr(new fr(MT,TL,"PUBLIC").setMultipleInstances(!0)),on(wv,_v,""),on(wv,_v,"esm2017")}SL();let Ya;const IL=new Uint8Array(16);function kL(){if(!Ya&&(Ya=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ya))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ya(IL)}const Fe=[];for(let t=0;t<256;++t)Fe.push((t+256).toString(16).slice(1));function CL(t,e=0){return(Fe[t[e+0]]+Fe[t[e+1]]+Fe[t[e+2]]+Fe[t[e+3]]+"-"+Fe[t[e+4]]+Fe[t[e+5]]+"-"+Fe[t[e+6]]+Fe[t[e+7]]+"-"+Fe[t[e+8]]+Fe[t[e+9]]+"-"+Fe[t[e+10]]+Fe[t[e+11]]+Fe[t[e+12]]+Fe[t[e+13]]+Fe[t[e+14]]+Fe[t[e+15]]).toLowerCase()}const xL=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ev={randomUUID:xL};function RL(t,e,n){if(Ev.randomUUID&&!e&&!t)return Ev.randomUUID();t=t||{};const r=t.random||(t.rng||kL)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return CL(r)}const NL=()=>{const t=Lu(),e=F1(),[n,r]=S.useState(!0),[i,s]=S.useState(!1),[o,a]=S.useState({type:"rent",name:"",bedrooms:1,bathrooms:1,parking:!1,furnished:!1,address:"",description:"",offer:!1,regularPrice:0,discountedPrice:0,images:{},latitude:0,longitude:0}),{type:l,name:u,bedrooms:c,bathrooms:h,parking:d,furnished:m,address:y,description:v,offer:w,regularPrice:p,discountedPrice:f,images:g,latitude:_,longitude:E}=o;function k(R){let b=null;R.target.value==="true"&&(b=!0),R.target.value==="false"&&(b=!1),R.target.files&&a(M=>({...M,images:R.target.files})),R.target.files||a(M=>({...M,[R.target.id]:b??R.target.value}))}async function N(R){var Ne,Nt;if(R.preventDefault(),s(!0),+f>=+p){s(!1),J.error("Discounted price needs to be less than regular price");return}if(g.length>6){s(!1),J.error("Maximum 6 images are allowed");return}let b={};if(n){const re=await fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(y)}.json?key=gvLwIs1WuVuZqXnIAnHlczopWpN9ELLa`),{results:Ie}=await re.json();if(console.log(Ie),b.lat=((Ne=Ie[0])==null?void 0:Ne.position.lat)??0,b.lng=((Nt=Ie[0])==null?void 0:Nt.position.lon)??0,console.log(b.lat,b.lng),!Ie.length)return s(!1),J.error("Please enter a correct address")}else b.lat=_,b.lng=E;async function M(re){return new Promise((Ie,A)=>{const F=_L(),H=`${e.currentUser.uid}-${re.name}-${RL()}`,he=wL(F,H),Ee=yL(he,re);Ee.on("state_changed",At=>{const fn=At.bytesTransferred/At.totalBytes*100;switch(console.log("Upload is "+fn+"% done"),At.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},At=>{A(At)},()=>{vL(Ee.snapshot.ref).then(At=>{Ie(At)})})})}const _e=await Promise.all([...g].map(re=>M(re))).catch(re=>(s(!1),J.error("Images not uploaded"))),te={...o,imgUrls:_e,geolocation:b,timestamp:WD(),userRef:e.currentUser.uid};delete te.images,delete te.latitude,delete te.longitude,!te.offer&&delete te.discountedPrice;const Ue=await HD(YE(nf,"listings"),te);s(!1),J.success("Listing created successfully"),t(`/category/${te.type}/${Ue.id}`)}return i?T.jsx(qw,{}):T.jsxs("main",{className:"max-w-md px-2 mx-auto ",children:[T.jsx("h1",{className:"text-3xl text-center mt-6 font-bold",children:"Create a Listing"}),T.jsxs("form",{onSubmit:N,children:[T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Sell / Rent"}),T.jsxs("div",{className:"flex ",children:[T.jsx("button",{id:"type",value:"sale",onClick:k,type:"button",className:`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${l==="rent"?"bg-white text-black":"bg-slate-400 text-white"}`,children:"Sell"}),T.jsx("button",{id:"type",value:"rent",onClick:k,type:"button",className:`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${l==="sale"?"bg-white text-black":"bg-slate-400 text-white"}`,children:"Rent"})]}),T.jsx("p",{className:"text-lg font-semibold",children:"Name"}),T.jsx("input",{type:"text",id:"name",value:u,placeholder:"Name",maxLength:"32",minLength:"10",required:!0,onChange:k,className:"w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"}),T.jsxs("div",{className:"flex space-x-6 mb-6",children:[T.jsxs("div",{children:[T.jsx("p",{className:"text-lg font-semibold",children:"Beds"}),T.jsx("input",{type:"number",id:"bedrooms",value:c,min:"1",max:"50",required:!0,onChange:k,className:"w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"})]}),T.jsxs("div",{children:[T.jsx("p",{className:"text-lg font-semibold",children:"Baths"}),T.jsx("input",{type:"number",id:"bathrooms",value:h,min:"1",max:"50",required:!0,onChange:k,className:"w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"})]})]}),T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Parking spot"}),T.jsxs("div",{className:"flex ",children:[T.jsx("button",{id:"parking",value:!0,onClick:k,type:"button",className:`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${d?"bg-slate-400 text-white":"bg-white text-black"}`,children:"Yes"}),T.jsx("button",{id:"parking",value:!1,onClick:k,type:"button",className:`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${d?"bg-white text-black":"bg-slate-400 text-white"}`,children:"No"})]}),T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Furnished"}),T.jsxs("div",{className:"flex ",children:[T.jsx("button",{id:"furnished",value:!0,onClick:k,type:"button",className:`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${m?"bg-slate-400 text-white":"bg-white text-black"}`,children:"Yes"}),T.jsx("button",{id:"furnished",value:!1,onClick:k,type:"button",className:`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${m?"bg-white text-black":"bg-slate-400 text-white"}`,children:"No"})]}),T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Address"}),T.jsx("textarea",{type:"text",id:"address",value:y,placeholder:"Address",required:!0,onChange:k,className:"w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"}),!n&&T.jsxs("div",{className:"flex mb-6 space-x-6",children:[T.jsxs("div",{children:[T.jsx("p",{className:"text-lg font-semibold",children:"Latitude"}),T.jsx("input",{type:"number",id:"latitude",value:_,onChange:k,required:!0,min:"-90",max:"90",className:"w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white  focus:text-gray-800 focus:border-slate-600 text-center"})]}),T.jsxs("div",{children:[T.jsx("p",{className:"text-lg font-semibold",children:"Longitude"}),T.jsx("input",{type:"number",id:"longitude",value:E,onChange:k,required:!0,min:"-180",max:"180",className:"w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white  focus:text-gray-800 focus:border-slate-600 text-center"})]})]}),T.jsx("p",{className:"text-lg font-semibold",children:"Description"}),T.jsx("textarea",{type:"text",id:"description",value:v,placeholder:"Description",required:!0,onChange:k,className:"w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"}),T.jsx("p",{className:"text-lg font-semibold",children:"Offer"}),T.jsxs("div",{className:"flex mb-6",children:[T.jsx("button",{id:"offer",value:!0,onClick:k,type:"button",className:`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${w?"bg-slate-400 text-white":"bg-white text-black"}`,children:"Yes"}),T.jsx("button",{id:"offer",value:!1,onClick:k,type:"button",className:`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${w?"bg-white text-black":"bg-slate-400 text-white"}`,children:"No"})]}),T.jsx("div",{className:"flex items-center mb-6",children:T.jsxs("div",{children:[T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Regular Price"}),T.jsxs("div",{className:"flex w-full justify-center items-center space-x-6",children:[T.jsx("input",{type:"number",id:"regularPrice",value:p,min:"50",max:"400000000",required:!0,onChange:k,className:"w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"}),l==="rent"&&T.jsx("div",{children:T.jsx("p",{className:"text-md w-full whitespace-nowrap",children:"$ / Month"})})]})]})}),w&&T.jsx("div",{className:"flex items-center mb-6",children:T.jsxs("div",{children:[T.jsx("p",{className:"text-lg mt-6 font-semibold",children:"Discounted Price"}),T.jsxs("div",{className:"flex w-full justify-center items-center space-x-6",children:[T.jsx("input",{type:"number",id:"discountedPrice",value:f,min:"50",max:"400000000",required:w,onChange:k,className:"w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"}),w&&T.jsx("div",{children:T.jsx("p",{className:"text-md w-full whitespace-nowrap",children:"$ / Month"})})]})]})}),T.jsxs("div",{className:"mb-6",children:[T.jsx("p",{className:"text-lg font-semibold",children:"Images"}),T.jsx("p",{className:"text-gray-600",children:"The first image will be the cover (max 6)"}),T.jsx("input",{type:"file",id:"images",onChange:k,accept:".jpg, .png, .jpeg",multiple:!0,required:!0,className:"w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white focus:border-slate-600"})]}),T.jsx("button",{type:"submit",className:"mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out",children:"Create listing"})]})]})},AL=S.lazy(()=>_r(()=>import("./Layout-4b9c1b63.js"),[])),PL=S.lazy(()=>_r(()=>import("./HomePage-0dd3a0e6.js"),[])),DL=S.lazy(()=>_r(()=>import("./SignInPage-b37ff4c6.js"),["assets/SignInPage-b37ff4c6.js","assets/index.esm-af521ae7.js","assets/OAuth-5aa65508.js"])),OL=S.lazy(()=>_r(()=>import("./SignUpPage-9c0c4eb8.js"),["assets/SignUpPage-9c0c4eb8.js","assets/index.esm-af521ae7.js","assets/OAuth-5aa65508.js"])),LL=S.lazy(()=>_r(()=>import("./ForgotPasswordPage-a33c9249.js"),["assets/ForgotPasswordPage-a33c9249.js","assets/OAuth-5aa65508.js"])),$L=S.lazy(()=>_r(()=>import("./OffersPage-2cff7ae3.js"),[])),bL=S.lazy(()=>_r(()=>import("./PageNotFound-2b7a2520.js"),[])),Tv=S.lazy(()=>_r(()=>import("./PrivateRoute-9f63b4f1.js"),[])),ML=()=>T.jsx(S.Suspense,{fallback:T.jsx(qw,{}),children:T.jsx(Jk,{children:T.jsxs(Pt,{path:"/",element:T.jsx(AL,{}),children:[T.jsx(Pt,{index:!0,element:T.jsx(PL,{})}),T.jsx(Pt,{path:"profile",element:T.jsx(Tv,{}),children:T.jsx(Pt,{path:"/profile",element:T.jsx(lO,{})})}),T.jsx(Pt,{path:"sign-in",element:T.jsx(DL,{})}),T.jsx(Pt,{path:"sign-up",element:T.jsx(OL,{})}),T.jsx(Pt,{path:"forgot-password",element:T.jsx(LL,{})}),T.jsx(Pt,{path:"offers",element:T.jsx($L,{})}),T.jsx(Pt,{path:"create-listing",element:T.jsx(Tv,{}),children:T.jsx(Pt,{path:"/create-listing",element:T.jsx(NL,{})})}),T.jsx(Pt,{path:"*",element:T.jsx(bL,{})})]})})});function UL(){return T.jsxs(T.Fragment,{children:[T.jsx(ML,{}),T.jsx(rf,{position:"bottom-center",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}Ch.createRoot(document.getElementById("root")).render(T.jsx(rC,{basename:"/RealEstate",children:T.jsx(S.StrictMode,{children:T.jsx(UL,{})})}));export{JL as F,pT as G,Hw as L,VL as N,jL as O,J as Q,qw as S,Rx as a,WD as b,zL as c,XE as d,nf as e,BL as f,F1 as g,zn as h,WL as i,T as j,YL as k,FL as l,XL as m,qL as o,S as r,HL as s,Lu as u};

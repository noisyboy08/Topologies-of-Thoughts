function Sy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dg={exports:{}},mu={},Ug={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),by=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),Oh=Symbol.iterator;function Dy(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var Ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ig=Object.assign,Fg={};function fo(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ng}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=fo.prototype;function od(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ng}var ad=od.prototype=new Og;ad.constructor=od;Ig(ad,fo.prototype);ad.isPureReactComponent=!0;var kh=Array.isArray,kg=Object.prototype.hasOwnProperty,ld={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kg.call(e,i)&&!Bg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:s,ref:o,props:r,_owner:ld.current}}function Uy(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function Ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function Xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ny(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case Ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xu(o,0):i,kh(r)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(ud(r)&&(r=Uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",kh(t))for(var a=0;a<t.length;a++){s=t[a];var u=i+Xu(s,a);o+=Tl(s,e,n,u,r)}else if(u=Dy(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=i+Xu(s,a++),o+=Tl(s,e,n,u,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Iy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mn={current:null},Al={transition:null},Fy={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:ld};function Hg(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ut.Component=fo;ut.Fragment=My;ut.Profiler=Ty;ut.PureComponent=od;ut.StrictMode=wy;ut.Suspense=by;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;ut.act=Hg;ut.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ig({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)kg.call(e,u)&&!Bg.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ay,_context:t},t.Consumer=t};ut.createElement=zg;ut.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(t){return{$$typeof:Cy,render:t}};ut.isValidElement=ud;ut.lazy=function(t){return{$$typeof:Ly,_payload:{_status:-1,_result:t},_init:Iy}};ut.memo=function(t,e){return{$$typeof:Py,type:t,compare:e===void 0?null:e}};ut.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};ut.unstable_act=Hg;ut.useCallback=function(t,e){return Mn.current.useCallback(t,e)};ut.useContext=function(t){return Mn.current.useContext(t)};ut.useDebugValue=function(){};ut.useDeferredValue=function(t){return Mn.current.useDeferredValue(t)};ut.useEffect=function(t,e){return Mn.current.useEffect(t,e)};ut.useId=function(){return Mn.current.useId()};ut.useImperativeHandle=function(t,e,n){return Mn.current.useImperativeHandle(t,e,n)};ut.useInsertionEffect=function(t,e){return Mn.current.useInsertionEffect(t,e)};ut.useLayoutEffect=function(t,e){return Mn.current.useLayoutEffect(t,e)};ut.useMemo=function(t,e){return Mn.current.useMemo(t,e)};ut.useReducer=function(t,e,n){return Mn.current.useReducer(t,e,n)};ut.useRef=function(t){return Mn.current.useRef(t)};ut.useState=function(t){return Mn.current.useState(t)};ut.useSyncExternalStore=function(t,e,n){return Mn.current.useSyncExternalStore(t,e,n)};ut.useTransition=function(){return Mn.current.useTransition()};ut.version="18.3.1";Ug.exports=ut;var he=Ug.exports;const cd=Lg(he),Oy=Sy({__proto__:null,default:cd},[he]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=he,By=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Gy=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hy.call(e,i)&&!Vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:By,type:t,key:s,ref:o,props:r,_owner:Gy.current}}mu.Fragment=zy;mu.jsx=Gg;mu.jsxs=Gg;Dg.exports=mu;var Qe=Dg.exports,Qc={},Vg={exports:{}},Vn={},Wg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,j){var Q=z.length;z.push(j);e:for(;0<Q;){var re=Q-1>>>1,ae=z[re];if(0<r(ae,j))z[re]=j,z[Q]=ae,Q=re;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var j=z[0],Q=z.pop();if(Q!==j){z[0]=Q;e:for(var re=0,ae=z.length,K=ae>>>1;re<K;){var oe=2*(re+1)-1,_e=z[oe],be=oe+1,Le=z[be];if(0>r(_e,Q))be<ae&&0>r(Le,_e)?(z[re]=Le,z[be]=Q,re=be):(z[re]=_e,z[oe]=Q,re=oe);else if(be<ae&&0>r(Le,Q))z[re]=Le,z[be]=Q,re=be;else break e}}return j}function r(z,j){var Q=z.sortIndex-j.sortIndex;return Q!==0?Q:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,m=3,_=!1,S=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=z)i(c),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(c)}}function w(z){if(E=!1,x(z),!S)if(n(u)!==null)S=!0,te(I);else{var j=n(c);j!==null&&se(w,j.startTime-z)}}function I(z,j){S=!1,E&&(E=!1,f(k),k=-1),_=!0;var Q=m;try{for(x(j),p=n(u);p!==null&&(!(p.expirationTime>j)||z&&!G());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var ae=re(p.expirationTime<=j);j=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(u)&&i(u),x(j)}else i(u);p=n(u)}if(p!==null)var K=!0;else{var oe=n(c);oe!==null&&se(w,oe.startTime-j),K=!1}return K}finally{p=null,m=Q,_=!1}}var L=!1,b=null,k=-1,A=5,R=-1;function G(){return!(t.unstable_now()-R<A)}function ie(){if(b!==null){var z=t.unstable_now();R=z;var j=!0;try{j=b(!0,z)}finally{j?fe():(L=!1,b=null)}}else L=!1}var fe;if(typeof y=="function")fe=function(){y(ie)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,X=B.port2;B.port1.onmessage=ie,fe=function(){X.postMessage(null)}}else fe=function(){v(ie,0)};function te(z){b=z,L||(L=!0,fe())}function se(z,j){k=v(function(){z(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,te(I))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var Q=m;m=j;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return j()}finally{m=Q}},t.unstable_scheduleCallback=function(z,j,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Q+ae,z={id:h++,callback:j,priorityLevel:z,startTime:Q,expirationTime:ae,sortIndex:-1},Q>re?(z.sortIndex=Q,e(c,z),n(u)===null&&z===n(c)&&(E?(f(k),k=-1):E=!0,se(w,Q-re))):(z.sortIndex=ae,e(u,z),S||_||(S=!0,te(I))),z},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(z){var j=m;return function(){var Q=m;m=j;try{return z.apply(this,arguments)}finally{m=Q}}}})(jg);Wg.exports=jg;var Wy=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=he,Gn=Wy;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ko={};function ts(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Ko[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Hh={};function Yy(t){return Jc.call(Hh,t)?!0:Jc.call(zh,t)?!1:Xy.test(t)?Hh[t]=!0:(zh[t]=!0,!1)}function qy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $y(t,e,n,i){if(e===null||typeof e>"u"||qy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,dd);ln[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,dd);ln[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,dd);ln[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function hd(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($y(e,n,r,i)&&(n=null),i||r===null?Yy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var kt=Object.assign,Yu;function Fo(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var qu=!1;function $u(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var u=`
`+r[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function Ky(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=$u(t.type,!1),t;case 11:return t=$u(t.type.render,!1),t;case 1:return t=$u(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case ef:return"Profiler";case pd:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qg:return(t.displayName||"Context")+".Consumer";case Yg:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qy(t){var e=Kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=Qy(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qg(t,e){e=e.checked,e!=null&&hd(t,"checked",e,!1)}function of(t,e){Qg(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Oo(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Jg(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){Jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,Xs=null,Ys=null;function Yh(t){if(t=xa(t)){if(typeof hf!="function")throw Error(me(280));var e=t.stateNode;e&&(e=xu(e),hf(t.stateNode,t.type,e))}}function rv(t){Xs?Ys?Ys.push(t):Ys=[t]:Xs=t}function sv(){if(Xs){var t=Xs,e=Ys;if(Ys=Xs=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function ov(t,e){return t(e)}function av(){}var Ku=!1;function lv(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return ov(t,e,n)}finally{Ku=!1,(Xs!==null||Ys!==null)&&(av(),sv())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var pf=!1;if(Gi)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){pf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{pf=!1}function tx(t,e,n,i,r,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ho=!1,zl=null,Hl=!1,mf=null,nx={onError:function(t){Ho=!0,zl=t}};function ix(t,e,n,i,r,s,o,a,u){Ho=!1,zl=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,s,o,a,u){if(ix.apply(this,arguments),Ho){if(Ho){var c=zl;Ho=!1,zl=null}else throw Error(me(198));Hl||(Hl=!0,mf=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qh(t){if(ns(t)!==t)throw Error(me(188))}function sx(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return qh(r),t;if(s===i)return qh(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function cv(t){return t=sx(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var dv=Gn.unstable_scheduleCallback,$h=Gn.unstable_cancelCallback,ox=Gn.unstable_shouldYield,ax=Gn.unstable_requestPaint,zt=Gn.unstable_now,lx=Gn.unstable_getCurrentPriorityLevel,_d=Gn.unstable_ImmediatePriority,hv=Gn.unstable_UserBlockingPriority,Gl=Gn.unstable_NormalPriority,ux=Gn.unstable_LowPriority,pv=Gn.unstable_IdlePriority,gu=null,Mi=null;function cx(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:hx,fx=Math.log,dx=Math.LN2;function hx(t){return t>>>=0,t===0?32:31-(fx(t)/dx|0)|0}var Ba=64,za=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ko(a):(s&=o,s!==0&&(i=ko(s)))}else o=n&~r,o!==0?i=ko(o):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,u=r[o];u===-1?(!(a&n)||a&i)&&(r[o]=px(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vv,xd,_v,yv,xv,vf=!1,Ha=[],fr=null,dr=null,hr=null,Jo=new Map,ea=new Map,rr=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kh(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return fr=To(fr,t,e,n,i,r),!0;case"dragenter":return dr=To(dr,t,e,n,i,r),!0;case"mouseover":return hr=To(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,To(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,To(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function Sv(t){var e=Br(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);df=i,n.target.dispatchEvent(i),df=null}else return e=xa(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Zh(t,e,n){Rl(t)&&n.delete(e)}function yx(){vf=!1,fr!==null&&Rl(fr)&&(fr=null),dr!==null&&Rl(dr)&&(dr=null),hr!==null&&Rl(hr)&&(hr=null),Jo.forEach(Zh),ea.forEach(Zh)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,yx)))}function ta(t){function e(r){return Ao(r,t)}if(0<Ha.length){Ao(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&Ao(fr,t),dr!==null&&Ao(dr,t),hr!==null&&Ao(hr,t),Jo.forEach(e),ea.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&rr.shift()}var qs=Yi.ReactCurrentBatchConfig,Wl=!0;function xx(t,e,n,i){var r=St,s=qs.transition;qs.transition=null;try{St=1,Sd(t,e,n,i)}finally{St=r,qs.transition=s}}function Sx(t,e,n,i){var r=St,s=qs.transition;qs.transition=null;try{St=4,Sd(t,e,n,i)}finally{St=r,qs.transition=s}}function Sd(t,e,n,i){if(Wl){var r=_f(t,e,n,i);if(r===null)ac(t,e,i,jl,n),Kh(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(Kh(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&vv(s),s=_f(t,e,n,i),s===null&&ac(t,e,i,jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ac(t,e,i,null,n)}}var jl=null;function _f(t,e,n,i){if(jl=null,t=vd(i),t=Br(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function Ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case _d:return 1;case hv:return 4;case Gl:case ux:return 16;case pv:return 536870912;default:return 16}default:return 16}}var or=null,Ed=null,Cl=null;function Mv(){if(Cl)return Cl;var t,e=Ed,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Qh(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:Qh,this.isPropagationStopped=Qh,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=Wn(ho),ya=kt({},ho,{view:0,detail:0}),Ex=Wn(ya),Qu,Ju,Ro,vu=kt({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Qu=t.screenX-Ro.screenX,Ju=t.screenY-Ro.screenY):Ju=Qu=0,Ro=t),Qu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Jh=Wn(vu),Mx=kt({},vu,{dataTransfer:0}),wx=Wn(Mx),Tx=kt({},ya,{relatedTarget:0}),ec=Wn(Tx),Ax=kt({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Wn(Ax),Cx=kt({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=Wn(Cx),Px=kt({},ho,{data:0}),ep=Wn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function wd(){return Nx}var Ix=kt({},ya,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fx=Wn(Ix),Ox=kt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Wn(Ox),kx=kt({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Bx=Wn(kx),zx=kt({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Wn(zx),Gx=kt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Wn(Gx),Wx=[9,13,27,32],Td=Gi&&"CompositionEvent"in window,Go=null;Gi&&"documentMode"in document&&(Go=document.documentMode);var jx=Gi&&"TextEvent"in window&&!Go,wv=Gi&&(!Td||Go&&8<Go&&11>=Go),np=" ",ip=!1;function Tv(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function Xx(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(ip=!0,np);case"textInput":return t=e.data,t===np&&ip?null:t;default:return null}}function Yx(t,e){if(Us)return t==="compositionend"||!Td&&Tv(t,e)?(t=Mv(),Cl=Ed=or=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wv&&e.locale!=="ko"?null:e.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qx[t.type]:e==="textarea"}function Rv(t,e,n,i){rv(i),e=Xl(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Vo=null,na=null;function $x(t){kv(t,0)}function _u(t){var e=Fs(t);if(Zg(e))return t}function Kx(t,e){if(t==="change")return e}var Cv=!1;if(Gi){var tc;if(Gi){var nc="oninput"in document;if(!nc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),nc=typeof sp.oninput=="function"}tc=nc}else tc=!1;Cv=tc&&(!document.documentMode||9<document.documentMode)}function op(){Vo&&(Vo.detachEvent("onpropertychange",bv),na=Vo=null)}function bv(t){if(t.propertyName==="value"&&_u(na)){var e=[];Rv(e,na,t,vd(t)),lv($x,e)}}function Zx(t,e,n){t==="focusin"?(op(),Vo=e,na=n,Vo.attachEvent("onpropertychange",bv)):t==="focusout"&&op()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(na)}function Jx(t,e){if(t==="click")return _u(e)}function eS(t,e){if(t==="input"||t==="change")return _u(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:tS;function ia(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jc.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,e){var n=ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ap(n)}}function Pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=Lv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pv(n.ownerDocument.documentElement,n)){if(i!==null&&Ad(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lp(n,s);var o=lp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,yf=null,Wo=null,xf=!1;function up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xf||Ns==null||Ns!==Bl(i)||(i=Ns,"selectionStart"in i&&Ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&ia(Wo,i)||(Wo=i,i=Xl(yf,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},ic={},Dv={};Gi&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function yu(t){if(ic[t])return ic[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dv)return ic[t]=e[n];return t}var Uv=yu("animationend"),Nv=yu("animationiteration"),Iv=yu("animationstart"),Fv=yu("transitionend"),Ov=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){Ov.set(t,e),ts(e,[t])}for(var rc=0;rc<cp.length;rc++){var sc=cp[rc],rS=sc.toLowerCase(),sS=sc[0].toUpperCase()+sc.slice(1);Tr(rS,"on"+sS)}Tr(Uv,"onAnimationEnd");Tr(Nv,"onAnimationIteration");Tr(Iv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Fv,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&r.isPropagationStopped())break e;fp(r,a,c),s=u}else for(o=0;o<i.length;o++){if(a=i[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&r.isPropagationStopped())break e;fp(r,a,c),s=u}}}if(Hl)throw t=mf,Hl=!1,mf=null,t}function bt(t,e){var n=e[Tf];n===void 0&&(n=e[Tf]=new Set);var i=t+"__bubble";n.has(i)||(Bv(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),Bv(n,t,i,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Wa]){t[Wa]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,oc("selectionchange",!1,e))}}function Bv(t,e,n,i){switch(Ev(e)){case 1:var r=xx;break;case 4:r=Sx;break;default:r=Sd}n=r.bind(null,e,n,t),r=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(u=o.tag,u===5||u===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lv(function(){var c=s,h=vd(n),p=[];e:{var m=Ov.get(t);if(m!==void 0){var _=Md,S=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":_=Fx;break;case"focusin":S="focus",_=ec;break;case"focusout":S="blur",_=ec;break;case"beforeblur":case"afterblur":_=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Bx;break;case Uv:case Nv:case Iv:_=Rx;break;case Fv:_=Hx;break;case"scroll":_=Ex;break;case"wheel":_=Vx;break;case"copy":case"cut":case"paste":_=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=tp}var E=(e&4)!==0,v=!E&&t==="scroll",f=E?m!==null?m+"Capture":null:m;E=[];for(var y=c,x;y!==null;){x=y;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,f!==null&&(w=Qo(y,f),w!=null&&E.push(sa(y,w,x)))),v)break;y=y.return}0<E.length&&(m=new _(m,S,null,n,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==df&&(S=n.relatedTarget||n.fromElement)&&(Br(S)||S[Vi]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?Br(S):null,S!==null&&(v=ns(S),S!==v||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(E=Jh,w="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(E=tp,w="onPointerLeave",f="onPointerEnter",y="pointer"),v=_==null?m:Fs(_),x=S==null?m:Fs(S),m=new E(w,y+"leave",_,n,h),m.target=v,m.relatedTarget=x,w=null,Br(h)===c&&(E=new E(f,y+"enter",S,n,h),E.target=x,E.relatedTarget=v,w=E),v=w,_&&S)t:{for(E=_,f=S,y=0,x=E;x;x=ps(x))y++;for(x=0,w=f;w;w=ps(w))x++;for(;0<y-x;)E=ps(E),y--;for(;0<x-y;)f=ps(f),x--;for(;y--;){if(E===f||f!==null&&E===f.alternate)break t;E=ps(E),f=ps(f)}E=null}else E=null;_!==null&&dp(p,m,_,E,!1),S!==null&&v!==null&&dp(p,v,S,E,!0)}}e:{if(m=c?Fs(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var I=Kx;else if(rp(m))if(Cv)I=eS;else{I=Qx;var L=Zx}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=Jx);if(I&&(I=I(t,c))){Rv(p,I,n,h);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&af(m,"number",m.value)}switch(L=c?Fs(c):window,t){case"focusin":(rp(L)||L.contentEditable==="true")&&(Ns=L,yf=c,Wo=null);break;case"focusout":Wo=yf=Ns=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,up(p,n,h);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":up(p,n,h)}var b;if(Td)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Us?Tv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(wv&&n.locale!=="ko"&&(Us||k!=="onCompositionStart"?k==="onCompositionEnd"&&Us&&(b=Mv()):(or=h,Ed="value"in or?or.value:or.textContent,Us=!0)),L=Xl(c,k),0<L.length&&(k=new ep(k,t,null,n,h),p.push({event:k,listeners:L}),b?k.data=b:(b=Av(n),b!==null&&(k.data=b)))),(b=jx?Xx(t,n):Yx(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(h=new ep("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}kv(p,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=Qo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===i)break;a.tag===5&&c!==null&&(a=c,r?(u=Qo(n,s),u!=null&&o.unshift(sa(n,u,a))):r||(u=Qo(n,s),u!=null&&o.push(sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function hp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function ja(t,e,n){if(e=hp(e),hp(t)!==e&&n)throw Error(me(425))}function Yl(){}var Sf=null,Ef=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(fS)}:wf;function fS(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Ei="__reactFiber$"+po,oa="__reactProps$"+po,Vi="__reactContainer$"+po,Tf="__reactEvents$"+po,dS="__reactListeners$"+po,hS="__reactHandles$"+po;function Br(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mp(t);t!==null;){if(n=t[Ei])return n;t=mp(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[Ei]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function xu(t){return t[oa]||null}var Af=[],Os=-1;function Ar(t){return{current:t}}function Lt(t){0>Os||(t.current=Af[Os],Af[Os]=null,Os--)}function Rt(t,e){Os++,Af[Os]=t.current,t.current=e}var Mr={},gn=Ar(Mr),Dn=Ar(!1),qr=Mr;function eo(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Un(t){return t=t.childContextTypes,t!=null}function ql(){Lt(Dn),Lt(gn)}function gp(t,e,n){if(gn.current!==Mr)throw Error(me(168));Rt(gn,e),Rt(Dn,n)}function zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,Zy(t)||"Unknown",r));return kt({},n,i)}function $l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,qr=gn.current,Rt(gn,t),Rt(Dn,Dn.current),!0}function vp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=zv(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,Lt(Dn),Lt(gn),Rt(gn,t)):Lt(Dn),Rt(Dn,n)}var Ii=null,Su=!1,uc=!1;function Hv(t){Ii===null?Ii=[t]:Ii.push(t)}function pS(t){Su=!0,Hv(t)}function Rr(){if(!uc&&Ii!==null){uc=!0;var t=0,e=St;try{var n=Ii;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Su=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),dv(_d,Rr),r}finally{St=e,uc=!1}}return null}var ks=[],Bs=0,Kl=null,Zl=0,Yn=[],qn=0,$r=null,Oi=1,ki="";function Ur(t,e){ks[Bs++]=Zl,ks[Bs++]=Kl,Kl=t,Zl=e}function Gv(t,e,n){Yn[qn++]=Oi,Yn[qn++]=ki,Yn[qn++]=$r,$r=t;var i=Oi;t=ki;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-mi(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function Rd(t){t.return!==null&&(Ur(t,1),Gv(t,1,0))}function Cd(t){for(;t===Kl;)Kl=ks[--Bs],ks[Bs]=null,Zl=ks[--Bs],ks[Bs]=null;for(;t===$r;)$r=Yn[--qn],Yn[qn]=null,ki=Yn[--qn],Yn[qn]=null,Oi=Yn[--qn],Yn[qn]=null}var zn=null,Bn=null,Nt=!1,fi=null;function Vv(t,e){var n=Qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,Bn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,Bn=null,!0):!1;default:return!1}}function Rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(Nt){var e=Bn;if(e){var n=e;if(!_p(t,e)){if(Rf(t))throw Error(me(418));e=pr(n.nextSibling);var i=zn;e&&_p(t,e)?Vv(i,n):(t.flags=t.flags&-4097|2,Nt=!1,zn=t)}}else{if(Rf(t))throw Error(me(418));t.flags=t.flags&-4097|2,Nt=!1,zn=t}}}function yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Xa(t){if(t!==zn)return!1;if(!Nt)return yp(t),Nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=Bn)){if(Rf(t))throw Wv(),Error(me(418));for(;e;)Vv(t,e),e=pr(e.nextSibling)}if(yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=zn?pr(t.stateNode.nextSibling):null;return!0}function Wv(){for(var t=Bn;t;)t=pr(t.nextSibling)}function to(){Bn=zn=null,Nt=!1}function bd(t){fi===null?fi=[t]:fi.push(t)}var mS=Yi.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function jv(t){function e(f,y){if(t){var x=f.deletions;x===null?(f.deletions=[y],f.flags|=16):x.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function i(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function r(f,y){return f=_r(f,y),f.index=0,f.sibling=null,f}function s(f,y,x){return f.index=x,t?(x=f.alternate,x!==null?(x=x.index,x<y?(f.flags|=2,y):x):(f.flags|=2,y)):(f.flags|=1048576,y)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,y,x,w){return y===null||y.tag!==6?(y=gc(x,f.mode,w),y.return=f,y):(y=r(y,x),y.return=f,y)}function u(f,y,x,w){var I=x.type;return I===Ds?h(f,y,x.props.children,w,x.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nr&&xp(I)===y.type)?(w=r(y,x.props),w.ref=Co(f,y,x),w.return=f,w):(w=Fl(x.type,x.key,x.props,null,f.mode,w),w.ref=Co(f,y,x),w.return=f,w)}function c(f,y,x,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=vc(x,f.mode,w),y.return=f,y):(y=r(y,x.children||[]),y.return=f,y)}function h(f,y,x,w,I){return y===null||y.tag!==7?(y=Vr(x,f.mode,w,I),y.return=f,y):(y=r(y,x),y.return=f,y)}function p(f,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=gc(""+y,f.mode,x),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fa:return x=Fl(y.type,y.key,y.props,null,f.mode,x),x.ref=Co(f,null,y),x.return=f,x;case Ls:return y=vc(y,f.mode,x),y.return=f,y;case nr:var w=y._init;return p(f,w(y._payload),x)}if(Oo(y)||Mo(y))return y=Vr(y,f.mode,x,null),y.return=f,y;Ya(f,y)}return null}function m(f,y,x,w){var I=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return I!==null?null:a(f,y,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:return x.key===I?u(f,y,x,w):null;case Ls:return x.key===I?c(f,y,x,w):null;case nr:return I=x._init,m(f,y,I(x._payload),w)}if(Oo(x)||Mo(x))return I!==null?null:h(f,y,x,w,null);Ya(f,x)}return null}function _(f,y,x,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(x)||null,a(y,f,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fa:return f=f.get(w.key===null?x:w.key)||null,u(y,f,w,I);case Ls:return f=f.get(w.key===null?x:w.key)||null,c(y,f,w,I);case nr:var L=w._init;return _(f,y,x,L(w._payload),I)}if(Oo(w)||Mo(w))return f=f.get(x)||null,h(y,f,w,I,null);Ya(y,w)}return null}function S(f,y,x,w){for(var I=null,L=null,b=y,k=y=0,A=null;b!==null&&k<x.length;k++){b.index>k?(A=b,b=null):A=b.sibling;var R=m(f,b,x[k],w);if(R===null){b===null&&(b=A);break}t&&b&&R.alternate===null&&e(f,b),y=s(R,y,k),L===null?I=R:L.sibling=R,L=R,b=A}if(k===x.length)return n(f,b),Nt&&Ur(f,k),I;if(b===null){for(;k<x.length;k++)b=p(f,x[k],w),b!==null&&(y=s(b,y,k),L===null?I=b:L.sibling=b,L=b);return Nt&&Ur(f,k),I}for(b=i(f,b);k<x.length;k++)A=_(b,f,k,x[k],w),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?k:A.key),y=s(A,y,k),L===null?I=A:L.sibling=A,L=A);return t&&b.forEach(function(G){return e(f,G)}),Nt&&Ur(f,k),I}function E(f,y,x,w){var I=Mo(x);if(typeof I!="function")throw Error(me(150));if(x=I.call(x),x==null)throw Error(me(151));for(var L=I=null,b=y,k=y=0,A=null,R=x.next();b!==null&&!R.done;k++,R=x.next()){b.index>k?(A=b,b=null):A=b.sibling;var G=m(f,b,R.value,w);if(G===null){b===null&&(b=A);break}t&&b&&G.alternate===null&&e(f,b),y=s(G,y,k),L===null?I=G:L.sibling=G,L=G,b=A}if(R.done)return n(f,b),Nt&&Ur(f,k),I;if(b===null){for(;!R.done;k++,R=x.next())R=p(f,R.value,w),R!==null&&(y=s(R,y,k),L===null?I=R:L.sibling=R,L=R);return Nt&&Ur(f,k),I}for(b=i(f,b);!R.done;k++,R=x.next())R=_(b,f,k,R.value,w),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?k:R.key),y=s(R,y,k),L===null?I=R:L.sibling=R,L=R);return t&&b.forEach(function(ie){return e(f,ie)}),Nt&&Ur(f,k),I}function v(f,y,x,w){if(typeof x=="object"&&x!==null&&x.type===Ds&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:e:{for(var I=x.key,L=y;L!==null;){if(L.key===I){if(I=x.type,I===Ds){if(L.tag===7){n(f,L.sibling),y=r(L,x.props.children),y.return=f,f=y;break e}}else if(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nr&&xp(I)===L.type){n(f,L.sibling),y=r(L,x.props),y.ref=Co(f,L,x),y.return=f,f=y;break e}n(f,L);break}else e(f,L);L=L.sibling}x.type===Ds?(y=Vr(x.props.children,f.mode,w,x.key),y.return=f,f=y):(w=Fl(x.type,x.key,x.props,null,f.mode,w),w.ref=Co(f,y,x),w.return=f,f=w)}return o(f);case Ls:e:{for(L=x.key;y!==null;){if(y.key===L)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(f,y.sibling),y=r(y,x.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=vc(x,f.mode,w),y.return=f,f=y}return o(f);case nr:return L=x._init,v(f,y,L(x._payload),w)}if(Oo(x))return S(f,y,x,w);if(Mo(x))return E(f,y,x,w);Ya(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(f,y.sibling),y=r(y,x),y.return=f,f=y):(n(f,y),y=gc(x,f.mode,w),y.return=f,f=y),o(f)):n(f,y)}return v}var no=jv(!0),Xv=jv(!1),Ql=Ar(null),Jl=null,zs=null,Pd=null;function Ld(){Pd=zs=Jl=null}function Dd(t){var e=Ql.current;Lt(Ql),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){Jl=t,Pd=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ln=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(Pd!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Jl===null)throw Error(me(308));zs=t,Jl.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var zr=null;function Ud(t){zr===null?zr=[t]:zr.push(t)}function Yv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}function Sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=r.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,_=a.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,E=a;switch(m=e,_=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(_,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(_,p,m):S,m==null)break e;p=kt({},p,m);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=r.effects,m===null?r.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=p):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;m=a,a=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(u=p),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=p}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var Sa={},wi=Ar(Sa),aa=Ar(Sa),la=Ar(Sa);function Hr(t){if(t===Sa)throw Error(me(174));return t}function Id(t,e){switch(Rt(la,e),Rt(aa,t),Rt(wi,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Lt(wi),Rt(wi,e)}function io(){Lt(wi),Lt(aa),Lt(la)}function $v(t){Hr(la.current);var e=Hr(wi.current),n=uf(e,t.type);e!==n&&(Rt(aa,t),Rt(wi,n))}function Fd(t){aa.current===t&&(Lt(wi),Lt(aa))}var Ft=Ar(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Od(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Ll=Yi.ReactCurrentDispatcher,fc=Yi.ReactCurrentBatchConfig,Kr=0,Ot=null,Xt=null,Jt=null,nu=!1,jo=!1,ua=0,gS=0;function cn(){throw Error(me(321))}function kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,s){if(Kr=s,Ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?xS:SS,t=n(i,r),jo){s=0;do{if(jo=!1,ua=0,25<=s)throw Error(me(301));s+=1,Jt=Xt=null,e.updateQueue=null,Ll.current=ES,t=n(i,r)}while(jo)}if(Ll.current=iu,e=Xt!==null&&Xt.next!==null,Kr=0,Jt=Xt=Ot=null,nu=!1,e)throw Error(me(300));return t}function zd(){var t=ua!==0;return ua=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function ni(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Jt===null?Ot.memoizedState:Jt.next;if(e!==null)Jt=e,Xt=t;else{if(t===null)throw Error(me(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Jt===null?Ot.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function ca(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=ni(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Kr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=i):u=u.next=p,Ot.lanes|=h,Zr|=h}c=c.next}while(c!==null&&c!==s);u===null?o=i:u.next=a,vi(i,e.memoizedState)||(Ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ot.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=ni(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kv(){}function Zv(t,e){var n=Ot,i=ni(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Ln=!0),i=i.queue,Hd(e_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,fa(9,Jv.bind(null,n,i,r,e),void 0,null),en===null)throw Error(me(349));Kr&30||Qv(n,e,r)}return r}function Qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jv(t,e,n,i){e.value=n,e.getSnapshot=i,t_(e)&&n_(t)}function e_(t,e,n){return n(function(){t_(e)&&n_(t)})}function t_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function n_(t){var e=Wi(t,1);e!==null&&gi(e,t,1,-1)}function Mp(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,Ot,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function i_(){return ni().memoizedState}function Dl(t,e,n,i){var r=xi();Ot.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var o=Xt.memoizedState;if(s=o.destroy,i!==null&&kd(i,o.deps)){r.memoizedState=fa(e,n,s,i);return}}Ot.flags|=t,r.memoizedState=fa(1|e,n,s,i)}function wp(t,e){return Dl(8390656,8,t,e)}function Hd(t,e){return Eu(2048,8,t,e)}function r_(t,e){return Eu(4,2,t,e)}function s_(t,e){return Eu(4,4,t,e)}function o_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a_(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,o_.bind(null,e,t),n)}function Gd(){}function l_(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c_(t,e,n){return Kr&21?(vi(n,e)||(n=mv(),Ot.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=n)}function vS(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{St=n,fc.transition=i}}function f_(){return ni().memoizedState}function _S(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d_(t))h_(e,n);else if(n=Yv(t,e,n,i),n!==null){var r=En();gi(n,t,i,r),p_(n,e,i)}}function yS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d_(t))h_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var u=e.interleaved;u===null?(r.next=r,Ud(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=Yv(t,e,r,i),n!==null&&(r=En(),gi(n,t,i,r),p_(n,e,i))}}function d_(t){var e=t.alternate;return t===Ot||e!==null&&e===Ot}function h_(t,e){jo=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}var iu={readContext:ti,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},xS={readContext:ti,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,o_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_S.bind(null,Ot,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:Gd,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=vS.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ot,r=xi();if(Nt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),en===null)throw Error(me(349));Kr&30||Qv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wp(e_.bind(null,i,s,t),[t]),i.flags|=2048,fa(9,Jv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=en.identifierPrefix;if(Nt){var n=ki,i=Oi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:ti,useCallback:l_,useContext:ti,useEffect:Hd,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:u_,useReducer:dc,useRef:i_,useState:function(){return dc(ca)},useDebugValue:Gd,useDeferredValue:function(t){var e=ni();return c_(e,Xt.memoizedState,t)},useTransition:function(){var t=dc(ca)[0],e=ni().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:f_,unstable_isNewReconciler:!1},ES={readContext:ti,useCallback:l_,useContext:ti,useEffect:Hd,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:u_,useReducer:hc,useRef:i_,useState:function(){return hc(ca)},useDebugValue:Gd,useDeferredValue:function(t){var e=ni();return Xt===null?e.memoizedState=t:c_(e,Xt.memoizedState,t)},useTransition:function(){var t=hc(ca)[0],e=ni().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Zv,useId:f_,unstable_isNewReconciler:!1};function ui(t,e){if(t&&t.defaultProps){e=kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=En(),r=vr(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(gi(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=En(),r=vr(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(gi(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=En(),i=vr(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(gi(e,t,i,n),Pl(e,t,i))}};function Tp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function m_(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=Un(e)?qr:gn.current,i=e.contextTypes,s=(i=i!=null)?eo(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=Un(e)?qr:gn.current,r.context=eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mu.enqueueReplaceState(r,r.state,null),eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function g_(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){su||(su=!0,Gf=i),Df(t,e)},n}function v_(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function Cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var wS=Yi.ReactCurrentOwner,Ln=!1;function xn(t,e,n,i){e.child=t===null?Xv(e,null,n,i):no(e,t.child,n,i)}function Pp(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=Bd(t,e,n,i,s,r),n=zd(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Nt&&n&&Rd(e),e.flags|=1,xn(t,e,i,r),e.child)}function Lp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,__(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function __(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(Ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Ln=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Uf(t,e,n,i,r)}function y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Gs,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Rt(Gs,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Rt(Gs,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Rt(Gs,kn),kn|=i;return xn(t,e,r,n),e.child}function x_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=Un(n)?qr:gn.current;return s=eo(e,s),$s(e,r),n=Bd(t,e,n,i,s,r),i=zd(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Nt&&i&&Rd(e),e.flags|=1,xn(t,e,n,r),e.child)}function Dp(t,e,n,i,r){if(Un(n)){var s=!0;$l(e)}else s=!1;if($s(e,r),e.stateNode===null)Ul(t,e),m_(e,n,i),Lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ti(c):(c=Un(n)?qr:gn.current,c=eo(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||u!==c)&&Ap(e,o,i,c),ir=!1;var m=e.memoizedState;o.state=m,eu(e,i,o,r),u=e.memoizedState,a!==i||m!==u||Dn.current||ir?(typeof h=="function"&&(Pf(e,n,h,i),u=e.memoizedState),(a=ir||Tp(e,n,a,i,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),o.props=i,o.state=u,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ui(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ti(u):(u=Un(n)?qr:gn.current,u=eo(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Ap(e,o,i,u),ir=!1,m=e.memoizedState,o.state=m,eu(e,i,o,r);var S=e.memoizedState;a!==p||m!==S||Dn.current||ir?(typeof _=="function"&&(Pf(e,n,_,i),S=e.memoizedState),(c=ir||Tp(e,n,c,i,m,S,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=u,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){x_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&vp(e,n,!1),ji(t,e,s);i=e.stateNode,wS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):xn(t,e,a,s),e.memoizedState=i.state,r&&vp(e,n,!0),e.child}function S_(t){var e=t.stateNode;e.pendingContext?gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gp(t,e.context,!1),Id(t,e.containerInfo)}function Up(t,e,n,i,r){return to(),bd(r),e.flags|=256,xn(t,e,n,i),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Rt(Ft,r&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Au(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=If,t):Vd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var u={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=_r(r,u),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=If,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vd(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,i){return i!==null&&bd(i),no(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error(me(422))),qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Au({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=If,s);if(!(e.mode&1))return qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=pc(s,i,void 0),qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Ln||a){if(i=en,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),gi(i,t,r,-1))}return $d(),i=pc(Error(me(421))),qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=pr(r.nextSibling),zn=e,Nt=!0,fi=null,t!==null&&(Yn[qn++]=Oi,Yn[qn++]=ki,Yn[qn++]=$r,Oi=t.id,ki=t.overflow,$r=e),e=Vd(e,i.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bf(t.return,e,n)}function mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Rt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:S_(e),to();break;case 5:$v(e);break;case 1:Un(e.type)&&$l(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(Rt(Ft,Ft.current&1),t=ji(t,e,n),t!==null?t.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,y_(t,e,n)}return ji(t,e,n)}var w_,Of,T_,A_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};T_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(wi.current);var s=null;switch(n){case"input":r=sf(t,r),i=sf(t,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=lf(t,r),i=lf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}cf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var u=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&bt("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A_=function(t,e,n,i){n!==i&&(e.flags|=4)};function bo(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RS(t,e,n){var i=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Un(e.type)&&ql(),fn(e),null;case 3:return i=e.stateNode,io(),Lt(Dn),Lt(gn),Od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(jf(fi),fi=null))),Of(t,e),fn(e),null;case 5:Fd(e);var r=Hr(la.current);if(n=e.type,t!==null&&e.stateNode!=null)T_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return fn(e),null}if(t=Hr(wi.current),Xa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)bt(Bo[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":Vh(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":jh(i,s),bt("invalid",i)}cf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ja(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ja(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(n){case"input":Oa(i),Wh(i,s,!0);break;case"textarea":Oa(i),Xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[oa]=i,w_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,i),n){case"dialog":bt("cancel",t),bt("close",t),r=i;break;case"iframe":case"object":case"embed":bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)bt(Bo[r],t);r=i;break;case"source":bt("error",t),r=i;break;case"img":case"image":case"link":bt("error",t),bt("load",t),r=i;break;case"details":bt("toggle",t),r=i;break;case"input":Vh(t,i),r=sf(t,i),bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),bt("invalid",t);break;case"textarea":jh(t,i),r=lf(t,i),bt("invalid",t);break;default:r=i}cf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?iv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?u!=null&&s==="onScroll"&&bt("scroll",t):u!=null&&hd(t,s,u,o))}switch(n){case"input":Oa(t),Wh(t,i,!1);break;case"textarea":Oa(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Hr(la.current),Hr(wi.current),Xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return fn(e),null;case 13:if(Lt(Ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Bn!==null&&e.mode&1&&!(e.flags&128))Wv(),to(),e.flags|=98560,s=!1;else if(s=Xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[Ei]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else fi!==null&&(jf(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Yt===0&&(Yt=3):$d())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return io(),Of(t,e),t===null&&ra(e.stateNode.containerInfo),fn(e),null;case 10:return Dd(e.type._context),fn(e),null;case 17:return Un(e.type)&&ql(),fn(e),null;case 19:if(Lt(Ft),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Rt(Ft,Ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>so&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=tu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Nt)return fn(e),null}else 2*zt()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=Ft.current,Rt(Ft,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function CS(t,e){switch(Cd(e),e.tag){case 1:return Un(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Lt(Dn),Lt(gn),Od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(Lt(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lt(Ft),null;case 4:return io(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var $a=!1,pn=!1,bS=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function kf(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var Ip=!1;function PS(t,e){if(Sf=Wl,t=Lv(),Ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(u=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===r&&(a=o),m===s&&++h===i&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:t,selectionRange:n},Wl=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,v=S.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:ui(e.type,E),v);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(w){Bt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return S=Ip,Ip=!1,S}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kf(e,n,s)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R_(t){var e=t.alternate;e!==null&&(t.alternate=null,R_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[oa],delete e[Tf],delete e[dS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C_(t){return t.tag===5||t.tag===3||t.tag===4}function Fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var rn=null,ci=!1;function Ki(t,e,n){for(n=n.child;n!==null;)b_(t,e,n),n=n.sibling}function b_(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:pn||Hs(n,e);case 6:var i=rn,r=ci;rn=null,Ki(t,e,n),rn=i,ci=r,rn!==null&&(ci?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(ci?(t=rn,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),ta(t)):lc(rn,n.stateNode));break;case 4:i=rn,r=ci,rn=n.stateNode.containerInfo,ci=!0,Ki(t,e,n),rn=i,ci=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kf(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!pn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,Ki(t,e,n),pn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function Op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=BS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,ci=!1;break e;case 3:rn=a.stateNode.containerInfo,ci=!0;break e;case 4:rn=a.stateNode.containerInfo,ci=!0;break e}a=a.return}if(rn===null)throw Error(me(160));b_(s,o,r),rn=null,ci=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P_(e,t),e=e.sibling}function P_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),yi(t),i&4){try{Xo(3,t,t.return),wu(3,t)}catch(E){Bt(t,t.return,E)}try{Xo(5,t,t.return)}catch(E){Bt(t,t.return,E)}}break;case 1:si(e,t),yi(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(si(e,t),yi(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{Zo(r,"")}catch(E){Bt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qg(r,s),ff(a,o);var c=ff(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?iv(r,p):h==="dangerouslySetInnerHTML"?tv(r,p):h==="children"?Zo(r,p):hd(r,h,p,c)}switch(a){case"input":of(r,s);break;case"textarea":Jg(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?js(r,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(E){Bt(t,t.return,E)}}break;case 6:if(si(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Bt(t,t.return,E)}}break;case 3:if(si(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(E){Bt(t,t.return,E)}break;case 4:si(e,t),yi(t);break;case 13:si(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=zt())),i&4&&Op(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||h,si(e,t),pn=c):si(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ue=t,h=t.child;h!==null;){for(p=Ue=h;Ue!==null;){switch(m=Ue,_=m.child,m.tag){case 0:case 11:case 14:case 15:Xo(4,m,m.return);break;case 1:Hs(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){i=m,n=m.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(E){Bt(i,n,E)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){Bp(p);continue}}_!==null?(_.return=m,Ue=_):Bp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=nv("display",o))}catch(E){Bt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){Bt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:si(e,t),yi(t),i&4&&Op(t);break;case 21:break;default:si(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C_(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=Fp(t);Hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Fp(t);zf(t,a,o);break;default:throw Error(me(161))}}catch(u){Bt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){Ue=t,L_(t)}function L_(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$a;if(!o){var a=r.alternate,u=a!==null&&a.memoizedState!==null||pn;a=$a;var c=pn;if($a=o,(pn=u)&&!c)for(Ue=r;Ue!==null;)o=Ue,u=o.child,o.tag===22&&o.memoizedState!==null?zp(r):u!==null?(u.return=o,Ue=u):zp(r);for(;s!==null;)Ue=s,L_(s),s=s.sibling;Ue=r,$a=a,pn=c}kp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):kp(t)}}function kp(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ui(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}pn||e.flags&512&&Bf(e)}catch(m){Bt(e,e.return,m)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Bp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function zp(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(u){Bt(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){Bt(e,r,u)}}var s=e.return;try{Bf(e)}catch(u){Bt(e,s,u)}break;case 5:var o=e.return;try{Bf(e)}catch(u){Bt(e,o,u)}}}catch(u){Bt(e,e.return,u)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var DS=Math.ceil,ru=Yi.ReactCurrentDispatcher,Wd=Yi.ReactCurrentOwner,Jn=Yi.ReactCurrentBatchConfig,mt=0,en=null,Vt=null,an=0,kn=0,Gs=Ar(0),Yt=0,da=null,Zr=0,Tu=0,jd=0,Yo=null,bn=null,Xd=0,so=1/0,Ni=null,su=!1,Gf=null,gr=null,Ka=!1,ar=null,ou=0,qo=0,Vf=null,Nl=-1,Il=0;function En(){return mt&6?zt():Nl!==-1?Nl:Nl=zt()}function vr(t){return t.mode&1?mt&2&&an!==0?an&-an:mS.transition!==null?(Il===0&&(Il=mv()),Il):(t=St,t!==0||(t=window.event,t=t===void 0?16:Ev(t.type)),t):1}function gi(t,e,n,i){if(50<qo)throw qo=0,Vf=null,Error(me(185));_a(t,n,i),(!(mt&2)||t!==en)&&(t===en&&(!(mt&2)&&(Tu|=n),Yt===4&&sr(t,an)),Nn(t,i),n===1&&mt===0&&!(e.mode&1)&&(so=zt()+500,Su&&Rr()))}function Nn(t,e){var n=t.callbackNode;mx(t,e);var i=Vl(t,t===en?an:0);if(i===0)n!==null&&$h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$h(n),e===1)t.tag===0?pS(Hp.bind(null,t)):Hv(Hp.bind(null,t)),cS(function(){!(mt&6)&&Rr()}),n=null;else{switch(gv(i)){case 1:n=_d;break;case 4:n=hv;break;case 16:n=Gl;break;case 536870912:n=pv;break;default:n=Gl}n=B_(n,D_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D_(t,e){if(Nl=-1,Il=0,mt&6)throw Error(me(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var i=Vl(t,t===en?an:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=au(t,i);else{e=i;var r=mt;mt|=2;var s=N_();(en!==t||an!==e)&&(Ni=null,so=zt()+500,Gr(t,e));do try{IS();break}catch(a){U_(t,a)}while(!0);Ld(),ru.current=s,mt=r,Vt!==null?e=0:(en=null,an=0,e=Yt)}if(e!==0){if(e===2&&(r=gf(t),r!==0&&(i=r,e=Wf(t,r))),e===1)throw n=da,Gr(t,0),sr(t,i),Nn(t,zt()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!US(r)&&(e=au(t,i),e===2&&(s=gf(t),s!==0&&(i=s,e=Wf(t,s))),e===1))throw n=da,Gr(t,0),sr(t,i),Nn(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Nr(t,bn,Ni);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=Xd+500-zt(),10<e)){if(Vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){En(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wf(Nr.bind(null,t,bn,Ni),e);break}Nr(t,bn,Ni);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DS(i/1960))-i,10<i){t.timeoutHandle=wf(Nr.bind(null,t,bn,Ni),i);break}Nr(t,bn,Ni);break;case 5:Nr(t,bn,Ni);break;default:throw Error(me(329))}}}return Nn(t,zt()),t.callbackNode===n?D_.bind(null,t):null}function Wf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=au(t,e),t!==2&&(e=bn,bn=n,e!==null&&jf(e)),t}function jf(t){bn===null?bn=t:bn.push.apply(bn,t)}function US(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~jd,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function Hp(t){if(mt&6)throw Error(me(327));Ks();var e=Vl(t,0);if(!(e&1))return Nn(t,zt()),null;var n=au(t,e);if(t.tag!==0&&n===2){var i=gf(t);i!==0&&(e=i,n=Wf(t,i))}if(n===1)throw n=da,Gr(t,0),sr(t,e),Nn(t,zt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,bn,Ni),Nn(t,zt()),null}function Yd(t,e){var n=mt;mt|=1;try{return t(e)}finally{mt=n,mt===0&&(so=zt()+500,Su&&Rr())}}function Qr(t){ar!==null&&ar.tag===0&&!(mt&6)&&Ks();var e=mt;mt|=1;var n=Jn.transition,i=St;try{if(Jn.transition=null,St=1,t)return t()}finally{St=i,Jn.transition=n,mt=e,!(mt&6)&&Rr()}}function qd(){kn=Gs.current,Lt(Gs)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(Cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:io(),Lt(Dn),Lt(gn),Od();break;case 5:Fd(i);break;case 4:io();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Dd(i.type._context);break;case 22:case 23:qd()}n=n.return}if(en=t,Vt=t=_r(t.current,null),an=kn=e,Yt=0,da=null,jd=Tu=Zr=0,bn=Yo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function U_(t,e){do{var n=Vt;try{if(Ld(),Ll.current=iu,nu){for(var i=Ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nu=!1}if(Kr=0,Jt=Xt=Ot=null,jo=!1,ua=0,Wd.current=null,n===null||n.return===null){Yt=1,da=e,Vt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=an,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Cp(o);if(_!==null){_.flags&=-257,bp(_,o,a,s,e),_.mode&1&&Rp(s,c,e),e=_,u=c;var S=e.updateQueue;if(S===null){var E=new Set;E.add(u),e.updateQueue=E}else S.add(u);break e}else{if(!(e&1)){Rp(s,c,e),$d();break e}u=Error(me(426))}}else if(Nt&&a.mode&1){var v=Cp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),bp(v,o,a,s,e),bd(ro(u,a));break e}}s=u=ro(u,a),Yt!==4&&(Yt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=g_(s,u,e);Sp(s,f);break e;case 1:a=u;var y=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(gr===null||!gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=v_(s,a,e);Sp(s,w);break e}}s=s.return}while(s!==null)}F_(n)}catch(I){e=I,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function N_(){var t=ru.current;return ru.current=iu,t===null?iu:t}function $d(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||!(Zr&268435455)&&!(Tu&268435455)||sr(en,an)}function au(t,e){var n=mt;mt|=2;var i=N_();(en!==t||an!==e)&&(Ni=null,Gr(t,e));do try{NS();break}catch(r){U_(t,r)}while(!0);if(Ld(),mt=n,ru.current=i,Vt!==null)throw Error(me(261));return en=null,an=0,Yt}function NS(){for(;Vt!==null;)I_(Vt)}function IS(){for(;Vt!==null&&!ox();)I_(Vt)}function I_(t){var e=k_(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?F_(t):Vt=e,Wd.current=null}function F_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Vt=null;return}}else if(n=RS(n,e,kn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Yt===0&&(Yt=5)}function Nr(t,e,n){var i=St,r=Jn.transition;try{Jn.transition=null,St=1,FS(t,e,n,i)}finally{Jn.transition=r,St=i}return null}function FS(t,e,n,i){do Ks();while(ar!==null);if(mt&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(t,s),t===en&&(Vt=en=null,an=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,B_(Gl,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=St;St=1;var a=mt;mt|=4,Wd.current=null,PS(t,n),P_(n,t),nS(Ef),Wl=!!Sf,Ef=Sf=null,t.current=n,LS(n),ax(),mt=a,St=o,Jn.transition=s}else t.current=n;if(Ka&&(Ka=!1,ar=t,ou=r),s=t.pendingLanes,s===0&&(gr=null),cx(n.stateNode),Nn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(su)throw su=!1,t=Gf,Gf=null,t;return ou&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Vf?qo++:(qo=0,Vf=t):qo=0,Rr(),null}function Ks(){if(ar!==null){var t=gv(ou),e=Jn.transition,n=St;try{if(Jn.transition=null,St=16>t?16:t,ar===null)var i=!1;else{if(t=ar,ar=null,ou=0,mt&6)throw Error(me(331));var r=mt;for(mt|=4,Ue=t.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Ue=c;Ue!==null;){var h=Ue;switch(h.tag){case 0:case 11:case 15:Xo(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ue=p;else for(;Ue!==null;){h=Ue;var m=h.sibling,_=h.return;if(R_(h),h===c){Ue=null;break}if(m!==null){m.return=_,Ue=m;break}Ue=_}}}var S=s.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var v=E.sibling;E.sibling=null,E=v}while(E!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ue=f;break e}Ue=s.return}}var y=t.current;for(Ue=y;Ue!==null;){o=Ue;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ue=x;else e:for(o=y;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(I){Bt(a,a.return,I)}if(a===o){Ue=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Ue=w;break e}Ue=a.return}}if(mt=r,Rr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{St=n,Jn.transition=e}}return!1}function Gp(t,e,n){e=ro(n,e),e=g_(t,e,1),t=mr(t,e,1),e=En(),t!==null&&(_a(t,1,e),Nn(t,e))}function Bt(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=ro(n,t),t=v_(e,t,1),e=mr(e,t,1),t=En(),e!==null&&(_a(e,1,t),Nn(e,t));break}}e=e.return}}function OS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=En(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(an&n)===n&&(Yt===4||Yt===3&&(an&130023424)===an&&500>zt()-Xd?Gr(t,0):jd|=n),Nn(t,e)}function O_(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=En();t=Wi(t,e),t!==null&&(_a(t,e,n),Nn(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function BS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),O_(t,n)}var k_;k_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dn.current)Ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ln=!1,AS(t,e,n);Ln=!!(t.flags&131072)}else Ln=!1,Nt&&e.flags&1048576&&Gv(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=eo(e,gn.current);$s(e,n),r=Bd(null,e,i,t,r,n);var s=zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Un(i)?(s=!0,$l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=Mu,e.stateNode=r,r._reactInternals=e,Lf(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,Nt&&s&&Rd(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=ui(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=Dp(null,e,i,t,n);break e;case 11:e=Pp(null,e,i,t,n);break e;case 14:e=Lp(null,e,i,ui(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Dp(t,e,i,r,n);case 3:e:{if(S_(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qv(t,e),eu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(me(423)),e),e=Up(t,e,i,n,r);break e}else if(i!==r){r=ro(Error(me(424)),e),e=Up(t,e,i,n,r);break e}else for(Bn=pr(e.stateNode.containerInfo.firstChild),zn=e,Nt=!0,fi=null,n=Xv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),i===r){e=ji(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return $v(e),t===null&&Cf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mf(i,r)?o=null:s!==null&&Mf(i,s)&&(e.flags|=32),x_(t,e),xn(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return E_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=no(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Pp(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(Ql,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!Dn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===i){if(s.tag===1){u=Hi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=ti(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),Lp(t,e,i,r,n);case 15:return __(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Ul(t,e),e.tag=1,Un(i)?(t=!0,$l(e)):t=!1,$s(e,n),m_(e,i,r),Lf(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return M_(t,e,n);case 22:return y_(t,e,n)}throw Error(me(156,e.tag))};function B_(t,e){return dv(t,e)}function zS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,e,n,i){return new zS(t,e,n,i)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===gd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Vr(n.children,r,s,e);case pd:o=8,r|=8;break;case ef:return t=Qn(12,n,e,r|2),t.elementType=ef,t.lanes=s,t;case tf:return t=Qn(13,n,e,r),t.elementType=tf,t.lanes=s,t;case nf:return t=Qn(19,n,e,r),t.elementType=nf,t.lanes=s,t;case $g:return Au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yg:o=10;break e;case qg:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case nr:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Qn(7,t,i,e),t.lanes=n,t}function Au(t,e,n,i){return t=Qn(22,t,i,e),t.elementType=$g,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Qn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,i,r,s,o,a,u){return t=new GS(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function VS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z_(t){if(!t)return Mr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(Un(n))return zv(t,n,e)}return e}function H_(t,e,n,i,r,s,o,a,u){return t=Zd(n,i,!0,t,r,s,o,a,u),t.context=z_(null),n=t.current,i=En(),r=vr(n),s=Hi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,_a(t,r,i),Nn(t,i),t}function Ru(t,e,n,i){var r=e.current,s=En(),o=vr(r);return n=z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(gi(t,r,o,s),Pl(t,r,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function WS(){return null}var G_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jd(t){this._internalRoot=t}Cu.prototype.render=Jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));Ru(t,e,null,null)};Cu.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Ru(null,t,null,null)}),e[Vi]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=yv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&Sv(t)}};function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function jS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lu(o);s.call(c)}}var o=H_(e,i,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=o,t[Vi]=o.current,ra(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lu(u);a.call(c)}}var u=Zd(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=u,t[Vi]=u.current,ra(t.nodeType===8?t.parentNode:t),Qr(function(){Ru(e,u,n,i)}),u}function Pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var u=lu(o);a.call(u)}}Ru(e,o,t,r)}else o=jS(n,e,t,r,i);return lu(o)}vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(yd(e,n|1),Nn(e,zt()),!(mt&6)&&(so=zt()+500,Rr()))}break;case 13:Qr(function(){var i=Wi(t,1);if(i!==null){var r=En();gi(i,t,1,r)}}),Qd(t,1)}};xd=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=En();gi(e,t,134217728,n)}Qd(t,134217728)}};_v=function(t){if(t.tag===13){var e=vr(t),n=Wi(t,e);if(n!==null){var i=En();gi(n,t,e,i)}Qd(t,e)}};yv=function(){return St};xv=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};hf=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(me(90));Zg(i),of(i,r)}}}break;case"textarea":Jg(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};ov=Yd;av=Qr;var XS={usingClientEntryPoint:!1,Events:[xa,Fs,xu,rv,sv,Yd]},Po={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{gu=Za.inject(YS),Mi=Za}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(e))throw Error(me(200));return VS(t,e,null,n)};Vn.createRoot=function(t,e){if(!eh(t))throw Error(me(299));var n=!1,i="",r=G_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,ra(t.nodeType===8?t.parentNode:t),new Jd(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return Qr(t)};Vn.hydrate=function(t,e,n){if(!bu(e))throw Error(me(200));return Pu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!eh(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=G_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H_(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cu(e)};Vn.render=function(t,e,n){if(!bu(e))throw Error(me(200));return Pu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!bu(t))throw Error(me(40));return t._reactRootContainer?(Qr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};Vn.unstable_batchedUpdates=Yd;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bu(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Pu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),Vg.exports=Vn;var qS=Vg.exports,jp=qS;Qc.createRoot=jp.createRoot,Qc.hydrateRoot=jp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ha.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const Xp="popstate";function $S(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Xf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:W_(r)}return ZS(e,n,null,t)}function Wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function th(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function Yp(t,e){return{usr:t.state,key:t.key,idx:e}}function Xf(t,e,n,i){return n===void 0&&(n=null),ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||i||KS()})}function W_(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function ZS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=lr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ha({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=lr.Pop;let v=h(),f=v==null?null:v-c;c=v,u&&u({action:a,location:E.location,delta:f})}function m(v,f){a=lr.Push;let y=Xf(E.location,v,f);c=h()+1;let x=Yp(y,c),w=E.createHref(y);try{o.pushState(x,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;r.location.assign(w)}s&&u&&u({action:a,location:E.location,delta:1})}function _(v,f){a=lr.Replace;let y=Xf(E.location,v,f);c=h();let x=Yp(y,c),w=E.createHref(y);o.replaceState(x,"",w),s&&u&&u({action:a,location:E.location,delta:0})}function S(v){let f=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof v=="string"?v:W_(v);return y=y.replace(/ $/,"%20"),Wt(f,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,f)}let E={get action(){return a},get location(){return t(r,o)},listen(v){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(Xp,p),u=v,()=>{r.removeEventListener(Xp,p),u=null}},createHref(v){return e(r,v)},createURL:S,encodeLocation(v){let f=S(v);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:_,go(v){return o.go(v)}};return E}var qp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qp||(qp={}));function QS(t,e,n){return n===void 0&&(n="/"),JS(t,e,n)}function JS(t,e,n,i){let r=typeof e=="string"?mo(e):e,s=Y_(r.pathname||"/",n);if(s==null)return null;let o=j_(t);eE(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=dE(s);a=uE(o[u],c)}return a}function j_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Wt(u.relativePath.startsWith(i),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(i.length));let c=Wr([i,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Wt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),j_(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aE(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let u of X_(s.path))r(s,o,u)}),e}function X_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=X_(i.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),r&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function eE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const tE=/^:[\w-]+$/,nE=3,iE=2,rE=1,sE=10,oE=-2,$p=t=>t==="*";function aE(t,e){let n=t.split("/"),i=n.length;return n.some($p)&&(i+=oE),e&&(i+=iE),n.filter(r=>!$p(r)).reduce((r,s)=>r+(tE.test(s)?nE:s===""?rE:sE),i)}function lE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function uE(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let u=i[a],c=a===i.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=cE({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!p)return null;Object.assign(r,p.params),o.push({params:r,pathname:Wr([s,p.pathname]),pathnameBase:vE(Wr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Wr([s,p.pathnameBase]))}return o}function cE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,h,p)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let E=a[p]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const S=a[p];return _&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),th(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(i.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function dE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return th(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Y_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const hE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pE=t=>hE.test(t);function mE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?mo(t):t,s;if(n)if(pE(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),th(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Kp(n.substring(1),"/"):s=Kp(n,e)}else s=e;return{pathname:s,search:_E(i),hash:yE(r)}}function Kp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function _c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function q_(t,e){let n=gE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function $_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=mo(t):(r=ha({},t),Wt(!r.pathname||!r.pathname.includes("?"),_c("?","pathname","search",r)),Wt(!r.pathname||!r.pathname.includes("#"),_c("#","pathname","hash",r)),Wt(!r.search||!r.search.includes("#"),_c("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!i&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;r.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=mE(r,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Wr=t=>t.join("/").replace(/\/\/+/g,"/"),vE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_E=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const K_=["post","put","patch","delete"];new Set(K_);const SE=["get",...K_];new Set(SE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pa.apply(this,arguments)}const nh=he.createContext(null),EE=he.createContext(null),Ea=he.createContext(null),Lu=he.createContext(null),is=he.createContext({outlet:null,matches:[],isDataRoute:!1}),Z_=he.createContext(null);function Ma(){return he.useContext(Lu)!=null}function ih(){return Ma()||Wt(!1),he.useContext(Lu).location}function Q_(t){he.useContext(Ea).static||he.useLayoutEffect(t)}function ME(){let{isDataRoute:t}=he.useContext(is);return t?FE():wE()}function wE(){Ma()||Wt(!1);let t=he.useContext(nh),{basename:e,future:n,navigator:i}=he.useContext(Ea),{matches:r}=he.useContext(is),{pathname:s}=ih(),o=JSON.stringify(q_(r,n.v7_relativeSplatPath)),a=he.useRef(!1);return Q_(()=>{a.current=!0}),he.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let p=$_(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Wr([e,p.pathname])),(h.replace?i.replace:i.push)(p,h.state,h)},[e,i,o,s,t])}function TE(t,e){return AE(t,e)}function AE(t,e,n,i){Ma()||Wt(!1);let{navigator:r}=he.useContext(Ea),{matches:s}=he.useContext(is),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ih(),h;if(e){var p;let v=typeof e=="string"?mo(e):e;u==="/"||(p=v.pathname)!=null&&p.startsWith(u)||Wt(!1),h=v}else h=c;let m=h.pathname||"/",_=m;if(u!=="/"){let v=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let S=QS(t,{pathname:_}),E=LE(S&&S.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Wr([u,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Wr([u,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i);return e&&E?he.createElement(Lu.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:lr.Pop}},E):E}function RE(){let t=IE(),e=xE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:r},n):null,null)}const CE=he.createElement(RE,null);class bE extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?he.createElement(is.Provider,{value:this.props.routeContext},he.createElement(Z_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PE(t){let{routeContext:e,match:n,children:i}=t,r=he.useContext(nh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),he.createElement(is.Provider,{value:e},i)}function LE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Wt(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:_}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let _,S=!1,E=null,v=null;n&&(_=a&&p.route.id?a[p.route.id]:void 0,E=p.route.errorElement||CE,u&&(c<0&&m===0?(OE("route-fallback"),S=!0,v=null):c===m&&(S=!0,v=p.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,m+1)),y=()=>{let x;return _?x=E:S?x=v:p.route.Component?x=he.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=h,he.createElement(PE,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?he.createElement(bE,{location:n.location,revalidation:n.revalidation,component:E,error:_,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var J_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(J_||{}),e0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(e0||{});function DE(t){let e=he.useContext(nh);return e||Wt(!1),e}function UE(t){let e=he.useContext(EE);return e||Wt(!1),e}function NE(t){let e=he.useContext(is);return e||Wt(!1),e}function t0(t){let e=NE(),n=e.matches[e.matches.length-1];return n.route.id||Wt(!1),n.route.id}function IE(){var t;let e=he.useContext(Z_),n=UE(),i=t0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function FE(){let{router:t}=DE(J_.UseNavigateStable),e=t0(e0.UseNavigateStable),n=he.useRef(!1);return Q_(()=>{n.current=!0}),he.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,pa({fromRouteId:e},s)))},[t,e])}const Zp={};function OE(t,e,n){Zp[t]||(Zp[t]=!0)}function kE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function BE(t){let{to:e,replace:n,state:i,relative:r}=t;Ma()||Wt(!1);let{future:s,static:o}=he.useContext(Ea),{matches:a}=he.useContext(is),{pathname:u}=ih(),c=ME(),h=$_(e,q_(a,s.v7_relativeSplatPath),u,r==="path"),p=JSON.stringify(h);return he.useEffect(()=>c(JSON.parse(p),{replace:n,state:i,relative:r}),[c,p,r,n,i]),null}function Ol(t){Wt(!1)}function zE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=lr.Pop,navigator:s,static:o=!1,future:a}=t;Ma()&&Wt(!1);let u=e.replace(/^\/*/,"/"),c=he.useMemo(()=>({basename:u,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof i=="string"&&(i=mo(i));let{pathname:h="/",search:p="",hash:m="",state:_=null,key:S="default"}=i,E=he.useMemo(()=>{let v=Y_(h,u);return v==null?null:{location:{pathname:v,search:p,hash:m,state:_,key:S},navigationType:r}},[u,h,p,m,_,S,r]);return E==null?null:he.createElement(Ea.Provider,{value:c},he.createElement(Lu.Provider,{children:n,value:E}))}function HE(t){let{children:e,location:n}=t;return TE(Yf(e),n)}new Promise(()=>{});function Yf(t,e){e===void 0&&(e=[]);let n=[];return he.Children.forEach(t,(i,r)=>{if(!he.isValidElement(i))return;let s=[...e,r];if(i.type===he.Fragment){n.push.apply(n,Yf(i.props.children,s));return}i.type!==Ol&&Wt(!1),!i.props.index||!i.props.children||Wt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Yf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const GE="6";try{window.__reactRouterVersion=GE}catch{}const VE="startTransition",Qp=Oy[VE];function WE(t){let{basename:e,children:n,future:i,window:r}=t,s=he.useRef();s.current==null&&(s.current=$S({window:r,v5Compat:!0}));let o=s.current,[a,u]=he.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},h=he.useCallback(p=>{c&&Qp?Qp(()=>u(p)):u(p)},[u,c]);return he.useLayoutEffect(()=>o.listen(h),[o,h]),he.useEffect(()=>kE(i),[i]),he.createElement(zE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Jp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Jp||(Jp={}));var em;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(em||(em={}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="160",jE=0,tm=1,XE=2,n0=1,YE=2,Ui=3,wr=0,In=1,Fi=2,yr=0,Zs=1,nm=2,im=3,rm=4,qE=5,Or=100,$E=101,KE=102,sm=103,om=104,ZE=200,QE=201,JE=202,eM=203,qf=204,$f=205,tM=206,nM=207,iM=208,rM=209,sM=210,oM=211,aM=212,lM=213,uM=214,cM=0,fM=1,dM=2,uu=3,hM=4,pM=5,mM=6,gM=7,sh=0,vM=1,_M=2,xr=0,yM=1,xM=2,SM=3,EM=4,MM=5,wM=6,i0=300,oo=301,ao=302,Kf=303,Zf=304,Du=306,Qf=1e3,hi=1001,Jf=1002,Sn=1003,am=1004,yc=1005,$n=1006,TM=1007,ma=1008,Sr=1009,AM=1010,RM=1011,oh=1012,r0=1013,ur=1014,cr=1015,ga=1016,s0=1017,o0=1018,jr=1020,CM=1021,pi=1023,bM=1024,PM=1025,Xr=1026,lo=1027,LM=1028,a0=1029,DM=1030,l0=1031,u0=1033,xc=33776,Sc=33777,Ec=33778,Mc=33779,lm=35840,um=35841,cm=35842,fm=35843,c0=36196,dm=37492,hm=37496,pm=37808,mm=37809,gm=37810,vm=37811,_m=37812,ym=37813,xm=37814,Sm=37815,Em=37816,Mm=37817,wm=37818,Tm=37819,Am=37820,Rm=37821,wc=36492,Cm=36494,bm=36495,UM=36283,Pm=36284,Lm=36285,Dm=36286,f0=3e3,Yr=3001,NM=3200,IM=3201,d0=0,FM=1,Zn="",sn="srgb",Xi="srgb-linear",ah="display-p3",Uu="display-p3-linear",cu="linear",Pt="srgb",fu="rec709",du="p3",ms=7680,Um=519,OM=512,kM=513,BM=514,h0=515,zM=516,HM=517,GM=518,VM=519,Nm=35044,Im="300 es",ed=1035,Bi=2e3,hu=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,td=180/Math.PI;function wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Pn(t,e,n){return Math.max(e,Math.min(n,t))}function WM(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function Fm(t){return(t&t-1)===0&&t!==0}function nd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,i,r,s,o,a,u,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,u,c)}set(e,n,i,r,s,o,a,u,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=u,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],u=i[6],c=i[1],h=i[4],p=i[7],m=i[2],_=i[5],S=i[8],E=r[0],v=r[3],f=r[6],y=r[1],x=r[4],w=r[7],I=r[2],L=r[5],b=r[8];return s[0]=o*E+a*y+u*I,s[3]=o*v+a*x+u*L,s[6]=o*f+a*w+u*b,s[1]=c*E+h*y+p*I,s[4]=c*v+h*x+p*L,s[7]=c*f+h*w+p*b,s[2]=m*E+_*y+S*I,s[5]=m*v+_*x+S*L,s[8]=m*f+_*w+S*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*u+r*s*c-r*o*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],h=e[8],p=h*o-a*c,m=a*u-h*s,_=c*s-o*u,S=n*p+i*m+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=m*E,e[4]=(h*n-r*u)*E,e[5]=(r*s-a*n)*E,e[6]=_*E,e[7]=(i*u-c*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const u=Math.cos(s),c=Math.sin(s);return this.set(i*u,i*c,-i*(u*o+c*a)+o+e,-r*c,r*u,-r*(-c*o+u*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new lt;function p0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){const t=pu("canvas");return t.style.display="block",t}const Om={};function $o(t){t in Om||(Om[t]=!0,console.warn(t))}const km=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bm=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Xi]:{transfer:cu,primaries:fu,toReference:t=>t,fromReference:t=>t},[sn]:{transfer:Pt,primaries:fu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uu]:{transfer:cu,primaries:du,toReference:t=>t.applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(km)},[ah]:{transfer:Pt,primaries:du,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bm),fromReference:t=>t.applyMatrix3(km).convertLinearToSRGB()}},XM=new Set([Xi,Uu]),Mt={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!XM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qa[e].toReference,r=Qa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qa[t].primaries},getTransfer:function(t){return t===Zn?cu:Qa[t].transfer}};function Qs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class m0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=pu("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qs(n[i]/255)*255):n[i]=Qs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class g0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bc(r[o].image)):s.push(bc(r[o]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qM=0;class Hn extends go{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,i=hi,r=hi,s=$n,o=ma,a=pi,u=Sr,c=Hn.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=wa(),this.name="",this.source=new g0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:($o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yr?sn:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qf:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qf:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?Yr:f0}set encoding(e){$o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?sn:Zn}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=i0;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,i=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const u=e.elements,c=u[0],h=u[4],p=u[8],m=u[1],_=u[5],S=u[9],E=u[2],v=u[6],f=u[10];if(Math.abs(h-m)<.01&&Math.abs(p-E)<.01&&Math.abs(S-v)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+E)<.1&&Math.abs(S+v)<.1&&Math.abs(c+_+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(_+1)/2,I=(f+1)/2,L=(h+m)/4,b=(p+E)/4,k=(S+v)/4;return x>w&&x>I?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=L/i,s=b/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=L/r,s=k/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=b/s,r=k/s),this.set(i,r,s,n),this}let y=Math.sqrt((v-S)*(v-S)+(p-E)*(p-E)+(m-h)*(m-h));return Math.abs(y)<.001&&(y=1),this.x=(v-S)/y,this.y=(p-E)/y,this.z=(m-h)/y,this.w=Math.acos((c+_+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $M extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&($o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yr?sn:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends $M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class v0 extends Hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KM extends Hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let u=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],_=s[o+1],S=s[o+2],E=s[o+3];if(a===0){e[n+0]=u,e[n+1]=c,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=m,e[n+1]=_,e[n+2]=S,e[n+3]=E;return}if(p!==E||u!==m||c!==_||h!==S){let v=1-a;const f=u*m+c*_+h*S+p*E,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),L=Math.atan2(I,f*y);v=Math.sin(v*L)/I,a=Math.sin(a*L)/I}const w=a*y;if(u=u*v+m*w,c=c*v+_*w,h=h*v+S*w,p=p*v+E*w,v===1-a){const I=1/Math.sqrt(u*u+c*c+h*h+p*p);u*=I,c*=I,h*=I,p*=I}}e[n]=u,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],u=i[r+1],c=i[r+2],h=i[r+3],p=s[o],m=s[o+1],_=s[o+2],S=s[o+3];return e[n]=a*S+h*p+u*_-c*m,e[n+1]=u*S+h*m+c*p-a*_,e[n+2]=c*S+h*_+a*m-u*p,e[n+3]=h*S-a*p-u*m-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),m=u(i/2),_=u(r/2),S=u(s/2);switch(o){case"XYZ":this._x=m*h*p+c*_*S,this._y=c*_*p-m*h*S,this._z=c*h*S+m*_*p,this._w=c*h*p-m*_*S;break;case"YXZ":this._x=m*h*p+c*_*S,this._y=c*_*p-m*h*S,this._z=c*h*S-m*_*p,this._w=c*h*p+m*_*S;break;case"ZXY":this._x=m*h*p-c*_*S,this._y=c*_*p+m*h*S,this._z=c*h*S+m*_*p,this._w=c*h*p-m*_*S;break;case"ZYX":this._x=m*h*p-c*_*S,this._y=c*_*p+m*h*S,this._z=c*h*S-m*_*p,this._w=c*h*p+m*_*S;break;case"YZX":this._x=m*h*p+c*_*S,this._y=c*_*p+m*h*S,this._z=c*h*S-m*_*p,this._w=c*h*p-m*_*S;break;case"XZY":this._x=m*h*p-c*_*S,this._y=c*_*p-m*h*S,this._z=c*h*S+m*_*p,this._w=c*h*p+m*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],u=n[9],c=n[2],h=n[6],p=n[10],m=i+a+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(h-u)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>p){const _=2*Math.sqrt(1+i-a-p);this._w=(h-u)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>p){const _=2*Math.sqrt(1+a-i-p);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(u+h)/_}else{const _=2*Math.sqrt(1+p-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(u+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,u=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*u,this._y=r*h+o*u+s*a-i*c,this._z=s*h+o*c+i*u-r*a,this._w=o*h-i*a-r*u-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(u),h=Math.atan2(c,a),p=Math.sin((1-n)*h)/c,m=Math.sin(n*h)/c;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+u*c+o*p-a*h,this.y=i+u*h+a*c-s*p,this.z=r+u*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,u=n.z;return this.x=r*u-s*a,this.y=s*o-i*u,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new W,zm=new Ta;class Aa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),el.subVectors(this.max,Do),vs.subVectors(e.a,Do),_s.subVectors(e.b,Do),ys.subVectors(e.c,Do),Zi.subVectors(_s,vs),Qi.subVectors(ys,_s),br.subVectors(vs,ys);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-br.z,br.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,br.z,0,-br.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-br.y,br.x,0];return!Lc(n,vs,_s,ys,el)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,vs,_s,ys,el))?!1:(tl.crossVectors(Zi,Qi),n=[tl.x,tl.y,tl.z],Lc(n,vs,_s,ys,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new W,new W,new W,new W,new W,new W,new W,new W],oi=new W,Ja=new Aa,vs=new W,_s=new W,ys=new W,Zi=new W,Qi=new W,br=new W,Do=new W,el=new W,tl=new W,Pr=new W;function Lc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),u=e.dot(Pr),c=n.dot(Pr),h=i.dot(Pr);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>a)return!1}return!0}const ZM=new Aa,Uo=new W,Dc=new W;class Ra{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Dc)),this.expandByPoint(Uo.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new W,Uc=new W,nl=new W,Ji=new W,Nc=new W,il=new W,Ic=new W;class Nu{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uc.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Uc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(nl),a=Ji.dot(this.direction),u=-Ji.dot(nl),c=Ji.lengthSq(),h=Math.abs(1-o*o);let p,m,_,S;if(h>0)if(p=o*u-a,m=o*a-u,S=s*h,p>=0)if(m>=-S)if(m<=S){const E=1/h;p*=E,m*=E,_=p*(p+o*m+2*a)+m*(o*p+m+2*u)+c}else m=s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*u)+c;else m=-s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*u)+c;else m<=-S?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-u),s),_=-p*p+m*(m+2*u)+c):m<=S?(p=0,m=Math.min(Math.max(-s,-u),s),_=m*(m+2*u)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-u),s),_=-p*p+m*(m+2*u)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),_=-p*p+m*(m+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Uc).addScaledVector(nl,m),_}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,u;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){Nc.subVectors(n,e),il.subVectors(i,e),Ic.crossVectors(Nc,il);let o=this.direction.dot(Ic),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const u=a*this.direction.dot(il.crossVectors(Ji,il));if(u<0)return null;const c=a*this.direction.dot(Nc.cross(Ji));if(c<0||u+c>o)return null;const h=-a*Ji.dot(Ic);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,o,a,u,c,h,p,m,_,S,E,v){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,u,c,h,p,m,_,S,E,v)}set(e,n,i,r,s,o,a,u,c,h,p,m,_,S,E,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=u,f[2]=c,f[6]=h,f[10]=p,f[14]=m,f[3]=_,f[7]=S,f[11]=E,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,_=o*p,S=a*h,E=a*p;n[0]=u*h,n[4]=-u*p,n[8]=c,n[1]=_+S*c,n[5]=m-E*c,n[9]=-a*u,n[2]=E-m*c,n[6]=S+_*c,n[10]=o*u}else if(e.order==="YXZ"){const m=u*h,_=u*p,S=c*h,E=c*p;n[0]=m+E*a,n[4]=S*a-_,n[8]=o*c,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=_*a-S,n[6]=E+m*a,n[10]=o*u}else if(e.order==="ZXY"){const m=u*h,_=u*p,S=c*h,E=c*p;n[0]=m-E*a,n[4]=-o*p,n[8]=S+_*a,n[1]=_+S*a,n[5]=o*h,n[9]=E-m*a,n[2]=-o*c,n[6]=a,n[10]=o*u}else if(e.order==="ZYX"){const m=o*h,_=o*p,S=a*h,E=a*p;n[0]=u*h,n[4]=S*c-_,n[8]=m*c+E,n[1]=u*p,n[5]=E*c+m,n[9]=_*c-S,n[2]=-c,n[6]=a*u,n[10]=o*u}else if(e.order==="YZX"){const m=o*u,_=o*c,S=a*u,E=a*c;n[0]=u*h,n[4]=E-m*p,n[8]=S*p+_,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=_*p+S,n[10]=m-E*p}else if(e.order==="XZY"){const m=o*u,_=o*c,S=a*u,E=a*c;n[0]=u*h,n[4]=-p,n[8]=c*h,n[1]=m*p+E,n[5]=o*h,n[9]=_*p-S,n[2]=S*p-_,n[6]=a*h,n[10]=E*p+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,JM)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),er.crossVectors(i,Fn),er.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),er.crossVectors(i,Fn)),er.normalize(),rl.crossVectors(Fn,er),r[0]=er.x,r[4]=rl.x,r[8]=Fn.x,r[1]=er.y,r[5]=rl.y,r[9]=Fn.y,r[2]=er.z,r[6]=rl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],u=i[8],c=i[12],h=i[1],p=i[5],m=i[9],_=i[13],S=i[2],E=i[6],v=i[10],f=i[14],y=i[3],x=i[7],w=i[11],I=i[15],L=r[0],b=r[4],k=r[8],A=r[12],R=r[1],G=r[5],ie=r[9],fe=r[13],B=r[2],X=r[6],te=r[10],se=r[14],z=r[3],j=r[7],Q=r[11],re=r[15];return s[0]=o*L+a*R+u*B+c*z,s[4]=o*b+a*G+u*X+c*j,s[8]=o*k+a*ie+u*te+c*Q,s[12]=o*A+a*fe+u*se+c*re,s[1]=h*L+p*R+m*B+_*z,s[5]=h*b+p*G+m*X+_*j,s[9]=h*k+p*ie+m*te+_*Q,s[13]=h*A+p*fe+m*se+_*re,s[2]=S*L+E*R+v*B+f*z,s[6]=S*b+E*G+v*X+f*j,s[10]=S*k+E*ie+v*te+f*Q,s[14]=S*A+E*fe+v*se+f*re,s[3]=y*L+x*R+w*B+I*z,s[7]=y*b+x*G+w*X+I*j,s[11]=y*k+x*ie+w*te+I*Q,s[15]=y*A+x*fe+w*se+I*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],c=e[13],h=e[2],p=e[6],m=e[10],_=e[14],S=e[3],E=e[7],v=e[11],f=e[15];return S*(+s*u*p-r*c*p-s*a*m+i*c*m+r*a*_-i*u*_)+E*(+n*u*_-n*c*m+s*o*m-r*o*_+r*c*h-s*u*h)+v*(+n*c*p-n*a*_-s*o*p+i*o*_+s*a*h-i*c*h)+f*(-r*a*h-n*u*p+n*a*m+r*o*p-i*o*m+i*u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],c=e[7],h=e[8],p=e[9],m=e[10],_=e[11],S=e[12],E=e[13],v=e[14],f=e[15],y=p*v*c-E*m*c+E*u*_-a*v*_-p*u*f+a*m*f,x=S*m*c-h*v*c-S*u*_+o*v*_+h*u*f-o*m*f,w=h*E*c-S*p*c+S*a*_-o*E*_-h*a*f+o*p*f,I=S*p*u-h*E*u-S*a*m+o*E*m+h*a*v-o*p*v,L=n*y+i*x+r*w+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/L;return e[0]=y*b,e[1]=(E*m*s-p*v*s-E*r*_+i*v*_+p*r*f-i*m*f)*b,e[2]=(a*v*s-E*u*s+E*r*c-i*v*c-a*r*f+i*u*f)*b,e[3]=(p*u*s-a*m*s-p*r*c+i*m*c+a*r*_-i*u*_)*b,e[4]=x*b,e[5]=(h*v*s-S*m*s+S*r*_-n*v*_-h*r*f+n*m*f)*b,e[6]=(S*u*s-o*v*s-S*r*c+n*v*c+o*r*f-n*u*f)*b,e[7]=(o*m*s-h*u*s+h*r*c-n*m*c-o*r*_+n*u*_)*b,e[8]=w*b,e[9]=(S*p*s-h*E*s-S*i*_+n*E*_+h*i*f-n*p*f)*b,e[10]=(o*E*s-S*a*s+S*i*c-n*E*c-o*i*f+n*a*f)*b,e[11]=(h*a*s-o*p*s-h*i*c+n*p*c+o*i*_-n*a*_)*b,e[12]=I*b,e[13]=(h*E*r-S*p*r+S*i*m-n*E*m-h*i*v+n*p*v)*b,e[14]=(S*a*r-o*E*r-S*i*u+n*E*u+o*i*v-n*a*v)*b,e[15]=(o*p*r-h*a*r+h*i*u-n*p*u-o*i*m+n*a*m)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,u=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*u,c*u+r*a,0,c*a+r*u,h*a+i,h*u-r*o,0,c*u-r*a,h*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,u=n._w,c=s+s,h=o+o,p=a+a,m=s*c,_=s*h,S=s*p,E=o*h,v=o*p,f=a*p,y=u*c,x=u*h,w=u*p,I=i.x,L=i.y,b=i.z;return r[0]=(1-(E+f))*I,r[1]=(_+w)*I,r[2]=(S-x)*I,r[3]=0,r[4]=(_-w)*L,r[5]=(1-(m+f))*L,r[6]=(v+y)*L,r[7]=0,r[8]=(S+x)*b,r[9]=(v-y)*b,r[10]=(1-(m+E))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const c=1/s,h=1/o,p=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bi){const u=this.elements,c=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(a===Bi)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===hu)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bi){const u=this.elements,c=1/(n-e),h=1/(i-r),p=1/(o-s),m=(n+e)*c,_=(i+r)*h;let S,E;if(a===Bi)S=(o+s)*p,E=-2*p;else if(a===hu)S=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=E,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new W,ai=new qt,QM=new W(0,0,0),JM=new W(1,1,1),er=new W,rl=new W,Fn=new W,Hm=new qt,Gm=new Ta;class Iu{constructor(e=0,n=0,i=0,r=Iu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],c=r[5],h=r[9],p=r[2],m=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Iu.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ew=0;const Vm=new W,Ss=new Ta,Pi=new qt,sl=new W,No=new W,tw=new W,nw=new Ta,Wm=new W(1,0,0),jm=new W(0,1,0),Xm=new W(0,0,1),iw={type:"added"},rw={type:"removed"};class mn extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new W,n=new Iu,i=new Ta,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Wm,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,n){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wm,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(No,sl,this.up):Pi.lookAt(sl,No,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,nw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const p=u[c];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(n){const a=o(e.geometries),u=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),_=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new W(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new W,Li=new W,Fc=new W,Di=new W,Es=new W,Ms=new W,Ym=new W,Oc=new W,kc=new W,Bc=new W;let ol=!1;class di{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),li.subVectors(e,n),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){li.subVectors(r,n),Li.subVectors(i,n),Fc.subVectors(e,n);const o=li.dot(li),a=li.dot(Li),u=li.dot(Fc),c=Li.dot(Li),h=Li.dot(Fc),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,_=(c*u-a*h)*m,S=(o*h-a*u)*m;return s.set(1-_-S,S,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,i,r,s,o,a,u){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),this.getInterpolation(e,n,i,r,s,o,a,u)}static getInterpolation(e,n,i,r,s,o,a,u){return this.getBarycoord(e,n,i,r,Di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Di.x),u.addScaledVector(o,Di.y),u.addScaledVector(a,Di.z),u)}static isFrontFacing(e,n,i,r){return li.subVectors(i,n),Li.subVectors(e,n),li.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),li.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),di.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return di.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ms.subVectors(s,i),Oc.subVectors(e,i);const u=Es.dot(Oc),c=Ms.dot(Oc);if(u<=0&&c<=0)return n.copy(i);kc.subVectors(e,r);const h=Es.dot(kc),p=Ms.dot(kc);if(h>=0&&p<=h)return n.copy(r);const m=u*p-h*c;if(m<=0&&u>=0&&h<=0)return o=u/(u-h),n.copy(i).addScaledVector(Es,o);Bc.subVectors(e,s);const _=Es.dot(Bc),S=Ms.dot(Bc);if(S>=0&&_<=S)return n.copy(s);const E=_*c-u*S;if(E<=0&&c>=0&&S<=0)return a=c/(c-S),n.copy(i).addScaledVector(Ms,a);const v=h*S-_*p;if(v<=0&&p-h>=0&&_-S>=0)return Ym.subVectors(s,r),a=(p-h)/(p-h+(_-S)),n.copy(r).addScaledVector(Ym,a);const f=1/(v+E+m);return o=E*f,a=m*f,n.copy(i).addScaledVector(Es,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},al={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Mt.workingColorSpace){if(e=WM(e,1),n=Pn(n,0,1),i=Pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,n=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=sn){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Pn(hn.r*255,0,255))*65536+Math.round(Pn(hn.g*255,0,255))*256+Math.round(Pn(hn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let u,c;const h=(a+o)/2;if(a===o)u=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-i)/p+2;break;case s:u=(i-r)/p+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=sn){Mt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(al);const i=Ac(tr.h,al.h,n),r=Ac(tr.s,al.s,n),s=Ac(tr.l,al.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new ft;ft.NAMES=_0;let sw=0;class rs extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Zs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=$f,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==$f&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y0 extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new W,ll=new gt;class Ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array),s=Cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nm&&(e.usage=this.usage),e}}class x0 extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S0 extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ei extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ow=0;const Xn=new qt,Hc=new mn,ws=new W,On=new Aa,Io=new Aa,Qt=new W;class ii extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?S0:x0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(On.min,Io.min),On.expandByPoint(Qt),Qt.addVectors(On.max,Io.max),On.expandByPoint(Qt)):(On.expandByPoint(Io.min),On.expandByPoint(Io.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],u=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),u&&(ws.fromBufferAttribute(e,c),Qt.add(ws)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new W,h[R]=new W;const p=new W,m=new W,_=new W,S=new gt,E=new gt,v=new gt,f=new W,y=new W;function x(R,G,ie){p.fromArray(r,R*3),m.fromArray(r,G*3),_.fromArray(r,ie*3),S.fromArray(o,R*2),E.fromArray(o,G*2),v.fromArray(o,ie*2),m.sub(p),_.sub(p),E.sub(S),v.sub(S);const fe=1/(E.x*v.y-v.x*E.y);isFinite(fe)&&(f.copy(m).multiplyScalar(v.y).addScaledVector(_,-E.y).multiplyScalar(fe),y.copy(_).multiplyScalar(E.x).addScaledVector(m,-v.x).multiplyScalar(fe),c[R].add(f),c[G].add(f),c[ie].add(f),h[R].add(y),h[G].add(y),h[ie].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let R=0,G=w.length;R<G;++R){const ie=w[R],fe=ie.start,B=ie.count;for(let X=fe,te=fe+B;X<te;X+=3)x(i[X+0],i[X+1],i[X+2])}const I=new W,L=new W,b=new W,k=new W;function A(R){b.fromArray(s,R*3),k.copy(b);const G=c[R];I.copy(G),I.sub(b.multiplyScalar(b.dot(G))).normalize(),L.crossVectors(k,G);const fe=L.dot(h[R])<0?-1:1;u[R*4]=I.x,u[R*4+1]=I.y,u[R*4+2]=I.z,u[R*4+3]=fe}for(let R=0,G=w.length;R<G;++R){const ie=w[R],fe=ie.start,B=ie.count;for(let X=fe,te=fe+B;X<te;X+=3)A(i[X+0]),A(i[X+1]),A(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const r=new W,s=new W,o=new W,a=new W,u=new W,c=new W,h=new W,p=new W;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),E=e.getX(m+1),v=e.getX(m+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,v),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,S),u.fromBufferAttribute(i,E),c.fromBufferAttribute(i,v),a.add(h),u.add(h),c.add(h),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let m=0,_=n.count;m<_;m+=3)r.fromBufferAttribute(n,m+0),s.fromBufferAttribute(n,m+1),o.fromBufferAttribute(n,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,u){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(u.length*h);let _=0,S=0;for(let E=0,v=u.length;E<v;E++){a.isInterleavedBufferAttribute?_=u[E]*a.data.stride+a.offset:_=u[E]*h;for(let f=0;f<h;f++)m[S++]=c[_++]}return new Ti(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const u=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],_=e(m,i);u.push(_)}n.morphAttributes[a]=u}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let p=0,m=c.length;p<m;p++){const _=c[p];h.push(_.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,_=p.length;m<_;m++)h.push(p[m].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qm=new qt,Lr=new Nu,ul=new Ra,$m=new W,Ts=new W,As=new W,Rs=new W,Gc=new W,cl=new W,fl=new gt,dl=new gt,hl=new gt,Km=new W,Zm=new W,Qm=new W,pl=new W,ml=new W;class zi extends mn{constructor(e=new ii,n=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cl.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const h=a[u],p=s[u];h!==0&&(Gc.fromBufferAttribute(p,e),o?cl.addScaledVector(Gc,h):cl.addScaledVector(Gc.sub(n),h))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(ul.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ul,$m)===null||Lr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(qm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(qm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,E=m.length;S<E;S++){const v=m[S],f=o[v.materialIndex],y=Math.max(v.start,_.start),x=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let w=y,I=x;w<I;w+=3){const L=a.getX(w),b=a.getX(w+1),k=a.getX(w+2);r=gl(this,f,e,i,c,h,p,L,b,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(a.count,_.start+_.count);for(let v=S,f=E;v<f;v+=3){const y=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);r=gl(this,o,e,i,c,h,p,y,x,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,E=m.length;S<E;S++){const v=m[S],f=o[v.materialIndex],y=Math.max(v.start,_.start),x=Math.min(u.count,Math.min(v.start+v.count,_.start+_.count));for(let w=y,I=x;w<I;w+=3){const L=w,b=w+1,k=w+2;r=gl(this,f,e,i,c,h,p,L,b,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const S=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let v=S,f=E;v<f;v+=3){const y=v,x=v+1,w=v+2;r=gl(this,o,e,i,c,h,p,y,x,w),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function aw(t,e,n,i,r,s,o,a){let u;if(e.side===In?u=i.intersectTriangle(o,s,r,!0,a):u=i.intersectTriangle(r,s,o,e.side===wr,a),u===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,u,c){t.getVertexPosition(a,Ts),t.getVertexPosition(u,As),t.getVertexPosition(c,Rs);const h=aw(t,e,n,i,Ts,As,Rs,pl);if(h){r&&(fl.fromBufferAttribute(r,a),dl.fromBufferAttribute(r,u),hl.fromBufferAttribute(r,c),h.uv=di.getInterpolation(pl,Ts,As,Rs,fl,dl,hl,new gt)),s&&(fl.fromBufferAttribute(s,a),dl.fromBufferAttribute(s,u),hl.fromBufferAttribute(s,c),h.uv1=di.getInterpolation(pl,Ts,As,Rs,fl,dl,hl,new gt),h.uv2=h.uv1),o&&(Km.fromBufferAttribute(o,a),Zm.fromBufferAttribute(o,u),Qm.fromBufferAttribute(o,c),h.normal=di.getInterpolation(pl,Ts,As,Rs,Km,Zm,Qm,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:u,c,normal:new W,materialIndex:0};di.getNormal(Ts,As,Rs,p.normal),h.face=p}return h}class Ca extends ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],h=[],p=[];let m=0,_=0;S("z","y","x",-1,-1,i,n,e,o,s,0),S("z","y","x",1,-1,i,n,-e,o,s,1),S("x","z","y",1,1,e,i,n,r,o,2),S("x","z","y",1,-1,e,i,-n,r,o,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new ei(c,3)),this.setAttribute("normal",new ei(h,3)),this.setAttribute("uv",new ei(p,2));function S(E,v,f,y,x,w,I,L,b,k,A){const R=w/b,G=I/k,ie=w/2,fe=I/2,B=L/2,X=b+1,te=k+1;let se=0,z=0;const j=new W;for(let Q=0;Q<te;Q++){const re=Q*G-fe;for(let ae=0;ae<X;ae++){const K=ae*R-ie;j[E]=K*y,j[v]=re*x,j[f]=B,c.push(j.x,j.y,j.z),j[E]=0,j[v]=0,j[f]=L>0?1:-1,h.push(j.x,j.y,j.z),p.push(ae/b),p.push(1-Q/k),se+=1}}for(let Q=0;Q<k;Q++)for(let re=0;re<b;re++){const ae=m+re+X*Q,K=m+re+X*(Q+1),oe=m+(re+1)+X*(Q+1),_e=m+(re+1)+X*Q;u.push(ae,K,_e),u.push(K,oe,_e),z+=6}a.addGroup(_,z,A),_+=z,m+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E0(t){return t.getRenderTarget()===null?t.outputColorSpace:Mt.workingColorSpace}const uw={clone:uo,merge:yn};var cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cw,this.fragmentShader=fw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kn extends M0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/u,n-=o.offsetY*i/c,r*=o.width/u,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,bs=1;class dw extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(Cs,bs,e,n);r.layers=this.layers,this.add(r);const s=new Kn(Cs,bs,e,n);s.layers=this.layers,this.add(s);const o=new Kn(Cs,bs,e,n);o.layers=this.layers,this.add(o);const a=new Kn(Cs,bs,e,n);a.layers=this.layers,this.add(a);const u=new Kn(Cs,bs,e,n);u.layers=this.layers,this.add(u);const c=new Kn(Cs,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,u]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,c,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,m,_),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class w0 extends Hn{constructor(e,n,i,r,s,o,a,u,c,h){e=e!==void 0?e:[],n=n!==void 0?n:oo,super(e,n,i,r,s,o,a,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hw extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&($o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?sn:Zn),this.texture=new w0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ca(5,5,5),s=new es({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:yr});s.uniforms.tEquirect.value=n;const o=new zi(r,s),a=n.minFilter;return n.minFilter===ma&&(n.minFilter=$n),new dw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Vc=new W,pw=new W,mw=new lt;class Ir{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vc.subVectors(i,n).cross(pw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mw.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Ra,vl=new W;class T0{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,o=new Ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],u=r[3],c=r[4],h=r[5],p=r[6],m=r[7],_=r[8],S=r[9],E=r[10],v=r[11],f=r[12],y=r[13],x=r[14],w=r[15];if(i[0].setComponents(u-s,m-c,v-_,w-f).normalize(),i[1].setComponents(u+s,m+c,v+_,w+f).normalize(),i[2].setComponents(u+o,m+h,v+S,w+y).normalize(),i[3].setComponents(u-o,m-h,v-S,w-y).normalize(),i[4].setComponents(u-a,m-p,v-E,w-x).normalize(),n===Bi)i[5].setComponents(u+a,m+p,v+E,w+x).normalize();else if(n===hu)i[5].setComponents(a,p,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const p=c.array,m=c.usage,_=p.byteLength,S=t.createBuffer();t.bindBuffer(h,S),t.bufferData(h,p,m),c.onUploadCallback();let E;if(p instanceof Float32Array)E=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=t.SHORT;else if(p instanceof Uint32Array)E=t.UNSIGNED_INT;else if(p instanceof Int32Array)E=t.INT;else if(p instanceof Int8Array)E=t.BYTE;else if(p instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,h,p){const m=h.array,_=h._updateRange,S=h.updateRanges;if(t.bindBuffer(p,c),_.count===-1&&S.length===0&&t.bufferSubData(p,0,m),S.length!==0){for(let E=0,v=S.length;E<v;E++){const f=S[E];n?t.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m,f.start,f.count):t.bufferSubData(p,f.start*m.BYTES_PER_ELEMENT,m.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):t.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function u(c,h){if(c.isGLBufferAttribute){const m=i.get(c);(!m||m.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,h),p.version=c.version}}return{get:o,remove:a,update:u}}class uh extends ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),u=Math.floor(r),c=a+1,h=u+1,p=e/a,m=n/u,_=[],S=[],E=[],v=[];for(let f=0;f<h;f++){const y=f*m-o;for(let x=0;x<c;x++){const w=x*p-s;S.push(w,-y,0),E.push(0,0,1),v.push(x/a),v.push(1-f/u)}}for(let f=0;f<u;f++)for(let y=0;y<a;y++){const x=y+c*f,w=y+c*(f+1),I=y+1+c*(f+1),L=y+1+c*f;_.push(x,w,L),_.push(w,I,L)}this.setIndex(_),this.setAttribute("position",new ei(S,3)),this.setAttribute("normal",new ei(E,3)),this.setAttribute("uv",new ei(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.width,e.height,e.widthSegments,e.heightSegments)}}var vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_w=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",qw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,M1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:vw,alphahash_pars_fragment:_w,alphamap_fragment:yw,alphamap_pars_fragment:xw,alphatest_fragment:Sw,alphatest_pars_fragment:Ew,aomap_fragment:Mw,aomap_pars_fragment:ww,batching_pars_vertex:Tw,batching_vertex:Aw,begin_vertex:Rw,beginnormal_vertex:Cw,bsdfs:bw,iridescence_fragment:Pw,bumpmap_pars_fragment:Lw,clipping_planes_fragment:Dw,clipping_planes_pars_fragment:Uw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Iw,color_fragment:Fw,color_pars_fragment:Ow,color_pars_vertex:kw,color_vertex:Bw,common:zw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Vw,displacementmap_vertex:Ww,emissivemap_fragment:jw,emissivemap_pars_fragment:Xw,colorspace_fragment:Yw,colorspace_pars_fragment:qw,envmap_fragment:$w,envmap_common_pars_fragment:Kw,envmap_pars_fragment:Zw,envmap_pars_vertex:Qw,envmap_physical_pars_fragment:c1,envmap_vertex:Jw,fog_vertex:e1,fog_pars_vertex:t1,fog_fragment:n1,fog_pars_fragment:i1,gradientmap_pars_fragment:r1,lightmap_fragment:s1,lightmap_pars_fragment:o1,lights_lambert_fragment:a1,lights_lambert_pars_fragment:l1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:d1,lights_phong_fragment:h1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:v1,lights_fragment_maps:_1,lights_fragment_end:y1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:M1,map_fragment:w1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:R1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:b1,morphcolor_vertex:P1,morphnormal_vertex:L1,morphtarget_pars_vertex:D1,morphtarget_vertex:U1,normal_fragment_begin:N1,normal_fragment_maps:I1,normal_pars_fragment:F1,normal_pars_vertex:O1,normal_vertex:k1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:X1,project_vertex:Y1,dithering_fragment:q1,dithering_pars_fragment:$1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:rT,skinnormal_vertex:sT,specularmap_fragment:oT,specularmap_pars_fragment:aT,tonemapping_fragment:lT,tonemapping_pars_fragment:uT,transmission_fragment:cT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:_T,backgroundCube_frag:yT,cube_vert:xT,cube_frag:ST,depth_vert:ET,depth_frag:MT,distanceRGBA_vert:wT,distanceRGBA_frag:TT,equirect_vert:AT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:bT,meshbasic_vert:PT,meshbasic_frag:LT,meshlambert_vert:DT,meshlambert_frag:UT,meshmatcap_vert:NT,meshmatcap_frag:IT,meshnormal_vert:FT,meshnormal_frag:OT,meshphong_vert:kT,meshphong_frag:BT,meshphysical_vert:zT,meshphysical_frag:HT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:WT,points_frag:jT,shadow_vert:XT,shadow_frag:YT,sprite_vert:qT,sprite_frag:$T},Me={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Si={basic:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ft(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:yn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:yn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:yn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ft(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:yn([Me.points,Me.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:yn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:yn([Me.common,Me.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:yn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:yn([Me.sprite,Me.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:yn([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:yn([Me.lights,Me.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const _l={r:0,b:0,g:0};function KT(t,e,n,i,r,s,o){const a=new ft(0);let u=s===!0?0:1,c,h,p=null,m=0,_=null;function S(v,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?n:e).get(x)),x===null?E(a,u):x&&x.isColor&&(E(x,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Du)?(h===void 0&&(h=new zi(new Ca(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:uo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Pt,(p!==x||m!==x.version||_!==t.toneMapping)&&(h.material.needsUpdate=!0,p=x,m=x.version,_=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zi(new uh(2,2),new es({name:"BackgroundMaterial",uniforms:uo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||m!==x.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,p=x,m=x.version,_=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function E(v,f){v.getRGB(_l,E0(t)),i.buffers.color.setClear(_l.r,_l.g,_l.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),u=f,E(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,E(a,u)},render:S}}function ZT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},u=v(null);let c=u,h=!1;function p(B,X,te,se,z){let j=!1;if(o){const Q=E(se,te,X);c!==Q&&(c=Q,_(c.object)),j=f(B,se,te,z),j&&y(B,se,te,z)}else{const Q=X.wireframe===!0;(c.geometry!==se.id||c.program!==te.id||c.wireframe!==Q)&&(c.geometry=se.id,c.program=te.id,c.wireframe=Q,j=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,k(B,X,te,se),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function m(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function S(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function E(B,X,te){const se=te.wireframe===!0;let z=a[B.id];z===void 0&&(z={},a[B.id]=z);let j=z[X.id];j===void 0&&(j={},z[X.id]=j);let Q=j[se];return Q===void 0&&(Q=v(m()),j[se]=Q),Q}function v(B){const X=[],te=[],se=[];for(let z=0;z<r;z++)X[z]=0,te[z]=0,se[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:se,object:B,attributes:{},index:null}}function f(B,X,te,se){const z=c.attributes,j=X.attributes;let Q=0;const re=te.getAttributes();for(const ae in re)if(re[ae].location>=0){const oe=z[ae];let _e=j[ae];if(_e===void 0&&(ae==="instanceMatrix"&&B.instanceMatrix&&(_e=B.instanceMatrix),ae==="instanceColor"&&B.instanceColor&&(_e=B.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;Q++}return c.attributesNum!==Q||c.index!==se}function y(B,X,te,se){const z={},j=X.attributes;let Q=0;const re=te.getAttributes();for(const ae in re)if(re[ae].location>=0){let oe=j[ae];oe===void 0&&(ae==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),ae==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor));const _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),z[ae]=_e,Q++}c.attributes=z,c.attributesNum=Q,c.index=se}function x(){const B=c.newAttributes;for(let X=0,te=B.length;X<te;X++)B[X]=0}function w(B){I(B,0)}function I(B,X){const te=c.newAttributes,se=c.enabledAttributes,z=c.attributeDivisors;te[B]=1,se[B]===0&&(t.enableVertexAttribArray(B),se[B]=1),z[B]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,X),z[B]=X)}function L(){const B=c.newAttributes,X=c.enabledAttributes;for(let te=0,se=X.length;te<se;te++)X[te]!==B[te]&&(t.disableVertexAttribArray(te),X[te]=0)}function b(B,X,te,se,z,j,Q){Q===!0?t.vertexAttribIPointer(B,X,te,z,j):t.vertexAttribPointer(B,X,te,se,z,j)}function k(B,X,te,se){if(i.isWebGL2===!1&&(B.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const z=se.attributes,j=te.getAttributes(),Q=X.defaultAttributeValues;for(const re in j){const ae=j[re];if(ae.location>=0){let K=z[re];if(K===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),K!==void 0){const oe=K.normalized,_e=K.itemSize,be=n.get(K);if(be===void 0)continue;const Le=be.buffer,We=be.type,Te=be.bytesPerElement,de=i.isWebGL2===!0&&(We===t.INT||We===t.UNSIGNED_INT||K.gpuType===r0);if(K.isInterleavedBufferAttribute){const Ne=K.data,V=Ne.stride,Je=K.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ae.locationSize;Ae++)I(ae.location+Ae,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ae=0;Ae<ae.locationSize;Ae++)w(ae.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ae=0;Ae<ae.locationSize;Ae++)b(ae.location+Ae,_e/ae.locationSize,We,oe,V*Te,(Je+_e/ae.locationSize*Ae)*Te,de)}else{if(K.isInstancedBufferAttribute){for(let Ne=0;Ne<ae.locationSize;Ne++)I(ae.location+Ne,K.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ne=0;Ne<ae.locationSize;Ne++)w(ae.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ne=0;Ne<ae.locationSize;Ne++)b(ae.location+Ne,_e/ae.locationSize,We,oe,_e*Te,_e/ae.locationSize*Ne*Te,de)}}else if(Q!==void 0){const oe=Q[re];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(ae.location,oe);break;case 3:t.vertexAttrib3fv(ae.location,oe);break;case 4:t.vertexAttrib4fv(ae.location,oe);break;default:t.vertexAttrib1fv(ae.location,oe)}}}}L()}function A(){ie();for(const B in a){const X=a[B];for(const te in X){const se=X[te];for(const z in se)S(se[z].object),delete se[z];delete X[te]}delete a[B]}}function R(B){if(a[B.id]===void 0)return;const X=a[B.id];for(const te in X){const se=X[te];for(const z in se)S(se[z].object),delete se[z];delete X[te]}delete a[B.id]}function G(B){for(const X in a){const te=a[X];if(te[B.id]===void 0)continue;const se=te[B.id];for(const z in se)S(se[z].object),delete se[z];delete te[B.id]}}function ie(){fe(),h=!0,c!==u&&(c=u,_(c.object))}function fe(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:ie,resetDefaultState:fe,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:w,disableUnusedAttributes:L}}function QT(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,p){t.drawArrays(s,h,p),n.update(p,s,1)}function u(h,p,m){if(m===0)return;let _,S;if(r)_=t,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](s,h,p,m),n.update(p,s,m)}function c(h,p,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<m;S++)this.render(h[S],p[S]);else{_.multiDrawArraysWEBGL(s,h,0,p,0,m);let S=0;for(let E=0;E<m;E++)S+=p[E];n.update(S,s,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c}function JT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const u=s(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),E=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,w=o||e.has("OES_texture_float"),I=x&&w,L=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:L}}function eA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ir,a=new lt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||r;return r=m,i=p.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){n=h(p,m,0)},this.setState=function(p,m,_){const S=p.clippingPlanes,E=p.clipIntersection,v=p.clipShadows,f=t.get(p);if(!r||S===null||S.length===0||s&&!v)s?h(null):c();else{const y=s?0:i,x=y*4;let w=f.clippingState||null;u.value=w,w=h(S,m,x,_);for(let I=0;I!==x;++I)w[I]=n[I];f.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function c(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,_,S){const E=p!==null?p.length:0;let v=null;if(E!==0){if(v=u.value,S!==!0||v===null){const f=_+E*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(v===null||v.length<f)&&(v=new Float32Array(f));for(let x=0,w=_;x!==E;++x,w+=4)o.copy(p[x]).applyMatrix4(y,a),o.normal.toArray(v,w),v[w+3]=o.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function tA(t){let e=new WeakMap;function n(o,a){return a===Kf?o.mapping=oo:a===Zf&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kf||a===Zf)if(e.has(o)){const u=e.get(o).texture;return n(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new hw(u.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nA extends M0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,u=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,Jm=[.125,.215,.35,.446,.526,.582],kr=20,Wc=new nA,eg=new ft;let jc=null,Xc=0,Yc=0;const Fr=(1+Math.sqrt(5))/2,Ps=1/Fr,tg=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Fr,Ps),new W(0,Fr,-Ps),new W(Ps,0,Fr),new W(-Ps,0,Fr),new W(Fr,Ps,0),new W(-Fr,Ps,0)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){jc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Xc,Yc),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ga,format:pi,colorSpace:Xi,depthBuffer:!1},r=ig(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(s)),this._blurMaterial=rA(s,e,n)}return r}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,i,r){const a=new Kn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(eg),h.toneMapping=xr,h.autoClear=!1;const _=new y0({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),S=new zi(new Ca,_);let E=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,E=!0):(_.color.copy(eg),E=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,u[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,u[f]),a.lookAt(0,c[f],0)):(a.up.set(0,u[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;yl(r,y*x,f>2?x:0,x,x),h.setRenderTarget(r),E&&h.render(S,a),h.render(e,a)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===oo||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;yl(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(o,Wc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tg[(r-1)%tg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new zi(this._lodPlanes[r],c),m=c.uniforms,_=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*kr-1),E=s/S,v=isFinite(s)?1+Math.floor(h*E):kr;v>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${kr}`);const f=[];let y=0;for(let b=0;b<kr;++b){const k=b/E,A=Math.exp(-k*k/2);f.push(A),b===0?y+=A:b<v&&(y+=2*A)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:x}=this;m.dTheta.value=S,m.mipInt.value=x-i;const w=this._sizeLods[r],I=3*w*(r>x-Vs?r-x+Vs:0),L=4*(this._cubeSize-w);yl(n,I,L,3*w,2*w),u.setRenderTarget(n),u.render(p,Wc)}}function iA(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+Jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let u=1/a;o>t-Vs?u=Jm[o-t+Vs-1]:o===0&&(u=0),i.push(u);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,S=6,E=3,v=2,f=1,y=new Float32Array(E*S*_),x=new Float32Array(v*S*_),w=new Float32Array(f*S*_);for(let L=0;L<_;L++){const b=L%3*2/3-1,k=L>2?0:-1,A=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];y.set(A,E*S*L),x.set(m,v*S*L);const R=[L,L,L,L,L,L];w.set(R,f*S*L)}const I=new ii;I.setAttribute("position",new Ti(y,E)),I.setAttribute("uv",new Ti(x,v)),I.setAttribute("faceIndex",new Ti(w,f)),e.push(I),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ig(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rA(t,e,n){const i=new Float32Array(kr),r=new W(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function rg(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function sg(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Kf||u===Zf,h=u===oo||u===ao;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new ng(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||h&&p&&r(p)){n===null&&(n=new ng(t));const m=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&u++;return u===c}function s(a){const u=a.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function oA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aA(t,e,n,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const E=m.morphAttributes[S];for(let v=0,f=E.length;v<f;v++)e.remove(E[v])}m.removeEventListener("dispose",o),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,n.memory.geometries++),m}function u(p){const m=p.attributes;for(const S in m)e.update(m[S],t.ARRAY_BUFFER);const _=p.morphAttributes;for(const S in _){const E=_[S];for(let v=0,f=E.length;v<f;v++)e.update(E[v],t.ARRAY_BUFFER)}}function c(p){const m=[],_=p.index,S=p.attributes.position;let E=0;if(_!==null){const y=_.array;E=_.version;for(let x=0,w=y.length;x<w;x+=3){const I=y[x+0],L=y[x+1],b=y[x+2];m.push(I,L,L,b,b,I)}}else if(S!==void 0){const y=S.array;E=S.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const I=x+0,L=x+1,b=x+2;m.push(I,L,L,b,b,I)}}else return;const v=new(p0(m)?S0:x0)(m,1);v.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,v)}function h(p){const m=s.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:u,getWireframeAttribute:h}}function lA(t,e,n,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function h(_,S){t.drawElements(s,S,a,_*u),n.update(S,s,1)}function p(_,S,E){if(E===0)return;let v,f;if(r)v=t,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](s,S,a,_*u,E),n.update(S,s,E)}function m(_,S,E){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<E;f++)this.render(_[f]/u,S[f]);else{v.multiDrawElementsWEBGL(s,S,0,a,_,0,E);let f=0;for(let y=0;y<E;y++)f+=S[y];n.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function uA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cA(t,e){return t[0]-e[0]}function fA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new on,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,h,p){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,E=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==E){let X=function(){fe.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var _=X;v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),w===!0&&(A=2),I===!0&&(A=3);let R=h.attributes.position.count*A,G=1;R>e.maxTextureSize&&(G=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ie=new Float32Array(R*G*4*E),fe=new v0(ie,R,G,E);fe.type=cr,fe.needsUpdate=!0;const B=A*4;for(let te=0;te<E;te++){const se=L[te],z=b[te],j=k[te],Q=R*G*4*te;for(let re=0;re<se.count;re++){const ae=re*B;x===!0&&(o.fromBufferAttribute(se,re),ie[Q+ae+0]=o.x,ie[Q+ae+1]=o.y,ie[Q+ae+2]=o.z,ie[Q+ae+3]=0),w===!0&&(o.fromBufferAttribute(z,re),ie[Q+ae+4]=o.x,ie[Q+ae+5]=o.y,ie[Q+ae+6]=o.z,ie[Q+ae+7]=0),I===!0&&(o.fromBufferAttribute(j,re),ie[Q+ae+8]=o.x,ie[Q+ae+9]=o.y,ie[Q+ae+10]=o.z,ie[Q+ae+11]=j.itemSize===4?o.w:1)}}v={count:E,texture:fe,size:new gt(R,G)},s.set(h,v),h.addEventListener("dispose",X)}let f=0;for(let x=0;x<m.length;x++)f+=m[x];const y=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(t,"morphTargetBaseInfluence",y),p.getUniforms().setValue(t,"morphTargetInfluences",m),p.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const S=m===void 0?0:m.length;let E=i[h.id];if(E===void 0||E.length!==S){E=[];for(let w=0;w<S;w++)E[w]=[w,0];i[h.id]=E}for(let w=0;w<S;w++){const I=E[w];I[0]=w,I[1]=m[w]}E.sort(fA);for(let w=0;w<8;w++)w<S&&E[w][1]?(a[w][0]=E[w][0],a[w][1]=E[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(cA);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const I=a[w],L=I[0],b=I[1];L!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+w)!==v[L]&&h.setAttribute("morphTarget"+w,v[L]),f&&h.getAttribute("morphNormal"+w)!==f[L]&&h.setAttribute("morphNormal"+w,f[L]),r[w]=b,y+=b):(v&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),f&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),r[w]=0)}const x=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(t,"morphTargetBaseInfluence",x),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:u}}function hA(t,e,n,i){let r=new WeakMap;function s(u){const c=i.render.frame,h=u.geometry,p=e.get(u,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class R0 extends Hn{constructor(e,n,i,r,s,o,a,u,c,h){if(h=h!==void 0?h:Xr,h!==Xr&&h!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xr&&(i=ur),i===void 0&&h===lo&&(i=jr),super(null,r,s,o,a,u,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Sn,this.minFilter=u!==void 0?u:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const C0=new Hn,b0=new R0(1,1);b0.compareFunction=h0;const P0=new v0,L0=new KM,D0=new w0,og=[],ag=[],lg=new Float32Array(16),ug=new Float32Array(9),cg=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=og[r];if(s===void 0&&(s=new Float32Array(r),og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=ag[e];n===void 0&&(n=new Int32Array(e),ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function _A(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),Kt(n,i)}}function yA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),Kt(n,i)}}function xA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;lg.set(i),t.uniformMatrix4fv(this.addr,!1,lg),Kt(n,i)}}function SA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function TA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?b0:C0;n.setTexture2D(e||s,r)}function PA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L0,r)}function LA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D0,r)}function DA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P0,r)}function UA(t){switch(t){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return yA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return EA;case 35668:case 35672:return MA;case 35669:case 35673:return wA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return DA}}function NA(t,e){t.uniform1fv(this.addr,e)}function IA(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function FA(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function OA(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function kA(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BA(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zA(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HA(t,e){t.uniform1iv(this.addr,e)}function GA(t,e){t.uniform2iv(this.addr,e)}function VA(t,e){t.uniform3iv(this.addr,e)}function WA(t,e){t.uniform4iv(this.addr,e)}function jA(t,e){t.uniform1uiv(this.addr,e)}function XA(t,e){t.uniform2uiv(this.addr,e)}function YA(t,e){t.uniform3uiv(this.addr,e)}function qA(t,e){t.uniform4uiv(this.addr,e)}function $A(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||C0,s[o])}function KA(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||L0,s[o])}function ZA(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D0,s[o])}function QA(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||P0,s[o])}function JA(t){switch(t){case 5126:return NA;case 35664:return IA;case 35665:return FA;case 35666:return OA;case 35674:return kA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return WA;case 5125:return jA;case 36294:return XA;case 36295:return YA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return QA}}class eR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UA(n.type)}}class tR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JA(n.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function fg(t,e){t.seq.push(e),t.map[e.id]=e}function iR(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),o=qc.lastIndex;let a=s[1];const u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&o+2===r){fg(n,c===void 0?new eR(a,t,e):new tR(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new nR(a),fg(n,p)),n=p}}}class kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rR=37297;let sR=0;function oR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aR(t){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(t);let i;switch(e===n?i="":e===du&&n===fu?i="LinearDisplayP3ToLinearSRGB":e===fu&&n===du&&(i="LinearSRGBToLinearDisplayP3"),t){case Xi:case Uu:return[i,"LinearTransferOETF"];case sn:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+oR(t.getShaderSource(e),o)}else return r}function lR(t,e){const n=aR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uR(t,e){let n;switch(e){case yM:n="Linear";break;case xM:n="Reinhard";break;case SM:n="OptimizedCineon";break;case EM:n="ACESFilmic";break;case wM:n="AgX";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function fR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ws).join(`
`)}function dR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(pR,gR)}const mR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gR(t,e){let n=ot[e];if(n===void 0){const i=mR.get(e);if(i!==void 0)n=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(t){return t.replace(vR,_R)}function _R(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===YE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function xR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function ER(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case vM:e="ENVMAP_BLENDING_MIX";break;case _M:e="ENVMAP_BLENDING_ADD";break}return e}function MR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const u=yR(n),c=xR(n),h=SR(n),p=ER(n),m=MR(n),_=n.isWebGL2?"":cR(n),S=fR(n),E=dR(s),v=r.createProgram();let f,y,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ws).join(`
`),f.length>0&&(f+=`
`),y=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ws).join(`
`),y.length>0&&(y+=`
`)):(f=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),y=[_,vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?ot.tonemapping_pars_fragment:"",n.toneMapping!==xr?uR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,lR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=id(o),o=pg(o,n),o=mg(o,n),a=id(a),a=pg(a,n),a=mg(a,n),o=gg(o),a=gg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=x+f+o,I=x+y+a,L=dg(r,r.VERTEX_SHADER,w),b=dg(r,r.FRAGMENT_SHADER,I);r.attachShader(v,L),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function k(ie){if(t.debug.checkShaderErrors){const fe=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(L).trim(),X=r.getShaderInfoLog(b).trim();let te=!0,se=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,L,b);else{const z=hg(r,L,"vertex"),j=hg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+z+`
`+j)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(B===""||X==="")&&(se=!1);se&&(ie.diagnostics={runnable:te,programLog:fe,vertexShader:{log:B,prefix:f},fragmentShader:{log:X,prefix:y}})}r.deleteShader(L),r.deleteShader(b),A=new kl(r,v),R=hR(r,v)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(v,rR)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=b,this}let TR=0;class AR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RR(e),n.set(e,i)),i}}class RR{constructor(e){this.id=TR++,this.code=e,this.usedTimes=0}}function CR(t,e,n,i,r,s,o){const a=new lh,u=new AR,c=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return A===0?"uv":`uv${A}`}function v(A,R,G,ie,fe){const B=ie.fog,X=fe.geometry,te=A.isMeshStandardMaterial?ie.environment:null,se=(A.isMeshStandardMaterial?n:e).get(A.envMap||te),z=se&&se.mapping===Du?se.image.height:null,j=S[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=Q!==void 0?Q.length:0;let ae=0;X.morphAttributes.position!==void 0&&(ae=1),X.morphAttributes.normal!==void 0&&(ae=2),X.morphAttributes.color!==void 0&&(ae=3);let K,oe,_e,be;if(j){const wt=Si[j];K=wt.vertexShader,oe=wt.fragmentShader}else K=A.vertexShader,oe=A.fragmentShader,u.update(A),_e=u.getVertexShaderID(A),be=u.getFragmentShaderID(A);const Le=t.getRenderTarget(),We=fe.isInstancedMesh===!0,Te=fe.isBatchedMesh===!0,de=!!A.map,Ne=!!A.matcap,V=!!se,Je=!!A.aoMap,Ae=!!A.lightMap,Ye=!!A.bumpMap,Fe=!!A.normalMap,yt=!!A.displacementMap,tt=!!A.emissiveMap,P=!!A.metalnessMap,T=!!A.roughnessMap,Y=A.anisotropy>0,le=A.clearcoat>0,ne=A.iridescence>0,ee=A.sheen>0,ge=A.transmission>0,ue=Y&&!!A.anisotropyMap,we=le&&!!A.clearcoatMap,Pe=le&&!!A.clearcoatNormalMap,Ie=le&&!!A.clearcoatRoughnessMap,ce=ne&&!!A.iridescenceMap,dt=ne&&!!A.iridescenceThicknessMap,it=ee&&!!A.sheenColorMap,He=ee&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Ce=!!A.specularColorMap,Ze=!!A.specularIntensityMap,ct=ge&&!!A.transmissionMap,xt=ge&&!!A.thicknessMap,qe=!!A.gradientMap,ve=!!A.alphaMap,F=A.alphaTest>0,Se=!!A.alphaHash,ye=!!A.extensions,Ve=!!X.attributes.uv1,Oe=!!X.attributes.uv2,ke=!!X.attributes.uv3;let je=xr;return A.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(je=t.toneMapping),{isWebGL2:h,shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:K,fragmentShader:oe,defines:A.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Te,instancing:We,instancingColor:We&&fe.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Xi,map:de,matcap:Ne,envMap:V,envMapMode:V&&se.mapping,envMapCubeUVHeight:z,aoMap:Je,lightMap:Ae,bumpMap:Ye,normalMap:Fe,displacementMap:m&&yt,emissiveMap:tt,normalMapObjectSpace:Fe&&A.normalMapType===FM,normalMapTangentSpace:Fe&&A.normalMapType===d0,metalnessMap:P,roughnessMap:T,anisotropy:Y,anisotropyMap:ue,clearcoat:le,clearcoatMap:we,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ie,iridescence:ne,iridescenceMap:ce,iridescenceThicknessMap:dt,sheen:ee,sheenColorMap:it,sheenRoughnessMap:He,specularMap:Be,specularColorMap:Ce,specularIntensityMap:Ze,transmission:ge,transmissionMap:ct,thicknessMap:xt,gradientMap:qe,opaque:A.transparent===!1&&A.blending===Zs,alphaMap:ve,alphaTest:F,alphaHash:Se,combine:A.combine,mapUv:de&&E(A.map.channel),aoMapUv:Je&&E(A.aoMap.channel),lightMapUv:Ae&&E(A.lightMap.channel),bumpMapUv:Ye&&E(A.bumpMap.channel),normalMapUv:Fe&&E(A.normalMap.channel),displacementMapUv:yt&&E(A.displacementMap.channel),emissiveMapUv:tt&&E(A.emissiveMap.channel),metalnessMapUv:P&&E(A.metalnessMap.channel),roughnessMapUv:T&&E(A.roughnessMap.channel),anisotropyMapUv:ue&&E(A.anisotropyMap.channel),clearcoatMapUv:we&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:it&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(A.sheenRoughnessMap.channel),specularMapUv:Be&&E(A.specularMap.channel),specularColorMapUv:Ce&&E(A.specularColorMap.channel),specularIntensityMapUv:Ze&&E(A.specularIntensityMap.channel),transmissionMapUv:ct&&E(A.transmissionMap.channel),thicknessMapUv:xt&&E(A.thicknessMap.channel),alphaMapUv:ve&&E(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Fe||Y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Oe,vertexUv3s:ke,pointsUvs:fe.isPoints===!0&&!!X.attributes.uv&&(de||ve),fog:!!B,useFog:A.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:fe.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:de&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Pt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===In,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:ye&&A.extensions.derivatives===!0,extensionFragDepth:ye&&A.extensions.fragDepth===!0,extensionDrawBuffers:ye&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&A.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function f(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)R.push(G),R.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(y(R,A),x(R,A),R.push(t.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function y(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function x(A,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),A.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),A.push(a.mask)}function w(A){const R=S[A.type];let G;if(R){const ie=Si[R];G=uw.clone(ie.uniforms)}else G=A.uniforms;return G}function I(A,R){let G;for(let ie=0,fe=c.length;ie<fe;ie++){const B=c[ie];if(B.cacheKey===R){G=B,++G.usedTimes;break}}return G===void 0&&(G=new wR(t,R,A,s),c.push(G)),G}function L(A){if(--A.usedTimes===0){const R=c.indexOf(A);c[R]=c[c.length-1],c.pop(),A.destroy()}}function b(A){u.remove(A)}function k(){u.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:w,acquireProgram:I,releaseProgram:L,releaseShaderCache:b,programs:c,dispose:k}}function bR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function PR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,m,_,S,E,v){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:m,material:_,groupOrder:S,renderOrder:p.renderOrder,z:E,group:v},t[e]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=_,f.groupOrder=S,f.renderOrder=p.renderOrder,f.z=E,f.group=v),e++,f}function a(p,m,_,S,E,v){const f=o(p,m,_,S,E,v);_.transmission>0?i.push(f):_.transparent===!0?r.push(f):n.push(f)}function u(p,m,_,S,E,v){const f=o(p,m,_,S,E,v);_.transmission>0?i.unshift(f):_.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,m){n.length>1&&n.sort(p||PR),i.length>1&&i.sort(m||_g),r.length>1&&r.sort(m||_g)}function h(){for(let p=e,m=t.length;p<m;p++){const _=t[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:u,finish:h,sort:c}}function LR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yg,t.set(i,[o])):r>=s.length?(o=new yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new ft};break;case"SpotLight":n={position:new W,direction:new W,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function UR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NR=0;function IR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FR(t,e){const n=new DR,i=UR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new W);const s=new W,o=new qt,a=new qt;function u(h,p){let m=0,_=0,S=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let E=0,v=0,f=0,y=0,x=0,w=0,I=0,L=0,b=0,k=0,A=0;h.sort(IR);const R=p===!0?Math.PI:1;for(let ie=0,fe=h.length;ie<fe;ie++){const B=h[ie],X=B.color,te=B.intensity,se=B.distance,z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=X.r*te*R,_+=X.g*te*R,S+=X.b*te*R;else if(B.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(B.sh.coefficients[j],te);A++}else if(B.isDirectionalLight){const j=n.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){const Q=B.shadow,re=i.get(B);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,r.directionalShadow[E]=re,r.directionalShadowMap[E]=z,r.directionalShadowMatrix[E]=B.shadow.matrix,w++}r.directional[E]=j,E++}else if(B.isSpotLight){const j=n.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(X).multiplyScalar(te*R),j.distance=se,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,r.spot[f]=j;const Q=B.shadow;if(B.map&&(r.spotLightMap[b]=B.map,b++,Q.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[f]=Q.matrix,B.castShadow){const re=i.get(B);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,r.spotShadow[f]=re,r.spotShadowMap[f]=z,L++}f++}else if(B.isRectAreaLight){const j=n.get(B);j.color.copy(X).multiplyScalar(te),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=j,y++}else if(B.isPointLight){const j=n.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*R),j.distance=B.distance,j.decay=B.decay,B.castShadow){const Q=B.shadow,re=i.get(B);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,r.pointShadow[v]=re,r.pointShadowMap[v]=z,r.pointShadowMatrix[v]=B.shadow.matrix,I++}r.point[v]=j,v++}else if(B.isHemisphereLight){const j=n.get(B);j.skyColor.copy(B.color).multiplyScalar(te*R),j.groundColor.copy(B.groundColor).multiplyScalar(te*R),r.hemi[x]=j,x++}}y>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=S;const G=r.hash;(G.directionalLength!==E||G.pointLength!==v||G.spotLength!==f||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==w||G.numPointShadows!==I||G.numSpotShadows!==L||G.numSpotMaps!==b||G.numLightProbes!==A)&&(r.directional.length=E,r.spot.length=f,r.rectArea.length=y,r.point.length=v,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=L+b-k,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=A,G.directionalLength=E,G.pointLength=v,G.spotLength=f,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=w,G.numPointShadows=I,G.numSpotShadows=L,G.numSpotMaps=b,G.numLightProbes=A,r.version=NR++)}function c(h,p){let m=0,_=0,S=0,E=0,v=0;const f=p.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const w=h[y];if(w.isDirectionalLight){const I=r.directional[m];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),m++}else if(w.isSpotLight){const I=r.spot[S];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),S++}else if(w.isRectAreaLight){const I=r.rectArea[E];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){const I=r.point[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),_++}else if(w.isHemisphereLight){const I=r.hemi[v];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(f),v++}}}return{setup:u,setupView:c,state:r}}function xg(t,e){const n=new FR(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function u(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a}}function OR(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let u;return a===void 0?(u=new xg(t,e),n.set(s,[u])):o>=a.length?(u=new xg(t,e),a.push(u)):u=a[o],u}function r(){n=new WeakMap}return{get:i,dispose:r}}class kR extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BR extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GR(t,e,n){let i=new T0;const r=new gt,s=new gt,o=new on,a=new kR({depthPacking:IM}),u=new BR,c={},h=n.maxTextureSize,p={[wr]:In,[In]:wr,[Fi]:Fi},m=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:zR,fragmentShader:HR}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new ii;S.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new zi(S,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let f=this.type;this.render=function(L,b,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;const A=t.getRenderTarget(),R=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(yr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const fe=f!==Ui&&this.type===Ui,B=f===Ui&&this.type!==Ui;for(let X=0,te=L.length;X<te;X++){const se=L[X],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const j=z.getFrameExtents();if(r.multiply(j),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||fe===!0||B===!0){const re=this.type!==Ui?{minFilter:Sn,magFilter:Sn}:{};z.map!==null&&z.map.dispose(),z.map=new Jr(r.x,r.y,re),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const Q=z.getViewportCount();for(let re=0;re<Q;re++){const ae=z.getViewport(re);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),ie.viewport(o),z.updateMatrices(se,re),i=z.getFrustum(),w(b,k,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&y(z,k),z.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(A,R,G)};function y(L,b){const k=e.update(E);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Jr(r.x,r.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(b,null,k,m,E,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(b,null,k,_,E,null)}function x(L,b,k,A){let R=null;const G=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)R=G;else if(R=k.isPointLight===!0?u:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const ie=R.uuid,fe=b.uuid;let B=c[ie];B===void 0&&(B={},c[ie]=B);let X=B[fe];X===void 0&&(X=R.clone(),B[fe]=X,b.addEventListener("dispose",I)),R=X}if(R.visible=b.visible,R.wireframe=b.wireframe,A===Ui?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:p[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=t.properties.get(R);ie.light=k}return R}function w(L,b,k,A,R){if(L.visible===!1)return;if(L.layers.test(b.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ui)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const fe=e.update(L),B=L.material;if(Array.isArray(B)){const X=fe.groups;for(let te=0,se=X.length;te<se;te++){const z=X[te],j=B[z.materialIndex];if(j&&j.visible){const Q=x(L,j,A,R);L.onBeforeShadow(t,L,b,k,fe,Q,z),t.renderBufferDirect(k,null,fe,Q,L,z),L.onAfterShadow(t,L,b,k,fe,Q,z)}}}else if(B.visible){const X=x(L,B,A,R);L.onBeforeShadow(t,L,b,k,fe,X,null),t.renderBufferDirect(k,null,fe,X,L,null),L.onAfterShadow(t,L,b,k,fe,X,null)}}const ie=L.children;for(let fe=0,B=ie.length;fe<B;fe++)w(ie[fe],b,k,A,R)}function I(L){L.target.removeEventListener("dispose",I);for(const k in c){const A=c[k],R=L.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function VR(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Se=new on;let ye=null;const Ve=new on(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!F&&(t.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){F=Oe},setClear:function(Oe,ke,je,ht,wt){wt===!0&&(Oe*=ht,ke*=ht,je*=ht),Se.set(Oe,ke,je,ht),Ve.equals(Se)===!1&&(t.clearColor(Oe,ke,je,ht),Ve.copy(Se))},reset:function(){F=!1,ye=null,Ve.set(-1,0,0,0)}}}function s(){let F=!1,Se=null,ye=null,Ve=null;return{setTest:function(Oe){Oe?Te(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Oe){Se!==Oe&&!F&&(t.depthMask(Oe),Se=Oe)},setFunc:function(Oe){if(ye!==Oe){switch(Oe){case cM:t.depthFunc(t.NEVER);break;case fM:t.depthFunc(t.ALWAYS);break;case dM:t.depthFunc(t.LESS);break;case uu:t.depthFunc(t.LEQUAL);break;case hM:t.depthFunc(t.EQUAL);break;case pM:t.depthFunc(t.GEQUAL);break;case mM:t.depthFunc(t.GREATER);break;case gM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=Oe}},setLocked:function(Oe){F=Oe},setClear:function(Oe){Ve!==Oe&&(t.clearDepth(Oe),Ve=Oe)},reset:function(){F=!1,Se=null,ye=null,Ve=null}}}function o(){let F=!1,Se=null,ye=null,Ve=null,Oe=null,ke=null,je=null,ht=null,wt=null;return{setTest:function(pt){F||(pt?Te(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(pt){Se!==pt&&!F&&(t.stencilMask(pt),Se=pt)},setFunc:function(pt,Dt,Tn){(ye!==pt||Ve!==Dt||Oe!==Tn)&&(t.stencilFunc(pt,Dt,Tn),ye=pt,Ve=Dt,Oe=Tn)},setOp:function(pt,Dt,Tn){(ke!==pt||je!==Dt||ht!==Tn)&&(t.stencilOp(pt,Dt,Tn),ke=pt,je=Dt,ht=Tn)},setLocked:function(pt){F=pt},setClear:function(pt){wt!==pt&&(t.clearStencil(pt),wt=pt)},reset:function(){F=!1,Se=null,ye=null,Ve=null,Oe=null,ke=null,je=null,ht=null,wt=null}}}const a=new r,u=new s,c=new o,h=new WeakMap,p=new WeakMap;let m={},_={},S=new WeakMap,E=[],v=null,f=!1,y=null,x=null,w=null,I=null,L=null,b=null,k=null,A=new ft(0,0,0),R=0,G=!1,ie=null,fe=null,B=null,X=null,te=null;const se=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=j>=2);let re=null,ae={};const K=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),_e=new on().fromArray(K),be=new on().fromArray(oe);function Le(F,Se,ye,Ve){const Oe=new Uint8Array(4),ke=t.createTexture();t.bindTexture(F,ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<ye;je++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,Ve,0,t.RGBA,t.UNSIGNED_BYTE,Oe):t.texImage2D(Se+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Oe);return ke}const We={};We[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),We[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(We[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),We[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Te(t.DEPTH_TEST),u.setFunc(uu),tt(!1),P(tm),Te(t.CULL_FACE),Fe(yr);function Te(F){m[F]!==!0&&(t.enable(F),m[F]=!0)}function de(F){m[F]!==!1&&(t.disable(F),m[F]=!1)}function Ne(F,Se){return _[F]!==Se?(t.bindFramebuffer(F,Se),_[F]=Se,i&&(F===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=Se),F===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function V(F,Se){let ye=E,Ve=!1;if(F)if(ye=S.get(Se),ye===void 0&&(ye=[],S.set(Se,ye)),F.isWebGLMultipleRenderTargets){const Oe=F.texture;if(ye.length!==Oe.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,je=Oe.length;ke<je;ke++)ye[ke]=t.COLOR_ATTACHMENT0+ke;ye.length=Oe.length,Ve=!0}}else ye[0]!==t.COLOR_ATTACHMENT0&&(ye[0]=t.COLOR_ATTACHMENT0,Ve=!0);else ye[0]!==t.BACK&&(ye[0]=t.BACK,Ve=!0);Ve&&(n.isWebGL2?t.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Je(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const Ae={[Or]:t.FUNC_ADD,[$E]:t.FUNC_SUBTRACT,[KE]:t.FUNC_REVERSE_SUBTRACT};if(i)Ae[sm]=t.MIN,Ae[om]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ae[sm]=F.MIN_EXT,Ae[om]=F.MAX_EXT)}const Ye={[ZE]:t.ZERO,[QE]:t.ONE,[JE]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[sM]:t.SRC_ALPHA_SATURATE,[iM]:t.DST_COLOR,[tM]:t.DST_ALPHA,[eM]:t.ONE_MINUS_SRC_COLOR,[$f]:t.ONE_MINUS_SRC_ALPHA,[rM]:t.ONE_MINUS_DST_COLOR,[nM]:t.ONE_MINUS_DST_ALPHA,[oM]:t.CONSTANT_COLOR,[aM]:t.ONE_MINUS_CONSTANT_COLOR,[lM]:t.CONSTANT_ALPHA,[uM]:t.ONE_MINUS_CONSTANT_ALPHA};function Fe(F,Se,ye,Ve,Oe,ke,je,ht,wt,pt){if(F===yr){f===!0&&(de(t.BLEND),f=!1);return}if(f===!1&&(Te(t.BLEND),f=!0),F!==qE){if(F!==y||pt!==G){if((x!==Or||L!==Or)&&(t.blendEquation(t.FUNC_ADD),x=Or,L=Or),pt)switch(F){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFunc(t.ONE,t.ONE);break;case im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,I=null,b=null,k=null,A.set(0,0,0),R=0,y=F,G=pt}return}Oe=Oe||Se,ke=ke||ye,je=je||Ve,(Se!==x||Oe!==L)&&(t.blendEquationSeparate(Ae[Se],Ae[Oe]),x=Se,L=Oe),(ye!==w||Ve!==I||ke!==b||je!==k)&&(t.blendFuncSeparate(Ye[ye],Ye[Ve],Ye[ke],Ye[je]),w=ye,I=Ve,b=ke,k=je),(ht.equals(A)===!1||wt!==R)&&(t.blendColor(ht.r,ht.g,ht.b,wt),A.copy(ht),R=wt),y=F,G=!1}function yt(F,Se){F.side===Fi?de(t.CULL_FACE):Te(t.CULL_FACE);let ye=F.side===In;Se&&(ye=!ye),tt(ye),F.blending===Zs&&F.transparent===!1?Fe(yr):Fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ve=F.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){ie!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),ie=F)}function P(F){F!==jE?(Te(t.CULL_FACE),F!==fe&&(F===tm?t.cullFace(t.BACK):F===XE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),fe=F}function T(F){F!==B&&(z&&t.lineWidth(F),B=F)}function Y(F,Se,ye){F?(Te(t.POLYGON_OFFSET_FILL),(X!==Se||te!==ye)&&(t.polygonOffset(Se,ye),X=Se,te=ye)):de(t.POLYGON_OFFSET_FILL)}function le(F){F?Te(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function ne(F){F===void 0&&(F=t.TEXTURE0+se-1),re!==F&&(t.activeTexture(F),re=F)}function ee(F,Se,ye){ye===void 0&&(re===null?ye=t.TEXTURE0+se-1:ye=re);let Ve=ae[ye];Ve===void 0&&(Ve={type:void 0,texture:void 0},ae[ye]=Ve),(Ve.type!==F||Ve.texture!==Se)&&(re!==ye&&(t.activeTexture(ye),re=ye),t.bindTexture(F,Se||We[F]),Ve.type=F,Ve.texture=Se)}function ge(){const F=ae[re];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(F){_e.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),_e.copy(F))}function ct(F){be.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),be.copy(F))}function xt(F,Se){let ye=p.get(Se);ye===void 0&&(ye=new WeakMap,p.set(Se,ye));let Ve=ye.get(F);Ve===void 0&&(Ve=t.getUniformBlockIndex(Se,F.name),ye.set(F,Ve))}function qe(F,Se){const Ve=p.get(Se).get(F);h.get(Se)!==Ve&&(t.uniformBlockBinding(Se,Ve,F.__bindingPointIndex),h.set(Se,Ve))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},re=null,ae={},_={},S=new WeakMap,E=[],v=null,f=!1,y=null,x=null,w=null,I=null,L=null,b=null,k=null,A=new ft(0,0,0),R=0,G=!1,ie=null,fe=null,B=null,X=null,te=null,_e.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Te,disable:de,bindFramebuffer:Ne,drawBuffers:V,useProgram:Je,setBlending:Fe,setMaterial:yt,setFlipSided:tt,setCullFace:P,setLineWidth:T,setPolygonOffset:Y,setScissorTest:le,activeTexture:ne,bindTexture:ee,unbindTexture:ge,compressedTexImage2D:ue,compressedTexImage3D:we,texImage2D:Be,texImage3D:Ce,updateUBOMapping:xt,uniformBlockBinding:qe,texStorage2D:it,texStorage3D:He,texSubImage2D:Pe,texSubImage3D:Ie,compressedTexSubImage2D:ce,compressedTexSubImage3D:dt,scissor:Ze,viewport:ct,reset:ve}}function WR(t,e,n,i,r,s,o){const a=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,T){return _?new OffscreenCanvas(P,T):pu("canvas")}function E(P,T,Y,le){let ne=1;if((P.width>le||P.height>le)&&(ne=le/Math.max(P.width,P.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ee=T?nd:Math.floor,ge=ee(ne*P.width),ue=ee(ne*P.height);p===void 0&&(p=S(ge,ue));const we=Y?S(ge,ue):p;return we.width=ge,we.height=ue,we.getContext("2d").drawImage(P,0,0,ge,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ge+"x"+ue+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return Fm(P.width)&&Fm(P.height)}function f(P){return a?!1:P.wrapS!==hi||P.wrapT!==hi||P.minFilter!==Sn&&P.minFilter!==$n}function y(P,T){return P.generateMipmaps&&T&&P.minFilter!==Sn&&P.minFilter!==$n}function x(P){t.generateMipmap(P)}function w(P,T,Y,le,ne=!1){if(a===!1)return T;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=T;if(T===t.RED&&(Y===t.FLOAT&&(ee=t.R32F),Y===t.HALF_FLOAT&&(ee=t.R16F),Y===t.UNSIGNED_BYTE&&(ee=t.R8)),T===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ee=t.R8UI),Y===t.UNSIGNED_SHORT&&(ee=t.R16UI),Y===t.UNSIGNED_INT&&(ee=t.R32UI),Y===t.BYTE&&(ee=t.R8I),Y===t.SHORT&&(ee=t.R16I),Y===t.INT&&(ee=t.R32I)),T===t.RG&&(Y===t.FLOAT&&(ee=t.RG32F),Y===t.HALF_FLOAT&&(ee=t.RG16F),Y===t.UNSIGNED_BYTE&&(ee=t.RG8)),T===t.RGBA){const ge=ne?cu:Mt.getTransfer(le);Y===t.FLOAT&&(ee=t.RGBA32F),Y===t.HALF_FLOAT&&(ee=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ee=ge===Pt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(P,T,Y){return y(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){return P===Sn||P===am||P===yc?t.NEAREST:t.LINEAR}function b(P){const T=P.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&h.delete(T)}function k(P){const T=P.target;T.removeEventListener("dispose",k),G(T)}function A(P){const T=i.get(P);if(T.__webglInit===void 0)return;const Y=P.source,le=m.get(Y);if(le){const ne=le[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(le).length===0&&m.delete(Y)}i.remove(P)}function R(P){const T=i.get(P);t.deleteTexture(T.__webglTexture);const Y=P.source,le=m.get(Y);delete le[T.__cacheKey],o.memory.textures--}function G(P){const T=P.texture,Y=i.get(P),le=i.get(T);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(Y.__webglFramebuffer[ne]))for(let ee=0;ee<Y.__webglFramebuffer[ne].length;ee++)t.deleteFramebuffer(Y.__webglFramebuffer[ne][ee]);else t.deleteFramebuffer(Y.__webglFramebuffer[ne]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[ne])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ne=0;ne<Y.__webglFramebuffer.length;ne++)t.deleteFramebuffer(Y.__webglFramebuffer[ne]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,ee=T.length;ne<ee;ne++){const ge=i.get(T[ne]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(T[ne])}i.remove(T),i.remove(P)}let ie=0;function fe(){ie=0}function B(){const P=ie;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),ie+=1,P}function X(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function te(P,T){const Y=i.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Y,P,T);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+T)}function se(P,T){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){_e(Y,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+T)}function z(P,T){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){_e(Y,P,T);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+T)}function j(P,T){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){be(Y,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+T)}const Q={[Qf]:t.REPEAT,[hi]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},re={[Sn]:t.NEAREST,[am]:t.NEAREST_MIPMAP_NEAREST,[yc]:t.NEAREST_MIPMAP_LINEAR,[$n]:t.LINEAR,[TM]:t.LINEAR_MIPMAP_NEAREST,[ma]:t.LINEAR_MIPMAP_LINEAR},ae={[OM]:t.NEVER,[VM]:t.ALWAYS,[kM]:t.LESS,[h0]:t.LEQUAL,[BM]:t.EQUAL,[GM]:t.GEQUAL,[zM]:t.GREATER,[HM]:t.NOTEQUAL};function K(P,T,Y){if(Y?(t.texParameteri(P,t.TEXTURE_WRAP_S,Q[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Q[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Q[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,re[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,re[T.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==hi||T.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,L(T.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,L(T.minFilter)),T.minFilter!==Sn&&T.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Sn||T.minFilter!==yc&&T.minFilter!==ma||T.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function oe(P,T){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",b));const le=T.source;let ne=m.get(le);ne===void 0&&(ne={},m.set(le,ne));const ee=X(T);if(ee!==P.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[ee].usedTimes++;const ge=ne[P.__cacheKey];ge!==void 0&&(ne[P.__cacheKey].usedTimes--,ge.usedTimes===0&&R(T)),P.__cacheKey=ee,P.__webglTexture=ne[ee].texture}return Y}function _e(P,T,Y){let le=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=t.TEXTURE_3D);const ne=oe(P,T),ee=T.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+Y);const ge=i.get(ee);if(ee.version!==ge.__version||ne===!0){n.activeTexture(t.TEXTURE0+Y);const ue=Mt.getPrimaries(Mt.workingColorSpace),we=T.colorSpace===Zn?null:Mt.getPrimaries(T.colorSpace),Pe=T.colorSpace===Zn||ue===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=f(T)&&v(T.image)===!1;let ce=E(T.image,Ie,!1,r.maxTextureSize);ce=tt(T,ce);const dt=v(ce)||a,it=s.convert(T.format,T.colorSpace);let He=s.convert(T.type),Be=w(T.internalFormat,it,He,T.colorSpace,T.isVideoTexture);K(le,T,dt);let Ce;const Ze=T.mipmaps,ct=a&&T.isVideoTexture!==!0&&Be!==c0,xt=ge.__version===void 0||ne===!0,qe=I(T,ce,dt);if(T.isDepthTexture)Be=t.DEPTH_COMPONENT,a?T.type===cr?Be=t.DEPTH_COMPONENT32F:T.type===ur?Be=t.DEPTH_COMPONENT24:T.type===jr?Be=t.DEPTH24_STENCIL8:Be=t.DEPTH_COMPONENT16:T.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Xr&&Be===t.DEPTH_COMPONENT&&T.type!==oh&&T.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ur,He=s.convert(T.type)),T.format===lo&&Be===t.DEPTH_COMPONENT&&(Be=t.DEPTH_STENCIL,T.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=jr,He=s.convert(T.type))),xt&&(ct?n.texStorage2D(t.TEXTURE_2D,1,Be,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Be,ce.width,ce.height,0,it,He,null));else if(T.isDataTexture)if(Ze.length>0&&dt){ct&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,Be,Ze[0].width,Ze[0].height);for(let ve=0,F=Ze.length;ve<F;ve++)Ce=Ze[ve],ct?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,it,He,Ce.data):n.texImage2D(t.TEXTURE_2D,ve,Be,Ce.width,Ce.height,0,it,He,Ce.data);T.generateMipmaps=!1}else ct?(xt&&n.texStorage2D(t.TEXTURE_2D,qe,Be,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,it,He,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Be,ce.width,ce.height,0,it,He,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Be,Ze[0].width,Ze[0].height,ce.depth);for(let ve=0,F=Ze.length;ve<F;ve++)Ce=Ze[ve],T.format!==pi?it!==null?ct?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ce.depth,it,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Be,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ce.depth,it,He,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Be,Ce.width,Ce.height,ce.depth,0,it,He,Ce.data)}else{ct&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,Be,Ze[0].width,Ze[0].height);for(let ve=0,F=Ze.length;ve<F;ve++)Ce=Ze[ve],T.format!==pi?it!==null?ct?n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,it,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,it,He,Ce.data):n.texImage2D(t.TEXTURE_2D,ve,Be,Ce.width,Ce.height,0,it,He,Ce.data)}else if(T.isDataArrayTexture)ct?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Be,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,it,He,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,it,He,ce.data);else if(T.isData3DTexture)ct?(xt&&n.texStorage3D(t.TEXTURE_3D,qe,Be,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,it,He,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,it,He,ce.data);else if(T.isFramebufferTexture){if(xt)if(ct)n.texStorage2D(t.TEXTURE_2D,qe,Be,ce.width,ce.height);else{let ve=ce.width,F=ce.height;for(let Se=0;Se<qe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Be,ve,F,0,it,He,null),ve>>=1,F>>=1}}else if(Ze.length>0&&dt){ct&&xt&&n.texStorage2D(t.TEXTURE_2D,qe,Be,Ze[0].width,Ze[0].height);for(let ve=0,F=Ze.length;ve<F;ve++)Ce=Ze[ve],ct?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,it,He,Ce):n.texImage2D(t.TEXTURE_2D,ve,Be,it,He,Ce);T.generateMipmaps=!1}else ct?(xt&&n.texStorage2D(t.TEXTURE_2D,qe,Be,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,it,He,ce)):n.texImage2D(t.TEXTURE_2D,0,Be,it,He,ce);y(T,dt)&&x(le),ge.__version=ee.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function be(P,T,Y){if(T.image.length!==6)return;const le=oe(P,T),ne=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+Y);const ee=i.get(ne);if(ne.version!==ee.__version||le===!0){n.activeTexture(t.TEXTURE0+Y);const ge=Mt.getPrimaries(Mt.workingColorSpace),ue=T.colorSpace===Zn?null:Mt.getPrimaries(T.colorSpace),we=T.colorSpace===Zn||ge===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ie=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)!Pe&&!Ie?ce[ve]=E(T.image[ve],!1,!0,r.maxCubemapSize):ce[ve]=Ie?T.image[ve].image:T.image[ve],ce[ve]=tt(T,ce[ve]);const dt=ce[0],it=v(dt)||a,He=s.convert(T.format,T.colorSpace),Be=s.convert(T.type),Ce=w(T.internalFormat,He,Be,T.colorSpace),Ze=a&&T.isVideoTexture!==!0,ct=ee.__version===void 0||le===!0;let xt=I(T,dt,it);K(t.TEXTURE_CUBE_MAP,T,it);let qe;if(Pe){Ze&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,Ce,dt.width,dt.height);for(let ve=0;ve<6;ve++){qe=ce[ve].mipmaps;for(let F=0;F<qe.length;F++){const Se=qe[F];T.format!==pi?He!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Se.width,Se.height,He,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Se.width,Se.height,He,Be,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Ce,Se.width,Se.height,0,He,Be,Se.data)}}}else{qe=T.mipmaps,Ze&&ct&&(qe.length>0&&xt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,xt,Ce,ce[0].width,ce[0].height));for(let ve=0;ve<6;ve++)if(Ie){Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,He,Be,ce[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ce,ce[ve].width,ce[ve].height,0,He,Be,ce[ve].data);for(let F=0;F<qe.length;F++){const ye=qe[F].image[ve].image;Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,ye.width,ye.height,He,Be,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Ce,ye.width,ye.height,0,He,Be,ye.data)}}else{Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He,Be,ce[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ce,He,Be,ce[ve]);for(let F=0;F<qe.length;F++){const Se=qe[F];Ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,He,Be,Se.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Ce,He,Be,Se.image[ve])}}}y(T,it)&&x(t.TEXTURE_CUBE_MAP),ee.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Le(P,T,Y,le,ne,ee){const ge=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),we=w(Y.internalFormat,ge,ue,Y.colorSpace);if(!i.get(T).__hasExternalTextures){const Ie=Math.max(1,T.width>>ee),ce=Math.max(1,T.height>>ee);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ee,we,Ie,ce,T.depth,0,ge,ue,null):n.texImage2D(ne,ee,we,Ie,ce,0,ge,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Fe(T)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ne,i.get(Y).__webglTexture,0,Ye(T)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,ne,i.get(Y).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(P,T,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Fe(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===cr?le=t.DEPTH_COMPONENT32F:ne.type===ur&&(le=t.DEPTH_COMPONENT24));const ee=Ye(T);Fe(T)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,le,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,le,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const le=Ye(T);Y&&Fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):Fe(T)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const le=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<le.length;ne++){const ee=le[ne],ge=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),we=w(ee.internalFormat,ge,ue,ee.colorSpace),Pe=Ye(T);Y&&Fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,we,T.width,T.height):Fe(T)?u.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,we,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,we,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);const le=i.get(T.depthTexture).__webglTexture,ne=Ye(T);if(T.depthTexture.format===Xr)Fe(T)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(T.depthTexture.format===lo)Fe(T)?u.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function de(P){const T=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,P)}else if(Y){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=t.createRenderbuffer(),We(T.__webglDepthbuffer[le],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),We(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,T,Y){const le=i.get(P);T!==void 0&&Le(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&de(P)}function V(P){const T=P.texture,Y=i.get(P),le=i.get(T);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=T.version,o.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,ee=P.isWebGLMultipleRenderTargets===!0,ge=v(P)||a;if(ne){Y.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[ue]=[];for(let we=0;we<T.mipmaps.length;we++)Y.__webglFramebuffer[ue][we]=t.createFramebuffer()}else Y.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)Y.__webglFramebuffer[ue]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ee)if(r.drawBuffers){const ue=P.texture;for(let we=0,Pe=ue.length;we<Pe;we++){const Ie=i.get(ue[we]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Fe(P)===!1){const ue=ee?T:[T];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<ue.length;we++){const Pe=ue[we];Y.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const Ie=s.convert(Pe.format,Pe.colorSpace),ce=s.convert(Pe.type),dt=w(Pe.internalFormat,Ie,ce,Pe.colorSpace,P.isXRRenderTarget===!0),it=Ye(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,dt,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),We(Y.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),K(t.TEXTURE_CUBE_MAP,T,ge);for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)Le(Y.__webglFramebuffer[ue][we],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we);else Le(Y.__webglFramebuffer[ue],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);y(T,ge)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){const ue=P.texture;for(let we=0,Pe=ue.length;we<Pe;we++){const Ie=ue[we],ce=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),K(t.TEXTURE_2D,Ie,ge),Le(Y.__webglFramebuffer,P,Ie,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),y(Ie,ge)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,le.__webglTexture),K(ue,T,ge),a&&T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)Le(Y.__webglFramebuffer[we],P,T,t.COLOR_ATTACHMENT0,ue,we);else Le(Y.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ue,0);y(T,ge)&&x(ue),n.unbindTexture()}P.depthBuffer&&de(P)}function Je(P){const T=v(P)||a,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,ne=Y.length;le<ne;le++){const ee=Y[le];if(y(ee,T)){const ge=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ee).__webglTexture;n.bindTexture(ge,ue),x(ge),n.unbindTexture()}}}function Ae(P){if(a&&P.samples>0&&Fe(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,le=P.height;let ne=t.COLOR_BUFFER_BIT;const ee=[],ge=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(P),we=P.isWebGLMultipleRenderTargets===!0;if(we)for(let Pe=0;Pe<T.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){ee.push(t.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&ee.push(ge);const Ie=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ie===!1&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),we){const ce=i.get(T[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,Y,le,0,0,Y,le,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let Pe=0;Pe<T.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Pe]);const Ie=i.get(T[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ye(P){return Math.min(r.maxSamples,P.samples)}function Fe(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function tt(P,T){const Y=P.colorSpace,le=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ed||Y!==Xi&&Y!==Zn&&(Mt.getTransfer(Y)===Pt?a===!1?e.has("EXT_sRGB")===!0&&le===pi?(P.format=ed,P.minFilter=$n,P.generateMipmaps=!1):T=m0.sRGBToLinear(T):(le!==pi||ne!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=B,this.resetTextureUnits=fe,this.setTexture2D=te,this.setTexture2DArray=se,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=Ne,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Fe}function jR(t,e,n){const i=n.isWebGL2;function r(s,o=Zn){let a;const u=Mt.getTransfer(o);if(s===Sr)return t.UNSIGNED_BYTE;if(s===s0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===o0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===AM)return t.BYTE;if(s===RM)return t.SHORT;if(s===oh)return t.UNSIGNED_SHORT;if(s===r0)return t.INT;if(s===ur)return t.UNSIGNED_INT;if(s===cr)return t.FLOAT;if(s===ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===CM)return t.ALPHA;if(s===pi)return t.RGBA;if(s===bM)return t.LUMINANCE;if(s===PM)return t.LUMINANCE_ALPHA;if(s===Xr)return t.DEPTH_COMPONENT;if(s===lo)return t.DEPTH_STENCIL;if(s===ed)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LM)return t.RED;if(s===a0)return t.RED_INTEGER;if(s===DM)return t.RG;if(s===l0)return t.RG_INTEGER;if(s===u0)return t.RGBA_INTEGER;if(s===xc||s===Sc||s===Ec||s===Mc)if(u===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lm||s===um||s===cm||s===fm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===lm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===um)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===c0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dm||s===hm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dm)return u===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pm||s===mm||s===gm||s===vm||s===_m||s===ym||s===xm||s===Sm||s===Em||s===Mm||s===wm||s===Tm||s===Am||s===Rm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_m)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ym)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Em)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Am)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rm)return u===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===Cm||s===bm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wc)return u===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===UM||s===Pm||s===Lm||s===Dm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Pm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class XR extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YR={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const v=n.getJointPose(E,i),f=this._getHandJoint(c,E);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),_=.02,S=.005;c.inputState.pinching&&m>_+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=_-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YR)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class qR extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",u=1,c=null,h=null,p=null,m=null,_=null,S=null;const E=n.getContextAttributes();let v=null,f=null;const y=[],x=[],w=new gt;let I=null;const L=new Kn;L.layers.enable(1),L.viewport=new on;const b=new Kn;b.layers.enable(2),b.viewport=new on;const k=[L,b],A=new XR;A.layers.enable(1),A.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=y[K];return oe===void 0&&(oe=new $c,y[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=y[K];return oe===void 0&&(oe=new $c,y[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=y[K];return oe===void 0&&(oe=new $c,y[K]=oe),oe.getHandSpace()};function ie(K){const oe=x.indexOf(K.inputSource);if(oe===-1)return;const _e=y[oe];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",B);for(let K=0;K<y.length;K++){const oe=x[K];oe!==null&&(x[K]=null,y[K].disconnect(oe))}R=null,G=null,e.setRenderTarget(v),_=null,m=null,p=null,r=null,f=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),f=new Jr(_.framebufferWidth,_.framebufferHeight,{format:pi,type:Sr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let oe=null,_e=null,be=null;E.depth&&(be=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=E.stencil?lo:Xr,_e=E.stencil?jr:ur);const Le={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};p=new XRWebGLBinding(r,n),m=p.createProjectionLayer(Le),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),f=new Jr(m.textureWidth,m.textureHeight,{format:pi,type:Sr,depthTexture:new R0(m.textureWidth,m.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const We=e.properties.get(f);We.__ignoreDepthValues=m.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(K){for(let oe=0;oe<K.removed.length;oe++){const _e=K.removed[oe],be=x.indexOf(_e);be>=0&&(x[be]=null,y[be].disconnect(_e))}for(let oe=0;oe<K.added.length;oe++){const _e=K.added[oe];let be=x.indexOf(_e);if(be===-1){for(let We=0;We<y.length;We++)if(We>=x.length){x.push(_e),be=We;break}else if(x[We]===null){x[We]=_e,be=We;break}if(be===-1)break}const Le=y[be];Le&&Le.connect(_e)}}const X=new W,te=new W;function se(K,oe,_e){X.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const be=X.distanceTo(te),Le=oe.projectionMatrix.elements,We=_e.projectionMatrix.elements,Te=Le[14]/(Le[10]-1),de=Le[14]/(Le[10]+1),Ne=(Le[9]+1)/Le[5],V=(Le[9]-1)/Le[5],Je=(Le[8]-1)/Le[0],Ae=(We[8]+1)/We[0],Ye=Te*Je,Fe=Te*Ae,yt=be/(-Je+Ae),tt=yt*-Je;oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(yt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const P=Te+yt,T=de+yt,Y=Ye-tt,le=Fe+(be-tt),ne=Ne*de/T*P,ee=V*de/T*P;K.projectionMatrix.makePerspective(Y,le,ne,ee,P,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function z(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;A.near=b.near=L.near=K.near,A.far=b.far=L.far=K.far,(R!==A.near||G!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,G=A.far);const oe=K.parent,_e=A.cameras;z(A,oe);for(let be=0;be<_e.length;be++)z(_e[be],oe);_e.length===2?se(A,L,b):A.projectionMatrix.copy(L.projectionMatrix),j(K,A,oe)};function j(K,oe,_e){_e===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=td*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&_===null))return u},this.setFoveation=function(K){u=K,m!==null&&(m.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)};let Q=null;function re(K,oe){if(h=oe.getViewerPose(c||o),S=oe,h!==null){const _e=h.views;_!==null&&(e.setRenderTargetFramebuffer(f,_.framebuffer),e.setRenderTarget(f));let be=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let Le=0;Le<_e.length;Le++){const We=_e[Le];let Te=null;if(_!==null)Te=_.getViewport(We);else{const Ne=p.getViewSubImage(m,We);Te=Ne.viewport,Le===0&&(e.setRenderTargetTextures(f,Ne.colorTexture,m.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(f))}let de=k[Le];de===void 0&&(de=new Kn,de.layers.enable(Le),de.viewport=new on,k[Le]=de),de.matrix.fromArray(We.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(We.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Te.x,Te.y,Te.width,Te.height),Le===0&&(A.matrix.copy(de.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(de)}}for(let _e=0;_e<y.length;_e++){const be=x[_e],Le=y[_e];be!==null&&Le!==void 0&&Le.update(be,oe,c||o)}Q&&Q(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),S=null}const ae=new A0;ae.setAnimationLoop(re),this.setAnimationLoop=function(K){Q=K},this.dispose=function(){}}}function $R(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,E0(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,y,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(v,f):f.isMeshToonMaterial?(s(v,f),p(v,f)):f.isMeshPhongMaterial?(s(v,f),h(v,f)):f.isMeshStandardMaterial?(s(v,f),m(v,f),f.isMeshPhysicalMaterial&&_(v,f,w)):f.isMeshMatcapMaterial?(s(v,f),S(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),E(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?u(v,f,y,x):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===In&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===In&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*x,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function u(v,f,y,x){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*y,v.scale.value=x*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function p(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function m(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function _(v,f,y){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===In&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,f){f.matcap&&(v.matcap.value=f.matcap)}function E(v,f){const y=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KR(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(y,x){const w=x.program;i.uniformBlockBinding(y,w)}function c(y,x){let w=r[y.id];w===void 0&&(S(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",v));const I=x.program;i.updateUBOMapping(y,I);const L=e.render.frame;s[y.id]!==L&&(m(y),s[y.id]=L)}function h(y){const x=p();y.__bindingPointIndex=x;const w=t.createBuffer(),I=y.__size,L=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,I,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const x=r[y.id],w=y.uniforms,I=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let L=0,b=w.length;L<b;L++){const k=Array.isArray(w[L])?w[L]:[w[L]];for(let A=0,R=k.length;A<R;A++){const G=k[A];if(_(G,L,A,I)===!0){const ie=G.__offset,fe=Array.isArray(G.value)?G.value:[G.value];let B=0;for(let X=0;X<fe.length;X++){const te=fe[X],se=E(te);typeof te=="number"||typeof te=="boolean"?(G.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,ie+B,G.__data)):te.isMatrix3?(G.__data[0]=te.elements[0],G.__data[1]=te.elements[1],G.__data[2]=te.elements[2],G.__data[3]=0,G.__data[4]=te.elements[3],G.__data[5]=te.elements[4],G.__data[6]=te.elements[5],G.__data[7]=0,G.__data[8]=te.elements[6],G.__data[9]=te.elements[7],G.__data[10]=te.elements[8],G.__data[11]=0):(te.toArray(G.__data,B),B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ie,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(y,x,w,I){const L=y.value,b=x+"_"+w;if(I[b]===void 0)return typeof L=="number"||typeof L=="boolean"?I[b]=L:I[b]=L.clone(),!0;{const k=I[b];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return I[b]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function S(y){const x=y.uniforms;let w=0;const I=16;for(let b=0,k=x.length;b<k;b++){const A=Array.isArray(x[b])?x[b]:[x[b]];for(let R=0,G=A.length;R<G;R++){const ie=A[R],fe=Array.isArray(ie.value)?ie.value:[ie.value];for(let B=0,X=fe.length;B<X;B++){const te=fe[B],se=E(te),z=w%I;z!==0&&I-z<se.boundary&&(w+=I-z),ie.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=w,w+=se.storage}}}const L=w%I;return L>0&&(w+=I-L),y.__size=w,y.__cache={},this}function E(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function v(y){const x=y.target;x.removeEventListener("dispose",v);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:u,update:c,dispose:f}}class U0{constructor(e={}){const{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=o;const _=new Uint32Array(4),S=new Int32Array(4);let E=null,v=null;const f=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const x=this;let w=!1,I=0,L=0,b=null,k=-1,A=null;const R=new on,G=new on;let ie=null;const fe=new ft(0);let B=0,X=n.width,te=n.height,se=1,z=null,j=null;const Q=new on(0,0,X,te),re=new on(0,0,X,te);let ae=!1;const K=new T0;let oe=!1,_e=!1,be=null;const Le=new qt,We=new gt,Te=new W,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?se:1}let V=i;function Je(C,H){for(let Z=0;Z<C.length;Z++){const J=C[Z],$=n.getContext(J,H);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Se,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),V=Je(H,C),V===null)throw Je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Ye,Fe,yt,tt,P,T,Y,le,ne,ee,ge,ue,we,Pe,Ie,ce,dt,it,He,Be,Ce,Ze,ct;function xt(){Ae=new oA(V),Ye=new JT(V,Ae,e),Ae.init(Ye),Ce=new jR(V,Ae,Ye),Fe=new VR(V,Ae,Ye),yt=new uA(V),tt=new bR,P=new WR(V,Ae,Fe,tt,Ye,Ce,yt),T=new tA(x),Y=new sA(x),le=new gw(V,Ye),Ze=new ZT(V,Ae,le,Ye),ne=new aA(V,le,yt,Ze),ee=new hA(V,ne,le,yt),it=new dA(V,Ye,P),Ie=new eA(tt),ge=new CR(x,T,Y,Ae,Ye,Ze,Ie),ue=new $R(x,tt),we=new LR,Pe=new OR(Ae,Ye),dt=new KT(x,T,Y,Fe,ee,m,u),ce=new GR(x,ee,Ye),ct=new KR(V,yt,Ye,Fe),He=new QT(V,Ae,yt,Ye),Be=new lA(V,Ae,yt,Ye),yt.programs=ge.programs,x.capabilities=Ye,x.extensions=Ae,x.properties=tt,x.renderLists=we,x.shadowMap=ce,x.state=Fe,x.info=yt}xt();const qe=new qR(x,V);this.xr=qe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(X,te,!1))},this.getSize=function(C){return C.set(X,te)},this.setSize=function(C,H,Z=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,te=H,n.width=Math.floor(C*se),n.height=Math.floor(H*se),Z===!0&&(n.style.width=C+"px",n.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(X*se,te*se).floor()},this.setDrawingBufferSize=function(C,H,Z){X=C,te=H,se=Z,n.width=Math.floor(C*Z),n.height=Math.floor(H*Z),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,H,Z,J){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,H,Z,J),Fe.viewport(R.copy(Q).multiplyScalar(se).floor())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,H,Z,J){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,H,Z,J),Fe.scissor(G.copy(re).multiplyScalar(se).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){Fe.setScissorTest(ae=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(C=!0,H=!0,Z=!0){let J=0;if(C){let $=!1;if(b!==null){const Ee=b.texture.format;$=Ee===u0||Ee===l0||Ee===a0}if($){const Ee=b.texture.type,De=Ee===Sr||Ee===ur||Ee===oh||Ee===jr||Ee===s0||Ee===o0,Ge=dt.getClearColor(),Xe=dt.getClearAlpha(),rt=Ge.r,nt=Ge.g,et=Ge.b;De?(_[0]=rt,_[1]=nt,_[2]=et,_[3]=Xe,V.clearBufferuiv(V.COLOR,0,_)):(S[0]=rt,S[1]=nt,S[2]=et,S[3]=Xe,V.clearBufferiv(V.COLOR,0,S))}else J|=V.COLOR_BUFFER_BIT}H&&(J|=V.DEPTH_BUFFER_BIT),Z&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),we.dispose(),Pe.dispose(),tt.dispose(),T.dispose(),Y.dispose(),ee.dispose(),Ze.dispose(),ct.dispose(),ge.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",wt),qe.removeEventListener("sessionend",pt),be&&(be.dispose(),be=null),Dt.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=yt.autoReset,H=ce.enabled,Z=ce.autoUpdate,J=ce.needsUpdate,$=ce.type;xt(),yt.autoReset=C,ce.enabled=H,ce.autoUpdate=Z,ce.needsUpdate=J,ce.type=$}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ye(C){const H=C.target;H.removeEventListener("dispose",ye),Ve(H)}function Ve(C){Oe(C),tt.remove(C)}function Oe(C){const H=tt.get(C).programs;H!==void 0&&(H.forEach(function(Z){ge.releaseProgram(Z)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,Z,J,$,Ee){H===null&&(H=de);const De=$.isMesh&&$.matrixWorld.determinant()<0,Ge=os(C,H,Z,J,$);Fe.setMaterial(J,De);let Xe=Z.index,rt=1;if(J.wireframe===!0){if(Xe=ne.getWireframeAttribute(Z),Xe===void 0)return;rt=2}const nt=Z.drawRange,et=Z.attributes.position;let vt=nt.start*rt,un=(nt.start+nt.count)*rt;Ee!==null&&(vt=Math.max(vt,Ee.start*rt),un=Math.min(un,(Ee.start+Ee.count)*rt)),Xe!==null?(vt=Math.max(vt,0),un=Math.min(un,Xe.count)):et!=null&&(vt=Math.max(vt,0),un=Math.min(un,et.count));const It=un-vt;if(It<0||It===1/0)return;Ze.setup($,J,Ge,Z,Xe);let Ht,Et=He;if(Xe!==null&&(Ht=le.get(Xe),Et=Be,Et.setIndex(Ht)),$.isMesh)J.wireframe===!0?(Fe.setLineWidth(J.wireframeLinewidth*Ne()),Et.setMode(V.LINES)):Et.setMode(V.TRIANGLES);else if($.isLine){let st=J.linewidth;st===void 0&&(st=1),Fe.setLineWidth(st*Ne()),$.isLineSegments?Et.setMode(V.LINES):$.isLineLoop?Et.setMode(V.LINE_LOOP):Et.setMode(V.LINE_STRIP)}else $.isPoints?Et.setMode(V.POINTS):$.isSprite&&Et.setMode(V.TRIANGLES);if($.isBatchedMesh)Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Et.renderInstances(vt,It,$.count);else if(Z.isInstancedBufferGeometry){const st=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ls=Math.min(Z.instanceCount,st);Et.renderInstances(vt,It,ls)}else Et.render(vt,It)};function ke(C,H,Z){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,vn(C,H,Z),C.side=wr,C.needsUpdate=!0,vn(C,H,Z),C.side=Fi):vn(C,H,Z)}this.compile=function(C,H,Z=null){Z===null&&(Z=C),v=Pe.get(Z),v.init(),y.push(v),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights(x._useLegacyLights);const J=new Set;return C.traverse(function($){const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Ge=Ee[De];ke(Ge,Z,$),J.add(Ge)}else ke(Ee,Z,$),J.add(Ee)}),y.pop(),v=null,J},this.compileAsync=function(C,H,Z=null){const J=this.compile(C,H,Z);return new Promise($=>{function Ee(){if(J.forEach(function(De){tt.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){$(C);return}setTimeout(Ee,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let je=null;function ht(C){je&&je(C)}function wt(){Dt.stop()}function pt(){Dt.start()}const Dt=new A0;Dt.setAnimationLoop(ht),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(C){je=C,qe.setAnimationLoop(C),C===null?Dt.stop():Dt.start()},qe.addEventListener("sessionstart",wt),qe.addEventListener("sessionend",pt),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(H),H=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,H,b),v=Pe.get(C,y.length),v.init(),y.push(v),Le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(Le),_e=this.localClippingEnabled,oe=Ie.init(this.clippingPlanes,_e),E=we.get(C,f.length),E.init(),f.push(E),Tn(C,H,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(z,j),this.info.render.frame++,oe===!0&&Ie.beginShadows();const Z=v.state.shadowsArray;if(ce.render(Z,C,H),oe===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(E,C),v.setupLights(x._useLegacyLights),H.isArrayCamera){const J=H.cameras;for(let $=0,Ee=J.length;$<Ee;$++){const De=J[$];An(E,C,De,De.viewport)}}else An(E,C,H);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(x,C,H),Ze.resetDefaultState(),k=-1,A=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,f.pop(),f.length>0?E=f[f.length-1]:E=null};function Tn(C,H,Z,J){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){J&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Le);const De=ee.update(C),Ge=C.material;Ge.visible&&E.push(C,De,Ge,Z,Te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const De=ee.update(C),Ge=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Te.copy(De.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(Le)),Array.isArray(Ge)){const Xe=De.groups;for(let rt=0,nt=Xe.length;rt<nt;rt++){const et=Xe[rt],vt=Ge[et.materialIndex];vt&&vt.visible&&E.push(C,De,vt,Z,Te.z,et)}}else Ge.visible&&E.push(C,De,Ge,Z,Te.z,null)}}const Ee=C.children;for(let De=0,Ge=Ee.length;De<Ge;De++)Tn(Ee[De],H,Z,J)}function An(C,H,Z,J){const $=C.opaque,Ee=C.transmissive,De=C.transparent;v.setupLightsView(Z),oe===!0&&Ie.setGlobalState(x.clippingPlanes,Z),Ee.length>0&&Ai($,Ee,H,Z),J&&Fe.viewport(R.copy(J)),$.length>0&&Cr($,H,Z),Ee.length>0&&Cr(Ee,H,Z),De.length>0&&Cr(De,H,Z),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ai(C,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ee=Ye.isWebGL2;be===null&&(be=new Jr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?ga:Sr,minFilter:ma,samples:Ee?4:0})),x.getDrawingBufferSize(We),Ee?be.setSize(We.x,We.y):be.setSize(nd(We.x),nd(We.y));const De=x.getRenderTarget();x.setRenderTarget(be),x.getClearColor(fe),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=xr,Cr(C,Z,J),P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be);let Xe=!1;for(let rt=0,nt=H.length;rt<nt;rt++){const et=H[rt],vt=et.object,un=et.geometry,It=et.material,Ht=et.group;if(It.side===Fi&&vt.layers.test(J.layers)){const Et=It.side;It.side=In,It.needsUpdate=!0,Ut(vt,Z,J,un,It,Ht),It.side=Et,It.needsUpdate=!0,Xe=!0}}Xe===!0&&(P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be)),x.setRenderTarget(De),x.setClearColor(fe,B),x.toneMapping=Ge}function Cr(C,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Ee=C.length;$<Ee;$++){const De=C[$],Ge=De.object,Xe=De.geometry,rt=J===null?De.material:J,nt=De.group;Ge.layers.test(Z.layers)&&Ut(Ge,H,Z,Xe,rt,nt)}}function Ut(C,H,Z,J,$,Ee){C.onBeforeRender(x,H,Z,J,$,Ee),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(x,H,Z,J,C,Ee),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=In,$.needsUpdate=!0,x.renderBufferDirect(Z,H,J,$,C,Ee),$.side=wr,$.needsUpdate=!0,x.renderBufferDirect(Z,H,J,$,C,Ee),$.side=Fi):x.renderBufferDirect(Z,H,J,$,C,Ee),C.onAfterRender(x,H,Z,J,$,Ee)}function vn(C,H,Z){H.isScene!==!0&&(H=de);const J=tt.get(C),$=v.state.lights,Ee=v.state.shadowsArray,De=$.state.version,Ge=ge.getParameters(C,$.state,Ee,H,Z),Xe=ge.getProgramCacheKey(Ge);let rt=J.programs;J.environment=C.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(C.isMeshStandardMaterial?Y:T).get(C.envMap||J.environment),rt===void 0&&(C.addEventListener("dispose",ye),rt=new Map,J.programs=rt);let nt=rt.get(Xe);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===De)return ba(C,Ge),nt}else Ge.uniforms=ge.getUniforms(C),C.onBuild(Z,Ge,x),C.onBeforeCompile(Ge,x),nt=ge.acquireProgram(Ge,Xe),rt.set(Xe,nt),J.uniforms=Ge.uniforms;const et=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ie.uniform),ba(C,Ge),J.needsLights=as(C),J.lightsStateVersion=De,J.needsLights&&(et.ambientLightColor.value=$.state.ambient,et.lightProbe.value=$.state.probe,et.directionalLights.value=$.state.directional,et.directionalLightShadows.value=$.state.directionalShadow,et.spotLights.value=$.state.spot,et.spotLightShadows.value=$.state.spotShadow,et.rectAreaLights.value=$.state.rectArea,et.ltc_1.value=$.state.rectAreaLTC1,et.ltc_2.value=$.state.rectAreaLTC2,et.pointLights.value=$.state.point,et.pointLightShadows.value=$.state.pointShadow,et.hemisphereLights.value=$.state.hemi,et.directionalShadowMap.value=$.state.directionalShadowMap,et.directionalShadowMatrix.value=$.state.directionalShadowMatrix,et.spotShadowMap.value=$.state.spotShadowMap,et.spotLightMatrix.value=$.state.spotLightMatrix,et.spotLightMap.value=$.state.spotLightMap,et.pointShadowMap.value=$.state.pointShadowMap,et.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function ss(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=kl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function ba(C,H){const Z=tt.get(C);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function os(C,H,Z,J,$){H.isScene!==!0&&(H=de),P.resetTextureUnits();const Ee=H.fog,De=J.isMeshStandardMaterial?H.environment:null,Ge=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Xi,Xe=(J.isMeshStandardMaterial?Y:T).get(J.envMap||De),rt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),et=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,un=!!Z.morphAttributes.color;let It=xr;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=x.toneMapping);const Ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=Ht!==void 0?Ht.length:0,st=tt.get(J),ls=v.state.lights;if(oe===!0&&(_e===!0||C!==A)){const _n=C===A&&J.id===k;Ie.setState(J,C,_n)}let Tt=!1;J.version===st.__version?(st.needsLights&&st.lightsStateVersion!==ls.state.version||st.outputColorSpace!==Ge||$.isBatchedMesh&&st.batching===!1||!$.isBatchedMesh&&st.batching===!0||$.isInstancedMesh&&st.instancing===!1||!$.isInstancedMesh&&st.instancing===!0||$.isSkinnedMesh&&st.skinning===!1||!$.isSkinnedMesh&&st.skinning===!0||$.isInstancedMesh&&st.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&st.instancingColor===!1&&$.instanceColor!==null||st.envMap!==Xe||J.fog===!0&&st.fog!==Ee||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ie.numPlanes||st.numIntersection!==Ie.numIntersection)||st.vertexAlphas!==rt||st.vertexTangents!==nt||st.morphTargets!==et||st.morphNormals!==vt||st.morphColors!==un||st.toneMapping!==It||Ye.isWebGL2===!0&&st.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,st.__version=J.version);let Ri=st.currentProgram;Tt===!0&&(Ri=vn(J,H,$));let Pa=!1,qi=!1,us=!1;const jt=Ri.getUniforms(),_i=st.uniforms;if(Fe.useProgram(Ri.program)&&(Pa=!0,qi=!0,us=!0),J.id!==k&&(k=J.id,qi=!0),Pa||A!==C){jt.setValue(V,"projectionMatrix",C.projectionMatrix),jt.setValue(V,"viewMatrix",C.matrixWorldInverse);const _n=jt.map.cameraPosition;_n!==void 0&&_n.setValue(V,Te.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&jt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,qi=!0,us=!0)}if($.isSkinnedMesh){jt.setOptional(V,$,"bindMatrix"),jt.setOptional(V,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(Ye.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),jt.setValue(V,"boneTexture",_n.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(jt.setOptional(V,$,"batchingTexture"),jt.setValue(V,"batchingTexture",$._matricesTexture,P));const Zt=Z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0&&Ye.isWebGL2===!0)&&it.update($,Z,Ri),(qi||st.receiveShadow!==$.receiveShadow)&&(st.receiveShadow=$.receiveShadow,jt.setValue(V,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(_i.envMap.value=Xe,_i.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),qi&&(jt.setValue(V,"toneMappingExposure",x.toneMappingExposure),st.needsLights&&_o(_i,us),Ee&&J.fog===!0&&ue.refreshFogUniforms(_i,Ee),ue.refreshMaterialUniforms(_i,J,se,te,be),kl.upload(V,ss(st),_i,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(kl.upload(V,ss(st),_i,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(V,"center",$.center),jt.setValue(V,"modelViewMatrix",$.modelViewMatrix),jt.setValue(V,"normalMatrix",$.normalMatrix),jt.setValue(V,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const _n=J.uniformsGroups;for(let cs=0,fs=_n.length;cs<fs;cs++)if(Ye.isWebGL2){const yo=_n[cs];ct.update(yo,Ri),ct.bind(yo,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function _o(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function as(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,H,Z){tt.get(C.texture).__webglTexture=H,tt.get(C.depthTexture).__webglTexture=Z;const J=tt.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const Z=tt.get(C);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,Z=0){b=C,I=H,L=Z;let J=!0,$=null,Ee=!1,De=!1;if(C){const Xe=tt.get(C);Xe.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?P.setupRenderTarget(C):Xe.__hasExternalTextures&&P.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(De=!0);const nt=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?$=nt[H][Z]:$=nt[H],Ee=!0):Ye.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?$=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?$=nt[Z]:$=nt,R.copy(C.viewport),G.copy(C.scissor),ie=C.scissorTest}else R.copy(Q).multiplyScalar(se).floor(),G.copy(re).multiplyScalar(se).floor(),ie=ae;if(Fe.bindFramebuffer(V.FRAMEBUFFER,$)&&Ye.drawBuffers&&J&&Fe.drawBuffers(C,$),Fe.viewport(R),Fe.scissor(G),Fe.setScissorTest(ie),Ee){const Xe=tt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Xe.__webglTexture,Z)}else if(De){const Xe=tt.get(C.texture),rt=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.__webglTexture,Z||0,rt)}k=-1},this.readRenderTargetPixels=function(C,H,Z,J,$,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge){Fe.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const Xe=C.texture,rt=Xe.format,nt=Xe.type;if(rt!==pi&&Ce.convert(rt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=nt===ga&&(Ae.has("EXT_color_buffer_half_float")||Ye.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(nt!==Sr&&Ce.convert(nt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===cr&&(Ye.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-J&&Z>=0&&Z<=C.height-$&&V.readPixels(H,Z,J,$,Ce.convert(rt),Ce.convert(nt),Ee)}finally{const Xe=b!==null?tt.get(b).__webglFramebuffer:null;Fe.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,H,Z=0){const J=Math.pow(2,-Z),$=Math.floor(H.image.width*J),Ee=Math.floor(H.image.height*J);P.setTexture2D(H,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,C.x,C.y,$,Ee),Fe.unbindTexture()},this.copyTextureToTexture=function(C,H,Z,J=0){const $=H.image.width,Ee=H.image.height,De=Ce.convert(Z.format),Ge=Ce.convert(Z.type);P.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,C.x,C.y,$,Ee,De,Ge,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,C.x,C.y,De,Ge,H.image),J===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,H,Z,J,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,Ge=C.max.z-C.min.z+1,Xe=Ce.convert(J.format),rt=Ce.convert(J.type);let nt;if(J.isData3DTexture)P.setTexture3D(J,0),nt=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),nt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);const et=V.getParameter(V.UNPACK_ROW_LENGTH),vt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),un=V.getParameter(V.UNPACK_SKIP_PIXELS),It=V.getParameter(V.UNPACK_SKIP_ROWS),Ht=V.getParameter(V.UNPACK_SKIP_IMAGES),Et=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Et.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(nt,$,H.x,H.y,H.z,Ee,De,Ge,Xe,rt,Et.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(nt,$,H.x,H.y,H.z,Ee,De,Ge,Xe,Et.data)):V.texSubImage3D(nt,$,H.x,H.y,H.z,Ee,De,Ge,Xe,rt,Et),V.pixelStorei(V.UNPACK_ROW_LENGTH,et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,un),V.pixelStorei(V.UNPACK_SKIP_ROWS,It),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ht),$===0&&J.generateMipmaps&&V.generateMipmap(nt),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){I=0,L=0,b=null,Fe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ah?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?Yr:f0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?sn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZR extends U0{}ZR.prototype.isWebGL1Renderer=!0;class fh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(e),this.density=n}clone(){return new fh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class QR extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class N0 extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sg=new W,Eg=new W,Mg=new qt,Kc=new Nu,Sl=new Ra;class JR extends mn{constructor(e=new ii,n=new N0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Sg.fromBufferAttribute(n,r-1),Eg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Sg.distanceTo(Eg);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;Mg.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(Mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=new W,h=new W,p=new W,m=new W,_=this.isLineSegments?2:1,S=i.index,v=i.attributes.position;if(S!==null){const f=Math.max(0,o.start),y=Math.min(S.count,o.start+o.count);for(let x=f,w=y-1;x<w;x+=_){const I=S.getX(x),L=S.getX(x+1);if(c.fromBufferAttribute(v,I),h.fromBufferAttribute(v,L),Kc.distanceSqToSegment(c,h,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(m);k<e.near||k>e.far||n.push({distance:k,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),y=Math.min(v.count,o.start+o.count);for(let x=f,w=y-1;x<w;x+=_){if(c.fromBufferAttribute(v,x),h.fromBufferAttribute(v,x+1),Kc.distanceSqToSegment(c,h,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(m);L<e.near||L>e.far||n.push({distance:L,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class I0 extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wg=new qt,rd=new Nu,El=new Ra,Ml=new W;class eC extends mn{constructor(e=new ii,n=new I0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;wg.copy(r).invert(),rd.copy(e.ray).applyMatrix4(wg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=i.index,p=i.attributes.position;if(c!==null){const m=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let S=m,E=_;S<E;S++){const v=c.getX(S);Ml.fromBufferAttribute(p,v),Tg(Ml,v,u,r,e,n,this)}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let S=m,E=_;S<E;S++)Ml.fromBufferAttribute(p,S),Tg(Ml,S,u,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tg(t,e,n,i,r,s,o){const a=rd.distanceSqToPoint(t);if(a<n){const u=new W;rd.closestPointToPoint(t,u),u.applyMatrix4(i);const c=r.ray.origin.distanceTo(u);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:o})}}class dh extends ii{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new ei(s,3)),this.setAttribute("normal",new ei(s.slice(),3)),this.setAttribute("uv",new ei(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new W,w=new W,I=new W;for(let L=0;L<n.length;L+=3)_(n[L+0],x),_(n[L+1],w),_(n[L+2],I),u(x,w,I,y)}function u(y,x,w,I){const L=I+1,b=[];for(let k=0;k<=L;k++){b[k]=[];const A=y.clone().lerp(w,k/L),R=x.clone().lerp(w,k/L),G=L-k;for(let ie=0;ie<=G;ie++)ie===0&&k===L?b[k][ie]=A:b[k][ie]=A.clone().lerp(R,ie/G)}for(let k=0;k<L;k++)for(let A=0;A<2*(L-k)-1;A++){const R=Math.floor(A/2);A%2===0?(m(b[k][R+1]),m(b[k+1][R]),m(b[k][R])):(m(b[k][R+1]),m(b[k+1][R+1]),m(b[k+1][R]))}}function c(y){const x=new W;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(y),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function h(){const y=new W;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const w=v(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;o.push(w,1-I)}S(),p()}function p(){for(let y=0;y<o.length;y+=6){const x=o[y+0],w=o[y+2],I=o[y+4],L=Math.max(x,w,I),b=Math.min(x,w,I);L>.9&&b<.1&&(x<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function m(y){s.push(y.x,y.y,y.z)}function _(y,x){const w=y*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function S(){const y=new W,x=new W,w=new W,I=new W,L=new gt,b=new gt,k=new gt;for(let A=0,R=0;A<s.length;A+=9,R+=6){y.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),w.set(s[A+6],s[A+7],s[A+8]),L.set(o[R+0],o[R+1]),b.set(o[R+2],o[R+3]),k.set(o[R+4],o[R+5]),I.copy(y).add(x).add(w).divideScalar(3);const G=v(I);E(L,R+0,y,G),E(b,R+2,x,G),E(k,R+4,w,G)}}function E(y,x,w,I){I<0&&y.x===1&&(o[x]=y.x-1),w.x===0&&w.z===0&&(o[x]=I/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.vertices,e.indices,e.radius,e.details)}}class hh extends dh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new hh(e.radius,e.detail)}}class tC extends rs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nC extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iC extends nC{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rC{constructor(e,n,i=0,r=1/0){this.ray=new Nu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return sd(e,this,i,n),i.sort(Ag),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sd(e[r],this,i,n);return i.sort(Ag),i}}function Ag(t,e){return t.distance-e.distance}function sd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)sd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);var sC={};(function(){var t;function e(l){var d=0;return function(){return d<l.length?{done:!1,value:l[d++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function i(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=i(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var M=0;M<l.length-1;M++){var D=l[M];if(!(D in g))break e;g=g[D]}l=l[l.length-1],M=g[l],d=d(M),d!=M&&d!=null&&n(g,l,{configurable:!0,writable:!0,value:d})}}s("Symbol",function(l){function d(N){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new g(M+(N||"")+"_"+D++,N)}function g(N,U){this.h=N,n(this,"description",{configurable:!0,writable:!0,value:U})}if(l)return l;g.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",D=0;return d}),s("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<d.length;g++){var M=r[d[g]];typeof M=="function"&&typeof M.prototype[l]!="function"&&n(M.prototype,l,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return l});function o(l){return l={next:l},l[Symbol.iterator]=function(){return this},l}function a(l){var d=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return d?d.call(l):{next:e(l)}}function u(l){if(!(l instanceof Array)){l=a(l);for(var d,g=[];!(d=l.next()).done;)g.push(d.value);l=g}return l}var c=typeof Object.assign=="function"?Object.assign:function(l,d){for(var g=1;g<arguments.length;g++){var M=arguments[g];if(M)for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(l[D]=M[D])}return l};s("Object.assign",function(l){return l||c});var h=typeof Object.create=="function"?Object.create:function(l){function d(){}return d.prototype=l,new d},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var m;e:{var _={a:!0},S={};try{S.__proto__=_,m=S.a;break e}catch{}m=!1}p=m?function(l,d){if(l.__proto__=d,l.__proto__!==d)throw new TypeError(l+" is not extensible");return l}:null}var E=p;function v(l,d){if(l.prototype=h(d.prototype),l.prototype.constructor=l,E)E(l,d);else for(var g in d)if(g!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(d,g);M&&Object.defineProperty(l,g,M)}else l[g]=d[g];l.ya=d.prototype}function f(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function y(l){if(l.m)throw new TypeError("Generator is already running");l.m=!0}f.prototype.u=function(l){this.i=l};function x(l,d){l.l={ma:d,na:!0},l.h=l.s||l.v}f.prototype.return=function(l){this.l={return:l},this.h=this.v};function w(l,d,g){return l.h=g,{value:d}}function I(l){this.h=new f,this.i=l}function L(l,d){y(l.h);var g=l.h.j;return g?b(l,"return"in g?g.return:function(M){return{value:M,done:!0}},d,l.h.return):(l.h.return(d),k(l))}function b(l,d,g,M){try{var D=d.call(l.h.j,g);if(!(D instanceof Object))throw new TypeError("Iterator result "+D+" is not an object");if(!D.done)return l.h.m=!1,D;var N=D.value}catch(U){return l.h.j=null,x(l.h,U),k(l)}return l.h.j=null,M.call(l.h,N),k(l)}function k(l){for(;l.h.h;)try{var d=l.i(l.h);if(d)return l.h.m=!1,{value:d.value,done:!1}}catch(g){l.h.i=void 0,x(l.h,g)}if(l.h.m=!1,l.h.l){if(d=l.h.l,l.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function A(l){this.next=function(d){return y(l.h),l.h.j?d=b(l,l.h.j.next,d,l.h.u):(l.h.u(d),d=k(l)),d},this.throw=function(d){return y(l.h),l.h.j?d=b(l,l.h.j.throw,d,l.h.u):(x(l.h,d),d=k(l)),d},this.return=function(d){return L(l,d)},this[Symbol.iterator]=function(){return this}}function R(l){function d(M){return l.next(M)}function g(M){return l.throw(M)}return new Promise(function(M,D){function N(U){U.done?M(U.value):Promise.resolve(U.value).then(d,g).then(N,D)}N(l.next())})}function G(l){return R(new A(new I(l)))}s("Promise",function(l){function d(U){this.i=0,this.j=void 0,this.h=[],this.u=!1;var O=this.l();try{U(O.resolve,O.reject)}catch(q){O.reject(q)}}function g(){this.h=null}function M(U){return U instanceof d?U:new d(function(O){O(U)})}if(l)return l;g.prototype.i=function(U){if(this.h==null){this.h=[];var O=this;this.j(function(){O.m()})}this.h.push(U)};var D=r.setTimeout;g.prototype.j=function(U){D(U,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var U=this.h;this.h=[];for(var O=0;O<U.length;++O){var q=U[O];U[O]=null;try{q()}catch(pe){this.l(pe)}}}this.h=null},g.prototype.l=function(U){this.j(function(){throw U})},d.prototype.l=function(){function U(pe){return function(xe){q||(q=!0,pe.call(O,xe))}}var O=this,q=!1;return{resolve:U(this.I),reject:U(this.m)}},d.prototype.I=function(U){if(U===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(U instanceof d)this.L(U);else{e:switch(typeof U){case"object":var O=U!=null;break e;case"function":O=!0;break e;default:O=!1}O?this.F(U):this.s(U)}},d.prototype.F=function(U){var O=void 0;try{O=U.then}catch(q){this.m(q);return}typeof O=="function"?this.M(O,U):this.s(U)},d.prototype.m=function(U){this.v(2,U)},d.prototype.s=function(U){this.v(1,U)},d.prototype.v=function(U,O){if(this.i!=0)throw Error("Cannot settle("+U+", "+O+"): Promise already settled in state"+this.i);this.i=U,this.j=O,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var U=this;D(function(){if(U.D()){var O=r.console;typeof O<"u"&&O.error(U.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var U=r.CustomEvent,O=r.Event,q=r.dispatchEvent;return typeof q>"u"?!0:(typeof U=="function"?U=new U("unhandledrejection",{cancelable:!0}):typeof O=="function"?U=new O("unhandledrejection",{cancelable:!0}):(U=r.document.createEvent("CustomEvent"),U.initCustomEvent("unhandledrejection",!1,!0,U)),U.promise=this,U.reason=this.j,q(U))},d.prototype.H=function(){if(this.h!=null){for(var U=0;U<this.h.length;++U)N.i(this.h[U]);this.h=null}};var N=new g;return d.prototype.L=function(U){var O=this.l();U.T(O.resolve,O.reject)},d.prototype.M=function(U,O){var q=this.l();try{U.call(O,q.resolve,q.reject)}catch(pe){q.reject(pe)}},d.prototype.then=function(U,O){function q(ze,Re){return typeof ze=="function"?function(Ke){try{pe(ze(Ke))}catch(at){xe(at)}}:Re}var pe,xe,$e=new d(function(ze,Re){pe=ze,xe=Re});return this.T(q(U,pe),q(O,xe)),$e},d.prototype.catch=function(U){return this.then(void 0,U)},d.prototype.T=function(U,O){function q(){switch(pe.i){case 1:U(pe.j);break;case 2:O(pe.j);break;default:throw Error("Unexpected state: "+pe.i)}}var pe=this;this.h==null?N.i(q):this.h.push(q),this.u=!0},d.resolve=M,d.reject=function(U){return new d(function(O,q){q(U)})},d.race=function(U){return new d(function(O,q){for(var pe=a(U),xe=pe.next();!xe.done;xe=pe.next())M(xe.value).T(O,q)})},d.all=function(U){var O=a(U),q=O.next();return q.done?M([]):new d(function(pe,xe){function $e(Ke){return function(at){ze[Ke]=at,Re--,Re==0&&pe(ze)}}var ze=[],Re=0;do ze.push(void 0),Re++,M(q.value).T($e(ze.length-1),xe),q=O.next();while(!q.done)})},d});function ie(l,d){l instanceof String&&(l+="");var g=0,M=!1,D={next:function(){if(!M&&g<l.length){var N=g++;return{value:d(N,l[N]),done:!1}}return M=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.keys",function(l){return l||function(){return ie(this,function(d){return d})}}),s("Array.prototype.fill",function(l){return l||function(d,g,M){var D=this.length||0;for(0>g&&(g=Math.max(0,D+g)),(M==null||M>D)&&(M=D),M=Number(M),0>M&&(M=Math.max(0,D+M)),g=Number(g||0);g<M;g++)this[g]=d;return this}});function fe(l){return l||Array.prototype.fill}s("Int8Array.prototype.fill",fe),s("Uint8Array.prototype.fill",fe),s("Uint8ClampedArray.prototype.fill",fe),s("Int16Array.prototype.fill",fe),s("Uint16Array.prototype.fill",fe),s("Int32Array.prototype.fill",fe),s("Uint32Array.prototype.fill",fe),s("Float32Array.prototype.fill",fe),s("Float64Array.prototype.fill",fe),s("Object.is",function(l){return l||function(d,g){return d===g?d!==0||1/d===1/g:d!==d&&g!==g}}),s("Array.prototype.includes",function(l){return l||function(d,g){var M=this;M instanceof String&&(M=String(M));var D=M.length;for(g=g||0,0>g&&(g=Math.max(g+D,0));g<D;g++){var N=M[g];if(N===d||Object.is(N,d))return!0}return!1}}),s("String.prototype.includes",function(l){return l||function(d,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,g||0)!==-1}});var B=this||self;function X(l,d){l=l.split(".");var g=B;l[0]in g||typeof g.execScript>"u"||g.execScript("var "+l[0]);for(var M;l.length&&(M=l.shift());)l.length||d===void 0?g[M]&&g[M]!==Object.prototype[M]?g=g[M]:g=g[M]={}:g[M]=d}function te(l){var d;e:{if((d=B.navigator)&&(d=d.userAgent))break e;d=""}return d.indexOf(l)!=-1}var se=Array.prototype.map?function(l,d){return Array.prototype.map.call(l,d,void 0)}:function(l,d){for(var g=l.length,M=Array(g),D=typeof l=="string"?l.split(""):l,N=0;N<g;N++)N in D&&(M[N]=d.call(void 0,D[N],N,l));return M},z={},j=null;function Q(l){var d=l.length,g=3*d/4;g%3?g=Math.floor(g):"=.".indexOf(l[d-1])!=-1&&(g="=.".indexOf(l[d-2])!=-1?g-2:g-1);var M=new Uint8Array(g),D=0;return re(l,function(N){M[D++]=N}),D!==g?M.subarray(0,D):M}function re(l,d){function g(q){for(;M<l.length;){var pe=l.charAt(M++),xe=j[pe];if(xe!=null)return xe;if(!/^[\s\xa0]*$/.test(pe))throw Error("Unknown base64 encoding at char: "+pe)}return q}ae();for(var M=0;;){var D=g(-1),N=g(0),U=g(64),O=g(64);if(O===64&&D===-1)break;d(D<<2|N>>4),U!=64&&(d(N<<4&240|U>>2),O!=64&&d(U<<6&192|O))}}function ae(){if(!j){j={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var M=l.concat(d[g].split(""));z[g]=M;for(var D=0;D<M.length;D++){var N=M[D];j[N]===void 0&&(j[N]=D)}}}}var K=typeof Uint8Array<"u",oe=!(te("Trident")||te("MSIE"))&&typeof B.btoa=="function";function _e(l){if(!oe){var d;d===void 0&&(d=0),ae(),d=z[d];for(var g=Array(Math.floor(l.length/3)),M=d[64]||"",D=0,N=0;D<l.length-2;D+=3){var U=l[D],O=l[D+1],q=l[D+2],pe=d[U>>2];U=d[(U&3)<<4|O>>4],O=d[(O&15)<<2|q>>6],q=d[q&63],g[N++]=pe+U+O+q}switch(pe=0,q=M,l.length-D){case 2:pe=l[D+1],q=d[(pe&15)<<2]||M;case 1:l=l[D],g[N]=d[l>>2]+d[(l&3)<<4|pe>>4]+q+M}return g.join("")}for(d="";10240<l.length;)d+=String.fromCharCode.apply(null,l.subarray(0,10240)),l=l.subarray(10240);return d+=String.fromCharCode.apply(null,l),btoa(d)}var be=RegExp("[-_.]","g");function Le(l){switch(l){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function We(l){if(!oe)return Q(l);be.test(l)&&(l=l.replace(be,Le)),l=atob(l);for(var d=new Uint8Array(l.length),g=0;g<l.length;g++)d[g]=l.charCodeAt(g);return d}var Te;function de(){return Te||(Te=new Uint8Array(0))}var Ne={},V=typeof Uint8Array.prototype.slice=="function",Je=0,Ae=0;function Ye(l){var d=0>l;l=Math.abs(l);var g=l>>>0;l=Math.floor((l-g)/4294967296),d&&(g=a(yt(g,l)),d=g.next().value,l=g.next().value,g=d),Je=g>>>0,Ae=l>>>0}var Fe=typeof BigInt=="function";function yt(l,d){return d=~d,l?l=~l+1:d+=1,[l,d]}function tt(l,d){this.i=l>>>0,this.h=d>>>0}function P(l){if(!l)return T||(T=new tt(0,0));if(!/^-?\d+$/.test(l))return null;if(16>l.length)Ye(Number(l));else if(Fe)l=BigInt(l),Je=Number(l&BigInt(4294967295))>>>0,Ae=Number(l>>BigInt(32)&BigInt(4294967295));else{var d=+(l[0]==="-");Ae=Je=0;for(var g=l.length,M=d,D=(g-d)%6+d;D<=g;M=D,D+=6)M=Number(l.slice(M,D)),Ae*=1e6,Je=1e6*Je+M,4294967296<=Je&&(Ae+=Je/4294967296|0,Je%=4294967296);d&&(d=a(yt(Je,Ae)),l=d.next().value,d=d.next().value,Je=l,Ae=d)}return new tt(Je,Ae)}var T;function Y(l,d){return Error("Invalid wire type: "+l+" (at position "+d+")")}function le(){return Error("Failed to read varint, encoding is invalid.")}function ne(l,d){return Error("Tried to read past the end of the data "+d+" > "+l)}function ee(){throw Error("Invalid UTF8")}function ge(l,d){return d=String.fromCharCode.apply(null,d),l==null?d:l+d}var ue=void 0,we,Pe=typeof TextDecoder<"u",Ie,ce=typeof TextEncoder<"u",dt;function it(l){if(l!==Ne)throw Error("illegal external caller")}function He(l,d){if(it(d),this.V=l,l!=null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}function Be(){return dt||(dt=new He(null,Ne))}function Ce(l){it(Ne);var d=l.V;return d=d==null||K&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?We(d):null,d==null?d:l.V=d}function Ze(l){if(typeof l=="string")return{buffer:We(l),C:!1};if(Array.isArray(l))return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Uint8Array)return{buffer:l,C:!1};if(l.constructor===ArrayBuffer)return{buffer:new Uint8Array(l),C:!1};if(l.constructor===He)return{buffer:Ce(l)||de(),C:!0};if(l instanceof Uint8Array)return{buffer:new Uint8Array(l.buffer,l.byteOffset,l.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ct(l,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,xt(this,l,d)}function xt(l,d,g){g=g===void 0?{}:g,l.S=g.S===void 0?!1:g.S,d&&(d=Ze(d),l.i=d.buffer,l.m=d.C,l.l=0,l.j=l.i.length,l.h=l.l)}ct.prototype.reset=function(){this.h=this.l};function qe(l,d){if(l.h=d,d>l.j)throw ne(l.j,d)}function ve(l){var d=l.i,g=l.h,M=d[g++],D=M&127;if(M&128&&(M=d[g++],D|=(M&127)<<7,M&128&&(M=d[g++],D|=(M&127)<<14,M&128&&(M=d[g++],D|=(M&127)<<21,M&128&&(M=d[g++],D|=M<<28,M&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128)))))throw le();return qe(l,g),D}function F(l,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var g=l.h,M=g+d;if(M>l.j)throw ne(d,l.j-g);return l.h=M,g}var Se=[];function ye(){this.h=[]}ye.prototype.length=function(){return this.h.length},ye.prototype.end=function(){var l=this.h;return this.h=[],l};function Ve(l,d,g){for(;0<g||127<d;)l.h.push(d&127|128),d=(d>>>7|g<<25)>>>0,g>>>=7;l.h.push(d)}function Oe(l,d){for(;127<d;)l.h.push(d&127|128),d>>>=7;l.h.push(d)}function ke(l,d){if(Se.length){var g=Se.pop();xt(g,l,d),l=g}else l=new ct(l,d);this.h=l,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}ke.prototype.setOptions=function(l){l=l===void 0?{}:l,this.ca=l.ca===void 0?!1:l.ca},ke.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function je(l){var d=l.h;if(d.h==d.j)return!1;l.j=l.h.h;var g=ve(l.h)>>>0;if(d=g>>>3,g&=7,!(0<=g&&5>=g))throw Y(g,l.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+l.j+")");return l.l=d,l.i=g,!0}function ht(l){switch(l.i){case 0:if(l.i!=0)ht(l);else e:{l=l.h;for(var d=l.h,g=d+10,M=l.i;d<g;)if(!(M[d++]&128)){qe(l,d);break e}throw le()}break;case 1:l=l.h,qe(l,l.h+8);break;case 2:l.i!=2?ht(l):(d=ve(l.h)>>>0,l=l.h,qe(l,l.h+d));break;case 5:l=l.h,qe(l,l.h+4);break;case 3:d=l.l;do{if(!je(l))throw Error("Unmatched start-group tag: stream EOF");if(l.i==4){if(l.l!=d)throw Error("Unmatched end-group tag");break}ht(l)}while(!0);break;default:throw Y(l.i,l.j)}}var wt=[];function pt(){this.j=[],this.i=0,this.h=new ye}function Dt(l,d){d.length!==0&&(l.j.push(d),l.i+=d.length)}function Tn(l,d){if(d=d.R){Dt(l,l.h.end());for(var g=0;g<d.length;g++)Dt(l,Ce(d[g])||de())}}var An=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ai(l,d){return An?l[An]|=d:l.A!==void 0?l.A|=d:(Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function Cr(l,d){An?l[An]&&(l[An]&=~d):l.A!==void 0&&(l.A&=~d)}function Ut(l){var d;return An?d=l[An]:d=l.A,d??0}function vn(l,d){An?l[An]=d:l.A!==void 0?l.A=d:Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function ss(l){return Ai(l,1),l}function ba(l,d){vn(d,(l|0)&-51)}function os(l,d){vn(d,(l|18)&-41)}var _o={};function as(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var C,H=[];vn(H,23),C=Object.freeze(H);function Z(l){if(Ut(l.o)&2)throw Error("Cannot mutate an immutable Message")}function J(l){var d=l.length;(d=d?l[d-1]:void 0)&&as(d)?d.g=1:(d={},l.push((d.g=1,d)))}function $(l){var d=l.i+l.G;return l.B||(l.B=l.o[d]={})}function Ee(l,d){return d===-1?null:d>=l.i?l.B?l.B[d]:void 0:l.o[d+l.G]}function De(l,d,g,M){Z(l),Ge(l,d,g,M)}function Ge(l,d,g,M){l.j&&(l.j=void 0),d>=l.i||M?$(l)[d]=g:(l.o[d+l.G]=g,(l=l.B)&&d in l&&delete l[d])}function Xe(l,d,g,M){var D=Ee(l,d);Array.isArray(D)||(D=C);var N=Ut(D);if(N&1||ss(D),M)N&2||Ai(D,2),g&1||Object.freeze(D);else{M=!(g&2);var U=N&2;g&1||!U?M&&N&16&&!U&&Cr(D,16):(D=ss(Array.prototype.slice.call(D)),Ge(l,d,D))}return D}function rt(l,d){var g=Ee(l,d),M=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return M!=null&&M!==g&&Ge(l,d,M),M}function nt(l,d,g,M,D){l.h||(l.h={});var N=l.h[g],U=Xe(l,g,3,D);if(!N){var O=U;N=[];var q=!!(Ut(l.o)&16);U=!!(Ut(O)&2);var pe=O;!D&&U&&(O=Array.prototype.slice.call(O));for(var xe=U,$e=0;$e<O.length;$e++){var ze=O[$e],Re=d,Ke=!1;if(Ke=Ke===void 0?!1:Ke,ze=Array.isArray(ze)?new Re(ze):Ke?new Re:void 0,ze!==void 0){Re=ze.o;var at=Ke=Ut(Re);U&&(at|=2),q&&(at|=16),at!=Ke&&vn(Re,at),Re=at,xe=xe||!!(2&Re),N.push(ze)}}return l.h[g]=N,q=Ut(O),d=q|33,d=xe?d&-9:d|8,q!=d&&(xe=O,Object.isFrozen(xe)&&(xe=Array.prototype.slice.call(xe)),vn(xe,d),O=xe),pe!==O&&Ge(l,g,O),(D||M&&U)&&Ai(N,2),M&&Object.freeze(N),N}return D||(D=Object.isFrozen(N),M&&!D?Object.freeze(N):!M&&D&&(N=Array.prototype.slice.call(N),l.h[g]=N)),N}function et(l,d,g){var M=!!(Ut(l.o)&2);if(d=nt(l,d,g,M,M),l=Xe(l,g,3,M),!(M||Ut(l)&8)){for(M=0;M<d.length;M++){if(g=d[M],Ut(g.o)&2){var D=_i(g,!1);D.j=g}else D=g;g!==D&&(d[M]=D,l[M]=D.o)}Ai(l,8)}return d}function vt(l,d,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);De(l,d,g)}function un(l,d,g,M,D){Z(l);var N=nt(l,g,d,!1,!1);return g=M??new g,l=Xe(l,d,2,!1),D!=null?(N.splice(D,0,g),l.splice(D,0,g.o)):(N.push(g),l.push(g.o)),g.C()&&Cr(l,8),g}function It(l,d){return l??d}function Ht(l,d,g){return g=g===void 0?0:g,It(rt(l,d),g)}var Et;function st(l){switch(typeof l){case"number":return isFinite(l)?l:String(l);case"object":if(l)if(Array.isArray(l)){if(Ut(l)&128)return l=Array.prototype.slice.call(l),J(l),l}else{if(K&&l!=null&&l instanceof Uint8Array)return _e(l);if(l instanceof He){var d=l.V;return d==null?"":typeof d=="string"?d:l.V=_e(d)}}}return l}function ls(l,d,g,M){if(l!=null){if(Array.isArray(l))l=Tt(l,d,g,M!==void 0);else if(as(l)){var D={},N;for(N in l)D[N]=ls(l[N],d,g,M);l=D}else l=d(l,M);return l}}function Tt(l,d,g,M){var D=Ut(l);M=M?!!(D&16):void 0,l=Array.prototype.slice.call(l);for(var N=0;N<l.length;N++)l[N]=ls(l[N],d,g,M);return g(D,l),l}function Ri(l){return l.ja===_o?l.toJSON():st(l)}function Pa(l,d){l&128&&J(d)}function qi(l,d,g){if(g=g===void 0?os:g,l!=null){if(K&&l instanceof Uint8Array)return l.length?new He(new Uint8Array(l),Ne):Be();if(Array.isArray(l)){var M=Ut(l);return M&2?l:d&&!(M&32)&&(M&16||M===0)?(vn(l,M|2),l):(l=Tt(l,qi,M&4?os:g,!0),d=Ut(l),d&4&&d&2&&Object.freeze(l),l)}return l.ja===_o?jt(l):l}}function us(l,d,g,M,D,N,U){if(l=l.h&&l.h[g]){if(M=Ut(l),M&2?M=l:(N=se(l,jt),os(M,N),Object.freeze(N),M=N),Z(d),U=M==null?C:ss([]),M!=null){for(N=!!M.length,l=0;l<M.length;l++){var O=M[l];N=N&&!(Ut(O.o)&2),U[l]=O.o}N=(N?8:0)|1,l=Ut(U),(l&N)!==N&&(Object.isFrozen(U)&&(U=Array.prototype.slice.call(U)),vn(U,l|N)),d.h||(d.h={}),d.h[g]=M}else d.h&&(d.h[g]=void 0);Ge(d,g,U,D)}else De(d,g,qi(M,N,U),D)}function jt(l){return Ut(l.o)&2||(l=_i(l,!0),Ai(l.o,2)),l}function _i(l,d){var g=l.o,M=[];Ai(M,16);var D=l.constructor.h;if(D&&M.push(D),D=l.B,D){M.length=g.length,M.fill(void 0,M.length,g.length);var N={};M[M.length-1]=N}Ut(g)&128&&J(M),d=d||l.C()?os:ba,N=l.constructor,Et=M,M=new N(M),Et=void 0,l.R&&(M.R=l.R.slice()),N=!!(Ut(g)&16);for(var U=D?g.length-1:g.length,O=0;O<U;O++)us(l,M,O-l.G,g[O],!1,N,d);if(D)for(var q in D)us(l,M,+q,D[q],!0,N,d);return M}function Zt(l,d,g){l==null&&(l=Et),Et=void 0;var M=this.constructor.i||0,D=0<M,N=this.constructor.h,U=!1;if(l==null){l=N?[N]:[];var O=48,q=!0;D&&(M=0,O|=128),vn(l,O)}else{if(!Array.isArray(l)||N&&N!==l[0])throw Error();var pe=O=Ai(l,0);if((q=(16&pe)!==0)&&((U=(32&pe)!==0)||(pe|=32)),D){if(128&pe)M=0;else if(0<l.length){var xe=l[l.length-1];if(as(xe)&&"g"in xe){M=0,pe|=128,delete xe.g;var $e=!0,ze;for(ze in xe){$e=!1;break}$e&&l.pop()}}}else if(128&pe)throw Error();O!==pe&&vn(l,pe)}this.G=(N?0:-1)-M,this.h=void 0,this.o=l;e:{if(N=this.o.length,M=N-1,N&&(N=this.o[M],as(N))){this.B=N,this.i=M-this.G;break e}d!==void 0&&-1<d?(this.i=Math.max(d,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!D&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){d=q&&!U&&!0,D=this.i;var Re;for(q=0;q<g.length;q++)U=g[q],U<D?(U+=this.G,(M=l[U])?_n(M,d):l[U]=C):(Re||(Re=$(this)),(M=Re[U])?_n(M,d):Re[U]=C)}}Zt.prototype.toJSON=function(){return Tt(this.o,Ri,Pa)},Zt.prototype.C=function(){return!!(Ut(this.o)&2)};function _n(l,d){if(Array.isArray(l)){var g=Ut(l),M=1;!d||g&2||(M|=16),(g&M)!==M&&vn(l,g|M)}}Zt.prototype.ja=_o,Zt.prototype.toString=function(){return this.o.toString()};function cs(l,d,g){if(g){var M={},D;for(D in g){var N=g[D],U=N.qa;U||(M.J=N.wa||N.oa.W,N.ia?(M.aa=vh(N.ia),U=function(O){return function(q,pe,xe){return O.J(q,pe,xe,O.aa)}}(M)):N.ka?(M.Z=_h(N.da.P,N.ka),U=function(O){return function(q,pe,xe){return O.J(q,pe,xe,O.Z)}}(M)):U=M.J,N.qa=U),U(d,l,N.da),M={J:M.J,aa:M.aa,Z:M.Z}}}Tn(d,l)}var fs=Symbol();function yo(l,d,g){return l[fs]||(l[fs]=function(M,D){return d(M,D,g)})}function ph(l){var d=l[fs];if(!d){var g=Bu(l);d=function(M,D){return yh(M,D,g)},l[fs]=d}return d}function V0(l){var d=l.ia;if(d)return ph(d);if(d=l.va)return yo(l.da.P,d,l.ka)}function W0(l){var d=V0(l),g=l.da,M=l.oa.U;return d?function(D,N){return M(D,N,g,d)}:function(D,N){return M(D,N,g)}}function mh(l,d){var g=l[d];return typeof g=="function"&&g.length===0&&(g=g(),l[d]=g),Array.isArray(g)&&(So in g||xo in g||0<g.length&&typeof g[0]=="function")?g:void 0}function gh(l,d,g,M,D,N){d.P=l[0];var U=1;if(l.length>U&&typeof l[U]!="number"){var O=l[U++];g(d,O)}for(;U<l.length;){g=l[U++];for(var q=U+1;q<l.length&&typeof l[q]!="number";)q++;switch(O=l[U++],q-=U,q){case 0:M(d,g,O);break;case 1:(q=mh(l,U))?(U++,D(d,g,O,q)):M(d,g,O,l[U++]);break;case 2:q=U++,q=mh(l,q),D(d,g,O,q,l[U++]);break;case 3:N(d,g,O,l[U++],l[U++],l[U++]);break;case 4:N(d,g,O,l[U++],l[U++],l[U++],l[U++]);break;default:throw Error("unexpected number of binary field arguments: "+q)}}return d}var La=Symbol();function vh(l){var d=l[La];if(!d){var g=ku(l);d=function(M,D){return xh(M,D,g)},l[La]=d}return d}function _h(l,d){var g=l[La];return g||(g=function(M,D){return cs(M,D,d)},l[La]=g),g}var xo=Symbol();function j0(l,d){l.push(d)}function X0(l,d,g){l.push(d,g.W)}function Y0(l,d,g,M){var D=vh(M),N=ku(M).P,U=g.W;l.push(d,function(O,q,pe){return U(O,q,pe,N,D)})}function q0(l,d,g,M,D,N){var U=_h(M,N),O=g.W;l.push(d,function(q,pe,xe){return O(q,pe,xe,M,U)})}function ku(l){var d=l[xo];return d||(d=gh(l,l[xo]=[],j0,X0,Y0,q0),So in l&&xo in l&&(l.length=0),d)}var So=Symbol();function $0(l,d){l[0]=d}function K0(l,d,g,M){var D=g.U;l[d]=M?function(N,U,O){return D(N,U,O,M)}:D}function Z0(l,d,g,M,D){var N=g.U,U=ph(M),O=Bu(M).P;l[d]=function(q,pe,xe){return N(q,pe,xe,O,U,D)}}function Q0(l,d,g,M,D,N,U){var O=g.U,q=yo(M,D,N);l[d]=function(pe,xe,$e){return O(pe,xe,$e,M,q,U)}}function Bu(l){var d=l[So];return d||(d=gh(l,l[So]={},$0,K0,Z0,Q0),So in l&&xo in l&&(l.length=0),d)}function yh(l,d,g){for(;je(d)&&d.i!=4;){var M=d.l,D=g[M];if(!D){var N=g[0];N&&(N=N[M])&&(D=g[M]=W0(N))}if(!D||!D(d,l,M)){D=d,M=l,N=D.j,ht(D);var U=D;if(!U.ca){if(D=U.h.h-N,U.h.h=N,U=U.h,D==0)D=Be();else{if(N=F(U,D),U.S&&U.m)D=U.i.subarray(N,N+D);else{U=U.i;var O=N;D=N+D,D=O===D?de():V?U.slice(O,D):new Uint8Array(U.subarray(O,D))}D=D.length==0?Be():new He(D,Ne)}(N=M.R)?N.push(D):M.R=[D]}}}return l}function xh(l,d,g){for(var M=g.length,D=M%2==1,N=D?1:0;N<M;N+=2)(0,g[N+1])(d,l,g[N]);cs(l,d,D?g[0]:void 0)}function Eo(l,d){return{U:l,W:d}}var ri=Eo(function(l,d,g){if(l.i!==5)return!1;l=l.h;var M=l.i,D=l.h,N=M[D],U=M[D+1],O=M[D+2];return M=M[D+3],qe(l,l.h+4),U=(N<<0|U<<8|O<<16|M<<24)>>>0,l=2*(U>>31)+1,N=U>>>23&255,U&=8388607,De(d,g,N==255?U?NaN:1/0*l:N==0?l*Math.pow(2,-149)*U:l*Math.pow(2,N-150)*(U+Math.pow(2,23))),!0},function(l,d,g){if(d=rt(d,g),d!=null){Oe(l.h,8*g+5),l=l.h;var M=+d;M===0?0<1/M?Je=Ae=0:(Ae=0,Je=2147483648):isNaN(M)?(Ae=0,Je=2147483647):(M=(g=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(Ae=0,Je=(g|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),Ae=0,Je=(g|M)>>>0):(d=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-d),M=Math.round(8388608*M),16777216<=M&&++d,Ae=0,Je=(g|d+127<<23|M&8388607)>>>0)),g=Je,l.h.push(g>>>0&255),l.h.push(g>>>8&255),l.h.push(g>>>16&255),l.h.push(g>>>24&255)}}),J0=Eo(function(l,d,g){if(l.i!==0)return!1;var M=l.h,D=0,N=l=0,U=M.i,O=M.h;do{var q=U[O++];D|=(q&127)<<N,N+=7}while(32>N&&q&128);for(32<N&&(l|=(q&127)>>4),N=3;32>N&&q&128;N+=7)q=U[O++],l|=(q&127)<<N;if(qe(M,O),128>q)M=D>>>0,q=l>>>0,(l=q&2147483648)&&(M=~M+1>>>0,q=~q>>>0,M==0&&(q=q+1>>>0)),M=4294967296*q+(M>>>0);else throw le();return De(d,g,l?-M:M),!0},function(l,d,g){d=Ee(d,g),d!=null&&(typeof d=="string"&&P(d),d!=null&&(Oe(l.h,8*g),typeof d=="number"?(l=l.h,Ye(d),Ve(l,Je,Ae)):(g=P(d),Ve(l.h,g.i,g.h))))}),ey=Eo(function(l,d,g){return l.i!==0?!1:(De(d,g,ve(l.h)),!0)},function(l,d,g){if(d=Ee(d,g),d!=null&&d!=null)if(Oe(l.h,8*g),l=l.h,g=d,0<=g)Oe(l,g);else{for(d=0;9>d;d++)l.h.push(g&127|128),g>>=7;l.h.push(1)}}),Sh=Eo(function(l,d,g){if(l.i!==2)return!1;var M=ve(l.h)>>>0;l=l.h;var D=F(l,M);if(l=l.i,Pe){var N=l,U;(U=we)||(U=we=new TextDecoder("utf-8",{fatal:!0})),l=D+M,N=D===0&&l===N.length?N:N.subarray(D,l);try{var O=U.decode(N)}catch($e){if(ue===void 0){try{U.decode(new Uint8Array([128]))}catch{}try{U.decode(new Uint8Array([97])),ue=!0}catch{ue=!1}}throw!ue&&(we=void 0),$e}}else{O=D,M=O+M,D=[];for(var q=null,pe,xe;O<M;)pe=l[O++],128>pe?D.push(pe):224>pe?O>=M?ee():(xe=l[O++],194>pe||(xe&192)!==128?(O--,ee()):D.push((pe&31)<<6|xe&63)):240>pe?O>=M-1?ee():(xe=l[O++],(xe&192)!==128||pe===224&&160>xe||pe===237&&160<=xe||((N=l[O++])&192)!==128?(O--,ee()):D.push((pe&15)<<12|(xe&63)<<6|N&63)):244>=pe?O>=M-2?ee():(xe=l[O++],(xe&192)!==128||(pe<<28)+(xe-144)>>30||((N=l[O++])&192)!==128||((U=l[O++])&192)!==128?(O--,ee()):(pe=(pe&7)<<18|(xe&63)<<12|(N&63)<<6|U&63,pe-=65536,D.push((pe>>10&1023)+55296,(pe&1023)+56320))):ee(),8192<=D.length&&(q=ge(q,D),D.length=0);O=ge(q,D)}return De(d,g,O),!0},function(l,d,g){if(d=Ee(d,g),d!=null){var M=!1;if(M=M===void 0?!1:M,ce){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Ie||(Ie=new TextEncoder)).encode(d)}else{for(var D=0,N=new Uint8Array(3*d.length),U=0;U<d.length;U++){var O=d.charCodeAt(U);if(128>O)N[D++]=O;else{if(2048>O)N[D++]=O>>6|192;else{if(55296<=O&&57343>=O){if(56319>=O&&U<d.length){var q=d.charCodeAt(++U);if(56320<=q&&57343>=q){O=1024*(O-55296)+q-56320+65536,N[D++]=O>>18|240,N[D++]=O>>12&63|128,N[D++]=O>>6&63|128,N[D++]=O&63|128;continue}else U--}if(M)throw Error("Found an unpaired surrogate");O=65533}N[D++]=O>>12|224,N[D++]=O>>6&63|128}N[D++]=O&63|128}}d=D===N.length?N:N.subarray(0,D)}Oe(l.h,8*g+2),Oe(l.h,d.length),Dt(l,l.h.end()),Dt(l,d)}}),Eh=Eo(function(l,d,g,M,D){if(l.i!==2)return!1;d=un(d,g,M),g=l.h.j,M=ve(l.h)>>>0;var N=l.h.h+M,U=N-g;if(0>=U&&(l.h.j=N,D(d,l,void 0,void 0,void 0),U=N-l.h.h),U)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-U)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return l.h.h=N,l.h.j=g,!0},function(l,d,g,M,D){if(d=et(d,M,g),d!=null)for(M=0;M<d.length;M++){var N=l;Oe(N.h,8*g+2);var U=N.h.end();Dt(N,U),U.push(N.i),N=U,D(d[M],l),U=l;var O=N.pop();for(O=U.i+U.h.length()-O;127<O;)N.push(O&127|128),O>>>=7,U.i++;N.push(O),U.i++}});function zu(l){return function(d,g){e:{if(wt.length){var M=wt.pop();M.setOptions(g),xt(M.h,d,g),d=M}else d=new ke(d,g);try{var D=Bu(l),N=yh(new D.P,d,D);break e}finally{D=d.h,D.i=null,D.m=!1,D.l=0,D.j=0,D.h=0,D.S=!1,d.l=-1,d.i=-1,100>wt.length&&wt.push(d)}N=void 0}return N}}function Hu(l){return function(){var d=new pt;xh(this,d,ku(l)),Dt(d,d.h.end());for(var g=new Uint8Array(d.i),M=d.j,D=M.length,N=0,U=0;U<D;U++){var O=M[U];g.set(O,N),N+=O.length}return d.j=[g],g}}function ds(l){Zt.call(this,l)}v(ds,Zt);var Mh=[ds,1,ey,2,ri,3,Sh,4,Sh];ds.prototype.l=Hu(Mh);function Gu(l){Zt.call(this,l,-1,ty)}v(Gu,Zt),Gu.prototype.addClassification=function(l,d){return un(this,1,ds,l,d),this};var ty=[1],wh=zu([Gu,1,Eh,Mh]);function hs(l){Zt.call(this,l)}v(hs,Zt);var Th=[hs,1,ri,2,ri,3,ri,4,ri,5,ri];hs.prototype.l=Hu(Th);function Ah(l){Zt.call(this,l,-1,ny)}v(Ah,Zt);var ny=[1],Rh=zu([Ah,1,Eh,Th]);function Da(l){Zt.call(this,l)}v(Da,Zt);var Ch=[Da,1,ri,2,ri,3,ri,4,ri,5,ri,6,J0],iy=zu(Ch);Da.prototype.l=Hu(Ch);function bh(l,d,g){if(g=l.createShader(g===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(g,d),l.compileShader(g),!l.getShaderParameter(g,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(g));return g}function Ph(l){return et(l,ds,1).map(function(d){var g=Ee(d,1);return{index:g??0,score:Ht(d,2),label:Ee(d,3)!=null?It(Ee(d,3),""):void 0,displayName:Ee(d,4)!=null?It(Ee(d,4),""):void 0}})}function Lh(l){return{x:Ht(l,1),y:Ht(l,2),z:Ht(l,3),visibility:rt(l,4)!=null?Ht(l,4):void 0}}function Dh(l){return l.map(function(d){return et(Rh(d),hs,1).map(Lh)})}function Vu(l,d){this.i=l,this.h=d,this.m=0}function Uh(l,d,g){return ry(l,d),typeof l.h.canvas.transferToImageBitmap=="function"?Promise.resolve(l.h.canvas.transferToImageBitmap()):g?Promise.resolve(l.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.h.canvas):(l.j===void 0&&(l.j=document.createElement("canvas")),new Promise(function(M){l.j.height=l.h.canvas.height,l.j.width=l.h.canvas.width,l.j.getContext("2d",{}).drawImage(l.h.canvas,0,0,l.h.canvas.width,l.h.canvas.height),M(l.j)}))}function ry(l,d){var g=l.h;if(l.s===void 0){var M=bh(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),D=bh(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),N=g.createProgram();if(g.attachShader(N,M),g.attachShader(N,D),g.linkProgram(N),!g.getProgramParameter(N,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(N));M=l.s=N,g.useProgram(M),D=g.getUniformLocation(M,"sampler0"),l.l={O:g.getAttribLocation(M,"aVertex"),N:g.getAttribLocation(M,"aTex"),xa:D},l.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.enableVertexAttribArray(l.l.O),g.vertexAttribPointer(l.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),l.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.enableVertexAttribArray(l.l.N),g.vertexAttribPointer(l.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(D,0)}M=l.l,g.useProgram(l.s),g.canvas.width=d.width,g.canvas.height=d.height,g.viewport(0,0,d.width,d.height),g.activeTexture(g.TEXTURE0),l.i.bindTexture2d(d.glName),g.enableVertexAttribArray(M.O),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.vertexAttribPointer(M.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(M.N),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.vertexAttribPointer(M.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(M.O),g.disableVertexAttribArray(M.N),g.bindBuffer(g.ARRAY_BUFFER,null),l.i.bindTexture2d(0)}function sy(l){this.h=l}var oy=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ay(l,d){return d+l}function Nh(l,d){window[l]=d}function ly(l){var d=document.createElement("script");return d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),new Promise(function(g){d.addEventListener("load",function(){g()},!1),d.addEventListener("error",function(){g()},!1),document.body.appendChild(d)})}function uy(){return G(function(l){switch(l.h){case 1:return l.s=2,w(l,WebAssembly.instantiate(oy),4);case 4:l.h=3,l.s=0;break;case 2:return l.s=0,l.l=null,l.return(!1);case 3:return l.return(!0)}})}function Wu(l){if(this.h=l,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=l&&l.locateFile||ay,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,l.options){d=a(Object.keys(l.options));for(var g=d.next();!g.done;g=d.next()){g=g.value;var M=l.options[g].default;M!==void 0&&(this.l[g]=typeof M=="function"?M():M)}}}t=Wu.prototype,t.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function cy(l){var d,g,M,D,N,U,O,q,pe,xe,$e;return G(function(ze){switch(ze.h){case 1:return l.ga?(d=l.h.files===void 0?[]:typeof l.h.files=="function"?l.h.files(l.l):l.h.files,w(ze,uy(),2)):ze.return();case 2:if(g=ze.i,typeof window=="object")return Nh("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),Nh("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),U=d.filter(function(Re){return Re.data!==void 0}),O=d.filter(function(Re){return Re.data===void 0}),q=Promise.all(U.map(function(Re){var Ke=Ua(l,Re.url);if(Re.path!==void 0){var at=Re.path;Ke=Ke.then(function(Ct){return l.overrideFile(at,Ct),Promise.resolve(Ct)})}return Ke})),pe=Promise.all(O.map(function(Re){return Re.simd===void 0||Re.simd&&g||!Re.simd&&!g?ly(l.locateFile(Re.url,l.ha)):Promise.resolve()})).then(function(){var Re,Ke,at;return G(function(Ct){if(Ct.h==1)return Re=window.createMediapipeSolutionsWasm,Ke=window.createMediapipeSolutionsPackedAssets,at=l,w(Ct,Re(Ke),2);at.i=Ct.i,Ct.h=0})}),xe=function(){return G(function(Re){return l.h.graph&&l.h.graph.url?Re=w(Re,Ua(l,l.h.graph.url),0):(Re.h=0,Re=void 0),Re})}(),w(ze,Promise.all([pe,q,xe]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=d.filter(function(Re){return Re.simd===void 0||Re.simd&&g||!Re.simd&&!g}).map(function(Re){return l.locateFile(Re.url,l.ha)}),importScripts.apply(null,u(M)),D=l,w(ze,createMediapipeSolutionsWasm(Module),6);case 6:D.i=ze.i,l.m=new OffscreenCanvas(1,1),l.i.canvas=l.m,N=l.i.GL.createContext(l.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),l.i.GL.makeContextCurrent(N),ze.h=4;break;case 7:if(l.m=document.createElement("canvas"),$e=l.m.getContext("webgl2",{}),!$e&&($e=l.m.getContext("webgl",{}),!$e))return alert("Failed to create WebGL canvas context when passing video frame."),ze.return();l.K=$e,l.i.canvas=l.m,l.i.createContext(l.m,!0,!0,{});case 4:l.j=new l.i.SolutionWasm,l.ga=!1,ze.h=0}})}function fy(l){var d,g,M,D,N,U,O,q;return G(function(pe){if(pe.h==1){if(l.h.graph&&l.h.graph.url&&l.fa===l.h.graph.url)return pe.return();if(l.u=!0,!l.h.graph||!l.h.graph.url){pe.h=2;return}return l.fa=l.h.graph.url,w(pe,Ua(l,l.h.graph.url),3)}for(pe.h!=2&&(d=pe.i,l.j.loadGraph(d)),g=a(Object.keys(l.D)),M=g.next();!M.done;M=g.next())D=M.value,l.j.overrideFile(D,l.D[D]);if(l.D={},l.h.listeners)for(N=a(l.h.listeners),U=N.next();!U.done;U=N.next())O=U.value,my(l,O);q=l.l,l.l={},l.setOptions(q),pe.h=0})}t.reset=function(){var l=this;return G(function(d){l.j&&(l.j.reset(),l.s={},l.v={}),d.h=0})},t.setOptions=function(l,d){var g=this;if(d=d||this.h.options){for(var M=[],D=[],N={},U=a(Object.keys(l)),O=U.next();!O.done;N={X:N.X,Y:N.Y},O=U.next())if(O=O.value,!(O in this.l&&this.l[O]===l[O])){this.l[O]=l[O];var q=d[O];q!==void 0&&(q.onChange&&(N.X=q.onChange,N.Y=l[O],M.push(function(pe){return function(){var xe;return G(function($e){if($e.h==1)return w($e,pe.X(pe.Y),2);xe=$e.i,xe===!0&&(g.u=!0),$e.h=0})}}(N))),q.graphOptionXref&&(O=Object.assign({},{calculatorName:"",calculatorIndex:0},q.graphOptionXref,{valueNumber:q.type===1?l[O]:0,valueBoolean:q.type===0?l[O]:!1,valueString:q.type===2?l[O]:""}),D.push(O)))}(M.length!==0||D.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(D),this.F=(this.F===void 0?[]:this.F).concat(M))}};function dy(l){var d,g,M,D,N,U,O;return G(function(q){switch(q.h){case 1:if(!l.u)return q.return();if(!l.F){q.h=2;break}d=a(l.F),g=d.next();case 3:if(g.done){q.h=5;break}return M=g.value,w(q,M(),4);case 4:g=d.next(),q.h=3;break;case 5:l.F=void 0;case 2:if(l.H){for(D=new l.i.GraphOptionChangeRequestList,N=a(l.H),U=N.next();!U.done;U=N.next())O=U.value,D.push_back(O);l.j.changeOptions(D),D.delete(),l.H=void 0}l.u=!1,q.h=0}})}t.initialize=function(){var l=this;return G(function(d){return d.h==1?w(d,cy(l),2):d.h!=3?w(d,fy(l),3):w(d,dy(l),0)})};function Ua(l,d){var g,M;return G(function(D){return d in l.L?D.return(l.L[d]):(g=l.locateFile(d,""),M=fetch(g).then(function(N){return N.arrayBuffer()}),l.L[d]=M,D.return(M))})}t.overrideFile=function(l,d){this.j?this.j.overrideFile(l,d):this.D[l]=d},t.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},t.send=function(l,d){var g=this,M,D,N,U,O,q,pe,xe,$e;return G(function(ze){switch(ze.h){case 1:return g.h.inputs?(M=1e3*(d??performance.now()),w(ze,g.I,2)):ze.return();case 2:return w(ze,g.initialize(),3);case 3:for(D=new g.i.PacketDataList,N=a(Object.keys(l)),U=N.next();!U.done;U=N.next())if(O=U.value,q=g.h.inputs[O]){e:{var Re=l[O];switch(q.type){case"video":var Ke=g.s[q.stream];if(Ke||(Ke=new Vu(g.i,g.K),g.s[q.stream]=Ke),Ke.m===0&&(Ke.m=Ke.i.createTexture()),typeof HTMLVideoElement<"u"&&Re instanceof HTMLVideoElement)var at=Re.videoWidth,Ct=Re.videoHeight;else typeof HTMLImageElement<"u"&&Re instanceof HTMLImageElement?(at=Re.naturalWidth,Ct=Re.naturalHeight):(at=Re.width,Ct=Re.height);Ct={glName:Ke.m,width:at,height:Ct},at=Ke.h,at.canvas.width=Ct.width,at.canvas.height=Ct.height,at.activeTexture(at.TEXTURE0),Ke.i.bindTexture2d(Ke.m),at.texImage2D(at.TEXTURE_2D,0,at.RGBA,at.RGBA,at.UNSIGNED_BYTE,Re),Ke.i.bindTexture2d(0),Ke=Ct;break e;case"detections":for(Ke=g.s[q.stream],Ke||(Ke=new sy(g.i),g.s[q.stream]=Ke),Ke.data||(Ke.data=new Ke.h.DetectionListData),Ke.data.reset(Re.length),Ct=0;Ct<Re.length;++Ct){at=Re[Ct];var At=Ke.data,tn=At.setBoundingBox,jn=Ct,Rn=at.la,_t=new Da;if(vt(_t,1,Rn.ra),vt(_t,2,Rn.sa),vt(_t,3,Rn.height),vt(_t,4,Rn.width),vt(_t,5,Rn.rotation),De(_t,6,Rn.pa),Rn=_t.l(),tn.call(At,jn,Rn),at.ea)for(At=0;At<at.ea.length;++At){_t=at.ea[At],tn=Ke.data,jn=tn.addNormalizedLandmark,Rn=Ct,_t=Object.assign({},_t,{visibility:_t.visibility?_t.visibility:0});var nn=new hs;vt(nn,1,_t.x),vt(nn,2,_t.y),vt(nn,3,_t.z),_t.visibility&&vt(nn,4,_t.visibility),_t=nn.l(),jn.call(tn,Rn,_t)}if(at.ba)for(At=0;At<at.ba.length;++At)tn=Ke.data,jn=tn.addClassification,Rn=Ct,_t=at.ba[At],nn=new ds,vt(nn,2,_t.score),_t.index&&De(nn,1,_t.index),_t.label&&De(nn,3,_t.label),_t.displayName&&De(nn,4,_t.displayName),_t=nn.l(),jn.call(tn,Rn,_t)}Ke=Ke.data;break e;default:Ke={}}}switch(pe=Ke,xe=q.stream,q.type){case"video":D.pushTexture2d(Object.assign({},pe,{stream:xe,timestamp:M}));break;case"detections":$e=pe,$e.stream=xe,$e.timestamp=M,D.pushDetectionList($e);break;default:throw Error("Unknown input config type: '"+q.type+"'")}}return g.j.send(D),w(ze,g.I,4);case 4:D.delete(),ze.h=0}})};function hy(l,d,g){var M,D,N,U,O,q,pe,xe,$e,ze,Re,Ke,at,Ct;return G(function(At){switch(At.h){case 1:if(!g)return At.return(d);for(M={},D=0,N=a(Object.keys(g)),U=N.next();!U.done;U=N.next())O=U.value,q=g[O],typeof q!="string"&&q.type==="texture"&&d[q.stream]!==void 0&&++D;1<D&&(l.M=!1),pe=a(Object.keys(g)),U=pe.next();case 2:if(U.done){At.h=4;break}if(xe=U.value,$e=g[xe],typeof $e=="string")return at=M,Ct=xe,w(At,py(l,xe,d[$e]),14);if(ze=d[$e.stream],$e.type==="detection_list"){if(ze){for(var tn=ze.getRectList(),jn=ze.getLandmarksList(),Rn=ze.getClassificationsList(),_t=[],nn=0;nn<tn.size();++nn){var $i=iy(tn.get(nn)),gy=Ht($i,1),vy=Ht($i,2),_y=Ht($i,3),yy=Ht($i,4),xy=Ht($i,5,0),Na=void 0;Na=Na===void 0?0:Na,$i={la:{ra:gy,sa:vy,height:_y,width:yy,rotation:xy,pa:It(Ee($i,6),Na)},ea:et(Rh(jn.get(nn)),hs,1).map(Lh),ba:Ph(wh(Rn.get(nn)))},_t.push($i)}tn=_t}else tn=[];M[xe]=tn,At.h=7;break}if($e.type==="proto_list"){if(ze){for(tn=Array(ze.size()),jn=0;jn<ze.size();jn++)tn[jn]=ze.get(jn);ze.delete()}else tn=[];M[xe]=tn,At.h=7;break}if(ze===void 0){At.h=3;break}if($e.type==="float_list"){M[xe]=ze,At.h=7;break}if($e.type==="proto"){M[xe]=ze,At.h=7;break}if($e.type!=="texture")throw Error("Unknown output config type: '"+$e.type+"'");return Re=l.v[xe],Re||(Re=new Vu(l.i,l.K),l.v[xe]=Re),w(At,Uh(Re,ze,l.M),13);case 13:Ke=At.i,M[xe]=Ke;case 7:$e.transform&&M[xe]&&(M[xe]=$e.transform(M[xe])),At.h=3;break;case 14:at[Ct]=At.i;case 3:U=pe.next(),At.h=2;break;case 4:return At.return(M)}})}function py(l,d,g){var M;return G(function(D){return typeof g=="number"||g instanceof Uint8Array||g instanceof l.i.Uint8BlobList?D.return(g):g instanceof l.i.Texture2dDataOut?(M=l.v[d],M||(M=new Vu(l.i,l.K),l.v[d]=M),D.return(Uh(M,g,l.M))):D.return(void 0)})}function my(l,d){for(var g=d.name||"$",M=[].concat(u(d.wants)),D=new l.i.StringList,N=a(d.wants),U=N.next();!U.done;U=N.next())D.push_back(U.value);N=l.i.PacketListener.implement({onResults:function(O){for(var q={},pe=0;pe<d.wants.length;++pe)q[M[pe]]=O.get(pe);var xe=l.listeners[g];xe&&(l.I=hy(l,q,d.outs).then(function($e){$e=xe($e);for(var ze=0;ze<d.wants.length;++ze){var Re=q[M[ze]];typeof Re=="object"&&Re.hasOwnProperty&&Re.hasOwnProperty("delete")&&Re.delete()}$e&&(l.I=$e)}))}}),l.j.attachMultiListener(D,N),D.delete()}t.onResults=function(l,d){this.listeners[d||"$"]=l},X("Solution",Wu),X("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ih(l){return l===void 0&&(l=0),l===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Fh(l){var d=this;l=l||{},this.h=new Wu({locateFile:l.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Ih(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Dh},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Dh},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(M){return Ph(wh(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var M,D,N;return G(function(U){return U.h==1?(M=Ih(g),D="third_party/mediapipe/modules/hand_landmark/"+M,w(U,Ua(d.h,M),2)):(N=U.i,d.h.overrideFile(D,N),U.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}t=Fh.prototype,t.close=function(){return this.h.close(),Promise.resolve()},t.onResults=function(l){this.h.onResults(l)},t.initialize=function(){var l=this;return G(function(d){return w(d,l.h.initialize(),0)})},t.reset=function(){this.h.reset()},t.send=function(l){var d=this;return G(function(g){return w(g,d.h.send(l),0)})},t.setOptions=function(l){this.h.setOptions(l)},X("Hands",Fh),X("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),X("VERSION","0.4.1675469240")}).call(ju);const oC={},Rg=t=>{let e;const n=new Set,i=(h,p)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const _=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(S=>S(e,_))}},r=()=>e,u={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(oC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,u);return u},aC=t=>t?Rg(t):Rg;var F0={exports:{}},O0={},k0={exports:{}},B0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=he;function lC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var uC=typeof Object.is=="function"?Object.is:lC,cC=co.useState,fC=co.useEffect,dC=co.useLayoutEffect,hC=co.useDebugValue;function pC(t,e){var n=e(),i=cC({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return dC(function(){r.value=n,r.getSnapshot=e,Zc(r)&&s({inst:r})},[t,n,e]),fC(function(){return Zc(r)&&s({inst:r}),t(function(){Zc(r)&&s({inst:r})})},[t]),hC(n),n}function Zc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!uC(t,n)}catch{return!0}}function mC(t,e){return e()}var gC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?mC:pC;B0.useSyncExternalStore=co.useSyncExternalStore!==void 0?co.useSyncExternalStore:gC;k0.exports=B0;var vC=k0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=he,_C=vC;function yC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xC=typeof Object.is=="function"?Object.is:yC,SC=_C.useSyncExternalStore,EC=Ou.useRef,MC=Ou.useEffect,wC=Ou.useMemo,TC=Ou.useDebugValue;O0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=EC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=wC(function(){function u(_){if(!c){if(c=!0,h=_,_=i(_),r!==void 0&&o.hasValue){var S=o.value;if(r(S,_))return p=S}return p=_}if(S=p,xC(h,_))return S;var E=i(_);return r!==void 0&&r(S,E)?(h=_,S):(h=_,p=E)}var c=!1,h,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,i,r]);var a=SC(t,s[0],s[1]);return MC(function(){o.hasValue=!0,o.value=a},[a]),TC(a),a};F0.exports=O0;var AC=F0.exports;const RC=Lg(AC),z0={},{useDebugValue:CC}=cd,{useSyncExternalStoreWithSelector:bC}=RC;let Cg=!1;const PC=t=>t;function LC(t,e=PC,n){(z0?"production":void 0)!=="production"&&n&&!Cg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Cg=!0);const i=bC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return CC(i),i}const bg=t=>{(z0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?aC(t):t,n=(i,r)=>LC(e,i,r);return Object.assign(n,e),n},H0=t=>t?bg(t):bg,DC=[{id:"n0",label:"Topology Engine",snippet:"Core architecture of how thought-nodes relate and organize.",clusterIndex:0,centralSimilarity:1,connectionsCount:6},{id:"n1",label:"Embedding Space",snippet:"High-dimensional vector space where semantic proximity encodes meaning.",clusterIndex:0,centralSimilarity:.88,connectionsCount:5},{id:"n2",label:"Information Tools",snippet:"Historical pattern recognition and artificial memory systems.",clusterIndex:1,centralSimilarity:.7,connectionsCount:3},{id:"n3",label:"Artificial Life",snippet:"Self-organization and morphogenesis in complex systems.",clusterIndex:2,centralSimilarity:.55,connectionsCount:3}],UC=[{id:"e0",sourceNodeId:"n0",targetNodeId:"n1",weight:.92},{id:"e1",sourceNodeId:"n0",targetNodeId:"n2",weight:.78},{id:"e2",sourceNodeId:"n1",targetNodeId:"n3",weight:.75},{id:"e3",sourceNodeId:"n2",targetNodeId:"n3",weight:.7}],NC=H0(t=>({nodes:DC,edges:UC,selectedNodeId:null,setGraph:(e,n)=>t({nodes:e,edges:n}),selectNode:e=>t({selectedNodeId:e})}));function IC(){const t=he.useRef(null),e=he.useRef(null),n=he.useRef(),i=he.useRef(),r=he.useRef(),s=he.useRef(),o=he.useRef(new gt),a=he.useRef([]),u=he.useRef([]),c=he.useRef(),h=he.useRef(0),p=he.useRef(null),m=he.useRef({theta:.3,phi:1.1,radius:18}),_=he.useRef({theta:.3,phi:1.1,radius:18}),S=he.useRef(!1),E=he.useRef({x:0,y:0}),v=he.useRef(null),f=he.useRef(!1),y=he.useRef(0),x=he.useRef(0),w=he.useRef({last:performance.now(),frames:0,value:0}),I=he.useRef(null),L=he.useRef([]),[b,k]=he.useState("auto"),[A,R]=he.useState(.045),[G,ie]=he.useState(5),[fe,B]=he.useState(250),[X,te]=he.useState(!0),[se,z]=he.useState(!1),[j,Q]=he.useState(!1),[re,ae]=he.useState({active:!1,step:"open",openSamples:[],pinchSamples:[],twoHandSamples:[]}),[K,oe]=he.useState({hands:0,gesture:"NONE",fingersUp:0,pinchDist:0,confidence:0,tracking:"idle",leftLabel:"L: -",rightLabel:"R: -",fps:0,inferMs:0}),{nodes:_e,edges:be,selectedNodeId:Le,selectNode:We}=NC();return he.useEffect(()=>{const Te=localStorage.getItem("tot-session");if(Te)try{const de=JSON.parse(Te);typeof de.theta=="number"&&(m.current.theta=de.theta),typeof de.phi=="number"&&(m.current.phi=de.phi),typeof de.radius=="number"&&(m.current.radius=de.radius),_.current={...m.current},typeof de.pinchThreshold=="number"&&R(de.pinchThreshold),typeof de.rotationDeadzone=="number"&&ie(de.rotationDeadzone),typeof de.pinchCooldownMs=="number"&&B(de.pinchCooldownMs),typeof de.showLandmarks=="boolean"&&te(de.showLandmarks),typeof de.focusBackground=="boolean"&&z(de.focusBackground),de.selectedNodeId&&We(de.selectedNodeId)}catch{}},[We]),he.useEffect(()=>{const Te=()=>{localStorage.setItem("tot-session",JSON.stringify({theta:m.current.theta,phi:m.current.phi,radius:m.current.radius,selectedNodeId:Le,pinchThreshold:A,rotationDeadzone:G,pinchCooldownMs:fe,showLandmarks:X,focusBackground:se}))};return window.addEventListener("beforeunload",Te),()=>window.removeEventListener("beforeunload",Te)},[Le,A,G,fe,X,se]),he.useEffect(()=>{if(!t.current)return;const Te=new QR;Te.fog=new fh(263178,.022),n.current=Te;const de=new Kn(60,window.innerWidth/window.innerHeight,.1,300);i.current=de;const Ne=new U0({canvas:t.current,antialias:!0,alpha:!0});Ne.setPixelRatio(Math.min(devicePixelRatio,2)),Ne.setSize(window.innerWidth,window.innerHeight),Ne.setClearColor(263178,0),r.current=Ne,s.current=new rC,Te.add(new iC(1122867,3));const V=new ii,Je=[];for(let ne=0;ne<2e3;ne++)Je.push((Math.random()-.5)*300,(Math.random()-.5)*300,(Math.random()-.5)*300);V.setAttribute("position",new ei(Je,3)),Te.add(new eC(V,new I0({color:3359846,size:.15})));const Ae=()=>{!i.current||!r.current||(i.current.aspect=window.innerWidth/window.innerHeight,i.current.updateProjectionMatrix(),r.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Ae);const Ye=ne=>{if(!S.current){o.current.x=ne.clientX/window.innerWidth*2-1,o.current.y=-(ne.clientY/window.innerHeight)*2+1;return}const ee=ne.clientX-E.current.x,ge=ne.clientY-E.current.y;_.current.theta-=ee*.005,_.current.phi=Math.max(.15,Math.min(Math.PI-.15,_.current.phi+ge*.005)),E.current={x:ne.clientX,y:ne.clientY}},Fe=ne=>{S.current=!0,E.current={x:ne.clientX,y:ne.clientY}},yt=()=>{S.current=!1},tt=ne=>{_.current.radius=Math.max(6,Math.min(40,_.current.radius+ne.deltaY*.02))},P=()=>{if(!s.current||!i.current)return;s.current.setFromCamera(o.current,i.current);const ne=s.current.intersectObjects(a.current);We(ne.length?ne[0].object.userData.nodeId:null)},T=t.current;T.addEventListener("mousemove",Ye),T.addEventListener("mousedown",Fe),T.addEventListener("mouseup",yt),T.addEventListener("wheel",tt),T.addEventListener("click",P);const Y=()=>{if(c.current=requestAnimationFrame(Y),!i.current||!r.current||!n.current)return;w.current.frames+=1;const ne=performance.now();ne-w.current.last>=1e3&&(w.current.value=w.current.frames,w.current.frames=0,w.current.last=ne);const ee=m.current,ge=_.current;ee.theta+=(ge.theta-ee.theta)*.07,ee.phi+=(ge.phi-ee.phi)*.07,ee.radius+=(ge.radius-ee.radius)*.07,i.current.position.set(ee.radius*Math.sin(ee.phi)*Math.sin(ee.theta),ee.radius*Math.cos(ee.phi),ee.radius*Math.sin(ee.phi)*Math.cos(ee.theta)),i.current.lookAt(0,0,0);const ue=Date.now()*.001;if(a.current.forEach(we=>{const Pe=we.userData.nodeId===Le;we.scale.setScalar(1+.05*Math.sin(ue*1.4)+(Pe?.2:0)),we.rotation.y+=.01}),s.current){s.current.setFromCamera(o.current,i.current);const we=s.current.intersectObjects(a.current);I.current=we.length?we[0].object.userData.nodeId:null}r.current.render(n.current,i.current)};Y();const le=document.getElementById("webcam-bg");if(le){le.classList.toggle("focus",se);const ne=new sC.Hands({locateFile:ee=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4/${ee}`});ne.setOptions({selfieMode:!1,maxNumHands:2,modelComplexity:1,minDetectionConfidence:.45,minTrackingConfidence:.45}),ne.onResults(ee=>{var Se,ye,Ve,Oe;if(b==="off"||!i.current||!s.current)return;const ge=e.current,ue=ge==null?void 0:ge.getContext("2d");ge&&ue&&(ge.width=window.innerWidth,ge.height=window.innerHeight,ue.clearRect(0,0,ge.width,ge.height));const we=ee.multiHandLandmarks||[],Pe=ee.multiHandedness||[];if(!we.length){v.current=null,f.current=!1,oe(ke=>({...ke,tracking:"searching",hands:0,gesture:"NONE",fingersUp:0,pinchDist:0,confidence:0,fps:w.current.value,inferMs:Number(x.current.toFixed(1))}));return}const Ie=we.filter(ke=>{const je=ke.map(pt=>pt.x),ht=ke.map(pt=>pt.y);return(Math.max(...je)-Math.min(...je))*(Math.max(...ht)-Math.min(...ht))>.03});if(!Ie.length)return;const ce=Ie[0],dt=ce[0],it=ce[4],He=ce[8];o.current.x=He.x*2-1,o.current.y=-(He.y*2-1);const Be={x:dt.x*window.innerWidth,y:dt.y*window.innerHeight};if(v.current){const ke=Be.x-v.current.x,je=Be.y-v.current.y;Math.hypot(ke,je)>G&&(_.current.theta-=ke*.0038,_.current.phi=Math.max(.15,Math.min(Math.PI-.15,_.current.phi+je*.0038)))}if(v.current=Be,Ie.length>1){const ke=Math.hypot(Ie[0][0].x-Ie[1][0].x,Ie[0][0].y-Ie[1][0].y);_.current.radius=Math.max(6,Math.min(40,7+ke*35))}const Ce=Math.hypot(it.x-He.x,it.y-He.y),Ze=Ce<A,ct=FC(ce,((Se=Pe==null?void 0:Pe[0])==null?void 0:Se.label)||"Right"),xt=Ie.length>1?"TWO-HAND":Ze?"PINCH":"POINT",qe=Number((((ye=Pe==null?void 0:Pe[0])==null?void 0:ye.score)??.6).toFixed(2)),ve=(Ve=Pe==null?void 0:Pe.find(ke=>ke.label==="Left"))==null?void 0:Ve.score,F=(Oe=Pe==null?void 0:Pe.find(ke=>ke.label==="Right"))==null?void 0:Oe.score;if(oe({hands:Ie.length,gesture:xt,fingersUp:ct,pinchDist:Number(Ce.toFixed(3)),confidence:qe,tracking:"locked",leftLabel:`L: ${ve?ve.toFixed(2):"-"}`,rightLabel:`R: ${F?F.toFixed(2):"-"}`,fps:w.current.value,inferMs:Number(x.current.toFixed(1))}),Ze&&!f.current&&Date.now()-y.current>fe){s.current.setFromCamera(o.current,i.current);const ke=s.current.intersectObjects(a.current);We(ke.length?ke[0].object.userData.nodeId:null),y.current=Date.now()}if(f.current=Ze,j&&(L.current.push({t:Date.now(),gesture:xt,hands:Ie.length,fingersUp:ct,pinchDist:Number(Ce.toFixed(3))}),L.current.length>400&&L.current.shift()),re.active){if(re.step==="open"&&ct>=4)ae(ke=>({...ke,openSamples:[...ke.openSamples,Ce]}));else if(re.step==="pinch"&&Ze)ae(ke=>({...ke,pinchSamples:[...ke.pinchSamples,Ce]}));else if(re.step==="twohand"&&Ie.length>1){const ke=Math.hypot(Ie[0][0].x-Ie[1][0].x,Ie[0][0].y-Ie[1][0].y);ae(je=>({...je,twoHandSamples:[...je.twoHandSamples,ke]}))}}if(ge&&ue&&X){ue.strokeStyle="rgba(74,240,255,0.8)",ue.fillStyle="rgba(0,255,180,0.9)",ue.lineWidth=2;const ke=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];Ie.forEach(je=>{ke.forEach(([ht,wt])=>{const pt=ge.width-je[ht].x*ge.width,Dt=je[ht].y*ge.height,Tn=ge.width-je[wt].x*ge.width,An=je[wt].y*ge.height;ue.beginPath(),ue.moveTo(pt,Dt),ue.lineTo(Tn,An),ue.stroke()}),je.forEach(ht=>{ue.beginPath(),ue.arc(ge.width-ht.x*ge.width,ht.y*ge.height,4,0,Math.PI*2),ue.fill()})})}if(ge&&ue&&I.current){const ke=a.current.find(je=>je.userData.nodeId===I.current);if(ke&&i.current){const je=ke.position.clone().project(i.current),ht=(je.x*.5+.5)*ge.width,wt=(-je.y*.5+.5)*ge.height;ue.beginPath(),ue.strokeStyle="rgba(255,204,68,0.95)",ue.lineWidth=2,ue.arc(ht,wt,12,0,Math.PI*2),ue.stroke()}}}),(async()=>{try{p.current=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1}),le.srcObject=p.current,await le.play();const ee=document.createElement("canvas"),ge=ee.getContext("2d"),ue=async()=>{if(!le||!ge)return;const we=performance.now();if(le.readyState>=2){const Pe=le.videoWidth||640,Ie=le.videoHeight||480;ee.width=Pe,ee.height=Ie,ge.save(),ge.filter="brightness(1.25) contrast(1.2) saturate(1.15)",ge.drawImage(le,0,0,Pe,Ie),ge.restore(),b!=="off"&&await ne.send({image:ee})}x.current=performance.now()-we,h.current=requestAnimationFrame(ue)};ue()}catch{oe(ee=>({...ee,tracking:"camera_blocked"}))}})()}return()=>{var ne;window.removeEventListener("resize",Ae),T.removeEventListener("mousemove",Ye),T.removeEventListener("mousedown",Fe),T.removeEventListener("mouseup",yt),T.removeEventListener("wheel",tt),T.removeEventListener("click",P),c.current&&cancelAnimationFrame(c.current),h.current&&cancelAnimationFrame(h.current),(ne=p.current)==null||ne.getTracks().forEach(ee=>ee.stop()),Ne.dispose()}},[se,fe,A,j,G,We,Le,X,b,re.active,re.step]),he.useEffect(()=>{if(!re.active)return;const Te=setInterval(()=>{ae(de=>{if(de.step==="open"&&de.openSamples.length>=25)return{...de,step:"pinch"};if(de.step==="pinch"&&de.pinchSamples.length>=20)return{...de,step:"twohand"};if(de.step==="twohand"&&de.twoHandSamples.length>=20){const Ne=Math.max(.02,Math.min(.07,(Pg(de.openSamples)+Pg(de.pinchSamples))/2));return R(Ne),{...de,active:!1,step:"done"}}return de})},300);return()=>clearInterval(Te)},[re.active]),he.useEffect(()=>{const Te=de=>{b==="off"&&(de.key==="ArrowLeft"&&(_.current.theta+=.08),de.key==="ArrowRight"&&(_.current.theta-=.08),de.key==="ArrowUp"&&(_.current.phi=Math.max(.15,_.current.phi-.08)),de.key==="ArrowDown"&&(_.current.phi=Math.min(Math.PI-.15,_.current.phi+.08)),(de.key==="+"||de.key==="=")&&(_.current.radius=Math.max(6,_.current.radius-1)),de.key==="-"&&(_.current.radius=Math.min(40,_.current.radius+1)))};return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)},[b]),he.useEffect(()=>{if(!n.current||(a.current.forEach(Ne=>n.current.remove(Ne)),u.current.forEach(Ne=>n.current.remove(Ne)),a.current=[],u.current=[],!_e.length))return;const Te=6,de={};_e.forEach((Ne,V)=>{const Je=V/_e.length*Math.PI*2;de[Ne.id]=new W(Te*Math.cos(Je),(V-_e.length/2)*.3,Te*Math.sin(Je))}),_e.forEach(Ne=>{const V=Ne.centralSimilarity>.8?65460:4911359,Je=new tC({color:V,emissive:V,emissiveIntensity:.35,transparent:!0,opacity:.9}),Ae=new zi(new hh(.4,1),Je);Ae.position.copy(de[Ne.id]),Ae.userData.nodeId=Ne.id,n.current.add(Ae),a.current.push(Ae)}),be.forEach(Ne=>{const V=de[Ne.sourceNodeId],Je=de[Ne.targetNodeId];if(!V||!Je)return;const Ae=new JR(new ii().setFromPoints([V,Je]),new N0({color:65460,transparent:!0,opacity:Math.min(.8,Ne.weight*.9)}));n.current.add(Ae),u.current.push(Ae)})},[_e,be]),Qe.jsxs("div",{className:"relative w-full h-full",children:[Qe.jsx("canvas",{ref:t,className:"w-full h-full"}),Qe.jsx("canvas",{ref:e,className:"absolute inset-0 z-10 pointer-events-none"}),Qe.jsxs("div",{className:"absolute top-3 left-3 z-20 bg-black/60 border border-emerald-400/30 text-emerald-300 px-3 py-2 text-[11px] leading-5 tracking-wide",children:[Qe.jsxs("div",{children:["tracking: ",K.tracking]}),Qe.jsxs("div",{children:["mode: ",b]}),Qe.jsxs("div",{children:["hands: ",K.hands]}),Qe.jsxs("div",{children:["gesture: ",K.gesture]}),Qe.jsxs("div",{children:["fingers up: ",K.fingersUp]}),Qe.jsxs("div",{children:["confidence: ",K.confidence]}),Qe.jsxs("div",{children:["pinch dist: ",K.pinchDist]}),Qe.jsxs("div",{children:[K.leftLabel," | ",K.rightLabel]}),Qe.jsxs("div",{children:["fps: ",K.fps," infer: ",K.inferMs,"ms"]})]}),Qe.jsxs("div",{className:"absolute top-3 right-3 z-20 bg-black/70 border border-cyan-400/30 text-cyan-200 px-3 py-2 text-[11px] w-64 space-y-2",children:[Qe.jsx("div",{className:"font-semibold tracking-wide",children:"Tracking Controls"}),Qe.jsxs("div",{className:"flex gap-2",children:[Qe.jsx("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>k("auto"),children:"AUTO"}),Qe.jsx("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>k("on"),children:"HANDS"}),Qe.jsx("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>k("off"),children:"MOUSE/KEY"})]}),Qe.jsxs("label",{className:"block",children:["pinch threshold: ",A.toFixed(3),Qe.jsx("input",{type:"range",min:"0.02",max:"0.08",step:"0.001",value:A,onChange:Te=>R(Number(Te.target.value)),className:"w-full"})]}),Qe.jsxs("label",{className:"block",children:["rotation deadzone: ",G,"px",Qe.jsx("input",{type:"range",min:"1",max:"20",step:"1",value:G,onChange:Te=>ie(Number(Te.target.value)),className:"w-full"})]}),Qe.jsxs("label",{className:"block",children:["pinch cooldown: ",fe,"ms",Qe.jsx("input",{type:"range",min:"50",max:"800",step:"10",value:fe,onChange:Te=>B(Number(Te.target.value)),className:"w-full"})]}),Qe.jsxs("div",{className:"flex flex-wrap gap-2",children:[Qe.jsxs("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>te(Te=>!Te),children:["landmarks: ",X?"on":"off"]}),Qe.jsxs("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>z(Te=>!Te),children:["bg focus: ",se?"on":"off"]}),Qe.jsxs("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>Q(Te=>!Te),children:["record: ",j?"on":"off"]}),Qe.jsx("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>ae({active:!0,step:"open",openSamples:[],pinchSamples:[],twoHandSamples:[]}),children:"calibrate"}),Qe.jsx("button",{className:"px-2 py-1 border border-cyan-400/40",onClick:()=>{const Te=new Blob([JSON.stringify(L.current,null,2)],{type:"application/json"}),de=URL.createObjectURL(Te),Ne=document.createElement("a");Ne.href=de,Ne.download="gesture-log.json",Ne.click(),URL.revokeObjectURL(de)},children:"export log"})]}),re.active&&Qe.jsxs("div",{className:"text-yellow-300",children:["calibration step: ",re.step]})]})]})}function FC(t,e){let n=0;return[[8,6],[12,10],[16,14],[20,18]].forEach(([r,s])=>{t[r].y<t[s].y&&n++}),e==="Right"?t[4].x<t[3].x&&n++:t[4].x>t[3].x&&n++,n}function Pg(t){return t.length?t.reduce((e,n)=>e+n,0)/t.length:0}function OC(){return Qe.jsxs("div",{className:"w-screen h-screen bg-bg text-text overflow-hidden",children:[Qe.jsx("video",{id:"webcam-bg",className:"webcam-bg",autoPlay:!0,playsInline:!0,muted:!0}),Qe.jsx(IC,{})]})}const G0="tot-dev-checklist",wl=[{id:"ai-map-notes",title:"Wire the /ai/map-notes full pipeline",description:"Parse notes → generate embeddings via voyage-3 → store nodes in Supabase with pgvector → run cosine similarity SQL → cluster with KMeans → return complete graph JSON.",impact:"critical",estimate:"2 days",status:"todo",prompt:"Implement the /ai/map-notes endpoint: use Claude to extract nodes, generate voyage-3 embeddings, store in Supabase with pgvector, generate edges via cosine similarity, cluster with KMeans, and return full graph JSON."},{id:"zustand-graph-store",title:"Complete the Zustand graph store",description:"Finish graphStore with all actions: setGraph, addNode, updateNode, deleteNode, setEdges, materializeGhost. Wire it to backend API calls via graphService.",impact:"critical",estimate:"1 day",status:"todo",prompt:"Build a Zustand graph store with nodes, edges, ghostNodes, clusterNames plus actions to setGraph, add/update/delete nodes, set/add edges, and materialize ghost nodes. Connect it to the backend graph CRUD APIs."},{id:"graph-canvas-real",title:"Build the real GraphCanvas with nodes + edges",description:"Replace the stub GraphCanvas.tsx with the full Three.js implementation: icosahedronGeometry nodes, LineBasicMaterial edges, glow sprites, raycasting for click-to-select, smooth camera lerp.",impact:"critical",estimate:"2 days",status:"todo",prompt:"Implement GraphCanvas using Three.js: render nodes as glowing icosahedrons, edges as additive lines, support three topologies, and add raycasting for node selection with smooth camera orbit."},{id:"auth-flow",title:"Auth flow end-to-end",description:"Login/signup page using Supabase Auth. JWT injected into every Axios request. AuthGuard wraps protected routes. Auto-redirect on session expiry.",impact:"high",estimate:"1 day",status:"todo",prompt:"Implement full auth flow using Supabase Auth: login/signup UI, store session in Zustand, attach JWT to Axios, and guard routes with redirects on expired sessions."},{id:"graph-crud",title:"Graph CRUD + persistence",description:"Create, load, save, delete graphs via the backend. Graphs list page. Auto-save on node changes with debounce. Load graph from URL param /graph/:id.",impact:"high",estimate:"1 day",status:"todo",prompt:"Add graph CRUD: list/create/update/delete graphs from FastAPI, auto-save node changes with debounce, and route /graph/:id that loads a specific graph."}];function kC(){if(typeof window>"u")return wl;try{const t=window.localStorage.getItem(G0);if(!t)return wl;const e=JSON.parse(t),n=new Map;return wl.forEach(i=>n.set(i.id,i)),e.forEach(i=>n.set(i.id,{...n.get(i.id),...i})),Array.from(n.values())}catch{return wl}}const BC=H0((t,e)=>({tasks:kC(),updateStatus:(n,i)=>{const r=e().tasks.map(s=>s.id===n?{...s,status:i}:s);t({tasks:r}),typeof window<"u"&&window.localStorage.setItem(G0,JSON.stringify(r))}}));function zC(){const{tasks:t,updateStatus:e}=BC();return Qe.jsx("div",{className:"w-screen h-screen flex items-center justify-center bg-bg text-text",children:Qe.jsx("p",{className:"text-xs tracking-[0.2em] uppercase text-text2",children:"Dev checklist only available in development mode"})})}function HC(){return Qe.jsxs(HE,{children:[Qe.jsx(Ol,{path:"/",element:Qe.jsx(OC,{})}),Qe.jsx(Ol,{path:"/dev/checklist",element:Qe.jsx(zC,{})}),Qe.jsx(Ol,{path:"*",element:Qe.jsx(BE,{to:"/",replace:!0})})]})}Qc.createRoot(document.getElementById("root")).render(Qe.jsx(cd.StrictMode,{children:Qe.jsx(WE,{children:Qe.jsx(HC,{})})}));

(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[267],{i5jj:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1).EventEmitter,u=n(2),c=function(e,t){return new Promise((function(n){u(t,{el:e},(function(e){n(e)}))}))},f=["html","web_project","coffeescript","javascript","babel","roy"],l=["basic","python_turtle"],p=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.useIframe,s=n.timeoutCallback,a=n.iframeParent,u=n.track;r(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return c._language=e,c._useIframe=!!i,c._iframeParent=a,c._timeoutCallback=s,c._loadLibraryPromises={},c._track=u,c}return i(t,e),s(t,[{key:"load",value:function(e){var t=this,n=e.iframeOrigin,r=e.languageBundleSrc;return this._lastLoadArgs={iframeOrigin:n,languageBundleSrc:r},new Promise((function(e,o){t._useIframe?(t._el=document.createElement("div"),t._iframeParent?(t._el.style.height="100%",t._el.style.width="100%",t._iframeParent.appendChild(t._el)):(t._el.style.display="none",document.body.appendChild(t._el)),c(t._el,n).then((function(n){t._stuffContext=n,n.on("result",(function(e){t._resolve(e)})),n.on("ready",(function(){return e()})),n.on("warn",(function(e){return t.emit("warn",e)})),n.on("checkLine",(function(e){return t.checkLineCb(e)})),n.on("output",(function(e){return t._stdout(e)})),n.on("stderr",(function(e){return t._stderr(e)})),n.on("resetReady",(function(){return t._resetReady()})),n.on("loadedLibrary",(function(e){return t._loadLibraryPromises[e].resolve()})),n.on("loadFailedLibrary",(function(e,n){return t._loadLibraryPromises[e].reject(n)})),n.on("track",(function(e){var n=e.eventName,r=e.props;t._track&&t._track(n,r)})),n.on("error",(function(e){return t._reject(new Error(e))})),n.on("input",(function(){return t.emit("input")})),n.on("clearConsole",(function(){return t.emit("clearConsole")})),n.load("<script src="+r+"><\/script>")}))):(t._worker=new Worker(r),t._worker.onerror=function(e){return o(e.data||"unknown error")},t._worker.onmessage=function(n){var r=n.data;switch(r.type){case"result":t._resolve({data:r.data,error:r.error});break;case"error":t._reject(new Error(r.data));break;case"output":t._stdout(r.data);break;case"stderr":t._stderr(r.data);break;case"ready":e();break;case"warn":t.emit("warn",r.data);break;case"checkLine":t.checkLineCb(r.data);break;case"resetReady":t._resetReady();break;case"track":t._track&&t._track(r.data.eventName,r.data.props);break;case"input":t.emit("input");break;case"clearConsole":t.emit("clearConsole");break;default:throw new Error("Unkown message type: "+r.type)}})}))}},{key:"runProject",value:function(e,t){var n=this,r=t.stdout,o=t.stderr,i=t.infiniteLoopProtection,s=t.replId,a=t.url;return this._stdout=r||function(){},this._stderr=o||function(){},new Promise((function(t,r){n._stuffContext.emit("runProject",{files:e,infiniteLoopProtection:i,replId:s,url:a}),n._resolve=function(e){t(e)},n._reject=r}))}},{key:"evaluate",value:function(e,t){var n=this,r=t.stdout,o=t.stderr,i=t.infiniteLoopProtection;return new Promise((function(t,s){n._stdout=r||function(){},n._stderr=o||function(){},n._reject=s,n._useIframe?(n._stuffContext.emit("evaluate",{code:e,infiniteLoopProtection:i}),n._resolve=function(e){t(e)}):(n._worker.postMessage({type:"evaluate",data:e}),n._resolve=function(e){t(e)})}))}},{key:"destroy",value:function(){if(this._useIframe){if(!this._el)return;if(!this._el.parentNode)return void(this._el=null);this._el.parentNode.removeChild(this._el),this._el=null}else this._worker.terminate()}},{key:"write",value:function(e){this._useIframe?this._stuffContext.emit("write",e):this._worker.postMessage({type:"write",data:e})}},{key:"_resetWeb",value:function(){var e=this;return new Promise((function(t){if(!e._useIframe)throw new Error("Not supported in worker mode");e._stuffContext&&e._stuffContext.iframe&&e._stuffContext.iframe.contentWindow?(e._resetReady=function(){e._resetReady=null,t()},e._stuffContext.emit("reset")):t()}))}},{key:"stop",value:function(){l.includes(this._language)?this._stuffContext.emit("stop"):this.reset()}},{key:"reset",value:function(){return f.includes(this._language)?this._resetWeb():(this.destroy(),this.load(this._lastLoadArgs))}},{key:"checkLineEnd",value:function(e,t){this.checkLineCb=t,this._useIframe?this._stuffContext.emit("checkLine",e):this._worker.postMessage({type:"checkLine",data:e})}},{key:"runSingleUnitTests",value:function(e){var t=this,n=e.code,r=e.suiteCode,o=e.infiniteLoopProtection;return new Promise((function(e,i){t._stdout=console.log.bind(console),t._stderr=console.error.bind(console),t._resolve=e,t._reject=i,t._useIframe?t._stuffContext.emit("runSingleUnitTests",{code:n,suiteCode:r,infiniteLoopProtection:o}):t._worker.postMessage({type:"runSingleUnitTests",data:{code:n,suiteCode:r,infiniteLoopProtection:o}})}))}},{key:"runUnitTests",value:function(e){var t=this,n=e.suiteCode,r=e.files,o=e.infiniteLoopProtection;return new Promise((function(e,i){t._stdout=console.log.bind(console),t._stderr=console.error.bind(console),t._resolve=e,t._reject=i,t._stuffContext.emit("runUnitTests",{files:r,suiteCode:n,infiniteLoopProtection:o})}))}},{key:"overridePrompt",value:function(){return!!this._useIframe&&(this._stuffContext.emit("overridePrompt"),!0)}},{key:"loadLibrary",value:function(e){var t=this;return new Promise((function(n,r){t._useIframe&&(t._stuffContext.emit("loadLibrary",e),t._loadLibraryPromises[e]={resolve:n,reject:r})}))}},{key:"refreshWebProject",value:function(){if("web_project"!==this._language&&"html"!==this._language)throw new Error("Only web_project accepts refresh message");this._stuffContext.emit("refresh")}}]),t}(a);e.exports=p},function(e,t,n){"use strict";function r(e){console&&console.warn&&console.warn(e)}function o(){o.init.call(this)}function i(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function s(e,t,n,o){var s,a,u;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),u=a[t]),void 0===u)u=a[t]=n,++e._eventsCount;else if("function"==typeof u?u=a[t]=o?[n,u]:[u,n]:o?u.unshift(n):u.push(n),(s=i(e))>0&&u.length>s&&!u.warned){u.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=u.length,r(c)}return e}function a(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,y(this.listener,this.target,e))}function u(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=a.bind(r);return o.listener=n,r.wrapFn=o,o}function c(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?h(o):l(o,o.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function l(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function p(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function h(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}var d,v="object"==typeof Reflect?Reflect:null,y=v&&"function"==typeof v.apply?v.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};d=v&&"function"==typeof v.ownKeys?v.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var m=Number.isNaN||function(e){return e!==e};e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var _=10;Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return _},set:function(e){if("number"!=typeof e||e<0||m(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");_=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||m(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return i(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)y(a,this,t);else{var u=a.length,c=l(a,u);for(n=0;n<u;++n)y(c[n],this,t)}return!0},o.prototype.addListener=function(e,t){return s(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return s(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,u(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,u(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():p(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return c(this,e,!0)},o.prototype.rawListeners=function(e){return c(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},o.prototype.listenerCount=f,o.prototype.eventNames=function(){return this._eventsCount>0?d(this._events):[]}},function(e,t,n){(function(e){!function(t){"use strict";function n(e,n,s){function a(){f.handshake(),l||(s(f),l=!0)}"function"==typeof n&&(s=n,n={}),s||(s=i);var u=n&&1===n.nodeType?n:n.el||document.querySelector("body");n.el=null;var c=document.createElement("iframe"),f=new r(c,n);t.addEventListener("message",f.messageHandler.bind(f),!1),o.push(c),c.setAttribute("scrolling","no"),c.setAttribute("src",e);var l=!1;c.addEventListener("load",a,!1),u.appendChild(c)}function r(e,t){if(this.iframe=e,this.callbacks={},this.eventQ={load:[],evaljs:[],html:[]},!0===t.sandbox)this.sandbox="allow-scripts allow-same-origin";else if("string"==typeof t.sandbox){var n=t.sandbox;-1===n.indexOf("allow-scripts")&&(n+=" allow-scripts"),-1===n.indexOf("allow-same-origin")&&(n+=" allow-same-origin"),this.sandbox=n}else this.sandbox=null;this.secret=Math.ceil(999999999*Math.random())+1}var o=[],i=function(){};n.clear=function(){o.forEach((function(e){var t=e.parentElement;t&&t.removeChild(e)})),o=[]},r.prototype.handle=function(e,t){var n,r=this;if("custom"===e){var o=t;(n=this.callbacks[o.type]||[]).forEach((function(e){"function"==typeof e&&e.call(e.thisArg||r,o.data)}))}else{if(!(n=this.eventQ[e]))return;var i=n.shift();"function"==typeof i&&i.call(i.thisArg||r,t)}},r.prototype.messageHandler=function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}if(t.secret===this.secret){var n=t.data,r=t.type;this.handle(r,n)}},r.prototype.post=function(e,t){this.iframe.contentWindow.postMessage(JSON.stringify({type:e,data:t,secret:this.secret}),"*")},r.prototype.evaljs=function(e,n,r){var o=function(e){var r,o=e.error,s=o;o&&(r=t[o.__errorType__])&&((s=new r(o.message)).stack=o.stack,s.type=o.type,s.arguments=o.arguments),(n||i).call(this,s,e.result)};o.thisArg=r,this.eventQ.evaljs.push(o),this.post("evaljs",e)},r.prototype.load=function(e,t,n){(t=t||i).thisArg=n,this.eventQ.load.push(t),this.post("load",e)},r.prototype.html=function(e,t){(e=e||i).thisArg=t,this.eventQ.html.push(e),this.post("html",null)},r.prototype.handshake=function(){this.post("handshake",this.sandbox)},r.prototype.on=function(e,t,n){(t=t||i).thisArg=n,this.callbacks[e]?this.callbacks[e].push(t):this.callbacks[e]=[t]},r.prototype.off=function(e,t){var n=this.callbacks[e];if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}else this.callbacks[e]=[]},r.prototype.emit=function(e,t){this.post("_custom_"+e,t)},n.Context=r,"object"==typeof e&&e&&(e.exports=n),t.stuff=n}(window)}).call(t,n(3)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])}}]);
//# sourceMappingURL=267.67784998652aca0bba85.js.map
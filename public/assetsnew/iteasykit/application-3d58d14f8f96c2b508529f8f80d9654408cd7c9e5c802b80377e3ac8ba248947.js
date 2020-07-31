(function(){var t=this;(function(){(function(){this.Rails={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:{selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"},inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",formDisableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",formEnableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]"}}).call(this)}).call(t);var v=t.Rails;(function(){(function(){v.cspNonce=function(){var t;return(t=document.querySelector("meta[name=csp-nonce]"))&&t.content}}).call(this),function(){var r,n;n=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector,v.matches=function(t,e){return null!=e.exclude?n.call(t,e.selector)&&!n.call(t,e.exclude):n.call(t,e)},r="_ujsData",v.getData=function(t,e){var n;return null!=(n=t[r])?n[e]:void 0},v.setData=function(t,e,n){return null==t[r]&&(t[r]={}),t[r][e]=n},v.$=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))}}.call(this),function(){var n,r,i;n=v.$,i=v.csrfToken=function(){var t;return(t=document.querySelector("meta[name=csrf-token]"))&&t.content},r=v.csrfParam=function(){var t;return(t=document.querySelector("meta[name=csrf-param]"))&&t.content},v.CSRFProtection=function(t){var e;if(null!=(e=i()))return t.setRequestHeader("X-CSRF-Token",e)},v.refreshCSRFTokens=function(){var t,e;if(e=i(),t=r(),null!=e&&null!=t)return n('form input[name="'+t+'"]').forEach(function(t){return t.value=e})}}.call(this),function(){var i,e,a,n;a=v.matches,"function"!=typeof(i=window.CustomEvent)&&((i=function(t,e){var n;return(n=document.createEvent("CustomEvent")).initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}).prototype=window.Event.prototype,n=i.prototype.preventDefault,i.prototype.preventDefault=function(){var t;return t=n.call(this),this.cancelable&&!this.defaultPrevented&&Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),t}),e=v.fire=function(t,e,n){var r;return r=new i(e,{bubbles:!0,cancelable:!0,detail:n}),t.dispatchEvent(r),!r.defaultPrevented},v.stopEverything=function(t){return e(t.target,"ujs:everythingStopped"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()},v.delegate=function(t,n,e,r){return t.addEventListener(e,function(t){var e;for(e=t.target;e instanceof Element&&!a(e,n);)e=e.parentNode;if(e instanceof Element&&!1===r.call(e,t))return t.preventDefault(),t.stopPropagation()})}}.call(this),function(){var e,r,t,a,i,o;a=v.cspNonce,r=v.CSRFProtection,v.fire,e={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},v.ajax=function(n){var r;return n=i(n),r=t(n,function(){var t,e;return e=o(null!=(t=r.response)?t:r.responseText,r.getResponseHeader("Content-Type")),2===Math.floor(r.status/100)?"function"==typeof n.success&&n.success(e,r.statusText,r):"function"==typeof n.error&&n.error(e,r.statusText,r),"function"==typeof n.complete?n.complete(r,r.statusText):void 0}),!(null!=n.beforeSend&&!n.beforeSend(r,n))&&(r.readyState===XMLHttpRequest.OPENED?r.send(n.data):void 0)},i=function(t){return t.url=t.url||location.href,t.type=t.type.toUpperCase(),"GET"===t.type&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data),null==e[t.dataType]&&(t.dataType="*"),t.accept=e[t.dataType],"*"!==t.dataType&&(t.accept+=", */*; q=0.01"),t},t=function(t,e){var n;return(n=new XMLHttpRequest).open(t.type,t.url,!0),n.setRequestHeader("Accept",t.accept),"string"==typeof t.data&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),r(n),n.withCredentials=!!t.withCredentials,n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)},n},o=function(t,e){var n,r;if("string"==typeof t&&"string"==typeof e)if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(i){}else if(e.match(/\b(?:java|ecma)script\b/))(r=document.createElement("script")).nonce=a(),r.text=t,document.head.appendChild(r).parentNode.removeChild(r);else if(e.match(/\b(xml|html|svg)\b/)){n=new DOMParser,e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(i){}}return t},v.href=function(t){return t.href},v.isCrossDomain=function(t){var e,n;(e=document.createElement("a")).href=location.href,n=document.createElement("a");try{return n.href=t,!((!n.protocol||":"===n.protocol)&&!n.host||e.protocol+"//"+e.host==n.protocol+"//"+n.host)}catch(r){return r,!0}}}.call(this),function(){var i,a;i=v.matches,a=function(t){return Array.prototype.slice.call(t)},v.serializeElement=function(t,e){var n,r;return n=[t],i(t,"form")&&(n=a(t.elements)),r=[],n.forEach(function(e){if(e.name&&!e.disabled)return i(e,"select")?a(e.options).forEach(function(t){if(t.selected)return r.push({name:e.name,value:t.value})}):e.checked||-1===["radio","checkbox","submit"].indexOf(e.type)?r.push({name:e.name,value:e.value}):void 0}),e&&r.push(e),r.map(function(t){return null!=t.name?encodeURIComponent(t.name)+"="+encodeURIComponent(t.value):t}).join("&")},v.formElements=function(t,e){return i(t,"form")?a(t.elements).filter(function(t){return i(t,e)}):a(t.querySelectorAll(e))}}.call(this),function(){var e,a,n;a=v.fire,n=v.stopEverything,v.handleConfirm=function(t){if(!e(this))return n(t)},e=function(t){var e,n,r;if(!(r=t.getAttribute("data-confirm")))return!0;if(e=!1,a(t,"confirm")){try{e=confirm(r)}catch(i){}n=a(t,"confirm:complete",[e])}return e&&n}}.call(this),function(){var n,r,i,a,o,u,e,c,s,l,f;s=v.matches,c=v.getData,l=v.setData,f=v.stopEverything,e=v.formElements,v.handleDisabledElement=function(t){if(this.disabled)return f(t)},v.enableElement=function(t){var e;return e=t instanceof Event?t.target:t,s(e,v.linkDisableSelector)?u(e):s(e,v.buttonDisableSelector)||s(e,v.formEnableSelector)?a(e):s(e,v.formSubmitSelector)?o(e):void 0},v.disableElement=function(t){var e;return e=t instanceof Event?t.target:t,s(e,v.linkDisableSelector)?i(e):s(e,v.buttonDisableSelector)||s(e,v.formDisableSelector)?n(e):s(e,v.formSubmitSelector)?r(e):void 0},i=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(l(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e),t.addEventListener("click",f),l(t,"ujs:disabled",!0)},u=function(t){var e;return null!=(e=c(t,"ujs:enable-with"))&&(t.innerHTML=e,l(t,"ujs:enable-with",null)),t.removeEventListener("click",f),l(t,"ujs:disabled",null)},r=function(t){return e(t,v.formDisableSelector).forEach(n)},n=function(t){var e;return null!=(e=t.getAttribute("data-disable-with"))&&(s(t,"button")?(l(t,"ujs:enable-with",t.innerHTML),t.innerHTML=e):(l(t,"ujs:enable-with",t.value),t.value=e)),t.disabled=!0,l(t,"ujs:disabled",!0)},o=function(t){return e(t,v.formEnableSelector).forEach(a)},a=function(t){var e;return null!=(e=c(t,"ujs:enable-with"))&&(s(t,"button")?t.innerHTML=e:t.value=e,l(t,"ujs:enable-with",null)),t.disabled=!1,l(t,"ujs:disabled",null)}}.call(this),function(){var c;c=v.stopEverything,v.handleMethod=function(t){var e,n,r,i,a,o,u;if(u=(o=this).getAttribute("data-method"))return a=v.href(o),n=v.csrfToken(),e=v.csrfParam(),r=document.createElement("form"),i="<input name='_method' value='"+u+"' type='hidden' />",null==e||null==n||v.isCrossDomain(a)||(i+="<input name='"+e+"' value='"+n+"' type='hidden' />"),i+='<input type="submit" />',r.method="post",r.action=a,r.target=o.target,r.innerHTML=i,r.style.display="none",document.body.appendChild(r),r.querySelector('[type="submit"]').click(),c(t)}}.call(this),function(){var c,s,l,f,d,h,p,m,b,y=[].slice;h=v.matches,l=v.getData,m=v.setData,s=v.fire,b=v.stopEverything,c=v.ajax,f=v.isCrossDomain,p=v.serializeElement,d=function(t){var e;return null!=(e=t.getAttribute("data-remote"))&&"false"!==e},v.handleRemote=function(t){var e,n,r,i,a,o,u;return!d(i=this)||(s(i,"ajax:before")?(u=i.getAttribute("data-with-credentials"),r=i.getAttribute("data-type")||"script",h(i,v.formSubmitSelector)?(e=l(i,"ujs:submit-button"),a=l(i,"ujs:submit-button-formmethod")||i.method,o=l(i,"ujs:submit-button-formaction")||i.getAttribute("action")||location.href,"GET"===a.toUpperCase()&&(o=o.replace(/\?.*$/,"")),"multipart/form-data"===i.enctype?(n=new FormData(i),null!=e&&n.append(e.name,e.value)):n=p(i,e),m(i,"ujs:submit-button",null),m(i,"ujs:submit-button-formmethod",null),m(i,"ujs:submit-button-formaction",null)):h(i,v.buttonClickSelector)||h(i,v.inputChangeSelector)?(a=i.getAttribute("data-method"),o=i.getAttribute("data-url"),n=p(i,i.getAttribute("data-params"))):(a=i.getAttribute("data-method"),o=v.href(i),n=i.getAttribute("data-params")),c({type:a||"GET",url:o,data:n,dataType:r,beforeSend:function(t,e){return s(i,"ajax:beforeSend",[t,e])?s(i,"ajax:send",[t]):(s(i,"ajax:stopped"),!1)},success:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],s(i,"ajax:success",t)},error:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],s(i,"ajax:error",t)},complete:function(){var t;return t=1<=arguments.length?y.call(arguments,0):[],s(i,"ajax:complete",t)},crossDomain:f(o),withCredentials:null!=u&&"false"!==u}),b(t)):(s(i,"ajax:stopped"),!1))},v.formSubmitButtonClick=function(){var t,e;if(e=(t=this).form)return t.name&&m(e,"ujs:submit-button",{name:t.name,value:t.value}),m(e,"ujs:formnovalidate-button",t.formNoValidate),m(e,"ujs:submit-button-formaction",t.getAttribute("formaction")),m(e,"ujs:submit-button-formmethod",t.getAttribute("formmethod"))},v.handleMetaClick=function(t){var e,n,r;if(r=((n=this).getAttribute("data-method")||"GET").toUpperCase(),e=n.getAttribute("data-params"),(t.metaKey||t.ctrlKey)&&"GET"===r&&!e)return t.stopImmediatePropagation()}}.call(this),function(){var t,r,e,n,i,a,o,u,c,s,l,f,d,h;a=v.fire,e=v.delegate,u=v.getData,t=v.$,h=v.refreshCSRFTokens,r=v.CSRFProtection,i=v.enableElement,n=v.disableElement,s=v.handleDisabledElement,c=v.handleConfirm,d=v.handleRemote,o=v.formSubmitButtonClick,l=v.handleMetaClick,f=v.handleMethod,"undefined"==typeof jQuery||null===jQuery||null==jQuery.ajax||jQuery.rails||(jQuery.rails=v,jQuery.ajaxPrefilter(function(t,e,n){if(!t.crossDomain)return r(n)})),v.start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");return window.addEventListener("pageshow",function(){return t(v.formEnableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return i(t)}),t(v.linkDisableSelector).forEach(function(t){if(u(t,"ujs:disabled"))return i(t)})}),e(document,v.linkDisableSelector,"ajax:complete",i),e(document,v.linkDisableSelector,"ajax:stopped",i),e(document,v.buttonDisableSelector,"ajax:complete",i),e(document,v.buttonDisableSelector,"ajax:stopped",i),e(document,v.linkClickSelector,"click",s),e(document,v.linkClickSelector,"click",c),e(document,v.linkClickSelector,"click",l),e(document,v.linkClickSelector,"click",n),e(document,v.linkClickSelector,"click",d),e(document,v.linkClickSelector,"click",f),e(document,v.buttonClickSelector,"click",s),e(document,v.buttonClickSelector,"click",c),e(document,v.buttonClickSelector,"click",n),e(document,v.buttonClickSelector,"click",d),e(document,v.inputChangeSelector,"change",s),e(document,v.inputChangeSelector,"change",c),e(document,v.inputChangeSelector,"change",d),e(document,v.formSubmitSelector,"submit",s),e(document,v.formSubmitSelector,"submit",c),e(document,v.formSubmitSelector,"submit",d),e(document,v.formSubmitSelector,"submit",function(t){return setTimeout(function(){return n(t)},13)}),e(document,v.formSubmitSelector,"ajax:send",n),e(document,v.formSubmitSelector,"ajax:complete",i),e(document,v.formInputClickSelector,"click",s),e(document,v.formInputClickSelector,"click",c),e(document,v.formInputClickSelector,"click",o),document.addEventListener("DOMContentLoaded",h),window._rails_loaded=!0},window.Rails===v&&a(document,"rails:attachBindings")&&v.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=v:"function"==typeof define&&define.amd&&define(v)}).call(this),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ActiveStorage=e():t.ActiveStorage=e()}(this,function(){return function(n){function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var i={};return r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){"use strict";function n(t){var e=i(document.head,'meta[name="'+t+'"]');if(e)return e.getAttribute("content")}function r(t,e){return"string"==typeof t&&(e=t,t=document),o(t.querySelectorAll(e))}function i(t,e){return"string"==typeof t&&(e=t,t=document),t.querySelector(e)}function a(t,e,n){var r=2<arguments.length&&void 0!==n?n:{},i=t.disabled,a=r.bubbles,o=r.cancelable,u=r.detail,c=document.createEvent("Event");c.initEvent(e,a||!0,o||!0),c.detail=u||{};try{t.disabled=!1,t.dispatchEvent(c)}finally{t.disabled=i}return c}function o(t){return Array.isArray(t)?t:Array.from?Array.from(t):[].slice.call(t)}e.d=n,e.c=r,e.b=i,e.a=a,e.e=o},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(t&&"function"==typeof t[e]){for(var n=arguments.length,r=Array(2<n?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return t[e].apply(t,r)}}n.d(e,"a",function(){return r});var o=n(6),u=n(8),c=n(9),s=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),l=0,r=function(){function r(t,e,n){i(this,r),this.id=++l,this.file=t,this.url=e,this.delegate=n}return s(r,[{key:"create",value:function(r){var i=this;o.a.create(this.file,function(t,e){if(t)r(t);else{var n=new u.a(i.file,e,i.url);a(i.delegate,"directUploadWillCreateBlobWithXHR",n.xhr),n.create(function(t){if(t)r(t);else{var e=new c.a(n);a(i.delegate,"directUploadWillStoreFileWithXHR",e.xhr),e.create(function(t){t?r(t):r(null,n.toJSON())})}})}})}}]),r}()},function(t,e,n){"use strict";function r(){window.ActiveStorage&&Object(i.a)()}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n(1);n.d(e,"start",function(){return i.a}),n.d(e,"DirectUpload",function(){return a.a}),setTimeout(r,1)},function(t,e,n){"use strict";function r(){h||(h=!0,document.addEventListener("submit",i),document.addEventListener("ajax:before",a))}function i(t){o(t)}function a(t){"FORM"==t.target.tagName&&o(t)}function o(t){var e=t.target;if(e.hasAttribute(d))t.preventDefault();else{var n=new l.a(e),r=n.inputs;r.length&&(t.preventDefault(),e.setAttribute(d,""),r.forEach(c),n.start(function(t){e.removeAttribute(d),t?r.forEach(s):u(e)}))}}function u(t){var e=Object(f.b)(t,"input[type=submit]");if(e){var n=e.disabled;e.disabled=!1,e.focus(),e.click(),e.disabled=n}else(e=document.createElement("input")).type="submit",e.style.display="none",t.appendChild(e),e.click(),t.removeChild(e)}function c(t){t.disabled=!0}function s(t){t.disabled=!1}e.a=r;var l=n(4),f=n(0),d="data-direct-uploads-processing",h=!1},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return c});var i=n(5),a=n(0),o=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),u="input[type=file][data-direct-upload-url]:not([disabled])",c=function(){function e(t){r(this,e),this.form=t,this.inputs=Object(a.c)(t,u).filter(function(t){return t.files.length})}return o(e,[{key:"start",value:function(n){var r=this,i=this.createDirectUploadControllers();this.dispatch("start"),function e(){var t=i.shift();t?t.start(function(t){t?(n(t),r.dispatch("end")):e()}):(n(),r.dispatch("end"))}()}},{key:"createDirectUploadControllers",value:function(){var r=[];return this.inputs.forEach(function(n){Object(a.e)(n.files).forEach(function(t){var e=new i.a(n,t);r.push(e)})}),r}},{key:"dispatch",value:function(t,e){var n=1<arguments.length&&void 0!==e?e:{};return Object(a.a)(this.form,"direct-uploads:"+t,{detail:n})}}]),e}()},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return u});var i=n(1),a=n(0),o=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),u=function(){function n(t,e){r(this,n),this.input=t,this.file=e,this.directUpload=new i.a(this.file,this.url,this),this.dispatch("initialize")}return o(n,[{key:"start",value:function(n){var r=this,i=document.createElement("input");i.type="hidden",i.name=this.input.name,this.input.insertAdjacentElement("beforebegin",i),this.dispatch("start"),this.directUpload.create(function(t,e){t?(i.parentNode.removeChild(i),r.dispatchError(t)):i.value=e.signed_id,r.dispatch("end"),n(t)})}},{key:"uploadRequestDidProgress",value:function(t){var e=t.loaded/t.total*100;e&&this.dispatch("progress",{progress:e})}},{key:"dispatch",value:function(t,e){var n=1<arguments.length&&void 0!==e?e:{};return n.file=this.file,n.id=this.directUpload.id,Object(a.a)(this.input,"direct-upload:"+t,{detail:n})}},{key:"dispatchError",value:function(t){this.dispatch("error",{error:t}).defaultPrevented||alert(t)}},{key:"directUploadWillCreateBlobWithXHR",value:function(t){this.dispatch("before-blob-request",{xhr:t})}},{key:"directUploadWillStoreFileWithXHR",value:function(t){var e=this;this.dispatch("before-storage-request",{xhr:t}),t.upload.addEventListener("progress",function(t){return e.uploadRequestDidProgress(t)})}},{key:"url",get:function(){return this.input.getAttribute("data-direct-upload-url")}}]),n}()},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return c});var i=n(7),a=n.n(i),o=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),u=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,c=function(){function n(t){r(this,n),this.file=t,this.chunkSize=2097152,this.chunkCount=Math.ceil(this.file.size/this.chunkSize),this.chunkIndex=0}return o(n,null,[{key:"create",value:function(t,e){new n(t).create(e)}}]),o(n,[{key:"create",value:function(t){var e=this;this.callback=t,this.md5Buffer=new a.a.ArrayBuffer,this.fileReader=new FileReader,this.fileReader.addEventListener("load",function(t){return e.fileReaderDidLoad(t)}),this.fileReader.addEventListener("error",function(t){return e.fileReaderDidError(t)}),this.readNextChunk()}},{key:"fileReaderDidLoad",value:function(t){if(this.md5Buffer.append(t.target.result),!this.readNextChunk()){var e=this.md5Buffer.end(!0),n=btoa(e);this.callback(null,n)}}},{key:"fileReaderDidError",value:function(){this.callback("Error reading "+this.file.name)}},{key:"readNextChunk",value:function(){if(this.chunkIndex<this.chunkCount){var t=this.chunkIndex*this.chunkSize,e=Math.min(t+this.chunkSize,this.file.size),n=u.call(this.file,t,e);return this.fileReader.readAsArrayBuffer(n),this.chunkIndex++,!0}return!1}}]),n}()},function(t){var e;e=function(l){"use strict";function s(t,e){var n=t[0],r=t[1],i=t[2],a=t[3];r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+e[1]-389564586|0)<<12|a>>>20)+n|0)&n|~a&r)+e[2]+606105819|0)<<17|i>>>15)+a|0)&a|~i&n)+e[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+e[5]+1200080426|0)<<12|a>>>20)+n|0)&n|~a&r)+e[6]-1473231341|0)<<17|i>>>15)+a|0)&a|~i&n)+e[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+e[9]-1958414417|0)<<12|a>>>20)+n|0)&n|~a&r)+e[10]-42063|0)<<17|i>>>15)+a|0)&a|~i&n)+e[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&i|~r&a)+e[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+e[13]-40341101|0)<<12|a>>>20)+n|0)&n|~a&r)+e[14]-1502002290|0)<<17|i>>>15)+a|0)&a|~i&n)+e[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+e[6]-1069501632|0)<<9|a>>>23)+n|0)&r|n&~r)+e[11]+643717713|0)<<14|i>>>18)+a|0)&n|a&~n)+e[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+e[10]+38016083|0)<<9|a>>>23)+n|0)&r|n&~r)+e[15]-660478335|0)<<14|i>>>18)+a|0)&n|a&~n)+e[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+e[14]-1019803690|0)<<9|a>>>23)+n|0)&r|n&~r)+e[3]-187363961|0)<<14|i>>>18)+a|0)&n|a&~n)+e[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r&a|i&~a)+e[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+e[2]-51403784|0)<<9|a>>>23)+n|0)&r|n&~r)+e[7]+1735328473|0)<<14|i>>>18)+a|0)&n|a&~n)+e[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+e[8]-2022574463|0)<<11|a>>>21)+n|0)^n^r)+e[11]+1839030562|0)<<16|i>>>16)+a|0)^a^n)+e[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+e[4]+1272893353|0)<<11|a>>>21)+n|0)^n^r)+e[7]-155497632|0)<<16|i>>>16)+a|0)^a^n)+e[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+e[0]-358537222|0)<<11|a>>>21)+n|0)^n^r)+e[3]-722521979|0)<<16|i>>>16)+a|0)^a^n)+e[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((a=((a+=((n=((n+=(r^i^a)+e[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+e[12]-421815835|0)<<11|a>>>21)+n|0)^n^r)+e[15]+530742520|0)<<16|i>>>16)+a|0)^a^n)+e[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+e[7]+1126891415|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[14]-1416354905|0)<<15|i>>>17)+a|0)|~n))+e[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+e[3]-1894986606|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[10]-1051523|0)<<15|i>>>17)+a|0)|~n))+e[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+e[15]-30611744|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[6]-1560198380|0)<<15|i>>>17)+a|0)|~n))+e[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((a=((a+=(r^((n=((n+=(i^(r|~a))+e[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+e[11]-1120210379|0)<<10|a>>>22)+n|0)^((i=((i+=(n^(a|~r))+e[2]+718787259|0)<<15|i>>>17)+a|0)|~n))+e[9]-343485551|0)<<21|r>>>11)+i|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=i+t[2]|0,t[3]=a+t[3]|0}function f(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function d(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function r(t){var e,n,r,i,a,o,u=t.length,c=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)s(c,f(t.substring(e-64,e)));for(n=(t=t.substring(e-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)r[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),55<e)for(s(c,r),e=0;e<16;e+=1)r[e]=0;return i=(i=8*u).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(i[2],16),o=parseInt(i[1],16)||0,r[14]=a,r[15]=o,s(c,r),c}function i(t){var e,n,r,i,a,o,u=t.length,c=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=u;e+=64)s(c,d(t.subarray(e-64,e)));for(n=(t=e-64<u?t.subarray(e-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)r[e>>2]|=t[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),55<e)for(s(c,r),e=0;e<16;e+=1)r[e]=0;return i=(i=8*u).toString(16).match(/(.*?)(.{0,8})$/),a=parseInt(i[2],16),o=parseInt(i[1],16)||0,r[14]=a,r[15]=o,s(c,r),c}function n(t){var e,n="";for(e=0;e<4;e+=1)n+=m[t>>8*e+4&15]+m[t>>8*e&15];return n}function o(t){var e;for(e=0;e<t.length;e+=1)t[e]=n(t[e]);return t.join("")}function a(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function e(t,e){var n,r=t.length,i=new ArrayBuffer(r),a=new Uint8Array(i);for(n=0;n<r;n+=1)a[n]=t.charCodeAt(n);return e?a:i}function u(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function c(t,e,n){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t)),r.set(new Uint8Array(e),t.byteLength),n?r:r.buffer}function h(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function p(){this.reset()}var m=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return o(r("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function s(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(t,e){var n,r,i,a,o=this.byteLength,u=s(t,o),c=o;return e!==l&&(c=s(e,o)),c<u?new ArrayBuffer(0):(n=c-u,r=new ArrayBuffer(n),i=new Uint8Array(r),a=new Uint8Array(this,u,n),i.set(a),r)}}(),p.prototype.append=function(t){return this.appendBinary(a(t)),this},p.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,n=this._buff.length;for(e=64;e<=n;e+=64)s(this._hash,f(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},p.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(a,i),n=o(this._hash),t&&(n=h(n)),this.reset(),n},p.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},p.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},p.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},p.prototype._finish=function(t,e){var n,r,i,a=e;if(t[a>>2]|=128<<(a%4<<3),55<a)for(s(this._hash,t),a=0;a<16;a+=1)t[a]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(n[2],16),i=parseInt(n[1],16)||0,t[14]=r,t[15]=i,s(this._hash,t)},p.hash=function(t,e){return p.hashBinary(a(t),e)},p.hashBinary=function(t,e){var n=o(r(t));return e?h(n):n},p.ArrayBuffer=function(){this.reset()},p.ArrayBuffer.prototype.append=function(t){var e,n=c(this._buff.buffer,t,!0),r=n.length;for(this._length+=t.byteLength,e=64;e<=r;e+=64)s(this._hash,d(n.subarray(e-64,e)));return this._buff=e-64<r?new Uint8Array(n.buffer.slice(e-64)):new Uint8Array(0),this},p.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,i=r.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=r[e]<<(e%4<<3);return this._finish(a,i),n=o(this._hash),t&&(n=h(n)),this.reset(),n},p.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},p.ArrayBuffer.prototype.getState=function(){var t=p.prototype.getState.call(this);return t.buff=u(t.buff),t},p.ArrayBuffer.prototype.setState=function(t){return t.buff=e(t.buff,!0),p.prototype.setState.call(this,t)},p.ArrayBuffer.prototype.destroy=p.prototype.destroy,p.ArrayBuffer.prototype._finish=p.prototype._finish,p.ArrayBuffer.hash=function(t,e){var n=o(i(new Uint8Array(t)));return e?h(n):n},p},t.exports=e()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i});var o=n(0),r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),i=function(){function i(t,e,n){var r=this;a(this,i),this.file=t,this.attributes={filename:t.name,content_type:t.type,byte_size:t.size,checksum:e},this.xhr=new XMLHttpRequest,this.xhr.open("POST",n,!0),this.xhr.responseType="json",this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.setRequestHeader("Accept","application/json"),this.xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.xhr.setRequestHeader("X-CSRF-Token",Object(o.d)("csrf-token")),this.xhr.addEventListener("load",function(t){return r.requestDidLoad(t)}),this.xhr.addEventListener("error",function(t){return r.requestDidError(t)})}return r(i,[{key:"create",value:function(t){this.callback=t,this.xhr.send(JSON.stringify({blob:this.attributes}))}},{key:"requestDidLoad",value:function(t){if(200<=this.status&&this.status<300){var e=this.response,n=e.direct_upload;delete e.direct_upload,this.attributes=e,this.directUploadData=n,this.callback(null,this.toJSON())}else this.requestDidError(t)}},{key:"requestDidError",value:function(){this.callback('Error creating Blob for "'+this.file.name+'". Status: '+this.status)}},{key:"toJSON",value:function(){var t={};for(var e in this.attributes)t[e]=this.attributes[e];return t}},{key:"status",get:function(){return this.xhr.status}},{key:"response",get:function(){var t=this.xhr,e=t.responseType,n=t.response;return"json"==e?n:JSON.parse(n)}}]),i}()},function(t,e,n){"use strict";function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i});var r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),i=function(){function o(t){var e=this;u(this,o),this.blob=t,this.file=t.file;var n=t.directUploadData,r=n.url,i=n.headers;for(var a in this.xhr=new XMLHttpRequest,this.xhr.open("PUT",r,!0),this.xhr.responseType="text",i)this.xhr.setRequestHeader(a,i[a]);this.xhr.addEventListener("load",function(t){return e.requestDidLoad(t)}),this.xhr.addEventListener("error",function(t){return e.requestDidError(t)})}return r(o,[{key:"create",value:function(t){this.callback=t,this.xhr.send(this.file.slice())}},{key:"requestDidLoad",value:function(t){var e=this.xhr,n=e.status,r=e.response;200<=n&&n<300?this.callback(null,r):this.requestDidError(t)}},{key:"requestDidError",value:function(){this.callback('Error storing "'+this.file.name+'". Status: '+this.xhr.status)}}]),o}()}])});
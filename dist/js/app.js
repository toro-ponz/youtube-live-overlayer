!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Selector=class{constructor(e){this.query=e}get element(){const e=document.querySelector(this.query);if(null===e)throw new Error("DOM not found with selector."+this.query);return e}get elements(){return document.querySelectorAll(this.query)}get htmlElement(){const e=this.element;if(null===e)throw new Error("DOM is not HTMLElement.");return e}get htmlElements(){return document.querySelectorAll(this.query)}isGenerated(){return null!==document.querySelector(this.query)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Mode=class{constructor(){this.overlayClass="overlay-mode"}get isOverlay(){return document.body.classList.contains(this.overlayClass)}get class(){return this.overlayClass}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Cookies=class{constructor(){this.cookies=this.getCookies()}get isWide(){return"1"===this.getValue("wide")}getValue(e){const t=this.cookies.filter(t=>t.key===e)[0];return t?t.value:""}update(){this.cookies=this.getCookies()}getCookies(){return document.cookie.split("; ").map(e=>({key:e.split("=")[0],value:e.split("=")[1]}))}}},function(e,t,r){r(4),e.exports=r(11)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(5);let n=null;new MutationObserver(e=>{for(let t=0;t<e.length;t++)Array.from(e[t].addedNodes).filter(e=>"YTD-LIVE-CHAT-FRAME"===e.nodeName).some(()=>(n=o.ChatOverlayerForYouTube.tryNew(),!0)),Array.from(e[t].removedNodes).filter(e=>"YTD-LIVE-CHAT-FRAME"===e.nodeName).some(()=>(null!==n&&(n.dispose(),n=null),!0))}).observe(document.body,{childList:!0,subtree:!0})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(2),n=r(6),s=r(9),i=r(10),l=r(0),c=r(1);class u extends l.Selector{constructor(){super("body"),this.cookies=new o.Cookies,this.mode=new c.Mode,this.chatSelector=new n.ChatSelector,this.chatAppFrameSelector=new s.ChatAppFrameSelector,this.playerModeSelector=new i.PlayerModeSelector,this.playerModeSelector.setOnclick(()=>{this.toggleMode()}),this.changeMode(this.cookies.isWide)}dispose(){this.element.classList.toggle(this.mode.class,!1)}changeMode(e){this.element.classList.toggle(this.mode.class,e),this.chatAppFrameSelector.changeMode(this.mode.class,e),this.chatSelector.setHeight()}toggleMode(){this.changeMode(!this.mode.isOverlay)}static tryNew(){try{return new u}catch(e){return null}}}t.ChatOverlayerForYouTube=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(7),n=r(0),s=r(1);t.ChatSelector=class extends n.Selector{constructor(){super("ytd-live-chat-frame"),this.mode=new s.Mode,this.playerSelector=new o.PlayerSelector,this.initialize()}initialize(){window.onresize=(()=>{this.setHeight()})}setHeight(){setTimeout(()=>{if(!this.mode.isOverlay)return void this.element.removeAttribute("style");const e=this.playerSelector.height-45,t=`\n          max-height: ${e.toString()}px;\n          height: ${e.toString()}px;\n        `;this.element.setAttribute("style",t)},500)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0),n=r(8);t.PlayerSelector=class extends o.Selector{constructor(){super(".html5-main-video"),this.playerContainerSelector=new n.PlayerContainerSelector}get height(){return this.playerContainerSelector.htmlElement.clientHeight}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);t.PlayerContainerSelector=class extends o.Selector{constructor(){super(".html5-video-player")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);t.ChatAppFrameSelector=class extends o.Selector{constructor(){super("iframe#chatframe")}changeMode(e,t){this.innerDocument.body.classList.toggle(e,t)}get iframe(){const e=document.querySelector(this.query);if(null===e)throw new Error("DOM is not HTMLframeElement");return e}get innerDocument(){const e=this.iframe;if(null===e.contentWindow||null===e.contentWindow.document)throw new Error("document not found.");return e.contentWindow.document}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r(0);t.PlayerModeSelector=class extends o.Selector{constructor(){super(".ytp-size-button")}setOnclick(e){this.htmlElements.forEach(t=>{t.onclick=e})}}},function(e,t,r){}]);
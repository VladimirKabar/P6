!function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function s(e,i){t.fn[e]=function(s){if("string"==typeof s){for(var r=n.call(arguments,1),a=0,l=this.length;l>a;a++){var h=this[a],u=t.data(h,e);if(u)if(t.isFunction(u[s])&&"_"!==s.charAt(0)){var d=u[s].apply(u,r);if(void 0!==d)return d}else o("no such method '"+s+"' for "+e+" instance");else o("cannot call methods on "+e+" prior to initialization; attempted to call '"+s+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(s),n._init()):(n=new i(this,s),t.data(this,e,n))})}}if(t){var o="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),s(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var s=function(){};i.removeEventListener?s=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(s=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:n,unbind:s};"function"==typeof define&&define.amd?define("eventie/eventie",o):"object"==typeof exports?module.exports=o:t.eventie=o}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;e.isReady||i||n()}function n(){e.isReady=!0;for(var t=0,i=r.length;i>t;t++){var n=r[t];n()}}function s(s){return"complete"===o.readyState?n():(s.bind(o,"DOMContentLoaded",i),s.bind(o,"readystatechange",i),s.bind(t,"load",i)),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],s):"object"==typeof exports?module.exports=s(require("eventie")):t.docReady=s(t.eventie)}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,s=this,o=s.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,s=this.getListenersAsObject(t),o="object"==typeof i;for(n in s)s.hasOwnProperty(n)&&-1===e(s[n],i)&&s[n].push(o?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,s,o=this.getListenersAsObject(t);for(s in o)o.hasOwnProperty(s)&&(n=e(o[s],i),-1!==n&&o[s].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,s,o=t?this.removeListener:this.addListener,r=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)o.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(s=e[n])&&("function"==typeof s?o.call(this,n,s):r.call(this,n,s));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,s,o,r=this.getListenersAsObject(t);for(s in r)if(r.hasOwnProperty(s))for(n=r[s].length;n--;)i=r[s][n],i.once===!0&&this.removeListener(t,i.listener),o=i.listener.apply(this,e||[]),o===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return s.EventEmitter=o,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:s.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,s=0,o=i.length;o>s;s++)if(e=i[s]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function n(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=r.length;i>e;e++){var n=r[e];t[n]=0}return t}function s(i){function s(){if(!c){c=!0;var n=t.getComputedStyle;if(h=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||o("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}}(),u=i("boxSizing")){var s=document.createElement("div");s.style.width="200px",s.style.padding="1px 2px 3px 4px",s.style.borderStyle="solid",s.style.borderWidth="1px 2px 3px 4px",s.style[u]="border-box";var r=document.body||document.documentElement;r.appendChild(s);var a=h(s);d=200===e(a.width),r.removeChild(s)}}}function a(t){if(s(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=h(t);if("none"===i.display)return n();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var a=o.isBorderBox=!(!u||!i[u]||"border-box"!==i[u]),c=0,p=r.length;p>c;c++){var f=r[c],m=i[f];m=l(t,m);var g=parseFloat(m);o[f]=isNaN(g)?0:g}var v=o.paddingLeft+o.paddingRight,y=o.paddingTop+o.paddingBottom,b=o.marginLeft+o.marginRight,w=o.marginTop+o.marginBottom,_=o.borderLeftWidth+o.borderRightWidth,x=o.borderTopWidth+o.borderBottomWidth,C=a&&d,S=e(i.width);S!==!1&&(o.width=S+(C?0:v+_));var k=e(i.height);return k!==!1&&(o.height=k+(C?0:y+x)),o.innerWidth=o.width-(v+_),o.innerHeight=o.height-(y+x),o.outerWidth=o.width+b,o.outerHeight=o.height+w,o}}function l(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var n=e.style,s=n.left,o=e.runtimeStyle,r=o&&o.left;return r&&(o.left=e.currentStyle.left),n.left=i,i=n.pixelLeft,n.left=s,r&&(o.left=r),i}var h,u,d,c=!1;return a}var o="undefined"==typeof console?i:function(t){console.error(t)},r=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],s):"object"==typeof exports?module.exports=s(require("desandro-get-style-property")):t.getSize=s(t.getStyleProperty)}(window),function(t){function e(t,e){return t[r](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){i(t);for(var n=t.parentNode.querySelectorAll(e),s=0,o=n.length;o>s;s++)if(n[s]===t)return!0;return!1}function s(t,n){return i(t),e(t,n)}var o,r=function(){if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,n=e.length;n>i;i++){var s=e[i],o=s+"MatchesSelector";if(t[o])return o}}();if(r){var a=document.createElement("div"),l=e(a,"div");o=l?e:s}else o=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return o}):"object"==typeof exports?module.exports=o:window.matchesSelector=o}(Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function s(t,s,o){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var l=o("transition"),h=o("transform"),u=l&&h,d=!!o("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[l],p=["transform","transition","transitionDuration","transitionProperty"],f=function(){for(var t={},e=0,i=p.length;i>e;e++){var n=p[e],s=o(n);s&&s!==n&&(t[n]=s)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=s(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=f[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=r(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,s=parseInt(t[i?"left":"right"],10),o=parseInt(t[n?"top":"bottom"],10);s=isNaN(s)?0:s,o=isNaN(o)?0:o;var a=this.layout.size;s-=i?a.paddingLeft:a.paddingRight,o-=n?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=o},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=d?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,s=parseInt(t,10),o=parseInt(e,10),r=s===this.position.x&&o===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,l=e-n,h={},u=this.layout.options;a=u.isOriginLeft?a:-a,l=u.isOriginTop?l:-l,h.transform=m(a,l),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var g=h&&n(h)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[l?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var v={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=v[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var s=e.onEnd[n];s.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var y={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(y)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!l||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],s):"object"==typeof exports?module.exports=s(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(t.Outlayer={},t.Outlayer.Item=s(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===d.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,s=t.length;s>n;n++)e.push(t[n]);else e.push(t);return e}function s(t,e){var i=p(e,t);-1!==i&&e.splice(i,1)}function o(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function r(i,r,d,p,f,m){function g(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return void(l&&l.error("Bad "+this.constructor.namespace+" element: "+t));this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var n=++v;this.element.outlayerGUID=n,y[n]=this,this._create(),this.options.isInitLayout&&this.layout()}var v=0,y={};return g.namespace="outlayer",g.Item=m,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(g.prototype,d.prototype),g.prototype.option=function(t){e(this.options,t)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0,o=e.length;o>s;s++){var r=e[s],a=new i(r,this);n.push(a)}return n},g.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],s=0,o=t.length;o>s;s++){var r=t[s];if(c(r))if(e){f(r,e)&&i.push(r);for(var a=r.querySelectorAll(e),l=0,h=a.length;h>l;l++)i.push(a[l])}else i.push(r)}return i},g.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=p(this.element)},g.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):c(n)&&(i=n),this[t]=i?p(i)[e]:n):this[t]=0},g.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},g.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var s=t[i];s.isIgnored||e.push(s)}return e},g.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this;if(!t||!t.length)return void i();this._itemsOn(t,"layout",i);for(var s=[],o=0,r=t.length;r>o;o++){var a=t[o],l=this._getItemLayoutPosition(a);l.item=a,l.isInstant=e||a.isLayoutInstant,s.push(l)}this._processLayoutQueue(s)},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},g.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},g.prototype._getContainerSize=u,g.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},g.prototype._itemsOn=function(t,e,i){function n(){return s++,s===o&&i.call(r),!0}for(var s=0,o=t.length,r=this,a=0,l=t.length;l>a;a++){var h=t[a];h.on(e,n)}},g.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},g.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},g.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},g.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];s(n,this.stamps),this.unignore(n)}},g.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},g.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},g.prototype._manageStamp=u,g.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=p(t),s={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return s},g.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},g.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var t=p(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},g.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},g.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},g.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.reveal()}},g.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.hide()}},g.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},g.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var s=t[i],o=this.getItem(s);o&&e.push(o)}return e}},g.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,o=e.length;o>i;i++){var r=e[i];r.remove(),s(r,this.items)}}},g.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize();var s=this.element.outlayerGUID;delete y[s],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},g.data=function(t){var e=t&&t.outlayerGUID;return e&&y[e]},g.create=function(t,i){function n(){g.apply(this,arguments)}return Object.create?n.prototype=Object.create(g.prototype):e(n.prototype,g.prototype),n.prototype.constructor=n,n.defaults=e({},g.defaults),e(n.defaults,i),n.prototype.settings={},n.namespace=t,n.data=g.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,r(function(){for(var e=o(t),i=a.querySelectorAll(".js-"+e),s="data-"+e+"-options",r=0,u=i.length;u>r;r++){var d,c=i[r],p=c.getAttribute(s);try{d=p&&JSON.parse(p)}catch(t){l&&l.error("Error parsing "+s+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+t);continue}var f=new n(c,d);h&&h.data(c,t,f)}}),h&&h.bridget&&h.bridget(t,n),n},g.Item=m,g}var a=t.document,l=t.console,h=t.jQuery,u=function(){},d=Object.prototype.toString,c="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},p=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],r):"object"==typeof exports?module.exports=r(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):t.Outlayer=r(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",s=Math[n](t.size.outerWidth/this.columnWidth);s=Math.min(s,this.cols);for(var o=this._getColGroup(s),r=Math.min.apply(Math,o),a=i(o,r),l={x:this.columnWidth*a,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[a+d]=h;return l},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var s=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,s)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),s=this.options.isOriginLeft?n.left:n.right,o=s+i.outerWidth,r=Math.floor(s/this.columnWidth);r=Math.max(0,r);var a=Math.floor(o/this.columnWidth);a-=o%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var l=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,h=r;a>=h;h++)this.colYs[h]=Math.max(l,this.colYs[h])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var s=t[i];if(s===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window);
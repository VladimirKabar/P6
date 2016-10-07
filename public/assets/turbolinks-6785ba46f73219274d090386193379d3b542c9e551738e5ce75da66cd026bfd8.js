(function(){(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame}(),visit:function(e,i){return t.controller.visit(e,i)},clearCache:function(){return t.controller.clearCache()}}}).call(this)}).call(this);var t=this.Turbolinks;(function(){(function(){var e,i;t.copyObject=function(t){var e,i,n;i={};for(e in t)n=t[e],i[e]=n;return i},t.closest=function(t,i){return e.call(t,i)},e=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&i.call(e,t))return e;e=e.parentNode}}}(),t.defer=function(t){return setTimeout(t,1)},t.dispatch=function(t,e){var i,n,s,o,r;return o=null!=e?e:{},r=o.target,i=o.cancelable,n=o.data,s=document.createEvent("Events"),s.initEvent(t,!0,i===!0),s.data=null!=n?n:{},(null!=r?r:document).dispatchEvent(s),s},t.match=function(t,e){return i.call(t,e)},i=function(){var t,e,i,n;return t=document.documentElement,null!=(e=null!=(i=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?i:t.msMatchesSelector)?e:t.mozMatchesSelector}(),t.uuid=function(){var t,e,i;for(i="",t=e=1;36>=e;t=++e)i+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return i}}).call(this),function(){t.Location=function(){function t(t){var e,i;null==t&&(t=""),i=document.createElement("a"),i.href=t.toString(),this.absoluteURL=i.href,e=i.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=i.hash.slice(1))}var e,i,n,s;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=i(t),this.isEqualTo(t)||s(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},i=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},s=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.HttpRequest=function(){function i(i,n,s){this.delegate=i,this.requestCanceled=e(this.requestCanceled,this),this.requestTimedOut=e(this.requestTimedOut,this),this.requestFailed=e(this.requestFailed,this),this.requestLoaded=e(this.requestLoaded,this),this.requestProgressed=e(this.requestProgressed,this),this.url=t.Location.wrap(n).requestURL,this.referrer=t.Location.wrap(s).absoluteURL,this.createXHR()}return i.NETWORK_FAILURE=0,i.TIMEOUT_FAILURE=-1,i.timeout=60,i.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},i.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},i.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},i.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},i.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},i.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},i.prototype.requestCanceled=function(){return this.endRequest()},i.prototype.notifyApplicationBeforeRequestStart=function(){return t.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},i.prototype.notifyApplicationAfterRequestEnd=function(){return t.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},i.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},i.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},i.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},i.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},i}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.ProgressBar=function(){function t(){this.trickle=e(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var i;return i=300,t.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+i+"ms ease-out, opacity "+i/2+"ms "+i/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",t.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},t.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},t.prototype.setValue=function(t){return this.value=t,this.refresh()},t.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},t.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},t.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*i)},t.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},t.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,i)},t.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},t.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},t.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},t.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},t.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},t}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.BrowserAdapter=function(){function i(i){this.controller=i,this.showProgressBar=e(this.showProgressBar,this),this.progressBar=new t.ProgressBar}var n,s,o,r;return r=t.HttpRequest,n=r.NETWORK_FAILURE,o=r.TIMEOUT_FAILURE,s=500,i.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},i.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},i.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},i.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},i.prototype.visitRequestCompleted=function(t){return t.loadResponse()},i.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},i.prototype.visitRequestFinished=function(){return this.hideProgressBar()},i.prototype.visitCompleted=function(t){return t.followRedirect()},i.prototype.pageInvalidated=function(){return this.reload()},i.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,s)},i.prototype.showProgressBar=function(){return this.progressBar.show()},i.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},i.prototype.reload=function(){return window.location.reload()},i}()}.call(this),function(){var e,i=function(t,e){return function(){return t.apply(e,arguments)}};e=!1,addEventListener("load",function(){return t.defer(function(){return e=!0})},!1),t.History=function(){function n(t){this.delegate=t,this.onPopState=i(this.onPopState,this)}return n.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),this.started=!0)},n.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),this.started=!1):void 0},n.prototype.push=function(e,i){return e=t.Location.wrap(e),this.update("push",e,i)},n.prototype.replace=function(e,i){return e=t.Location.wrap(e),this.update("replace",e,i)},n.prototype.onPopState=function(e){var i,n,s,o;return this.shouldHandlePopState()&&(o=null!=(n=e.state)?n.turbolinks:void 0)?(i=t.Location.wrap(window.location),s=o.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(i,s)):void 0},n.prototype.shouldHandlePopState=function(){return e===!0},n.prototype.update=function(t,e,i){var n;return n={turbolinks:{restorationIdentifier:i}},history[t+"State"](n,null,e)},n}()}.call(this),function(){t.Snapshot=function(){function e(t){var e,i;i=t.head,e=t.body,this.head=null!=i?i:document.createElement("head"),this.body=null!=e?e:document.createElement("body")}return e.wrap=function(t){return t instanceof this?t:this.fromHTML(t)},e.fromHTML=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromElement(e)},e.fromElement=function(t){return new this({head:t.querySelector("head"),body:t.querySelector("body")})},e.prototype.clone=function(){return new e({head:this.head.cloneNode(!0),body:this.body.cloneNode(!0)})},e.prototype.getRootLocation=function(){var e,i;return i=null!=(e=this.getSetting("root"))?e:"/",new t.Location(i)},e.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},e.prototype.hasAnchor=function(t){try{return null!=this.body.querySelector("[id='"+t+"']")}catch(t){}},e.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},e.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},e.prototype.getSetting=function(t){var e,i;return i=this.head.querySelectorAll("meta[name='turbolinks-"+t+"']"),e=i[i.length-1],null!=e?e.getAttribute("content"):void 0},e}()}.call(this),function(){var e=[].slice;t.Renderer=function(){function t(){}var i;return t.render=function(){var t,i,n,s;return n=arguments[0],i=arguments[1],t=3<=arguments.length?e.call(arguments,2):[],s=function(t,e,i){i.prototype=t.prototype;var n=new i,s=t.apply(n,e);return Object(s)===s?s:n}(this,t,function(){}),s.delegate=n,s.render(i),s},t.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},t.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},t.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,i(e,t),e)},i=function(t,e){var i,n,s,o,r,a,l;for(o=e.attributes,a=[],i=0,n=o.length;n>i;i++)r=o[i],s=r.name,l=r.value,a.push(t.setAttribute(s,l));return a},t}()}.call(this),function(){t.HeadDetails=function(){function t(t){var e,i,o,r,a,l,u;for(this.element=t,this.elements={},u=this.element.childNodes,r=0,l=u.length;l>r;r++)o=u[r],o.nodeType===Node.ELEMENT_NODE&&(a=o.outerHTML,i=null!=(e=this.elements)[a]?e[a]:e[a]={type:s(o),tracked:n(o),elements:[]},i.elements.push(o))}var e,i,n,s;return t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var i,n;i=this.elements,n=[];for(t in i)e=i[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var i,n,s,o,r,a;s=this.elements,r=[];for(n in s)o=s[n],a=o.type,i=o.elements,a!==t||e.hasElementWithKey(n)||r.push(i[0]);return r},t.prototype.getProvisionalElements=function(){var t,e,i,n,s,o,r;i=[],n=this.elements;for(e in n)s=n[e],r=s.type,o=s.tracked,t=s.elements,null!=r||o?t.length>1&&i.push.apply(i,t.slice(1)):i.push.apply(i,t);return i},s=function(t){return e(t)?"script":i(t)?"stylesheet":void 0},n=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},e=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},i=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},t}()}.call(this),function(){var e=function(t,e){function n(){this.constructor=t}for(var s in e)i.call(e,s)&&(t[s]=e[s]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t.SnapshotRenderer=function(i){function n(e,i){this.currentSnapshot=e,this.newSnapshot=i,this.currentHeadDetails=new t.HeadDetails(this.currentSnapshot.head),this.newHeadDetails=new t.HeadDetails(this.newSnapshot.head),this.newBody=this.newSnapshot.body}return e(n,i),n.prototype.render=function(t){return this.trackedElementsAreIdentical()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},n.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},n.prototype.replaceBody=function(){return this.activateBodyScriptElements(),this.importBodyPermanentElements(),this.assignNewBody()},n.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},n.prototype.copyNewHeadStylesheetElements=function(){var t,e,i,n,s;for(n=this.getNewHeadStylesheetElements(),s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(document.head.appendChild(t));return s},n.prototype.copyNewHeadScriptElements=function(){var t,e,i,n,s;for(n=this.getNewHeadScriptElements(),s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(document.head.appendChild(this.createScriptElement(t)));return s},n.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,i,n,s;for(n=this.getCurrentHeadProvisionalElements(),s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(document.head.removeChild(t));return s},n.prototype.copyNewHeadProvisionalElements=function(){var t,e,i,n,s;for(n=this.getNewHeadProvisionalElements(),s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(document.head.appendChild(t));return s},n.prototype.importBodyPermanentElements=function(){var t,e,i,n,s,o;for(n=this.getNewBodyPermanentElements(),o=[],e=0,i=n.length;i>e;e++)s=n[e],(t=this.findCurrentBodyPermanentElement(s))?o.push(s.parentNode.replaceChild(t,s)):o.push(void 0);return o},n.prototype.activateBodyScriptElements=function(){var t,e,i,n,s,o;for(n=this.getNewBodyScriptElements(),o=[],e=0,i=n.length;i>e;e++)s=n[e],t=this.createScriptElement(s),o.push(s.parentNode.replaceChild(t,s));return o},n.prototype.assignNewBody=function(){return document.body=this.newBody},n.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.findFirstAutofocusableElement())?t.focus():void 0},n.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},n.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},n.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},n.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},n.prototype.getNewBodyPermanentElements=function(){return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")},n.prototype.findCurrentBodyPermanentElement=function(t){return document.body.querySelector("#"+t.id+"[data-turbolinks-permanent]")},n.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},n.prototype.findFirstAutofocusableElement=function(){return document.body.querySelector("[autofocus]")},n}(t.Renderer)}.call(this),function(){var e=function(t,e){function n(){this.constructor=t}for(var s in e)i.call(e,s)&&(t[s]=e[s]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t.ErrorRenderer=function(t){function i(t){this.html=t}return e(i,t),i.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},i.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},i.prototype.activateBodyScriptElements=function(){var t,e,i,n,s,o;for(n=this.getScriptElements(),o=[],e=0,i=n.length;i>e;e++)s=n[e],t=this.createScriptElement(s),o.push(s.parentNode.replaceChild(t,s));return o},i.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},i}(t.Renderer)}.call(this),function(){t.View=function(){function e(t){this.delegate=t,this.element=document.documentElement}return e.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},e.prototype.getSnapshot=function(){return t.Snapshot.fromElement(this.element)},e.prototype.render=function(t,e){var i,n,s;return s=t.snapshot,i=t.error,n=t.isPreview,this.markAsPreview(n),null!=s?this.renderSnapshot(s,e):this.renderError(i,e)},e.prototype.markAsPreview=function(t){return t?this.element.setAttribute("data-turbolinks-preview",""):this.element.removeAttribute("data-turbolinks-preview")},e.prototype.renderSnapshot=function(e,i){return t.SnapshotRenderer.render(this.delegate,i,this.getSnapshot(),t.Snapshot.wrap(e))},e.prototype.renderError=function(e,i){return t.ErrorRenderer.render(this.delegate,i,e)},e}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.ScrollManager=function(){function t(t){this.delegate=t,this.onScroll=e(this.onScroll,this)}return t.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},t.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},t.prototype.scrollToElement=function(t){return t.scrollIntoView()},t.prototype.scrollToPosition=function(t){var e,i;return e=t.x,i=t.y,window.scrollTo(e,i)},t.prototype.onScroll=function(){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},t.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},t}()}.call(this),function(){t.SnapshotCache=function(){function e(t){this.size=t,this.keys=[],this.snapshots={}}var i;return e.prototype.has=function(t){var e;return e=i(t),e in this.snapshots},e.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},e.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},e.prototype.read=function(t){var e;return e=i(t),this.snapshots[e]},e.prototype.write=function(t,e){var n;return n=i(t),this.snapshots[n]=e},e.prototype.touch=function(t){var e,n;return n=i(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},e.prototype.trim=function(){var t,e,i,n,s;for(n=this.keys.splice(this.size),s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(delete this.snapshots[e]);return s},i=function(e){return t.Location.wrap(e).toCacheKey()},e}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.Visit=function(){function i(i,n,s){this.controller=i,this.action=s,this.performScroll=e(this.performScroll,this),this.identifier=t.uuid(),this.location=t.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return i.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},i.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},i.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},i.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},i.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},i.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new t.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},i.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},i.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},i.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var i;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(i=this.adapter).visitRendered&&i.visitRendered(this),t?void 0:this.complete()})):void 0},i.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},i.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},i.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},i.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},i.prototype.requestCompletedWithResponse=function(e,i){return this.response=e,null!=i&&(this.redirectedToLocation=t.Location.wrap(i)),this.adapter.visitRequestCompleted(this)},i.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},i.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},i.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},i.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},i.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},i.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},i.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},i.prototype.getTimingMetrics=function(){return t.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},i.prototype.shouldIssueRequest=function(){return"restore"!==this.action||!this.hasCachedSnapshot()},i.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},i.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},i.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},i}()}.call(this),function(){var e=function(t,e){return function(){return t.apply(e,arguments)}};t.Controller=function(){function i(){this.clickBubbled=e(this.clickBubbled,this),this.clickCaptured=e(this.clickCaptured,this),this.pageLoaded=e(this.pageLoaded,this),this.history=new t.History(this),this.view=new t.View(this),this.scrollManager=new t.ScrollManager(this),this.restorationData={},this.clearCache()}return i.prototype.start=function(){return t.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},i.prototype.disable=function(){return this.enabled=!1},i.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},i.prototype.clearCache=function(){return this.cache=new t.SnapshotCache(10)},i.prototype.visit=function(e,i){var n,s;return null==i&&(i={}),e=t.Location.wrap(e),this.applicationAllowsVisitingLocation(e)?this.locationIsVisitable(e)?(n=null!=(s=i.action)?s:"advance",this.adapter.visitProposedToLocationWithAction(e,n)):window.location=e:void 0},i.prototype.startVisitToLocationWithAction=function(e,i,n){var s;return t.supported?(s=this.getRestorationDataForIdentifier(n),this.startVisit(e,i,{restorationData:s})):window.location=e},i.prototype.startHistory=function(){return this.location=t.Location.wrap(window.location),this.restorationIdentifier=t.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},i.prototype.stopHistory=function(){return this.history.stop()},i.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(e,i){return this.restorationIdentifier=i,this.location=t.Location.wrap(e),this.history.push(this.location,this.restorationIdentifier)},i.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(e,i){return this.restorationIdentifier=i,this.location=t.Location.wrap(e),this.history.replace(this.location,this.restorationIdentifier)},i.prototype.historyPoppedToLocationWithRestorationIdentifier=function(e,i){var n;return this.restorationIdentifier=i,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(e,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=t.Location.wrap(e)):this.adapter.pageInvalidated()},i.prototype.getCachedSnapshotForLocation=function(t){var e;return e=this.cache.get(t),e?e.clone():void 0},i.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},i.prototype.cacheSnapshot=function(){var t;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),t=this.view.getSnapshot(),this.cache.put(this.lastRenderedLocation,t.clone())):void 0},i.prototype.scrollToAnchor=function(t){var e;return(e=document.getElementById(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},i.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},i.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},i.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},i.prototype.render=function(t,e){return this.view.render(t,e)},i.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},i.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},i.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},i.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},i.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},i.prototype.clickBubbled=function(t){var e,i,n;return this.enabled&&this.clickEventIsSignificant(t)&&(i=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(i))&&this.applicationAllowsFollowingLinkToLocation(i,n)?(t.preventDefault(),e=this.getActionForLink(i),this.visit(n,{action:e})):void 0},i.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var i;return i=this.notifyApplicationAfterClickingLinkToLocation(t,e),!i.defaultPrevented},i.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},i.prototype.notifyApplicationAfterClickingLinkToLocation=function(e,i){return t.dispatch("turbolinks:click",{target:e,data:{url:i.absoluteURL},cancelable:!0})},i.prototype.notifyApplicationBeforeVisitingLocation=function(e){return t.dispatch("turbolinks:before-visit",{data:{url:e.absoluteURL},cancelable:!0})},i.prototype.notifyApplicationAfterVisitingLocation=function(e){return t.dispatch("turbolinks:visit",{data:{url:e.absoluteURL}})},i.prototype.notifyApplicationBeforeCachingSnapshot=function(){return t.dispatch("turbolinks:before-cache")},i.prototype.notifyApplicationBeforeRender=function(e){return t.dispatch("turbolinks:before-render",{data:{newBody:e}})},i.prototype.notifyApplicationAfterRender=function(){return t.dispatch("turbolinks:render")},i.prototype.notifyApplicationAfterPageLoad=function(e){return null==e&&(e={}),t.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:e}})},i.prototype.startVisit=function(t,e,i){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,i),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},i.prototype.createVisit=function(e,i,n){
var s,o,r,a,l;return o=null!=n?n:{},a=o.restorationIdentifier,r=o.restorationData,s=o.historyChanged,l=new t.Visit(this,e,i),l.restorationIdentifier=null!=a?a:t.uuid(),l.restorationData=t.copyObject(r),l.historyChanged=s,l.referrer=this.location,l},i.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},i.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},i.prototype.getVisitableLinkForNode=function(e){return this.nodeIsVisitable(e)?t.closest(e,"a[href]:not([target])"):void 0},i.prototype.getVisitableLocationForLink=function(e){var i;return i=new t.Location(e.getAttribute("href")),this.locationIsVisitable(i)?i:void 0},i.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},i.prototype.nodeIsVisitable=function(e){var i;return!(i=t.closest(e,"[data-turbolinks]"))||"false"!==i.getAttribute("data-turbolinks")},i.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},i.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},i.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},i}()}.call(this),function(){var e,i,n;t.start=function(){return i()?(null==t.controller&&(t.controller=e()),t.controller.start()):void 0},i=function(){return null==window.Turbolinks&&(window.Turbolinks=t),n()},e=function(){var e;return e=new t.Controller,e.adapter=new t.BrowserAdapter(e),e},n=function(){return window.Turbolinks===t},n()&&t.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define(t)}).call(this);
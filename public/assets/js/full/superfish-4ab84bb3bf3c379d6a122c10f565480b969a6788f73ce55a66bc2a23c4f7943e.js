!function(t,e){"use strict";var i=function(){var i={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},s=function(){var e=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return e&&t("html").css("cursor","pointer").on("click",t.noop),e}(),n=function(){var t=document.documentElement.style;return"behavior"in t&&"fill"in t&&/iemobile/i.test(navigator.userAgent)}(),o=function(){return!!e.PointerEvent}(),a=function(t,e){var s=i.menuClass;e.cssArrows&&(s+=" "+i.menuArrowClass),t.toggleClass(s)},r=function(e,s){return e.find("li."+s.pathClass).slice(0,s.pathLevels).addClass(s.hoverClass+" "+i.bcClass).filter(function(){return t(this).children(s.popUpSelector).hide().show().length}).removeClass(s.pathClass)},l=function(t){t.children("a").toggleClass(i.anchorClass)},h=function(t){var e=t.css("ms-touch-action"),i=t.css("touch-action");i=i||e,i="pan-y"===i?"auto":"pan-y",t.css({"ms-touch-action":i,"touch-action":i})},d=function(e,i){var a="li:has("+i.popUpSelector+")";t.fn.hoverIntent&&!i.disableHI?e.hoverIntent(u,p,a):e.on("mouseenter.superfish",a,u).on("mouseleave.superfish",a,p);var r="MSPointerDown.superfish";o&&(r="pointerdown.superfish"),s||(r+=" touchend.superfish"),n&&(r+=" mousedown.superfish"),e.on("focusin.superfish","li",u).on("focusout.superfish","li",p).on(r,"a",i,c)},c=function(e){var i=t(this),s=g(i),n=i.siblings(e.data.popUpSelector);return s.onHandleTouch.call(n)===!1?this:void(n.length>0&&n.is(":hidden")&&(i.one("click.superfish",!1),"MSPointerDown"===e.type||"pointerdown"===e.type?i.trigger("focus"):t.proxy(u,i.parent("li"))()))},u=function(){var e=t(this),i=g(e);clearTimeout(i.sfTimer),e.siblings().superfish("hide").end().superfish("show")},p=function(){var e=t(this),i=g(e);s?t.proxy(f,e,i)():(clearTimeout(i.sfTimer),i.sfTimer=setTimeout(t.proxy(f,e,i),i.delay))},f=function(e){e.retainPath=t.inArray(this[0],e.$path)>-1,this.superfish("hide"),this.parents("."+e.hoverClass).length||(e.onIdle.call(m(this)),e.$path.length&&t.proxy(u,e.$path)())},m=function(t){return t.closest("."+i.menuClass)},g=function(t){return m(t).data("sf-options")};return{hide:function(e){if(this.length){var i=this,s=g(i);if(!s)return this;var n=s.retainPath===!0?s.$path:"",o=i.find("li."+s.hoverClass).add(this).not(n).removeClass(s.hoverClass).children(s.popUpSelector),a=s.speedOut;if(e&&(o.show(),a=0),s.retainPath=!1,s.onBeforeHide.call(o)===!1)return this;o.stop(!0,!0).animate(s.animationOut,a,function(){var e=t(this);s.onHide.call(e)})}return this},show:function(){var t=g(this);if(!t)return this;var e=this.addClass(t.hoverClass),i=e.children(t.popUpSelector);return t.onBeforeShow.call(i)===!1?this:(i.stop(!0,!0).animate(t.animation,t.speed,function(){t.onShow.call(i)}),this)},destroy:function(){return this.each(function(){var e,s=t(this),n=s.data("sf-options");return!!n&&(e=s.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),a(s,n),l(e),h(s),s.off(".superfish").off(".hoverIntent"),e.children(n.popUpSelector).attr("style",function(t,e){return e.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+i.bcClass).addClass(n.pathClass),s.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(s),void s.removeData("sf-options"))})},init:function(e){return this.each(function(){var s=t(this);if(s.data("sf-options"))return!1;var n=t.extend({},t.fn.superfish.defaults,e),o=s.find(n.popUpSelector).parent("li");n.$path=r(s,n),s.data("sf-options",n),a(s,n),l(o),h(s),d(s,n),o.not("."+i.bcClass).superfish("hide",!0),n.onInit.call(this)})}}}();t.fn.superfish=function(e){return i[e]?i[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?t.error("Method "+e+" does not exist on jQuery.fn.superfish"):i.init.apply(this,arguments)},t.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:t.noop,onBeforeShow:t.noop,onShow:t.noop,onBeforeHide:t.noop,onHide:t.noop,onIdle:t.noop,onDestroy:t.noop,onHandleTouch:t.noop}}(jQuery,window);
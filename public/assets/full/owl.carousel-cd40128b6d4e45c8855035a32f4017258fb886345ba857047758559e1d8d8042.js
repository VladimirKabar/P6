"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,i){var n={init:function(e,i){var n=this;n.$elem=t(i),n.options=t.extend({},t.fn.owlCarousel.options,n.$elem.data(),e),n.userOptions=e,n.loadContent()},loadContent:function(){function e(t){var e,i="";if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(i+=t.owl[e].item);n.$elem.html(i)}n.logIn()}var i,n=this;"function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath?(i=n.options.jsonPath,t.getJSON(i,e)):n.logIn()},logIn:function(){var t=this;t.$elem.data("owl-originalStyles",t.$elem.attr("style")),t.$elem.data("owl-originalClasses",t.$elem.attr("class")),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0!==t.$elem.children().length&&(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")===!1&&(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),i=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),i||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,i,n=this;if(n.options.responsive===!1)return!1;if(n.options.singleItem===!0)return n.options.items=n.orignalItems=1,n.options.itemsCustom=!1,n.options.itemsDesktop=!1,n.options.itemsDesktopSmall=!1,n.options.itemsTablet=!1,n.options.itemsTabletSmall=!1,n.options.itemsMobile=!1,!1;if(e=t(n.options.responsiveBaseWidth).width(),e>(n.options.itemsDesktop[0]||n.orignalItems)&&(n.options.items=n.orignalItems),n.options.itemsCustom!==!1)for(n.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),i=0;i<n.options.itemsCustom.length;i+=1)n.options.itemsCustom[i][0]<=e&&(n.options.items=n.options.itemsCustom[i][1]);else e<=n.options.itemsDesktop[0]&&n.options.itemsDesktop!==!1&&(n.options.items=n.options.itemsDesktop[1]),e<=n.options.itemsDesktopSmall[0]&&n.options.itemsDesktopSmall!==!1&&(n.options.items=n.options.itemsDesktopSmall[1]),e<=n.options.itemsTablet[0]&&n.options.itemsTablet!==!1&&(n.options.items=n.options.itemsTablet[1]),e<=n.options.itemsTabletSmall[0]&&n.options.itemsTabletSmall!==!1&&(n.options.items=n.options.itemsTabletSmall[1]),e<=n.options.itemsMobile[0]&&n.options.itemsMobile!==!1&&(n.options.items=n.options.itemsMobile[1]);n.options.items>n.itemsAmount&&n.options.itemsScaleUp===!0&&(n.options.items=n.itemsAmount)},response:function(){var i,n,s=this;return s.options.responsive===!0&&(n=t(e).width(),s.resizer=function(){t(e).width()!==n&&(s.options.autoPlay!==!1&&e.clearInterval(s.autoPlayInterval),e.clearTimeout(i),i=e.setTimeout(function(){n=t(e).width(),s.updateVars()},s.options.responsiveRefreshRate))},void t(e).resize(s.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,i=0,n=e.itemsAmount-e.options.items;e.$owlItems.each(function(s){var o=t(this);o.css({width:e.itemWidth}).data("owl-item",Number(s)),s%e.options.items!==0&&s!==n||s>n||(i+=1),o.data("owl-roundPages",i)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth)*-1;return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,i,n,s=this,o=0,a=0;for(s.positionsInArray=[0],s.pagesInArray=[],e=0;e<s.itemsAmount;e+=1)a+=s.itemWidth,s.positionsInArray.push(-a),s.options.scrollPerPage===!0&&(i=t(s.$owlItems[e]),n=i.data("owl-roundPages"),n!==o&&(s.pagesInArray[o]=s.positionsInArray[e],o=n))},buildControls:function(){var e=this;e.options.navigation!==!0&&e.options.pagination!==!0||(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,i=t('<div class="owl-buttons"/>');e.owlControls.append(i),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),i.append(e.buttonPrev).append(e.buttonNext),i.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),i.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(i){i.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(i){i.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,i,n,s,o,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),e=0,i=r.itemsAmount-r.itemsAmount%r.options.items,s=0;s<r.itemsAmount;s+=1)s%r.options.items===0&&(e+=1,i===s&&(n=r.itemsAmount-r.options.items),o=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:r.options.paginationNumbers===!0?e:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),o.append(a),o.data("owl-page",i===s?n:s),o.data("owl-roundPages",e),r.paginationWrapper.append(o));r.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination!==!1&&void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation!==!1&&void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,i,n){var s,o=this;return!o.isTransition&&("function"==typeof o.options.beforeMove&&o.options.beforeMove.apply(this,[o.$elem]),t>=o.maximumItem?t=o.maximumItem:t<=0&&(t=0),o.currentItem=o.owl.currentItem=t,o.options.transitionStyle!==!1&&"drag"!==n&&1===o.options.items&&o.browser.support3d===!0?(o.swapSpeed(0),o.browser.support3d===!0?o.transition3d(o.positionsInArray[t]):o.css2slide(o.positionsInArray[t],1),o.afterGo(),o.singleItemTransition(),!1):(s=o.positionsInArray[t],o.browser.support3d===!0?(o.isCss3Finish=!1,i===!0?(o.swapSpeed("paginationSpeed"),e.setTimeout(function(){o.isCss3Finish=!0},o.options.paginationSpeed)):"rewind"===i?(o.swapSpeed(o.options.rewindSpeed),e.setTimeout(function(){o.isCss3Finish=!0},o.options.rewindSpeed)):(o.swapSpeed("slideSpeed"),e.setTimeout(function(){o.isCss3Finish=!0},o.options.slideSpeed)),o.transition3d(s)):i===!0?o.css2slide(s,o.options.paginationSpeed):"rewind"===i?o.css2slide(s,o.options.rewindSpeed):o.css2slide(s,o.options.slideSpeed),void o.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||t===-1?t=e.maximumItem:t<=0&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay!==!1&&(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var i=this;i.isCssFinish=!1,i.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||i.options.slideSpeed,complete:function(){i.isCssFinish=!0}})},checkBrowser:function(){var t,n,s,o,a=this,r="translate3d(0px, 0px, 0px)",l=i.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,t=/translate3d\(0px, 0px, 0px\)/g,n=l.style.cssText.match(t),s=null!==n&&1===n.length,o="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:s,isTouch:o}},moveEvents:function(){var t=this;t.options.mouseDrag===!1&&t.options.touchDrag===!1||(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function n(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function s(e){"on"===e?(t(i).on(l.ev_types.move,a),t(i).on(l.ev_types.end,r)):"off"===e&&(t(i).off(l.ev_types.move),t(i).off(l.ev_types.end))}function o(i){var o,a=i.originalEvent||i||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),o=t(this).position(),h.relativePos=o.left,h.offsetX=n(a).x-o.left,h.offsetY=n(a).y-o.top,s("on"),h.sliding=!1,h.targetElement=a.target||a.srcElement}}function a(s){var o,a,r=s.originalEvent||s||e.event;l.newPosX=n(r).x-h.offsetX,l.newPosY=n(r).y-h.offsetY,l.newRelativeX=l.newPosX-h.relativePos,"function"==typeof l.options.startDragging&&h.dragging!==!0&&0!==l.newRelativeX&&(h.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,h.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&h.sliding===!1&&t(i).off("touchmove.owl"),o=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,o()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(i){var n,o,a,r=i.originalEvent||i||e.event;r.target=r.target||r.srcElement,h.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(n=l.getNewPosition(),l.goTo(n,!1,"drag"),h.targetElement===r.target&&l.browser.isTouch!==!0&&(t(r.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),o=t._data(r.target,"events").click,a=o.pop(),o.splice(0,0,a))),s("off")}var l=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",o)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,i=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,n=e.newPosX,s=null;return t.each(i,function(o,a){n-e.itemWidth/20>i[o+1]&&n-e.itemWidth/20<a&&"left"===e.moveDirection()?(s=a,e.options.scrollPerPage===!0?e.currentItem=t.inArray(s,e.positionsInArray):e.currentItem=o):n+e.itemWidth/20<a&&n+e.itemWidth/20>(i[o+1]||i[o]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(s=i[o+1]||i[i.length-1],e.currentItem=t.inArray(s,e.positionsInArray)):(s=i[o+1],e.currentItem=o+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,i){t.options.autoPlay=i,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,i){t.goTo(i)}),t.$elem.on("owl.jumpTo",function(e,i){t.jumpTo(i)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,i,n,s,o,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)i=t(a.$owlItems[e]),"loaded"!==i.data("owl-loaded")&&(n=i.data("owl-item"),s=i.find(".lazyOwl"),"string"==typeof s.data("src")?(void 0===i.data("owl-loaded")&&(s.hide(),i.addClass("loading").data("owl-loaded","checked")),o=a.options.lazyFollow!==!0||n>=a.currentItem,o&&n<a.currentItem+a.options.items&&s.length&&a.lazyPreload(i,s)):i.data("owl-loaded","loaded"))},lazyPreload:function(t,i){function n(){t.data("owl-loaded","loaded").removeClass("loading"),i.removeAttr("data-src"),"fade"===a.options.lazyEffect?i.fadeIn(400):i.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function s(){r+=1,a.completeImg(i.get(0))||o===!0?n():r<=100?e.setTimeout(s,100):n()}var o,a=this,r=0;"DIV"===i.prop("tagName")?(i.css("background-image","url("+i.data("src")+")"),o=!0):i[0].src=i.data("src"),s()},autoHeight:function(){function i(){var i=t(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",i+"px"),o.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}function n(){s+=1,o.completeImg(a.get(0))?i():s<=100?e.setTimeout(n,100):o.wrapperOuter.css("height","")}var s,o=this,a=t(o.$owlItems[o.currentItem]).find("img");void 0!==a.get(0)?(s=0,n()):i()},completeImg:function(t){var e;return!!t.complete&&(e=typeof t.naturalWidth,"undefined"===e||0!==t.naturalWidth)},onVisibleItems:function(){var e,i=this;for(i.options.addClassActive===!0&&i.$owlItems.removeClass("active"),i.visibleItems=[],e=i.currentItem;e<i.currentItem+i.options.items;e+=1)i.visibleItems.push(e),i.options.addClassActive===!0&&t(i.$owlItems[e]).addClass("active");i.owl.visibleItems=i.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,i=e.outClass,n=e.inClass,s=e.$owlItems.eq(e.currentItem),o=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),o.css(t(a,10)).addClass(i).on(l,function(){e.endPrev=!0,o.off(l),e.clearTransStyle(o,i)}),s.addClass(n).on(l,function(){e.endCurrent=!0,s.off(l),e.clearTransStyle(s,n)})},clearTransStyle:function(t,e){var i=this;t.css({position:"",left:""}).removeClass(e),i.endPrev&&i.endCurrent&&(i.$owlWrapper.removeClass("owl-origin"),i.endPrev=!1,i.endCurrent=!1,i.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var n=this;n.$elem.off(".owl owl mousedown.disableTextSelect"),t(i).off(".owl owl"),t(e).off("resize",n.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr("style",t.$elem.data("owl-originalStyles")||"").attr("class",t.$elem.data("owl-originalClasses"))},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var i=this,n=t.extend({},i.userOptions,e);i.unWrap(),i.init(n,i.$elem)},addItem:function(t,e){var i,n=this;return!!t&&(0===n.$elem.children().length?(n.$elem.append(t),n.setVars(),!1):(n.unWrap(),i=void 0===e||e===-1?-1:e,i>=n.$userItems.length||i===-1?n.$userItems.eq(-1).after(t):n.$userItems.eq(i).before(t),void n.setVars()))},removeItem:function(t){var e,i=this;return 0!==i.$elem.children().length&&(e=void 0===t||t===-1?-1:t,i.unWrap(),i.$userItems.eq(e).remove(),void i.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var i=Object.create(n);i.init(e,this),t.data(this,"owlCarousel",i)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);
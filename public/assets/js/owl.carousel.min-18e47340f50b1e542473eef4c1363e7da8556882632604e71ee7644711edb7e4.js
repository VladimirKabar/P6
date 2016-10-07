"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,i){var s={init:function(e,i){this.$elem=t(i),this.options=t.extend({},t.fn.owlCarousel.options,this.$elem.data(),e),this.userOptions=e,this.loadContent()},loadContent:function(){function e(t){var e,i="";if("function"==typeof s.options.jsonSuccess)s.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(i+=t.owl[e].item);s.$elem.html(i)}s.logIn()}var i,s=this;"function"==typeof s.options.beforeInit&&s.options.beforeInit.apply(this,[s.$elem]),"string"==typeof s.options.jsonPath?(i=s.options.jsonPath,t.getJSON(i,e)):s.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style")),this.$elem.data("owl-originalClasses",this.$elem.attr("class")),this.$elem.css({opacity:0}),this.orignalItems=this.options.items,this.checkBrowser(),this.wrapperWidth=0,this.checkVisible=null,this.setVars()},setVars:function(){return 0!==this.$elem.children().length&&(this.baseClass(),this.eventTypes(),this.$userItems=this.$elem.children(),this.itemsAmount=this.$userItems.length,this.wrapItems(),this.$owlItems=this.$elem.find(".owl-item"),this.$owlWrapper=this.$elem.find(".owl-wrapper"),this.playDirection="next",this.prevItem=0,this.prevArr=[0],this.currentItem=0,this.customEvents(),void this.onStartup())},onStartup:function(){this.updateItems(),this.calculateAll(),this.buildControls(),this.updateControls(),this.response(),this.moveEvents(),this.stopOnHover(),this.owlStatus(),!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle),!0===this.options.autoPlay&&(this.options.autoPlay=5e3),this.play(),this.$elem.find(".owl-wrapper").css("display","block"),this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility(),this.onstartup=!1,this.eachMoveUpdate(),"function"==typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad(),!0===this.options.autoHeight&&this.autoHeight(),this.onVisibleItems(),"function"==typeof this.options.afterAction&&this.options.afterAction.apply(this,[this.$elem])},updateVars:function(){"function"==typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]),this.watchVisibility(),this.updateItems(),this.calculateAll(),this.updatePosition(),this.updateControls(),this.eachMoveUpdate(),"function"==typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return!1===t.$elem.is(":visible")&&(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),this.wrapperOuter=this.$elem.find(".owl-wrapper-outer"),this.$elem.css("display","block")},baseClass:function(){var t=this.$elem.hasClass(this.options.baseClass),e=this.$elem.hasClass(this.options.theme);t||this.$elem.addClass(this.options.baseClass),e||this.$elem.addClass(this.options.theme)},updateItems:function(){var e,i;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=!1,this.options.itemsMobile=!1;if(e=t(this.options.responsiveBaseWidth).width(),e>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems),!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),i=0;i<this.options.itemsCustom.length;i+=1)this.options.itemsCustom[i][0]<=e&&(this.options.items=this.options.itemsCustom[i][1]);else e<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),e<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),e<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),e<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),e<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var i,s,n=this;return!0===n.options.responsive&&(s=t(e).width(),n.resizer=function(){t(e).width()!==s&&(!1!==n.options.autoPlay&&e.clearInterval(n.autoPlayInterval),e.clearTimeout(i),i=e.setTimeout(function(){s=t(e).width(),n.updateVars()},n.options.responsiveRefreshRate))},void t(e).resize(n.resizer))},updatePosition:function(){this.jumpTo(this.currentItem),!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var e=this,i=0,s=e.itemsAmount-e.options.items;e.$owlItems.each(function(n){var o=t(this);o.css({width:e.itemWidth}).data("owl-item",Number(n)),0!==n%e.options.items&&n!==s||n>s||(i+=1),o.data("owl-roundPages",i)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0}),this.appendItemsSizes()},calculateAll:function(){this.calculateWidth(),this.appendWrapperSizes(),this.loops(),this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/this.options.items)},max:function(){var t=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);return this.options.items>this.itemsAmount?this.maximumPixels=t=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=t),t},min:function(){return 0},loops:function(){var e,i,s=0,n=0;for(this.positionsInArray=[0],this.pagesInArray=[],e=0;e<this.itemsAmount;e+=1)n+=this.itemWidth,this.positionsInArray.push(-n),!0===this.options.scrollPerPage&&(i=t(this.$owlItems[e]),i=i.data("owl-roundPages"),i!==s&&(this.pagesInArray[s]=this.positionsInArray[e],s=i))},buildControls:function(){!0!==this.options.navigation&&!0!==this.options.pagination||(this.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem)),!0===this.options.pagination&&this.buildPagination(),!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var e=this,i=t('<div class="owl-buttons"/>');e.owlControls.append(i),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),i.append(e.buttonPrev).append(e.buttonNext),i.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),i.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(i){i.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(i){i.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,i,s,n,o,a;if(!1===this.options.pagination)return!1;for(this.paginationWrapper.html(""),e=0,i=this.itemsAmount-this.itemsAmount%this.options.items,n=0;n<this.itemsAmount;n+=1)0===n%this.options.items&&(e+=1,i===n&&(s=this.itemsAmount-this.options.items),o=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:!0===this.options.paginationNumbers?e:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),o.append(a),o.data("owl-page",i===n?s:n),o.data("owl-roundPages",e),this.paginationWrapper.append(o));this.checkPagination()},checkPagination:function(){var e=this;return!1!==e.options.pagination&&void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){return!1!==this.options.navigation&&void(!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled"))))},updateControls:function(){this.updatePagination(),this.checkNavigation(),this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(t){if(this.isTransition)return!1;if(this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1,this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0)){if(!0!==this.options.rewindNav)return this.currentItem=this.maximumItem,!1;this.currentItem=0,t="rewind"}this.goTo(this.currentItem,t)},prev:function(t){if(this.isTransition)return!1;if(this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?this.options.items:1),0>this.currentItem){if(!0!==this.options.rewindNav)return this.currentItem=0,!1;this.currentItem=this.maximumItem,t="rewind"}this.goTo(this.currentItem,t)},goTo:function(t,i,s){var n=this;return!n.isTransition&&("function"==typeof n.options.beforeMove&&n.options.beforeMove.apply(this,[n.$elem]),t>=n.maximumItem?t=n.maximumItem:0>=t&&(t=0),n.currentItem=n.owl.currentItem=t,!1!==n.options.transitionStyle&&"drag"!==s&&1===n.options.items&&!0===n.browser.support3d?(n.swapSpeed(0),!0===n.browser.support3d?n.transition3d(n.positionsInArray[t]):n.css2slide(n.positionsInArray[t],1),n.afterGo(),n.singleItemTransition(),!1):(t=n.positionsInArray[t],!0===n.browser.support3d?(n.isCss3Finish=!1,!0===i?(n.swapSpeed("paginationSpeed"),e.setTimeout(function(){n.isCss3Finish=!0},n.options.paginationSpeed)):"rewind"===i?(n.swapSpeed(n.options.rewindSpeed),e.setTimeout(function(){n.isCss3Finish=!0},n.options.rewindSpeed)):(n.swapSpeed("slideSpeed"),e.setTimeout(function(){n.isCss3Finish=!0},n.options.slideSpeed)),n.transition3d(t)):!0===i?n.css2slide(t,n.options.paginationSpeed):"rewind"===i?n.css2slide(t,n.options.rewindSpeed):n.css2slide(t,n.options.slideSpeed),void n.afterGo()))},jumpTo:function(t){"function"==typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]),t>=this.maximumItem||-1===t?t=this.maximumItem:0>=t&&(t=0),this.swapSpeed(0),!0===this.browser.support3d?this.transition3d(this.positionsInArray[t]):this.css2slide(this.positionsInArray[t],1),this.currentItem=this.owl.currentItem=t,this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem),this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2],this.prevArr.shift(0),this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp()),"function"==typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop",e.clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var t=this;return t.apStatus="play",!1!==t.options.autoPlay&&(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){"slideSpeed"===t?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===t?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!=typeof t&&this.$owlWrapper.css(this.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){this.$owlWrapper.css(this.doTranslate(t))},css2move:function(t){this.$owlWrapper.css({left:t})},css2slide:function(t,e){var i=this;i.isCssFinish=!1,i.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||i.options.slideSpeed,complete:function(){i.isCssFinish=!0}})},checkBrowser:function(){var t=i.createElement("div");t.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)",t=t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),this.browser={support3d:null!==t&&1===t.length,isTouch:"ontouchstart"in e||e.navigator.msMaxTouchPoints}},moveEvents:function(){!1===this.options.mouseDrag&&!1===this.options.touchDrag||(this.gestures(),this.disabledEvents())},eventTypes:function(){var t=["s","e","x"];this.ev_types={},!0===this.options.mouseDrag&&!0===this.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===this.options.mouseDrag&&!0===this.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),this.ev_types.start=t[0],this.ev_types.move=t[1],this.ev_types.end=t[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(t){t.preventDefault()}),this.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function s(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function n(e){"on"===e?(t(i).on(r.ev_types.move,o),t(i).on(r.ev_types.end,a)):"off"===e&&(t(i).off(r.ev_types.move),t(i).off(r.ev_types.end))}function o(n){n=n.originalEvent||n||e.event,r.newPosX=s(n).x-l.offsetX,r.newPosY=s(n).y-l.offsetY,r.newRelativeX=r.newPosX-l.relativePos,"function"==typeof r.options.startDragging&&!0!==l.dragging&&0!==r.newRelativeX&&(l.dragging=!0,r.options.startDragging.apply(r,[r.$elem])),(8<r.newRelativeX||-8>r.newRelativeX)&&!0===r.browser.isTouch&&(void 0!==n.preventDefault?n.preventDefault():n.returnValue=!1,l.sliding=!0),(10<r.newPosY||-10>r.newPosY)&&!1===l.sliding&&t(i).off("touchmove.owl"),r.newPosX=Math.max(Math.min(r.newPosX,r.newRelativeX/5),r.maximumPixels+r.newRelativeX/5),!0===r.browser.support3d?r.transition3d(r.newPosX):r.css2move(r.newPosX)}function a(i){i=i.originalEvent||i||e.event;var s;i.target=i.target||i.srcElement,l.dragging=!1,!0!==r.browser.isTouch&&r.$owlWrapper.removeClass("grabbing"),r.dragDirection=0>r.newRelativeX?r.owl.dragDirection="left":r.owl.dragDirection="right",0!==r.newRelativeX&&(s=r.getNewPosition(),r.goTo(s,!1,"drag"),l.targetElement===i.target&&!0!==r.browser.isTouch&&(t(i.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),i=t._data(i.target,"events").click,s=i.pop(),i.splice(0,0,s))),n("off")}var r=this,l={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};r.isCssFinish=!0,r.$elem.on(r.ev_types.start,".owl-wrapper",function(i){i=i.originalEvent||i||e.event;var o;if(3===i.which)return!1;if(!(r.itemsAmount<=r.options.items)){if(!1===r.isCssFinish&&!r.options.dragBeforeAnimFinish||!1===r.isCss3Finish&&!r.options.dragBeforeAnimFinish)return!1;!1!==r.options.autoPlay&&e.clearInterval(r.autoPlayInterval),!0===r.browser.isTouch||r.$owlWrapper.hasClass("grabbing")||r.$owlWrapper.addClass("grabbing"),r.newPosX=0,r.newRelativeX=0,t(this).css(r.removeTransition()),o=t(this).position(),l.relativePos=o.left,l.offsetX=s(i).x-o.left,l.offsetY=s(i).y-o.top,n("on"),l.sliding=!1,l.targetElement=i.target||i.srcElement}})},getNewPosition:function(){var t=this.closestItem();return t>this.maximumItem?t=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=t=0),t},closestItem:function(){var e=this,i=!0===e.options.scrollPerPage?e.pagesInArray:e.positionsInArray,s=e.newPosX,n=null;return t.each(i,function(o,a){s-e.itemWidth/20>i[o+1]&&s-e.itemWidth/20<a&&"left"===e.moveDirection()?(n=a,e.currentItem=!0===e.options.scrollPerPage?t.inArray(n,e.positionsInArray):o):s+e.itemWidth/20<a&&s+e.itemWidth/20>(i[o+1]||i[o]-e.itemWidth)&&"right"===e.moveDirection()&&(!0===e.options.scrollPerPage?(n=i[o+1]||i[i.length-1],e.currentItem=t.inArray(n,e.positionsInArray)):(n=i[o+1],e.currentItem=o+1))}),e.currentItem},moveDirection:function(){var t;return 0>this.newRelativeX?(t="right",this.playDirection="next"):(t="left",this.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,i){t.options.autoPlay=i,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,i){t.goTo(i)}),t.$elem.on("owl.jumpTo",function(e,i){t.jumpTo(i)})},stopOnHover:function(){var t=this;!0===t.options.stopOnHover&&!0!==t.browser.isTouch&&!1!==t.options.autoPlay&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,i,s,n,o;if(!1===this.options.lazyLoad)return!1;for(e=0;e<this.itemsAmount;e+=1)i=t(this.$owlItems[e]),"loaded"!==i.data("owl-loaded")&&(s=i.data("owl-item"),n=i.find(".lazyOwl"),"string"!=typeof n.data("src")?i.data("owl-loaded","loaded"):(void 0===i.data("owl-loaded")&&(n.hide(),i.addClass("loading").data("owl-loaded","checked")),(o=!0!==this.options.lazyFollow||s>=this.currentItem)&&s<this.currentItem+this.options.items&&n.length&&this.lazyPreload(i,n)))},lazyPreload:function(t,i){function s(){t.data("owl-loaded","loaded").removeClass("loading"),i.removeAttr("data-src"),"fade"===a.options.lazyEffect?i.fadeIn(400):i.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function n(){r+=1,a.completeImg(i.get(0))||!0===o?s():100>=r?e.setTimeout(n,100):s()}var o,a=this,r=0;"DIV"===i.prop("tagName")?(i.css("background-image","url("+i.data("src")+")"),o=!0):i[0].src=i.data("src"),n()},autoHeight:function(){function i(){var i=t(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",i+"px"),o.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}function s(){n+=1,o.completeImg(a.get(0))?i():100>=n?e.setTimeout(s,100):o.wrapperOuter.css("height","")}var n,o=this,a=t(o.$owlItems[o.currentItem]).find("img");void 0!==a.get(0)?(n=0,s()):i()},completeImg:function(t){return!(!t.complete||"undefined"!=typeof t.naturalWidth&&0===t.naturalWidth)},onVisibleItems:function(){var e;for(!0===this.options.addClassActive&&this.$owlItems.removeClass("active"),this.visibleItems=[],e=this.currentItem;e<this.currentItem+this.options.items;e+=1)this.visibleItems.push(e),!0===this.options.addClassActive&&t(this.$owlItems[e]).addClass("active");this.owl.visibleItems=this.visibleItems},transitionTypes:function(t){this.outClass="owl-"+t+"-out",this.inClass="owl-"+t+"-in"},singleItemTransition:function(){var t=this,e=t.outClass,i=t.inClass,s=t.$owlItems.eq(t.currentItem),n=t.$owlItems.eq(t.prevItem),o=Math.abs(t.positionsInArray[t.currentItem])+t.positionsInArray[t.prevItem],a=Math.abs(t.positionsInArray[t.currentItem])+t.itemWidth/2;t.isTransition=!0,t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"}),n.css({position:"relative",left:o+"px"}).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){t.endPrev=!0,n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),t.clearTransStyle(n,e)}),s.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){t.endCurrent=!0,s.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"),t.clearTransStyle(s,i)})},clearTransStyle:function(t,e){t.css({position:"",left:""}).removeClass(e),this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"),t(i).off(".owl owl"),t(e).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove()),this.clearEvents(),this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop(),e.clearInterval(this.checkVisible),this.unWrap(),this.$elem.removeData()},reinit:function(e){e=t.extend({},this.userOptions,e),this.unWrap(),this.init(e,this.$elem)},addItem:function(t,e){var i;return!!t&&(0===this.$elem.children().length?(this.$elem.append(t),this.setVars(),!1):(this.unWrap(),i=void 0===e||-1===e?-1:e,i>=this.$userItems.length||-1===i?this.$userItems.eq(-1).after(t):this.$userItems.eq(i).before(t),void this.setVars()))},removeItem:function(t){return 0!==this.$elem.children().length&&(t=void 0===t||-1===t?-1:t,this.unWrap(),this.$userItems.eq(t).remove(),void this.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(!0===t(this).data("owl-init"))return!1;t(this).data("owl-init",!0);var i=Object.create(s);i.init(e,this),t.data(this,"owlCarousel",i)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);
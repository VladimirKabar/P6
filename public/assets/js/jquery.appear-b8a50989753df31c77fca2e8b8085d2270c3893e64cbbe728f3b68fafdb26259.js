!function(t){function e(e){return t(e).filter(function(){return t(this).is(":appeared")})}function i(){a=!1;for(var t=0,i=n.length;t<i;t++){var s=e(n[t]);if(s.trigger("appear",[s]),h[t]){var o=h[t].not(s);o.trigger("disappear",[o])}h[t]=s}}function s(t){n.push(t),h.push()}var n=[],o=!1,a=!1,r={interval:250,force_process:!1},l=t(window),h=[];t.expr[":"].appeared=function(e){var i=t(e);if(!i.is(":visible"))return!1;var s=l.scrollLeft(),n=l.scrollTop(),o=i.offset(),a=o.left,r=o.top;return r+i.height()>=n&&r-(i.data("appear-top-offset")||0)<=n+l.height()&&a+i.width()>=s&&a-(i.data("appear-left-offset")||0)<=s+l.width()},t.fn.extend({appear:function(e){var n=t.extend({},r,e||{}),l=this.selector||this;if(!o){var h=function(){a||(a=!0,setTimeout(i,n.interval))};t(window).scroll(h).resize(h),o=!0}return n.force_process&&setTimeout(i,n.interval),s(l),t(l)}}),t.extend({force_appear:function(){return!!o&&(i(),!0)}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}());
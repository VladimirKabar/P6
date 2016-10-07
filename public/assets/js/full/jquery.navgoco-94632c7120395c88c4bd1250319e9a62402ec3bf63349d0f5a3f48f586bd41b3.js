!function(t){"use strict";var e=function(e,i,s){return this.el=e,this.$el=t(e),this.options=i,this.uuid=this.$el.attr("id")?this.$el.attr("id"):s,this.state={},this.init(),this};e.prototype={init:function(){var e=this;e._load(),e.$el.find("ul").each(function(i){var s=t(this);s.attr("data-index",i),e.options.save&&e.state.hasOwnProperty(i)?(s.parent().addClass(e.options.openClass),s.show()):s.parent().hasClass(e.options.openClass)?(s.show(),e.state[i]=1):s.hide()});var i=t("<span></span>").prepend(e.options.caretHtml),s=e.$el.find("li > a");e._trigger(i,!1),e._trigger(s,!0),e.$el.find("li:has(ul) > a").prepend(i)},_trigger:function(e,i){var s=this;e.on("click",function(e){e.stopPropagation();var n=i?t(this).next():t(this).parent().next(),o=!1;if(i){var a=t(this).attr("href");o=void 0===a||""===a||"#"===a}if(n=n.length>0&&n,s.options.onClickBefore.call(this,e,n),!i||n&&o)e.preventDefault(),s._toggle(n,n.is(":hidden")),s._save();else if(s.options.accordion){var r=s.state=s._parents(t(this));s.$el.find("ul").filter(":visible").each(function(){var e=t(this),i=e.attr("data-index");r.hasOwnProperty(i)||s._toggle(e,!1)}),s._save()}s.options.onClickAfter.call(this,e,n)})},_toggle:function(e,i){var s=this,n=e.attr("data-index"),o=e.parent();if(s.options.onToggleBefore.call(this,e,i),i){if(o.addClass(s.options.openClass),e.slideDown(s.options.slide),s.state[n]=1,s.options.accordion){var a=s.state=s._parents(e);a[n]=s.state[n]=1,s.$el.find("ul").filter(":visible").each(function(){var e=t(this),i=e.attr("data-index");a.hasOwnProperty(i)||s._toggle(e,!1)})}}else o.removeClass(s.options.openClass),e.slideUp(s.options.slide),s.state[n]=0;s.options.onToggleAfter.call(this,e,i)},_parents:function(e,i){var s={},n=e.parent(),o=n.parents("ul");return o.each(function(){var e=t(this),n=e.attr("data-index");return!!n&&void(s[n]=i?e:1)}),s},_save:function(){if(this.options.save){var e={};for(var s in this.state)1===this.state[s]&&(e[s]=1);i[this.uuid]=this.state=e,t.cookie(this.options.cookie.name,JSON.stringify(i),this.options.cookie)}},_load:function(){if(this.options.save){if(null===i){var e=t.cookie(this.options.cookie.name);i=e?JSON.parse(e):{}}this.state=i.hasOwnProperty(this.uuid)?i[this.uuid]:{}}},toggle:function(e){var i=this,s=arguments.length;if(s<=1)i.$el.find("ul").each(function(){var s=t(this);i._toggle(s,e)});else{var n,o={},a=Array.prototype.slice.call(arguments,1);s--;for(var r=0;r<s;r++){n=a[r];var l=i.$el.find('ul[data-index="'+n+'"]').first();if(l&&(o[n]=l,e)){var h=i._parents(l,!0);for(var d in h)o.hasOwnProperty(d)||(o[d]=h[d])}}for(n in o)i._toggle(o[n],e)}i._save()},destroy:function(){t.removeData(this.$el),this.$el.find("li:has(ul) > a").unbind("click"),this.$el.find("li:has(ul) > a > span").unbind("click")}},t.fn.navgoco=function(i){if("string"==typeof i&&"_"!==i.charAt(0)&&"init"!==i)var s=!0,n=Array.prototype.slice.call(arguments,1);else i=t.extend({},t.fn.navgoco.defaults,i||{}),t.cookie||(i.save=!1);return this.each(function(o){var a=t(this),r=a.data("navgoco");r||(r=new e(this,s?t.fn.navgoco.defaults:i,o),a.data("navgoco",r)),s&&r[i].apply(r,n)})};var i=null;t.fn.navgoco.defaults={caretHtml:"",accordion:!1,openClass:"open",save:!0,cookie:{name:"navgoco",expires:!1,path:"/"},slide:{duration:400,easing:"swing"},onClickBefore:t.noop,onClickAfter:t.noop,onToggleBefore:t.noop,onToggleAfter:t.noop}}(jQuery);
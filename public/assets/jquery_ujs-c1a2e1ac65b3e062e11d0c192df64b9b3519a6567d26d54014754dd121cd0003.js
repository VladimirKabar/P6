!function(t,e){"use strict";t.rails!==e&&t.error("jquery-ujs has already been loaded!");var i,n=t(document);t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return t("meta[name=csrf-token]").attr("content")},csrfParam:function(){return t("meta[name=csrf-param]").attr("content")},CSRFProtection:function(t){var e=i.csrfToken();e&&t.setRequestHeader("X-CSRF-Token",e)},refreshCSRFTokens:function(){t('form input[name="'+i.csrfParam()+'"]').val(i.csrfToken())},fire:function(e,i,n){var s=t.Event(i);return e.trigger(s,n),s.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t[0].href},isRemote:function(t){return t.data("remote")!==e&&t.data("remote")!==!1},handleRemote:function(n){var s,o,r,a,l,u;if(i.fire(n,"ajax:before")){if(a=n.data("with-credentials")||null,l=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,n.is("form")){s=n.data("ujs:submit-button-formmethod")||n.attr("method"),o=n.data("ujs:submit-button-formaction")||n.attr("action"),r=t(n[0]).serializeArray();var h=n.data("ujs:submit-button");h&&(r.push(h),n.data("ujs:submit-button",null)),n.data("ujs:submit-button-formmethod",null),n.data("ujs:submit-button-formaction",null)}else n.is(i.inputChangeSelector)?(s=n.data("method"),o=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(s=n.data("method")||"get",o=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):(s=n.data("method"),o=i.href(n),r=n.data("params")||null);return u={type:s||"GET",data:r,dataType:l,beforeSend:function(t,s){return s.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+s.accepts.script),!!i.fire(n,"ajax:beforeSend",[t,s])&&void n.trigger("ajax:send",t)},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])},crossDomain:i.isCrossDomain(o)},a&&(u.xhrFields={withCredentials:a}),o&&(u.url=o),i.ajax(u)}return!1},isCrossDomain:function(t){var e=document.createElement("a");e.href=location.href;var i=document.createElement("a");try{return i.href=t,i.href=i.href,!((!i.protocol||":"===i.protocol)&&!i.host||e.protocol+"//"+e.host==i.protocol+"//"+i.host)}catch(t){return!0}},handleMethod:function(n){var s=i.href(n),o=n.data("method"),r=n.attr("target"),a=i.csrfToken(),l=i.csrfParam(),u=t('<form method="post" action="'+s+'"></form>'),h='<input name="_method" value="'+o+'" type="hidden" />';l===e||a===e||i.isCrossDomain(s)||(h+='<input name="'+l+'" value="'+a+'" type="hidden" />'),r&&u.attr("target",r),u.hide().append(h).appendTo("body"),u.submit()},formElements:function(e,i){return e.is("form")?t(e[0].elements).filter(i):e.find(i)},disableFormElements:function(e){i.formElements(e,i.disableSelector).each(function(){i.disableFormElement(t(this))})},disableFormElement:function(t){var i,n;i=t.is("button")?"html":"val",n=t.data("disable-with"),n!==e&&(t.data("ujs:enable-with",t[i]()),t[i](n)),t.prop("disabled",!0),t.data("ujs:disabled",!0)},enableFormElements:function(e){i.formElements(e,i.enableSelector).each(function(){i.enableFormElement(t(this))})},enableFormElement:function(t){var i=t.is("button")?"html":"val";t.data("ujs:enable-with")!==e&&(t[i](t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.prop("disabled",!1),t.removeData("ujs:disabled")},allowAction:function(t){var e,n=t.data("confirm"),s=!1;if(!n)return!0;if(i.fire(t,"confirm")){try{s=i.confirm(n)}catch(t){(console.error||console.log).call(console,t.stack||t)}e=i.fire(t,"confirm:complete",[s])}return s&&e},blankInputs:function(e,i,n){var s,o,r,a,l=t(),u=i||"input,textarea",h=e.find(u),d={};return h.each(function(){s=t(this),s.is("input[type=radio]")?(a=s.attr("name"),d[a]||(0===e.find('input[type=radio]:checked[name="'+a+'"]').length&&(r=e.find('input[type=radio][name="'+a+'"]'),l=l.add(r)),d[a]=a)):(o=s.is("input[type=checkbox],input[type=radio]")?s.is(":checked"):!!s.val(),o===n&&(l=l.add(s)))}),!!l.length&&l},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var n=t.data("disable-with");n!==e&&(t.data("ujs:enable-with",t.html()),t.html(n)),t.bind("click.railsDisable",function(t){return i.stopEverything(t)}),t.data("ujs:disabled",!0)},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable"),t.removeData("ujs:disabled")}},i.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),t(window).on("pageshow.rails",function(){t(t.rails.enableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableFormElement(e)}),t(t.rails.linkDisableSelector).each(function(){var e=t(this);e.data("ujs:disabled")&&t.rails.enableElement(e)})}),n.on("ajax:complete",i.linkDisableSelector,function(){i.enableElement(t(this))}),n.on("ajax:complete",i.buttonDisableSelector,function(){i.enableFormElement(t(this))}),n.on("click.rails",i.linkClickSelector,function(e){var n=t(this),s=n.data("method"),o=n.data("params"),r=e.metaKey||e.ctrlKey;if(!i.allowAction(n))return i.stopEverything(e);if(!r&&n.is(i.linkDisableSelector)&&i.disableElement(n),i.isRemote(n)){if(r&&(!s||"GET"===s)&&!o)return!0;var a=i.handleRemote(n);return a===!1?i.enableElement(n):a.fail(function(){i.enableElement(n)}),!1}return s?(i.handleMethod(n),!1):void 0}),n.on("click.rails",i.buttonClickSelector,function(e){var n=t(this);if(!i.allowAction(n)||!i.isRemote(n))return i.stopEverything(e);n.is(i.buttonDisableSelector)&&i.disableFormElement(n);var s=i.handleRemote(n);return s===!1?i.enableFormElement(n):s.fail(function(){i.enableFormElement(n)}),!1}),n.on("change.rails",i.inputChangeSelector,function(e){var n=t(this);return i.allowAction(n)&&i.isRemote(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.on("submit.rails",i.formSubmitSelector,function(n){var s,o,r=t(this),a=i.isRemote(r);if(!i.allowAction(r))return i.stopEverything(n);if(r.attr("novalidate")===e)if(r.data("ujs:formnovalidate-button")===e){if(s=i.blankInputs(r,i.requiredInputSelector,!1),s&&i.fire(r,"ajax:aborted:required",[s]))return i.stopEverything(n)}else r.data("ujs:formnovalidate-button",e);if(a){if(o=i.nonBlankInputs(r,i.fileInputSelector)){setTimeout(function(){i.disableFormElements(r)},13);var l=i.fire(r,"ajax:aborted:file",[o]);return l||setTimeout(function(){i.enableFormElements(r)},13),l}return i.handleRemote(r),!1}setTimeout(function(){i.disableFormElements(r)},13)}),n.on("click.rails",i.formInputClickSelector,function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var s=n.attr("name"),o=s?{name:s,value:n.val()}:null,r=n.closest("form");0===r.length&&(r=t("#"+n.attr("form"))),r.data("ujs:submit-button",o),r.data("ujs:formnovalidate-button",n.attr("formnovalidate")),r.data("ujs:submit-button-formaction",n.attr("formaction")),r.data("ujs:submit-button-formmethod",n.attr("formmethod"))}),n.on("ajax:send.rails",i.formSubmitSelector,function(e){this===e.target&&i.disableFormElements(t(this))}),n.on("ajax:complete.rails",i.formSubmitSelector,function(e){this===e.target&&i.enableFormElements(t(this))}),t(function(){i.refreshCSRFTokens()}))}(jQuery);
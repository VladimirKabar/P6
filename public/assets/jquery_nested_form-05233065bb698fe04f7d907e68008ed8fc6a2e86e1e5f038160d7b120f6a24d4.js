!function(t){window.NestedFormEvents=function(){this.addFields=t.proxy(this.addFields,this),this.removeFields=t.proxy(this.removeFields,this)},NestedFormEvents.prototype={addFields:function(e){var i=e.currentTarget,n=t(i).data("association"),s=t("#"+t(i).data("blueprint-id")),o=s.data("blueprint"),r=(t(i).closest(".fields").closestChild("input, textarea, select").eq(0).attr("name")||"").replace(new RegExp("[[a-z_]+]$"),"");if(r)for(var a=r.match(/[a-z_]+_attributes(?=\]\[(new_)?\d+\])/g)||[],l=r.match(/[0-9]+/g)||[],h=0;h<a.length;h++)l[h]&&(o=o.replace(new RegExp("(_"+a[h]+")_.+?_","g"),"$1_"+l[h]+"_"),o=o.replace(new RegExp("(\\["+a[h]+"\\])\\[.+?\\]","g"),"$1["+l[h]+"]"));var u=new RegExp("new_"+n,"g"),d=this.newId();o=t.trim(o.replace(u,d));var c=this.insertFields(o,n,i);return c.trigger({type:"nested:fieldAdded",field:c}).trigger({type:"nested:fieldAdded:"+n,field:c}),!1},newId:function(){return(new Date).getTime()},insertFields:function(e,i,n){var s=t(n).data("target");return s?t(e).appendTo(t(s)):t(e).insertBefore(n)},removeFields:function(e){var i=t(e.currentTarget),n=i.data("association"),s=i.prev("input[type=hidden]");s.val("1");var o=i.closest(".fields");return o.hide(),o.trigger({type:"nested:fieldRemoved",field:o}).trigger({type:"nested:fieldRemoved:"+n,field:o}),!1}},window.nestedFormEvents=new NestedFormEvents,t(document).delegate("form a.add_nested_fields","click",nestedFormEvents.addFields).delegate("form a.remove_nested_fields","click",nestedFormEvents.removeFields)}(jQuery),function(t){t.fn.closestChild=function(e){if(e&&""!=e){var i=[];for(i.push(this);i.length>0;)for(var n=i.shift(),s=n.children(),o=0;o<s.length;++o){var r=t(s[o]);if(r.is(e))return r;i.push(r)}}return t()}}(jQuery);
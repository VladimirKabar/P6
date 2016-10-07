!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var s,o,r=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,d=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==s)return s;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),e=o.offsetWidth,n.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),s=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n||s?i.width():i.outerWidth(),height:n||s?i.height():i.outerHeight()}}},t.fn.position=function(s){if(!s||!s.of)return f.apply(this,arguments);s=t.extend({},s);var p,m,g,v,y,_,b=t(s.of),w=t.position.getWithinInfo(s.within),x=t.position.getScrollInfo(w),k=(s.collision||"flip").split(" "),T={};return _=n(b),b[0].preventDefault&&(s.at="left top"),m=_.width,g=_.height,v=_.offset,y=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(s[this]||"").split(" ");1===i.length&&(i=u.test(i[0])?i.concat(["center"]):d.test(i[0])?["center"].concat(i):["center","center"]),i[0]=u.test(i[0])?i[0]:"center",i[1]=d.test(i[1])?i[1]:"center",t=c.exec(i[0]),e=c.exec(i[1]),T[this]=[t?t[0]:0,e?e[0]:0],s[this]=[h.exec(i[0])[0],h.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===s.at[0]?y.left+=m:"center"===s.at[0]&&(y.left+=m/2),"bottom"===s.at[1]?y.top+=g:"center"===s.at[1]&&(y.top+=g/2),p=e(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var n,u,d=t(this),c=d.outerWidth(),h=d.outerHeight(),f=i(this,"marginLeft"),_=i(this,"marginTop"),M=c+f+i(this,"marginRight")+x.width,C=h+_+i(this,"marginBottom")+x.height,S=t.extend({},y),D=e(T.my,d.outerWidth(),d.outerHeight());"right"===s.my[0]?S.left-=c:"center"===s.my[0]&&(S.left-=c/2),"bottom"===s.my[1]?S.top-=h:"center"===s.my[1]&&(S.top-=h/2),S.left+=D[0],S.top+=D[1],o||(S.left=l(S.left),S.top=l(S.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[k[e]]&&t.ui.position[k[e]][i](S,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:h,collisionPosition:n,collisionWidth:M,collisionHeight:C,offset:[p[0]+D[0],p[1]+D[1]],my:s.my,at:s.at,within:w,elem:d})}),s.using&&(u=function(t){var e=v.left-S.left,i=e+m-c,n=v.top-S.top,o=n+g-h,l={target:{element:b,left:v.left,top:v.top,width:m,height:g},element:{element:d,left:S.left,top:S.top,width:c,height:h},horizontal:i<0?"left":e>0?"right":"center",vertical:o<0?"top":n>0?"bottom":"middle"};m<c&&a(e+i)<m&&(l.horizontal="center"),g<h&&a(n+o)<g&&(l.vertical="middle"),r(a(e),a(i))>r(a(n),a(o))?l.important="horizontal":l.important="vertical",s.using.call(this,t,l)}),d.offset(t.extend(S,{using:u}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,l=s-a,u=a+e.collisionWidth-o-s;e.collisionWidth>o?l>0&&u<=0?(i=t.left+l+e.collisionWidth-o-s,t.left+=l-i):u>0&&l<=0?t.left=s:l>u?t.left=s+o-e.collisionWidth:t.left=s:l>0?t.left+=l:u>0?t.left-=u:t.left=r(t.left-a,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,l=s-a,u=a+e.collisionHeight-o-s;e.collisionHeight>o?l>0&&u<=0?(i=t.top+l+e.collisionHeight-o-s,t.top+=l-i):u>0&&l<=0?t.top=s:l>u?t.top=s+o-e.collisionHeight:t.top=s:l>0?t.top+=l:u>0?t.top-=u:t.top=r(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,r=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,u=t.left-e.collisionPosition.marginLeft,d=u-l,c=u+e.collisionWidth-r-l,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];d<0?(i=t.left+h+p+f+e.collisionWidth-r-o,(i<0||i<a(d))&&(t.left+=h+p+f)):c>0&&(n=t.left-e.collisionPosition.marginLeft+h+p+f-l,(n>0||a(n)<c)&&(t.left+=h+p+f))},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,r=s.height,l=s.isWindow?s.scrollTop:s.offset.top,u=t.top-e.collisionPosition.marginTop,d=u-l,c=u+e.collisionHeight-r-l,h="top"===e.my[1],p=h?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];d<0?(n=t.top+p+f+m+e.collisionHeight-r-o,(n<0||n<a(d))&&(t.top+=p+f+m)):c>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-l,(i>0||a(i)<c)&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,n,s,r,a=document.getElementsByTagName("body")[0],l=document.createElement("div");e=document.createElement(a?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)e.style[r]=n[r];e.appendChild(l),i=a||document.documentElement,i.insertBefore(e,i.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",s=t(l).offset().left,o=s>10&&s<11,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position});
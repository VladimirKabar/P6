!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd&&define("GMaps",[],e),t.GMaps=e()}(this,function(){if("object"!=typeof window.google||!window.google.maps)throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.";var t=function(t,e){var i;if(t===e)return t;for(i in e)t[i]=e[i];return t},i=function(t,e){var i,n=Array.prototype.slice.call(arguments,2),s=[],o=t.length;if(Array.prototype.map&&t.map===Array.prototype.map)s=Array.prototype.map.call(t,function(t){return callback_params=n,callback_params.splice(0,0,t),e.apply(this,callback_params)});else for(i=0;i<o;i++)callback_params=n,callback_params.splice(0,0,t[i]),s.push(e.apply(this,callback_params));return s},n=function(t){var e,i=[];for(e=0;e<t.length;e++)i=i.concat(t[e]);return i},s=function(t,e){var i=t[0],n=t[1];return e&&(i=t[1],n=t[0]),new google.maps.LatLng(i,n)},o=function(t,e){var i;for(i=0;i<t.length;i++)t[i].length>0&&"object"==typeof t[i][0]?t[i]=o(t[i],e):t[i]=s(t[i],e);return t},r=function(t,e){var i,t=t.replace("#","");return i="jQuery"in this&&e?$("#"+t,e)[0]:document.getElementById(t)},a=function(t){var e=0,i=0;if(t.offsetParent)do e+=t.offsetLeft,i+=t.offsetTop;while(t=t.offsetParent);return[e,i]},l=function(){"use strict";var e=document,i=function(n){if(!this)return new i(n);n.zoom=n.zoom||15,n.mapType=n.mapType||"roadmap";var s,o=this,l=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],h=["mousemove","mouseout","mouseover"],d=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=n.el||n.div,c=n.markerClusterer,p=google.maps.MapTypeId[n.mapType.toUpperCase()],f=new google.maps.LatLng(n.lat,n.lng),m=n.zoomControl||!0,g=n.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},v=g.style||"DEFAULT",y=g.position||"TOP_LEFT",b=n.panControl||!0,w=n.mapTypeControl||!0,_=n.scaleControl||!0,x=n.streetViewControl||!0,C=C||!0,k={},T={zoom:this.zoom,center:f,mapTypeId:p},S={panControl:b,zoomControl:m,zoomControlOptions:{style:google.maps.ZoomControlStyle[v],position:google.maps.ControlPosition[y]},mapTypeControl:w,scaleControl:_,streetViewControl:x,overviewMapControl:C};if("string"==typeof n.el||"string"==typeof n.div?this.el=r(u,n.context):this.el=u,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[o.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=n.zoom,this.registered_events={},this.el.style.width=n.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=n.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=n.enableNewStyle,s=0;s<d.length;s++)delete n[d[s]];for(1!=n.disableDefaultUI&&(T=t(T,S)),k=t(T,n),s=0;s<l.length;s++)delete k[l[s]];for(s=0;s<h.length;s++)delete k[h[s]];this.map=new google.maps.Map(this.el,k),c&&(this.markerClusterer=c.apply(this,[this.map]));var D=function(t,e){var i="",n=window.context_menu[o.el.id][t];for(var s in n)if(n.hasOwnProperty(s)){var l=n[s];i+='<li><a id="'+t+"_"+s+'" href="#">'+l.title+"</a></li>"}if(r("gmaps_context_menu")){var h=r("gmaps_context_menu");h.innerHTML=i;var d=h.getElementsByTagName("a"),u=d.length;for(s=0;s<u;s++){var c=d[s],p=function(i){i.preventDefault(),n[this.id.replace(t+"_","")].action.apply(o,[e]),o.hideContextMenu()};google.maps.event.clearListeners(c,"click"),google.maps.event.addDomListenerOnce(c,"click",p,!1)}var f=a.apply(this,[o.el]),m=f[0]+e.pixel.x-15,g=f[1]+e.pixel.y-15;h.style.left=m+"px",h.style.top=g+"px",h.style.display="block"}};this.buildContextMenu=function(t,e){if("marker"===t){e.pixel={};var i=new google.maps.OverlayView;i.setMap(o.map),i.draw=function(){var n=i.getProjection(),s=e.marker.getPosition();e.pixel=n.fromLatLngToContainerPixel(s),D(t,e)}}else D(t,e)},this.setContextMenu=function(t){window.context_menu[o.el.id][t.control]={};var i,n=e.createElement("ul");for(i in t.options)if(t.options.hasOwnProperty(i)){var s=t.options[i];window.context_menu[o.el.id][t.control][s.name]={title:s.title,action:s.action}}n.id="gmaps_context_menu",n.style.display="none",n.style.position="absolute",n.style.minWidth="100px",n.style.background="white",n.style.listStyle="none",n.style.padding="8px",n.style.boxShadow="2px 2px 6px #ccc",e.body.appendChild(n);var a=r("gmaps_context_menu");google.maps.event.addDomListener(a,"mouseout",function(t){t.relatedTarget&&this.contains(t.relatedTarget)||window.setTimeout(function(){a.style.display="none"},400)},!1)},this.hideContextMenu=function(){var t=r("gmaps_context_menu");t&&(t.style.display="none")};for(var M=function(t,e){google.maps.event.addListener(t,e,function(t){void 0==t&&(t=this),n[e].apply(this,[t]),o.hideContextMenu()})},I=0;I<l.length;I++){var E=l[I];E in n&&M(this.map,E)}for(var I=0;I<h.length;I++){var E=h[I];E in n&&M(this.map,E)}google.maps.event.addListener(this.map,"rightclick",function(t){n.rightclick&&n.rightclick.apply(this,[t]),void 0!=window.context_menu[o.el.id].map&&o.buildContextMenu("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var t,e=[],i=this.markers.length;for(t=0;t<i;t++)"boolean"==typeof this.markers[t].visible&&this.markers[t].visible&&e.push(this.markers[t].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(t){for(var e=t.length,i=new google.maps.LatLngBounds,n=0;n<e;n++)i.extend(t[n]);this.map.fitBounds(i)},this.setCenter=function(t,e,i){this.map.panTo(new google.maps.LatLng(t,e)),i&&i()},this.getElement=function(){return this.el},this.zoomIn=function(t){t=t||1,this.zoom=this.map.getZoom()+t,this.map.setZoom(this.zoom)},this.zoomOut=function(t){t=t||1,this.zoom=this.map.getZoom()-t,this.map.setZoom(this.zoom)};var $,P=[];for($ in this.map)"function"!=typeof this.map[$]||this[$]||P.push($);for(s=0;s<P.length;s++)!function(t,e,i){t[i]=function(){return e[i].apply(e,arguments)}}(this,this.map,P[s])};return i}(this);l.prototype.createControl=function(t){var e=document.createElement("div");e.style.cursor="pointer",e.style.fontFamily="Arial, sans-serif",e.style.fontSize="13px",e.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var i in t.style)e.style[i]=t.style[i];t.id&&(e.id=t.id),t.classes&&(e.className=t.classes),t.content&&(e.innerHTML=t.content);for(var n in t.events)!function(e,i){google.maps.event.addDomListener(e,i,function(){t.events[i].apply(this,[this])})}(e,n);return e.index=1,e},l.prototype.addControl=function(t){var e=google.maps.ControlPosition[t.position.toUpperCase()];delete t.position;var i=this.createControl(t);return this.controls.push(i),this.map.controls[e].push(i),i},l.prototype.createMarker=function(e){if(void 0==e.lat&&void 0==e.lng&&void 0==e.position)throw"No latitude or longitude defined.";var i=this,n=e.details,s=e.fences,o=e.outside,r={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat,delete e.lng,delete e.fences,delete e.outside;var a=t(r,e),l=new google.maps.Marker(a);if(l.fences=s,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var h=["closeclick","content_changed","domready","position_changed","zindex_changed"],d=0;d<h.length;d++)!function(t,i){e.infoWindow[i]&&google.maps.event.addListener(t,i,function(t){e.infoWindow[i].apply(this,[t])})}(l.infoWindow,h[d])}for(var u=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],d=0;d<u.length;d++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(){e[i].apply(this,[this])})}(l,u[d]);for(var d=0;d<c.length;d++)!function(t,i,n){e[n]&&google.maps.event.addListener(i,n,function(i){i.pixel||(i.pixel=t.getProjection().fromLatLngToPoint(i.latLng)),e[n].apply(this,[i])})}(this.map,l,c[d]);return google.maps.event.addListener(l,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),l.infoWindow&&(i.hideInfoWindows(),l.infoWindow.open(i.map,l))}),google.maps.event.addListener(l,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[i.el.id].marker&&i.buildContextMenu("marker",t)}),l.fences&&google.maps.event.addListener(l,"dragend",function(){i.checkMarkerGeofence(l,function(t,e){o(t,e)})}),l},l.prototype.addMarker=function(t){var e;if(t.hasOwnProperty("gm_accessors_"))e=t;else{if(!(t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")||t.position))throw"No latitude or longitude defined.";e=this.createMarker(t)}return e.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(e),this.markers.push(e),l.fire("marker_added",e,this),e},l.prototype.addMarkers=function(t){for(var e,i=0;e=t[i];i++)this.addMarker(e);return this.markers},l.prototype.hideInfoWindows=function(){for(var t,e=0;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},l.prototype.removeMarker=function(t){for(var e=0;e<this.markers.length;e++)if(this.markers[e]===t){this.markers[e].setMap(null),this.markers.splice(e,1),this.markerClusterer&&this.markerClusterer.removeMarker(t),l.fire("marker_removed",t,this);break}return t},l.prototype.removeMarkers=function(t){for(var t=t||this.markers,e=0;e<this.markers.length;e++)this.markers[e]===t[e]&&this.markers[e].setMap(null);for(var i=[],e=0;e<this.markers.length;e++)null!=this.markers[e].getMap()&&i.push(this.markers[e]);this.markers=i},l.prototype.drawOverlay=function(t){var e=new google.maps.OverlayView,i=!0;return e.setMap(this.map),null!=t.auto_show&&(i=t.auto_show),e.onAdd=function(){var i=document.createElement("div");i.style.borderStyle="none",i.style.borderWidth="0px",i.style.position="absolute",i.style.zIndex=100,i.innerHTML=t.content,e.el=i,t.layer||(t.layer="overlayLayer");var n=this.getPanes(),s=n[t.layer],o=["contextmenu","DOMMouseScroll","dblclick","mousedown"];s.appendChild(i);for(var r=0;r<o.length;r++)!function(t,e){google.maps.event.addDomListener(t,e,function(t){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(t.cancelBubble=!0,t.returnValue=!1):t.stopPropagation()})}(i,o[r]);google.maps.event.trigger(this,"ready")},e.draw=function(){var n=this.getProjection(),s=n.fromLatLngToDivPixel(new google.maps.LatLng(t.lat,t.lng));t.horizontalOffset=t.horizontalOffset||0,t.verticalOffset=t.verticalOffset||0;var o=e.el,r=o.children[0],a=r.clientHeight,l=r.clientWidth;switch(t.verticalAlign){case"top":o.style.top=s.y-a+t.verticalOffset+"px";break;default:case"middle":o.style.top=s.y-a/2+t.verticalOffset+"px";break;case"bottom":o.style.top=s.y+t.verticalOffset+"px"}switch(t.horizontalAlign){case"left":o.style.left=s.x-l+t.horizontalOffset+"px";break;default:case"center":o.style.left=s.x-l/2+t.horizontalOffset+"px";break;case"right":o.style.left=s.x+t.horizontalOffset+"px"}o.style.display=i?"block":"none",i||t.show.apply(this,[o])},e.onRemove=function(){var i=e.el;t.remove?t.remove.apply(this,[i]):(e.el.parentNode.removeChild(e.el),e.el=null)},this.overlays.push(e),e},l.prototype.removeOverlay=function(t){for(var e=0;e<this.overlays.length;e++)if(this.overlays[e]===t){this.overlays[e].setMap(null),this.overlays.splice(e,1);break}},l.prototype.removeOverlays=function(){for(var t,e=0;t=this.overlays[e];e++)t.setMap(null);this.overlays=[]},l.prototype.drawPolyline=function(t){var e=[],i=t.path;if(i.length)if(void 0===i[0][0])e=i;else for(var n,s=0;n=i[s];s++)e.push(new google.maps.LatLng(n[0],n[1]));var o={map:this.map,path:e,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,geodesic:t.geodesic,clickable:!0,editable:!1,visible:!0};t.hasOwnProperty("clickable")&&(o.clickable=t.clickable),t.hasOwnProperty("editable")&&(o.editable=t.editable),t.hasOwnProperty("icons")&&(o.icons=t.icons),t.hasOwnProperty("zIndex")&&(o.zIndex=t.zIndex);for(var r=new google.maps.Polyline(o),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],h=0;h<a.length;h++)!function(e,i){t[i]&&google.maps.event.addListener(e,i,function(e){t[i].apply(this,[e])})}(r,a[h]);return this.polylines.push(r),l.fire("polyline_added",r,this),r},l.prototype.removePolyline=function(t){for(var e=0;e<this.polylines.length;e++)if(this.polylines[e]===t){this.polylines[e].setMap(null),this.polylines.splice(e,1),l.fire("polyline_removed",t,this);break}},l.prototype.removePolylines=function(){for(var t,e=0;t=this.polylines[e];e++)t.setMap(null);this.polylines=[]},l.prototype.drawCircle=function(e){e=t({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;for(var i=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],s=0;s<n.length;s++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(i,n[s]);return this.polygons.push(i),i},l.prototype.drawRectangle=function(e){e=t({map:this.map},e);var i=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=i;for(var n=new google.maps.Rectangle(e),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],o=0;o<s.length;o++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(n,s[o]);return this.polygons.push(n),n},l.prototype.drawPolygon=function(e){var s=!1;e.hasOwnProperty("useGeoJSON")&&(s=e.useGeoJSON),delete e.useGeoJSON,e=t({map:this.map},e),0==s&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=n(i(e.paths,o,s)));for(var r=new google.maps.Polygon(e),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],h=0;h<a.length;h++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(r,a[h]);return this.polygons.push(r),l.fire("polygon_added",r,this),r},l.prototype.removePolygon=function(t){for(var e=0;e<this.polygons.length;e++)if(this.polygons[e]===t){this.polygons[e].setMap(null),this.polygons.splice(e,1),l.fire("polygon_removed",t,this);break}},l.prototype.removePolygons=function(){for(var t,e=0;t=this.polygons[e];e++)t.setMap(null);this.polygons=[]},l.prototype.getFromFusionTables=function(t){var e=t.events;delete t.events;var i=t,n=new google.maps.FusionTablesLayer(i);for(var s in e)!function(t,i){google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(n,s);return this.layers.push(n),n},l.prototype.loadFromFusionTables=function(t){var e=this.getFromFusionTables(t);return e.setMap(this.map),e},l.prototype.getFromKML=function(t){var e=t.url,i=t.events;delete t.url,delete t.events;var n=t,s=new google.maps.KmlLayer(e,n);for(var o in i)!function(t,e){google.maps.event.addListener(t,e,function(t){i[e].apply(this,[t])})}(s,o);return this.layers.push(s),s},l.prototype.loadFromKML=function(t){var e=this.getFromKML(t);return e.setMap(this.map),e},l.prototype.addLayer=function(t,e){e=e||{};var i;switch(t){case"weather":this.singleLayers.weather=i=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=i=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=i=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=i=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=i=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=i=new google.maps.panoramio.PanoramioLayer,i.setTag(e.filter),delete e.filter,e.click&&google.maps.event.addListener(i,"click",function(t){e.click(t),delete e.click});break;case"places":if(this.singleLayers.places=i=new google.maps.places.PlacesService(this.map),e.search||e.nearbySearch){var n={bounds:e.bounds||null,keyword:e.keyword||null,location:e.location||null,name:e.name||null,radius:e.radius||null,rankBy:e.rankBy||null,types:e.types||null};e.search&&i.search(n,e.search),e.nearbySearch&&i.nearbySearch(n,e.nearbySearch)}if(e.textSearch){var s={bounds:e.bounds||null,location:e.location||null,query:e.query||null,radius:e.radius||null};i.textSearch(s,e.textSearch)}}if(void 0!==i)return"function"==typeof i.setOptions&&i.setOptions(e),"function"==typeof i.setMap&&i.setMap(this.map),i},l.prototype.removeLayer=function(t){if("string"==typeof t&&void 0!==this.singleLayers[t])this.singleLayers[t].setMap(null),delete this.singleLayers[t];else for(var e=0;e<this.layers.length;e++)if(this.layers[e]===t){this.layers[e].setMap(null),this.layers.splice(e,1);break}};var h,d;return l.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":h=google.maps.TravelMode.BICYCLING;break;case"transit":h=google.maps.TravelMode.TRANSIT;break;case"driving":h=google.maps.TravelMode.DRIVING;break;default:h=google.maps.TravelMode.WALKING}d="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var i={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},n=t(i,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),n.travelMode=h,n.unitSystem=d,delete n.callback,delete n.error;var s=this,o=new google.maps.DirectionsService;o.route(n,function(t,i){if(i===google.maps.DirectionsStatus.OK){for(var n in t.routes)t.routes.hasOwnProperty(n)&&s.routes.push(t.routes[n]);e.callback&&e.callback(s.routes)}else e.error&&e.error(t,i)})},l.prototype.removeRoutes=function(){this.routes=[]},l.prototype.getElevations=function(e){e=t({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=n(i([e.locations],o,!1)));var s=e.callback;delete e.callback;var r=new google.maps.ElevationService;if(e.path){var a={path:e.locations,samples:e.samples};r.getElevationAlongPath(a,function(t,e){s&&"function"==typeof s&&s(t,e)})}else delete e.path,delete e.samples,r.getElevationForLocations(e,function(t,e){s&&"function"==typeof s&&s(t,e)})},l.prototype.cleanRoute=l.prototype.removePolylines,l.prototype.drawRoute=function(t){var e=this;this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,unitSystem:t.unitSystem,error:t.error,callback:function(i){i.length>0&&(e.drawPolyline({path:i[i.length-1].overview_path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.callback&&t.callback(i[i.length-1]))}})},l.prototype.travelRoute=function(t){if(t.origin&&t.destination)this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,error:t.error,callback:function(e){if(e.length>0&&t.start&&t.start(e[e.length-1]),e.length>0&&t.step){var i=e[e.length-1];if(i.legs.length>0)for(var n,s=i.legs[0].steps,o=0;n=s[o];o++)n.step_number=o,t.step(n,i.legs[0].steps.length-1)}e.length>0&&t.end&&t.end(e[e.length-1])}});else if(t.route&&t.route.legs.length>0)for(var e,i=t.route.legs[0].steps,n=0;e=i[n];n++)e.step_number=n,t.step(e)},l.prototype.drawSteppedRoute=function(t){var e=this;if(t.origin&&t.destination)this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,error:t.error,callback:function(i){if(i.length>0&&t.start&&t.start(i[i.length-1]),i.length>0&&t.step){var n=i[i.length-1];if(n.legs.length>0)for(var s,o=n.legs[0].steps,r=0;s=o[r];r++)s.step_number=r,e.drawPolyline({path:s.path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.step(s,n.legs[0].steps.length-1)}i.length>0&&t.end&&t.end(i[i.length-1])}});else if(t.route&&t.route.legs.length>0)for(var i,n=t.route.legs[0].steps,s=0;i=n[s];s++)i.step_number=s,e.drawPolyline({path:i.path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.step(i)},l.Route=function(t){this.origin=t.origin,this.destination=t.destination,this.waypoints=t.waypoints,this.map=t.map,this.route=t.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length,this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}).getPath()},l.Route.prototype.getRoute=function(t){var i=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function(){i.route=e[0],t.callback&&t.callback.call(i)}})},l.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var t=this.route.legs[0].steps[this.step_count].path;for(var e in t)t.hasOwnProperty(e)&&this.polyline.pop()}},l.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var t=this.route.legs[0].steps[this.step_count].path;for(var e in t)t.hasOwnProperty(e)&&this.polyline.push(t[e]);this.step_count++}},l.prototype.checkGeofence=function(t,e,i){return i.containsLatLng(new google.maps.LatLng(t,e))},l.prototype.checkMarkerGeofence=function(t,e){if(t.fences)for(var i,n=0;i=t.fences[n];n++){var s=t.getPosition();this.checkGeofence(s.lat(),s.lng(),i)||e(t,i)}},l.prototype.toImage=function(t){var t=t||{},e={};if(e.size=t.size||[this.el.clientWidth,this.el.clientHeight],e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng(),this.markers.length>0){e.markers=[];for(var i=0;i<this.markers.length;i++)e.markers.push({lat:this.markers[i].getPosition().lat(),lng:this.markers[i].getPosition().lng()})}if(this.polylines.length>0){var n=this.polylines[0];e.polyline={},e.polyline.path=google.maps.geometry.encoding.encodePath(n.getPath()),e.polyline.strokeColor=n.strokeColor,e.polyline.strokeOpacity=n.strokeOpacity,e.polyline.strokeWeight=n.strokeWeight}return l.staticMapURL(e)},l.staticMapURL=function(t){function e(t,e){if("#"===t[0]&&(t=t.replace("#","0x"),e)){if(e=parseFloat(e),e=Math.min(1,Math.max(e,0)),0===e)return"0x00000000";e=(255*e).toString(16),1===e.length&&(e+=e),t=t.slice(0,8)+e}return t}var i,n=[],s="http://maps.googleapis.com/maps/api/staticmap";t.url&&(s=t.url,delete t.url),s+="?";var o=t.markers;delete t.markers,!o&&t.marker&&(o=[t.marker],delete t.marker);var r=t.styles;delete t.styles;var a=t.polyline;if(delete t.polyline,t.center)n.push("center="+t.center),delete t.center;else if(t.address)n.push("center="+t.address),delete t.address;else if(t.lat)n.push(["center=",t.lat,",",t.lng].join("")),delete t.lat,delete t.lng;else if(t.visible){var l=encodeURI(t.visible.join("|"));n.push("visible="+l)}var h=t.size;h?(h.join&&(h=h.join("x")),delete t.size):h="630x300",n.push("size="+h),t.zoom||t.zoom===!1||(t.zoom=15);var d=!t.hasOwnProperty("sensor")||!!t.sensor;delete t.sensor,n.push("sensor="+d);for(var u in t)t.hasOwnProperty(u)&&n.push(u+"="+t[u]);if(o)for(var c,p,f=0;i=o[f];f++){c=[],i.size&&"normal"!==i.size?(c.push("size:"+i.size),delete i.size):i.icon&&(c.push("icon:"+encodeURI(i.icon)),delete i.icon),i.color&&(c.push("color:"+i.color.replace("#","0x")),delete i.color),i.label&&(c.push("label:"+i.label[0].toUpperCase()),delete i.label),p=i.address?i.address:i.lat+","+i.lng,delete i.address,delete i.lat,delete i.lng;for(var u in i)i.hasOwnProperty(u)&&c.push(u+":"+i[u]);c.length||0===f?(c.push(p),c=c.join("|"),n.push("markers="+encodeURI(c))):(c=n.pop()+encodeURI("|"+p),n.push(c))}if(r)for(var f=0;f<r.length;f++){var m=[];r[f].featureType&&"all"!=r[f].featureType&&m.push("feature:"+r[f].featureType),r[f].elementType&&"all"!=r[f].elementType&&m.push("element:"+r[f].elementType);for(var g=0;g<r[f].stylers.length;g++)for(var v in r[f].stylers[g]){var y=r[f].stylers[g][v];"hue"!=v&&"color"!=v||(y="0x"+y.substring(1)),m.push(v+":"+y)}var b=m.join("|");""!=b&&n.push("style="+b)}if(a){if(i=a,a=[],i.strokeWeight&&a.push("weight:"+parseInt(i.strokeWeight,10)),i.strokeColor){var w=e(i.strokeColor,i.strokeOpacity);a.push("color:"+w)}if(i.fillColor){var _=e(i.fillColor,i.fillOpacity);a.push("fillcolor:"+_)}var x=i.path;if(x.join)for(var C,g=0;C=x[g];g++)a.push(C.join(","));else a.push("enc:"+x);a=a.join("|"),n.push("path="+encodeURI(a))}var k=window.devicePixelRatio||1;return n.push("scale="+k),n=n.join("&"),s+n},l.prototype.addMapType=function(t,e){if(!e.hasOwnProperty("getTileUrl")||"function"!=typeof e.getTileUrl)throw"'getTileUrl' function required.";e.tileSize=e.tileSize||new google.maps.Size(256,256);var i=new google.maps.ImageMapType(e);this.map.mapTypes.set(t,i)},l.prototype.addOverlayMapType=function(t){if(!t.hasOwnProperty("getTile")||"function"!=typeof t.getTile)throw"'getTile' function required.";var e=t.index;delete t.index,this.map.overlayMapTypes.insertAt(e,t)},l.prototype.removeOverlayMapType=function(t){this.map.overlayMapTypes.removeAt(t)},l.prototype.addStyle=function(t){var e=new google.maps.StyledMapType(t.styles,{name:t.styledMapName});this.map.mapTypes.set(t.mapTypeId,e)},l.prototype.setStyle=function(t){this.map.setMapTypeId(t)},l.prototype.createPanorama=function(t){return t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")||(t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng()),this.panorama=l.createPanorama(t),this.map.setStreetView(this.panorama),this.panorama},l.createPanorama=function(e){var i=r(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],s=t({visible:!0},e),o=0;o<n.length;o++)delete s[n[o]];for(var a=new google.maps.StreetViewPanorama(i,s),o=0;o<n.length;o++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(){e[i].apply(this)})}(a,n[o]);return a},l.prototype.on=function(t,e){return l.on(t,this,e)},l.prototype.off=function(t){l.off(t,this)},l.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],l.on=function(t,e,i){if(l.custom_events.indexOf(t)==-1)return google.maps.event.addListener(e,t,i);var n={handler:i,eventName:t};return e.registered_events[t]=e.registered_events[t]||[],e.registered_events[t].push(n),n},l.off=function(t,e){l.custom_events.indexOf(t)==-1?google.maps.event.clearListeners(e,t):e.registered_events[t]=[]},l.fire=function(t,e,i){if(l.custom_events.indexOf(t)==-1)google.maps.event.trigger(e,t,Array.prototype.slice.apply(arguments).slice(2));else if(t in i.registered_events)for(var n=i.registered_events[t],s=0;s<n.length;s++)!function(t,e,i){t.apply(e,[i])}(n[s].handler,i,e)},l.geolocate=function(t){var e=t.always||t.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){t.success(i),e&&e()},function(i){t.error(i),e&&e()},t.options):(t.not_supported(),e&&e())},l.geocode=function(t){this.geocoder=new google.maps.Geocoder;var e=t.callback;t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")&&(t.latLng=new google.maps.LatLng(t.lat,t.lng)),delete t.lat,delete t.lng,delete t.callback,this.geocoder.geocode(t,function(t,i){e(t,i)})},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds,i=this.getPaths(),n=0;n<i.getLength();n++){t=i.getAt(n);for(var s=0;s<t.getLength();s++)e.extend(t.getAt(s))}return e}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(t){var e=this.getBounds();if(null!==e&&!e.contains(t))return!1;for(var i=!1,n=this.getPaths().getLength(),s=0;s<n;s++)for(var o=this.getPaths().getAt(s),r=o.getLength(),a=r-1,l=0;l<r;l++){var h=o.getAt(l),d=o.getAt(a);(h.lng()<t.lng()&&d.lng()>=t.lng()||d.lng()<t.lng()&&h.lng()>=t.lng())&&h.lat()+(t.lng()-h.lng())/(d.lng()-h.lng())*(d.lat()-h.lat())<t.lat()&&(i=!i),a=l}return i}),google.maps.LatLngBounds.prototype.containsLatLng=function(t){return this.contains(t)},google.maps.Marker.prototype.setFences=function(t){this.fences=t},google.maps.Marker.prototype.addFence=function(t){this.fences.push(t)},google.maps.Marker.prototype.getId=function(){return this.__gm_id},Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null==this)throw new TypeError;var e=Object(this),i=e.length>>>0;if(0===i)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=i)return-1;for(var s=n>=0?n:Math.max(i-Math.abs(n),0);s<i;s++)if(s in e&&e[s]===t)return s;return-1}),l});
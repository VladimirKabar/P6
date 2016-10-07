!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd&&define("GMaps",[],e),t.GMaps=e()}(this,function(){if("object"!=typeof window.google||!window.google.maps)throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.";var t=function(t,e){var i;if(t===e)return t;for(i in e)t[i]=e[i];return t},i=function(t,e){var i,s=Array.prototype.slice.call(arguments,2),n=[],o=t.length;if(Array.prototype.map&&t.map===Array.prototype.map)n=Array.prototype.map.call(t,function(t){return callback_params=s,callback_params.splice(0,0,t),e.apply(this,callback_params)});else for(i=0;i<o;i++)callback_params=s,callback_params.splice(0,0,t[i]),n.push(e.apply(this,callback_params));return n},s=function(t){var e,i=[];for(e=0;e<t.length;e++)i=i.concat(t[e]);return i},n=function(t,e){var i=t[0],s=t[1];return e&&(i=t[1],s=t[0]),new google.maps.LatLng(i,s)},o=function(t,e){var i;for(i=0;i<t.length;i++)t[i].length>0&&"object"==typeof t[i][0]?t[i]=o(t[i],e):t[i]=n(t[i],e);return t},a=function(t,e){var i,t=t.replace("#","");return i="jQuery"in this&&e?$("#"+t,e)[0]:document.getElementById(t)},r=function(t){var e=0,i=0;if(t.offsetParent)do e+=t.offsetLeft,i+=t.offsetTop;while(t=t.offsetParent);return[e,i]},l=function(){"use strict";var e=document,i=function(s){if(!this)return new i(s);s.zoom=s.zoom||15,s.mapType=s.mapType||"roadmap";var n,o=this,l=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],h=["mousemove","mouseout","mouseover"],c=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=s.el||s.div,d=s.markerClusterer,p=google.maps.MapTypeId[s.mapType.toUpperCase()],f=new google.maps.LatLng(s.lat,s.lng),g=s.zoomControl||!0,m=s.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},v=m.style||"DEFAULT",b=m.position||"TOP_LEFT",_=s.panControl||!0,y=s.mapTypeControl||!0,w=s.scaleControl||!0,k=s.streetViewControl||!0,x=x||!0,C={},D={zoom:this.zoom,center:f,mapTypeId:p},T={panControl:_,zoomControl:g,zoomControlOptions:{style:google.maps.ZoomControlStyle[v],position:google.maps.ControlPosition[b]},mapTypeControl:y,scaleControl:w,streetViewControl:k,overviewMapControl:x};if("string"==typeof s.el||"string"==typeof s.div?this.el=a(u,s.context):this.el=u,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[o.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=s.zoom,this.registered_events={},this.el.style.width=s.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=s.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=s.enableNewStyle,n=0;n<c.length;n++)delete s[c[n]];for(1!=s.disableDefaultUI&&(D=t(D,T)),C=t(D,s),n=0;n<l.length;n++)delete C[l[n]];for(n=0;n<h.length;n++)delete C[h[n]];this.map=new google.maps.Map(this.el,C),d&&(this.markerClusterer=d.apply(this,[this.map]));var I=function(t,e){var i="",s=window.context_menu[o.el.id][t];for(var n in s)if(s.hasOwnProperty(n)){var l=s[n];i+='<li><a id="'+t+"_"+n+'" href="#">'+l.title+"</a></li>"}if(a("gmaps_context_menu")){var h=a("gmaps_context_menu");h.innerHTML=i;var c=h.getElementsByTagName("a"),u=c.length;for(n=0;n<u;n++){var d=c[n],p=function(i){i.preventDefault(),s[this.id.replace(t+"_","")].action.apply(o,[e]),o.hideContextMenu()};google.maps.event.clearListeners(d,"click"),google.maps.event.addDomListenerOnce(d,"click",p,!1)}var f=r.apply(this,[o.el]),g=f[0]+e.pixel.x-15,m=f[1]+e.pixel.y-15;h.style.left=g+"px",h.style.top=m+"px",h.style.display="block"}};this.buildContextMenu=function(t,e){if("marker"===t){e.pixel={};var i=new google.maps.OverlayView;i.setMap(o.map),i.draw=function(){var s=i.getProjection(),n=e.marker.getPosition();e.pixel=s.fromLatLngToContainerPixel(n),I(t,e)}}else I(t,e)},this.setContextMenu=function(t){window.context_menu[o.el.id][t.control]={};var i,s=e.createElement("ul");for(i in t.options)if(t.options.hasOwnProperty(i)){var n=t.options[i];window.context_menu[o.el.id][t.control][n.name]={title:n.title,action:n.action}}s.id="gmaps_context_menu",s.style.display="none",s.style.position="absolute",s.style.minWidth="100px",s.style.background="white",s.style.listStyle="none",s.style.padding="8px",s.style.boxShadow="2px 2px 6px #ccc",e.body.appendChild(s);var r=a("gmaps_context_menu");google.maps.event.addDomListener(r,"mouseout",function(t){t.relatedTarget&&this.contains(t.relatedTarget)||window.setTimeout(function(){r.style.display="none"},400)},!1)},this.hideContextMenu=function(){var t=a("gmaps_context_menu");t&&(t.style.display="none")};for(var P=function(t,e){google.maps.event.addListener(t,e,function(t){void 0==t&&(t=this),s[e].apply(this,[t]),o.hideContextMenu()})},M=0;M<l.length;M++){var S=l[M];S in s&&P(this.map,S)}for(var M=0;M<h.length;M++){var S=h[M];S in s&&P(this.map,S)}google.maps.event.addListener(this.map,"rightclick",function(t){s.rightclick&&s.rightclick.apply(this,[t]),void 0!=window.context_menu[o.el.id].map&&o.buildContextMenu("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var t,e=[],i=this.markers.length;for(t=0;t<i;t++)"boolean"==typeof this.markers[t].visible&&this.markers[t].visible&&e.push(this.markers[t].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(t){for(var e=t.length,i=new google.maps.LatLngBounds,s=0;s<e;s++)i.extend(t[s]);this.map.fitBounds(i)},this.setCenter=function(t,e,i){this.map.panTo(new google.maps.LatLng(t,e)),i&&i()},this.getElement=function(){return this.el},this.zoomIn=function(t){t=t||1,this.zoom=this.map.getZoom()+t,this.map.setZoom(this.zoom)},this.zoomOut=function(t){t=t||1,this.zoom=this.map.getZoom()-t,this.map.setZoom(this.zoom)};var E,A=[];for(E in this.map)"function"!=typeof this.map[E]||this[E]||A.push(E);for(n=0;n<A.length;n++)!function(t,e,i){t[i]=function(){return e[i].apply(e,arguments)}}(this,this.map,A[n])};return i}(this);l.prototype.createControl=function(t){var e=document.createElement("div");e.style.cursor="pointer",e.style.fontFamily="Arial, sans-serif",e.style.fontSize="13px",e.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var i in t.style)e.style[i]=t.style[i];t.id&&(e.id=t.id),t.classes&&(e.className=t.classes),t.content&&(e.innerHTML=t.content);for(var s in t.events)!function(e,i){google.maps.event.addDomListener(e,i,function(){t.events[i].apply(this,[this])})}(e,s);return e.index=1,e},l.prototype.addControl=function(t){var e=google.maps.ControlPosition[t.position.toUpperCase()];delete t.position;var i=this.createControl(t);return this.controls.push(i),this.map.controls[e].push(i),i},l.prototype.createMarker=function(e){if(void 0==e.lat&&void 0==e.lng&&void 0==e.position)throw"No latitude or longitude defined.";var i=this,s=e.details,n=e.fences,o=e.outside,a={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat,delete e.lng,delete e.fences,delete e.outside;var r=t(a,e),l=new google.maps.Marker(r);if(l.fences=n,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var h=["closeclick","content_changed","domready","position_changed","zindex_changed"],c=0;c<h.length;c++)!function(t,i){e.infoWindow[i]&&google.maps.event.addListener(t,i,function(t){e.infoWindow[i].apply(this,[t])})}(l.infoWindow,h[c])}for(var u=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],d=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],c=0;c<u.length;c++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(){e[i].apply(this,[this])})}(l,u[c]);for(var c=0;c<d.length;c++)!function(t,i,s){e[s]&&google.maps.event.addListener(i,s,function(i){i.pixel||(i.pixel=t.getProjection().fromLatLngToPoint(i.latLng)),e[s].apply(this,[i])})}(this.map,l,d[c]);return google.maps.event.addListener(l,"click",function(){this.details=s,e.click&&e.click.apply(this,[this]),l.infoWindow&&(i.hideInfoWindows(),l.infoWindow.open(i.map,l))}),google.maps.event.addListener(l,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[i.el.id].marker&&i.buildContextMenu("marker",t)}),l.fences&&google.maps.event.addListener(l,"dragend",function(){i.checkMarkerGeofence(l,function(t,e){o(t,e)})}),l},l.prototype.addMarker=function(t){var e;if(t.hasOwnProperty("gm_accessors_"))e=t;else{if(!(t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")||t.position))throw"No latitude or longitude defined.";e=this.createMarker(t)}return e.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(e),this.markers.push(e),l.fire("marker_added",e,this),e},l.prototype.addMarkers=function(t){for(var e,i=0;e=t[i];i++)this.addMarker(e);return this.markers},l.prototype.hideInfoWindows=function(){for(var t,e=0;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},l.prototype.removeMarker=function(t){for(var e=0;e<this.markers.length;e++)if(this.markers[e]===t){this.markers[e].setMap(null),this.markers.splice(e,1),this.markerClusterer&&this.markerClusterer.removeMarker(t),l.fire("marker_removed",t,this);break}return t},l.prototype.removeMarkers=function(t){for(var t=t||this.markers,e=0;e<this.markers.length;e++)this.markers[e]===t[e]&&this.markers[e].setMap(null);for(var i=[],e=0;e<this.markers.length;e++)null!=this.markers[e].getMap()&&i.push(this.markers[e]);this.markers=i},l.prototype.drawOverlay=function(t){var e=new google.maps.OverlayView,i=!0;return e.setMap(this.map),null!=t.auto_show&&(i=t.auto_show),e.onAdd=function(){var i=document.createElement("div");i.style.borderStyle="none",i.style.borderWidth="0px",i.style.position="absolute",i.style.zIndex=100,i.innerHTML=t.content,e.el=i,t.layer||(t.layer="overlayLayer");var s=this.getPanes(),n=s[t.layer],o=["contextmenu","DOMMouseScroll","dblclick","mousedown"];n.appendChild(i);for(var a=0;a<o.length;a++)!function(t,e){google.maps.event.addDomListener(t,e,function(t){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(t.cancelBubble=!0,t.returnValue=!1):t.stopPropagation()})}(i,o[a]);google.maps.event.trigger(this,"ready")},e.draw=function(){var s=this.getProjection(),n=s.fromLatLngToDivPixel(new google.maps.LatLng(t.lat,t.lng));t.horizontalOffset=t.horizontalOffset||0,t.verticalOffset=t.verticalOffset||0;var o=e.el,a=o.children[0],r=a.clientHeight,l=a.clientWidth;switch(t.verticalAlign){case"top":o.style.top=n.y-r+t.verticalOffset+"px";break;default:case"middle":o.style.top=n.y-r/2+t.verticalOffset+"px";break;case"bottom":o.style.top=n.y+t.verticalOffset+"px"}switch(t.horizontalAlign){case"left":o.style.left=n.x-l+t.horizontalOffset+"px";break;default:case"center":o.style.left=n.x-l/2+t.horizontalOffset+"px";break;case"right":o.style.left=n.x+t.horizontalOffset+"px"}o.style.display=i?"block":"none",i||t.show.apply(this,[o])},e.onRemove=function(){var i=e.el;t.remove?t.remove.apply(this,[i]):(e.el.parentNode.removeChild(e.el),e.el=null)},this.overlays.push(e),e},l.prototype.removeOverlay=function(t){for(var e=0;e<this.overlays.length;e++)if(this.overlays[e]===t){this.overlays[e].setMap(null),this.overlays.splice(e,1);break}},l.prototype.removeOverlays=function(){for(var t,e=0;t=this.overlays[e];e++)t.setMap(null);this.overlays=[]},l.prototype.drawPolyline=function(t){var e=[],i=t.path;if(i.length)if(void 0===i[0][0])e=i;else for(var s,n=0;s=i[n];n++)e.push(new google.maps.LatLng(s[0],s[1]));var o={map:this.map,path:e,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,geodesic:t.geodesic,clickable:!0,editable:!1,visible:!0};t.hasOwnProperty("clickable")&&(o.clickable=t.clickable),t.hasOwnProperty("editable")&&(o.editable=t.editable),t.hasOwnProperty("icons")&&(o.icons=t.icons),t.hasOwnProperty("zIndex")&&(o.zIndex=t.zIndex);for(var a=new google.maps.Polyline(o),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],h=0;h<r.length;h++)!function(e,i){t[i]&&google.maps.event.addListener(e,i,function(e){t[i].apply(this,[e])})}(a,r[h]);return this.polylines.push(a),l.fire("polyline_added",a,this),a},l.prototype.removePolyline=function(t){for(var e=0;e<this.polylines.length;e++)if(this.polylines[e]===t){this.polylines[e].setMap(null),this.polylines.splice(e,1),l.fire("polyline_removed",t,this);break}},l.prototype.removePolylines=function(){for(var t,e=0;t=this.polylines[e];e++)t.setMap(null);this.polylines=[]},l.prototype.drawCircle=function(e){e=t({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;for(var i=new google.maps.Circle(e),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],n=0;n<s.length;n++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(i,s[n]);return this.polygons.push(i),i},l.prototype.drawRectangle=function(e){e=t({map:this.map},e);var i=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=i;for(var s=new google.maps.Rectangle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],o=0;o<n.length;o++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(s,n[o]);return this.polygons.push(s),s},l.prototype.drawPolygon=function(e){var n=!1;e.hasOwnProperty("useGeoJSON")&&(n=e.useGeoJSON),delete e.useGeoJSON,e=t({map:this.map},e),0==n&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=s(i(e.paths,o,n)));for(var a=new google.maps.Polygon(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],h=0;h<r.length;h++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(a,r[h]);return this.polygons.push(a),l.fire("polygon_added",a,this),a},l.prototype.removePolygon=function(t){for(var e=0;e<this.polygons.length;e++)if(this.polygons[e]===t){this.polygons[e].setMap(null),this.polygons.splice(e,1),l.fire("polygon_removed",t,this);break}},l.prototype.removePolygons=function(){for(var t,e=0;t=this.polygons[e];e++)t.setMap(null);this.polygons=[]},l.prototype.getFromFusionTables=function(t){var e=t.events;delete t.events;var i=t,s=new google.maps.FusionTablesLayer(i);for(var n in e)!function(t,i){google.maps.event.addListener(t,i,function(t){e[i].apply(this,[t])})}(s,n);return this.layers.push(s),s},l.prototype.loadFromFusionTables=function(t){var e=this.getFromFusionTables(t);return e.setMap(this.map),e},l.prototype.getFromKML=function(t){var e=t.url,i=t.events;delete t.url,delete t.events;var s=t,n=new google.maps.KmlLayer(e,s);for(var o in i)!function(t,e){google.maps.event.addListener(t,e,function(t){i[e].apply(this,[t])})}(n,o);return this.layers.push(n),n},l.prototype.loadFromKML=function(t){var e=this.getFromKML(t);return e.setMap(this.map),e},l.prototype.addLayer=function(t,e){e=e||{};var i;switch(t){case"weather":this.singleLayers.weather=i=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=i=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=i=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=i=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=i=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=i=new google.maps.panoramio.PanoramioLayer,i.setTag(e.filter),delete e.filter,e.click&&google.maps.event.addListener(i,"click",function(t){e.click(t),delete e.click});break;case"places":if(this.singleLayers.places=i=new google.maps.places.PlacesService(this.map),e.search||e.nearbySearch){var s={bounds:e.bounds||null,keyword:e.keyword||null,location:e.location||null,name:e.name||null,radius:e.radius||null,rankBy:e.rankBy||null,types:e.types||null};e.search&&i.search(s,e.search),e.nearbySearch&&i.nearbySearch(s,e.nearbySearch)}if(e.textSearch){var n={bounds:e.bounds||null,location:e.location||null,query:e.query||null,radius:e.radius||null};i.textSearch(n,e.textSearch)}}if(void 0!==i)return"function"==typeof i.setOptions&&i.setOptions(e),"function"==typeof i.setMap&&i.setMap(this.map),i},l.prototype.removeLayer=function(t){if("string"==typeof t&&void 0!==this.singleLayers[t])this.singleLayers[t].setMap(null),delete this.singleLayers[t];else for(var e=0;e<this.layers.length;e++)if(this.layers[e]===t){this.layers[e].setMap(null),this.layers.splice(e,1);break}};var h,c;return l.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":h=google.maps.TravelMode.BICYCLING;break;case"transit":h=google.maps.TravelMode.TRANSIT;break;case"driving":h=google.maps.TravelMode.DRIVING;break;default:h=google.maps.TravelMode.WALKING}c="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var i={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},s=t(i,e);s.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),s.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),s.travelMode=h,s.unitSystem=c,delete s.callback,delete s.error;var n=this,o=new google.maps.DirectionsService;o.route(s,function(t,i){if(i===google.maps.DirectionsStatus.OK){for(var s in t.routes)t.routes.hasOwnProperty(s)&&n.routes.push(t.routes[s]);e.callback&&e.callback(n.routes)}else e.error&&e.error(t,i)})},l.prototype.removeRoutes=function(){this.routes=[]},l.prototype.getElevations=function(e){e=t({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=s(i([e.locations],o,!1)));var n=e.callback;delete e.callback;var a=new google.maps.ElevationService;if(e.path){var r={path:e.locations,samples:e.samples};a.getElevationAlongPath(r,function(t,e){n&&"function"==typeof n&&n(t,e)})}else delete e.path,delete e.samples,a.getElevationForLocations(e,function(t,e){n&&"function"==typeof n&&n(t,e)})},l.prototype.cleanRoute=l.prototype.removePolylines,l.prototype.drawRoute=function(t){var e=this;this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,unitSystem:t.unitSystem,error:t.error,callback:function(i){i.length>0&&(e.drawPolyline({path:i[i.length-1].overview_path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.callback&&t.callback(i[i.length-1]))}})},l.prototype.travelRoute=function(t){if(t.origin&&t.destination)this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,error:t.error,callback:function(e){if(e.length>0&&t.start&&t.start(e[e.length-1]),e.length>0&&t.step){var i=e[e.length-1];if(i.legs.length>0)for(var s,n=i.legs[0].steps,o=0;s=n[o];o++)s.step_number=o,t.step(s,i.legs[0].steps.length-1)}e.length>0&&t.end&&t.end(e[e.length-1])}});else if(t.route&&t.route.legs.length>0)for(var e,i=t.route.legs[0].steps,s=0;e=i[s];s++)e.step_number=s,t.step(e)},l.prototype.drawSteppedRoute=function(t){var e=this;if(t.origin&&t.destination)this.getRoutes({origin:t.origin,destination:t.destination,travelMode:t.travelMode,waypoints:t.waypoints,error:t.error,callback:function(i){if(i.length>0&&t.start&&t.start(i[i.length-1]),i.length>0&&t.step){var s=i[i.length-1];if(s.legs.length>0)for(var n,o=s.legs[0].steps,a=0;n=o[a];a++)n.step_number=a,e.drawPolyline({path:n.path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.step(n,s.legs[0].steps.length-1)}i.length>0&&t.end&&t.end(i[i.length-1])}});else if(t.route&&t.route.legs.length>0)for(var i,s=t.route.legs[0].steps,n=0;i=s[n];n++)i.step_number=n,e.drawPolyline({path:i.path,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}),t.step(i)},l.Route=function(t){this.origin=t.origin,this.destination=t.destination,this.waypoints=t.waypoints,this.map=t.map,this.route=t.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length,this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight}).getPath()},l.Route.prototype.getRoute=function(t){var i=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function(){i.route=e[0],t.callback&&t.callback.call(i)}})},l.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var t=this.route.legs[0].steps[this.step_count].path;for(var e in t)t.hasOwnProperty(e)&&this.polyline.pop()}},l.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var t=this.route.legs[0].steps[this.step_count].path;for(var e in t)t.hasOwnProperty(e)&&this.polyline.push(t[e]);this.step_count++}},l.prototype.checkGeofence=function(t,e,i){return i.containsLatLng(new google.maps.LatLng(t,e))},l.prototype.checkMarkerGeofence=function(t,e){if(t.fences)for(var i,s=0;i=t.fences[s];s++){var n=t.getPosition();this.checkGeofence(n.lat(),n.lng(),i)||e(t,i)}},l.prototype.toImage=function(t){var t=t||{},e={};if(e.size=t.size||[this.el.clientWidth,this.el.clientHeight],e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng(),this.markers.length>0){e.markers=[];for(var i=0;i<this.markers.length;i++)e.markers.push({lat:this.markers[i].getPosition().lat(),lng:this.markers[i].getPosition().lng()})}if(this.polylines.length>0){var s=this.polylines[0];e.polyline={},e.polyline.path=google.maps.geometry.encoding.encodePath(s.getPath()),e.polyline.strokeColor=s.strokeColor,e.polyline.strokeOpacity=s.strokeOpacity,e.polyline.strokeWeight=s.strokeWeight}return l.staticMapURL(e)},l.staticMapURL=function(t){function e(t,e){if("#"===t[0]&&(t=t.replace("#","0x"),e)){if(e=parseFloat(e),e=Math.min(1,Math.max(e,0)),0===e)return"0x00000000";e=(255*e).toString(16),1===e.length&&(e+=e),t=t.slice(0,8)+e}return t}var i,s=[],n="http://maps.googleapis.com/maps/api/staticmap";t.url&&(n=t.url,delete t.url),n+="?";var o=t.markers;delete t.markers,!o&&t.marker&&(o=[t.marker],delete t.marker);var a=t.styles;delete t.styles;var r=t.polyline;if(delete t.polyline,t.center)s.push("center="+t.center),delete t.center;else if(t.address)s.push("center="+t.address),delete t.address;else if(t.lat)s.push(["center=",t.lat,",",t.lng].join("")),delete t.lat,delete t.lng;else if(t.visible){var l=encodeURI(t.visible.join("|"));s.push("visible="+l)}var h=t.size;h?(h.join&&(h=h.join("x")),delete t.size):h="630x300",s.push("size="+h),t.zoom||t.zoom===!1||(t.zoom=15);var c=!t.hasOwnProperty("sensor")||!!t.sensor;delete t.sensor,s.push("sensor="+c);for(var u in t)t.hasOwnProperty(u)&&s.push(u+"="+t[u]);if(o)for(var d,p,f=0;i=o[f];f++){d=[],i.size&&"normal"!==i.size?(d.push("size:"+i.size),delete i.size):i.icon&&(d.push("icon:"+encodeURI(i.icon)),delete i.icon),i.color&&(d.push("color:"+i.color.replace("#","0x")),delete i.color),i.label&&(d.push("label:"+i.label[0].toUpperCase()),delete i.label),p=i.address?i.address:i.lat+","+i.lng,delete i.address,delete i.lat,delete i.lng;for(var u in i)i.hasOwnProperty(u)&&d.push(u+":"+i[u]);d.length||0===f?(d.push(p),d=d.join("|"),s.push("markers="+encodeURI(d))):(d=s.pop()+encodeURI("|"+p),s.push(d))}if(a)for(var f=0;f<a.length;f++){var g=[];a[f].featureType&&"all"!=a[f].featureType&&g.push("feature:"+a[f].featureType),a[f].elementType&&"all"!=a[f].elementType&&g.push("element:"+a[f].elementType);for(var m=0;m<a[f].stylers.length;m++)for(var v in a[f].stylers[m]){var b=a[f].stylers[m][v];"hue"!=v&&"color"!=v||(b="0x"+b.substring(1)),g.push(v+":"+b)}var _=g.join("|");""!=_&&s.push("style="+_)}if(r){if(i=r,r=[],i.strokeWeight&&r.push("weight:"+parseInt(i.strokeWeight,10)),i.strokeColor){var y=e(i.strokeColor,i.strokeOpacity);r.push("color:"+y)}if(i.fillColor){var w=e(i.fillColor,i.fillOpacity);r.push("fillcolor:"+w)}var k=i.path;if(k.join)for(var x,m=0;x=k[m];m++)r.push(x.join(","));else r.push("enc:"+k);r=r.join("|"),s.push("path="+encodeURI(r))}var C=window.devicePixelRatio||1;return s.push("scale="+C),s=s.join("&"),n+s},l.prototype.addMapType=function(t,e){if(!e.hasOwnProperty("getTileUrl")||"function"!=typeof e.getTileUrl)throw"'getTileUrl' function required.";e.tileSize=e.tileSize||new google.maps.Size(256,256);var i=new google.maps.ImageMapType(e);this.map.mapTypes.set(t,i)},l.prototype.addOverlayMapType=function(t){if(!t.hasOwnProperty("getTile")||"function"!=typeof t.getTile)throw"'getTile' function required.";var e=t.index;delete t.index,this.map.overlayMapTypes.insertAt(e,t)},l.prototype.removeOverlayMapType=function(t){this.map.overlayMapTypes.removeAt(t)},l.prototype.addStyle=function(t){var e=new google.maps.StyledMapType(t.styles,{name:t.styledMapName});this.map.mapTypes.set(t.mapTypeId,e)},l.prototype.setStyle=function(t){this.map.setMapTypeId(t)},l.prototype.createPanorama=function(t){return t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")||(t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng()),this.panorama=l.createPanorama(t),this.map.setStreetView(this.panorama),this.panorama},l.createPanorama=function(e){var i=a(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var s=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],n=t({visible:!0},e),o=0;o<s.length;o++)delete n[s[o]];for(var r=new google.maps.StreetViewPanorama(i,n),o=0;o<s.length;o++)!function(t,i){e[i]&&google.maps.event.addListener(t,i,function(){e[i].apply(this)})}(r,s[o]);return r},l.prototype.on=function(t,e){return l.on(t,this,e)},l.prototype.off=function(t){l.off(t,this)},l.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],l.on=function(t,e,i){if(l.custom_events.indexOf(t)==-1)return google.maps.event.addListener(e,t,i);var s={handler:i,eventName:t};return e.registered_events[t]=e.registered_events[t]||[],e.registered_events[t].push(s),s},l.off=function(t,e){l.custom_events.indexOf(t)==-1?google.maps.event.clearListeners(e,t):e.registered_events[t]=[]},l.fire=function(t,e,i){if(l.custom_events.indexOf(t)==-1)google.maps.event.trigger(e,t,Array.prototype.slice.apply(arguments).slice(2));else if(t in i.registered_events)for(var s=i.registered_events[t],n=0;n<s.length;n++)!function(t,e,i){t.apply(e,[i])}(s[n].handler,i,e)},l.geolocate=function(t){var e=t.always||t.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){t.success(i),e&&e()},function(i){t.error(i),e&&e()},t.options):(t.not_supported(),e&&e())},l.geocode=function(t){this.geocoder=new google.maps.Geocoder;var e=t.callback;t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")&&(t.latLng=new google.maps.LatLng(t.lat,t.lng)),delete t.lat,delete t.lng,delete t.callback,this.geocoder.geocode(t,function(t,i){e(t,i)})},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds,i=this.getPaths(),s=0;s<i.getLength();s++){t=i.getAt(s);for(var n=0;n<t.getLength();n++)e.extend(t.getAt(n))}return e}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(t){var e=this.getBounds();if(null!==e&&!e.contains(t))return!1;for(var i=!1,s=this.getPaths().getLength(),n=0;n<s;n++)for(var o=this.getPaths().getAt(n),a=o.getLength(),r=a-1,l=0;l<a;l++){var h=o.getAt(l),c=o.getAt(r);(h.lng()<t.lng()&&c.lng()>=t.lng()||c.lng()<t.lng()&&h.lng()>=t.lng())&&h.lat()+(t.lng()-h.lng())/(c.lng()-h.lng())*(c.lat()-h.lat())<t.lat()&&(i=!i),r=l}return i}),google.maps.LatLngBounds.prototype.containsLatLng=function(t){return this.contains(t)},google.maps.Marker.prototype.setFences=function(t){this.fences=t},google.maps.Marker.prototype.addFence=function(t){this.fences.push(t)},google.maps.Marker.prototype.getId=function(){return this.__gm_id},Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null==this)throw new TypeError;var e=Object(this),i=e.length>>>0;if(0===i)return-1;var s=0;if(arguments.length>1&&(s=Number(arguments[1]),s!=s?s=0:0!=s&&s!=1/0&&s!=-(1/0)&&(s=(s>0||-1)*Math.floor(Math.abs(s)))),s>=i)return-1;for(var n=s>=0?s:Math.max(i-Math.abs(s),0);n<i;n++)if(n in e&&e[n]===t)return n;return-1}),l});
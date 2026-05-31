
(function(global){
 if(global.L) return;
 function Bounds(){this.valid=false;this.minLat=90;this.maxLat=-90;this.minLng=180;this.maxLng=-180;}
 Bounds.prototype.extend=function(b){ if(!b)return this; if(Array.isArray(b)){this.valid=true;var lat=b[0],lng=b[1];this.minLat=Math.min(this.minLat,lat);this.maxLat=Math.max(this.maxLat,lat);this.minLng=Math.min(this.minLng,lng);this.maxLng=Math.max(this.maxLng,lng);} else if(b.isValid&&b.isValid()){this.extend([b.minLat,b.minLng]);this.extend([b.maxLat,b.maxLng]);} return this; };
 Bounds.prototype.isValid=function(){return this.valid;};
 function MiniMap(id){this.el=document.getElementById(id);this.layers=[];this.center=[0,0];this.zoom=1;this.bounds=new Bounds();this.el.classList.add('leaflet-container');this.el.innerHTML='<div class="rg-mini-map-note">Mapa offline simplificado. Satélite/base dependem de internet. Pontos e camadas locais ficam visíveis.</div>';}
 MiniMap.prototype.setView=function(c,z){this.center=c;this.zoom=z;return this;};
 MiniMap.prototype.invalidateSize=function(){return this;};
 MiniMap.prototype.fitBounds=function(b){this.bounds=b;this.redraw();return this;};
 MiniMap.prototype.addLayer=function(l){this.layers.push(l);l._map=this; if(l._draw)l._draw(this); return this;};
 MiniMap.prototype.removeLayer=function(l){if(l&&l._els){l._els.forEach(function(e){if(e.parentNode)e.parentNode.removeChild(e);});l._els=[];}return this;};
 MiniMap.prototype.project=function(lat,lng){var b=this.bounds&&this.bounds.isValid()?this.bounds:null;var w=this.el.clientWidth||600,h=this.el.clientHeight||450;if(!b){return [w/2,h/2];}var dx=(b.maxLng-b.minLng)||0.01,dy=(b.maxLat-b.minLat)||0.01;var x=((lng-b.minLng)/dx)*(w-40)+20;var y=((b.maxLat-lat)/dy)*(h-40)+20;return [x,y];};
 MiniMap.prototype.redraw=function(){var self=this;this.layers.forEach(function(l){if(l._draw)l._draw(self);});};
 function Group(){this.layers=[];this._els=[];}
 Group.prototype.addTo=function(map){this._map=map;map.addLayer(this);return this;};
 Group.prototype.addLayer=function(l){this.layers.push(l); if(this._map)l.addTo(this);return this;};
 Group.prototype.getLayers=function(){return this.layers;};
 Group.prototype.clearLayers=function(){this.layers.forEach(function(l){if(l._els)l._els.forEach(function(e){if(e.parentNode)e.parentNode.removeChild(e);});});this.layers=[];};
 Group.prototype.getBounds=function(){var b=new Bounds();this.layers.forEach(function(l){if(l.latlng)b.extend(l.latlng); if(l.latlngs)l.latlngs.forEach(function(p){b.extend(p);});});return b;};
 Group.prototype._draw=function(map){this.layers.forEach(function(l){l._parent=this;l._draw(map);},this);};
 function Marker(latlng,opt){this.latlng=latlng;this.opt=opt||{};this.popup='';this._els=[];}
 Marker.prototype.bindPopup=function(html){this.popup=html;return this;};
 Marker.prototype.addTo=function(groupOrMap){if(groupOrMap.addLayer&&groupOrMap.layers){groupOrMap.addLayer(this);}else{groupOrMap.addLayer(this);}return this;};
 Marker.prototype._draw=function(map){var self=this;if(this._els)this._els.forEach(function(e){if(e.parentNode)e.parentNode.removeChild(e);});this._els=[];var xy=map.project(this.latlng[0],this.latlng[1]);var el=document.createElement('div');el.className='rg-mini-marker';var r=this.opt.radius||8;el.style.width=(r*2)+'px';el.style.height=(r*2)+'px';el.style.left=xy[0]+'px';el.style.top=xy[1]+'px';el.style.background=this.opt.fillColor||'#198754';el.onclick=function(){var old=map.el.querySelector('.rg-mini-popup');if(old)old.remove();var p=document.createElement('div');p.className='rg-mini-popup';p.innerHTML=self.popup||'';map.el.appendChild(p);};map.el.appendChild(el);this._els=[el];};
 function Poly(latlngs,opt){this.latlngs=latlngs;this.opt=opt||{};this.popup='';this._els=[];}
 Poly.prototype.bindPopup=function(html){this.popup=html;return this;};
 Poly.prototype.addTo=function(groupOrMap){if(groupOrMap.addLayer&&groupOrMap.layers){groupOrMap.addLayer(this);}else{groupOrMap.addLayer(this);}return this;};
 Poly.prototype._draw=function(map){var self=this;if(this._els)this._els.forEach(function(e){if(e.parentNode)e.parentNode.removeChild(e);});this._els=[];if(!this.latlngs.length)return;var xs=this.latlngs.map(function(p){return map.project(p[0],p[1])[0];});var ys=this.latlngs.map(function(p){return map.project(p[0],p[1])[1];});var el=document.createElement('div');el.className='rg-mini-poly';el.style.left=Math.min.apply(null,xs)+'px';el.style.top=Math.min.apply(null,ys)+'px';el.style.width=(Math.max.apply(null,xs)-Math.min.apply(null,xs)||12)+'px';el.style.height=(Math.max.apply(null,ys)-Math.min.apply(null,ys)||12)+'px';el.style.borderColor=this.opt.color||'#0f5132';el.onclick=function(){var old=map.el.querySelector('.rg-mini-popup');if(old)old.remove();var p=document.createElement('div');p.className='rg-mini-popup';p.innerHTML=self.popup||'';map.el.appendChild(p);};map.el.appendChild(el);this._els=[el];};
 global.L={map:function(id){return new MiniMap(id);},tileLayer:function(){return{addTo:function(){return this;}};},featureGroup:function(){return new Group();},circleMarker:function(ll,opt){return new Marker(ll,opt);},polygon:function(ll,opt){return new Poly(ll,opt);},latLngBounds:function(){return new Bounds();}};
})(window);

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(e){var t=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define=="function"&&define.amd)define(["underscore","jquery","exports"],function(n,r,i){t.Backbone=e(t,i,n,r)});else if(typeof exports!="undefined"){var n=require("underscore"),r;try{r=require("jquery")}catch(i){}e(t,exports,n,r)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)})(function(e,t,n,r){var i=e.Backbone,s=Array.prototype.slice;t.VERSION="1.2.2",t.$=r,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var o=function(e,t,r){switch(e){case 1:return function(){return n[t](this[r])};case 2:return function(e){return n[t](this[r],e)};case 3:return function(e,i){return n[t](this[r],a(e,this),i)};case 4:return function(e,i,s){return n[t](this[r],a(e,this),i,s)};default:return function(){var e=s.call(arguments);return e.unshift(this[r]),n[t].apply(n,e)}}},u=function(e,t,r){n.each(t,function(t,i){n[i]&&(e.prototype[i]=o(t,i,r))})},a=function(e,t){return n.isFunction(e)?e:n.isObject(e)&&!t._isModel(e)?f(e):n.isString(e)?function(t){return t.get(e)}:e},f=function(e){var t=n.matches(e);return function(e){return t(e.attributes)}},l=t.Events={},c=/\s+/,h=function(e,t,r,i,s){var o=0,u;if(r&&typeof r=="object"){i!==void 0&&"context"in s&&s.context===void 0&&(s.context=i);for(u=n.keys(r);o<u.length;o++)t=h(e,t,u[o],r[u[o]],s)}else if(r&&c.test(r))for(u=r.split(c);o<u.length;o++)t=e(t,u[o],i,s);else t=e(t,r,i,s);return t};l.on=function(e,t,n){return p(this,e,t,n)};var p=function(e,t,n,r,i){e._events=h(d,e._events||{},t,n,{context:r,ctx:e,listening:i});if(i){var s=e._listeners||(e._listeners={});s[i.id]=i}return e};l.listenTo=function(e,t,r){if(!e)return this;var i=e._listenId||(e._listenId=n.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),o=s[i];if(!o){var u=this._listenId||(this._listenId=n.uniqueId("l"));o=s[i]={obj:e,objId:i,id:u,listeningTo:s,count:0}}return p(e,t,r,this,o),this};var d=function(e,t,n,r){if(n){var i=e[t]||(e[t]=[]),s=r.context,o=r.ctx,u=r.listening;u&&u.count++,i.push({callback:n,context:s,ctx:s||o,listening:u})}return e};l.off=function(e,t,n){return this._events?(this._events=h(v,this._events,e,t,{context:n,listeners:this._listeners}),this):this},l.stopListening=function(e,t,r){var i=this._listeningTo;if(!i)return this;var s=e?[e._listenId]:n.keys(i);for(var o=0;o<s.length;o++){var u=i[s[o]];if(!u)break;u.obj.off(t,r,this)}return n.isEmpty(i)&&(this._listeningTo=void 0),this};var v=function(e,t,r,i){if(!e)return;var s=0,o,u=i.context,a=i.listeners;if(!t&&!r&&!u){var f=n.keys(a);for(;s<f.length;s++)o=a[f[s]],delete a[o.id],delete o.listeningTo[o.objId];return}var l=t?[t]:n.keys(e);for(;s<l.length;s++){t=l[s];var c=e[t];if(!c)break;var h=[];for(var p=0;p<c.length;p++){var d=c[p];r&&r!==d.callback&&r!==d.callback._callback||u&&u!==d.context?h.push(d):(o=d.listening,o&&--o.count===0&&(delete a[o.id],delete o.listeningTo[o.objId]))}h.length?e[t]=h:delete e[t]}if(n.size(e))return e};l.once=function(e,t,r){var i=h(m,{},e,t,n.bind(this.off,this));return this.on(i,void 0,r)},l.listenToOnce=function(e,t,r){var i=h(m,{},t,r,n.bind(this.stopListening,this,e));return this.listenTo(e,i)};var m=function(e,t,r,i){if(r){var s=e[t]=n.once(function(){i(t,s),r.apply(this,arguments)});s._callback=r}return e};l.trigger=function(e){if(!this._events)return this;var t=Math.max(0,arguments.length-1),n=Array(t);for(var r=0;r<t;r++)n[r]=arguments[r+1];return h(g,this._events,e,void 0,n),this};var g=function(e,t,n,r){if(e){var i=e[t],s=e.all;i&&s&&(s=s.slice()),i&&y(i,r),s&&y(s,[t].concat(r))}return e},y=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t);return}};l.bind=l.on,l.unbind=l.off,n.extend(t,l);var b=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId(this.cidPrefix),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};n.extend(b.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(e){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return n.escape(this.get(e))},has:function(e){return this.get(e)!=null},matches:function(e){return!!n.iteratee(e,this)(this.attributes)},set:function(e,t,r){if(e==null)return this;var i;typeof e=="object"?(i=e,r=t):(i={})[e]=t,r||(r={});if(!this._validate(i,r))return!1;var s=r.unset,o=r.silent,u=[],a=this._changing;this._changing=!0,a||(this._previousAttributes=n.clone(this.attributes),this.changed={});var f=this.attributes,l=this.changed,c=this._previousAttributes;for(var h in i)t=i[h],n.isEqual(f[h],t)||u.push(h),n.isEqual(c[h],t)?delete l[h]:l[h]=t,s?delete f[h]:f[h]=t;this.id=this.get(this.idAttribute);if(!o){u.length&&(this._pending=r);for(var p=0;p<u.length;p++)this.trigger("change:"+u[p],this,f[u[p]],r)}if(a)return this;if(!o)while(this._pending)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var r in this.attributes)t[r]=void 0;return this.set(t,n.extend({},e,{unset:!0}))},hasChanged:function(e){return e==null?!n.isEmpty(this.changed):n.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?n.clone(this.changed):!1;var t=this._changing?this._previousAttributes:this.attributes,r={};for(var i in e){var s=e[i];if(n.isEqual(t[i],s))continue;r[i]=s}return n.size(r)?r:!1},previous:function(e){return e==null||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(e){e=n.extend({parse:!0},e);var t=this,r=e.success;return e.success=function(n){var i=e.parse?t.parse(n,e):n;if(!t.set(i,e))return!1;r&&r.call(e.context,t,n,e),t.trigger("sync",t,n,e)},R(this,e),this.sync("read",this,e)},save:function(e,t,r){var i;e==null||typeof e=="object"?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0,parse:!0},r);var s=r.wait;if(i&&!s){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;var o=this,u=r.success,a=this.attributes;r.success=function(e){o.attributes=a;var t=r.parse?o.parse(e,r):e;s&&(t=n.extend({},i,t));if(t&&!o.set(t,r))return!1;u&&u.call(r.context,o,e,r),o.trigger("sync",o,e,r)},R(this,r),i&&s&&(this.attributes=n.extend({},a,i));var f=this.isNew()?"create":r.patch?"patch":"update";f==="patch"&&!r.attrs&&(r.attrs=i);var l=this.sync(f,this,r);return this.attributes=a,l},destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=e.wait,s=function(){t.stopListening(),t.trigger("destroy",t,t.collection,e)};e.success=function(n){i&&s(),r&&r.call(e.context,t,n,e),t.isNew()||t.trigger("sync",t,n,e)};var o=!1;return this.isNew()?n.defer(e.success):(R(this,e),o=this.sync("delete",this,e)),i||s(),o},url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||q();if(this.isNew())return e;var t=this.get(this.idAttribute);return e.replace(/[^\/]$/,"$&/")+encodeURIComponent(t)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},n.defaults({validate:!0},e))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=n.extend({},this.attributes,e);var r=this.validationError=this.validate(e,t)||null;return r?(this.trigger("invalid",this,r,n.extend(t,{validationError:r})),!1):!0}});var w={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};u(b,w,"attributes");var E=t.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator!==void 0&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,n.extend({silent:!0},t))},S={add:!0,remove:!0,merge:!0},x={add:!0,remove:!1},T=function(e,t,n){var r=Array(e.length-n),i=t.length;for(var s=0;s<r.length;s++)r[s]=e[s+n];for(s=0;s<i;s++)e[s+n]=t[s];for(s=0;s<r.length;s++)e[s+i+n]=r[s]};n.extend(E.prototype,l,{model:b,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return t.sync.apply(this,arguments)},add:function(e,t){return this.set(e,n.extend({merge:!1},t,x))},remove:function(e,t){t=n.extend({},t);var r=!n.isArray(e);e=r?[e]:n.clone(e);var i=this._removeModels(e,t);return!t.silent&&i&&this.trigger("update",this,t),r?i[0]:i},set:function(e,t){if(e==null)return;t=n.defaults({},t,S),t.parse&&!this._isModel(e)&&(e=this.parse(e,t));var r=!n.isArray(e);e=r?[e]:e.slice();var i=t.at;i!=null&&(i=+i),i<0&&(i+=this.length+1);var s=[],o=[],u=[],a={},f=t.add,l=t.merge,c=t.remove,h=!1,p=this.comparator&&i==null&&t.sort!==!1,d=n.isString(this.comparator)?this.comparator:null,v;for(var m=0;m<e.length;m++){v=e[m];var g=this.get(v);if(g){if(l&&v!==g){var y=this._isModel(v)?v.attributes:v;t.parse&&(y=g.parse(y,t)),g.set(y,t),p&&!h&&(h=g.hasChanged(d))}a[g.cid]||(a[g.cid]=!0,s.push(g)),e[m]=g}else f&&(v=e[m]=this._prepareModel(v,t),v&&(o.push(v),this._addReference(v,t),a[v.cid]=!0,s.push(v)))}if(c){for(m=0;m<this.length;m++)v=this.models[m],a[v.cid]||u.push(v);u.length&&this._removeModels(u,t)}var b=!1,w=!p&&f&&c;s.length&&w?(b=this.length!=s.length||n.some(this.models,function(e,t){return e!==s[t]}),this.models.length=0,T(this.models,s,0),this.length=this.models.length):o.length&&(p&&(h=!0),T(this.models,o,i==null?this.length:i),this.length=this.models.length),h&&this.sort({silent:!0});if(!t.silent){for(m=0;m<o.length;m++)i!=null&&(t.index=i+m),v=o[m],v.trigger("add",v,this,t);(h||b)&&this.trigger("sort",this,t),(o.length||u.length)&&this.trigger("update",this,t)}return r?e[0]:e},reset:function(e,t){t=t?n.clone(t):{};for(var r=0;r<this.models.length;r++)this._removeReference(this.models[r],t);return t.previousModels=this.models,this._reset(),e=this.add(e,n.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),e},push:function(e,t){return this.add(e,n.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e)},unshift:function(e,t){return this.add(e,n.extend({at:0},t))},shift:function(e){var t=this.at(0);return this.remove(t,e)},slice:function(){return s.apply(this.models,arguments)},get:function(e){if(e==null)return void 0;var t=this.modelId(this._isModel(e)?e.attributes:e);return this._byId[e]||this._byId[t]||this._byId[e.cid]},at:function(e){return e<0&&(e+=this.length),this.models[e]},where:function(e,t){return this[t?"find":"filter"](e)},findWhere:function(e){return this.where(e,!0)},sort:function(e){var t=this.comparator;if(!t)throw new Error("Cannot sort a set without a comparator");e||(e={});var r=t.length;return n.isFunction(t)&&(t=n.bind(t,this)),r===1||n.isString(t)?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return n.invoke(this.models,"get",e)},fetch:function(e){e=n.extend({parse:!0},e);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t.call(e.context,r,n,e),r.trigger("sync",r,n,e)},R(this,e),this.sync("read",this,e)},create:function(e,t){t=t?n.clone(t):{};var r=t.wait;e=this._prepareModel(e,t);if(!e)return!1;r||this.add(e,t);var i=this,s=t.success;return t.success=function(e,t,n){r&&i.add(e,n),s&&s.call(n.context,e,t,n)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(e){return e[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(this._isModel(e))return e.collection||(e.collection=this),e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},_removeModels:function(e,t){var n=[];for(var r=0;r<e.length;r++){var i=this.get(e[r]);if(!i)continue;var s=this.indexOf(i);this.models.splice(s,1),this.length--,t.silent||(t.index=s,i.trigger("remove",i,this,t)),n.push(i),this._removeReference(i,t)}return n.length?n:!1},_isModel:function(e){return e instanceof b},_addReference:function(e,t){this._byId[e.cid]=e;var n=this.modelId(e.attributes);n!=null&&(this._byId[n]=e),e.on("all",this._onModelEvent,this)},_removeReference:function(e,t){delete this._byId[e.cid];var n=this.modelId(e.attributes);n!=null&&delete this._byId[n],this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;e==="destroy"&&this.remove(t,r);if(e==="change"){var i=this.modelId(t.previousAttributes()),s=this.modelId(t.attributes);i!==s&&(i!=null&&delete this._byId[i],s!=null&&(this._byId[s]=t))}this.trigger.apply(this,arguments)}});var N={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};u(E,N,"models");var C=t.View=function(e){this.cid=n.uniqueId("view"),n.extend(this,n.pick(e,L)),this._ensureElement(),this.initialize.apply(this,arguments)},k=/^(\S+)\s*(.*)$/,L=["model","collection","el","id","attributes","className","tagName","events"];n.extend(C.prototype,l,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(e){return this.undelegateEvents(),this._setElement(e),this.delegateEvents(),this},_setElement:function(e){this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0]},delegateEvents:function(e){e||(e=n.result(this,"events"));if(!e)return this;this.undelegateEvents();for(var t in e){var r=e[t];n.isFunction(r)||(r=this[r]);if(!r)continue;var i=t.match(k);this.delegate(i[1],i[2],n.bind(r,this))}return this},delegate:function(e,t,n){return this.$el.on(e+".delegateEvents"+this.cid,t,n),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(e,t,n){return this.$el.off(e+".delegateEvents"+this.cid,t,n),this},_createElement:function(e){return document.createElement(e)},_ensureElement:function(){if(!this.el){var e=n.extend({},n.result(this,"attributes"));this.id&&(e.id=n.result(this,"id")),this.className&&(e["class"]=n.result(this,"className")),this.setElement(this._createElement(n.result(this,"tagName"))),this._setAttributes(e)}else this.setElement(n.result(this,"el"))},_setAttributes:function(e){this.$el.attr(e)}}),t.sync=function(e,r,i){var s=A[e];n.defaults(i||(i={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var o={type:s,dataType:"json"};i.url||(o.url=n.result(r,"url")||q()),i.data==null&&r&&(e==="create"||e==="update"||e==="patch")&&(o.contentType="application/json",o.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{});if(i.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){o.type="POST",i.emulateJSON&&(o.data._method=s);var u=i.beforeSend;i.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",s);if(u)return u.apply(this,arguments)}}o.type!=="GET"&&!i.emulateJSON&&(o.processData=!1);var a=i.error;i.error=function(e,t,n){i.textStatus=t,i.errorThrown=n,a&&a.call(i.context,e,t,n)};var f=i.xhr=t.ajax(n.extend(o,i));return r.trigger("request",r,f,i),f};var A={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var O=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},M=/\((.*?)\)/g,_=/(\(\?)?:\w+/g,D=/\*\w+/g,P=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(O.prototype,l,{initialize:function(){},route:function(e,r,i){n.isRegExp(e)||(e=this._routeToRegExp(e)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return t.history.route(e,function(n){var o=s._extractParameters(e,n);s.execute(i,o,r)!==!1&&(s.trigger.apply(s,["route:"+r].concat(o)),s.trigger("route",r,o),t.history.trigger("route",s,r,o))}),this},execute:function(e,t,n){e&&e.apply(this,t)},navigate:function(e,n){return t.history.navigate(e,n),this},_bindRoutes:function(){if(!this.routes)return;this.routes=n.result(this,"routes");var e,t=n.keys(this.routes);while((e=t.pop())!=null)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(P,"\\$&").replace(M,"(?:$1)?").replace(_,function(e,t){return t?e:"([^/?]+)"}).replace(D,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(e,t){var r=e.exec(t).slice(1);return n.map(r,function(e,t){return t===r.length-1?e||null:e?decodeURIComponent(e):null})}});var H=t.History=function(){this.handlers=[],this.checkUrl=n.bind(this.checkUrl,this),typeof window!="undefined"&&(this.location=window.location,this.history=window.history)},B=/^[#\/]|\s+$/g,j=/^\/+|\/+$/g,F=/#.*$/;H.started=!1,n.extend(H.prototype,l,{interval:50,atRoot:function(){var e=this.location.pathname.replace(/[^\/]$/,"$&/");return e===this.root&&!this.getSearch()},matchRoot:function(){var e=this.decodeFragment(this.location.pathname),t=e.slice(0,this.root.length-1)+"/";return t===this.root},decodeFragment:function(e){return decodeURI(e.replace(/%25/g,"%2525"))},getSearch:function(){var e=this.location.href.replace(/#.*/,"").match(/\?.+/);return e?e[0]:""},getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getPath:function(){var e=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return e.charAt(0)==="/"?e.slice(1):e},getFragment:function(e){return e==null&&(this._usePushState||!this._wantsHashChange?e=this.getPath():e=this.getHash()),e.replace(B,"")},start:function(e){if(H.started)throw new Error("Backbone.history has already been started");H.started=!0,this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!this.history&&!!this.history.pushState,this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(j,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var t=this.root.slice(0,-1)||"/";return this.location.replace(t+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var r=document.body,i=r.insertBefore(this.iframe,r.firstChild).contentWindow;i.document.open(),i.document.close(),i.location.hash="#"+this.fragment}var s=window.addEventListener||function(e,t){return attachEvent("on"+e,t)};this._usePushState?s("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?s("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));if(!this.options.silent)return this.loadUrl()},stop:function(){var e=window.removeEventListener||function(e,t){return detachEvent("on"+e,t)};this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&e("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),H.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getHash(this.iframe.contentWindow));if(t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()},loadUrl:function(e){return this.matchRoot()?(e=this.fragment=this.getFragment(e),n.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0})):!1},navigate:function(e,t){if(!H.started)return!1;if(!t||t===!0)t={trigger:!!t};e=this.getFragment(e||"");var n=this.root;if(e===""||e.charAt(0)==="?")n=n.slice(0,-1)||"/";var r=n+e;e=this.decodeFragment(e.replace(F,""));if(this.fragment===e)return;this.fragment=e;if(this._usePushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,r);else{if(!this._wantsHashChange)return this.location.assign(r);this._updateHash(this.location,e,t.replace);if(this.iframe&&e!==this.getHash(this.iframe.contentWindow)){var i=this.iframe.contentWindow;t.replace||(i.document.open(),i.document.close()),this._updateHash(i.location,e,t.replace)}}if(t.trigger)return this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),t.history=new H;var I=function(e,t){var r=this,i;e&&n.has(e,"constructor")?i=e.constructor:i=function(){return r.apply(this,arguments)},n.extend(i,r,t);var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,e&&n.extend(i.prototype,e),i.__super__=r.prototype,i};b.extend=E.extend=O.extend=C.extend=H.extend=I;var q=function(){throw new Error('A "url" property or function must be specified')},R=function(e,t){var n=t.error;t.error=function(r){n&&n.call(t.context,e,r,t),e.trigger("error",e,r,t)}};return t});
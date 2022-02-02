// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);



/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});


/*Animated Headlins */
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});


/*jquery.mb.YTPlayer 08-12-2015
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.9.7",build:"5748",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(a){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filtersEnabled=!0,YTPlayer.filters={grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options,property)),"true"==YTPlayer.opt.loop&&(YTPlayer.opt.loop=9999),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.6*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){YTPlayer.player=a.target,YTPlayer.isReady||(YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$(YTPlayer.playerEl).unselectable(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),jQuery.mbYTPlayer.checkForState(YTPlayer))},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){if(YTPlayer.preventTrigger)return void(YTPlayer.preventTrigger=!1);YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPPlay",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}})}}))})}})},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.dataReceived=!0,jQuery(a).trigger("YTPChanged");var b=jQuery.Event("YTPData");b.prop={};for(var c in a.videoData)b.prop[c]=a.videoData[c];jQuery(a).trigger(b)},500),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0,jQuery(a).trigger("YTPChanged"),c(b.items[0].snippet),a.hasData=!0;var d=jQuery.Event("YTPData");d.prop={};for(var e in a.videoData)d.prop[e]=a.videoData[e];jQuery(a).trigger(d)});else{if(setTimeout(function(){jQuery(a).trigger("YTPChanged")},50),a.isPlayer&&!a.opt.autoPlay){var b=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/hqdefault.jpg";a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).one("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),d},playNext:function(){var a=this.get(0);return a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,b.hasData=!1,b.hasChanged=!0,b.player.LoopTime=void 0,a&&jQuery.extend(b.opt,b.defaultOpt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,"true"==b.opt.loop&&(b.opt.loop=9999),jQuery(b.playerEl).CSSAnimate({opacity:0},200,function(){var a=jQuery.Event("YTPChangeMovie");return a.time=b.player.time,a.videoId=b.videoID,jQuery(b).trigger(a),jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,b.opt.quality),jQuery.mbYTPlayer.checkForState(b),jQuery(b).optimizeDisplay(),jQuery.mbYTPlayer.getDataFromAPI(b),this})},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;return b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(a.isReady)return a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),jQuery(a).css("background-image","none"),this},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0);return a.player.pauseVideo(),this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},applyFilter:function(a,b){var c=this.get(0);return c.filters[a].value=b,c.filtersEnabled&&this.YTPEnableFilters(),this},applyFilters:function(a){var b=this.get(0);return this.on("YTPReady",function(){for(var c in a)b.filters[c].value=a[c],jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")}),this},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){"function"==typeof a&&(b=a,a=null);var c=this;if(a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){if(!data.loop||data.loop>0&&YTPlayer.player.LoopTime===data.loop-1){YTPlayer.player.LoopTime=void 0,clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,void jQuery(YTPlayer).trigger(YTPEnd)}}else if(!data.loop||data.loop>0&&YTPlayer.player.LoopTime===data.loop-1)return YTPlayer.player.LoopTime=void 0,YTPlayer.preventTrigger=!0,$(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground||YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})});YTPlayer.player.LoopTime=YTPlayer.player.LoopTime?++YTPlayer.player.LoopTime:1,startAt=startAt||1,YTPlayer.player.pauseVideo(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(jQuery.browser.chrome&&(a.opt.quality="default"),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});a.checkForStartAt=setInterval(function(){jQuery(a).YTPMute();var c=a.opt.startAt?a.opt.startAt:1,d=a.player.getVideoLoadedFraction()>c/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=c&&d){clearInterval(a.checkForStartAt),a.isReady=!0,"function"==typeof a.opt.onReady&&a.opt.onReady(a);var e=jQuery.Event("YTPReady");if(e.time=a.player.time,jQuery(a).trigger(e),a.opt.mute||jQuery(a).YTPUnmute(),a.canTrigger=!0,a.opt.autoPlay){b.YTPPlay();var f=jQuery.Event("YTPStart");f.time=a.player.time,jQuery(a).trigger(f),b.css("background-image","none"),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3)}else a.player.pauseVideo(),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3));a.isPlayer&&!a.opt.autoPlay&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.slideDown(1e3)}else c>=0&&a.player.seekTo(c,!0)},1e3)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");
for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id);var o=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=o,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),!function(a){/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var b="ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1;a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b?"touchstart":"mousedown",end:b?"touchend":"mouseup",move:b?"touchmove":"mousemove"},init:function(c){return this.each(function(){var d=this,e=a(d);e.addClass("simpleSlider"),d.opt={},a.extend(d.opt,a.simpleSlider.defaults,c),a.extend(d.opt,e.data());var f="h"==d.opt.orientation?"horizontal":"vertical",g=a("<div/>").addClass("level").addClass(f);e.prepend(g),d.level=g,e.css({cursor:"default"}),"auto"==d.opt.scale&&(d.opt.scale=a(d).outerWidth()),e.updateSliderVal(),d.opt.readonly||(e.on(a.simpleSlider.events.start,function(a){b&&(a=a.changedTouches[0]),d.canSlide=!0,e.updateSliderVal(a),e.css({cursor:"col-resize"}),a.preventDefault(),a.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(c){b&&(c=c.changedTouches[0]),d.canSlide&&(a(document).css({cursor:"default"}),e.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),d.canSlide=!1,e.css({cursor:"auto"})}))})},updateSliderVal:function(b){function c(a,b){return Math.floor(100*a/b)}var d=this,e=d.get(0);e.opt.initialval="number"==typeof e.opt.initialval?e.opt.initialval:e.opt.initialval(e);var f=a(e).outerWidth(),g=a(e).outerHeight();e.x="object"==typeof b?b.clientX+document.body.scrollLeft-d.offset().left:"number"==typeof b?b*f/e.opt.scale:e.opt.initialval*f/e.opt.scale,e.y="object"==typeof b?b.clientY+document.body.scrollTop-d.offset().top:"number"==typeof b?(e.opt.scale-e.opt.initialval-b)*g/e.opt.scale:e.opt.initialval*g/e.opt.scale,e.y=d.outerHeight()-e.y,e.scaleX=e.x*e.opt.scale/f,e.scaleY=e.y*e.opt.scale/g,e.outOfRangeX=e.scaleX>e.opt.scale?e.scaleX-e.opt.scale:e.scaleX<0?e.scaleX:0,e.outOfRangeY=e.scaleY>e.opt.scale?e.scaleY-e.opt.scale:e.scaleY<0?e.scaleY:0,e.outOfRange="h"==e.opt.orientation?e.outOfRangeX:e.outOfRangeY,e.value="undefined"!=typeof b?"h"==e.opt.orientation?e.x>=d.outerWidth()?e.opt.scale:e.x<=0?0:e.scaleX:e.y>=d.outerHeight()?e.opt.scale:e.y<=0?0:e.scaleY:"h"==e.opt.orientation?e.scaleX:e.scaleY,"h"==e.opt.orientation?e.level.width(c(e.x,f)+"%"):e.level.height(c(e.y,g)),"function"==typeof e.opt.callback&&e.opt.callback(e)}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var e,f=new Date;f.setTime(f.getTime()+864e5*c),e="; expires="+f.toGMTString(),document.cookie=a+"="+b+e+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);

/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);


// Place any jQuery/helper plugins in here.
/*-------------------------------------------------------------
     scrollup jquery
---------------------------------------------------------------*/

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);




@-webkit-keyframes bounce {
from, 20%, 53%, 80%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
40%, 43% {
-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
-webkit-transform: translate3d(0, -30px, 0);
transform: translate3d(0, -30px, 0);
}
70% {
-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
-webkit-transform: translate3d(0, -15px, 0);
transform: translate3d(0, -15px, 0);
}
90% {
-webkit-transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
}
}
@keyframes bounce {
from, 20%, 53%, 80%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
40%, 43% {
-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
-webkit-transform: translate3d(0, -30px, 0);
transform: translate3d(0, -30px, 0);
}
70% {
-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
-webkit-transform: translate3d(0, -15px, 0);
transform: translate3d(0, -15px, 0);
}
90% {
-webkit-transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
}
}
.bounce { -webkit-animation-name: bounce; animation-name: bounce; -webkit-transform-origin: center bottom; transform-origin: center bottom; }
@-webkit-keyframes flash {
from, 50%, to {
opacity: 1;
}
25%, 75% {
opacity: 0;
}
}
@keyframes flash {
from, 50%, to {
opacity: 1;
}
25%, 75% {
opacity: 0;
}
}
.flash { -webkit-animation-name: flash; animation-name: flash; }

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
50% {
-webkit-transform: scale3d(1.05, 1.05, 1.05);
transform: scale3d(1.05, 1.05, 1.05);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes pulse {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
50% {
-webkit-transform: scale3d(1.05, 1.05, 1.05);
transform: scale3d(1.05, 1.05, 1.05);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
.pulse { -webkit-animation-name: pulse; animation-name: pulse; }
@-webkit-keyframes rubberBand {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
30% {
-webkit-transform: scale3d(1.25, 0.75, 1);
transform: scale3d(1.25, 0.75, 1);
}
40% {
-webkit-transform: scale3d(0.75, 1.25, 1);
transform: scale3d(0.75, 1.25, 1);
}
50% {
-webkit-transform: scale3d(1.15, 0.85, 1);
transform: scale3d(1.15, 0.85, 1);
}
65% {
-webkit-transform: scale3d(0.95, 1.05, 1);
transform: scale3d(0.95, 1.05, 1);
}
75% {
-webkit-transform: scale3d(1.05, 0.95, 1);
transform: scale3d(1.05, 0.95, 1);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes rubberBand {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
30% {
-webkit-transform: scale3d(1.25, 0.75, 1);
transform: scale3d(1.25, 0.75, 1);
}
40% {
-webkit-transform: scale3d(0.75, 1.25, 1);
transform: scale3d(0.75, 1.25, 1);
}
50% {
-webkit-transform: scale3d(1.15, 0.85, 1);
transform: scale3d(1.15, 0.85, 1);
}
65% {
-webkit-transform: scale3d(0.95, 1.05, 1);
transform: scale3d(0.95, 1.05, 1);
}
75% {
-webkit-transform: scale3d(1.05, 0.95, 1);
transform: scale3d(1.05, 0.95, 1);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
.rubberBand { -webkit-animation-name: rubberBand; animation-name: rubberBand; }
@-webkit-keyframes shake {
from, to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
10%, 30%, 50%, 70%, 90% {
-webkit-transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
}
20%, 40%, 60%, 80% {
-webkit-transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
}
}
@keyframes shake {
from, to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
10%, 30%, 50%, 70%, 90% {
-webkit-transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
}
20%, 40%, 60%, 80% {
-webkit-transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
}
}
.shake { -webkit-animation-name: shake; animation-name: shake; }
@-webkit-keyframes headShake {
0% {
-webkit-transform: translateX(0);
transform: translateX(0);
}
6.5% {
-webkit-transform: translateX(-6px) rotateY(-9deg);
transform: translateX(-6px) rotateY(-9deg);
}
18.5% {
-webkit-transform: translateX(5px) rotateY(7deg);
transform: translateX(5px) rotateY(7deg);
}
31.5% {
-webkit-transform: translateX(-3px) rotateY(-5deg);
transform: translateX(-3px) rotateY(-5deg);
}
43.5% {
-webkit-transform: translateX(2px) rotateY(3deg);
transform: translateX(2px) rotateY(3deg);
}
50% {
-webkit-transform: translateX(0);
transform: translateX(0);
}
}
@keyframes headShake {
0% {
-webkit-transform: translateX(0);
transform: translateX(0);
}
6.5% {
-webkit-transform: translateX(-6px) rotateY(-9deg);
transform: translateX(-6px) rotateY(-9deg);
}
18.5% {
-webkit-transform: translateX(5px) rotateY(7deg);
transform: translateX(5px) rotateY(7deg);
}
31.5% {
-webkit-transform: translateX(-3px) rotateY(-5deg);
transform: translateX(-3px) rotateY(-5deg);
}
43.5% {
-webkit-transform: translateX(2px) rotateY(3deg);
transform: translateX(2px) rotateY(3deg);
}
50% {
-webkit-transform: translateX(0);
transform: translateX(0);
}
}
.headShake { -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; -webkit-animation-name: headShake; animation-name: headShake; }
@-webkit-keyframes swing {
20% {
-webkit-transform: rotate3d(0, 0, 1, 15deg);
transform: rotate3d(0, 0, 1, 15deg);
}
40% {
-webkit-transform: rotate3d(0, 0, 1, -10deg);
transform: rotate3d(0, 0, 1, -10deg);
}
60% {
-webkit-transform: rotate3d(0, 0, 1, 5deg);
transform: rotate3d(0, 0, 1, 5deg);
}
80% {
-webkit-transform: rotate3d(0, 0, 1, -5deg);
transform: rotate3d(0, 0, 1, -5deg);
}
to {
-webkit-transform: rotate3d(0, 0, 1, 0deg);
transform: rotate3d(0, 0, 1, 0deg);
}
}
@keyframes swing {
20% {
-webkit-transform: rotate3d(0, 0, 1, 15deg);
transform: rotate3d(0, 0, 1, 15deg);
}
40% {
-webkit-transform: rotate3d(0, 0, 1, -10deg);
transform: rotate3d(0, 0, 1, -10deg);
}
60% {
-webkit-transform: rotate3d(0, 0, 1, 5deg);
transform: rotate3d(0, 0, 1, 5deg);
}
80% {
-webkit-transform: rotate3d(0, 0, 1, -5deg);
transform: rotate3d(0, 0, 1, -5deg);
}
to {
-webkit-transform: rotate3d(0, 0, 1, 0deg);
transform: rotate3d(0, 0, 1, 0deg);
}
}
.swing { -webkit-transform-origin: top center; transform-origin: top center; -webkit-animation-name: swing; animation-name: swing; }
@-webkit-keyframes tada {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
10%, 20% {
-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}
30%, 50%, 70%, 90% {
-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}
40%, 60%, 80% {
-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes tada {
from {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
10%, 20% {
-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}
30%, 50%, 70%, 90% {
-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}
40%, 60%, 80% {
-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}
to {
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
.tada { -webkit-animation-name: tada; animation-name: tada; }

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
15% {
-webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
30% {
-webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
45% {
-webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
60% {
-webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
75% {
-webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes wobble {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
15% {
-webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
30% {
-webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
45% {
-webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
60% {
-webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
75% {
-webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.wobble { -webkit-animation-name: wobble; animation-name: wobble; }
@-webkit-keyframes jello {
from, 11.1%, to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
22.2% {
-webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
transform: skewX(-12.5deg) skewY(-12.5deg);
}
33.3% {
-webkit-transform: skewX(6.25deg) skewY(6.25deg);
transform: skewX(6.25deg) skewY(6.25deg);
}
44.4% {
-webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
transform: skewX(-3.125deg) skewY(-3.125deg);
}
55.5% {
-webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
transform: skewX(1.5625deg) skewY(1.5625deg);
}
66.6% {
-webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
transform: skewX(-0.78125deg) skewY(-0.78125deg);
}
77.7% {
-webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
transform: skewX(0.390625deg) skewY(0.390625deg);
}
88.8% {
-webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
}
@keyframes jello {
from, 11.1%, to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
22.2% {
-webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
transform: skewX(-12.5deg) skewY(-12.5deg);
}
33.3% {
-webkit-transform: skewX(6.25deg) skewY(6.25deg);
transform: skewX(6.25deg) skewY(6.25deg);
}
44.4% {
-webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
transform: skewX(-3.125deg) skewY(-3.125deg);
}
55.5% {
-webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
transform: skewX(1.5625deg) skewY(1.5625deg);
}
66.6% {
-webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
transform: skewX(-0.78125deg) skewY(-0.78125deg);
}
77.7% {
-webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
transform: skewX(0.390625deg) skewY(0.390625deg);
}
88.8% {
-webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
}
.jello { -webkit-animation-name: jello; animation-name: jello; -webkit-transform-origin: center; transform-origin: center; }
@-webkit-keyframes heartBeat {
0% {
-webkit-transform: scale(1);
transform: scale(1);
}
14% {
-webkit-transform: scale(1.3);
transform: scale(1.3);
}
28% {
-webkit-transform: scale(1);
transform: scale(1);
}
42% {
-webkit-transform: scale(1.3);
transform: scale(1.3);
}
70% {
-webkit-transform: scale(1);
transform: scale(1);
}
}
@keyframes heartBeat {
0% {
-webkit-transform: scale(1);
transform: scale(1);
}
14% {
-webkit-transform: scale(1.3);
transform: scale(1.3);
}
28% {
-webkit-transform: scale(1);
transform: scale(1);
}
42% {
-webkit-transform: scale(1.3);
transform: scale(1.3);
}
70% {
-webkit-transform: scale(1);
transform: scale(1);
}
}
.heartBeat { -webkit-animation-name: heartBeat; animation-name: heartBeat; -webkit-animation-duration: 1.3s; animation-duration: 1.3s; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }
@-webkit-keyframes bounceIn {
from, 20%, 40%, 60%, 80%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
20% {
-webkit-transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
}
40% {
-webkit-transform: scale3d(0.9, 0.9, 0.9);
transform: scale3d(0.9, 0.9, 0.9);
}
60% {
opacity: 1;
-webkit-transform: scale3d(1.03, 1.03, 1.03);
transform: scale3d(1.03, 1.03, 1.03);
}
80% {
-webkit-transform: scale3d(0.97, 0.97, 0.97);
transform: scale3d(0.97, 0.97, 0.97);
}
to {
opacity: 1;
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
@keyframes bounceIn {
from, 20%, 40%, 60%, 80%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
20% {
-webkit-transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
}
40% {
-webkit-transform: scale3d(0.9, 0.9, 0.9);
transform: scale3d(0.9, 0.9, 0.9);
}
60% {
opacity: 1;
-webkit-transform: scale3d(1.03, 1.03, 1.03);
transform: scale3d(1.03, 1.03, 1.03);
}
80% {
-webkit-transform: scale3d(0.97, 0.97, 0.97);
transform: scale3d(0.97, 0.97, 0.97);
}
to {
opacity: 1;
-webkit-transform: scale3d(1, 1, 1);
transform: scale3d(1, 1, 1);
}
}
.bounceIn { -webkit-animation-duration: 0.75s; animation-duration: 0.75s; -webkit-animation-name: bounceIn; animation-name: bounceIn; }
@-webkit-keyframes bounceInDown {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: translate3d(0, -3000px, 0);
transform: translate3d(0, -3000px, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(0, 25px, 0);
transform: translate3d(0, 25px, 0);
}
75% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}
90% {
-webkit-transform: translate3d(0, 5px, 0);
transform: translate3d(0, 5px, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInDown {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: translate3d(0, -3000px, 0);
transform: translate3d(0, -3000px, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(0, 25px, 0);
transform: translate3d(0, 25px, 0);
}
75% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}
90% {
-webkit-transform: translate3d(0, 5px, 0);
transform: translate3d(0, 5px, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.bounceInDown { -webkit-animation-name: bounceInDown; animation-name: bounceInDown; }
@-webkit-keyframes bounceInLeft {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: translate3d(-3000px, 0, 0);
transform: translate3d(-3000px, 0, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(25px, 0, 0);
transform: translate3d(25px, 0, 0);
}
75% {
-webkit-transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
}
90% {
-webkit-transform: translate3d(5px, 0, 0);
transform: translate3d(5px, 0, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInLeft {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
-webkit-transform: translate3d(-3000px, 0, 0);
transform: translate3d(-3000px, 0, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(25px, 0, 0);
transform: translate3d(25px, 0, 0);
}
75% {
-webkit-transform: translate3d(-10px, 0, 0);
transform: translate3d(-10px, 0, 0);
}
90% {
-webkit-transform: translate3d(5px, 0, 0);
transform: translate3d(5px, 0, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.bounceInLeft { -webkit-animation-name: bounceInLeft; animation-name: bounceInLeft; }
@-webkit-keyframes bounceInRight {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
-webkit-transform: translate3d(3000px, 0, 0);
transform: translate3d(3000px, 0, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(-25px, 0, 0);
transform: translate3d(-25px, 0, 0);
}
75% {
-webkit-transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
}
90% {
-webkit-transform: translate3d(-5px, 0, 0);
transform: translate3d(-5px, 0, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInRight {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
-webkit-transform: translate3d(3000px, 0, 0);
transform: translate3d(3000px, 0, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(-25px, 0, 0);
transform: translate3d(-25px, 0, 0);
}
75% {
-webkit-transform: translate3d(10px, 0, 0);
transform: translate3d(10px, 0, 0);
}
90% {
-webkit-transform: translate3d(-5px, 0, 0);
transform: translate3d(-5px, 0, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.bounceInRight { -webkit-animation-name: bounceInRight; animation-name: bounceInRight; }
@-webkit-keyframes bounceInUp {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
-webkit-transform: translate3d(0, 3000px, 0);
transform: translate3d(0, 3000px, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
}
75% {
-webkit-transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
}
90% {
-webkit-transform: translate3d(0, -5px, 0);
transform: translate3d(0, -5px, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInUp {
from, 60%, 75%, 90%, to {
-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
-webkit-transform: translate3d(0, 3000px, 0);
transform: translate3d(0, 3000px, 0);
}
60% {
opacity: 1;
-webkit-transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
}
75% {
-webkit-transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
}
90% {
-webkit-transform: translate3d(0, -5px, 0);
transform: translate3d(0, -5px, 0);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.bounceInUp { -webkit-animation-name: bounceInUp; animation-name: bounceInUp; }
@-webkit-keyframes bounceOut {
20% {
-webkit-transform: scale3d(0.9, 0.9, 0.9);
transform: scale3d(0.9, 0.9, 0.9);
}
50%, 55% {
opacity: 1;
-webkit-transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
}
@keyframes bounceOut {
20% {
-webkit-transform: scale3d(0.9, 0.9, 0.9);
transform: scale3d(0.9, 0.9, 0.9);
}
50%, 55% {
opacity: 1;
-webkit-transform: scale3d(1.1, 1.1, 1.1);
transform: scale3d(1.1, 1.1, 1.1);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
}
.bounceOut { -webkit-animation-duration: 0.75s; animation-duration: 0.75s; -webkit-animation-name: bounceOut; animation-name: bounceOut; }
@-webkit-keyframes bounceOutDown {
20% {
-webkit-transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
}
40%, 45% {
opacity: 1;
-webkit-transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
}
@keyframes bounceOutDown {
20% {
-webkit-transform: translate3d(0, 10px, 0);
transform: translate3d(0, 10px, 0);
}
40%, 45% {
opacity: 1;
-webkit-transform: translate3d(0, -20px, 0);
transform: translate3d(0, -20px, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
}
.bounceOutDown { -webkit-animation-name: bounceOutDown; animation-name: bounceOutDown; }
@-webkit-keyframes bounceOutLeft {
20% {
opacity: 1;
-webkit-transform: translate3d(20px, 0, 0);
transform: translate3d(20px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
}
@keyframes bounceOutLeft {
20% {
opacity: 1;
-webkit-transform: translate3d(20px, 0, 0);
transform: translate3d(20px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
}
.bounceOutLeft { -webkit-animation-name: bounceOutLeft; animation-name: bounceOutLeft; }
@-webkit-keyframes bounceOutRight {
20% {
opacity: 1;
-webkit-transform: translate3d(-20px, 0, 0);
transform: translate3d(-20px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
}
@keyframes bounceOutRight {
20% {
opacity: 1;
-webkit-transform: translate3d(-20px, 0, 0);
transform: translate3d(-20px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
}
.bounceOutRight { -webkit-animation-name: bounceOutRight; animation-name: bounceOutRight; }
@-webkit-keyframes bounceOutUp {
20% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}
40%, 45% {
opacity: 1;
-webkit-transform: translate3d(0, 20px, 0);
transform: translate3d(0, 20px, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
}
@keyframes bounceOutUp {
20% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}
40%, 45% {
opacity: 1;
-webkit-transform: translate3d(0, 20px, 0);
transform: translate3d(0, 20px, 0);
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
}
.bounceOutUp { -webkit-animation-name: bounceOutUp; animation-name: bounceOutUp; }
@-webkit-keyframes fadeIn {
from {
opacity: 0;
}
to {
opacity: 1;
}
}
@keyframes fadeIn {
from {
opacity: 0;
}
to {
opacity: 1;
}
}
.fadeIn { -webkit-animation-name: fadeIn; animation-name: fadeIn; }
@-webkit-keyframes fadeInDown {
from {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInDown {
from {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInDown { -webkit-animation-name: fadeInDown; animation-name: fadeInDown; }
@-webkit-keyframes fadeInDownBig {
from {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInDownBig {
from {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInDownBig { -webkit-animation-name: fadeInDownBig; animation-name: fadeInDownBig; }
@-webkit-keyframes fadeInLeft {
from {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInLeft {
from {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInLeft { -webkit-animation-name: fadeInLeft; animation-name: fadeInLeft; }
@-webkit-keyframes fadeInLeftBig {
from {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInLeftBig {
from {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInLeftBig { -webkit-animation-name: fadeInLeftBig; animation-name: fadeInLeftBig; }
@-webkit-keyframes fadeInRight {
from {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInRight {
from {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInRight { -webkit-animation-name: fadeInRight; animation-name: fadeInRight; }
@-webkit-keyframes fadeInRightBig {
from {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInRightBig {
from {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInRightBig { -webkit-animation-name: fadeInRightBig; animation-name: fadeInRightBig; }
@-webkit-keyframes fadeInUp {
from {
opacity: 0;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInUp {
from {
opacity: 0;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInUp { -webkit-animation-name: fadeInUp; animation-name: fadeInUp; }
@-webkit-keyframes fadeInUpBig {
from {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInUpBig {
from {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.fadeInUpBig { -webkit-animation-name: fadeInUpBig; animation-name: fadeInUpBig; }
@-webkit-keyframes fadeOut {
from {
opacity: 1;
}
to {
opacity: 0;
}
}
@keyframes fadeOut {
from {
opacity: 1;
}
to {
opacity: 0;
}
}
.fadeOut { -webkit-animation-name: fadeOut; animation-name: fadeOut; }
@-webkit-keyframes fadeOutDown {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
}
@keyframes fadeOutDown {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
}
.fadeOutDown { -webkit-animation-name: fadeOutDown; animation-name: fadeOutDown; }
@-webkit-keyframes fadeOutDownBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
}
@keyframes fadeOutDownBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, 2000px, 0);
transform: translate3d(0, 2000px, 0);
}
}
.fadeOutDownBig { -webkit-animation-name: fadeOutDownBig; animation-name: fadeOutDownBig; }
@-webkit-keyframes fadeOutLeft {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
}
@keyframes fadeOutLeft {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
}
.fadeOutLeft { -webkit-animation-name: fadeOutLeft; animation-name: fadeOutLeft; }
@-webkit-keyframes fadeOutLeftBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
}
@keyframes fadeOutLeftBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(-2000px, 0, 0);
transform: translate3d(-2000px, 0, 0);
}
}
.fadeOutLeftBig { -webkit-animation-name: fadeOutLeftBig; animation-name: fadeOutLeftBig; }
@-webkit-keyframes fadeOutRight {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
}
@keyframes fadeOutRight {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
}
.fadeOutRight { -webkit-animation-name: fadeOutRight; animation-name: fadeOutRight; }
@-webkit-keyframes fadeOutRightBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
}
@keyframes fadeOutRightBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(2000px, 0, 0);
transform: translate3d(2000px, 0, 0);
}
}
.fadeOutRightBig { -webkit-animation-name: fadeOutRightBig; animation-name: fadeOutRightBig; }
@-webkit-keyframes fadeOutUp {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
}
@keyframes fadeOutUp {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
}
.fadeOutUp { -webkit-animation-name: fadeOutUp; animation-name: fadeOutUp; }
@-webkit-keyframes fadeOutUpBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
}
@keyframes fadeOutUpBig {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(0, -2000px, 0);
transform: translate3d(0, -2000px, 0);
}
}
.fadeOutUpBig { -webkit-animation-name: fadeOutUpBig; animation-name: fadeOutUpBig; }
@-webkit-keyframes flip {
from {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
40% {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
50% {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
80% {
-webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
to {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
}
@keyframes flip {
from {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
40% {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
}
50% {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
80% {
-webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
to {
-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
}
.animated.flip { -webkit-backface-visibility: visible; backface-visibility: visible; -webkit-animation-name: flip; animation-name: flip; }
@-webkit-keyframes flipInX {
from {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
opacity: 0;
}
40% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
60% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
opacity: 1;
}
80% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
}
to {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
}
@keyframes flipInX {
from {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
opacity: 0;
}
40% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
60% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
opacity: 1;
}
80% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
}
to {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
}
.flipInX { -webkit-backface-visibility: visible !important; backface-visibility: visible !important; -webkit-animation-name: flipInX; animation-name: flipInX; }
@-webkit-keyframes flipInY {
from {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
opacity: 0;
}
40% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
60% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
opacity: 1;
}
80% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
}
to {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
}
@keyframes flipInY {
from {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
opacity: 0;
}
40% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
-webkit-animation-timing-function: ease-in;
animation-timing-function: ease-in;
}
60% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
opacity: 1;
}
80% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
}
to {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
}
.flipInY { -webkit-backface-visibility: visible !important; backface-visibility: visible !important; -webkit-animation-name: flipInY; animation-name: flipInY; }
@-webkit-keyframes flipOutX {
from {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
30% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
opacity: 1;
}
to {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
}
}
@keyframes flipOutX {
from {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
30% {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
opacity: 1;
}
to {
-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
}
}
.flipOutX { -webkit-animation-duration: 0.75s; animation-duration: 0.75s; -webkit-animation-name: flipOutX; animation-name: flipOutX; -webkit-backface-visibility: visible !important; backface-visibility: visible !important; }
@-webkit-keyframes flipOutY {
from {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
30% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
opacity: 1;
}
to {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
}
}
@keyframes flipOutY {
from {
-webkit-transform: perspective(400px);
transform: perspective(400px);
}
30% {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
opacity: 1;
}
to {
-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
}
}
.flipOutY { -webkit-animation-duration: 0.75s; animation-duration: 0.75s; -webkit-backface-visibility: visible !important; backface-visibility: visible !important; -webkit-animation-name: flipOutY; animation-name: flipOutY; }
@-webkit-keyframes lightSpeedIn {
from {
-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
transform: translate3d(100%, 0, 0) skewX(-30deg);
opacity: 0;
}
60% {
-webkit-transform: skewX(20deg);
transform: skewX(20deg);
opacity: 1;
}
80% {
-webkit-transform: skewX(-5deg);
transform: skewX(-5deg);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes lightSpeedIn {
from {
-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
transform: translate3d(100%, 0, 0) skewX(-30deg);
opacity: 0;
}
60% {
-webkit-transform: skewX(20deg);
transform: skewX(20deg);
opacity: 1;
}
80% {
-webkit-transform: skewX(-5deg);
transform: skewX(-5deg);
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.lightSpeedIn { -webkit-animation-name: lightSpeedIn; animation-name: lightSpeedIn; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
@-webkit-keyframes lightSpeedOut {
from {
opacity: 1;
}
to {
-webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
transform: translate3d(100%, 0, 0) skewX(30deg);
opacity: 0;
}
}
@keyframes lightSpeedOut {
from {
opacity: 1;
}
to {
-webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
transform: translate3d(100%, 0, 0) skewX(30deg);
opacity: 0;
}
}
.lightSpeedOut { -webkit-animation-name: lightSpeedOut; animation-name: lightSpeedOut; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; }
@-webkit-keyframes rotateIn {
from {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: rotate3d(0, 0, 1, -200deg);
transform: rotate3d(0, 0, 1, -200deg);
opacity: 0;
}
to {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateIn {
from {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: rotate3d(0, 0, 1, -200deg);
transform: rotate3d(0, 0, 1, -200deg);
opacity: 0;
}
to {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
.rotateIn { -webkit-animation-name: rotateIn; animation-name: rotateIn; }
@-webkit-keyframes rotateInDownLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInDownLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
.rotateInDownLeft { -webkit-animation-name: rotateInDownLeft; animation-name: rotateInDownLeft; }
@-webkit-keyframes rotateInDownRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInDownRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
.rotateInDownRight { -webkit-animation-name: rotateInDownRight; animation-name: rotateInDownRight; }
@-webkit-keyframes rotateInUpLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInUpLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
.rotateInUpLeft { -webkit-animation-name: rotateInUpLeft; animation-name: rotateInUpLeft; }
@-webkit-keyframes rotateInUpRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, -90deg);
transform: rotate3d(0, 0, 1, -90deg);
opacity: 0;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInUpRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, -90deg);
transform: rotate3d(0, 0, 1, -90deg);
opacity: 0;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
.rotateInUpRight { -webkit-animation-name: rotateInUpRight; animation-name: rotateInUpRight; }
@-webkit-keyframes rotateOut {
from {
-webkit-transform-origin: center;
transform-origin: center;
opacity: 1;
}
to {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: rotate3d(0, 0, 1, 200deg);
transform: rotate3d(0, 0, 1, 200deg);
opacity: 0;
}
}
@keyframes rotateOut {
from {
-webkit-transform-origin: center;
transform-origin: center;
opacity: 1;
}
to {
-webkit-transform-origin: center;
transform-origin: center;
-webkit-transform: rotate3d(0, 0, 1, 200deg);
transform: rotate3d(0, 0, 1, 200deg);
opacity: 0;
}
}
.rotateOut { -webkit-animation-name: rotateOut; animation-name: rotateOut; }
@-webkit-keyframes rotateOutDownLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
opacity: 1;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
}
@keyframes rotateOutDownLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
opacity: 1;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, 45deg);
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
}
.rotateOutDownLeft { -webkit-animation-name: rotateOutDownLeft; animation-name: rotateOutDownLeft; }
@-webkit-keyframes rotateOutDownRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
opacity: 1;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
@keyframes rotateOutDownRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
opacity: 1;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
.rotateOutDownRight { -webkit-animation-name: rotateOutDownRight; animation-name: rotateOutDownRight; }
@-webkit-keyframes rotateOutUpLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
opacity: 1;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
@keyframes rotateOutUpLeft {
from {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
opacity: 1;
}
to {
-webkit-transform-origin: left bottom;
transform-origin: left bottom;
-webkit-transform: rotate3d(0, 0, 1, -45deg);
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
.rotateOutUpLeft { -webkit-animation-name: rotateOutUpLeft; animation-name: rotateOutUpLeft; }
@-webkit-keyframes rotateOutUpRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
opacity: 1;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, 90deg);
transform: rotate3d(0, 0, 1, 90deg);
opacity: 0;
}
}
@keyframes rotateOutUpRight {
from {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
opacity: 1;
}
to {
-webkit-transform-origin: right bottom;
transform-origin: right bottom;
-webkit-transform: rotate3d(0, 0, 1, 90deg);
transform: rotate3d(0, 0, 1, 90deg);
opacity: 0;
}
}
.rotateOutUpRight { -webkit-animation-name: rotateOutUpRight; animation-name: rotateOutUpRight; }
@-webkit-keyframes hinge {
0% {
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
}
20%, 60% {
-webkit-transform: rotate3d(0, 0, 1, 80deg);
transform: rotate3d(0, 0, 1, 80deg);
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
}
40%, 80% {
-webkit-transform: rotate3d(0, 0, 1, 60deg);
transform: rotate3d(0, 0, 1, 60deg);
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
opacity: 1;
}
to {
-webkit-transform: translate3d(0, 700px, 0);
transform: translate3d(0, 700px, 0);
opacity: 0;
}
}
@keyframes hinge {
0% {
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
}
20%, 60% {
-webkit-transform: rotate3d(0, 0, 1, 80deg);
transform: rotate3d(0, 0, 1, 80deg);
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
}
40%, 80% {
-webkit-transform: rotate3d(0, 0, 1, 60deg);
transform: rotate3d(0, 0, 1, 60deg);
-webkit-transform-origin: top left;
transform-origin: top left;
-webkit-animation-timing-function: ease-in-out;
animation-timing-function: ease-in-out;
opacity: 1;
}
to {
-webkit-transform: translate3d(0, 700px, 0);
transform: translate3d(0, 700px, 0);
opacity: 0;
}
}
.hinge { -webkit-animation-duration: 2s; animation-duration: 2s; -webkit-animation-name: hinge; animation-name: hinge; }
@-webkit-keyframes jackInTheBox {
from {
opacity: 0;
-webkit-transform: scale(0.1) rotate(30deg);
transform: scale(0.1) rotate(30deg);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
}
50% {
-webkit-transform: rotate(-10deg);
transform: rotate(-10deg);
}
70% {
-webkit-transform: rotate(3deg);
transform: rotate(3deg);
}
to {
opacity: 1;
-webkit-transform: scale(1);
transform: scale(1);
}
}
@keyframes jackInTheBox {
from {
opacity: 0;
-webkit-transform: scale(0.1) rotate(30deg);
transform: scale(0.1) rotate(30deg);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
}
50% {
-webkit-transform: rotate(-10deg);
transform: rotate(-10deg);
}
70% {
-webkit-transform: rotate(3deg);
transform: rotate(3deg);
}
to {
opacity: 1;
-webkit-transform: scale(1);
transform: scale(1);
}
}
.jackInTheBox { -webkit-animation-name: jackInTheBox; animation-name: jackInTheBox; }

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
from {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes rollIn {
from {
opacity: 0;
-webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
}
to {
opacity: 1;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.rollIn { -webkit-animation-name: rollIn; animation-name: rollIn; }

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}
@keyframes rollOut {
from {
opacity: 1;
}
to {
opacity: 0;
-webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}
.rollOut { -webkit-animation-name: rollOut; animation-name: rollOut; }
@-webkit-keyframes zoomIn {
from {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
50% {
opacity: 1;
}
}
@keyframes zoomIn {
from {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
50% {
opacity: 1;
}
}
.zoomIn { -webkit-animation-name: zoomIn; animation-name: zoomIn; }
@-webkit-keyframes zoomInDown {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInDown {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInDown { -webkit-animation-name: zoomInDown; animation-name: zoomInDown; }
@-webkit-keyframes zoomInLeft {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInLeft {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInLeft { -webkit-animation-name: zoomInLeft; animation-name: zoomInLeft; }
@-webkit-keyframes zoomInRight {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInRight {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInRight { -webkit-animation-name: zoomInRight; animation-name: zoomInRight; }
@-webkit-keyframes zoomInUp {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInUp {
from {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomInUp { -webkit-animation-name: zoomInUp; animation-name: zoomInUp; }
@-webkit-keyframes zoomOut {
from {
opacity: 1;
}
50% {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
to {
opacity: 0;
}
}
@keyframes zoomOut {
from {
opacity: 1;
}
50% {
opacity: 0;
-webkit-transform: scale3d(0.3, 0.3, 0.3);
transform: scale3d(0.3, 0.3, 0.3);
}
to {
opacity: 0;
}
}
.zoomOut { -webkit-animation-name: zoomOut; animation-name: zoomOut; }
@-webkit-keyframes zoomOutDown {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutDown {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomOutDown { -webkit-animation-name: zoomOutDown; animation-name: zoomOutDown; }
@-webkit-keyframes zoomOutLeft {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
transform: scale(0.1) translate3d(-2000px, 0, 0);
-webkit-transform-origin: left center;
transform-origin: left center;
}
}
@keyframes zoomOutLeft {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
transform: scale(0.1) translate3d(-2000px, 0, 0);
-webkit-transform-origin: left center;
transform-origin: left center;
}
}
.zoomOutLeft { -webkit-animation-name: zoomOutLeft; animation-name: zoomOutLeft; }
@-webkit-keyframes zoomOutRight {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
transform: scale(0.1) translate3d(2000px, 0, 0);
-webkit-transform-origin: right center;
transform-origin: right center;
}
}
@keyframes zoomOutRight {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}
to {
opacity: 0;
-webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
transform: scale(0.1) translate3d(2000px, 0, 0);
-webkit-transform-origin: right center;
transform-origin: right center;
}
}
.zoomOutRight { -webkit-animation-name: zoomOutRight; animation-name: zoomOutRight; }
@-webkit-keyframes zoomOutUp {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutUp {
40% {
opacity: 1;
-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
to {
opacity: 0;
-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
-webkit-transform-origin: center bottom;
transform-origin: center bottom;
-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
.zoomOutUp { -webkit-animation-name: zoomOutUp; animation-name: zoomOutUp; }
@-webkit-keyframes slideInDown {
from {
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInDown {
from {
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.slideInDown { -webkit-animation-name: slideInDown; animation-name: slideInDown; }
@-webkit-keyframes slideInLeft {
from {
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInLeft {
from {
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.slideInLeft { -webkit-animation-name: slideInLeft; animation-name: slideInLeft; }
@-webkit-keyframes slideInRight {
from {
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInRight {
from {
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.slideInRight { -webkit-animation-name: slideInRight; animation-name: slideInRight; }
@-webkit-keyframes slideInUp {
from {
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInUp {
from {
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
visibility: visible;
}
to {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
}
.slideInUp { -webkit-animation-name: slideInUp; animation-name: slideInUp; }
@-webkit-keyframes slideOutDown {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
}
@keyframes slideOutDown {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(0, 100%, 0);
transform: translate3d(0, 100%, 0);
}
}
.slideOutDown { -webkit-animation-name: slideOutDown; animation-name: slideOutDown; }
@-webkit-keyframes slideOutLeft {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
}
@keyframes slideOutLeft {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
}
.slideOutLeft { -webkit-animation-name: slideOutLeft; animation-name: slideOutLeft; }
@-webkit-keyframes slideOutRight {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
}
@keyframes slideOutRight {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);
}
}
.slideOutRight { -webkit-animation-name: slideOutRight; animation-name: slideOutRight; }
@-webkit-keyframes slideOutUp {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
}
@keyframes slideOutUp {
from {
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
}
.slideOutUp { -webkit-animation-name: slideOutUp; animation-name: slideOutUp; }
.animated { -webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
.animated.infinite { -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite; }
.animated.delay-1s { -webkit-animation-delay: 1s; animation-delay: 1s; }
.animated.delay-2s { -webkit-animation-delay: 2s; animation-delay: 2s; }
.animated.delay-3s { -webkit-animation-delay: 3s; animation-delay: 3s; }
.animated.delay-4s { -webkit-animation-delay: 4s; animation-delay: 4s; }
.animated.delay-5s { -webkit-animation-delay: 5s; animation-delay: 5s; }
.animated.fast { -webkit-animation-duration: 800ms; animation-duration: 800ms; }
.animated.faster { -webkit-animation-duration: 500ms; animation-duration: 500ms; }
.animated.slow { -webkit-animation-duration: 2s; animation-duration: 2s; }
.animated.slower { -webkit-animation-duration: 3s; animation-duration: 3s; }

@media (print), (prefers-reduced-motion: reduce) {
.animated { -webkit-animation-duration: 1ms !important; animation-duration: 1ms !important; -webkit-transition-duration: 1ms !important; transition-duration: 1ms !important; -webkit-animation-iteration-count: 1 !important; animation-iteration-count: 1 !important; }
}
/*----------------------------------------*/
/*===== Animated Headline =====*/
/*----------------------------------------*/
.dtr-words-wrapper { display: inline-block; position: relative; text-align: left; }
.dtr-words-wrapper b { display: inline-block; position: absolute; white-space: nowrap; left: 0; top: 0; font-weight: inherit; }
.dtr-words-wrapper b.is-visible { position: relative; }
.no-js .dtr-words-wrapper b { opacity: 0; }
.no-js .dtr-words-wrapper b.is-visible { opacity: 1; }
/*===== rotate-1 =====*/
.dtr-animated-headline.rotate-1 .dtr-words-wrapper { -webkit-perspective: 300px; -moz-perspective: 300px; perspective: 300px; }
.dtr-animated-headline.rotate-1 b { opacity: 0; -webkit-transform-origin: 50% 100%; -moz-transform-origin: 50% 100%; -ms-transform-origin: 50% 100%; -o-transform-origin: 50% 100%; transform-origin: 50% 100%; -webkit-transform: rotateX(180deg); -moz-transform: rotateX(180deg); -ms-transform: rotateX(180deg); -o-transform: rotateX(180deg); transform: rotateX(180deg); }
.dtr-animated-headline.rotate-1 b.is-visible { opacity: 1; -webkit-transform: rotateX(0deg); -moz-transform: rotateX(0deg); -ms-transform: rotateX(0deg); -o-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-animation: dtr-rotate-1-in 1.2s; -moz-animation: dtr-rotate-1-in 1.2s; animation: dtr-rotate-1-in 1.2s; }
.dtr-animated-headline.rotate-1 b.is-hidden { -webkit-transform: rotateX(180deg); -moz-transform: rotateX(180deg); -ms-transform: rotateX(180deg); -o-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-animation: dtr-rotate-1-out 1.2s; -moz-animation: dtr-rotate-1-out 1.2s; animation: dtr-rotate-1-out 1.2s; }
/*===== xslide =====*/
.dtr-animated-headline.slide span { display: inline-block; padding: .0; }
.dtr-animated-headline.slide .dtr-words-wrapper { overflow: hidden; vertical-align: top; }
.dtr-animated-headline.slide b { opacity: 0; top: 0; }
.dtr-animated-headline.slide b.is-visible { top: 0; opacity: 1; -webkit-animation: slide-in 0.6s; -moz-animation: slide-in 0.6s; animation: slide-in 0.6s; }
.dtr-animated-headline.slide b.is-hidden { -webkit-animation: slide-out 0.6s; -moz-animation: slide-out 0.6s; animation: slide-out 0.6s; }
/*===== xpush =====*/
.dtr-animated-headline.push b { opacity: 0; }
.dtr-animated-headline.push b.is-visible { opacity: 1; -webkit-animation: push-in 0.6s; -moz-animation: push-in 0.6s; animation: push-in 0.6s; }
.dtr-animated-headline.push b.is-hidden { -webkit-animation: push-out 0.6s; -moz-animation: push-out 0.6s; animation: push-out 0.6s; }
/*===== zoom =====*/
.dtr-animated-headline.zoom .dtr-words-wrapper { -webkit-perspective: 300px; -moz-perspective: 300px; perspective: 300px; }
.dtr-animated-headline.zoom b { opacity: 0; }
.dtr-animated-headline.zoom b.is-visible { opacity: 1; -webkit-animation: zoom-in 0.8s; -moz-animation: zoom-in 0.8s; animation: zoom-in 0.8s; }
.dtr-animated-headline.zoom b.is-hidden { -webkit-animation: zoom-out 0.8s; -moz-animation: zoom-out 0.8s; animation: zoom-out 0.8s; }
/*===== rotate-1 =====*/
@-webkit-keyframes dtr-rotate-1-in {
0% {
-webkit-transform:rotateX(180deg);
opacity:0
}
35% {
-webkit-transform:rotateX(120deg);
opacity:0
}
65% {
opacity:0
}
100% {
-webkit-transform:rotateX(360deg);
opacity:1
}
}
@-moz-keyframes dtr-rotate-1-in {
0% {
-moz-transform:rotateX(180deg);
opacity:0
}
35% {
-moz-transform:rotateX(120deg);
opacity:0
}
65% {
opacity:0
}
100% {
-moz-transform:rotateX(360deg);
opacity:1
}
}
@keyframes dtr-rotate-1-in {
0% {
-webkit-transform:rotateX(180deg);
-moz-transform:rotateX(180deg);
-ms-transform:rotateX(180deg);
-o-transform:rotateX(180deg);
transform:rotateX(180deg);
opacity:0
}
35% {
-webkit-transform:rotateX(120deg);
-moz-transform:rotateX(120deg);
-ms-transform:rotateX(120deg);
-o-transform:rotateX(120deg);
transform:rotateX(120deg);
opacity:0
}
65% {
opacity:0
}
100% {
-webkit-transform:rotateX(360deg);
-moz-transform:rotateX(360deg);
-ms-transform:rotateX(360deg);
-o-transform:rotateX(360deg);
transform:rotateX(360deg);
opacity:1
}
}
@-webkit-keyframes dtr-rotate-1-out {
0% {
-webkit-transform:rotateX(0);
opacity:1
}
35% {
-webkit-transform:rotateX(-40deg);
opacity:1
}
65% {
opacity:0
}
100% {
-webkit-transform:rotateX(180deg);
opacity:0
}
}
@-moz-keyframes dtr-rotate-1-out {
0% {
-moz-transform:rotateX(0);
opacity:1
}
35% {
-moz-transform:rotateX(-40deg);
opacity:1
}
65% {
opacity:0
}
100% {
-moz-transform:rotateX(180deg);
opacity:0
}
}
@keyframes dtr-rotate-1-out {
0% {
-webkit-transform:rotateX(0);
-moz-transform:rotateX(0);
-ms-transform:rotateX(0);
-o-transform:rotateX(0);
transform:rotateX(0);
opacity:1
}
35% {
-webkit-transform:rotateX(-40deg);
-moz-transform:rotateX(-40deg);
-ms-transform:rotateX(-40deg);
-o-transform:rotateX(-40deg);
transform:rotateX(-40deg);
opacity:1
}
65% {
opacity:0
}
100% {
-webkit-transform:rotateX(180deg);
-moz-transform:rotateX(180deg);
-ms-transform:rotateX(180deg);
-o-transform:rotateX(180deg);
transform:rotateX(180deg);
opacity:0
}
}
/*===== xslide =====*/
@-webkit-keyframes slide-in {
0% {
opacity:0;
-webkit-transform:translateY(-100%)
}
60% {
opacity:1;
-webkit-transform:translateY(20%)
}
100% {
opacity:1;
-webkit-transform:translateY(0)
}
}
@-moz-keyframes slide-in {
0% {
opacity:0;
-moz-transform:translateY(-100%)
}
60% {
opacity:1;
-moz-transform:translateY(20%)
}
100% {
opacity:1;
-moz-transform:translateY(0)
}
}
@keyframes slide-in {
0% {
opacity:0;
-webkit-transform:translateY(-100%);
-moz-transform:translateY(-100%);
-ms-transform:translateY(-100%);
-o-transform:translateY(-100%);
transform:translateY(-100%)
}
60% {
opacity:1;
-webkit-transform:translateY(20%);
-moz-transform:translateY(20%);
-ms-transform:translateY(20%);
-o-transform:translateY(20%);
transform:translateY(20%)
}
100% {
opacity:1;
-webkit-transform:translateY(0);
-moz-transform:translateY(0);
-ms-transform:translateY(0);
-o-transform:translateY(0);
transform:translateY(0)
}
}
@-webkit-keyframes slide-out {
0% {
opacity:1;
-webkit-transform:translateY(0)
}
60% {
opacity:0;
-webkit-transform:translateY(120%)
}
100% {
opacity:0;
-webkit-transform:translateY(100%)
}
}
@-moz-keyframes slide-out {
0% {
opacity:1;
-moz-transform:translateY(0)
}
60% {
opacity:0;
-moz-transform:translateY(120%)
}
100% {
opacity:0;
-moz-transform:translateY(100%)
}
}
@keyframes slide-out {
0% {
opacity:1;
-webkit-transform:translateY(0);
-moz-transform:translateY(0);
-ms-transform:translateY(0);
-o-transform:translateY(0);
transform:translateY(0)
}
60% {
opacity:0;
-webkit-transform:translateY(120%);
-moz-transform:translateY(120%);
-ms-transform:translateY(120%);
-o-transform:translateY(120%);
transform:translateY(120%)
}
100% {
opacity:0;
-webkit-transform:translateY(100%);
-moz-transform:translateY(100%);
-ms-transform:translateY(100%);
-o-transform:translateY(100%);
transform:translateY(100%)
}
}
/*===== xpush =====*/
@-webkit-keyframes push-in {
0% {
opacity:0;
-webkit-transform:translateX(-100%)
}
60% {
opacity:1;
-webkit-transform:translateX(10%)
}
100% {
opacity:1;
-webkit-transform:translateX(0)
}
}
@-moz-keyframes push-in {
0% {
opacity:0;
-moz-transform:translateX(-100%)
}
60% {
opacity:1;
-moz-transform:translateX(10%)
}
100% {
opacity:1;
-moz-transform:translateX(0)
}
}
@keyframes push-in {
0% {
opacity:0;
-webkit-transform:translateX(-100%);
-moz-transform:translateX(-100%);
-ms-transform:translateX(-100%);
-o-transform:translateX(-100%);
transform:translateX(-100%)
}
60% {
opacity:1;
-webkit-transform:translateX(10%);
-moz-transform:translateX(10%);
-ms-transform:translateX(10%);
-o-transform:translateX(10%);
transform:translateX(10%)
}
100% {
opacity:1;
-webkit-transform:translateX(0);
-moz-transform:translateX(0);
-ms-transform:translateX(0);
-o-transform:translateX(0);
transform:translateX(0)
}
}
@-webkit-keyframes push-out {
0% {
opacity:1;
-webkit-transform:translateX(0)
}
60% {
opacity:0;
-webkit-transform:translateX(110%)
}
100% {
opacity:0;
-webkit-transform:translateX(100%)
}
}
@-moz-keyframes push-out {
0% {
opacity:1;
-moz-transform:translateX(0)
}
60% {
opacity:0;
-moz-transform:translateX(110%)
}
100% {
opacity:0;
-moz-transform:translateX(100%)
}
}
@keyframes push-out {
0% {
opacity:1;
-webkit-transform:translateX(0);
-moz-transform:translateX(0);
-ms-transform:translateX(0);
-o-transform:translateX(0);
transform:translateX(0)
}
60% {
opacity:0;
-webkit-transform:translateX(110%);
-moz-transform:translateX(110%);
-ms-transform:translateX(110%);
-o-transform:translateX(110%);
transform:translateX(110%)
}
100% {
opacity:0;
-webkit-transform:translateX(100%);
-moz-transform:translateX(100%);
-ms-transform:translateX(100%);
-o-transform:translateX(100%);
transform:translateX(100%)
}
}
/*===== zoom =====*/
@-webkit-keyframes zoom-in {
0% {
opacity:0;
-webkit-transform:translateZ(100px)
}
100% {
opacity:1;
-webkit-transform:translateZ(0)
}
}
@-moz-keyframes zoom-in {
0% {
opacity:0;
-moz-transform:translateZ(100px)
}
100% {
opacity:1;
-moz-transform:translateZ(0)
}
}
@keyframes zoom-in {
0% {
opacity:0;
-webkit-transform:translateZ(100px);
-moz-transform:translateZ(100px);
-ms-transform:translateZ(100px);
-o-transform:translateZ(100px);
transform:translateZ(100px)
}
100% {
opacity:1;
-webkit-transform:translateZ(0);
-moz-transform:translateZ(0);
-ms-transform:translateZ(0);
-o-transform:translateZ(0);
transform:translateZ(0)
}
}
@-webkit-keyframes zoom-out {
0% {
opacity:1;
-webkit-transform:translateZ(0)
}
100% {
opacity:0;
-webkit-transform:translateZ(-100px)
}
}
@-moz-keyframes zoom-out {
0% {
opacity:1;
-moz-transform:translateZ(0)
}
100% {
opacity:0;
-moz-transform:translateZ(-100px)
}
}
@keyframes zoom-out {
0% {
opacity:1;
-webkit-transform:translateZ(0);
-moz-transform:translateZ(0);
-ms-transform:translateZ(0);
-o-transform:translateZ(0);
transform:translateZ(0)
}
100% {
opacity:0;
-webkit-transform:translateZ(-100px);
-moz-transform:translateZ(-100px);
-ms-transform:translateZ(-100px);
-o-transform:translateZ(-100px);
transform:translateZ(-100px)
}
}
/*== arrowBounce ==*/
@-moz-keyframes arrowBounce {
0%, 100%, 20%, 50%, 80% {
-moz-transform:translateY(0);
transform:translateY(0)
}
40% {
-moz-transform:translateY(-10px);
transform:translateY(-10px)
}
60% {
-moz-transform:translateY(-5px);
transform:translateY(-5px)
}
}
@-webkit-keyframes arrowBounce {
0%, 100%, 20%, 50%, 80% {
-webkit-transform:translateY(0);
transform:translateY(0)
}
40% {
-webkit-transform:translateY(-10px);
transform:translateY(-10px)
}
60% {
-webkit-transform:translateY(-5px);
transform:translateY(-5px)
}
}
@keyframes arrowBounce {
0%, 100%, 20%, 50%, 80% {
-moz-transform:translateY(0);
-ms-transform:translateY(0);
-webkit-transform:translateY(0);
transform:translateY(0)
}
40% {
-moz-transform:translateY(-10px);
-ms-transform:translateY(-10px);
-webkit-transform:translateY(-10px);
transform:translateY(-10px)
}
60% {
-moz-transform:translateY(-5px);
-ms-transform:translateY(-5px);
-webkit-transform:translateY(-5px);
transform:translateY(-5px)
}
}
/*===== bootstrap dropdown =====*/
@keyframes dropdownSlideIn {
0% {
transform: translateY(1rem);
opacity: 0;
}
100% {
transform:translateY(0rem);
opacity: 1;
}
0% {
transform: translateY(1rem);
opacity: 0;
}
}
@-webkit-keyframes dropdownSlideIn {
0% {
-webkit-transform: transform;
-webkit-opacity: 0;
}
100% {
-webkit-transform: translateY(0);
-webkit-opacity: 1;
}
0% {
-webkit-transform: translateY(1rem);
-webkit-opacity: 0;
}
}
/*===== video-pulse =====*/
@-webkit-keyframes video-pulse {
0% {
-webkit-transform: scale(0.2, 0.2);
transform: scale(0.2, 0.2);
opacity: 0;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
50% {
opacity: 0.9;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
}
100% {
-webkit-transform: scale(0.9, 0.9);
transform: scale(0.9, 0.9);
opacity: 0;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
}
@keyframes video-pulse {
0% {
-webkit-transform: scale(0.2, 0.2);
transform: scale(0.2, 0.2);
opacity: 0;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
50% {
opacity: 0.9;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
}
100% {
-webkit-transform: scale(0.9, 0.9);
transform: scale(0.9, 0.9);
opacity: 0;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}
}

/*----------------------------------------*/
/*----- malihu jquery custom scrollbar plugin -----*/
/*----------------------------------------*/
/*
* http://manos.malihu.gr/jquery-custom-content-scroller
*/
/*
------------------------------------------------------------------------------------------------------------------------
1. BASIC STYLE
------------------------------------------------------------------------------------------------------------------------
*/
.mCustomScrollbar { -ms-touch-action: pinch-zoom; touch-action: pinch-zoom; /* direct pointer events to js */ }
.mCustomScrollbar.mCS_no_scrollbar, .mCustomScrollbar.mCS_touch_action { -ms-touch-action: auto; touch-action: auto; }
.mCustomScrollBox { /* contains plugin's markup */ position: relative; overflow: hidden; height: 100%; max-width: 100%; outline: none; direction: ltr; }
.mCSB_container { /* contains the original content */ overflow: hidden; width: auto; height: auto; }
/*
------------------------------------------------------------------------------------------------------------------------
2. VERTICAL SCROLLBAR
y-axis
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_inside > .mCSB_container { margin-right: 30px; }
.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden { margin-right: 0; } /* non-visible scrollbar */
.mCS-dir-rtl > .mCSB_inside > .mCSB_container { /* RTL direction/left-side scrollbar */ margin-right: 0; margin-left: 30px; }
.mCS-dir-rtl > .mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden { margin-left: 0; } /* RTL direction/left-side scrollbar */
.mCSB_scrollTools { /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */ position: absolute; width: 16px; height: auto; left: auto; top: 0; right: 0; bottom: 0; }
.mCSB_outside + .mCSB_scrollTools { right: -26px; } /* scrollbar position: outside */
.mCS-dir-rtl > .mCSB_inside > .mCSB_scrollTools, .mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools { /* RTL direction/left-side scrollbar */ right: auto; left: 0; }
.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools { left: -26px; } /* RTL direction/left-side scrollbar (scrollbar position: outside) */
.mCSB_scrollTools .mCSB_draggerContainer { /* contains the draggable element and dragger rail markup */ position: absolute; top: 0; left: 0; bottom: 0; right: 0; height: auto; }
.mCSB_scrollTools a + .mCSB_draggerContainer { margin: 20px 0; }
.mCSB_scrollTools .mCSB_draggerRail { width: 2px; height: 100%; margin: 0 auto; -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px; }
.mCSB_scrollTools .mCSB_dragger { /* the draggable element */ cursor: pointer; width: 100%; height: 30px; /* minimum dragger height */ z-index: 1; }
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { /* the dragger element */ position: relative; width: 4px; height: 100%; margin: 0 auto; -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px; text-align: center; }
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar { width: 12px; /* auto-expanded scrollbar */ }
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { width: 8px; /* auto-expanded scrollbar */ }
.mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown { display: block; position: absolute; height: 20px; width: 100%; overflow: hidden; margin: 0 auto; cursor: pointer; }
.mCSB_scrollTools .mCSB_buttonDown { bottom: 0; }
/*
------------------------------------------------------------------------------------------------------------------------
3. HORIZONTAL SCROLLBAR
x-axis
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_horizontal.mCSB_inside > .mCSB_container { margin-right: 0; margin-bottom: 30px; }
.mCSB_horizontal.mCSB_outside > .mCSB_container { min-height: 100%; }
.mCSB_horizontal > .mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden { margin-bottom: 0; } /* non-visible scrollbar */
.mCSB_scrollTools.mCSB_scrollTools_horizontal { width: auto; height: 16px; top: auto; right: 0; bottom: 0; left: 0; }
.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal, .mCustomScrollBox + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal { bottom: -26px; } /* scrollbar position: outside */
.mCSB_scrollTools.mCSB_scrollTools_horizontal a + .mCSB_draggerContainer { margin: 0 20px; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; height: 2px; margin: 7px 0; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger { width: 30px; /* minimum dragger width */ height: 100%; left: 0; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { width: 100%; height: 4px; margin: 6px auto; }
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar { height: 12px; /* auto-expanded scrollbar */ margin: 2px auto; }
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { height: 8px; /* auto-expanded scrollbar */ margin: 4px 0; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft, .mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight { display: block; position: absolute; width: 20px; height: 100%; overflow: hidden; margin: 0 auto; cursor: pointer; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft { left: 0; }
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight { right: 0; }
/*
------------------------------------------------------------------------------------------------------------------------
4. VERTICAL AND HORIZONTAL SCROLLBARS
yx-axis
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_container_wrapper { position: absolute; height: auto; width: auto; overflow: hidden; top: 0; left: 0; right: 0; bottom: 0; margin-right: 30px; margin-bottom: 30px; }
.mCSB_container_wrapper > .mCSB_container { padding-right: 30px; padding-bottom: 30px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_vertical { bottom: 20px; }
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_horizontal { right: 20px; }
/* non-visible horizontal scrollbar */
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden + .mCSB_scrollTools.mCSB_scrollTools_vertical { bottom: 0; }
/* non-visible vertical scrollbar/RTL direction/left-side scrollbar */
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal, .mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal { right: 0; }
/* RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal { left: 20px; }
/* non-visible scrollbar/RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal { left: 0; }
.mCS-dir-rtl > .mCSB_inside > .mCSB_container_wrapper { /* RTL direction/left-side scrollbar */ margin-right: 0; margin-left: 30px; }
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden > .mCSB_container { padding-right: 0; }
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden > .mCSB_container { padding-bottom: 0; }
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden { margin-right: 0; /* non-visible scrollbar */ margin-left: 0; }
/* non-visible horizontal scrollbar */
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden { margin-bottom: 0; }
/*
------------------------------------------------------------------------------------------------------------------------
5. TRANSITIONS
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_scrollTools, .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown, .mCSB_scrollTools .mCSB_buttonLeft, .mCSB_scrollTools .mCSB_buttonRight { -webkit-transition: opacity .2s ease-in-out, background-color .2s ease-in-out; -moz-transition: opacity .2s ease-in-out, background-color .2s ease-in-out; -o-transition: opacity .2s ease-in-out, background-color .2s ease-in-out; transition: opacity .2s ease-in-out, background-color .2s ease-in-out; }
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, /* auto-expanded scrollbar */ .mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail { -webkit-transition: width .2s ease-out .2s, height .2s ease-out .2s, margin-left .2s ease-out .2s, margin-right .2s ease-out .2s, margin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s, opacity .2s ease-in-out, background-color .2s ease-in-out; -moz-transition: width .2s ease-out .2s, height .2s ease-out .2s, margin-left .2s ease-out .2s, margin-right .2s ease-out .2s, margin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s, opacity .2s ease-in-out, background-color .2s ease-in-out; -o-transition: width .2s ease-out .2s, height .2s ease-out .2s, margin-left .2s ease-out .2s, margin-right .2s ease-out .2s, margin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s, opacity .2s ease-in-out, background-color .2s ease-in-out; transition: width .2s ease-out .2s, height .2s ease-out .2s, margin-left .2s ease-out .2s, margin-right .2s ease-out .2s, margin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s, opacity .2s ease-in-out, background-color .2s ease-in-out; }
/*
------------------------------------------------------------------------------------------------------------------------
6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS
------------------------------------------------------------------------------------------------------------------------
*/

 /*
 ----------------------------------------
 6.1 THEMES
 ----------------------------------------
 */

 /* default theme ("light") */
.mCSB_scrollTools { opacity: 0.75; filter: "alpha(opacity=75)"; -ms-filter: "alpha(opacity=75)"; }
.mCS-autoHide > .mCustomScrollBox > .mCSB_scrollTools, .mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools { opacity: 0; filter: "alpha(opacity=0)"; -ms-filter: "alpha(opacity=0)"; }
.mCustomScrollbar > .mCustomScrollBox > .mCSB_scrollTools.mCSB_scrollTools_onDrag, .mCustomScrollbar > .mCustomScrollBox ~ .mCSB_scrollTools.mCSB_scrollTools_onDrag, .mCustomScrollBox:hover > .mCSB_scrollTools, .mCustomScrollBox:hover ~ .mCSB_scrollTools, .mCS-autoHide:hover > .mCustomScrollBox > .mCSB_scrollTools, .mCS-autoHide:hover > .mCustomScrollBox ~ .mCSB_scrollTools { opacity: 1; filter: "alpha(opacity=100)"; -ms-filter: "alpha(opacity=100)"; }
.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.4); filter: "alpha(opacity=40)"; -ms-filter: "alpha(opacity=40)"; }
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.75); filter: "alpha(opacity=75)"; -ms-filter: "alpha(opacity=75)"; }
.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.85); filter: "alpha(opacity=85)"; -ms-filter: "alpha(opacity=85)"; }
.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.9); filter: "alpha(opacity=90)"; -ms-filter: "alpha(opacity=90)"; }
.mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown, .mCSB_scrollTools .mCSB_buttonLeft, .mCSB_scrollTools .mCSB_buttonRight { background-image: url(mCSB_buttons.png); /* css sprites */ background-repeat: no-repeat; opacity: 0.4; filter: "alpha(opacity=40)"; -ms-filter: "alpha(opacity=40)"; }
.mCSB_scrollTools .mCSB_buttonUp { background-position: 0 0;/*
   sprites locations
   light: 0 0, -16px 0, -32px 0, -48px 0, 0 -72px, -16px -72px, -32px -72px
   dark: -80px 0, -96px 0, -112px 0, -128px 0, -80px -72px, -96px -72px, -112px -72px
   */ }
.mCSB_scrollTools .mCSB_buttonDown { background-position: 0 -20px;/*
   sprites locations
   light: 0 -20px, -16px -20px, -32px -20px, -48px -20px, 0 -92px, -16px -92px, -32px -92px
   dark: -80px -20px, -96px -20px, -112px -20px, -128px -20px, -80px -92px, -96px -92px, -112 -92px
   */ }
.mCSB_scrollTools .mCSB_buttonLeft { background-position: 0 -40px;/*
   sprites locations
   light: 0 -40px, -20px -40px, -40px -40px, -60px -40px, 0 -112px, -20px -112px, -40px -112px
   dark: -80px -40px, -100px -40px, -120px -40px, -140px -40px, -80px -112px, -100px -112px, -120px -112px
   */ }
.mCSB_scrollTools .mCSB_buttonRight { background-position: 0 -56px;/*
   sprites locations
   light: 0 -56px, -20px -56px, -40px -56px, -60px -56px, 0 -128px, -20px -128px, -40px -128px
   dark: -80px -56px, -100px -56px, -120px -56px, -140px -56px, -80px -128px, -100px -128px, -120px -128px
   */ }
.mCSB_scrollTools .mCSB_buttonUp:hover, .mCSB_scrollTools .mCSB_buttonDown:hover, .mCSB_scrollTools .mCSB_buttonLeft:hover, .mCSB_scrollTools .mCSB_buttonRight:hover { opacity: 0.75; filter: "alpha(opacity=75)"; -ms-filter: "alpha(opacity=75)"; }
.mCSB_scrollTools .mCSB_buttonUp:active, .mCSB_scrollTools .mCSB_buttonDown:active, .mCSB_scrollTools .mCSB_buttonLeft:active, .mCSB_scrollTools .mCSB_buttonRight:active { opacity: 0.9; filter: "alpha(opacity=90)"; -ms-filter: "alpha(opacity=90)"; }
/* theme: "dark" */

.mCS-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.15); }
.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: rgba(0,0,0,0.85); }
.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: rgba(0,0,0,0.9); }
.mCS-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -80px 0; }
.mCS-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -80px -20px; }
.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -80px -40px; }
.mCS-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -80px -56px; }
/* ---------------------------------------- */
 /* theme: "light-2", "dark-2" */
.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail, .mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail { width: 4px; background-color: #fff; background-color: rgba(255,255,255,0.1); -webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px; }
.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 4px; background-color: #fff; background-color: rgba(255,255,255,0.75); -webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px; }
.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { width: 100%; height: 4px; margin: 6px auto; }
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.85); }
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.9); }
.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp { background-position: -32px 0; }
.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown { background-position: -32px -20px; }
.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft { background-position: -40px -40px; }
.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight { background-position: -40px -56px; }
/* theme: "dark-2" */

.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.1); -webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px; }
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); -webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px; }
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp { background-position: -112px 0; }
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown { background-position: -112px -20px; }
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft { background-position: -120px -40px; }
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight { background-position: -120px -56px; }
/* ---------------------------------------- */
 /* theme: "light-thick", "dark-thick" */
.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail, .mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail { width: 4px; background-color: #fff; background-color: rgba(255,255,255,0.1); -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; }
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 6px; background-color: #fff; background-color: rgba(255,255,255,0.75); -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; }
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; height: 4px; margin: 6px 0; }
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { width: 100%; height: 6px; margin: 5px auto; }
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.85); }
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.9); }
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp { background-position: -16px 0; }
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown { background-position: -16px -20px; }
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft { background-position: -20px -40px; }
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight { background-position: -20px -56px; }
/* theme: "dark-thick" */

.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.1); -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; }
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; }
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp { background-position: -96px 0; }
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown { background-position: -96px -20px; }
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft { background-position: -100px -40px; }
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight { background-position: -100px -56px; }
/* ---------------------------------------- */
 /* theme: "light-thin", "dark-thin" */
.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail { background-color: #fff; background-color: rgba(255,255,255,0.1); }
.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 2px; }
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; }
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { width: 100%; height: 2px; margin: 7px auto; }
/* theme "dark-thin" */

.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.15); }
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp { background-position: -80px 0; }
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown { background-position: -80px -20px; }
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft { background-position: -80px -40px; }
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight { background-position: -80px -56px; }
/* ---------------------------------------- */
 /* theme "rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark" */
.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail { background-color: #fff; background-color: rgba(255,255,255,0.15); }
.mCS-rounded.mCSB_scrollTools .mCSB_dragger, .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger, .mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger { height: 14px; }
.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 14px; margin: 0 1px; }
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger, .mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger, .mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger, .mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger { width: 14px; }
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { height: 14px; margin: 1px 0; }
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar { width: 16px; /* auto-expanded scrollbar */ height: 16px; margin: -1px 0; }
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, .mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { width: 4px; /* auto-expanded scrollbar */ }
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar { height: 16px; /* auto-expanded scrollbar */ width: 16px; margin: 0 -1px; }
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, .mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { height: 4px; /* auto-expanded scrollbar */ margin: 6px 0; }
.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp { background-position: 0 -72px; }
.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown { background-position: 0 -92px; }
.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft { background-position: 0 -112px; }
.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight { background-position: 0 -128px; }
/* theme "rounded-dark", "rounded-dots-dark" */

.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.15); }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -80px -72px; }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -80px -92px; }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -80px -112px; }
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -80px -128px; }
/* theme "rounded-dots", "rounded-dots-dark" */

.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail { width: 4px; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail { background-color: transparent; background-position: center; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg=="); background-repeat: repeat-y; opacity: 0.3; filter: "alpha(opacity=30)"; -ms-filter: "alpha(opacity=30)"; }
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail { height: 4px; margin: 6px 0; background-repeat: repeat-x; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp { background-position: -16px -72px; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown { background-position: -16px -92px; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft { background-position: -20px -112px; }
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight { background-position: -20px -128px; }
/* theme "rounded-dots-dark" */

.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII="); }
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -96px -72px; }
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -96px -92px; }
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -100px -112px; }
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -100px -128px; }
/* ---------------------------------------- */
 /* theme "3d", "3d-dark", "3d-thick", "3d-thick-dark" */
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-repeat: repeat-y; background-image: -moz-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0.5)), color-stop(100%, rgba(255,255,255,0))); background-image: -webkit-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -o-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -ms-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: linear-gradient(to right, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); }
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { background-repeat: repeat-x; background-image: -moz-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255,255,255,0.5)), color-stop(100%, rgba(255,255,255,0))); background-image: -webkit-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -o-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: -ms-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); background-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%); }
/* theme "3d", "3d-dark" */

.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger, .mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger { height: 70px; }
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger, .mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger { width: 70px; }
.mCS-3d.mCSB_scrollTools, .mCS-3d-dark.mCSB_scrollTools { opacity: 1; filter: "alpha(opacity=30)"; -ms-filter: "alpha(opacity=30)"; }
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, .mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px; }
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, .mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail { width: 8px; background-color: #000; background-color: rgba(0,0,0,0.2); box-shadow: inset 1px 0 1px rgba(0,0,0,0.5), inset -1px 0 1px rgba(255,255,255,0.2); }
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #555; }
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 8px; }
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; height: 8px; margin: 4px 0; box-shadow: inset 0 1px 1px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.2); }
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { width: 100%; height: 8px; margin: 4px auto; }
.mCS-3d.mCSB_scrollTools .mCSB_buttonUp { background-position: -32px -72px; }
.mCS-3d.mCSB_scrollTools .mCSB_buttonDown { background-position: -32px -92px; }
.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft { background-position: -40px -112px; }
.mCS-3d.mCSB_scrollTools .mCSB_buttonRight { background-position: -40px -128px; }
/* theme "3d-dark" */

.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.1); box-shadow: inset 1px 0 1px rgba(0,0,0,0.1); }
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail { box-shadow: inset 0 1px 1px rgba(0,0,0,0.1); }
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -112px -72px; }
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -112px -92px; }
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -120px -112px; }
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -120px -128px; }
/* ---------------------------------------- */
 /* theme: "3d-thick", "3d-thick-dark" */
.mCS-3d-thick.mCSB_scrollTools, .mCS-3d-thick-dark.mCSB_scrollTools { opacity: 1; filter: "alpha(opacity=30)"; -ms-filter: "alpha(opacity=30)"; }
.mCS-3d-thick.mCSB_scrollTools, .mCS-3d-thick-dark.mCSB_scrollTools, .mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer { -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
.mCSB_inside + .mCS-3d-thick.mCSB_scrollTools_vertical, .mCSB_inside + .mCS-3d-thick-dark.mCSB_scrollTools_vertical { right: 1px; }
.mCS-3d-thick.mCSB_scrollTools_vertical, .mCS-3d-thick-dark.mCSB_scrollTools_vertical { box-shadow: inset 1px 0 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5); }
.mCS-3d-thick.mCSB_scrollTools_horizontal, .mCS-3d-thick-dark.mCSB_scrollTools_horizontal { bottom: 1px; box-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5); }
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { box-shadow: inset 1px 0 0 rgba(255,255,255,0.4); width: 12px; margin: 2px; position: absolute; height: auto; top: 0; bottom: 0; left: 0; right: 0; }
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); }
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #555; }
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { height: 12px; width: auto; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer { background-color: #000; background-color: rgba(0,0,0,0.05); box-shadow: inset 1px 1px 16px rgba(0,0,0,0.1); }
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail { background-color: transparent; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp { background-position: -32px -72px; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown { background-position: -32px -92px; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft { background-position: -40px -112px; }
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight { background-position: -40px -128px; }
/* theme: "3d-thick-dark" */

.mCS-3d-thick-dark.mCSB_scrollTools { box-shadow: inset 0 0 14px rgba(0,0,0,0.2); }
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal { box-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.2); }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { box-shadow: inset 1px 0 0 rgba(255,255,255,0.4), inset -1px 0 0 rgba(0,0,0,0.2); }
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2); }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #777; }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer { background-color: #fff; background-color: rgba(0,0,0,0.05); box-shadow: inset 1px 1px 16px rgba(0,0,0,0.1); }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: transparent; }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -112px -72px; }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -112px -92px; }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -120px -112px; }
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -120px -128px; }
/* ---------------------------------------- */
 /* theme: "minimal", "minimal-dark" */
.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical { right: 0; margin: 12px 0; }
.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools.mCSB_scrollTools_horizontal, .mCustomScrollBox.mCS-minimal + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal, .mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools.mCSB_scrollTools_horizontal, .mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal { bottom: 0; margin: 0 12px; }
/* RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, .mCS-dir-rtl > .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical { left: 0; right: auto; }
.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail, .mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: transparent; }
.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger, .mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger { height: 50px; }
.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger, .mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger { width: 50px; }
.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.2); filter: "alpha(opacity=20)"; -ms-filter: "alpha(opacity=20)"; }
.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.5); filter: "alpha(opacity=50)"; -ms-filter: "alpha(opacity=50)"; }
/* theme: "minimal-dark" */

.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.2); filter: "alpha(opacity=20)"; -ms-filter: "alpha(opacity=20)"; }
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.5); filter: "alpha(opacity=50)"; -ms-filter: "alpha(opacity=50)"; }
/* ---------------------------------------- */
 /* theme "light-3", "dark-3" */
.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail { width: 6px; background-color: #000; background-color: rgba(0,0,0,0.2); }
.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 6px; }
.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; height: 6px; margin: 5px 0; }
.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { width: 12px; }
.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, .mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail { height: 12px; margin: 2px 0; }
.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp { background-position: -32px -72px; }
.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown { background-position: -32px -92px; }
.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft { background-position: -40px -112px; }
.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight { background-position: -40px -128px; }
/* theme "dark-3" */

.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.1); }
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp { background-position: -112px -72px; }
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown { background-position: -112px -92px; }
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft { background-position: -120px -112px; }
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight { background-position: -120px -128px; }
/* ---------------------------------------- */
 /* theme "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark" */
.mCS-inset.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail { width: 12px; background-color: #000; background-color: rgba(0,0,0,0.2); }
.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { width: 6px; margin: 3px 5px; position: absolute; height: auto; top: 0; bottom: 0; left: 0; right: 0; }
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar { height: 6px; margin: 5px 3px; position: absolute; width: auto; top: 0; bottom: 0; left: 0; right: 0; }
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, .mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail { width: 100%; height: 12px; margin: 2px 0; }
.mCS-inset.mCSB_scrollTools .mCSB_buttonUp, .mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp, .mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp { background-position: -32px -72px; }
.mCS-inset.mCSB_scrollTools .mCSB_buttonDown, .mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown, .mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown { background-position: -32px -92px; }
.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft, .mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft, .mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft { background-position: -40px -112px; }
.mCS-inset.mCSB_scrollTools .mCSB_buttonRight, .mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight, .mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight { background-position: -40px -128px; }
/* theme "inset-dark", "inset-2-dark", "inset-3-dark" */
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.1); }
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp { background-position: -112px -72px; }
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown { background-position: -112px -92px; }
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft { background-position: -120px -112px; }
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight { background-position: -120px -128px; }
/* theme "inset-2", "inset-2-dark" */
.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, .mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: transparent; border-width: 1px; border-style: solid; border-color: #fff; border-color: rgba(255,255,255,0.2); -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail { border-color: #000; border-color: rgba(0,0,0,0.2); }
/* theme "inset-3", "inset-3-dark" */
.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail { background-color: #fff; background-color: rgba(255,255,255,0.6); }
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail { background-color: #000; background-color: rgba(0,0,0,0.6); }
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.75); }
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.85); }
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #000; background-color: rgba(0,0,0,0.9); }
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.75); }
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.85); }
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar, .mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar { background-color: #fff; background-color: rgba(255,255,255,0.9); }
/*----------------------------------------*/
/*----- Slick Slider -----*/
/*----------------------------------------*/
/*
* Plugin URI: https://kenwheeler.github.io/slick/
*/
.slick-slider { position: relative; display: block; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -khtml-user-select: none; -ms-touch-action: pan-y; touch-action: pan-y; -webkit-tap-highlight-color: transparent; }
.slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
.slick-list:focus { outline: none; }
.slick-list.dragging { cursor: pointer; cursor: hand; }
.slick-slider .slick-track, .slick-slider .slick-list { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
.slick-track { position: relative; top: 0; left: 0; display: block; margin-left: auto; margin-right: auto; }
.slick-track:before, .slick-track:after { display: table; content: ''; }
.slick-track:after { clear: both; }
.slick-loading .slick-track { visibility: hidden; }
.slick-slide { display: none; float: left; height: 100%; min-height: 1px; }
[dir='rtl'] .slick-slide { float: right; }
.slick-slide img { display: block; }
.slick-slide.slick-loading img { display: none; }
.slick-slide.dragging img { pointer-events: none; }
.slick-initialized .slick-slide { display: block; }
.slick-loading .slick-slide { visibility: hidden; }
.slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; }
.slick-arrow.slick-hidden { display: none; }
/*----- Slick Slider custom override -----*/
/* visibility on load */
.dtr-slick-slider { height: 0; opacity: 0; visibility: hidden; transition: opacity 1s ease; -webkit-transition: opacity 1s ease; }
.dtr-slick-slider.slick-initialized { height: auto; visibility: visible; opacity: 1; }
.dtr-slick-slider .slick-loading .slick-list { background: #fff; }
.dtr-slick-slider .slick-loading .slick-list:after { content: '\e915'; font-family: 'icomoon'; position: absolute; top: 50%; left: 50%; -webkit-transform: translateX(-50%) translateY(-50%); -ms-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); -webkit-animation: fa-spin 2s infinite linear; animation: fa-spin 2s infinite linear; font-size: 25px; color: #a4afb7; }
/* misc */
.dtr-slick-slider ul.slick-dots li button:before { font-family: 'icomoon'; font-size: 10px; line-height: 15px; position: absolute; top: 0; left: 0; width: 15px; height: 15px; content: '\e92a'; text-align: center; color: black; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.dtr-slick-slider .slick-slide img { margin: auto; }
.dtr-slick-slider .slick-slide { margin: 0 15px; }
.dtr-slick-slider .slick-list { margin: 0 -15px; }
/* arrows */
.dtr-slick-slider .slick-prev, .dtr-slick-slider .slick-next { font-size: 0; line-height: 60px; position: absolute; bottom: 0; display: block; width: 60px; height: 60px; padding: 0; cursor: pointer; outline: none; border-radius: 50%; opacity: 0; transition: all .3s ease; z-index: 99; border: 1px solid #ccc; text-align: center; }
.dtr-slick-slider .slick-next { position: absolute; bottom: 0; right: 50%; margin: 0 -55px 0 0; }
.dtr-slick-slider:hover .slick-prev, .dtr-slick-slider:hover .slick-next { opacity: 1; }
.dtr-slick-slider .slick-prev { top: 50%; left: 0; margin: -30px 0 0 0; }
.dtr-slick-slider .slick-next { top: 50%; left: auto; right: 0; margin: -30px 0 0 0; }
[dir="rtl"] .dtr-slick-slider .slick-prev { }
[dir="rtl"] .dtr-slick-slider .slick-next { }
.dtr-slick-slider .slick-prev:before, .dtr-slick-slider .slick-next:before { font-family: 'icomoon'; font-size: 40px; line-height: 60px; font-weight: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; position: absolute; }
.dtr-slick-slider .slick-prev:before { content: "\e956"; right: 8px; }
.dtr-slick-slider .slick-next:before { content: "\e957"; left: 8px; }
.dtr-slick-slider .slick-arrows-inside .slick-prev { left: 0; }
.dtr-slick-slider .slick-arrows-inside .slick-next { right: 0; }
.dtr-slick-slider .slick-dots-inside .slick-dots { bottom: 5px; }
.dtr-slick-slider .slick-dots-inside.slick-dotted.slick-slider { margin-bottom: 0; }
.dtr-slick-slider .slick-slider .slick-prev, .dtr-slick-slider .slick-slider .slick-next { z-index: 1; }
.dtr-slick-slider .slick-prev:hover, .dtr-slick-slider .slick-prev:focus, .dtr-slick-slider .slick-next:hover, .dtr-slick-slider .slick-next:focus { outline: none; }
.dtr-slick-slider .slick-prev.slick-disabled:before, .dtr-slick-slider .slick-next.slick-disabled:before { opacity: .25; }
.dtr-slick-slider:hover .slick-prev, .dtr-slick-slider:hover .slick-next { opacity: 1; }
/* dots */
.dtr-slick-slider ul.slick-dots li button:before, .dtr-slick-slider ul.slick-dots li.slick-active button:before { content: none; }
.dtr-slick-slider ul.slick-dots { position: absolute; bottom: 0; display: block; width: 100%; padding: 0; margin: 0; list-style: none; text-align: center; line-height: 1; }
.dtr-slick-slider ul.slick-dots li { position: relative; display: inline-block; width: 26px; height: 6px; border-radius: 2px; margin: 0; padding: 0; cursor: pointer; text-align: center; }
.dtr-slick-slider ul.slick-dots li button { font-size: 0; line-height: 0; display: block; width: 20px; height: 6px; border-radius: 2px; padding: 0; cursor: pointer; color: transparent; border: 0; outline: none; margin: 0 auto; }
.dtr-slick-slider ul.slick-dots li button:hover, .dtr-slick-slider ul.slick-dots li button:focus { outline: none; }
.dtr-slick-slider ul.slick-dots li.slick-active button { width: 6px; border-radius: 50%; }
/* side arrows */
.dtr-slick-slider.dtr-slider-side-arrows .slick-prev { top: auto; right: 65px; bottom: 0; left: auto; margin: 0 0 30px 0; }
.dtr-slick-slider.dtr-slider-side-arrows .slick-next { top: auto; right: 0; bottom: 0; left: auto; right: 0; margin: 0 0 30px 0; }
/*----------------------------------------*/
/*===== Magnific Popup =====*/
/*----------------------------------------*/
/* Magnific Popup CSS */
.mfp-bg { top: 0; left: 0; width: 100%; height: 100%; z-index: 1042; overflow: hidden; position: fixed; background: #0b0b0b; opacity: 0.8; }
.mfp-wrap { top: 0; left: 0; width: 100%; height: 100%; z-index: 1043; position: fixed; outline: none !important; -webkit-backface-visibility: hidden; }
.mfp-container { text-align: center; position: absolute; width: 100%; height: 100%; left: 0; top: 0; padding: 0 8px; box-sizing: border-box; }
.mfp-container:before { content: ''; display: inline-block; height: 100%; vertical-align: middle; }
.mfp-align-top .mfp-container:before { display: none; }
.mfp-content { position: relative; display: inline-block; vertical-align: middle; margin: 0 auto; text-align: left; z-index: 1045; }
.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content { width: 100%; cursor: auto; }
.mfp-ajax-cur { cursor: progress; }
.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close { cursor: -moz-zoom-out; cursor: -webkit-zoom-out; cursor: zoom-out; }
.mfp-zoom { cursor: pointer; cursor: -webkit-zoom-in; cursor: -moz-zoom-in; cursor: zoom-in; }
.mfp-auto-cursor .mfp-content { cursor: auto; }
.mfp-close, .mfp-arrow, .mfp-preloader, .mfp-counter { -webkit-user-select: none; -moz-user-select: none; user-select: none; }
.mfp-loading.mfp-figure { display: none; }
.mfp-hide { display: none !important; }
.mfp-preloader { color: #CCC; position: absolute; top: 50%; width: auto; text-align: center; margin-top: -0.8em; left: 8px; right: 8px; z-index: 1044; }
.mfp-preloader a { color: #CCC; }
.mfp-preloader a:hover { color: #FFF; }
.mfp-s-ready .mfp-preloader { display: none; }
.mfp-s-error .mfp-content { display: none; }
button.mfp-close, button.mfp-arrow { overflow: visible; cursor: pointer; background: transparent; border: 0; -webkit-appearance: none; display: block; outline: none; padding: 0; z-index: 1046; box-shadow: none; touch-action: manipulation; }
button::-moz-focus-inner {
padding: 0;
border: 0;
}
.mfp-close { width: 44px; height: 44px; line-height: 44px; position: absolute; right: 0; top: 0; text-decoration: none; text-align: center; opacity: 0.65; padding: 0 0 18px 10px; color: #FFF; font-style: normal; font-size: 28px; font-family: Arial, Baskerville, monospace; }
.mfp-close:hover, .mfp-close:focus { opacity: 1; }
.mfp-close:active { top: 1px; }
.mfp-close-btn-in .mfp-close { color: #333; }
.mfp-image-holder .mfp-close, .mfp-iframe-holder .mfp-close { color: #FFF; right: -6px; text-align: right; padding-right: 6px; width: 100%; }
.mfp-counter { position: absolute; top: 0; right: 0; color: #CCC; font-size: 12px; line-height: 18px; white-space: nowrap; }
.mfp-arrow { position: absolute; opacity: 0.65; margin: 0; top: 50%; margin-top: -55px; padding: 0; width: 90px; height: 110px; -webkit-tap-highlight-color: transparent; }
.mfp-arrow:active { margin-top: -54px; }
.mfp-arrow:hover, .mfp-arrow:focus { opacity: 1; }
.mfp-arrow:before, .mfp-arrow:after { content: ''; display: block; width: 0; height: 0; position: absolute; left: 0; top: 0; margin-top: 35px; margin-left: 35px; border: medium inset transparent; }
.mfp-arrow:after { border-top-width: 13px; border-bottom-width: 13px; top: 8px; }
.mfp-arrow:before { border-top-width: 21px; border-bottom-width: 21px; opacity: 0.7; }
.mfp-arrow-left { left: 0; }
.mfp-arrow-left:after { border-right: 17px solid #FFF; margin-left: 31px; }
.mfp-arrow-left:before { margin-left: 25px; border-right: 27px solid #3F3F3F; }
.mfp-arrow-right { right: 0; }
.mfp-arrow-right:after { border-left: 17px solid #FFF; margin-left: 39px; }
.mfp-arrow-right:before { border-left: 27px solid #3F3F3F; }
.mfp-iframe-holder { padding-top: 40px; padding-bottom: 40px; }
.mfp-iframe-holder .mfp-content { line-height: 0; width: 100%; max-width: 900px; }
.mfp-iframe-holder .mfp-close { top: -40px; }
.mfp-iframe-scaler { width: 100%; height: 0; overflow: hidden; padding-top: 56.25%; }
.mfp-iframe-scaler iframe { position: absolute; display: block; top: 0; left: 0; width: 100%; height: 100%; box-shadow: 0 0 8px rgba(0, 0, 0, 0.6); background: #000; }
/* Main image in popup */
img.mfp-img { width: auto; max-width: 100%; height: auto; display: block; line-height: 0; box-sizing: border-box; padding: 40px 0 40px; margin: 0 auto; }
/* The shadow behind the image */
.mfp-figure { line-height: 0; }
.mfp-figure:after { content: ''; position: absolute; left: 0; top: 40px; bottom: 40px; display: block; right: 0; width: auto; height: auto; z-index: -1; box-shadow: 0 0 8px rgba(0, 0, 0, 0.6); background: #444; }
.mfp-figure small { color: #BDBDBD; display: block; font-size: 12px; line-height: 14px; }
.mfp-figure figure { margin: 0; }
.mfp-bottom-bar { margin-top: -36px; position: absolute; top: 100%; left: 0; width: 100%; cursor: auto; }
.mfp-title { text-align: left; line-height: 18px; color: #F3F3F3; word-wrap: break-word; padding-right: 36px; }
.mfp-image-holder .mfp-content { max-width: 100%; }
.mfp-gallery .mfp-image-holder .mfp-figure { cursor: pointer; }

@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {
/**
* Remove all paddings around the image on small screen
*/
.mfp-img-mobile .mfp-image-holder { padding-left: 0; padding-right: 0; }
.mfp-img-mobile img.mfp-img { padding: 0; }
.mfp-img-mobile .mfp-figure:after { top: 0; bottom: 0; }
.mfp-img-mobile .mfp-figure small { display: inline; margin-left: 5px; }
.mfp-img-mobile .mfp-bottom-bar { background: rgba(0, 0, 0, 0.6); bottom: 0; margin: 0; top: auto; padding: 3px 5px; position: fixed; box-sizing: border-box; }
.mfp-img-mobile .mfp-bottom-bar:empty { padding: 0; }
.mfp-img-mobile .mfp-counter { right: 5px; top: 3px; }
.mfp-img-mobile .mfp-close { top: 0; right: 0; width: 35px; height: 35px; line-height: 35px; background: rgba(0, 0, 0, 0.6); position: fixed; text-align: center; padding: 0; }
}

@media all and (max-width: 900px) {
.mfp-arrow { -webkit-transform: scale(0.75); transform: scale(0.75); }
.mfp-arrow-left { -webkit-transform-origin: 0; transform-origin: 0; }
.mfp-arrow-right { -webkit-transform-origin: 100%; transform-origin: 100%; }
.mfp-container { padding-left: 6px; padding-right: 6px; }
}
/*----------------------------------------*/
/*===== Venobox =====*/
/*----------------------------------------*/
.vbox-overlay *, .vbox-overlay *:before, .vbox-overlay *:after { -webkit-backface-visibility: hidden; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.vbox-overlay * { -webkit-backface-visibility: visible; backface-visibility: visible; }
.vbox-overlay { display: -webkit-flex; display: flex; -webkit-flex-direction: column; flex-direction: column; -webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center; position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 1040; -webkit-transform: translateZ(1000px); transform: translateZ(1000px); transform-style: preserve-3d; }
/* ----- navigation ----- */
.vbox-title { width: 100%; height: 40px; float: left; text-align: center; line-height: 28px; font-size: 12px; padding: 6px 40px; overflow: hidden; position: fixed; display: none; left: 0; z-index: 1050; }
.vbox-close { cursor: pointer; position: fixed; top: -1px; right: 0; width: 50px; height: 40px; padding: 6px; display: block; background-position: 10px center; overflow: hidden; font-size: 24px; line-height: 1; text-align: center; z-index: 1050; }
.vbox-num { cursor: pointer; position: fixed; left: 0; height: 40px; display: block; overflow: hidden; line-height: 28px; font-size: 12px; padding: 6px 10px; display: none; z-index: 1050; }
/* ----- navigation ARROWS ----- */
.vbox-next, .vbox-prev { position: fixed; top: 50%; margin-top: -15px; overflow: hidden; cursor: pointer; display: block; width: 45px; height: 45px; z-index: 1050; }
.vbox-next span, .vbox-prev span { position: relative; width: 20px; height: 20px; border: 2px solid transparent; border-top-color: #B6B6B6; border-right-color: #B6B6B6; text-indent: -100px; position: absolute; top: 8px; display: block; }
.vbox-prev { left: 15px; }
.vbox-next { right: 15px; }
.vbox-prev span { left: 10px; -ms-transform: rotate(-135deg); -webkit-transform: rotate(-135deg); transform: rotate(-135deg); }
.vbox-next span { -ms-transform: rotate(45deg); -webkit-transform: rotate(45deg); transform: rotate(45deg); right: 10px; }
/* ------- inline window ------ */
.vbox-inline { width: 420px; height: 315px; height: 70vh; padding: 10px; background: #fff; margin: 0 auto; overflow: auto; text-align: left; }
/* ------- Video & iFrames window ------ */
.venoframe { max-width: 100%; width: 100%; border: none; width: 100%; height: 260px; height: 70vh; }
.venoframe.vbvid { height: 260px; }

@media (min-width: 768px) {
.venoframe, .vbox-inline { width: 90%; height: 360px; height: 70vh; }
.venoframe.vbvid { width: 640px; height: 360px; }
}

@media (min-width: 992px) {
.venoframe, .vbox-inline { max-width: 1200px; width: 80%; height: 540px; height: 70vh; }
.venoframe.vbvid { width: 960px; height: 540px; }
}
/*
Please do NOT edit this part!
or at least read this note: http://i.imgur.com/7C0ws9e.gif
*/
.vbox-open { overflow: hidden; }
.vbox-container { position: absolute; left: 0; right: 0; top: 0; bottom: 0; overflow-x: hidden; overflow-y: scroll; overflow-scrolling: touch; -webkit-overflow-scrolling: touch; z-index: 20; max-height: 100%; }
.vbox-content { text-align: center; float: left; width: 100%; position: relative; overflow: hidden; padding: 20px 10px; }
.vbox-container img { max-width: 100%; height: auto; }
.vbox-figlio { box-shadow: 0 0 12px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); max-width: 100%; text-align: initial; }
img.vbox-figlio { -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -o-user-select: none; user-select: none; }
.vbox-content.swipe-left { margin-left: -200px !important; }
.vbox-content.swipe-right { margin-left: 200px !important; }
.vbox-animated { webkit-transition: margin 300ms ease-out; transition: margin 300ms ease-out; }
/*----------------------------------------*/
/*===== Superfish =====*/
/*----------------------------------------*/
.main-navigation { display: block; position: relative; }
.sf-menu { margin: 0; padding: 0; list-style: none; }
.sf-menu li { margin: 0; padding: 0; }
.sf-menu ul { padding: 20px 0; margin: 0 0 0 -30px; list-style: none; position: absolute; top: -999em; width: 16em; -webkit-box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.15); -moz-box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.15); box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.15); }
.sf-menu ul li { width: 100%; }
.sf-menu li:hover { visibility: inherit; }
.sf-menu li { float: left; position: relative; margin-left: 15px; }
.sf-menu li li { margin-left: 0; }
.sf-menu a { display: block; text-align: left; position: relative; }
.sf-menu ul a { min-width: 150px; width: 100%; float: left; border-bottom-width: 1px; border-bottom-style: solid; }
.sf-menu:first-child > li a { text-align: center; }
.sf-menu:first-child > li li a { text-align: left; }
.sf-menu ul li:last-child > a, .sf-menu ul li li:last-child > a { border-bottom: 0; }
.sf-menu li:hover ul, .sf-menu li.sfHover ul { left: 20px; top: auto; z-index: 1001; }
.sf-menu > li.last > ul { left: auto; right: 0; }
.sf-menu ul li.last ul, .sf-menu ul ul li.last ul, .sf-menu ul ul ul li.last ul { left: -100% !important; right: auto; }
.sf-menu ul ul { margin-top: -20px; }
.ie8 .sf-menu li:hover ul, .ie8 .sf-menu li.sfHover ul { zoom: 1; }
ul.sf-menu li:hover li ul, ul.sf-menu li.sfHover li ul, ul.sf-menu li li:hover li ul, ul.sf-menu li li.sfHover li ul { top: -999em; }
ul.sf-menu li li:hover ul, ul.sf-menu li li.sfHover ul, ul.sf-menu li li li:hover ul, ul.sf-menu li li li.sfHover ul { left: 16em; top: -21px; margin-left: 0; }
.sf-with-ul:after, ul ul .sf-with-ul:after { font-family: 'icomoon'; content: "\e97c"; font-weight: normal; font-style: normal; display: inline; padding-left: 5px; font-size: 10px; height: 10px; vertical-align: baseline; }
ul ul .sf-with-ul:after { display: inline-block; font-family: 'icomoon'; content: "\e97a"; float: right; }
.sf-menu a .sf-sub-indicator, .sf-menu li li a .sf-su

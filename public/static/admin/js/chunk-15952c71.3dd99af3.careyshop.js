(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15952c71"],{"07ac":function(e,t,n){var i=n("23e7"),a=n("6f53").values;i({target:"Object",stat:!0},{values:function(e){return a(e)}})},"08a9":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade"}},[n("div",{ref:"el-image-viewer__wrapper",staticClass:"el-image-viewer__wrapper",style:{"z-index":e.zIndex},attrs:{tabindex:"-1"}},[n("div",{staticClass:"el-image-viewer__mask",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleMaskClick(t)}}}),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[n("i",{staticClass:"el-icon-close"})]),e.isSingle?e._e():[n("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[n("i",{staticClass:"el-icon-arrow-left"})]),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[n("i",{staticClass:"el-icon-arrow-right"})])],n("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[n("div",{staticClass:"el-image-viewer__actions__inner"},[n("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),n("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{class:e.mode.icon,on:{click:e.toggleMode}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),n("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),n("div",{staticClass:"el-image-viewer__canvas"},e._l(e.urlList,(function(t,i){return i===e.index?n("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()})),0)],2)])},a=[],o=n("5530"),s=(n("a9e3"),n("99af"),n("b64b"),n("07ac"),n("b680"),n("8bbf")),r=n.n(s);const l=r.a.prototype.$isServer,c=(l||Number(document.documentMode),function(){return!l&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}()),d=function(){return!l&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();Object.prototype.hasOwnProperty;const u=function(){return!r.a.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)};function f(e){let t=!1;return function(...n){t||(t=!0,window.requestAnimationFrame(i=>{e.apply(this,n),t=!1}))}}var h={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},m=u()?"DOMMouseScroll":"mousewheel",g={name:"elImageViewer",props:{urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}},initialIndex:{type:Number,default:0},appendToBody:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0}},data:function(){return{index:this.initialIndex,isShow:!1,infinite:!0,loading:!1,mode:h.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.urlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,i=e.offsetX,a=e.offsetY,o=e.enableTransition,s={transform:"scale(".concat(t,") rotate(").concat(n,"deg)"),transition:o?"transform .3s":"","margin-left":"".concat(i,"px"),"margin-top":"".concat(a,"px")};return this.mode===h.CONTAIN&&(s.maxWidth=s.maxHeight="100%"),s}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(e){var t=this;this.$nextTick((function(e){var n=t.$refs.img[0];n.complete||(t.loading=!0)}))}},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this._keyDownHandler=f((function(t){var n=t.keyCode;switch(n){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut");break}})),this._mouseWheelHandler=f((function(t){var n=t.wheelDelta?t.wheelDelta:-t.detail;n>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})})),c(document,"keydown",this._keyDownHandler),c(document,m,this._mouseWheelHandler)},deviceSupportUninstall:function(){d(document,"keydown",this._keyDownHandler),d(document,m,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(e){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,i=n.offsetX,a=n.offsetY,o=e.pageX,s=e.pageY;this._dragHandler=f((function(e){t.transform.offsetX=i+e.pageX-o,t.transform.offsetY=a+e.pageY-s})),c(document,"mousemove",this._dragHandler),c(document,"mouseup",(function(e){d(document,"mousemove",t._dragHandler)})),e.preventDefault()}},handleMaskClick:function(){this.maskClosable&&this.hide()},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=Object.keys(h),t=Object.values(h),n=t.indexOf(this.mode),i=(n+1)%e.length;this.mode=h[e[i]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var n=Object(o["a"])({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),i=n.zoomRate,a=n.rotateDeg,s=n.enableTransition,r=this.transform;switch(e){case"zoomOut":r.scale>.2&&(r.scale=parseFloat((r.scale-i).toFixed(3)));break;case"zoomIn":r.scale=parseFloat((r.scale+i).toFixed(3));break;case"clocelise":r.deg+=a;break;case"anticlocelise":r.deg-=a;break}r.enableTransition=s}}},mounted:function(){this.deviceSupportInstall(),this.appendToBody&&document.body.appendChild(this.$el),this.$refs["el-image-viewer__wrapper"].focus()},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},v=g,p=n("2877"),_=Object(p["a"])(v,i,a,!1,null,null,null);t["default"]=_.exports},"6f53":function(e,t,n){var i=n("83ab"),a=n("df75"),o=n("fc6a"),s=n("d1e7").f,r=function(e){return function(t){var n,r=o(t),l=a(r),c=l.length,d=0,u=[];while(c>d)n=l[d++],i&&!s.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}};e.exports={entries:r(!0),values:r(!1)}}}]);
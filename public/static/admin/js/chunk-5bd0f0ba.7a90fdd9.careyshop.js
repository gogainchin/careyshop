(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bd0f0ba"],{"59ed0":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("cs-container",[t("div",{staticClass:"cs-p"},[t("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("h2",[e._v(e._s(e.message.title))]),t("span",[e._v("最后编辑："+e._s(e.message.update_time))]),t("span",[e._v("游览量："+e._s(e.message.page_views))])]),t("div",{staticClass:"mce-content-body",domProps:{innerHTML:e._s(e.message.content)}})])],1)])},n=[],c=(t("a9e3"),t("5646")),i={props:{message_id:{type:[String,Number],required:!0}},data:function(){return{message:{}}},watch:{message_id:{handler:function(){this.getMessageData()},immediate:!0}},methods:{getMessageData:function(){var e=this;Object(c["g"])(this.message_id).then((function(s){e.message=s.data||{}}))}}},r=i,d=(t("cd3c"),t("2877")),o=Object(d["a"])(r,a,n,!1,null,"65186cce",null);s["default"]=o.exports},c8b0:function(e,s,t){},cd3c:function(e,s,t){"use strict";t("c8b0")}}]);
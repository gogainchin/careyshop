(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aaa5cba"],{"331c":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var n=a("5530"),i=a("bc07"),o="/v1/ask";function r(e){return Object(i["a"])({url:o,method:"post",data:{method:"del.ask.item",ask_id:e}})}function d(e,t){return Object(i["a"])({url:o,method:"post",data:{method:"reply.ask.item",ask_id:e,answer:t}})}function s(e){return Object(i["a"])({url:o,method:"post",data:{method:"get.ask.item",ask_id:e}})}function u(e){return Object(i["a"])({url:o,method:"post",data:Object(n["a"])({method:"get.ask.list"},e)})}},cb92:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("cs-container",[a("page-header",{ref:"header",attrs:{slot:"header",loading:e.loading,"type-list":e.typeList},on:{submit:e.handleSubmit},slot:"header"}),a("page-main",{attrs:{"table-data":e.table,"type-list":e.typeList},on:{sort:e.handleSort,refresh:e.handleRefresh}}),a("page-footer",{attrs:{slot:"footer",loading:e.loading,"page-no":e.page.page_no,"page-size":e.page.page_size,total:e.pageTotal},on:{change:e.handlePaginationChange},slot:"footer"})],1)},i=[],o=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("5880")),d=a("331c"),s={name:"member-ask-list",components:{PageHeader:function(){return a.e("chunk-2d0b6954").then(a.bind(null,"1e7a"))},PageMain:function(){return a.e("chunk-7dd22214").then(a.bind(null,"7f94"))},PageFooter:function(){return a.e("chunk-2d0bd262").then(a.bind(null,"2b84"))}},data:function(){return{table:[],pageTotal:0,loading:!1,typeList:{0:"咨询",1:"售后",2:"投诉",3:"求购"},page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(t){e.page.page_size=t.get("size").value()||25})).then((function(){e.handleSubmit()}))},methods:Object(o["a"])(Object(o["a"])({},Object(r["mapActions"])("careyshop/update",["updateData"])),{},{handleRefresh:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(e){var t=this;this.page=e,(e.page_no-1)*e.page_size>this.pageTotal||this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSort:function(e){var t=this;this.order=e,this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSubmit:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.page.page_no=1),this.loading=!0,Object(d["c"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},e),this.page),this.order)).then((function(e){t.updateData({type:"clear",name:"member-ask-list"}),t.table=e.data.items||[],t.pageTotal=e.data.total_result})).finally((function(){t.loading=!1}))}})},u=s,c=a("2877"),h=Object(c["a"])(u,n,i,!1,null,null,null);t["default"]=h.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24787b15"],{"1a19":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"g",(function(){return s})),a.d(e,"f",(function(){return h}));var n=a("5530"),i=a("bc07"),o="/v1/article";function r(t){return Object(i["a"])({url:o,method:"post",data:Object(n["a"])({method:"add.article.item"},t)})}function d(t){return Object(i["a"])({url:o,method:"post",data:Object(n["a"])({method:"set.article.item"},t)})}function c(t){return Object(i["a"])({url:o,method:"post",data:{method:"del.article.list",article_id:t}})}function u(t){return Object(i["a"])({url:o,method:"post",data:{method:"get.article.item",article_id:t}})}function l(t){return Object(i["a"])({url:o,method:"post",data:Object(n["a"])({method:"get.article.list"},t)})}function s(t,e){return Object(i["a"])({url:o,method:"post",data:{method:"set.article.top",article_id:t,is_top:e}})}function h(t,e){return Object(i["a"])({url:o,method:"post",data:{method:"set.article.status",article_id:t,status:e}})}},"952b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),a("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}}),a("page-footer",{attrs:{slot:"footer",loading:t.loading,"page-no":t.page.page_no,"page-size":t.page.page_size,total:t.pageTotal},on:{change:t.handlePaginationChange},slot:"footer"})],1)},i=[],o=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("5880")),d=a("1a19"),c={name:"system-article-admin",components:{PageHeader:function(){return a.e("chunk-c6c51974").then(a.bind(null,"1d49"))},PageMain:function(){return a.e("chunk-06196ad8").then(a.bind(null,"1398"))},PageFooter:function(){return a.e("chunk-2d0bd262").then(a.bind(null,"2b84"))}},data:function(){return{table:[],pageTotal:0,loading:!1,page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(e){t.page.page_size=e.get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:Object(o["a"])(Object(o["a"])({},Object(r["mapActions"])("careyshop/update",["updateData"])),{},{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,(t.page_no-1)*t.page_size>this.pageTotal||this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.page.page_no=1),this.loading=!0,Object(d["d"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},t),this.page),this.order)).then((function(t){e.updateData({type:"clear",name:"system-article-admin"}),e.table=t.data.items||[],e.pageTotal=t.data.total_result})).finally((function(){e.loading=!1}))}})},u=c,l=a("2877"),s=Object(l["a"])(u,n,i,!1,null,null,null);e["default"]=s.exports}}]);
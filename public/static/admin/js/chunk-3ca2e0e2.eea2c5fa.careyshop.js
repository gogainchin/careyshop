(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ca2e0e2"],{"439b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:e.loading},on:{submit:e.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:e.loading,"table-data":e.table},on:{tabs:e.handleTabs,sort:e.handleSort,refresh:e.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:e.loading,"page-no":e.page.page_no,"page-size":e.page.page_size,total:e.pageTotal},on:{change:e.handlePaginationChange},slot:"footer"})],1)},i=[],o=n("5530"),r=(n("d3b7"),n("3ca3"),n("ddb0"),n("943f")),s={name:"order-service-invoice",components:{PageHeader:function(){return n.e("chunk-2d0ac345").then(n.bind(null,"1918"))},PageMain:function(){return n.e("chunk-f04370a6").then(n.bind(null,"ed86"))},PageFooter:function(){return n.e("chunk-2d0bd262").then(n.bind(null,"2b84"))}},data:function(){return{loading:!1,table:[],pageTotal:0,status:null,page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var e=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(t){e.page.page_size=t.get("size").value()||25})).then((function(){e.handleSubmit()}))},methods:{handleRefresh:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(e){var t=this;this.page=e,(e.page_no-1)*e.page_size>this.pageTotal||this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleTabs:function(e){var t=this;this.status=e<=0?null:e-1,this.order={},this.$nextTick((function(){t.$refs.header.handleFormSubmit(!0)}))},handleSort:function(e){var t=this;this.order=e,this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSubmit:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.page_no=1),this.loading=!0,Object(r["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},e),this.page),this.order),{},{status:this.status})).then((function(e){t.table=e.data.items||[],t.pageTotal=e.data.total_result})).finally((function(){t.loading=!1}))}}},d=s,h=n("2877"),u=Object(h["a"])(d,a,i,!1,null,null,null);t["default"]=u.exports},"943f":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d}));var a=n("5530"),i=n("bc07"),o="/v1/invoice";function r(e){return Object(i["a"])({url:o,method:"post",data:Object(a["a"])({method:"set.invoice.item"},e)})}function s(e){return Object(i["a"])({url:o,method:"post",data:{method:"reset.invoice.item",invoice_id:e}})}function d(e){return Object(i["a"])({url:o,method:"post",data:Object(a["a"])({method:"get.invoice.list"},e)})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5624d375"],{"5ef3":function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return s}));var a=n("5530"),o=n("bc07"),r="/v1/payment";function d(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.payment.list"},t)})}function i(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.payment.item"},t)})}function u(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.payment.sort",payment_id:t,sort:e}})}function c(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.payment.status",payment_id:t,status:e}})}function s(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.payment.finance"},t)})}},"96b7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"to-payment":t.toPayment},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"to-payment":t.toPayment,"order-total":t.total},on:{tabs:t.handleTabs,refresh:t.handleRefresh,total:t.handleTotal}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,"page-no":t.page.page_no,"page-size":t.page.page_size,total:t.pageTotal},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],r=n("5530"),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("b0c0"),n("5ef3")),i=n("dea0"),u={name:"order-admin-list",components:{PageHeader:function(){return n.e("chunk-fc0970c6").then(n.bind(null,"53ac"))},PageMain:function(){return Promise.all([n.e("chunk-2d0cfcbf"),n.e("chunk-f8161ba6")]).then(n.bind(null,"3db9"))},PageFooter:function(){return n.e("chunk-2d0bd262").then(n.bind(null,"2b84"))}},data:function(){return{loading:!1,table:[],pageTotal:0,toPayment:{},status:0,total:{},page:{page_no:1,page_size:0}}},mounted:function(){var t=this;Promise.all([Object(d["a"])({is_select:1,exclude_code:[4,5,6]}),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){e[0].data&&e[0].data.forEach((function(e){t.toPayment[e.code]=e})),t.page.page_size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},beforeRouteEnter:function(t,e,n){"order-admin-info"===e.name?n((function(t){t.$refs.header&&t.$refs.header.handleFormSubmit()})):n()},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,(t.page_no-1)*t.page_size>this.pageTotal||this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleTabs:function(t){var e=this;this.status=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit(!0)}))},handleTotal:function(t){var e=this;Object(i["g"])(t).then((function(t){e.total=t.data||{}}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.page_no=1),this.loading=!0,this.handleTotal(t),Object(i["f"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),this.page),{},{status:this.status})).then((function(t){e.table=t.data.items||[],e.pageTotal=t.data.total_result})).finally((function(){e.loading=!1}))}}},c=u,s=n("2877"),h=Object(s["a"])(c,a,o,!1,null,null,null);e["default"]=h.exports},dea0:function(t,e,n){"use strict";n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return i})),n.d(e,"k",(function(){return u})),n.d(e,"a",(function(){return c})),n.d(e,"i",(function(){return s})),n.d(e,"g",(function(){return h})),n.d(e,"b",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"h",(function(){return m})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return p}));var a=n("5530"),o=n("bc07"),r="/v1/order";function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(o["a"])({url:r,method:"post",data:{method:"get.order.item",order_no:t,is_get_log:e}})}function i(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.order.list"},t)})}function u(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.order.item"},t)})}function c(t){return Object(o["a"])({url:r,method:"post",data:{method:"cancel.order.item",order_no:t}})}function s(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"recycle.order.item",order_no:t,is_recycle:e}})}function h(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.order.status.total"},t)})}function l(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"change.price.order.item"},t)})}function f(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"remark.order.item"},t)})}function m(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"picking.order.list",order_no:t,is_picking:e}})}function b(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"delivery.order.item"},t)})}function p(t){return Object(o["a"])({url:r,method:"post",data:{method:"complete.order.list",order_no:t}})}}}]);
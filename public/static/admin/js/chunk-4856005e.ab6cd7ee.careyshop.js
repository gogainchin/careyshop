(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4856005e"],{"0776":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return h}));var a=n("5530"),o=n("bc07"),i="/v1/promotion";function r(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"add.promotion.item"},t)})}function d(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"set.promotion.item"},t)})}function u(t,e){return Object(o["a"])({url:i,method:"post",data:{method:"set.promotion.status",promotion_id:t,status:e}})}function s(t){return Object(o["a"])({url:i,method:"post",data:{method:"del.promotion.list",promotion_id:t}})}function h(t){return Object(o["a"])({url:i,method:"post",data:Object(a["a"])({method:"get.promotion.list"},t)})}},"4eee":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"type-map":t.typeMap,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,"page-no":t.page.page_no,"page-size":t.page.page_size,total:t.pageTotal},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],i=n("5530"),r=(n("d3b7"),n("3ca3"),n("ddb0"),n("0776")),d={name:"marketing-marketing-promotion",components:{PageHeader:function(){return n.e("chunk-2d0c80d5").then(n.bind(null,"52df"))},PageMain:function(){return n.e("chunk-180c3b2c").then(n.bind(null,"b5ea"))},PageFooter:function(){return n.e("chunk-2d0bd262").then(n.bind(null,"2b84"))}},data:function(){return{loading:!1,table:[],pageTotal:0,typeMap:{0:"减价",1:"打折",2:"免邮",3:"送积分",4:"送优惠劵"},page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(e){t.page.page_size=e.get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,(t.page_no-1)*t.page_size>this.pageTotal||this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.page_no=1),this.loading=!0,Object(r["c"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},t),this.page),this.order)).then((function(t){e.table=t.data.items||[],e.pageTotal=t.data.total_result})).finally((function(){e.loading=!1}))}}},u=d,s=n("2877"),h=Object(s["a"])(u,a,o,!1,null,null,null);e["default"]=h.exports}}]);
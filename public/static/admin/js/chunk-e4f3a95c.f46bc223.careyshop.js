(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4f3a95c"],{5529:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,group:t.group},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,group:t.group},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,"page-no":t.page.page_no,"page-size":t.page.page_size,total:t.pageTotal},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],r=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("c784")),u=n("87e6"),d={name:"setting-admin-member",components:{PageHeader:function(){return n.e("chunk-2d0cc681").then(n.bind(null,"4e93"))},PageMain:function(){return n.e("chunk-2d0b37ed").then(n.bind(null,"292b"))},PageFooter:function(){return n.e("chunk-2d0bd262").then(n.bind(null,"2b84"))}},data:function(){return{loading:!1,pageTotal:0,table:[],group:[],page:{page_no:1,page_size:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["c"])({status:1,module:"admin"}),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.group=e[0].data||[],t.page.page_size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.page_no-1)||this.page.page_no--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,(t.page_no-1)*t.page_size>this.pageTotal||this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.page_no=1),this.loading=!0,Object(u["c"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),this.page),this.order)).then((function(t){e.table=t.data.items||[],e.pageTotal=t.data.total_result})).finally((function(){e.loading=!1}))}}},h=d,s=n("2877"),c=Object(s["a"])(h,a,o,!1,null,null,null);e["default"]=c.exports},c784:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return c}));var a=n("5530"),o=n("bc07"),r="/v1/auth_group";function i(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"add.auth.group.item"},t)})}function u(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.auth.group.item"},t)})}function d(t){return Object(o["a"])({url:r,method:"post",data:{method:"del.auth.group.item",group_id:t}})}function h(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.auth.group.list"},t)})}function s(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.auth.group.status",group_id:t,status:e}})}function c(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.auth.group.sort",group_id:t,sort:e}})}}}]);
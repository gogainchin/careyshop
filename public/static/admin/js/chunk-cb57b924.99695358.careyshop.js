(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb57b924"],{"0602":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("cs-container",[o("page-main",{attrs:{"table-data":t.table},on:{reply:t.addReply}})],1)},a=[],d=o("5530"),c=(o("d3b7"),o("3ca3"),o("ddb0"),o("a9e3"),o("2f62")),s=o("f663"),i={name:"goods-opinion-comment-detail",components:{PageMain:function(){return o.e("chunk-c375c0a8").then(o.bind(null,"a9d4"))}},props:{goods_comment_id:{type:[Number,String],required:!0}},data:function(){return{table:this.getInitData()}},watch:{goods_comment_id:{handler:function(){this.getGoodsCommentData()},immediate:!0}},methods:Object(d["a"])(Object(d["a"])({},Object(c["b"])("careyshop/update",["updateData"])),{},{getInitData:function(){return{status:null,create_time:"",get_addition:{},get_user:{},get_order_goods:{}}},getGoodsCommentData:function(){var t=this;this.table=Object(d["a"])({},this.getInitData()),Object(s["b"])(this.goods_comment_id).then((function(e){t.table=Object(d["a"])({},e.data)}))},addReply:function(t,e){1===e.type&&this.table.get_main_reply.push(Object(d["a"])({},e)),3===e.type&&this.table.get_addition_reply.push(Object(d["a"])({},e)),this.table.status=1,this.updateData({type:"set",name:"goods-opinion-comment",srcId:t,data:{status:1}})}})},u=i,r=o("2877"),m=Object(r["a"])(u,n,a,!1,null,null,null);e["default"]=m.exports},f663:function(t,e,o){"use strict";o.d(e,"d",(function(){return c})),o.d(e,"a",(function(){return s})),o.d(e,"e",(function(){return i})),o.d(e,"g",(function(){return u})),o.d(e,"f",(function(){return r})),o.d(e,"b",(function(){return m})),o.d(e,"c",(function(){return b}));var n=o("5530"),a=o("bc07"),d="/v1/goods_comment";function c(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"reply.goods.comment.item"},t)})}function s(t){return Object(a["a"])({url:d,method:"post",data:{method:"del.goods.comment.item",goods_comment_id:t}})}function i(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.comment.show",goods_comment_id:t,is_show:e}})}function u(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.comment.top",goods_comment_id:t,is_top:e}})}function r(t,e){return Object(a["a"])({url:d,method:"post",data:{method:"set.goods.comment.status",goods_comment_id:t,status:e}})}function m(t){return Object(a["a"])({url:d,method:"post",data:{method:"get.goods.comment.item",goods_comment_id:t}})}function b(t){return Object(a["a"])({url:d,method:"post",data:Object(n["a"])({method:"get.goods.comment.list"},t)})}}}]);
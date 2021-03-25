(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ef1ba38","chunk-9b341698"],{"0982":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增规格")])],1):e._e(),e.auth.index||e.auth.close?a("el-form-item",[a("el-button-group",[e.auth.index?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleIndex(null,1,!0)}}},[e._v("设为检索")]):e._e(),e.auth.close?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleIndex(null,0,!0)}}},[e._v("取消检索 ")]):e._e()],1)],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"spec_id",sortable:"custom",width:"100"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom"}}),a("el-table-column",{attrs:{label:"所属模型",prop:"get_goods_type.type_name"}}),a("el-table-column",{attrs:{label:"展现方式",prop:"spec_type"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.typeMap[t.row.spec_type])+" ")]}}])}),a("el-table-column",{attrs:{label:"规格项",prop:"spec_item","show-overflow-tooltip":!0,"min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getSpecItem")(t.row.spec_item))+" ")]}}])}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",sortable:"custom",align:"center","min-width":"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return e.handleSort(t.$index)}},model:{value:t.row.sort,callback:function(a){e.$set(t.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[e._v(" "+e._s(t.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"是否检索",prop:"spec_index",sortable:"custom",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.index||e.auth.close?"cursor: pointer;":"",attrs:{size:"mini",type:e.indexMap[t.row.spec_index].type,effect:e.auth.index||e.auth.close?"light":"plain"},nativeOn:{click:function(a){return e.handleIndex(t.$index)}}},[e._v(" "+e._s(e.indexMap[t.row.spec_index].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入商品规格名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"所属模型",prop:"goods_type_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属商品模型",clearable:""},model:{value:e.form.goods_type_id,callback:function(t){e.$set(e.form,"goods_type_id",t)},expression:"form.goods_type_id"}},e._l(e.typeData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.type_name,value:e.goods_type_id}})})),1)],1),a("el-form-item",{attrs:{label:"规格项",prop:"spec_item"}},[a("el-input",{attrs:{placeholder:"请输入商品规格项，一行一个",type:"textarea",rows:5},model:{value:e.form.spec_item,callback:function(t){e.$set(e.form,"spec_item",t)},expression:"form.spec_item"}})],1),a("el-form-item",{attrs:{label:"展现方式",prop:"spec_type"}},[a("el-radio-group",{model:{value:e.form.spec_type,callback:function(t){e.$set(e.form,"spec_type",t)},expression:"form.spec_type"}},e._l(e.typeMap,(function(t,i){return a("el-radio",{key:i,attrs:{label:Number(i)}},[e._v(e._s(t))])})),1)],1),a("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"是否检索",prop:"spec_index"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.spec_index,callback:function(t){e.$set(e.form,"spec_index",t)},expression:"form.spec_index"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},n=[],o=a("5530"),s=(a("a15b"),a("159b"),a("1276"),a("ac1f"),a("498a"),a("7db0"),a("a434"),a("b9ad")),r=a("ca00"),l={props:{loading:{default:!1},typeData:{default:function(){return[]}},tableData:{default:function(){return[]}},selectId:{default:null}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,index:!1,close:!1},indexMap:{0:{text:"否",type:"danger"},1:{text:"是",type:"success"},2:{text:"...",type:"info"}},typeMap:{0:"文字",1:"图片",2:"颜色"},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑规格",create:"新增规格"},form:{goods_type_id:void 0,name:void 0,spec_item:void 0,spec_index:void 0,spec_type:void 0,sort:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:60,message:"长度不能大于 60 个字符",trigger:"blur"}],goods_type_id:[{required:!0,message:"至少选择一项",trigger:"change"}],spec_item:[{required:!0,message:"规格项不能为空",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getSpecItem:function(e){if(e)return e.join(",")}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/goods/setting/spec/add"),this.auth.set=this.$permission("/goods/setting/spec/set"),this.auth.del=this.$permission("/goods/setting/spec/del"),this.auth.sort=this.$permission("/goods/setting/spec/sort"),this.auth.index=this.$permission("/goods/setting/spec/index"),this.auth.close=this.$permission("/goods/setting/spec/close")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.spec_id)})):t.push(this.currentTableData[e].spec_id),t},sortChange:function(e){var t=e.column,a=e.prop,i=e.order,n={order_type:void 0,order_field:void 0};t&&i&&(n.order_type="ascending"===i?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleSelectionChange:function(e){this.multipleSelection=e},handleCreate:function(){var e=this;this.form={goods_type_id:this.selectId,name:"",spec_item:"",spec_index:1,spec_type:0,sort:50},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(s["a"])(Object(o["a"])(Object(o["a"])({},e.form),{},{spec_item:e.form.spec_item.trim().split("\n")})).then((function(t){e.currentTableData.unshift(Object(o["a"])(Object(o["a"])({},t.data),{},{get_goods_type:Object(o["a"])({},e.typeData.find((function(e){return e.goods_type_id===t.data.goods_type_id})))})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.form=Object(o["a"])(Object(o["a"])({},a),{},{spec_item:a.spec_item.join("\n")}),this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(s["f"])(Object(o["a"])(Object(o["a"])({},e.form),{},{spec_item:e.form.spec_item.trim().split("\n")})).then((function(t){e.selectId&&e.form.goods_type_id!==e.selectId?(e.currentTableData.splice(e.currentIndex,1),e.currentTableData.length<=0&&e.$emit("refresh",!0)):e.$set(e.currentTableData,e.currentIndex,Object(o["a"])(Object(o["a"])(Object(o["a"])({},e.currentTableData[e.currentIndex]),t.data),{},{get_goods_type:Object(o["a"])({},e.typeData.find((function(e){return e.goods_type_id===t.data.goods_type_id})))})),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleIndex:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._getIdList(e);if(0!==n.length){if(!i){var r=this.currentTableData[e],l=r.spec_index?0:1;if(r.spec_index>1)return;if(0===l&&!this.auth.close)return;if(1===l&&!this.auth.index)return;return this.$set(this.currentTableData,e,Object(o["a"])(Object(o["a"])({},r),{},{spec_index:2})),void c(n,l,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(n,a,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,a){Object(s["g"])(e,t).then((function(){a.currentTableData.forEach((function(i,n){-1!==e.indexOf(i.spec_id)&&a.$set(a.currentTableData,n,Object(o["a"])(Object(o["a"])({},i),{},{spec_index:t}))})),a.$message.success("操作成功")}))}},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(a).then((function(){r["a"].deleteDataList(t.currentTableData,a,"spec_id"),t.currentTableData.length<=0&&t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleSort:function(e){Object(s["h"])(this.currentTableData[e].spec_id,this.currentTableData[e].sort)}}},c=l,d=a("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null);t["default"]=u.exports},"498a":function(e,t,a){"use strict";var i=a("23e7"),n=a("58a8").trim,o=a("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},c8d2:function(e,t,a){var i=a("d039"),n=a("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!n[e]()||o[e]()!=o||n[e].name!==e}))}}}]);
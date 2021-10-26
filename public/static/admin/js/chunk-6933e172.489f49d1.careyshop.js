(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6933e172"],{a05e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"cs-tc clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.stateMap[e.state]))])]),r("el-form",{ref:"form",attrs:{model:e.currentForm,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题",clearable:!0},model:{value:e.currentForm.title,callback:function(t){e.$set(e.currentForm,"title",t)},expression:"currentForm.title"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"article_cat_id"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择文章分类 试试搜索：首页",options:e.catData,props:e.cascaderProps,filterable:"",clearable:""},model:{value:e.currentForm.article_cat_id,callback:function(t){e.$set(e.currentForm,"article_cat_id",t)},expression:"currentForm.article_cat_id"}})],1),r("el-form-item",{attrs:{label:"封面",prop:"image"}},[r("el-input",{attrs:{placeholder:"可输入文章图片",clearable:!0},model:{value:e.currentForm.image,callback:function(t){e.$set(e.currentForm,"image",t)},expression:"currentForm.image"}},[r("template",{slot:"prepend"},[e.currentForm.image?r("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[r("div",{staticClass:"popover-image"},[r("el-image",{attrs:{src:e._f("getPreviewUrl")(e.currentForm.image),fit:"fill"},on:{click:function(t){return t.stopPropagation(),e.$preview(e.currentForm.image)}}})],1),r("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1),r("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:e.handleCommand},slot:"append"},[r("el-button",{attrs:{icon:"el-icon-upload"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[e._v("资源选择")]),r("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[e._v("上传资源")])],1)],1)],2)],1),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{attrs:{placeholder:"可输入文章关键词",clearable:!0},model:{value:e.currentForm.keywords,callback:function(t){e.$set(e.currentForm,"keywords",t)},expression:"currentForm.keywords"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{placeholder:"可输入文章描述",type:"textarea",rows:3},model:{value:e.currentForm.description,callback:function(t){e.$set(e.currentForm,"description",t)},expression:"currentForm.description"}})],1),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("cs-tinymce",{ref:"tinymce",attrs:{code:"inside_content"},model:{value:e.currentForm.content,callback:function(t){e.$set(e.currentForm,"content",t)},expression:"currentForm.content"}})],1),r("el-form-item",{attrs:{label:"文章来源",prop:"source"}},[r("el-input",{attrs:{placeholder:"可输入文章来源",clearable:!0},model:{value:e.currentForm.source,callback:function(t){e.$set(e.currentForm,"source",t)},expression:"currentForm.source"}})],1),r("el-form-item",{attrs:{label:"来源地址",prop:"source_url"}},[r("el-input",{attrs:{placeholder:"可输入来源地址",clearable:!0},model:{value:e.currentForm.source_url,callback:function(t){e.$set(e.currentForm,"source_url",t)},expression:"currentForm.source_url"}})],1),r("el-form-item",{attrs:{label:"外部连接",prop:"url"}},[r("el-input",{attrs:{placeholder:"可输入文章外部连接",clearable:!0},model:{value:e.currentForm.url,callback:function(t){e.$set(e.currentForm,"url",t)},expression:"currentForm.url"}})],1),r("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[r("el-radio-group",{model:{value:e.currentForm.target,callback:function(t){e.$set(e.currentForm,"target",t)},expression:"currentForm.target"}},[r("el-radio",{attrs:{label:"_self"}},[e._v("当前窗口")]),r("el-radio",{attrs:{label:"_blank"}},[e._v("新窗口")])],1)],1),r("el-form-item",{attrs:{label:"置顶",prop:"is_top"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.currentForm.is_top,callback:function(t){e.$set(e.currentForm,"is_top",t)},expression:"currentForm.is_top"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.currentForm.status,callback:function(t){e.$set(e.currentForm,"status",t)},expression:"currentForm.status"}})],1),r("el-form-item",{attrs:{size:"small"}},[r("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:e.handleConfirm}},[e._v(e._s(e.stateButton[e.state]))]),r("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1),r("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e._getStorageFileList}}),r("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:e._getUploadFileList}})],1)],1)],1)},l=[],c=r("b85c"),o=r("5530"),n=(r("d3b7"),r("3ca3"),r("ddb0"),r("7db0"),r("ca00")),i=r("5880"),s=r("1a19"),u={components:{csUpload:function(){return r.e("chunk-584c16a3").then(r.bind(null,"27d4"))},csStorage:function(){return r.e("chunk-66d17b97").then(r.bind(null,"85ce"))},csTinymce:function(){return Promise.all([r.e("chunk-2659cc66"),r.e("chunk-56353b7a")]).then(r.bind(null,"f4ab"))}},props:{state:{type:String,required:!0,default:"create"},formData:{type:Object,required:!1,default:function(){}},catList:{type:Array,required:!0,default:function(){return[]}},catData:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{dialogLoading:!1,stateMap:{create:"新增文章",update:"编辑文章"},stateButton:{create:"确定",update:"修改"},cascaderProps:{value:"article_cat_id",label:"cat_name",children:"children",checkStrictly:!0,emitPath:!1},currentForm:{title:"",article_cat_id:null,image:"",keywords:"",description:"",content:"",source:"",source_url:"",url:"",target:"_blank",is_top:"0",status:"1"},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],article_cat_id:[{required:!0,message:"分类不能为空",trigger:"change"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],source:[{max:60,message:"长度不能大于 60 个字符",trigger:"blur"}],source_url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},filters:{getPreviewUrl:function(e){return e?n["a"].getImageCodeUrl(e,"article_lists"):""}},watch:{formData:{handler:function(e){var t=this;"update"===this.state&&(this.currentForm=e,this.$refs.tinymce&&(this.$refs.tinymce.destroyTinymce(),this.$refs.tinymce.initTinymce(),this.$refs.tinymce.setContent(e.content)),this.$nextTick((function(){t.$refs.form.clearValidate()})))}}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["mapActions"])("careyshop/page",["close"])),Object(i["mapActions"])("careyshop/update",["updateData"])),{},{handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUpload();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.currentForm.image=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,r=Object(c["a"])(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(0===a.type){this.currentForm.image=a.url;break}}}catch(l){r.e(l)}finally{r.f()}}},handleClose:function(){this.close({tagName:this.$route.fullPath})},handleConfirm:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,"create"===e.state?e.handleCreate():e.handleUpdate())}))},handleCreate:function(){var e=this;Object(s["a"])(this.currentForm).then((function(t){e.updateData({type:"add",name:"system-article-admin",data:Object(o["a"])(Object(o["a"])({},t.data),{},{page_views:0,get_article_cat:Object(o["a"])({},e.catList.find((function(e){return e.article_cat_id===t.data.article_cat_id})))})}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))},handleUpdate:function(){var e=this;Object(s["e"])(this.currentForm).then((function(t){e.updateData({type:"set",name:"system-article-admin",srcId:t.data.article_id,data:Object(o["a"])(Object(o["a"])({},t.data),{},{get_article_cat:Object(o["a"])({},e.catList.find((function(e){return e.article_cat_id===t.data.article_cat_id})))})}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))}})},d=u,m=(r("ac46"),r("2877")),p=Object(m["a"])(d,a,l,!1,null,"64f3e70e",null);t["default"]=p.exports},ac46:function(e,t,r){"use strict";r("c780")},c780:function(e,t,r){}}]);
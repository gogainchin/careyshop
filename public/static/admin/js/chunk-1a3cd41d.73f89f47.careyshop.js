(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a3cd41d"],{"128d":function(e,t,a){"use strict";var i=a("b85c"),n=a("ca00"),o=a("60bb");t["a"]={data:function(){return{isCheckDirectory:!0}},filters:{getImageThumb:function(e){var t="/static/admin/",a=t+"image/storage/file.png";switch(e.type){case 0:a=e.url?n["a"].getImageCodeUrl(e.url,"storage_lists"):"";break;case 2:a=e.cover?n["a"].getImageCodeUrl(e.cover,"storage_lists"):t+(e.is_default?"image/storage/default.png":"image/storage/folder.png");break;case 3:a=e.cover?n["a"].getImageCodeUrl(e.cover,"storage_lists"):t+"image/storage/video.png";break}return a},getFileTypeIocn:function(e){switch(e){case 0:return"el-icon-picture-outline";case 1:return"el-icon-document";case 2:return"el-icon-folder";case 3:return"el-icon-video-camera"}return"el-icon-warning-outline"}},methods:{_getStorageIdList:function(){var e,t=[],a=Object(i["a"])(this.currentTableData);try{for(a.s();!(e=a.n()).done;){var n=e.value;(this.isCheckDirectory||2!==n.type)&&t.push(n.storage_id)}}catch(o){a.e(o)}finally{a.f()}return t},allCheckBox:function(){this.checkList=Object(o["union"])(this.checkList,this._getStorageIdList())},reverseCheckBox:function(){this.checkList=Object(o["xor"])(this.checkList,this._getStorageIdList())},cancelCheckBox:function(){this.checkList=Object(o["difference"])(this.checkList,this._getStorageIdList())}}}},"18e7":function(e,t,a){"use strict";a("2bc8")},"2bc8":function(e,t,a){},"55ef":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add||e.auth.upload?a("el-form-item",[a("el-button-group",[e.auth.add?a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增目录")]):e._e(),e.auth.upload?a("el-button",{attrs:{icon:"el-icon-upload2",disabled:e.loading},on:{click:e.handleUpload}},[e._v("上传资源")]):e._e()],1)],1):e._e(),a("el-form-item",[a("el-button-group",[a("el-tooltip",{attrs:{content:"勾选当前页全部资源",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.allCheckBox}},[e._v("全选")])],1),a("el-tooltip",{attrs:{content:"反向勾选当前页资源",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-minus",disabled:e.loading},on:{click:e.reverseCheckBox}},[e._v("反选")])],1),a("el-tooltip",{attrs:{content:"取消当前页勾选",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:e.cancelCheckBox}},[e._v("取消")])],1),a("el-tooltip",{attrs:{content:"清除所有已选中勾选",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",disabled:e.loading},on:{click:function(t){e.checkList=[]}}},[e._v("清除")])],1)],1)],1),a("el-form-item",[a("el-button-group",[e.auth.move?a("el-button",{attrs:{icon:"el-icon-rank",disabled:e.loading},on:{click:function(t){return e.handleMove(null)}}},[e._v("移动")]):e._e(),e.auth.del?a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")]):e._e()],1)],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-breadcrumb",{staticClass:"breadcrumb cs-mb",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("a",{staticClass:"cs-cp",on:{click:function(t){return e.switchFolder(0)}}},[e._v("资源管理")])]),e._l(e.naviData,(function(t){return a("el-breadcrumb-item",{key:t.storage_id},[a("a",{staticClass:"cs-cp",on:{click:function(a){return e.switchFolder(t.storage_id)}}},[e._v(e._s(t.name))])])}))],2),a("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[a("ul",{staticClass:"storage-list"},e._l(e.currentTableData,(function(t,i){return a("li",{key:i},[a("dl",[a("dt",[a("div",{staticClass:"picture cs-m-10"},[a("el-checkbox",{staticClass:"storage-check",attrs:{label:t.storage_id}}),a("el-image",{attrs:{fit:"fill",src:e._f("getImageThumb")(t),lazy:""},nativeOn:{click:function(t){return e.openStorage(i)}}})],1),a("span",{staticClass:"storage-name cs-ml-10",attrs:{title:t.name}},[e._v(e._s(t.name))]),a("el-dropdown",{attrs:{placement:"bottom","show-timeout":50,size:"small"},on:{command:function(t){return e.handleControlItemClick(t)}}},[a("i",{staticClass:"el-icon-more more"}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.auth.rename?a("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:{type:"rename",index:i}}},[e._v("重命名")]):e._e(),2!==t.type&&e.auth.replace?a("el-dropdown-item",{attrs:{icon:"el-icon-upload",command:{type:"replace",index:i},divided:""}},[e._v("替换上传")]):e._e(),0===t.type&&t.parent_id&&e.auth.cover?a("el-dropdown-item",{attrs:{icon:"el-icon-picture",command:{type:"cover",index:i}}},[e._v("设为封面")]):e._e(),3===t.type&&!t.cover&&e.auth.cover?a("el-dropdown-item",{attrs:{icon:"el-icon-picture",command:{type:"video_cover",index:i}}},[e._v("选择海报")]):e._e(),2===t.type&&e.auth.default?a("el-dropdown-item",{attrs:{icon:"el-icon-folder-checked",command:{type:"default",index:i}}},[e._v(e._s(t.is_default?"取消默认":"设为默认"))]):e._e(),t.cover&&e.auth.clear_cover?a("el-dropdown-item",{attrs:{icon:"el-icon-picture",command:{type:"clear_cover",index:i},divided:""}},[e._v(e._s(2===t.type?"取消封面":"取消海报"))]):e._e(),e.auth.move?a("el-dropdown-item",{attrs:{icon:"el-icon-rank",command:{type:"move",storage_id:t.storage_id},divided:""}},[e._v("转移目录")]):e._e(),e.auth.del?a("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:{type:"delete",storage_id:t.storage_id}}},[e._v("删除资源")]):e._e(),0===t.type&&e.auth.refresh?a("el-dropdown-item",{attrs:{icon:"el-icon-refresh",command:{type:"refresh",index:i}}},[e._v("清除缓存")]):e._e(),2!==t.type&&e.auth.link?a("el-dropdown-item",{attrs:{icon:"el-icon-link",command:{type:"link",index:i},divided:""}},[e._v("复制外链")]):e._e()],1)],1)],1),a("dd",{staticClass:"cs-ml-10"},[a("p",[a("span",[e._v("日期："+e._s(t["create_time"]))])]),a("p",[0===t.type?a("span",[e._v("尺寸："+e._s(t.pixel["width"]+","+t.pixel["height"]))]):a("span",[e._v("类型："),a("i",{class:e._f("getFileTypeIocn")(t.type)})])])])])])})),0)]),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot","upload-tip":e.uploadConfig.uploadTip,multiple:e.uploadConfig.multiple,accept:e.uploadConfig.accept,limit:e.uploadConfig.limit,"storage-id":e.storageId},on:{confirm:e._getUploadFileList}}),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e.handleVideoCover}}),a("el-dialog",{attrs:{title:e.nameMap[e.nameStatus],visible:e.nameFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.nameFormVisible=t}}},[a("el-form",{ref:"name",attrs:{model:e.nameForm,rules:e.rules,"label-width":"50px","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{ref:"input",attrs:{placeholder:"请输入目录名称"},nativeOn:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;"create"===e.nameStatus?e.create():e.rename()}},model:{value:e.nameForm.name,callback:function(t){e.$set(e.nameForm,"name",t)},expression:"nameForm.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.nameFormVisible=!1}}},[e._v("取消")]),"create"===e.nameStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.rename}},[e._v("修改")])],1)],1),a("el-dialog",{attrs:{title:"移动资源",visible:e.moveFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.moveFormVisible=t}}},[a("el-tree",{ref:"directory",staticStyle:{"margin-top":"-25px"},attrs:{"node-key":"storage_id",data:e.directoryList,props:e.directoryProps,"highlight-current":!0,"default-expand-all":!0},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,n=t.data;return a("span",{},[a("span",{staticClass:"brother-showing"},[n.children?a("i",{class:"el-icon-"+(i.expanded?"folder-opened":"folder")}):a("i",{staticClass:"el-icon-folder"}),e._v(" "+e._s(i.label)+" ")])])}}])}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.moveFormVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.moveStorage}},[e._v("确定")])],1)],1)],1)},n=[],o=a("5530"),r=a("b85c"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("5319"),a("9911"),a("159b"),a("a434"),a("a9e3"),a("b0c0"),a("ca00")),c=a("707d"),l=a("128d"),d=a("1213"),u={mixins:[l["a"]],components:{csUpload:function(){return a.e("chunk-0fc76377").then(a.bind(null,"27d4"))},csStorage:function(){return a.e("chunk-dee6a43e").then(a.bind(null,"85ce"))}},props:{tableData:{default:function(){return[]}},naviData:{default:function(){return[]}},loading:{default:!1},storageId:{default:0}},data:function(){return{uploadConfig:{},currentTableData:[],checkList:[],dialogLoading:!1,nameForm:{},nameFormVisible:!1,nameStatus:"",nameMap:{update:"重命名",create:"新增目录"},moveFormVisible:!1,moveIdList:[],directoryList:[],directoryProps:{label:"name",children:"children"},videoCover:0,auth:{add:!1,upload:!1,rename:!1,replace:!1,cover:!1,clear_cover:!1,default:!1,move:!1,del:!1,refresh:!1,link:!1},rules:{name:[{required:!0,message:"目录名称不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/system/storage/storage/add"),this.auth.upload=this.$permission("/system/storage/storage/upload"),this.auth.rename=this.$permission("/system/storage/storage/rename"),this.auth.replace=this.$permission("/system/storage/storage/replace"),this.auth.cover=this.$permission("/system/storage/storage/cover"),this.auth.clear_cover=this.$permission("/system/storage/storage/clear_cover"),this.auth.default=this.$permission("/system/storage/storage/default"),this.auth.move=this.$permission("/system/storage/storage/move"),this.auth.del=this.$permission("/system/storage/storage/del"),this.auth.refresh=this.$permission("/system/storage/storage/refresh"),this.auth.link=this.$permission("/system/storage/storage/link")},_getUploadFileList:function(e){var t=-1;this.uploadConfig.replace||this.currentTableData.forEach((function(e,a){2===e.type&&(t=a)}));var a,i=Object(r["a"])(e);try{for(i.s();!(a=i.n()).done;){var n=a.value;if("success"===n.status){var o=n.response;o&&200===o.status&&(this.uploadConfig.replace?this.$set(this.currentTableData,this.uploadConfig.replace,o.data[0]):this.currentTableData.splice(t+1,0,o.data[0]))}}}catch(s){i.e(s)}finally{i.f()}},switchFolder:function(e){this.$emit("clear-name"),this.$emit("refresh",e,!0)},openStorage:function(e){var t=this.currentTableData[e];switch(t.type){case 0:if(isNaN(Number(document.documentMode))){var a=[];this.currentTableData.forEach((function(e){0===e.type&&a.push(e.url)})),this.$preview(a,a.lastIndexOf(t.url))}else this.$preview(t.url);break;case 1:s["a"].open(s["a"].getDownloadUrl(t));break;case 2:this.switchFolder(t.storage_id);break;case 3:this.$player(t.url,t.mime,t.cover);break;default:this.$message.warning("打开资源出现异常操作")}},handleDelete:function(e){var t=this,a=e?[e]:this.checkList;0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(d["d"])(a).then((function(){s["a"].deleteDataList(t.currentTableData,a,"storage_id"),t.currentTableData.length<=0&&t.$emit("refresh",t.storageId,!1,a.length),t.checkList=[],t.directoryList=[],t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.nameForm={name:void 0,parent_id:this.storageId},this.$nextTick((function(){e.$refs.name.clearValidate(),e.$refs.input.focus()})),this.dialogLoading=!1,this.nameStatus="create",this.nameFormVisible=!0},create:function(){var e=this;this.$refs.name.validate((function(t){t&&(e.dialogLoading=!0,Object(d["a"])(e.nameForm).then((function(t){e.currentTableData.unshift(Object(o["a"])(Object(o["a"])({},t.data),{},{is_default:0})),e.directoryList=[],e.nameFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},getStorageDirectory:function(){var e=this;this.directoryList.length||Object(d["f"])().then((function(t){e.directoryList=s["a"].formatDataToTree(t.data.list,"storage_id"),e.directoryList.unshift({storage_id:0,parent_id:0,name:"根目录"})}))},handleMove:function(e){var t=e?[e]:this.checkList;0!==t.length?(this.getStorageDirectory(),this.moveIdList=t,this.dialogLoading=!1,this.moveFormVisible=!0):this.$message.error("请选择要操作的数据")},moveStorage:function(){var e=this,t=this.$refs.directory.getCurrentNode();t?(this.dialogLoading=!0,Object(d["k"])(this.moveIdList,t.storage_id).then((function(t){t.data.length&&e.$emit("refresh",e.storageId,!1,e.moveIdList.length),e.checkList=[],e.directoryList=[],e.moveFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1}))):this.$message.error("请选择需要移动到的目录")},handleRename:function(e){var t=this;this.nameForm={name:this.currentTableData[e].name,storage_id:this.currentTableData[e].storage_id,index:e},this.$nextTick((function(){t.$refs.name.clearValidate(),t.$refs.input.select()})),this.dialogLoading=!1,this.nameStatus="update",this.nameFormVisible=!0},rename:function(){var e=this;this.$refs.name.validate((function(t){t&&(e.dialogLoading=!0,Object(d["l"])(e.nameForm.storage_id,e.nameForm.name).then((function(t){e.currentTableData[e.nameForm.index].name=t.data.name,e.directoryList=[],e.nameFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},setDefault:function(e){var t=this,a=this.currentTableData[e].is_default?0:1;Object(d["n"])(this.currentTableData[e].storage_id,a).then((function(){t.currentTableData.forEach((function(e,a){2===e.type&&(t.currentTableData[a].is_default=0)})),t.currentTableData[e].is_default=a,t.$message.success("操作成功")}))},getLink:function(e){var t=this,a=this.currentTableData[e].url,i=/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;i.test(a)||(a=document.location.protocol+"//"+this.currentTableData[e].url),c["a"](a).then((function(){t.$message.success("已复制链接到剪贴板")})).catch((function(e){t.$message.error(e)}))},handleRefresh:function(e){var t=this;Object(d["c"])(this.currentTableData[e].storage_id).then((function(){t.$message.success("操作成功")}))},handleCover:function(e){var t=this,a=this.currentTableData[e];Object(d["m"])(a.storage_id,a.parent_id).then((function(){t.$message.success("操作成功")}))},handleClearCover:function(e){var t=this,a=this.currentTableData[e];Object(d["b"])(a.storage_id).then((function(){a.cover="",t.$message.success("操作成功")}))},handleControlItemClick:function(e){switch(e.type){case"rename":this.handleRename(e.index);break;case"default":this.setDefault(e.index);break;case"move":this.handleMove(e.storage_id);break;case"delete":this.handleDelete(e.storage_id);break;case"link":this.getLink(e.index);break;case"refresh":this.handleRefresh(e.index);break;case"cover":this.handleCover(e.index);break;case"video_cover":this.videoCover=e.index,this.$refs.storage.handleStorageDlg([0,2]);break;case"clear_cover":this.handleClearCover(e.index);break;case"replace":this.handleReplace(e.index);break;default:this.$message.error("无效的操作");break}},handleUpload:function(){this.uploadConfig={uploadTip:"请选择资源进行(支持拖拽)上传，",multiple:!0,accept:"*/*",limit:0,replace:!1},this.$refs.upload.handleUpload()},handleReplace:function(e){var t=this.currentTableData[e];this.uploadConfig={uploadTip:"替换上传，资源类型需要相同(支持拖拽)，",multiple:!1,accept:t.mime,limit:1,replace:e},this.$refs.upload.setReplaceId(t.storage_id),this.$refs.upload.handleUpload()},handleVideoCover:function(e){var t,a,i=this,n=this.currentTableData[this.videoCover],o=Object(r["a"])(e);try{for(o.s();!(a=o.n()).done;){var s=a.value;if(0===s.type){t=s;break}}}catch(c){o.e(c)}finally{o.f()}t&&Object(d["m"])(t.storage_id,n.storage_id).then((function(){n.cover=t.url,i.$message.success("操作成功")}))}}},h=u,m=(a("18e7"),a("2877")),p=Object(m["a"])(h,i,n,!1,null,"59efaebb",null);t["default"]=p.exports},"707d":function(e,t,a){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function i(e,t,a,i){return new(a||(a=Promise))((function(n,o){function r(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))}function n(e,t){var a,i,n,o,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!((n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],i=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}a.d(t,"a",(function(){return C}));var o=function(e){};function r(e){o(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var s,c,l,d,u="undefined"==typeof navigator?void 0:navigator,h=null==u?void 0:u.clipboard,m=(null===(s=null==h?void 0:h.read)||void 0===s||s.bind(h),null===(c=null==h?void 0:h.readText)||void 0===c||c.bind(h),null===(l=null==h?void 0:h.write)||void 0===l||l.bind(h),null===(d=null==h?void 0:h.writeText)||void 0===d?void 0:d.bind(h)),p="undefined"==typeof window?void 0:window,f=(null==p||p.ClipboardItem,p);function g(){return"undefined"==typeof ClipboardEvent&&void 0!==f.clipboardData&&void 0!==f.clipboardData.setData}var v=function(){this.success=!1};function b(e,t,a){for(var i in r("listener called"),e.success=!0,t){var n=t[i],o=a.clipboardData;o.setData(i,n),"text/plain"===i&&o.getData(i)!==n&&(r("setting text/plain failed"),e.success=!1)}a.preventDefault()}function y(e){var t=new v,a=b.bind(this,t,e);document.addEventListener("copy",a);try{document.execCommand("copy")}finally{document.removeEventListener("copy",a)}return t.success}function _(e,t){k(e);var a=y(t);return w(),a}function k(e){var t=document.getSelection();if(t){var a=document.createRange();a.selectNodeContents(e),t.removeAllRanges(),t.addRange(a)}}function w(){var e=document.getSelection();e&&e.removeAllRanges()}function x(e){return i(this,void 0,void 0,(function(){var t;return n(this,(function(a){if(t="text/plain"in e,g()){if(!t)throw new Error("No `text/plain` value was specified.");if(i=e["text/plain"],f.clipboardData.setData("Text",i))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var i;return y(e)?(r("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(r('UA "Edge" => assuming success'),[2,!0]):_(document.body,e)?(r("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var a=_(t,e);return document.body.removeChild(t),a}(e)?(r("copyUsingTempElem worked"),[2,!0]):function(e){r("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var a=t;t.attachShadow&&(r("Using shadow DOM."),a=t.attachShadow({mode:"open"}));var i=document.createElement("span");i.innerText=e,a.appendChild(i),document.body.appendChild(t),k(i);var n=document.execCommand("copy");return w(),document.body.removeChild(t),n}(e["text/plain"])?(r("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function C(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){if(m)return r("Using `navigator.clipboard.writeText()`."),[2,m(e)];if(!x(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}(function(){function e(e,t){var a;for(var i in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var n=e[i];this._items[i]="string"==typeof n?D(i,n):n}this.presentationStyle=null!==(a=null==t?void 0:t.presentationStyle)&&void 0!==a?a:"unspecified"}e.prototype.getType=function(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this._items[e]]}))}))}})();function D(e,t){return new Blob([t],{type:e})}},"857a":function(e,t,a){var i=a("e330"),n=a("1d80"),o=a("577e"),r=/"/g,s=i("".replace);e.exports=function(e,t,a,i){var c=o(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+s(o(i),r,"&quot;")+'"'),l+">"+c+"</"+t+">"}},9911:function(e,t,a){"use strict";var i=a("23e7"),n=a("857a"),o=a("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(e){return n(this,"a","href",e)}})},af03:function(e,t,a){var i=a("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64a9"],{"1d11":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("a-button-group",[a("a-button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary"},on:{click:t.allRead}},[t._v("\n      一键已读\n    ")]),t._v(" "),a("a-button",{on:{click:t.destroyAll}},[t._v("\n      一键删除\n    ")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[a("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"telephone",label:"联系方式"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a-tag",{attrs:{color:e.row.isRead?"cyan":"purple"}},[t._v("\n          "+t._s(e.row.isRead?"已读":"未读")+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),a("el-popconfirm",{attrs:{"confirm-button-text":"好的","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定删除吗"},on:{onConfirm:function(a){return t.remove(e.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","current-page":t.current_page,total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("a-modal",{attrs:{footer:null,width:"70%",title:"详情"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("a-descriptions",{attrs:{title:"主要内容",bordered:""}},[a("a-descriptions-item",{attrs:{label:"标题"}},[t._v("\n        "+t._s(t.message.title)+"\n      ")]),t._v(" "),a("a-descriptions-item",{attrs:{label:"联系方式"}},[t._v("\n        "+t._s(t.message.telephone)+"\n      ")]),t._v(" "),a("a-descriptions-item",{attrs:{label:"邮箱"}},[t._v("\n        "+t._s(t.message.email)+"\n      ")]),t._v(" "),a("a-descriptions-item",{attrs:{label:"地址"}},[t._v("\n        "+t._s(t.message.address)+"\n      ")]),t._v(" "),a("a-descriptions-item",{attrs:{label:"详情内容"}},[t._v("\n        "+t._s(t.message.detail)+"\n        "),a("br")]),t._v(" "),t._l(t.message.extra,(function(e,n){return a("a-descriptions-item",{key:n,attrs:{label:e.label}},[t._v("\n        "+t._s(e.value)+"\n      ")])}))],2)],1)],1)},s=[],l=a("b775");function r(t){return Object(l["a"])({url:"/messages",method:"get",params:t})}function i(t,e){return Object(l["a"])({url:"/messages/".concat(t),method:"put",data:e})}function o(t){return Object(l["a"])({url:"/messages/".concat(t),method:"delete"})}function c(){return Object(l["a"])({url:"/messages/allRead",method:"post"})}function u(){return Object(l["a"])({url:"/messages/allDelete",method:"delete"})}var d={address:"",created_at:"",detail:"",email:"",extra:[],id:void 0,isRead:!1,telephone:"",title:"",updated_at:""},p={name:"Message",props:{},data:function(){return{current_page:null,per_page:null,total:null,last_page:null,list:[],visible:!1,message:d}},watch:{$route:"fetchList"},created:function(){this.fetchList()},mounted:function(){},methods:{fetchList:function(){var t=this,e=this.$route.query.page;r({page:e}).then((function(e){t.current_page=e.current_page,t.per_page=e.per_page,t.total=e.total,t.last_page=e.last_page,t.list=e.data}))},handleClick:function(t){this.visible=!0,this.message=t,i(t.id,t).then((function(){t.isRead=!0})).catch((function(){}))},remove:function(t){var e=this;o(t.id).then((function(){e.fetchList()})).catch((function(){}))},handleCurrentChange:function(t){this.$router.push({name:"Message",query:{page:t}})},destroyAll:function(){var t=this;u().then((function(e){t.fetchList()}))},allRead:function(){var t=this;c().then((function(e){t.fetchList(),t.$message({message:"操作成功",type:"success",duration:3e3})}))}}},f=p,m=a("2877"),_=Object(m["a"])(f,n,s,!1,null,"8347f02c",null);e["default"]=_.exports}}]);
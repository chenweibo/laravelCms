(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7724678"],{"0ee9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("a-row",{attrs:{type:"flex",justify:"space-between"}},[n("a-col",[n("a-button-group",[n("router-link",{attrs:{to:"/content/create"}},[n("a-button",[t._v(" 添加")])],1)],1)],1),t._v(" "),n("a-col",[n("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"搜索","default-value":t.$route.query.title},on:{search:t.onSearch}})],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"id",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sort",label:"排序",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{label:"分类"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a-tag",{attrs:{color:e.row.menu?"cyan":"red"}},[t._v("\n          "+t._s(e.row.menu?e.row.menu.title:"类目不存在")+"\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button-group",[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"},on:{onConfirm:function(n){return t.handleDelete(e.$index,e.row)}}},[n("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[t._v("删除")])],1)],1)]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next","current-page":t.meta.current_page,total:t.meta.total},on:{"current-change":t.pageChange}})],1)],1)},r=[],o=n("cc48"),c={name:"Content",props:{},data:function(){return{loading:!1,meta:{},data:[]}},watch:{$route:"fetchList"},created:function(){this.fetchList()},mounted:function(){},methods:{fetchList:function(){var t=this,e=this.$route.query.page,n=this.$route.query.title;this.loading=!0,Object(o["d"])({page:e,title:n}).then((function(e){var n=e.data,a=e.meta;t.data=n,t.meta=a,t.loading=!1})).catch((function(){t.loading=!1}))},pageChange:function(t){this.$router.push({name:"Content",query:{page:t}})},onSearch:function(t){this.$router.push({name:"Content",query:{page:this.meta.current_page,title:t}})},handleEdit:function(t,e){this.$router.push({name:"EditContent",params:{id:e.id}})},handleDelete:function(t,e){var n=this;Object(o["b"])(e.id).then((function(t){n.fetchList()}))}}},u=c,i=n("2877"),l=Object(i["a"])(u,a,r,!1,null,"69230186",null);e["default"]=l.exports},cc48:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return l}));var a=n("b775");function r(){return Object(a["a"])({url:"/contents/create",method:"get"})}function o(t){return Object(a["a"])({url:"/contents",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/contents",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/contents/".concat(t),method:"delete"})}function i(t){return Object(a["a"])({url:"/contents/".concat(t),method:"get"})}function l(t,e){return Object(a["a"])({url:"/contents/".concat(t),method:"put",data:e})}}}]);
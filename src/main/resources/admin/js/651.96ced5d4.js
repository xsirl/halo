"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[651],{25651:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-form",{attrs:{wrapperCol:e.wrapperCol,layout:"vertical"}},[t("a-form-item",{attrs:{label:"开发者选项："}},[t("a-switch",{model:{value:e.options.developer_mode,callback:function(r){e.$set(e.options,"developer_mode",r)},expression:"options.developer_mode"}})],1),t("a-form-item",[t("ReactiveButton",{attrs:{errored:e.errored,loading:e.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:function(r){e.errored=!1},click:e.handleSaveOptions}})],1)],1)},a=[],o=t(47458),s=t(86475),i=(t(30535),t(85018),t(70315),t(98906)),c=t(17132),l={name:"SettingsForm",data:function(){return{options:{},wrapperCol:{xl:{span:8},lg:{span:8},sm:{span:12},xs:{span:24}},saving:!1,errored:!1}},created:function(){this.handleListOptions()},methods:(0,s.Z)((0,s.Z)({},(0,i.nv)(["refreshOptionsCache"])),{},{handleListOptions:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.option.listAsMapViewByKeys(["developer_mode"]);case 3:t=r.sent,n=t.data,e.options=n,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),e.$log.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},handleSaveOptions:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.saving=!0,r.next=4,c.Z.option.saveMapView(e.options);case 4:r.next=10;break;case 6:r.prev=6,r.t0=r["catch"](0),e.errored=!1,e.$log.error(r.t0);case 10:return r.prev=10,setTimeout((function(){e.saving=!1}),400),r.next=14,e.handleListOptions();case 14:return r.next=16,e.refreshOptionsCache();case 16:if(e.options.developer_mode){r.next=19;break}return r.next=19,e.$router.replace({name:"ToolList"});case 19:return r.finish(10);case 20:case"end":return r.stop()}}),r,null,[[0,6,10,20]])})))()}})},p=l,u=t(42177),d=(0,u.Z)(p,n,a,!1,null,null,null),v=d.exports}}]);
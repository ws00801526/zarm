webpackJsonp([3],{315:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){alert("执行 onBeforeSelect 方法")}Object.defineProperty(t,"__esModule",{value:!0});var u=a(336),r=l(u),i=a(86),s=l(i),d=a(87),c=l(d),o=a(88),f=l(o),m=a(89),p=l(m),g=a(90),E=l(g),h=a(6),v=l(h),b=a(337),y=l(b),S=a(340),P=l(S),k=a(338),N=l(k),_=a(339);a(573);var B=5,F=function(e){function t(e){(0,c.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.onSelectMulti=function(e){console.log(e);var t=a.state.multiFiles,l=a.state.toast;if(t=t.concat(e),t.length>B)return l.visible=!0,l.children="最多只能选择5张图片",void a.setState({toast:l});a.setState({multiFiles:t})},a.onSelect=function(e){console.log(e);var t=a.state.files;t.push(e),a.setState({files:t})},a.state={multiFiles:[],files:[],filesWithToast:[],allTypeFiles:{},toast:{visible:!1,onMaskClick:function(){var e=a.state.toast;e.visible=!1,a.setState({toast:e})}}},a}return(0,E.default)(t,e),(0,f.default)(t,[{key:"remove",value:function(e,t){var a,l=this.state[e],n=this.state.toast;l.splice(t,1),n.visible=!0,n.children="图片删除成功",this.setState({toast:n}),this.setState((a={},(0,r.default)(a,e,l),(0,r.default)(a,"toast",n),a))}},{key:"fileRender",value:function(e){var t=this;return this.state[e].map(function(a,l){return v.default.createElement(_.Badge,{sup:!0,className:"uploader-item",shape:"circle",text:v.default.createElement(_.Icon,{type:"wrong"}),key:+l,onClick:function(){return t.remove(e,+l)}},v.default.createElement("div",{className:"uploader-item-img"},v.default.createElement("a",{href:a.thumbnail,target:"_blank"},v.default.createElement("img",{src:a.thumbnail,alt:""}))))})}},{key:"render",value:function(){var e=this.state,t=e.toast,a=e.multiFiles;return v.default.createElement(y.default,{className:"uploader-page"},v.default.createElement(P.default,{title:"上传组件 Uploader"}),v.default.createElement("main",null,v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"点击一次选择单张"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},this.fileRender("files"),v.default.createElement(_.Uploader,{className:"uploader-btn",accept:"image/jpg, image/jpeg, image/gif, image/png",onChange:this.onSelect},v.default.createElement(_.Icon,{type:"add"}))))),v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"点击一次选择多张"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},this.fileRender("multiFiles"),a.length<B&&v.default.createElement(_.Uploader,{multiple:!0,className:"uploader-btn",accept:"image/jpg, image/jpeg, image/gif, image/png",onBeforeSelect:n,onChange:this.onSelectMulti},v.default.createElement(_.Icon,{type:"add"}))))),v.default.createElement(_.Panel,null,v.default.createElement(_.Panel.Header,{title:"禁用状态"}),v.default.createElement(_.Panel.Body,null,v.default.createElement("div",{className:"uploader-wrapper"},v.default.createElement(_.Uploader,{className:"uploader-btn",disabled:!0},v.default.createElement(_.Icon,{type:"add"}))))),v.default.createElement(_.Toast,t)),v.default.createElement(N.default,null))}}]),t}(h.Component);t.default=F,e.exports=t.default},573:function(e,t){}});
webpackJsonp([22],{327:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(343),u=a(n),r=l(152),o=a(r),d=l(153),i=a(d),c=l(154),f=a(c),m=l(156),s=a(m),E=l(155),p=a(E),C=l(9),h=a(C),k=l(345),b=a(k),M=l(348),v=a(M),B=l(346),y=a(B),P=l(347),x=function(e){function t(e){(0,i.default)(this,t);var l=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return l.state={alert:!1,confirm:!1},l}return(0,p.default)(t,e),(0,f.default)(t,[{key:"open",value:function(e){this.setState((0,u.default)({},""+e,!0))}},{key:"close",value:function(e){this.setState((0,u.default)({},""+e,!1))}},{key:"render",value:function(){var e=this;return h.default.createElement(b.default,{className:"modal-page"},h.default.createElement(v.default,{title:"模态框 Modal"}),h.default.createElement("main",null,h.default.createElement(P.Panel,null,h.default.createElement(P.Panel.Header,null,h.default.createElement(P.Panel.Title,null,"基本")),h.default.createElement(P.Panel.Body,null,h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",onClick:function(){return e.open("modal1")}},"开启")},"普通"),h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",onClick:function(){return e.open("modal3")}},"开启")},"圆角"),h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",onClick:function(){return e.open("modal2")}},"开启")},"遮罩层可关闭"),h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",onClick:function(){return e.open("modal4")}},"开启")},"无头部"),h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",onClick:function(){return e.open("modal5")}},"开启")},"动画效果"))),h.default.createElement(P.Panel,null,h.default.createElement(P.Panel.Header,null,h.default.createElement(P.Panel.Title,null,"特定场景")),h.default.createElement(P.Panel.Body,null,h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",theme:"warning",onClick:function(){return e.open("alert")}},"开启")},"警告框 Alert"),h.default.createElement(P.Cell,{description:h.default.createElement(P.Button,{size:"xs",theme:"warning",onClick:function(){return e.open("confirm")}},"开启")},"确认框 Confirm"))),h.default.createElement(P.Modal,{visible:this.state.modal1},h.default.createElement(P.Modal.Header,{title:"标题",onClose:function(){return e.close("modal1")}}),h.default.createElement(P.Modal.Body,null,"模态框内容")),h.default.createElement(P.Modal,{visible:this.state.modal2,onMaskClick:function(){return e.close("modal2")}},h.default.createElement(P.Modal.Header,{title:"标题"}),h.default.createElement(P.Modal.Body,null,"点击遮罩层关闭")),h.default.createElement(P.Modal,{shape:"radius",visible:this.state.modal3},h.default.createElement(P.Modal.Header,{title:"标题",onClose:function(){return e.close("modal3")}}),h.default.createElement(P.Modal.Body,null,"模态框内容")),h.default.createElement(P.Modal,{visible:this.state.modal4,onMaskClick:function(){return e.close("modal4")}},h.default.createElement(P.Modal.Body,null,"无头部")),h.default.createElement(P.Modal,{visible:this.state.modal5,animationType:"rotate",onMaskClick:function(){return e.close("modal5")}},h.default.createElement(P.Modal.Body,null,"当前使用的是rotate旋转效果。",h.default.createElement("br",null),h.default.createElement("br",null),"支持多种动画效果：",h.default.createElement("br",null),"zoom：缩放效果（默认）",h.default.createElement("br",null),"rotate：旋转效果",h.default.createElement("br",null),"fade：淡出淡入效果",h.default.createElement("br",null),"door：开关门效果",h.default.createElement("br",null),"flip：翻转效果",h.default.createElement("br",null),"moveUp、moveDown、moveLeft、moveRight：移出移入效果",h.default.createElement("br",null),"slideUp、slideDown、slideLeft、slideRight：滑出滑入效果",h.default.createElement("br",null))),h.default.createElement(P.Alert,{shape:"radius",visible:this.state.alert,title:"警告",message:"这里是警告信息",onCancel:function(){return e.close("alert")}}),h.default.createElement(P.Confirm,{shape:"radius",visible:this.state.confirm,title:"确认信息",message:"你确定要这样做吗？",onOk:function(){return alert("click ok")},onCancel:function(){return e.close("confirm")}})),h.default.createElement(y.default,null))}}]),t}(C.Component);t.default=x,e.exports=t.default}});
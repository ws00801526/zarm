webpackJsonp([3],{247:function(e,t,a){"use strict";function n(){alert("执行 onBeforeSelect 方法")}Object.defineProperty(t,"__esModule",{value:!0});var i=(a(294),a(295)),l=(a(395),a(397)),r=(a(272),a(273)),s=(a(332),a(334)),c=(a(279),a(278)),o=a(268),u=a.n(o),f=a(64),p=a.n(f),m=a(65),h=a.n(m),d=a(66),v=a.n(d),y=a(67),E=a.n(y),b=a(68),g=a.n(b),C=a(0),k=a.n(C),S=a(270),w=a(275),N=a(271),_=a(403),x=(a.n(_),5),T=function(e){function t(e){h()(this,t);var a=E()(this,(t.__proto__||p()(t)).call(this,e));return a.onSelectMulti=function(e){console.log(e);var t=a.state.multiFiles,n=a.state.toast;if(t=t.concat(e),t.length>x)return n.visible=!0,n.children="最多只能选择5张图片",void a.setState({toast:n});a.setState({multiFiles:t})},a.onSelect=function(e){console.log(e);var t=a.state.files;t.push(e),a.setState({files:t})},a.state={multiFiles:[],files:[],filesWithToast:[],allTypeFiles:{},toast:{visible:!1,onMaskClick:function(){var e=a.state.toast;e.visible=!1,a.setState({toast:e})}}},a}return g()(t,e),v()(t,[{key:"remove",value:function(e,t){var a,n=this.state[e],i=this.state.toast;n.splice(t,1),i.visible=!0,i.children="图片删除成功",this.setState({toast:i}),this.setState((a={},u()(a,e,n),u()(a,"toast",i),a))}},{key:"fileRender",value:function(e){var t=this;return this.state[e].map(function(a,n){return k.a.createElement(s.a,{sup:!0,className:"uploader-item",shape:"circle",text:k.a.createElement(c.a,{type:"wrong"}),key:+n,onClick:function(){return t.remove(e,+n)}},k.a.createElement("div",{className:"uploader-item-img"},k.a.createElement("a",{href:a.thumbnail,target:"_blank"},k.a.createElement("img",{src:a.thumbnail,alt:""}))))})}},{key:"render",value:function(){var e=this.state,t=e.toast,a=e.multiFiles;return k.a.createElement(S.a,{className:"uploader-page"},k.a.createElement(w.a,{title:"上传组件 Uploader"}),k.a.createElement("main",null,k.a.createElement(r.a,null,k.a.createElement(r.a.Header,{title:"点击一次选择单张"}),k.a.createElement(r.a.Body,null,k.a.createElement("div",{className:"uploader-wrapper"},this.fileRender("files"),k.a.createElement(l.a,{className:"uploader-btn",accept:"image/*",onChange:this.onSelect},k.a.createElement(c.a,{type:"add"}))))),k.a.createElement(r.a,null,k.a.createElement(r.a.Header,{title:"点击一次选择多张"}),k.a.createElement(r.a.Body,null,k.a.createElement("div",{className:"uploader-wrapper"},this.fileRender("multiFiles"),a.length<x&&k.a.createElement(l.a,{multiple:!0,className:"uploader-btn",accept:"image/*",onBeforeSelect:n,onChange:this.onSelectMulti},k.a.createElement(c.a,{type:"add"}))))),k.a.createElement(r.a,null,k.a.createElement(r.a.Header,{title:"禁用状态"}),k.a.createElement(r.a.Body,null,k.a.createElement("div",{className:"uploader-wrapper"},k.a.createElement(l.a,{className:"uploader-btn",disabled:!0},k.a.createElement(c.a,{type:"add"}))))),k.a.createElement(i.a,t)),k.a.createElement(N.a,null))}}]),t}(C.Component);t.default=T},294:function(e,t,a){"use strict";var n=(a(267),a(290),a(331));a.n(n)},295:function(e,t,a){"use strict";var n=a(268),i=a.n(n),l=a(64),r=a.n(l),s=a(65),c=a.n(s),o=a(66),u=a.n(o),f=a(67),p=a.n(f),m=a(68),h=a.n(m),d=a(0),v=a.n(d),y=a(266),E=a.n(y),b=a(291),g=function(e){function t(e){c()(this,t);var a=p()(this,(t.__proto__||r()(t)).call(this,e));return a.enter=function(e,t){a.setState({isShow:!0}),0!==e&&(a.timer=setTimeout(function(){"function"==typeof t&&t(),clearTimeout(a.timer)},e))},a.leave=function(){a.setState({isShow:!1})},a.state={isShow:!1},a}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter(this.props.stayTime,this.props.onMaskClick)}},{key:"componentWillReceiveProps",value:function(e){clearTimeout(this.timer),e.visible?this.enter(e.stayTime,e.onMaskClick):this.leave()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.className,n=e.visible,l=e.children,r=e.onMaskClick,s=E()(""+t,a,i()({},t+"-open",this.state.isShow));return v.a.createElement("div",{className:s},v.a.createElement("div",{className:t+"-container"},l),v.a.createElement(b.a,{visible:n,type:"transparent",onClose:r}))}}]),t}(d.PureComponent);t.a=g,g.defaultProps={prefixCls:"za-toast",visible:!1,stayTime:3e3}},331:function(e,t){},332:function(e,t,a){"use strict";var n=(a(267),a(333));a.n(n)},333:function(e,t){},334:function(e,t,a){"use strict";var n=a(269),i=a.n(n),l=a(268),r=a.n(l),s=a(64),c=a.n(s),o=a(65),u=a.n(o),f=a(66),p=a.n(f),m=a(67),h=a.n(m),d=a(68),v=a.n(d),y=a(274),E=a.n(y),b=a(0),g=a.n(b),C=a(266),k=a.n(C),S=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof E.a)for(var i=0,n=E()(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]]);return a},w=function(e){function t(){return u()(this,t),h()(this,(t.__proto__||c()(t)).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,n=t.className,l=t.theme,s=t.shape,c=t.sup,o=t.text,u=t.children,f=S(t,["prefixCls","className","theme","shape","sup","text","children"]),p=k()(""+a,n,(e={},r()(e,"theme-"+l,!!l),r()(e,"shape-"+s,!!s),e)),m=k()(a+"-sup",r()({},a+"-sup-up",c));return g.a.createElement("span",{className:p},u,g.a.createElement("sup",i()({className:m},f),o))}}]),t}(b.PureComponent);t.a=w,w.defaultProps={prefixCls:"za-badge",theme:"error",sup:!1}},395:function(e,t,a){"use strict";var n=(a(267),a(396));a.n(n)},396:function(e,t){},397:function(e,t,a){"use strict";var n=a(64),i=a.n(n),l=a(65),r=a.n(l),s=a(66),c=a.n(s),o=a(67),u=a.n(o),f=a(68),p=a.n(f),m=a(0),h=a.n(m),d=a(266),v=a.n(d),y=a(398),E=function(e){function t(e){r()(this,t);var a=u()(this,(t.__proto__||i()(t)).call(this,e));return a.handleDefaultInput=function(e){e.target.value=null;var t=a.props,n=t.onBeforeSelect,i=t.disabled;"function"==typeof n&&(!1===n()||i)&&e.preventDefault()},a.handleClick=function(){a.file.click()},a.handleChange=function(e){var t=a.props,n=t.onChange,i=t.quality,l=t.multiple,r=[].slice.call(e.target.files),s=[],c=function(e){l?(s.push(e),r.length===s.length&&"function"==typeof n&&n(s)):"function"==typeof n&&n(e)};r&&r.map(function(e){return Object(y.a)({file:e,quality:i},c)})},a.state={fileList:[]},a}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCls,n=t.className,i=t.multiple,l=t.accept,r=t.capture,s=t.disabled,c=t.children,o=v()(a,n,{disabled:s});return h.a.createElement("div",{className:o},h.a.createElement("input",{className:a+"-input",type:"file",ref:function(t){e.file=t},accept:l,multiple:i,capture:r,onClick:this.handleDefaultInput,onChange:this.handleChange}),h.a.createElement("span",{className:a+"-trigger",onClick:this.handleClick}),c)}}]),t}(m.PureComponent);t.a=E,E.defaultProps={prefixCls:"za-uploader",disabled:!1,multiple:!1,onBeforeSelect:function(){return!0}}},398:function(e,t,a){"use strict";function n(e,t){var a=e.file,n=e.quality,r=Object(i.a)(a),s=r.fileSize,c=r.fileType,o=r.isPic,u=r.fileName,f={file:a,fileType:c,fileSize:s,fileName:u,thumbnail:""},p=function(e){f.thumbnail=e,t(f)};o?Object(l.a)({file:a,quality:n,fileType:c},p):t(f)}t.a=n;var i=a(399),l=a(401)},399:function(e,t,a){"use strict";function n(e){var t=e.size,a=e.name,n=e.type||a.substr(a.lastIndexOf(".")+1);return{fileName:a,fileSize:t,fileType:n,isPic:Object(i.a)(n)}}t.a=n;var i=a(400)},400:function(e,t,a){"use strict";function n(e){var t=/image.*/;return!!e.match(t)}t.a=n},401:function(e,t,a){"use strict";function n(e,t){var a=e.file,n=e.quality,l=e.fileType,r=e.maxWidth,s=e.maxHeight,c=document.createElement("img");window.URL=window.URL||window.webkitURL,c.src=window.URL.createObjectURL(a),c.onload=function(){var e=void 0;e=n||r||s?Object(i.a)(c,n,l):c.src,t(e)}}t.a=n;var i=a(402)},402:function(e,t,a){"use strict";function n(e,t,a){var n=document.createElement("canvas"),i=n.getContext("2d");if(!i)return e;var l=e.width,r=e.height;return n.width=l,n.height=r,i.fillStyle="#fff",i.fillRect(0,0,n.width,n.height),i.drawImage(e,0,0,l,r),t>0&&t<=1||console.error("请输入有效的压缩比例, 没有将默认使用 0.92"),n.toDataURL(a,t)}t.a=n},403:function(e,t){}});
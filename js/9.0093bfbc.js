webpackJsonp([9],{263:function(e,t,n){"use strict";function a(){return T.map(function(e,t){return E.a.createElement("div",{className:"swipe-item-pic",key:+t},E.a.createElement("img",{src:e,alt:""}))})}Object.defineProperty(t,"__esModule",{value:!0});var i=(n(280),n(281)),o=(n(340),n(342)),r=(n(272),n(273)),s=n(64),l=n.n(s),c=n(65),u=n.n(c),p=n(66),f=n.n(p),m=n(67),d=n.n(m),v=n(68),h=n.n(v),g=n(0),E=n.n(g),I=n(270),y=n(275),x=n(271),D=n(446),T=(n.n(D),[n(447),n(448),n(449)]),w=function(e){function t(){return u()(this,t),d()(this,(t.__proto__||l()(t)).apply(this,arguments))}return h()(t,e),f()(t,[{key:"render",value:function(){var e=this;return E.a.createElement(I.a,{className:"swipe-page"},E.a.createElement(y.a,{title:"图片轮播 Swipe"}),E.a.createElement("main",null,E.a.createElement(r.a,null,E.a.createElement(r.a.Header,{title:"基本"}),E.a.createElement(r.a.Body,null,E.a.createElement(o.a,{onChangeEnd:function(e){console.log(e)}},a()))),E.a.createElement(r.a,null,E.a.createElement(r.a.Header,{title:"纵向"}),E.a.createElement(r.a.Body,null,E.a.createElement(o.a,{direction:"top",height:"48vw"},a()))),E.a.createElement(r.a,null,E.a.createElement(r.a.Header,{title:"循环轮播"}),E.a.createElement(r.a.Body,null,E.a.createElement(o.a,{ref:function(t){e.swipe=t},loop:!0,direction:"left",onChangeEnd:function(e){console.log(e)}},a()),E.a.createElement("div",{className:"controls"},E.a.createElement(i.a,{block:!0,size:"sm",onClick:function(){e.swipe.onJumpTo(0)}},"无动画切换指定页"),E.a.createElement(i.a,{block:!0,size:"sm",onClick:function(){e.swipe.onSlideTo(2)}},"滑动到指定页")))),E.a.createElement(r.a,null,E.a.createElement(r.a.Header,{title:"自动循环轮播"}),E.a.createElement(r.a.Body,null,E.a.createElement(o.a,{autoPlay:!0,loop:!0,direction:"left",onChangeEnd:function(e){console.log(e)}},a())))),E.a.createElement(x.a,null))}}]),t}(g.Component);t.default=w},340:function(e,t,n){"use strict";var a=(n(267),n(341));n.n(a)},341:function(e,t){},342:function(e,t,n){"use strict";var a=n(268),i=n.n(a),o=n(64),r=n.n(o),s=n(65),l=n.n(s),c=n(66),u=n.n(c),p=n(67),f=n.n(p),m=n(68),d=n.n(m),v=n(0),h=n.n(v),g=n(266),E=n.n(g),I=n(282),y=n(288),x=function(e){function t(e){l()(this,t);var n=f()(this,(t.__proto__||r()(t)).call(this,e));return n.translateX=0,n.translateY=0,n.onSlideTo=function(e){n.onMoveTo(e,n.props.animationDuration)},n.onJumpTo=function(e){n.onMoveTo(e,0)},n.onMoveTo=function(e,t){var a=n.swipeItems;if(a){var i=n.props,o=i.loop,r=i.children,s=r.length;n.translateX=-a.offsetWidth*(e+o),n.translateY=-a.offsetHeight*(e+o),n.doTransition({x:n.translateX,y:n.translateY},t),e>s-1?e=0:e<0&&(e=s-1),n.setState({activeIndex:e})}},n.onDragStart=function(){var e=n.state.activeIndex,t=n.props.children.length;e<=0?n.onJumpTo(0):e>=t-1&&n.onJumpTo(t-1),n.pauseAutoPlay()},n.onDragMove=function(e,t){var a=t.offsetX,i=t.offsetY,o=Math.abs(a),r=Math.abs(i);if(n.isDirectionX()&&(o<5||o>=5&&r>=1.73*o))return!1;if(!n.isDirectionX()&&(r<5||r>=5&&o>=1.73*r))return!1;if(!n.props.loop){if(n.isLastIndex()&&(n.isDirectionX()&&a<0||!n.isDirectionX()&&i<0))return!1;if(n.isFirstIndex()&&(n.isDirectionX()&&a>0||!n.isDirectionX()&&i>0))return!1}return e.preventDefault(),n.doTransition({x:n.translateX+a,y:n.translateY+i},0),!0},n.onDragEnd=function(e,a){var i=a.offsetX,o=a.offsetY,r=a.startTime;if(i||o){var s=n.props,l=s.moveDistanceRatio,c=void 0===l?t.defaultProps.moveDistanceRatio:l,u=s.moveTimeSpan,p=void 0===u?t.defaultProps.moveTimeSpan:u,f=s.onChange,m=n.state.activeIndex,d=n.swipeItems,v=(new Date).getTime()-r.getTime();if((n.isDirectionX()?Math.abs(i/d.offsetWidth):Math.abs(o/d.offsetHeight))>=c||v<=p){var h=!(n.isDirectionX()&&i>0||!n.isDirectionX()&&o>0);"function"==typeof f&&f(n.parseActiveIndexParse(h)),m=h?m+1:m-1}n.onSlideTo(m),n.startAutoPlay()}},n.parseActiveIndexParse=function(e){var t=n.props,a=t.loop,i=t.children,o=i.length-1,r=n.state.activeIndex;return r=e?r+1>o?a?0:o:r+=1:r-1<0?a?o:0:r-=1},n.startAutoPlay=function(){var e=n.props,t=e.direction,a=void 0===t?"left":t,i=e.loop,o=e.autoPlay,r=e.autoPlayIntervalTime,s=e.children;n.moveInterval=o&&setInterval(function(){var e=n.state.activeIndex,t=s.length;if(e=["left","top"].indexOf(a)>-1?e+1:e-1,!i&&e>t-1)return void n.pauseAutoPlay();n.onSlideTo(e)},r)},n.pauseAutoPlay=function(){n.moveInterval&&clearInterval(n.moveInterval)},n.parseItems=function(e){if(0!==e.children.length){var t=[].concat(e.children),a=t[0],o=t[t.length-1];e.loop&&(t.push(a),t.unshift(o));var r=h.a.Children.map(t,function(t,n){var a;return Object(v.cloneElement)(t,{key:n,className:E()((a={},i()(a,e.prefixCls+"-item",!0),i()(a,t.props.className,!!t.props.className),a))})});n.setState({items:r})}},n.resize=function(){n.onJumpTo(n.state.activeIndex)},n.doTransition=function(e,t){var a=n.swipeItems,i=0,o=0;n.isDirectionX()?i=e.x:o=e.y,a.style.WebkitTransformDuration=t+"ms",a.style.transitionDuration=t+"ms",a.style.WebkitTransform="translate3d("+i+"px, "+o+"px, 0)",a.style.transform="translate3d("+i+"px, "+o+"px, 0)"},n.transitionEnd=function(){var e=n.state.activeIndex,t=n.swipeItems;n.translateX=-t.offsetWidth*(e+n.props.loop),n.translateY=-t.offsetHeight*(e+n.props.loop),n.doTransition({x:n.translateX,y:n.translateY},0);var a=n.props.onChangeEnd;"function"==typeof a&&a(e)},n.isLastIndex=function(){return n.state.activeIndex>=n.props.children.length-1},n.isFirstIndex=function(){return n.state.activeIndex<=0},n.isDirectionX=function(){return["left","right"].indexOf(n.props.direction||t.defaultProps.direction)>-1},n.renderPaginationItem=function(e,t){var a={};return n.isDirectionX()&&(a.display="inline-block"),h.a.createElement("li",{role:"tab",key:"pagination-"+t,className:E()({active:t===n.state.activeIndex}),style:a,onClick:function(){return n.onSlideTo(t)}})},n.renderPagination=function(){var e=n.props,t=e.prefixCls,a=e.children;return h.a.createElement("div",{className:t+"-pagination"},h.a.createElement("ul",null,v.Children.map(a,n.renderPaginationItem)))},n.state={items:[],activeIndex:e.activeIndex},n}return d()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.parseItems(this.props),this.startAutoPlay()}},{key:"componentDidMount",value:function(){I.a.on(window,"resize",this.resize),I.a.on(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),I.a.on(this.swipeItems,"transitionend",this.transitionEnd),this.onJumpTo(this.props.activeIndex)}},{key:"componentWillReceiveProps",value:function(e){"children"in e&&this.parseItems(e),"activeIndex"in e&&this.onJumpTo(e.activeIndex)}},{key:"componentWillUnmount",value:function(){this.pauseAutoPlay(),I.a.off(window,"resize",this.resize),I.a.off(this.swipeItems,"webkitTransitionEnd",this.transitionEnd),I.a.off(this.swipeItems,"transitionend",this.transitionEnd)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,i=t.height,o=t.showPagination,r=E()(""+n,a),s={};return this.isDirectionX()?s.whiteSpace="nowrap":s.height=i,h.a.createElement("div",{className:r},h.a.createElement(y.a,{onDragStart:this.onDragStart,onDragMove:this.onDragMove,onDragEnd:this.onDragEnd},h.a.createElement("div",{ref:function(t){e.swipeItems=t},className:n+"-items",style:s},this.state.items)),o&&this.renderPagination())}}]),t}(v.Component);t.a=x,x.defaultProps={prefixCls:"za-swipe",direction:"left",height:160,loop:!1,activeIndex:0,animationDuration:300,autoPlay:!1,autoPlayIntervalTime:3e3,moveDistanceRatio:.5,moveTimeSpan:300,showPagination:!0}},446:function(e,t){},447:function(e,t,n){e.exports=n.p+"images/1.a3651992.png"},448:function(e,t,n){e.exports=n.p+"images/2.97af865c.png"},449:function(e,t,n){e.exports=n.p+"images/3.cbbc9abc.png"}});
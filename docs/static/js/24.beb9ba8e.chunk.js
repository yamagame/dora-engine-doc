(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{30:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(33),r=n(34),o=n(36),i=n(35),c=n(37),l=n(0),u=n.n(l),s=n(62),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(s.a,{title:"USB\u30de\u30a4\u30af\u5bfe\u5fdc",data:"\nVoiceKit\u306e\u30de\u30a4\u30af\u3067\u306f\u306a\u304f\u3001USB\u30de\u30a4\u30af\u306b\u3059\u308b\u5834\u5408\u306f\u3001\u74b0\u5883\u5909\u6570 ROBOT_USB_MIC_DEVICE \u306b\u30c7\u30d0\u30a4\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u4e0b\u8a18\u306f\u4f8b\u3067\u3059\u3002\n\n~\nROBOT_USB_MIC_DEVICE=plughw:1,0\n~\n\n"})}}]),t}(l.Component)},58:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},59:function(e,t,n){"use strict";var a=n(58),r=n(33),o=n(34),i=n(36),c=n(35),l=n(37),u=n(0),s=n.n(u),p=n(61),f=n.n(p),d="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",m=!1,h=null,y=function(){h&&clearTimeout(h),h=setTimeout(function(){m?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(d,(void 0).onLoad)},100)},g=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),m=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),y(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):f()(d,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):f()(d,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=v},60:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),i=encodeURIComponent(n),c=encodeURIComponent(a),l=o;return""!==n&&"undefined"!==typeof n&&(l+="+".concat(i)),""!==a&&"undefined"!==typeof a&&(l+="+".concat(c)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,i=encodeURIComponent(t),c=encodeURIComponent(a),l=encodeURIComponent(o),u=i;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(c)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))},i=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,i=encodeURIComponent(t),c=encodeURIComponent(a),l=encodeURIComponent(o),u=i;return""!==a&&"undefined"!==typeof a&&(u+="+".concat(c)),""!==o&&"undefined"!==typeof o&&(u+="+".concat(l)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))}},61:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,r),i.onload||n(i,r),o.appendChild(i)}},62:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(58),i=function(e){var t=e.children,n=e.style;return r.a.createElement("header",{className:"Page-header",style:Object(o.a)({backgroundColor:"#F4F4F4"},n)},r.a.createElement("h3",{className:["Page-header-col"].join(" ")},"\u25a1 ",t))},c=n(33),l=n(34),u=n(36),s=n(35),p=n(37),f=n(59),d=n(60),m=n(63),h=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=(e.pageDivide,null);return r.a.createElement("div",null,this.props.data.split("\n").map(function(e,o){var c=e.trim().match("([#&$!/~-]*)(.+)");if(c){if("~"==e.trim()){if(null!=a){var l=a;return a=null,r.a.createElement("div",{style:{fontSize:"0.8em",padding:"3.5em",paddingTop:0,paddingBottom:0},key:o},r.a.createElement("pre",{style:{margin:5,padding:15,backgroundColor:"#F4F4F4"}},r.a.createElement("code",null,l)))}return a="",null}if(null!=a)return""!=a&&(a+="\n"),a+=e,null;if("-"==c[1])return r.a.createElement("p",{style:{paddingLeft:"2em",margin:5},key:o},"\u30fb",c[2].trim());if("$"==c[1][0])return r.a.createElement("p",{align:"center"},r.a.createElement("img",{style:{border:"solid 1px lightgray"},src:"".concat("/dora-engine-doc").concat(c[2].trim())}));if("&"==c[1]){var u=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement(m.a,{to:"".concat(u[3].trim())},u[2]))}if("&&"==c[1]){var s=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement("a",{target:encodeURIComponent(s[2]),href:"".concat(s[3].trim())},s[2]))}if("!"==c[1])return r.a.createElement("h4",{style:{paddingLeft:"1em"},key:o},r.a.createElement(f.a,{value:c[2].trim()}));if("!!"==c[1])return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement(f.a,{style:{paddingLeft:"1em"},value:c[2].trim()}));if("!!!"==c[1])return r.a.createElement("p",{style:{marginLeft:"2.5em",marginRight:"1em"},key:o},r.a.createElement(f.a,{style:{paddingLeft:"1em"},value:c[2].trim()}));if("#"==c[1])return r.a.createElement(i,{style:{marginTop:"2em"},key:o},r.a.createElement(f.a,{style:{display:"inline"},value:c[2].trim()}));if("##"==c[1])return r.a.createElement(d.b,{style:{paddingLeft:"1em"},target:c[2].trim(),category:t,subcategory:n,key:o},r.a.createElement(f.a,{style:{display:"inline"},value:c[2].trim()}));if("/"==c[1][0])return null;if("~~"==e.trim())return r.a.createElement("div",{className:"page-divide",key:o});if("--"==e.trim())return r.a.createElement("hr",{key:o});if("~"==c[1]){var p=c[2].trim().split("\u3001");return r.a.createElement("p",{style:{paddingLeft:"1em"},key:o},p.map(function(e,a){return r.a.createElement("span",{key:a},r.a.createElement(d.c,{category:t,subcategory:n},e),a<p.length-1?"\u3001":"")}))}return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement("span",{style:{paddingLeft:"1em"},key:o},c[2].trim()))}return null!=a?(""!=a&&(a+="\n"),a+=e,null):r.a.createElement("p",null)}),this.props.children)}}]),t}(a.Component);h.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0};t.a=function(e){var t=e.pages,n=e.category,a=void 0===n?"":n,o=e.title,c=void 0===o?"":o,l=e.data,u=void 0===l?"":l;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null,c)),u?r.a.createElement(h,{data:u}):null,t?t.map(function(e,n){return e.page({pageInfo:{title:e.title,page:n+1,maxPage:t.length,category:a}})}):null,r.a.createElement("div",{style:{height:100}}))}},63:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(4),l=n.n(c),u=n(38),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!f(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(u.b)(t,null,null,o.location):t,c=o.createHref(i);return r.a.createElement("a",s({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(r.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=d}}]);
//# sourceMappingURL=24.beb9ba8e.chunk.js.map
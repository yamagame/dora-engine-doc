(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{20:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n(26),r=n(27),o=n(29),c=n(28),i=n(30),l=n(0),u=n.n(l),s=n(55),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(s.a,{title:"Google Speech-to-Text",data:"\n\u97f3\u58f0\u8a8d\u8b58\u306b Google Speech-to-Text API \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\n\n#\u6e96\u5099\n\u4e0b\u8a18URL\u306e\u30da\u30fc\u30b8\u306e\u300cGoogle Speech API\u306e\u6e96\u5099\u300d\u3092\u53c2\u7167\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\n&&[https://github.com/yamagame/dora-engine]https://github.com/yamagame/dora-engine\n\n#\u6599\u91d1\nGoogle Speech-to-Text API\u306e\u6599\u91d1\u306b\u3064\u3044\u3066\u306f\u6b21\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n&&[https://cloud.google.com/speech-to-text/pricing]https://cloud.google.com/speech-to-text/pricing\n"})}}]),t}(l.Component)},51:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return r})},52:function(e,t,n){"use strict";var a=n(51),r=n(26),o=n(27),c=n(29),i=n(28),l=n(30),u=n(0),s=n.n(u),p=n(54),f=n.n(p),m="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",d=!1,h=null,y=function(){h&&clearTimeout(h),h=setTimeout(function(){d?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(m,(void 0).onLoad)},100)},g=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),d=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),y(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):f()(m,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?y(this.props.target):f()(m,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=v},53:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(0),r=n.n(a);t.c=function(e){var t=e.children,n=e.category,a=e.subcategory,o=encodeURIComponent(t),c=encodeURIComponent(n),i=encodeURIComponent(a),l=o;return""!==n&&(l+="+".concat(c)),""!==a&&(l+="+".concat(i)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(l)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),l=encodeURIComponent(o),u=c;return""!==a&&(u+="+".concat(i)),""!==o&&(u+="+".concat(l)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))},c=function(e){var t=e.target,n=e.children,a=e.category,o=e.subcategory,c=encodeURIComponent(t),i=encodeURIComponent(a),l=encodeURIComponent(o),u=c;return""!==a&&(u+="+".concat(i)),""!==o&&(u+="+".concat(l)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(u)},n))}},54:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},c.type=t.type||"text/javascript",c.charset=t.charset||"utf8",c.async=!("async"in t)||!!t.async,c.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(c,t.attrs),t.text&&(c.text=""+t.text),("onload"in c?n:a)(c,r),c.onload||n(c,r),o.appendChild(c)}},55:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(51),c=function(e){var t=e.children,n=e.style;return r.a.createElement("header",{className:"Page-header",style:Object(o.a)({backgroundColor:"#F4F4F4"},n)},r.a.createElement("h3",{className:["Page-header-col"].join(" ")},"\u25a1 ",t))},i=n(26),l=n(27),u=n(29),s=n(28),p=n(30),f=n(52),m=n(53),d=n(56),h=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.subcategory,a=(e.pageDivide,null);return r.a.createElement("div",null,this.props.data.split("\n").map(function(e,o){var i=e.trim().match("([#&$!/~-]*)(.+)");if(i){if("~"==e.trim()){if(null!=a){var l=a;return a=null,r.a.createElement("div",{style:{fontSize:"0.8em",padding:"3.5em",paddingTop:0,paddingBottom:0},key:o},r.a.createElement("pre",{style:{margin:5,padding:15,backgroundColor:"#F4F4F4"}},r.a.createElement("code",null,l)))}return a="",null}if(null!=a)return""!=a&&(a+="\n"),a+=e,null;if("-"==i[1])return r.a.createElement("p",{style:{paddingLeft:"2em",margin:5},key:o},"\u30fb",i[2].trim());if("$"==i[1][0])return r.a.createElement("p",{align:"center"},r.a.createElement("img",{style:{border:"solid 1px lightgray"},src:"".concat("/dora-engine-doc").concat(i[2].trim())}));if("&"==i[1]){var u=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement(d.a,{to:"".concat(u[3].trim())},u[2]))}if("&&"==i[1]){var s=e.match("(&+)\\[(.+)\\](.+)");return r.a.createElement("p",{style:{paddingLeft:"2em"},key:o},r.a.createElement("a",{target:encodeURIComponent(s[2]),href:"".concat(s[3].trim())},s[2]))}if("!"==i[1])return r.a.createElement("h4",{style:{paddingLeft:"1em"},key:o},r.a.createElement(f.a,{value:i[2].trim()}));if("!!"==i[1])return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement(f.a,{style:{paddingLeft:"1em"},value:i[2].trim()}));if("#"==i[1])return r.a.createElement(c,{style:{marginTop:"2em"},key:o},r.a.createElement(f.a,{style:{display:"inline"},value:i[2].trim()}));if("##"==i[1])return r.a.createElement(m.b,{style:{paddingLeft:"1em"},target:i[2].trim(),category:t,subcategory:n,key:o},r.a.createElement(f.a,{style:{display:"inline"},value:i[2].trim()}));if("/"==i[1][0])return null;if("~~"==e.trim())return r.a.createElement("div",{className:"page-divide",key:o});if("--"==e.trim())return r.a.createElement("hr",{key:o});if("~"==i[1]){var p=i[2].trim().split("\u3001");return r.a.createElement("p",{style:{paddingLeft:"1em"},key:o},p.map(function(e,a){return r.a.createElement("span",{key:a},r.a.createElement(m.c,{category:t,subcategory:n},e),a<p.length-1?"\u3001":"")}))}return r.a.createElement("p",{style:{marginLeft:"1em",marginRight:"1em"},key:o},r.a.createElement("span",{style:{paddingLeft:"1em"},key:o},i[2].trim()))}return null!=a?(""!=a&&(a+="\n"),a+=e,null):r.a.createElement("p",null)}),this.props.children)}}]),t}(a.Component);h.defaultProps={page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0};t.a=function(e){var t=e.pages,n=e.category,a=void 0===n?"":n,o=e.title,i=void 0===o?"":o,l=e.data,u=void 0===l?"":l;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(c,null,i)),u?r.a.createElement(h,{data:u}):null,t?t.map(function(e,n){return e.page({pageInfo:{title:e.title,page:n+1,maxPage:t.length,category:a}})}):null)}},56:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=n(4),l=n.n(i),u=n(31),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=p(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!f(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",s({},a,{onClick:this.handleClick,href:i,ref:n}))},t}(r.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m}}]);
//# sourceMappingURL=14.2c20afc7.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{141:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),l=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=l(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?a.a.createElement(b,i(i({ref:e},s),{},{components:r})):a.a.createElement(b,i({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},142:function(t,e,r){"use strict";var n=r(0),a=r(19);e.a=function(){var t=Object(n.useContext)(a.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},143:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n=r(142),a=r(147);function o(){var t=Object(n.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return e+r;var l=!r.startsWith(e)?e+r.replace(/^\//,""):r;return s?t+l:l}(o,r,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},147:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}))},92:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(141)),c=r(143),i={sidebar_label:"OSS.Chat",title:"Case Study: OSS.Chat"},u={unversionedId:"case-study/osschat-bot",id:"case-study/osschat-bot",isDocsHomePage:!1,title:"Case Study: OSS.Chat",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/case-study/osschat-bot.mdx",permalink:"/docs/case-study/osschat-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/osschat-bot.mdx",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1597996707,sidebar_label:"OSS.Chat",sidebar:"docs",previous:{title:"Cast Study: Friday.BOT",permalink:"/docs/case-study/friday-bot"},next:{title:"Case Study: Rui.BOT",permalink:"/docs/case-study/rui-bot"}},s=[],l={rightToc:s};function d(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"Friday.BOT",src:Object(c.a)("img/docs/osschat-bot.svg"),width:"256",height:"256"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dashboard: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.chat"}),"https://oss.chat")),Object(o.b)("li",{parentName:"ul"},"GitHub: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kaiyuanshe/osschat"}),"https://github.com/kaiyuanshe/osschat"))))}d.isMDXComponent=!0}}]);
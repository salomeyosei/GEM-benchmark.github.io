(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=d.length;s<c;s++){var u=d[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],f=a[u]||new Set;f.has(l)?o=!1:(f.add(l),a[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return y}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),s=n("Tred"),c=n.n(s),u=n("Z4Yb"),l=n.n(u),f=n("YFqc"),d=n.n(f),p=n("aYko"),h=n.n(p),m=r.a.createElement;function _(){return m("div",{className:h.a.navwrapper},m("div",{className:h.a.gradbar}),m("nav",{className:h.a.navbar},m("span",{className:l.a.headingLg+" "+l.a.accent},m(d.a,{href:"/"},m("a",null,"GEM Benchmark"))),m("div",{className:h.a.menutoggle,id:"mobile-menu"},m("span",{className:h.a.bar}),m("span",{className:h.a.bar}),m("span",{className:h.a.bar})),m("ul",{className:h.a.nav},m("li",{className:h.a.navitem},m(d.a,{href:"/tasks/"},m("a",null,"Tasks"))),m("li",{className:h.a.navitem},m(d.a,{href:"/get_started/"},m("a",null,"How To"))),m("li",{className:h.a.navitem},m("a",{href:"#"},"Results")),m("li",{className:h.a.navitem},m("a",{href:"#"},"Paper")),m("li",{className:h.a.navitem},m("a",{href:"#"},"Team")),m("li",{className:h.a.navitem},m("a",{href:"#"},"Workshop")))))}var v=r.a.createElement,g="GEM";function y(e){var t=e.children,n=e.home;return v(r.a.Fragment,null,v(i.a,null,v("link",{rel:"icon",href:"/favicon.ico"}),v("meta",{name:"description",content:"Benchmark natural language generation systems with GEM."}),v("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(g),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),v("meta",{name:"og:title",content:g}),v("meta",{name:"twitter:card",content:"summary_large_image"})),v("header",{className:c.a.header},v(_,null)),v("div",{className:c.a.container},v("main",null,t),v("div",{className:c.a.push})),v("footer",{className:c.a.footer+" "+l.a.eggshell},!n&&v("span",{className:c.a.backToHome},v(d.a,{href:"/"},v("a",null,"\u2190 Home"))),v("span",null,"For any questions, contact XXX.")))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp",footer:"layout_footer__127N0",push:"layout_push__1J9g0"}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},Z4Yb:function(e,t,n){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",smallSpace:"utils_smallSpace__375iy",eggshell:"utils_eggshell__Njxsh",light:"utils_light__1wylm",accent:"utils_accent__2hpXV",accentUnderline:"utils_accentUnderline__k083p",accentBorder:"utils_accentBorder__3pivY",lightaccent:"utils_lightaccent__3siVc"}},aYko:function(e,t,n){e.exports={navwrapper:"navbar_navwrapper__15zia",gradbar:"navbar_gradbar__1Xi5u",navbar:"navbar_navbar__3gnco",navitem:"navbar_navitem__3ICSG",menutoggle:"navbar_menutoggle__358pJ",bar:"navbar_bar__QVPSR","mobile-menu":"navbar_mobile-menu__44dcv","is-active":"navbar_is-active__22jE9",features:"navbar_features__3Lqg0","mobile-nav":"navbar_mobile-nav__2DEAR"}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),s=n("elyg"),c=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],u=r[1],h=(0,c.useRouter)(),m=h&&h.pathname||"/",_=i.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href,!0),n=a(t,2),r=n[0],o=n[1];return{href:r,as:e.as?(0,s.resolveHref)(m,e.as):o||r}}),[m,e.href,e.as]),v=_.href,g=_.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,s.isLocalURL)(v)&&!f[v+"%"+g])return d(o,(function(){p(h,v,g)}))}),[t,o,v,g,h]);var y=e.children,b=e.replace,w=e.shallow,M=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var k=i.Children.only(y),x={ref:function(e){e&&u(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,v,g,b,w,M)}};return t&&(x.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),p(h,v,g,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(x.href=(0,s.addBasePath)((0,s.addLocale)(g,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(k,x)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}}]);
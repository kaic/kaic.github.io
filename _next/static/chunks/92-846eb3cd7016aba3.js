(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{1015:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,s=o?40*o:r,a=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1312:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(4232),o=r(6959),i="function"==typeof IntersectionObserver,l=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(a||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1650:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(4252),o=r(8365),i=r(7876),l=o._(r(4232)),u=n._(r(8477)),s=n._(r(5679)),a=r(4906),f=r(7539),c=r(8677);r(6079);let d=r(9948),p=n._(r(5210)),g=r(5553),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:s,decoding:a,className:f,style:c,fetchPriority:d,placeholder:p,loading:h,unoptimized:v,fill:y,onLoadRef:_,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:C,sizesInput:E,onLoad:O,onError:P,...x}=e,S=(0,l.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&m(e,p,_,j,w,v,E))},[r,p,_,j,w,P,v,E]),R=(0,g.useMergedRef)(t,S);return(0,i.jsx)("img",{...x,...b(d),loading:h,width:s,height:u,decoding:a,"data-nimg":y?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:R,onLoad:e=>{m(e.currentTarget,p,_,j,w,v,E)},onError:e=>{C(!0),"empty"!==p&&w(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{var e;let t=h||n||f.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:o,qualities:i}},[n]),{onLoad:u,onLoadingComplete:s}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[b,_]=(0,l.useState)(!1),[j,w]=(0,l.useState)(!1),{props:C,meta:E}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:b,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...C,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:w,sizesInput:e.sizes,ref:t}),E.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4587:(e,t,r)=>{e.exports=r(5090)},4906:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(6079);let n=r(1015),o=r(7539);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r,u;let s,a,f,{src:c,sizes:d,unoptimized:p=!1,priority:g=!1,loading:h,className:m,quality:b,width:v,height:y,fill:_=!1,style:j,overrideSrc:w,onLoad:C,onLoadingComplete:E,placeholder:O="empty",blurDataURL:P,fetchPriority:x,decoding:S="async",layout:R,objectFit:M,objectPosition:z,lazyBoundary:k,lazyRoot:I,...D}=e,{imgConf:L,showAltText:N,blurComplete:T,defaultLoader:A}=t,B=L||o.imageConfigDefault;if("allSizes"in B)s=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),n=null==(r=B.qualities)?void 0:r.sort((e,t)=>e-t);s={...B,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===A)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let U=D.loader||A;delete D.loader,delete D.srcSet;let F="__next_img_default"in U;if(F){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!d&&(d=t)}let G="",q=l(v),W=l(y);if((u=c)&&"object"==typeof u&&(i(u)||void 0!==u.src)){let e=i(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(a=e.blurWidth,f=e.blurHeight,P=P||e.blurDataURL,G=e.src,!_){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let K=!g&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,K=!1),s.unoptimized&&(p=!0),F&&!s.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let X=l(b),H=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:z}:{},N?{}:{color:"transparent"},j),V=T||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:a,blurHeight:f,blurDataURL:P||"",objectFit:H.objectFit})+'")':'url("'+O+'")',J=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:a}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=s.length-1;return{sizes:l||"w"!==a?l:"100vw",srcSet:s.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===a?e:n+1)+a).join(", "),src:u({config:t,src:r,quality:i,width:s[f]})}}({config:s,src:c,unoptimized:p,width:q,quality:X,sizes:d,loader:U});return{props:{...D,loading:K?"lazy":h,fetchPriority:x,width:q,height:W,decoding:S,className:m,style:{...H,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:p,priority:g,placeholder:O,fill:_}}}},5090:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return u}});let n=r(4252),o=r(4906),i=r(1650),l=n._(r(5210));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image},5210:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:n,width:o,quality:i}=e,l=i||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5553:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(4232);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5939:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(4252),o=r(7876),i=n._(r(4232)),l=r(1921),u=r(1533),s=r(8480),a=r(2746),f=r(4591),c=r(9948),d=r(1312),p=r(6041),g=r(2092),h=r(5553),m=new Set;function b(e,t,r,n){if((0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:s,as:m,children:y,prefetch:_=null,passHref:j,replace:w,shallow:C,scroll:E,locale:O,onClick:P,onMouseEnter:x,onTouchStart:S,legacyBehavior:R=!1,...M}=e;r=y,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=i.default.useContext(c.RouterContext),k=!1!==_,{href:I,as:D}=i.default.useMemo(()=>{if(!z){let e=v(s);return{href:e,as:m?v(m):e}}let[e,t]=(0,l.resolveHref)(z,s,!0);return{href:e,as:m?(0,l.resolveHref)(z,m):t||e}},[z,s,m]),L=i.default.useRef(I),N=i.default.useRef(D);R&&(n=i.default.Children.only(r));let T=R?n&&"object"==typeof n&&n.ref:t,[A,B,U]=(0,d.useIntersection)({rootMargin:"200px"}),F=i.default.useCallback(e=>{(N.current!==D||L.current!==I)&&(U(),N.current=D,L.current=I),A(e)},[D,I,U,A]),G=(0,h.useMergedRef)(F,T);i.default.useEffect(()=>{z&&B&&k&&b(z,I,D,{locale:O})},[D,I,B,O,k,null==z?void 0:z.locale,z]);let q={ref:G,onClick(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&!function(e,t,r,n,o,i,l,s){let{nodeName:a}=e.currentTarget;!("A"===a.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,u.isLocalURL)(r)))&&(e.preventDefault(),(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,z,I,D,w,C,E,O)},onMouseEnter(e){R||"function"!=typeof x||x(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&b(z,I,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){R||"function"!=typeof S||S(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&b(z,I,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if((0,a.isAbsoluteUrl)(D))q.href=D;else if(!R||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==z?void 0:z.locale;q.href=(null==z?void 0:z.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales)||(0,g.addBasePath)((0,f.addLocale)(D,e,null==z?void 0:z.defaultLocale))}return R?i.default.cloneElement(n,q):(0,o.jsx)("a",{...M,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6041:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8205),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8230:(e,t,r)=>{e.exports=r(5939)}}]);
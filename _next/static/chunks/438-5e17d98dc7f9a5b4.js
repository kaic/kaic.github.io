(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{4078:(e,t,r)=>{"use strict";function o(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(6094),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let o=r(7677),i=r(544),n=r(4848),l=i._(r(6540)),u=o._(r(961)),s=o._(r(3248)),a=r(3297),f=r(3436),d=r(2454);r(4636);let c=r(4671),p=o._(r(701)),g=r(4293),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,o,i,n,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:i,height:u,width:s,decoding:a,className:f,style:d,fetchPriority:c,placeholder:p,loading:h,unoptimized:b,fill:y,onLoadRef:_,onLoadingCompleteRef:j,setBlurComplete:w,setShowAltText:C,sizesInput:x,onLoad:P,onError:S,...M}=e,O=(0,l.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&m(e,p,_,j,w,b,x))},[r,p,_,j,w,S,b,x]),E=(0,g.useMergedRef)(t,O);return(0,n.jsx)("img",{...M,...v(c),loading:h,width:s,height:u,decoding:a,"data-nimg":y?"fill":"1",className:f,style:d,sizes:i,srcSet:o,src:r,ref:E,onLoad:e=>{m(e.currentTarget,p,_,j,w,b,x)},onError:e=>{C(!0),"empty"!==p&&w(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,o={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,o),null):(0,n.jsx)(s.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...o},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(c.RouterContext),o=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=h||o||f.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:n}},[o]),{onLoad:u,onLoadingComplete:s}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let[v,_]=(0,l.useState)(!1),[j,w]=(0,l.useState)(!1),{props:C,meta:x}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:j});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...C,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:w,sizesInput:e.sizes,ref:t}),x.priority?(0,n.jsx)(y,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8444:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let o=r(7677),i=r(4848),n=o._(r(6540)),l=r(6846),u=r(7262),s=r(5543),a=r(4881),f=r(3912),d=r(4671),c=r(3479),p=r(4078),g=r(5371),h=r(4293),m=new Set;function v(e,t,r,o){if((0,u.isLocalURL)(t)){if(!o.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(m.has(i))return;m.add(i)}e.prefetch(t,r,o).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let y=n.default.forwardRef(function(e,t){let r,o;let{href:s,as:m,children:y,prefetch:_=null,passHref:j,replace:w,shallow:C,scroll:x,locale:P,onClick:S,onMouseEnter:M,onTouchStart:O,legacyBehavior:E=!1,...R}=e;r=y,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let z=n.default.useContext(d.RouterContext),k=!1!==_,{href:I,as:L}=n.default.useMemo(()=>{if(!z){let e=b(s);return{href:e,as:m?b(m):e}}let[e,t]=(0,l.resolveHref)(z,s,!0);return{href:e,as:m?(0,l.resolveHref)(z,m):t||e}},[z,s,m]),D=n.default.useRef(I),A=n.default.useRef(L);E&&(o=n.default.Children.only(r));let N=E?o&&"object"==typeof o&&o.ref:t,[T,B,U]=(0,c.useIntersection)({rootMargin:"200px"}),F=n.default.useCallback(e=>{(A.current!==L||D.current!==I)&&(U(),A.current=L,D.current=I),T(e)},[L,I,U,T]),G=(0,h.useMergedRef)(F,N);n.default.useEffect(()=>{z&&B&&k&&v(z,I,L,{locale:P})},[L,I,B,P,k,null==z?void 0:z.locale,z]);let q={ref:G,onClick(e){E||"function"!=typeof S||S(e),E&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,o,i,n,l,s){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,u.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==l||l;"beforePopState"in t?t[i?"replace":"push"](r,o,{shallow:n,locale:s,scroll:e}):t[i?"replace":"push"](o||r,{scroll:e})})())}(e,z,I,L,w,C,x,P)},onMouseEnter(e){E||"function"!=typeof M||M(e),E&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&v(z,I,L,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){E||"function"!=typeof O||O(e),E&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&v(z,I,L,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,a.isAbsoluteUrl)(L))q.href=L;else if(!E||j||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);q.href=t||(0,g.addBasePath)((0,f.addLocale)(L,e,null==z?void 0:z.defaultLocale))}return E?n.default.cloneElement(o,q):(0,i.jsx)("a",{...R,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let o=r(6540),i=r(9820),n="function"==typeof IntersectionObserver,l=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!n,[f,d]=(0,o.useState)(!1),c=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{c.current=e},[]);return(0,o.useEffect)(()=>{if(n){if(a||f)return;let e=c.current;if(e&&e.tagName)return function(e,t,r){let{id:o,observer:i,elements:n}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=u.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=l.get(o)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},u.push(r),l.set(r,t),t}(r);return n.set(e,t),i.observe(e),function(){if(n.delete(e),i.unobserve(e),0===n.size){i.disconnect(),l.delete(o);let e=u.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[a,r,t,f,c.current]),[p,f,(0,o.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let o=r(6540);function i(e,t){let r=(0,o.useRef)(()=>{}),i=(0,o.useRef)(()=>{});return(0,o.useMemo)(()=>e&&t?o=>{null===o?(r.current(),i.current()):(r.current=n(e,o),i.current=n(t,o))}:e||t,[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(4636);let o=r(7688),i=r(3436);function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r,u;let s,a,f,{src:d,sizes:c,unoptimized:p=!1,priority:g=!1,loading:h,className:m,quality:v,width:b,height:y,fill:_=!1,style:j,overrideSrc:w,onLoad:C,onLoadingComplete:x,placeholder:P="empty",blurDataURL:S,fetchPriority:M,decoding:O="async",layout:E,objectFit:R,objectPosition:z,lazyBoundary:k,lazyRoot:I,...L}=e,{imgConf:D,showAltText:A,blurComplete:N,defaultLoader:T}=t,B=D||i.imageConfigDefault;if("allSizes"in B)s=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),o=null==(r=B.qualities)?void 0:r.sort((e,t)=>e-t);s={...B,allSizes:e,deviceSizes:t,qualities:o}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=L.loader||T;delete L.loader,delete L.srcSet;let F="__next_img_default"in U;if(F){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...o}=t;return e(o)}}if(E){"fill"===E&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let G="",q=l(b),W=l(y);if((u=d)&&"object"==typeof u&&(n(u)||void 0!==u.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,f=e.blurHeight,S=S||e.blurDataURL,G=e.src,!_){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let K=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,K=!1),s.unoptimized&&(p=!0),F&&!s.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(p=!0);let H=l(v),V=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:z}:{},A?{}:{color:"transparent"},j),J=N||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:a,blurHeight:f,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+P+'")',Y=J?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:o,width:i,quality:n,sizes:l,loader:u}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:a}=function(e,t,r){let{deviceSizes:o,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),f=s.length-1;return{sizes:l||"w"!==a?l:"100vw",srcSet:s.map((e,o)=>u({config:t,src:r,quality:n,width:e})+" "+("w"===a?e:o+1)+a).join(", "),src:u({config:t,src:r,quality:n,width:s[f]})}}({config:s,src:d,unoptimized:p,width:q,quality:H,sizes:c,loader:U});return{props:{...L,loading:K?"lazy":h,fetchPriority:M,width:q,height:W,decoding:O,className:m,style:{...V,...Y},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:p,priority:g,placeholder:P,fill:_}}}},7688:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:i,blurDataURL:n,objectFit:l}=e,u=o?40*o:t,s=i?40*i:r,a=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return u}});let o=r(7677),i=r(3297),n=r(4709),l=o._(r(701));function u(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=n.Image},701:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:o,width:i,quality:n}=e,l=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(o)+"&w="+i+"&q="+l+(o.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},9965:(e,t,r)=>{e.exports=r(1709)},1106:(e,t,r)=>{e.exports=r(8444)}}]);
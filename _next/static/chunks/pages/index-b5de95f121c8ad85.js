(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{967:(e,t,r)=>{var s={"./en.json":[517,517],"./pt-br.json":[3725,725]};function i(e){if(!r.o(s,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],i=t[0];return r.e(t[1]).then(()=>r.t(i,19))}i.keys=()=>Object.keys(s),i.id=967,e.exports=i},2022:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4687)}])},4709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return j}});let s=r(7677),i=r(544),n=r(4848),l=i._(r(6540)),a=s._(r(961)),o=s._(r(3248)),c=r(3297),d=r(3436),u=r(2454);r(4636);let m=r(4671),f=s._(r(701)),p=r(4293),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function x(e,t,r,s,i,n,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}}))}function g(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:s,sizes:i,height:a,width:o,decoding:c,className:d,style:u,fetchPriority:m,placeholder:f,loading:h,unoptimized:b,fill:v,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,sizesInput:N,onLoad:C,onError:S,...M}=e,z=(0,l.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&x(e,f,j,w,y,b,N))},[r,f,j,w,y,S,b,N]),P=(0,p.useMergedRef)(t,z);return(0,n.jsx)("img",{...M,...g(m),loading:h,width:o,height:a,decoding:c,"data-nimg":v?"fill":"1",className:d,style:u,sizes:i,srcSet:s,src:r,ref:P,onLoad:e=>{x(e.currentTarget,f,j,w,y,b,N)},onError:e=>{_(!0),"empty"!==f&&y(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,s={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,s),null):(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...s},"__nimg-"+r.src+r.srcSet+r.sizes)})}let j=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(m.RouterContext),s=(0,l.useContext)(u.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=h||s||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:n}},[s]),{onLoad:a,onLoadingComplete:o}=e,p=(0,l.useRef)(a);(0,l.useEffect)(()=>{p.current=a},[a]);let x=(0,l.useRef)(o);(0,l.useEffect)(()=>{x.current=o},[o]);let[g,j]=(0,l.useState)(!1),[w,y]=(0,l.useState)(!1),{props:_,meta:N}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:g,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{..._,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:p,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:y,sizesInput:e.sizes,ref:t}),N.priority?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let s=r(6540);function i(e,t){let r=(0,s.useRef)(()=>{}),i=(0,s.useRef)(()=>{});return(0,s.useMemo)(()=>e&&t?s=>{null===s?(r.current(),i.current()):(r.current=n(e,s),i.current=n(t,s))}:e||t,[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(4636);let s=r(7688),i=r(3436);function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let o,c,d,{src:u,sizes:m,unoptimized:f=!1,priority:p=!1,loading:h,className:x,quality:g,width:b,height:v,fill:j=!1,style:w,overrideSrc:y,onLoad:_,onLoadingComplete:N,placeholder:C="empty",blurDataURL:S,fetchPriority:M,decoding:z="async",layout:P,objectFit:E,objectPosition:k,lazyBoundary:O,lazyRoot:R,...D}=e,{imgConf:A,showAltText:I,blurComplete:B,defaultLoader:L}=t,T=A||i.imageConfigDefault;if("allSizes"in T)o=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t),s=null==(r=T.qualities)?void 0:r.sort((e,t)=>e-t);o={...T,allSizes:e,deviceSizes:t,qualities:s}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=D.loader||L;delete D.loader,delete D.srcSet;let G="__next_img_default"in F;if(G){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...s}=t;return e(s)}}if(P){"fill"===P&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!m&&(m=t)}let H="",V=l(b),W=l(v);if((a=u)&&"object"==typeof a&&(n(a)||void 0!==a.src)){let e=n(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,H=e.src,!j){if(V||W){if(V&&!W){let t=V/e.width;W=Math.round(e.height*t)}else if(!V&&W){let t=W/e.height;V=Math.round(e.width*t)}}else V=e.width,W=e.height}}let q=!p&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:H)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,q=!1),o.unoptimized&&(f=!0),G&&!o.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(f=!0);let U=l(g),J=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:k}:{},I?{}:{color:"transparent"},w),X=B||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:V,heightInt:W,blurWidth:c,blurHeight:d,blurDataURL:S||"",objectFit:J.objectFit})+'")':'url("'+C+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function(e){let{config:t,src:r,unoptimized:s,width:i,quality:n,sizes:l,loader:a}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:s,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((e,s)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:s+1)+c).join(", "),src:a({config:t,src:r,quality:n,width:o[d]})}}({config:o,src:u,unoptimized:f,width:V,quality:U,sizes:m,loader:F});return{props:{...D,loading:q?"lazy":h,fetchPriority:M,width:V,height:W,decoding:z,className:x,style:{...J,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:j}}}},7688:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:i,blurDataURL:n,objectFit:l}=e,a=s?40*s:t,o=i?40*i:r,c=a&&o?"viewBox='0 0 "+a+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return a}});let s=r(7677),i=r(3297),n=r(4709),l=s._(r(701));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=n.Image},701:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:s,width:i,quality:n}=e,l=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(s)+"&w="+i+"&q="+l+(s.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},4687:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__N_SSG:()=>w,default:()=>y});var s=r(4848),i=r(2578);let n=e=>{let{article:t}=e;return(0,s.jsxs)("div",{className:"p-4 text-left block",children:[(0,s.jsx)("h3",{className:"text-lg font-bold text-white mb-2",children:t.title}),t.description&&(0,s.jsx)("p",{className:"text-gray-200 text-base mb-2",children:t.description}),(0,s.jsx)("p",{className:"text-gray-200 text-sm mb-2",children:t.date}),(0,s.jsx)("div",{className:"flex text-red-400 text-lg font-medium",children:(0,s.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity active:text-red-900",children:"Read"})})]})},l=function(){let e=(0,i.useTranslations)("Home.Articles");return(0,s.jsx)("article",{id:"articles",children:(0,s.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] p-8 pb-0 gap-12 sm:p-20 font-mono",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:e("section-name")}),(0,s.jsx)("ul",{className:"list-inside text-sm text-center sm:text-left",children:[{title:"Be your tool's best friend, not its enemy",description:"i.e. don't spend the day fighting against your computer.",date:"2024-12-22",url:"https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr"}].map((e,t)=>(0,s.jsx)("li",{className:"mb-4",children:(0,s.jsx)(n,{article:e})},t))})]})})};var a=r(9965),o=r.n(a);let c=[{id:1,name:"about"},{id:2,name:"articles"},{id:3,name:"contact"}],d=()=>{let e=(0,i.useTranslations)("Home.Main");return(0,s.jsx)("nav",{className:"container mx-auto",children:(0,s.jsx)("ul",{className:"text-lg flex flex-wrap justify-center gap-1 mb-4",children:c.map(t=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#".concat(t.name),className:"text-red-400 hover:opacity-80 transition-opacity active:text-red-900 px-2 py-2",children:e("nav.".concat(t.name))})},t.id))})})},u=()=>{let e=(0,i.useTranslations)("Home.Main");return(0,s.jsxs)("ul",{className:"list-inside sm:text-left font-[family-name:var(--font-geist-mono)] xs:max-w-[40vw]",children:[(0,s.jsx)("li",{className:"text-2xl font-bold",children:(0,s.jsx)("p",{children:e("header.title")})}),(0,s.jsx)("li",{className:"mb-2 text-base leading-loose",children:(0,s.jsx)("p",{children:e("header.subtitle")})}),(0,s.jsx)("li",{className:"mb-2 text-base leading-loose",children:(0,s.jsx)("p",{children:e("header.description")})}),(0,s.jsx)("li",{className:"mb-2 text-sm",children:(0,s.jsxs)("p",{className:"text-red-400",children:["\uD83D\uDCBC ",e("header.job.role")," ",(0,s.jsx)("span",{className:"text-white",children:"@"})," ",e("header.job.company")]})}),(0,s.jsx)("li",{className:"text-sm",children:(0,s.jsxs)("p",{className:"text-red-400",children:["\uD83C\uDF0E ",e("header.location")]})})]})},m=()=>(0,s.jsx)("div",{className:"grid grid-rows-[2px_1fr_2px] items-center justify-items-center p-8 pb-4 gap-10 sm:p-20",children:(0,s.jsxs)("main",{className:"flex flex-col gap-2 row-start-2 items-center sm:items-start",children:[(0,s.jsx)(o(),{src:"/avatar.jpg",alt:"My photo",width:200,height:168,priority:!0,className:"rounded-full sm:self-center border-2 border-red-400 mb-4"}),(0,s.jsx)(d,{}),(0,s.jsx)(u,{})]})}),f=()=>{let e=(0,i.useTranslations)("Home.About");return(0,s.jsx)("article",{id:"about",children:(0,s.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-left",children:e("section-name")}),(0,s.jsx)("p",{className:"text-base leading-loose",style:{whiteSpace:"pre-line"},children:e("paragraph")})]})})},p=e=>e.replace(/https:\/\//g,"").replace(/mailto:/g,""),h=[{name:"Email",icon:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:[(0,s.jsx)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,s.jsx)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})]}),url:"mailto:kaicbento@outlook.com"},{name:"GitHub",icon:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),url:"https://github.com/kaic"},{name:"LinkedIn",icon:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:(0,s.jsx)("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})}),url:"https://linkedin.com/in/kaicbento"}],x=()=>{let e=(0,i.useTranslations)("Home.Contact");return(0,s.jsx)("article",{id:"contact",children:(0,s.jsxs)("div",{className:"grid grid-rows-[0.5px] p-8 pb-12 gap-12 sm:p-20",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-left mb-20",children:"Contact me"}),(0,s.jsx)("p",{children:e("paragraph")}),h.map(e=>(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-white hover:opacity-80 transition-opacity",children:[(0,s.jsx)("div",{className:"p-1 rounded",children:e.icon}),(0,s.jsx)("span",{className:"font-mono text-base",children:"".concat(p(e.url))})]})})},e.name))]})})},g={url:"https://github.com/kaic/kaic.github.io"},b=()=>{let e=(0,i.useTranslations)("Home.Footer");return(0,s.jsxs)("footer",{className:"text-white mb-4 py-4 text-center",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center p-4 space-y-4",children:[(0,s.jsxs)("p",{className:"text-sm mb-2",children:["\uD83D\uDCDC ",e("paragraph")]}),(0,s.jsx)("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-80 transition-opacity",children:(0,s.jsx)("p",{className:"font-mono text-base text-red-400",children:"".concat(p(g.url))})})]}),(0,s.jsx)("div",{className:"mt-3",children:(0,s.jsx)("p",{className:"text-sm",children:"\xa9 Kaic Bento - Software Developer."})})]})},v=()=>(0,s.jsx)("hr",{className:"border-0 border-b border-dashed border-red-300 mb-2 mx-10"});async function j(e){try{let t=(null==e?void 0:e.locale)||"en";return{props:{messages:(await r(967)("./".concat(t||"en",".json"))).default}}}catch(e){return console.error("Error loading translations:",e),{props:{messages:{}}}}}var w=!0;let y=function(){return j({locale:(0,i.useLocale)()}),(0,s.jsxs)("div",{children:[(0,s.jsx)(m,{}),(0,s.jsx)(l,{}),(0,s.jsx)(v,{}),(0,s.jsx)(f,{}),(0,s.jsx)(v,{}),(0,s.jsx)(x,{}),(0,s.jsx)(v,{}),(0,s.jsx)(b,{})]})}},9965:(e,t,r)=>{e.exports=r(1709)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2022)),_N_E=e.O()}]);
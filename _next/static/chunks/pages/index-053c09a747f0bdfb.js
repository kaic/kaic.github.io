(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6596)}])},4709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(7677),s=r(544),l=r(4848),a=s._(r(6540)),n=i._(r(961)),o=i._(r(3248)),c=r(3297),d=r(3436),u=r(2454);r(4636);let m=r(4671),f=i._(r(701)),p=r(4293),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function x(e,t,r,i,s,l,a){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:n,width:o,decoding:c,className:d,style:u,fetchPriority:m,placeholder:f,loading:h,unoptimized:b,fill:j,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,sizesInput:N,onLoad:C,onError:S,...z}=e,M=(0,a.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&x(e,f,v,w,y,b,N))},[r,f,v,w,y,S,b,N]),P=(0,p.useMergedRef)(t,M);return(0,l.jsx)("img",{...z,...g(m),loading:h,width:o,height:n,decoding:c,"data-nimg":j?"fill":"1",className:d,style:u,sizes:s,srcSet:i,src:r,ref:P,onLoad:e=>{x(e.currentTarget,f,v,w,y,b,N)},onError:e=>{_(!0),"empty"!==f&&y(!0),S&&S(e)}})});function j(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&n.default.preload?(n.default.preload(r.src,i),null):(0,l.jsx)(o.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(m.RouterContext),i=(0,a.useContext)(u.ImageConfigContext),s=(0,a.useMemo)(()=>{var e;let t=h||i||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),s=t.deviceSizes.sort((e,t)=>e-t),l=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:s,qualities:l}},[i]),{onLoad:n,onLoadingComplete:o}=e,p=(0,a.useRef)(n);(0,a.useEffect)(()=>{p.current=n},[n]);let x=(0,a.useRef)(o);(0,a.useEffect)(()=>{x.current=o},[o]);let[g,v]=(0,a.useState)(!1),[w,y]=(0,a.useState)(!1),{props:_,meta:N}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:s,blurComplete:g,showAltText:w});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{..._,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:p,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:y,sizesInput:e.sizes,ref:t}),N.priority?(0,l.jsx)(j,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return s}});let i=r(6540);function s(e,t){let r=(0,i.useRef)(()=>{}),s=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),s.current()):(r.current=l(e,i),s.current=l(t,i))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(4636);let i=r(7688),s=r(3436);function l(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r,n;let o,c,d,{src:u,sizes:m,unoptimized:f=!1,priority:p=!1,loading:h,className:x,quality:g,width:b,height:j,fill:v=!1,style:w,overrideSrc:y,onLoad:_,onLoadingComplete:N,placeholder:C="empty",blurDataURL:S,fetchPriority:z,decoding:M="async",layout:P,objectFit:E,objectPosition:k,lazyBoundary:O,lazyRoot:R,...D}=e,{imgConf:A,showAltText:I,blurComplete:B,defaultLoader:T}=t,L=A||s.imageConfigDefault;if("allSizes"in L)o=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),i=null==(r=L.qualities)?void 0:r.sort((e,t)=>e-t);o={...L,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=D.loader||T;delete D.loader,delete D.srcSet;let G="__next_img_default"in F;if(G){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!m&&(m=t)}let H="",V=a(b),W=a(j);if((n=u)&&"object"==typeof n&&(l(n)||void 0!==n.src)){let e=l(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,H=e.src,!v){if(V||W){if(V&&!W){let t=V/e.width;W=Math.round(e.height*t)}else if(!V&&W){let t=W/e.height;V=Math.round(e.width*t)}}else V=e.width,W=e.height}}let q=!p&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:H)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,q=!1),o.unoptimized&&(f=!0),G&&!o.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(f=!0);let U=a(g),J=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:k}:{},I?{}:{color:"transparent"},w),X=B||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:V,heightInt:W,blurWidth:c,blurHeight:d,blurDataURL:S||"",objectFit:J.objectFit})+'")':'url("'+C+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:l,sizes:a,loader:n}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,a),d=o.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:o.map((e,i)=>n({config:t,src:r,quality:l,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:n({config:t,src:r,quality:l,width:o[d]})}}({config:o,src:u,unoptimized:f,width:V,quality:U,sizes:m,loader:F});return{props:{...D,loading:q?"lazy":h,fetchPriority:z,width:V,height:W,decoding:M,className:x,style:{...J,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:v}}}},7688:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:l,objectFit:a}=e,n=i?40*i:t,o=s?40*s:r,c=n&&o?"viewBox='0 0 "+n+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return n}});let i=r(7677),s=r(3297),l=r(4709),a=i._(r(701));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=l.Image},701:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:s,quality:l}=e,a=l||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+s+"&q="+a+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6596:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__N_SSG:()=>v,default:()=>w});var i=r(4848),s=r(2578);let l=e=>{let{article:t}=e;return(0,i.jsxs)("div",{className:"p-4 text-left block",children:[(0,i.jsx)("h3",{className:"text-lg font-bold text-white mb-2",children:t.title}),t.description&&(0,i.jsx)("p",{className:"text-gray-200 text-base mb-2",children:t.description}),(0,i.jsx)("p",{className:"text-gray-200 text-sm mb-2",children:t.date}),(0,i.jsx)("div",{className:"flex text-red-400 text-lg font-medium",children:(0,i.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity active:text-red-900",children:"Read"})})]})},a=function(){let e=(0,s.useTranslations)("Home.Articles");return(0,i.jsx)("article",{id:"articles",children:(0,i.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] p-8 pb-0 gap-12 sm:p-20 font-mono",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold",children:e("section-name")}),(0,i.jsx)("ul",{className:"list-inside text-sm text-center sm:text-left",children:[{title:"Be your tool's best friend, not its enemy",description:"i.e. don't spend the day fighting against your computer.",date:"2024-12-22",url:"https://kaicbento.substack.com/p/be-your-tools-best-friend-not-its?r=5vxpr"}].map((e,t)=>(0,i.jsx)("li",{className:"mb-4",children:(0,i.jsx)(l,{article:e})},t))})]})})};var n=r(9965),o=r.n(n);let c=[{id:1,name:"about"},{id:2,name:"articles"},{id:3,name:"contact"}],d=()=>{let e=(0,s.useTranslations)("Home.Main");return(0,i.jsx)("nav",{className:"container mx-auto",children:(0,i.jsx)("ul",{className:"text-lg flex flex-wrap justify-center gap-1 mb-4",children:c.map(t=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#".concat(t.name),className:"text-red-400 hover:opacity-80 transition-opacity active:text-red-900 px-2 py-2",children:e("nav.".concat(t.name))})},t.id))})})},u=()=>{let e=(0,s.useTranslations)("Home.Main");return(0,i.jsxs)("ul",{className:"list-inside sm:text-left font-[family-name:var(--font-geist-mono)] xs:max-w-[40vw]",children:[(0,i.jsx)("li",{className:"text-2xl font-bold",children:(0,i.jsx)("p",{children:e("header.title")})}),(0,i.jsx)("li",{className:"mb-2 text-base leading-loose",children:(0,i.jsx)("p",{children:e("header.subtitle")})}),(0,i.jsx)("li",{className:"mb-2 text-base leading-loose",children:(0,i.jsx)("p",{children:e("header.description")})}),(0,i.jsx)("li",{className:"mb-2 text-sm",children:(0,i.jsxs)("p",{className:"text-red-400",children:["\uD83D\uDCBC ",e("header.job.role")," ",(0,i.jsx)("span",{className:"text-white",children:"@"})," ",e("header.job.company")]})}),(0,i.jsx)("li",{className:"text-sm",children:(0,i.jsxs)("p",{className:"text-red-400",children:["\uD83C\uDF0E ",e("header.location")]})})]})},m=()=>(0,i.jsx)("div",{className:"grid grid-rows-[2px_1fr_2px] items-center justify-items-center p-8 pb-4 gap-10 sm:p-20",children:(0,i.jsxs)("main",{className:"flex flex-col gap-2 row-start-2 items-center sm:items-start",children:[(0,i.jsx)(o(),{src:"/avatar.jpg",alt:"My photo",width:200,height:168,priority:!0,className:"rounded-full sm:self-center border-2 border-red-400 mb-4"}),(0,i.jsx)(d,{}),(0,i.jsx)(u,{})]})}),f=()=>{let e=(0,s.useTranslations)("Home.About");return(0,i.jsx)("article",{id:"about",children:(0,i.jsxs)("div",{className:"grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-left",children:e("section-name")}),(0,i.jsx)("p",{className:"text-base leading-loose",style:{whiteSpace:"pre-line"},children:e("paragraph")})]})})},p=e=>e.replace(/https:\/\//g,"").replace(/mailto:/g,""),h=[{name:"Email",icon:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:[(0,i.jsx)("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),(0,i.jsx)("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})]}),url:"mailto:kaicbento@outlook.com"},{name:"GitHub",icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),url:"https://github.com/kaic"},{name:"LinkedIn",icon:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-8 h-8 text-red-400",children:(0,i.jsx)("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})}),url:"https://linkedin.com/in/kaicbento"}],x=()=>{let e=(0,s.useTranslations)("Home.Contact");return(0,i.jsx)("article",{id:"contact",children:(0,i.jsxs)("div",{className:"grid grid-rows-[0.5px] p-8 pb-12 gap-12 sm:p-20",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-left mb-20",children:"Contact me"}),(0,i.jsx)("p",{children:e("paragraph")}),h.map(e=>(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 text-white hover:opacity-80 transition-opacity",children:[(0,i.jsx)("div",{className:"p-1 rounded",children:e.icon}),(0,i.jsx)("span",{className:"font-mono text-base",children:"".concat(p(e.url))})]})})},e.name))]})})},g={url:"https://github.com/kaic/kaic.github.io"},b=()=>{let e=(0,s.useTranslations)("Home.Footer");return(0,i.jsxs)("footer",{className:"text-white mb-4 py-4 text-center",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center p-4 space-y-4",children:[(0,i.jsxs)("p",{className:"text-sm mb-2",children:["\uD83D\uDCDC ",e("paragraph")]}),(0,i.jsx)("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-80 transition-opacity",children:(0,i.jsx)("p",{className:"font-mono text-base text-red-400",children:"".concat(p(g.url))})})]}),(0,i.jsx)("div",{className:"mt-3",children:(0,i.jsx)("p",{className:"text-sm",children:"\xa9 Kaic Bento - Software Developer."})})]})},j=()=>(0,i.jsx)("hr",{className:"border-0 border-b border-dashed border-red-300 mb-2 mx-10"});var v=!0;let w=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(a,{}),(0,i.jsx)(j,{}),(0,i.jsx)(f,{}),(0,i.jsx)(j,{}),(0,i.jsx)(x,{}),(0,i.jsx)(j,{}),(0,i.jsx)(b,{})]})}},9965:(e,t,r)=>{e.exports=r(1709)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2022)),_N_E=e.O()}]);
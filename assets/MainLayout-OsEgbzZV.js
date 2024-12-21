import{c as L,i as D,e as P,p as N,a as m,h as p,b as J,g as $,l as V,f as X,w as q,o as T,j as H,n as A,k as _,r as y,m as K,q as M,s as x,t as Y,u as Z,v as ee,x as te,y as oe,z as ne,A as k,B as F}from"./index-BR2463Do.js";import{s as ie,g as le,a as re,b as ae,c as R}from"./scroll-BpM7MCjY.js";import"./dom-D6WmjZeE.js";const se=L({name:"QPageContainer",setup(t,{slots:v}){const{proxy:{$q:o}}=$(),e=D(V,P);if(e===P)return console.error("QPageContainer needs to be child of QLayout"),P;N(X,!0);const a=m(()=>{const r={};return e.header.space===!0&&(r.paddingTop=`${e.header.size}px`),e.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(r.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),r});return()=>p("div",{class:"q-page-container",style:a.value},J(v.default))}}),{passive:B}=_,ce=["both","horizontal","vertical"],ue=L({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ce.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:ie},emits:["scroll"],setup(t,{emit:v}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,a,r;q(()=>t.scrollTarget,()=>{l(),h()});function s(){e!==null&&e();const c=Math.max(0,re(a)),w=ae(a),d={top:c-o.position.top,left:w-o.position.left};if(t.axis==="vertical"&&d.top===0||t.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:c,left:w},o.directionChanged=o.direction!==z,o.delta=d,o.directionChanged===!0&&(o.direction=z,o.inflectionPoint=o.position),v("scroll",{...o})}function h(){a=le(r,t.scrollTarget),a.addEventListener("scroll",i,B),i(!0)}function l(){a!==void 0&&(a.removeEventListener("scroll",i,B),a=void 0)}function i(c){if(c===!0||t.debounce===0||t.debounce==="0")s();else if(e===null){const[w,d]=t.debounce?[setTimeout(s,t.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];e=()=>{d(w),e=null}}}const{proxy:g}=$();return q(()=>g.$q.lang.rtl,s),T(()=>{r=g.$el.parentNode,h()}),H(()=>{e!==null&&e(),l()}),Object.assign(g,{trigger:i,getPosition:()=>o}),A}});function de(){const t=y(!K.value);return t.value===!1&&T(()=>{t.value=!0}),{isHydrated:t}}const U=typeof ResizeObserver<"u",W=U===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},j=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:v}){let o=null,e,a={width:-1,height:-1};function r(l){l===!0||t.debounce===0||t.debounce==="0"?s():o===null&&(o=setTimeout(s,t.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),e){const{offsetWidth:l,offsetHeight:i}=e;(l!==a.width||i!==a.height)&&(a={width:l,height:i},v("resize",a))}}const{proxy:h}=$();if(h.trigger=r,U===!0){let l;const i=g=>{e=h.$el.parentNode,e?(l=new ResizeObserver(r),l.observe(e),s()):g!==!0&&M(()=>{i(!0)})};return T(()=>{i()}),H(()=>{o!==null&&clearTimeout(o),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),A}else{let l=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",r,_.passive),c=void 0)},i=function(){l(),e&&e.contentDocument&&(c=e.contentDocument.defaultView,c.addEventListener("resize",r,_.passive),s())};const{isHydrated:g}=de();let c;return T(()=>{M(()=>{e=h.$el,e&&i()})}),H(l),()=>{if(g.value===!0)return p("object",{class:"q--avoid-card-border",style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:i})}}}}),fe=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:v,emit:o}){const{proxy:{$q:e}}=$(),a=y(null),r=y(e.screen.height),s=y(t.container===!0?0:e.screen.width),h=y({position:0,direction:"down",inflectionPoint:0}),l=y(0),i=y(K.value===!0?0:R()),g=m(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),c=m(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),w=m(()=>i.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=m(()=>i.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(n){if(t.container===!0||document.qScrollPrevented!==!0){const u={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};h.value=u,t.onScroll!==void 0&&o("scroll",u)}}function I(n){const{height:u,width:b}=n;let f=!1;r.value!==u&&(f=!0,r.value=u,t.onScrollHeight!==void 0&&o("scrollHeight",u),E()),s.value!==b&&(f=!0,s.value=b),f===!0&&t.onResize!==void 0&&o("resize",n)}function G({height:n}){l.value!==n&&(l.value=n,E())}function E(){if(t.container===!0){const n=r.value>l.value?R():0;i.value!==n&&(i.value=n)}}let S=null;const Q={instances:{},view:m(()=>t.view),isContainer:m(()=>t.container),rootRef:a,height:r,containerHeight:l,scrollbarWidth:i,totalWidth:m(()=>s.value+i.value),rows:m(()=>{const n=t.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:h,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,u,b){Q[n][u]=b}};if(N(V,Q),R()>0){let n=function(){f=null,C.classList.remove("hide-scrollbar")},u=function(){if(f===null){if(C.scrollHeight>e.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(n,300)},b=function(O){f!==null&&O==="remove"&&(clearTimeout(f),n()),window[`${O}EventListener`]("resize",u)},f=null;const C=document.body;q(()=>t.container!==!0?"add":"remove",b),t.container!==!0&&b("add"),Y(()=>{b("remove")})}return()=>{const n=Z(v.default,[p(ue,{onScroll:z}),p(j,{onResize:I})]),u=p("div",{class:g.value,style:c.value,ref:t.container===!0?void 0:a,tabindex:-1},n);return t.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:a},[p(j,{onResize:G}),p("div",{class:"absolute-full",style:w.value},[p("div",{class:"scroll",style:d.value},[u])])]):u}}});function ve(){return D(ee)}const pe={__name:"MainLayout",setup(t){const v=ve();return y(v.platform.is.mobile).value?console.log("Mobile"):console.log("Desktop"),(e,a)=>{const r=te("router-view");return oe(),ne(fe,{view:"hHr lpR fFr"},{default:k(()=>[F(se,null,{default:k(()=>[F(r)]),_:1})]),_:1})}}};export{pe as default};

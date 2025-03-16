import{c as k,g as R,i as q,e as d,l as J,f as F,a as l,h as s,b as D,a0 as A,k as K,r as f,m as $,o as W,a3 as Y,w as Z}from"./index-C_6EuKuT.js";import{b as w,Q as X}from"./use-router-link-B5zgGrDo.js";const ne=k({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:r}}=R(),i=q(J,d);if(i===d)return console.error("QPage needs to be a deep child of QLayout"),d;if(q(F,d)===d)return console.error("QPage needs to be child of QPageContainer"),d;const p=l(()=>{const n=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const P=i.isContainer.value===!0?i.containerHeight.value:r.screen.height;return e.styleFn(n,P)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-n+"px":r.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":r.screen.height-n+"px"}}),L=l(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>s("main",{class:L.value,style:p.value},D(a.default))}}),ee={ratio:[String,Number]};function oe(e,a){return l(()=>{const r=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}function T(){let e=null;const a=R();function r(){e!==null&&(clearTimeout(e),e=null)}return A(r),K(r),{removeTimeout:r,registerTimeout(i,g){r(),w(a)===!1&&(e=setTimeout(()=>{e=null,i()},g))}}}const te=1.7778,se=k({name:"QImg",props:{...ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:te},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:r}){const i=f(e.initialRatio),g=oe(e,i),p=R(),{registerTimeout:L,removeTimeout:n}=T(),{registerTimeout:P,removeTimeout:B}=T(),C=l(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),_=l(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),u=[f(null),f(C.value)],c=f(0),v=f(!1),y=f(!1),x=l(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),O=l(()=>({width:e.width,height:e.height})),H=l(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),N=l(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function Q(){if(B(),e.loadingShowDelay===0){v.value=!0;return}P(()=>{v.value=!0},e.loadingShowDelay)}function S(){B(),v.value=!1}function z({target:o}){w(p)===!1&&(n(),i.value=o.naturalHeight===0?.5:o.naturalWidth/o.naturalHeight,U(o,1))}function U(o,m){m===1e3||w(p)===!0||(o.complete===!0?G(o):L(()=>{U(o,m+1)},50))}function G(o){w(p)!==!0&&(c.value=c.value^1,u[c.value].value=null,S(),o.getAttribute("__qerror")!=="true"&&(y.value=!1),r("load",o.currentSrc||o.src))}function M(o){n(),S(),y.value=!0,u[c.value].value=_.value,u[c.value^1].value=C.value,r("error",o)}function j(o){const m=u[o].value,b={key:"img_"+o,class:H.value,style:N.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return c.value===o?Object.assign(b,{class:b.class+"current",onLoad:z,onError:M}):b.class+="loaded",s("div",{class:"q-img__container absolute-full",key:"img"+o},s("img",b))}function V(){return v.value===!1?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},D(a[y.value===!0?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[s(X,{color:e.spinnerColor,size:e.spinnerSize})])}{let o=function(){Z(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,m=>{n(),y.value=!1,m===null?(S(),u[c.value^1].value=C.value):Q(),u[c.value].value=m},{immediate:!0})};$.value===!0?W(o):o()}return()=>{const o=[];return g.value!==null&&o.push(s("div",{key:"filler",style:g.value})),u[0].value!==null&&o.push(j(0)),u[1].value!==null&&o.push(j(1)),o.push(s(Y,{name:"q-transition--fade"},V)),s("div",{key:"main",class:x.value,style:O.value,role:"img","aria-label":e.alt},o)}}}),h=e=>I.find(a=>a.name===e),t=e=>E.find(a=>a.name===e),E=[{id:1,name:"JavaScript",color:"#fff372",icon:"javascript/javascript-original"},{id:2,name:"HTML",color:"#f88b50",icon:"html5/html5-original"},{id:3,name:"CSS",color:"#4695cd",icon:"css3/css3-original"},{id:4,name:"PHP",color:"#8892be",icon:"php/php-original"},{id:5,name:"C#",color:"#52b63b",icon:"csharp/csharp-original"},{id:6,name:"Python",color:"#ffc772",icon:"python/python-original"},{id:7,name:"Kotlin",color:"#8072ff",icon:"kotlin/kotlin-original"},{id:8,name:"Lua",color:"#3471ff",icon:"lua/lua-original"},{id:9,name:"Tailwind",color:"#72ffff",icon:"tailwindcss/tailwindcss-original"},{id:10,name:"DiscordJs",color:"#9a72ff",icon:"discordjs/discordjs-original"},{id:11,name:"Symphony",color:"#ffffff",icon:"symfony/symfony-original"},{id:12,name:"Android Studio",color:"#9aff72",icon:"androidstudio/androidstudio-original"},{id:13,name:"Godot",color:"#729aff",icon:"godot/godot-original"},{id:14,name:"ViteJs",color:"#c072ff",icon:"vitejs/vitejs-original"},{id:15,name:"VueJs",color:"#72ff77",icon:"vuejs/vuejs-original"},{id:16,name:"Quasar",color:"#72efff",icon:"quasar/quasar-original"}],I=[{id:1,name:"COM&Company",description:"L’entreprise COM & Company, est une entreprise de communication spécialisée dans le webmarketing, le <span class='tw-text-primary'>développement de site web</span>, la création de supports publicitaires et la maintenance informatique. l’entreprise accompagne la croissance de chaque entité et <span class='tw-text-primary'>développe des outils adaptés à chaque métier du groupe</span>. COM & Company propose des solution complètes, flexible et sur-mesure pour chaque société du groupe tout en les faisant évoluer.",more:"présente partie dev info et comment elle fonctionne (plusieur ilots avec chacun des projets differents) l'equipe ou j'était (on était 7 dont 1 responssable project (mon tuteur), nombreux projet dont tethys et espace client) les language utiliser (principalement vue, symphony et tw, mais aussi quasar pour espace cli. et expliquer rapidement) la gestion de projet: crée nouvelle branche, fait ajout en local, tests, si ok test avec jenkins (simule la version en ligne du projet pour voir si aucune erreur) crée MR et envoie la mr avec description au groupe pour qu'ils verif avant de push ",logo:new URL("/Portfolio/assets/comCompanyLogo-joz9Zb7m.png",import.meta.url).href,logoBg:"#ffffff",color:"#f7a424",location:"94 quai Charles de Gaulle 69 006 Lyon",team:`- 1 Responsable d'équipes 
- 1 Project Owner 
- 5 développeurs 
- 1 alternant`,tools:[new URL("/Portfolio/assets/monday-h_IQN80E.png",import.meta.url).href,new URL("/Portfolio/assets/docker-_Aci4th9.png",import.meta.url).href,new URL("/Portfolio/assets/phpstorm-DkdjN2CG.png",import.meta.url).href,new URL("/Portfolio/assets/gitlab-DYFWLdf2.png",import.meta.url).href,new URL("/Portfolio/assets/jenkins-CcSUYc0H.png",import.meta.url).href],locationUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3700720332754!2d4.848135176716111!3d45.783813212056224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb36af14bc4f%3A0x81de0aa67885c134!2sCOM%20%26%20Company!5e0!3m2!1sfr!2sfr!4v1727800406049!5m2!1sfr!2sfr",createdAt:"12/14/1298"}],re=[{id:1,title:"The Oni",description:"Bot discord multifonctionnel, permettant de gérer des serveurs discords, de jouer à des jeux et faire des actions de modération.",more:"Blablabla",logo:new URL("/Portfolio/assets/AkuBotIcon-CUms5Qbx.png",import.meta.url).href,logoBg:"#343950",company:null,frameworks:[t("DiscordJs")],date:"2024",images:[new URL("/Portfolio/assets/OniBot4-Nj0nWmIl.png",import.meta.url).href,new URL("/Portfolio/assets/OniBot3-D1BhlGKf.png",import.meta.url).href,new URL("/Portfolio/assets/OniBot2-Cdf3pE_p.png",import.meta.url).href,new URL("/Portfolio/assets/OniBot1-Pm9p6Ck_.png",import.meta.url).href]},{id:2,title:"Tethys - upgrade cron",description:`La page des crons était déjà créée sur tethys, mon travail était donc de rajouter 2 éléments à cette page:

1. La durée de la dernière exécution à la base de donnée des crons permettant de savoir directement combien de temps a pris le dernier cron et vérifié qu'il n'y ait pas eu d'erreurs.

2. l'ajout d'une nouvelle action “historique” qui répertorie tout l’historique d’un cron avec les dates et durées d'exécution ainsi que les erreurs s'il y en a eu.`,more:"Blablabla",logo:new URL("/Portfolio/assets/TethysIcon-WcIBm93O.png",import.meta.url).href,logoBg:"#153155",company:h("COM&Company"),frameworks:[t("VueJs"),t("Symphony"),t("Tailwind")],date:"2024",images:[new URL("/Portfolio/assets/TethysCron1-BvefObtR.png",import.meta.url).href,new URL("/Portfolio/assets/TethysCron2-DuPxHm_N.png",import.meta.url).href]},{id:3,title:"Espace Client - Pratique/page interne",description:"La page pratique de l’espace client est une page qui recentre toutes les informations dont un utilisateur pourrait avoir besoin, elle permet de naviguer entre les pages d’aides et d’en chercher une grâce à son titre, son contenu ou sa catégorie.",more:"Blablabla",logo:new URL("/Portfolio/assets/ValorityIcon-CIa73GgR.png",import.meta.url).href,logoBg:"#d5a879",company:h("COM&Company"),frameworks:[t("VueJs"),t("Symphony"),t("Quasar"),t("Tailwind")],date:"2024",images:[new URL("/Portfolio/assets/espaceClient3-Ck-npN4y.jpg",import.meta.url).href,new URL("/Portfolio/assets/espaceClient2-8O_r4cKh.jpg",import.meta.url).href,new URL("/Portfolio/assets/espaceClient1-xoF-zO-o.jpg",import.meta.url).href]},{id:4,title:"EcoElec",description:"Site web de vente d'objets informatique reconditionné et chef-d’œuvre de mon bac pro SN.",more:"Blablabla",logo:new URL("/Portfolio/assets/EcoElecIcon-wPQEJGN9.png",import.meta.url).href,logoBg:"#72ff77",company:null,languages:[t("JavaScript"),t("HTML"),t("CSS")],frameworks:null,date:"2024",images:[new URL("/Portfolio/assets/ecoElec1-BwHzQxav.png",import.meta.url).href,new URL("/Portfolio/assets/ecoElec2-BVKbiyHu.png",import.meta.url).href,new URL("/Portfolio/assets/ecoElec3-vLK3nHzo.png",import.meta.url).href,new URL("/Portfolio/assets/ecoElec4-Cd42h4tm.png",import.meta.url).href]},{id:5,title:"TD3D",description:"Tower défense 3D créant des map aléatoires à chaque niveau ou nouvelle partie.",more:"Blablabla",logo:new URL("/Portfolio/assets/TDGD-3DIcon-DspvtSoS.png",import.meta.url).href,logoBg:"#dc9571",company:null,languages:[t("Godot")],frameworks:null,date:"2024",images:[new URL("/Portfolio/assets/TDGD3D1-C48Co7uE.png",import.meta.url).href,new URL("/Portfolio/assets/TDGD3D2-Bs2hivjH.png",import.meta.url).href]},{id:6,title:"Fake ENT",description:"Fausse application mobile du site de l'ENT, dans le but de faire de la prévention sur les dangers de données ses informations personnelles sans vérifier l'auteur.",more:"Blablabla",logo:new URL("/Portfolio/assets/EntIcon-vV3-988G.png",import.meta.url).href,logoBg:"#ffffff",company:null,languages:[t("Kotlin")],frameworks:[t("Android Studio")],date:"2024",images:[new URL("/Portfolio/assets/fakeEnt4-DGojRlK3.png",import.meta.url).href,new URL("/Portfolio/assets/fakeEnt3-CvoLeTt_.png",import.meta.url).href,new URL("/Portfolio/assets/fakeEnt2-BBAPMuZ5.png",import.meta.url).href,new URL("/Portfolio/assets/fakeEnt1-DVFxFD6-.png",import.meta.url).href]},{id:7,title:"Tethys - chiffres clés",description:"La page chiffres clés permet de Rechercher, Créer et Éditer des chiffres clés et leurs valeurs. Permettant par la suite aux autres applications de les récupérer grâce à une API.",more:"Blablabla",logo:new URL("/Portfolio/assets/TethysIcon-WcIBm93O.png",import.meta.url).href,logoBg:"#153155",company:h("COM&Company"),frameworks:[t("VueJs"),t("Symphony"),t("Tailwind")],date:"2024",images:[new URL("/Portfolio/assets/chiffresCles1-dJ08jvYr.png",import.meta.url).href,new URL("/Portfolio/assets/chiffresCles2-qf03cIqi.png",import.meta.url).href]},{id:8,title:"BO Espace Client - Informations avancées utilisateur",description:"Page avec les informations avancer d’un utilisateur pour centraliser un maximum de donnée et trouver des solutions à ses problèmes plus facilement.",more:"Blablabla",logo:new URL("/Portfolio/assets/ValorityIcon-CIa73GgR.png",import.meta.url).href,logoBg:"#3d613c",company:h("COM&Company"),frameworks:[t("VueJs"),t("Symphony"),t("Tailwind")],date:"2025",images:[new URL("/Portfolio/assets/boEspaceClient4-CSAHtqYl.png",import.meta.url).href,new URL("/Portfolio/assets/boEspaceClient3-DB5a9EER.png",import.meta.url).href,new URL("/Portfolio/assets/boEspaceClient2-B7MVuM5D.png",import.meta.url).href,new URL("/Portfolio/assets/boEspaceClient1-Bpij5Lnu.png",import.meta.url).href]},{id:9,title:"E-Tromby - Bannières de signature",description:"La page bannières de signature permet au administrateur de gérer les bannières qu'on un ou plusieurs utilisateur sur leurs signature, ensuite visible en bas de leurs mails. à partir de cette page nous pouvonts créer des bannières personnalisable doté de date de début, de date de fin, d'affectation et même de lien cliquable. Elles peuvent être modifiées à tout moment. et une section de filtre permet de les retrouver rapidement.",more:"Blablabla",logo:new URL("/Portfolio/assets/ValorityIcon-CIa73GgR.png",import.meta.url).href,logoBg:"#785e41",company:h("COM&Company"),frameworks:[t("VueJs"),t("Symphony"),t("Tailwind")],date:"2024",images:[new URL("/Portfolio/assets/trombyBanniere4-BNUHlQcL.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere2-BkkzuzhP.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere3-D4pftfl8.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere1-WW_lHcdt.png",import.meta.url).href]},{id:10,title:"Gourmetise",description:"L'application Gourmetise permet aux boulangers de participer à un concours face à d'autres boulangeries de leurs région de partager leur passion pour la boulangerie et aux amateurs dedécouvrir les meilleures boulangeries de la région.",more:"Blablabla",logo:new URL("/Portfolio/assets/GourmetiseIcon-BZxvGOiB.png",import.meta.url).href,logoBg:"#bc4242",company:null,languages:[t("Kotlin")],frameworks:[t("VueJs"),t("Symphony"),t("Tailwind"),t("Android Studio")],date:"2025",images:[new URL("/Portfolio/assets/trombyBanniere4-BNUHlQcL.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere2-BkkzuzhP.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere3-D4pftfl8.png",import.meta.url).href,new URL("/Portfolio/assets/trombyBanniere1-WW_lHcdt.png",import.meta.url).href]}],le=[{id:"projects",data:re},{id:"company",data:I},{id:"languages",data:E}];export{se as Q,ne as a,le as p,T as u};

import{_ as H}from"./Shared.3LKvBNND.js";import{_ as p,o as i,c as l,a as t,d as O,b as R,r as d,w as F,u as N,e as s,t as P,f as r,F as B,g as V,h as E,p as q,i as z,j as G}from"./entry.6ALHbT7o.js";import{m as J,_ as K}from"./useRemarkable.Bkgvijq2.js";import{u as Q,_ as W}from"./Preview.8rkkGGnp.js";import{_ as X}from"./Tags.vue.DDNrQaU9.js";import"./transform-date.C3ueD1rC.js";const Y={},Z={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-user"},tt=t("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null,-1),et=t("circle",{cx:"12",cy:"7",r:"4"},null,-1),st=[tt,et];function ot(o,n){return i(),l("svg",Z,st)}const nt=p(Y,[["render",ot]]),at={},rt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-users"},it=t("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},null,-1),ct=t("circle",{cx:"9",cy:"7",r:"4"},null,-1),lt=t("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"},null,-1),_t=t("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"},null,-1),ut=[it,ct,lt,_t];function dt(o,n){return i(),l("svg",rt,ut)}const pt=p(at,[["render",dt]]),_=o=>(q("data-v-6aa51a5b"),o=o(),z(),o),ht={class:"biograpy"},mt={class:"biograpy-box-image"},gt=["src","alt"],vt=["innerHTML"],ft=_(()=>t("hr",null,null,-1)),bt=_(()=>t("p",null,"Compartilhe:",-1)),wt={class:"posts-relation"},$t={class:"title-icon-flex"},xt=_(()=>t("span",null,"Deste Autor",-1)),kt={class:"title-icon-flex"},yt=_(()=>t("span",null,"Autores",-1)),It={class:"container-authors"},Mt=O({__name:"index",async setup(o){var v,f,b,w,$,x;let n,h;const m=R(()=>G().params.slug),e=d(),g=d(),a=d(""),{data:U}=([n,h]=F(()=>Q.get(m.value.toString())),n=await n,h(),n);e.value=Object(U).at(0),g.value=Object((v=e.value)==null?void 0:v.attributes.posts).data;const u=`Orar e Labutar | ${(f=e.value)==null?void 0:f.attributes.name}`;return a.value=(w=(b=e.value)==null?void 0:b.attributes.biograpy)==null?void 0:w.substring(0,270).concat("..."),N({title:u,ogTitle:`${u}`,description:a,ogDescription:`${a.value}`,ogImage:`${($=e.value)==null?void 0:$.attributes.imgUrl}`,twitterTitle:`${u}`,twitterDescription:`${a.value}`,twitterImage:`${(x=e.value)==null?void 0:x.attributes.imgUrl}`},{mode:"server"}),(k,St)=>{var y,I,M,S;const j=H,A=nt,C=K,L=pt,T=W,D=X;return i(),l(B,null,[t("main",null,[t("div",ht,[t("article",null,[t("div",mt,[t("img",{src:(y=s(e))==null?void 0:y.attributes.imgUrl,alt:(I=s(e))==null?void 0:I.attributes.name},null,8,gt)]),t("h1",null,P((M=s(e))==null?void 0:M.attributes.name),1),t("div",{innerHTML:("md"in k?k.md:s(J)).render((S=s(e))==null?void 0:S.attributes.biograpy)},null,8,vt)]),ft,bt,r(j,{slug:"author/"+s(m),description:s(a)},null,8,["slug","description"])])]),t("section",wt,[t("h2",$t,[r(A),xt]),t("div",null,[(i(!0),l(B,null,V(s(g),c=>(i(),E(C,{key:c.id,title:c.attributes.title,"img-url":c.attributes.imgURL,slug:c.attributes.slug},null,8,["title","img-url","slug"]))),128))])]),t("section",null,[t("h1",kt,[r(L),yt]),t("div",It,[r(T)])]),t("section",null,[r(D)])],64)}}}),Tt=p(Mt,[["__scopeId","data-v-6aa51a5b"]]);export{Tt as default};

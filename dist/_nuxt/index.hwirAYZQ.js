import{d as p,o as l,c,e as o,a as e,m as q,n as E,t as N,f as n,h as z,q as G,b as J,r as d,w as K,u as Q,F as M,g as W,i as X,k as Y}from"./entry.pmvLWQNv.js";import{t as Z}from"./transform-date.C3ueD1rC.js";import{m as tt,_ as et}from"./useRemarkable.BLwo-6eM.js";import{_ as nt}from"./Shared.CrsAWWHN.js";import{a as st,_ as at}from"./BookOpen.BppqdtTh.js";import{b as ot,_ as it}from"./Tags.vue.YokCvALQ.js";const lt={class:"article-author"},rt=["innerHTML"],ut=p({__name:"Public",props:["imgUrl","name","date","slug"],setup(a){return(s,r)=>{const _=z,i=G;return l(),c("div",lt,[o(_,{src:a.imgUrl,alt:a.name,width:"60",height:"60"},null,8,["src","alt"]),e("div",null,[o(i,{to:"/authors/"+a.slug},{default:q(()=>[E(N(a.name),1)]),_:1},8,["to"]),e("span",{class:"article-author-date",innerHTML:("transformDate"in s?s.transformDate:n(Z))(a.date)},null,8,rt)])])}}}),ct=["innerHTML"],_t=p({__name:"Index",props:["title","content"],setup(a){return(s,r)=>(l(),c("article",null,[e("h1",null,N(a.title),1),e("div",{innerHTML:("md"in s?s.md:n(tt)).render(a.content)},null,8,ct)]))}}),mt=e("hr",null,null,-1),dt=e("p",null,"Compartilhe:",-1),pt={class:"posts-relation"},gt={class:"title-icon-flex"},bt=e("span",null,"Posts Relacionados",-1),wt=p({__name:"index",async setup(a){var b,h,f,v,$,x,k,L;let s,r;const _=J(()=>Y().params.slug),i=d(),t=d(),g=d(),{data:O}=([s,r]=K(()=>ot.get(_.value.toString())),s=await s,r(),s);t.value=Object.values(O).at(0);const m=`Orar e Labutar | ${(b=t.value)==null?void 0:b.attributes.title}`;return i.value=Object((h=t.value)==null?void 0:h.attributes.profile).data,g.value=Object((f=i.value)==null?void 0:f.attributes.posts).data,Q({title:`${m}`,ogType:"article",ogTitle:`${m}`,description:`${(v=t.value)==null?void 0:v.attributes.description}`,ogDescription:`${($=t.value)==null?void 0:$.attributes.description}`,ogImage:`${(x=t.value)==null?void 0:x.attributes.imgURL}`,twitterTitle:`${m}`,twitterDescription:`${(k=t.value)==null?void 0:k.attributes.description}`,twitterImage:`${(L=t.value)==null?void 0:L.attributes.imgURL}`},{mode:"server"}),(ht,ft)=>{var T,w,D,P,R,U,y,B,I;const S=ut,C=_t,H=nt,j=st,A=et,V=it,F=at;return l(),c(M,null,[e("main",null,[o(S,{name:(T=n(i))==null?void 0:T.attributes.name,"img-url":(w=n(i))==null?void 0:w.attributes.imgUrl,date:(D=n(t))==null?void 0:D.attributes.updatedAt,slug:(P=n(i))==null?void 0:P.attributes.slug},null,8,["name","img-url","date","slug"]),o(C,{title:(R=n(t))==null?void 0:R.attributes.title,content:(U=n(t))==null?void 0:U.attributes.content},null,8,["title","content"]),mt,dt,o(H,{slug:(y=n(t))==null?void 0:y.attributes.slug,description:(B=n(t))==null?void 0:B.attributes.description,likes:(I=n(t))==null?void 0:I.attributes.likes},null,8,["slug","description","likes"])]),e("section",pt,[e("h2",gt,[o(j),bt]),e("div",null,[(l(!0),c(M,null,W(n(g),u=>(l(),X(A,{key:u.id,title:u.attributes.title,"img-url":u.attributes.imgURL,slug:u.attributes.slug},null,8,["title","img-url","slug"]))),128))])]),e("section",null,[o(V)]),e("section",null,[o(F)])],64)}}});export{wt as default};

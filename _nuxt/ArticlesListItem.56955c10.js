import{a as x,J as v,N as C,o as c,i,k as n,F as N,K as p,l as o,m as u,w as m,c as w,t as r,u as f,j as B,O as D,P as I,Q as L,x as V}from"./entry.feb4c492.js";import{f as j}from"./date.824a539b.js";const z=["data-content-id"],A={class:"image"},E={key:0},F={class:"content"},O={class:"description"},P=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var a,s;return(a=C())!=null&&a.isEnabled()?(s=_.article)==null?void 0:s._id:void 0});return(a,s)=>{var d;const y=D,l=I;return t.article._path&&t.article.title?(c(),i("article",{key:0,class:B({featured:t.featured}),"data-content-id":f(h)},[n("div",A,[(d=t.article)!=null&&d.badges?(c(),i("div",E,[(c(!0),i(N,null,p(t.article.badges,(e,k)=>(c(),i("span",{key:k,style:L({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):o("",!0),u(l,{to:t.article._path},{default:m(()=>[t.article.cover?(c(),w(y,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):o("",!0)]),_:1},8,["to"])]),n("div",F,[u(l,{to:t.article._path,class:"headline"},{default:m(()=>[n("h1",null,r(t.article.title),1)]),_:1},8,["to"]),n("p",O,r(t.article.description),1),n("time",null,r(("formatDate"in a?a.formatDate:f(j))(t.article.date)),1)])],10,z)):o("",!0)}}});const q=V(P,[["__scopeId","data-v-69f3cb9e"]]);export{q as default};

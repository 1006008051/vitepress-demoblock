import{f as y,o as t,c as s,b as n,F as a,r as o,i as p,w as i,k as c,t as u,u as _,e as d}from"../app.97f3eec4.js";const x=n("p",null,"Basic link button",-1),f={class:"flex justify-space-between mb-4 flex-wrap gap-4"},m=n("p",null,"Disabled link button",-1),k={class:"flex justify-space-between flex-wrap gap-4"},B=y({__name:"button-link",setup(b){const l=[{type:"",text:"plain"},{type:"primary",text:"primary"},{type:"success",text:"success"},{type:"info",text:"info"},{type:"warning",text:"warning"},{type:"danger",text:"danger"}];return(g,w)=>{const r=d("el-button");return t(),s(a,null,[x,n("div",f,[(t(!0),s(a,null,o(_(l),e=>(t(),p(r,{key:e.text,type:e.type,link:""},{default:i(()=>[c(u(e.text),1)]),_:2},1032,["type"]))),128))]),m,n("div",k,[(t(!0),s(a,null,o(_(l),e=>(t(),p(r,{key:e.text,type:e.type,link:"",disabled:""},{default:i(()=>[c(u(e.text),1)]),_:2},1032,["type"]))),128))])],64)}}});export{B as default};
var m=t=>{throw TypeError(t)};var a=(t,s,e)=>s.has(t)||m("Cannot "+e);var o=(t,s,e)=>(a(t,s,"read from private field"),e?e.call(t):s.get(t)),n=(t,s,e)=>s.has(t)?m("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e);import{k as u,l as p,m as c}from"./runtime.DQTOjXjt.js";import{p as i}from"./proxy.CYpq2FMC.js";var r;class f{constructor(){n(this,r,u(0))}get num(){return p(o(this,r))}set num(s){c(o(this,r),i(s))}}r=new WeakMap;const x=new f;export{x as c};
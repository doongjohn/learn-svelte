var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,Wn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,It=Object.getPrototypeOf,Dt=Object.isExtensible;const zn=()=>{};function Jn(t){return t()}function Ft(t){for(var n=0;n<t.length;n++)t[n]()}const R=2,Ct=4,it=8,mt=16,O=32,U=64,et=128,x=256,rt=512,m=1024,I=2048,B=4096,L=8192,ot=16384,vn=32768,Mt=65536,Qn=1<<17,hn=1<<19,qt=1<<20,dt=1<<21,K=Symbol("$state"),Xn=Symbol("legacy props");function jt(t){return t===this.v}function pn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Lt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function gn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function te(){throw new Error("https://svelte.dev/e/hydration_failed")}function ne(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function En(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function ee(){_t=!0}const re=1,le=2,ae=4,se=8,fe=16,ue=1,ie=2,xn="[",bn="[!",An="]",Yt={},g=Symbol(),oe="http://www.w3.org/1999/xhtml";function Ut(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function Ot(t){d=t}function _e(t,n=!1,e){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!n&&(d.l={s:null,u:null,r1:[],r2:Tt(!1)}),Sn(()=>{r.d=!0})}function ce(t){const n=d;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),Y(l.reaction),$t(l.fn)}}finally{st(e),Y(r)}}d=n.p,n.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function j(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=It(t);if(e!==_n&&e!==cn)return t;var r=new Map,a=fn(t),l=P(0),_=v,c=u=>{var s=v;Y(_);var f;return f=u(),Y(s),f};return a&&r.set("length",P(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&En();var i=r.get(s);return i===void 0?(i=c(()=>P(f.value)),r.set(s,i)):S(i,c(()=>j(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>P(g)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&S(i,o)}S(f,g),kt(l)}return!0},get(u,s,f){var k;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(k=G(u,s))!=null&&k.writable)&&(i=c(()=>P(j(o?u[s]:g))),r.set(s,i)),i!==void 0){var p=V(i);return p===g?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=V(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==g)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==g||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>P(i?j(u[s]):g)),r.set(s,f));var o=V(f);if(o===g)return!1}return i},set(u,s,f,i){var Rt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var k=f;k<o.v;k+=1){var X=r.get(k+"");X!==void 0?S(X,g):k in u&&(X=c(()=>P(g)),r.set(k+"",X))}o===void 0?(!p||(Rt=G(u,s))!=null&&Rt.writable)&&(o=c(()=>P(void 0)),S(o,c(()=>j(f))),r.set(s,o)):(p=o.v!==g,S(o,c(()=>j(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var At=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=At.v&&S(At,pt+1)}kt(l)}return!0},ownKeys(u){V(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==g});for(var[f,i]of r)i.v!==g&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function kt(t,n=1){S(t,t.v+n)}const $=new Map;function Tt(t,n){var e={f:0,v:t,reactions:null,equals:jt,rv:0,wv:0};return e}function P(t,n){const e=Tt(t);return nn(e),e}function ve(t,n=!1){var r;const e=Tt(t);return n||(e.equals=Lt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(e),e}function S(t,n,e=!1){v!==null&&!A&&ct()&&(v.f&(R|mt))!==0&&!(y!=null&&y.includes(t))&&Tn();let r=e?j(n):n;return Rn(t,r)}function Rn(t,n){if(!t.equals(n)){var e=t.v;J?$.set(t,n):$.set(t,e),t.v=n,t.wv=rn(),Bt(t,I),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(O|U))===0&&(T===null?Ln([t]):T.push(t))}return n}function Bt(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&I)===0&&(!r&&_===h||(D(_,n),(c&(m|x))!==0&&((c&R)!==0?Bt(_,B):ht(_))))}}let C=!1;function he(t){C=t}let b;function W(t){if(t===null)throw Ut(),Yt;return b=t}function pe(){return W(q(b))}function de(t){if(C){if(q(b)!==null)throw Ut(),Yt;b=t}}function we(t=1){if(C){for(var n=t,e=b;n--;)e=q(e);b=e}}function ye(){for(var t=0,n=b;;){if(n.nodeType===8){var e=n.data;if(e===An){if(t===0)return n;t-=1}else(e===xn||e===bn)&&(t+=1)}var r=q(n);n.remove(),n=r}}var Pt,Dn,Ht,Vt;function ge(){if(Pt===void 0){Pt=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Ht=G(n,"firstChild").get,Vt=G(n,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Ht.call(t)}function q(t){return Vt.call(t)}function Ee(t,n){if(!C)return yt(t);var e=yt(b);if(e===null)e=b.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),W(r),r}return W(e),e}function me(t,n){if(!C){var e=yt(t);return e instanceof Comment&&e.data===""?q(e):e}return b}function Te(t,n=1,e=!1){let r=C?b:t;for(var a;n--;)a=r,r=q(r);if(!C)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),W(_),_}return W(r),r}function xe(t){t.textContent=""}function xt(t){var n=R|I,e=v!==null&&(v.f&R)!==0?v:null;return h===null||e!==null&&(e.f&x)!==0?n|=x:h.f|=qt,{ctx:d,deps:null,effects:null,equals:jt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function be(t){const n=xt(t);return nn(n),n}function Ae(t){const n=xt(t);return n.equals=Lt,n}function Gt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)M(n[e])}}function On(t){for(var n=t.parent;n!==null;){if((n.f&R)===0)return n;n=n.parent}return null}function kn(t){var n,e=h;st(On(t));try{Gt(t),n=an(t)}finally{st(e)}return n}function Kt(t){var n=kn(t),e=(N||(t.f&x)!==0)&&t.deps!==null?B:m;D(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function Zt(t){h===null&&v===null&&yn(),v!==null&&(v.f&x)!==0&&h===null&&wn(),J&&dn()}function Pn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function H(t,n,e,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{bt(l),l.f|=vn}catch(u){throw M(l),u}else n!==null&&ht(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(qt|et))===0;if(!_&&r&&(a!==null&&Pn(l,a),v!==null&&(v.f&R)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function Sn(t){const n=H(it,null,!1);return D(n,m),n.teardown=t,n}function Re(t){Zt();var n=h!==null&&(h.f&O)!==0&&d!==null&&!d.m;if(n){var e=d;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=$t(t);return r}}function De(t){return Zt(),Nn(t)}function Oe(t){const n=H(U,t,!0);return(e={})=>new Promise(r=>{e.outro?Cn(n,()=>{M(n),r(void 0)}):(M(n),r(void 0))})}function $t(t){return H(Ct,t,!1)}function Nn(t){return H(it,t,!0)}function ke(t,n=[],e=xt){const r=n.map(e);return In(()=>t(...r.map(V)))}function In(t,n=0){return H(it|mt|n,t,!0)}function Pe(t,n=!0){return H(it|O,t,!0,n)}function Wt(t){var n=t.teardown;if(n!==null){const e=J,r=v;Nt(!0),Y(null);try{n.call(null)}finally{Nt(e),Y(r)}}}function zt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&U)!==0?e.parent=null:M(e,n),e=r}}function Fn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&O)===0&&M(n),n=e}}function M(t,n=!0){var e=!1;if((n||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:q(r);r.remove(),r=l}e=!0}zt(t,n&&!e),ut(t,0),D(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();Wt(t);var c=t.parent;c!==null&&c.first!==null&&Jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Jt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Cn(t,n){var e=[];Qt(t,e,!0),Mn(e,()=>{M(t),n&&n()})}function Mn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function Qt(t,n,e){if((t.f&L)===0){if(t.f^=L,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&O)!==0;Qt(r,n,l?e:!1),r=a}}}function Se(t){Xt(t,!0)}function Xt(t,n){if((t.f&L)!==0){t.f^=L,(t.f&m)===0&&(t.f^=m),Q(t)&&(D(t,I),ht(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Mt)!==0||(e.f&O)!==0;Xt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let z=[],gt=[];function tn(){var t=z;z=[],Ft(t)}function qn(){var t=gt;gt=[],Ft(t)}function Ne(t){z.length===0&&queueMicrotask(tn),z.push(t)}function St(){z.length>0&&tn(),gt.length>0&&qn()}let nt=!1,lt=!1,at=null,F=!1,J=!1;function Nt(t){J=t}let Z=[];let v=null,A=!1;function Y(t){v=t}let h=null;function st(t){h=t}let y=null;function jn(t){y=t}function nn(t){v!==null&&v.f&dt&&(y===null?jn([t]):y.push(t))}let w=null,E=0,T=null;function Ln(t){T=t}let en=1,ft=0,N=!1;function rn(){return++en}function Q(t){var i;var n=t.f;if((n&I)!==0)return!0;if((n&B)!==0){var e=t.deps,r=(n&x)!==0;if(e!==null){var a,l,_=(n&rt)!==0,c=r&&h!==null&&!N,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&x)===0&&(s.f^=x)}for(a=0;a<u;a++)if(l=e[a],Q(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!N)&&D(t,m)}return!1}function Yn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Un(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,n,e,r){if(nt){if(e===null&&(nt=!1),Un(n))throw t;return}e!==null&&(nt=!0);{Yn(t,n);return}}function ln(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];y!=null&&y.includes(t)||((l.f&R)!==0?ln(l,n,!1):n===l&&(e?D(l,I):(l.f&m)!==0&&D(l,B),ht(l)))}}function an(t){var p;var n=w,e=E,r=T,a=v,l=N,_=y,c=d,u=A,s=t.f;w=null,E=0,T=null,N=(s&x)!==0&&(A||!F||v===null),v=(s&(O|U))===0?t:null,y=null,Ot(t.ctx),A=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,E),i!==null&&E>0)for(i.length=E+w.length,o=0;o<w.length;o++)i[E+o]=w[o];else t.deps=i=w;if(!N)for(o=E;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&E<i.length&&(ut(t,E),i.length=E);if(ct()&&T!==null&&!A&&i!==null&&(t.f&(R|B|I))===0)for(o=0;o<T.length;o++)ln(T[o],t);return a!==null&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),f}finally{w=n,E=e,T=r,v=a,N=l,y=_,Ot(c),A=u,t.f^=dt}}function Bn(t,n){let e=n.reactions;if(e!==null){var r=un.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&R)!==0&&(w===null||!w.includes(n))&&(D(n,B),(n.f&(x|rt))===0&&(n.f^=rt),Gt(n),ut(n,0))}function ut(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Bn(t,e[r])}function bt(t){var n=t.f;if((n&ot)===0){D(t,m);var e=h,r=d,a=F;h=t,F=!0;try{(n&mt)!==0?Fn(t):zt(t),Wt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,e,r||t.ctx)}finally{F=a,h=e}}}function Hn(){try{gn()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=F;try{var n=0;for(F=!0;Z.length>0;){n++>1e3&&Hn();var e=Z,r=e.length;Z=[];for(var a=0;a<r;a++){var l=Gn(e[a]);Vn(l)}}}finally{lt=!1,F=t,at=null,$.clear()}}function Vn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|L))===0)try{Q(r)&&(bt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Jt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var n=at=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(U|O))!==0){if((e&m)===0)return;n.f^=m}}Z.push(n)}function Gn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(O|U))!==0,l=a&&(r&m)!==0;if(!l&&(r&L)===0){if((r&Ct)!==0)n.push(e);else if(a)e.f^=m;else{var _=v;try{v=e,Q(e)&&bt(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function Kn(t){var n;for(St();Z.length>0;)lt=!0,sn(),St();return n}async function Ie(){await Promise.resolve(),Kn()}function V(t){var n=t.f,e=(n&R)!==0;if(v!==null&&!A){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[E]===t?E++:w===null?w=[t]:(!N||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&x)===0&&(a.f^=x)}return e&&(a=t,Q(a)&&Kt(a)),J&&$.has(t)?$.get(t):t.v}function Fe(t){var n=A;try{return A=!0,t()}finally{A=n}}const Zn=-7169;function D(t,n){t.f=t.f&Zn|n}function Ce(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)Et(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&Et(e)}}}function Et(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Et(t[r],n)}catch{}const e=It(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=on(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{Dn as $,ee as A,_t as B,me as C,Tt as D,Mt as E,Wn as F,Y as G,st as H,fn as I,v as J,h as K,ge as L,yt as M,oe as N,xn as O,q as P,Yt as Q,he as R,W as S,pe as T,An as U,Ut as V,te as W,xe as X,$n as Y,Oe as Z,wt as _,on as a,ue as a0,ie as a1,bn as a2,ye as a3,Se as a4,Cn as a5,g as a6,$t as a7,Nn as a8,Ne as a9,K as aa,G as ab,ne as ac,Qn as ad,Ae as ae,ae as af,Lt as ag,j as ah,ve as ai,se as aj,Xn as ak,le as al,re as am,fe as an,Kn as ao,Ie as ap,be as aq,pn as ar,In as b,Pe as c,M as d,b as e,Ee as f,It as g,C as h,we as i,ce as j,P as k,V as l,S as m,zn as n,d as o,_e as p,Re as q,de as r,Te as s,ke as t,De as u,Ft as v,Fe as w,Jn as x,Ce as y,xt as z};

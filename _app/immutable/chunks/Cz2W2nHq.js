import{M as Y,N as O,O as A,z as k,P as C,x as V,Q as b,R as H,T as $,V as j,W as T,X as g,Y as D,Z as W,e as v,_ as q,$ as z,a0 as B,a1 as Q,a2 as X,a3 as Z,a4 as F,c as G,p as J,h as E,j as K,C as U}from"./C6834TGx.js";import{b as x}from"./BKUlHf1-.js";const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}const I=new Set,N=new Set;function sr(r){for(var e=0;e<r.length;e++)I.add(r[e]);for(var t of N)t(r)}function m(r){var S;var e=this,t=e.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],a=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(a=i[d]||r.target,a!==e){Y(r,"currentTarget",{configurable:!0,get(){return a||t}});var w=C,o=V;O(null),A(null);try{for(var n,s=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var l=a["__"+c];if(l!==void 0&&!a.disabled)if(k(l)){var[M,...P]=l;M.apply(a,[r,...P])}else l.call(a,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||f===e||f===null)break;a=f}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=e,delete r.currentTarget,O(w),A(o)}}}function or(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t==null?"":t+"")}function ar(r,e){return L(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const t=e.target,c=E,i=v;try{for(var a=H(t);a&&(a.nodeType!==8||a.data!==$);)a=j(a);if(!a)throw T;g(!0),D(a),W();const d=L(r,{...e,anchor:a});if(v===null||v.nodeType!==8||v.data!==q)throw z(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&B(),b(),Q(t),g(!1),ar(r,e);throw d}finally{g(c),D(i)}}const p=new Map;function L(r,{target:e,anchor:t,props:c={},events:i,context:a,intro:d=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var l=p.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,l+1)}}};u(X(I)),N.add(u);var h=void 0,w=Z(()=>{var o=t??e.appendChild(F());return G(()=>{if(a){J({});var n=U;n.c=a}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(V.nodes_end=v),a&&K()}),()=>{var f;for(var n of _){e.removeEventListener(n,m);var s=p.get(n);--s===0?(document.removeEventListener(n,m),p.delete(n)):p.set(n,s)}N.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(h,w),h}let R=new WeakMap;function fr(r,e){const t=R.get(r);return t?(R.delete(r),t(e)):Promise.resolve()}export{sr as d,ir as h,ar as m,or as s,fr as u};

import{a as _,t as b}from"../chunks/disclose-version.BWcx5iV4.js";import{m as d,l as i,u as g,p as x,t as h,j as k,s,f as m,r as c}from"../chunks/runtime.DlruD43j.js";import{d as $,s as w}from"../chunks/render.CwGvyJXX.js";import{i as C}from"../chunks/lifecycle.iW1StgNy.js";import{T}from"../chunks/Title.CXYIuNZJ.js";import{c as j}from"../chunks/counter.svelte.CrJuj6cM.js";function A(o){var t=g(0);return function(){return arguments.length===1?(d(t,i(t)+1),arguments[0]):(i(t),o())}}var e=A(()=>j),S=b('<main><!> <p class="counter"> </p> <button class="svelte-7oob9w">+</button> <button class="svelte-7oob9w">-</button></main>');function F(o,t){x(t,!1);const p=()=>e(e().num+=1),l=()=>e(e().num-=1);C();var r=S(),n=m(r);T(n,{text:"Counter edit"});var a=s(n,2),f=m(a);c(a);var u=s(a,2);u.__click=p;var v=s(u,2);v.__click=l,c(r),h(()=>w(f,`Counter: ${e().num??""}`)),_(o,r),k()}$(["click"]);export{F as component};
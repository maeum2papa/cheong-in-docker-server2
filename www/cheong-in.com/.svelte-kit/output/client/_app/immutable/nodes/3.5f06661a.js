import{s as B,c as M,o as P,h as A}from"../chunks/scheduler.eb0a19f3.js";import{S as Y,i as F,g,s as S,r as I,h as v,j as T,B as V,c as j,u as E,f as y,k as w,a as G,x as p,v as H,z as J,d as q,t as k,w as z}from"../chunks/index.df893dc0.js";import{p as D}from"../chunks/api.3f2b77bb.js";import{S as K}from"../chunks/SlideTab.fdb49231.js";import{C as N}from"../chunks/CaseList.235a64a5.js";import{w as O}from"../chunks/singletons.29a41c96.js";const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,L=O({flag:!1});const{window:R}=Q;function U(f){let o,t,a,m="시공 사례",u,n,h,i,$="상담, 현장방문, 탐지, 시공, A/S 전 과정을 책임 전문가가 합리적인 비용으로 진행합니다.",e,l,d,b,C,x;return n=new K({props:{handleTab:f[2],isActive:f[1]}}),d=new N({props:{caseList:f[0]}}),{c(){o=g("div"),t=g("div"),a=g("h3"),a.textContent=m,u=S(),I(n.$$.fragment),h=S(),i=g("div"),i.textContent=$,e=S(),l=g("div"),I(d.$$.fragment),this.h()},l(s){o=v(s,"DIV",{class:!0});var r=T(o);t=v(r,"DIV",{class:!0});var c=T(t);a=v(c,"H3",{class:!0,"data-svelte-h":!0}),V(a)!=="svelte-1f4ebyd"&&(a.textContent=m),u=j(c),E(n.$$.fragment,c),h=j(c),i=v(c,"DIV",{class:!0,"data-svelte-h":!0}),V(i)!=="svelte-y86qd5"&&(i.textContent=$),c.forEach(y),e=j(r),l=v(r,"DIV",{class:!0});var _=T(l);E(d.$$.fragment,_),_.forEach(y),r.forEach(y),this.h()},h(){w(a,"class","svelte-13u3jw0"),w(i,"class","sub-text svelte-13u3jw0"),w(t,"class","case-header svelte-13u3jw0"),w(l,"class","case-body svelte-13u3jw0"),w(o,"class","case svelte-13u3jw0")},m(s,r){G(s,o,r),p(o,t),p(t,a),p(t,u),H(n,t,null),p(t,h),p(t,i),p(o,e),p(o,l),H(d,l,null),b=!0,C||(x=J(R,"scroll",f[3]),C=!0)},p(s,[r]){const c={};r&2&&(c.isActive=s[1]),n.$set(c);const _={};r&1&&(_.caseList=s[0]),d.$set(_)},i(s){b||(q(n.$$.fragment,s),q(d.$$.fragment,s),b=!0)},o(s){k(n.$$.fragment,s),k(d.$$.fragment,s),b=!1},d(s){s&&y(o),z(n),z(d),C=!1,x()}}}function W(f,o,t){let a;M(f,L,e=>t(6,a=e));let m=[],u=0,n=4;const h=async e=>{t(1,u=e);const l=await D({path:"/api/case",data:{sort:parseInt(e)}});t(0,m=l.data)};P(async()=>{const e=await D({path:"/api/case",data:{limit:n}});t(0,m=e.data),e.totalDocs});const i=async()=>{const e=await D({path:"/api/case",data:{limit:n}});t(0,m=e.data),e.totalDocs};return[m,u,h,e=>{let l;window.innerHeight+window.scrollY>=document.body.scrollHeight&&(A(L,a={flag:!0},a),l&&clearTimeout(l),l=setTimeout(async()=>{n+=n,await i(),A(L,a={flag:!1},a)},500))}]}class nt extends Y{constructor(o){super(),F(this,o,W,U,B,{})}}export{nt as component};

function x(){}const A=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function B(){return Object.create(null)}function E(t){t.forEach(j)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=y(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){return t??""}function K(t,n,e){return t.set(e),n}let f;function d(t){f=t}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){m().$$.on_mount.push(t)}function N(t){m().$$.after_update.push(t)}const l=[],g=[];let u=[];const p=[],k=Promise.resolve();let b=!1;function v(){b||(b=!0,k.then(z))}function Q(){return v(),k}function O(t){u.push(t)}function R(t){p.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,d(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(l.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{l as A,v as B,N as a,g as b,C as c,J as d,D as e,G as f,I as g,K as h,S as i,O as j,F as k,R as l,A as m,x as n,L as o,B as p,z as q,E as r,P as s,Q as t,H as u,U as v,T as w,f as x,d as y,j as z};

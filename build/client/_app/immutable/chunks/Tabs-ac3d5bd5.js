import{S as $,i as A,s as S,k as h,q as g,a as k,l as d,m as f,r as b,h as o,c as E,n as l,H as m,b as T,D as c,A as y,F as q}from"./index-5031b6ad.js";import{p as w}from"./stores-bf527588.js";function P(r){let a,e,i,p,t,u;return{c(){a=h("nav"),e=h("a"),i=g("Panel"),p=k(),t=h("a"),u=g("Users"),this.h()},l(s){a=d(s,"NAV",{class:!0});var n=f(a);e=d(n,"A",{class:!0,"aria-current":!0,href:!0});var v=f(e);i=b(v,"Panel"),v.forEach(o),p=E(n),t=d(n,"A",{class:!0,href:!0});var _=f(t);u=b(_,"Users"),_.forEach(o),n.forEach(o),this.h()},h(){l(e,"class","nav-link svelte-yd6ptw"),l(e,"aria-current","page"),l(e,"href","/admin"),m(e,"active",r[0].url.pathname==="/admin"),l(t,"class","nav-link svelte-yd6ptw"),l(t,"href","/admin/users/1"),m(t,"active",r[0].url.pathname===`/admin/users/${r[0].params.p!==void 0?r[0].params.p.toString():""}`),l(a,"class","nav justify-content-center mt-3 mb-3")},m(s,n){T(s,a,n),c(a,e),c(e,i),c(a,p),c(a,t),c(t,u)},p(s,[n]){n&1&&m(e,"active",s[0].url.pathname==="/admin"),n&1&&m(t,"active",s[0].url.pathname===`/admin/users/${s[0].params.p!==void 0?s[0].params.p.toString():""}`)},i:y,o:y,d(s){s&&o(a)}}}function U(r,a,e){let i;return q(r,w,p=>e(0,i=p)),[i]}class D extends ${constructor(a){super(),A(this,a,U,P,S,{})}}export{D as T};

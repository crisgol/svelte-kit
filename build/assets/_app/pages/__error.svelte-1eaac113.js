import{S as s,i as a,s as r,e as t,j as e,k as n,t as c,c as o,a as l,m as u,d as i,n as f,g as h,b as m,f as v,E as d,o as p,h as $,x as g,u as E,v as k,l as x,w as b,T as D,r as I}from"../chunks/vendor-23c8162e.js";function V(s){let a,r,x,b,I,V,j,w,H,z,N,S=s[1].message+"";return b=new D({props:{size:"5x"}}),{c(){a=t("div"),r=t("div"),x=t("div"),e(b.$$.fragment),I=n(),V=t("h1"),j=c(s[0]),w=n(),H=t("h4"),z=c(S),this.h()},l(t){a=o(t,"DIV",{class:!0});var e=l(a);r=o(e,"DIV",{class:!0});var n=l(r);x=o(n,"DIV",{class:!0});var c=l(x);u(b.$$.fragment,c),c.forEach(i),I=f(n),V=o(n,"H1",{});var m=l(V);j=h(m,s[0]),m.forEach(i),w=f(n),H=o(n,"H4",{});var v=l(H);z=h(v,S),v.forEach(i),n.forEach(i),e.forEach(i),this.h()},h(){m(x,"class","alert-icon svelte-12kctbe"),m(r,"class","alert-container svelte-12kctbe"),m(a,"class","container")},m(s,t){v(s,a,t),d(a,r),d(r,x),p(b,x,null),d(r,I),d(r,V),d(V,j),d(r,w),d(r,H),d(H,z),N=!0},p(s,a){(!N||1&a)&&$(j,s[0]),(!N||2&a)&&S!==(S=s[1].message+"")&&$(z,S)},i(s){N||(g(b.$$.fragment,s),N=!0)},o(s){E(b.$$.fragment,s),N=!1},d(s){s&&i(a),k(b)}}}function j(s){let a,r,t=s[1]&&V(s);return{c(){t&&t.c(),a=x()},l(s){t&&t.l(s),a=x()},m(s,e){t&&t.m(s,e),v(s,a,e),r=!0},p(s,[r]){s[1]?t?(t.p(s,r),2&r&&g(t,1)):(t=V(s),t.c(),g(t,1),t.m(a.parentNode,a)):t&&(I(),E(t,1,1,(()=>{t=null})),b())},i(s){r||(g(t),r=!0)},o(s){E(t),r=!1},d(s){t&&t.d(s),s&&i(a)}}}function w({error:s,status:a}){return{props:{status:a,error:s}}}function H(s,a,r){let{status:t}=a,{error:e}=a;return s.$$set=s=>{"status"in s&&r(0,t=s.status),"error"in s&&r(1,e=s.error)},[t,e]}class z extends s{constructor(s){super(),a(this,s,H,j,r,{status:0,error:1})}}export{z as default,w as load};

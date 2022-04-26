import{S as Q,i as X,s as Z,e as g,k as M,t as F,w as N,U as x,c as b,d as m,m as V,a as E,h as W,x as H,b as y,f as ee,H as a,g as j,y as J,I as te,M as se,q as Y,o as z,B as G,J as ae,Y as re}from"../../../chunks/index-30349cbd.js";import{a as oe,n as K}from"../../../chunks/Noti-2cff4241.js";import{I as L,a as ne}from"../../../chunks/Input-047a673d.js";import{p as ie}from"../../../chunks/stores-96b8dbae.js";import{g as le}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/variables-86731e6d.js";import"../../../chunks/index-dbf04213.js";import"../../../chunks/singletons-d1fb5791.js";const{document:R}=re;function de(s){let c,r,o,u,p,f,t,h,I,D,n,i,l,w,_,C,k,S,O,T;return n=new L({props:{id:"password",label:"Password",type:"password",valid:s[3],validityMessage:"Please enter a valid password.",value:s[0]}}),n.$on("input",s[6]),l=new L({props:{id:"passwordConfirmation",label:"Password Confirmation",help:"Password minimum length 8, must have one capital letter, 1 number, and one unique character.",type:"password",valid:s[2],validityMessage:"Passwords did not match",value:s[1]}}),l.$on("input",s[7]),{c(){c=g("meta"),r=M(),o=g("main"),u=g("div"),p=g("div"),f=g("div"),t=g("form"),h=g("h3"),I=F("NEW PASSWORD"),D=M(),N(n.$$.fragment),i=M(),N(l.$$.fragment),w=M(),_=g("button"),C=F("Update Password"),this.h()},l(e){const d=x('[data-svelte="svelte-akglfd"]',R.head);c=b(d,"META",{name:!0,content:!0}),d.forEach(m),r=V(e),o=b(e,"MAIN",{class:!0});var P=E(o);u=b(P,"DIV",{class:!0});var $=E(u);p=b($,"DIV",{class:!0,style:!0});var U=E(p);f=b(U,"DIV",{class:!0});var q=E(f);t=b(q,"FORM",{id:!0});var v=E(t);h=b(v,"H3",{});var A=E(h);I=W(A,"NEW PASSWORD"),A.forEach(m),D=V(v),H(n.$$.fragment,v),i=V(v),H(l.$$.fragment,v),w=V(v),_=b(v,"BUTTON",{class:!0});var B=E(_);C=W(B,"Update Password"),B.forEach(m),v.forEach(m),q.forEach(m),U.forEach(m),$.forEach(m),P.forEach(m),this.h()},h(){R.title="Password Reset",y(c,"name","robots"),y(c,"content","noindex, nofollow"),y(_,"class","btn btn-primary float-end"),_.disabled=k=!s[4],y(t,"id","password-reset-form"),y(f,"class","card-body"),y(p,"class","card"),ee(p,"max-width","50em"),y(u,"class","d-flex justify-content-center mt-5"),y(o,"class","container")},m(e,d){a(R.head,c),j(e,r,d),j(e,o,d),a(o,u),a(u,p),a(p,f),a(f,t),a(t,h),a(h,I),a(t,D),J(n,t,null),a(t,i),J(l,t,null),a(t,w),a(t,_),a(_,C),S=!0,O||(T=te(_,"click",se(s[5])),O=!0)},p(e,[d]){const P={};d&8&&(P.valid=e[3]),d&1&&(P.value=e[0]),n.$set(P);const $={};d&4&&($.valid=e[2]),d&2&&($.value=e[1]),l.$set($),(!S||d&16&&k!==(k=!e[4]))&&(_.disabled=k)},i(e){S||(Y(n.$$.fragment,e),Y(l.$$.fragment,e),S=!0)},o(e){z(n.$$.fragment,e),z(l.$$.fragment,e),S=!1},d(e){m(c),e&&m(r),e&&m(o),G(n),G(l),O=!1,T()}}}function me(s,c,r){let o,u,p,f;ae(s,ie,i=>r(8,f=i));let t="",h="";async function I(){const i=document.getElementById("password-reset-form"),l={password:t,passwordResetToken:f.params.token};try{const w=await oe("POST","user/reset-password",l);if(w.status>=400)throw new Error(w.message);return K.push("Password updated successfully","success"),i.reset(),le("/login")}catch(w){K.push(w.message)}}const D=i=>r(0,t=i.target.value),n=i=>r(1,h=i.target.value);return s.$$.update=()=>{s.$$.dirty&1&&r(3,o=ne(t)),s.$$.dirty&3&&r(2,u=t===h),s.$$.dirty&12&&r(4,p=o&&u)},[t,h,u,o,p,I,D,n]}class ge extends Q{constructor(c){super(),X(this,c,me,de,Z,{})}}export{ge as default};

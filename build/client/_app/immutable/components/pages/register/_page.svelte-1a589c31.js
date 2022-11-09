import{S as $e,i as Ee,s as Pe,k as l,a as S,q as j,v as J,O as Ie,l as o,h as n,c as V,m as u,r as G,w as Q,n as v,D as a,b as ye,x as X,E as be,I as Se,f as Y,t as Z,y as x,W as Ve}from"../../../chunks/index-5031b6ad.js";import{I as ee,i as De,a as Me}from"../../../chunks/Input-7bc467ae.js";import{a as Ne,n as we}from"../../../chunks/api-fa0000df.js";import{g as Oe}from"../../../chunks/navigation-37d8c489.js";function Ue(s){let b,r,g,h,_,p,c,m,f,w,U,A,N,F,R,i,t,ae,$,te,E,se,P,ne,D,I,re,H,le,B,oe,ie,k,O,de,L,ue,ce;return t=new ee({props:{id:"name",label:"Name",help:"Please, enter your complete legal name if you will be performing transactions.",valid:s[6],validityMessage:"Please enter a valid email.",value:s[6],className:"is-large"}}),t.$on("input",s[10]),$=new ee({props:{id:"email",label:"Email",valid:s[5],validityMessage:"Please enter a valid email.",value:s[0],className:"is-large"}}),$.$on("input",s[11]),E=new ee({props:{id:"password",label:"Password",type:"password",valid:s[4],validityMessage:"Please enter a valid password.",value:s[1],className:"is-large"}}),E.$on("input",s[12]),P=new ee({props:{id:"passwordConfirmation",label:"Confirm Password",help:"Password minimum length 8, must have one capital letter, 1 number, and one unique character.",type:"password",valid:s[3],validityMessage:"Passwords did not match",value:s[2],className:"is-large"}}),P.$on("input",s[13]),{c(){b=l("meta"),r=S(),g=l("div"),h=l("div"),_=l("div"),p=l("div"),c=l("div"),m=l("div"),f=l("h4"),w=l("strong"),U=j("Sing Up"),A=S(),N=l("p"),F=j("Please note that our services are only available in the United States."),R=S(),i=l("form"),J(t.$$.fragment),ae=S(),J($.$$.fragment),te=S(),J(E.$$.fragment),se=S(),J(P.$$.fragment),ne=S(),D=l("div"),I=l("button"),re=j("Sing Up"),le=S(),B=l("small"),oe=j("By signing up you accept our Privacy Policy."),ie=S(),k=l("footer"),O=l("a"),de=j("Already have an account?"),this.h()},l(e){const d=Ie('[data-svelte="svelte-1lsaqtu"]',document.head);b=o(d,"META",{name:!0,content:!0}),d.forEach(n),r=V(e),g=o(e,"DIV",{class:!0});var q=u(g);h=o(q,"DIV",{class:!0});var C=u(h);_=o(C,"DIV",{class:!0});var T=u(_);p=o(T,"DIV",{class:!0});var M=u(p);c=o(M,"DIV",{class:!0});var K=u(c);m=o(K,"DIV",{});var W=u(m);f=o(W,"H4",{});var me=u(f);w=o(me,"STRONG",{});var pe=u(w);U=G(pe,"Sing Up"),pe.forEach(n),me.forEach(n),A=V(W),N=o(W,"P",{});var fe=u(N);F=G(fe,"Please note that our services are only available in the United States."),fe.forEach(n),W.forEach(n),R=V(K),i=o(K,"FORM",{});var y=u(i);Q(t.$$.fragment,y),ae=V(y),Q($.$$.fragment,y),te=V(y),Q(E.$$.fragment,y),se=V(y),Q(P.$$.fragment,y),ne=V(y),D=o(y,"DIV",{class:!0});var z=u(D);I=o(z,"BUTTON",{class:!0});var ve=u(I);re=G(ve,"Sing Up"),ve.forEach(n),le=V(z),B=o(z,"SMALL",{});var ge=u(B);oe=G(ge,"By signing up you accept our Privacy Policy."),ge.forEach(n),z.forEach(n),y.forEach(n),K.forEach(n),ie=V(M),k=o(M,"FOOTER",{class:!0});var he=u(k);O=o(he,"A",{href:!0,class:!0});var _e=u(O);de=G(_e,"Already have an account?"),_e.forEach(n),he.forEach(n),M.forEach(n),T.forEach(n),C.forEach(n),q.forEach(n),this.h()},h(){document.title="Register Form",v(b,"name","robots"),v(b,"content","noindex, nofollow"),v(I,"class","btn btn-primary btn-lg mt-2"),I.disabled=H=!s[7],v(D,"class","d-grid gap-2"),v(c,"class","card-body"),v(O,"href","/login"),v(O,"class","text-black-50"),v(k,"class","card-footer text-center pt-3 pb-3 bg-white"),v(p,"class","card mt-5 register svelte-pm9bq0"),v(_,"class","d-flex justify-content-center d-block"),v(h,"class","col"),v(g,"class","container")},m(e,d){a(document.head,b),ye(e,r,d),ye(e,g,d),a(g,h),a(h,_),a(_,p),a(p,c),a(c,m),a(m,f),a(f,w),a(w,U),a(m,A),a(m,N),a(N,F),a(c,R),a(c,i),X(t,i,null),a(i,ae),X($,i,null),a(i,te),X(E,i,null),a(i,se),X(P,i,null),a(i,ne),a(i,D),a(D,I),a(I,re),a(D,le),a(D,B),a(B,oe),a(p,ie),a(p,k),a(k,O),a(O,de),L=!0,ue||(ce=[be(window,"keydown",s[9]),be(I,"click",Se(s[8]))],ue=!0)},p(e,[d]){const q={};d&64&&(q.valid=e[6]),d&64&&(q.value=e[6]),t.$set(q);const C={};d&32&&(C.valid=e[5]),d&1&&(C.value=e[0]),$.$set(C);const T={};d&16&&(T.valid=e[4]),d&2&&(T.value=e[1]),E.$set(T);const M={};d&8&&(M.valid=e[3]),d&4&&(M.value=e[2]),P.$set(M),(!L||d&128&&H!==(H=!e[7]))&&(I.disabled=H)},i(e){L||(Y(t.$$.fragment,e),Y($.$$.fragment,e),Y(E.$$.fragment,e),Y(P.$$.fragment,e),L=!0)},o(e){Z(t.$$.fragment,e),Z($.$$.fragment,e),Z(E.$$.fragment,e),Z(P.$$.fragment,e),L=!1},d(e){n(b),e&&n(r),e&&n(g),x(t),x($),x(E),x(P),ue=!1,Ve(ce)}}}function ke(s,b,r){let g,h,_,p,c="",m="",f="",w="";async function U(){try{const t=await Ne("POST","user/account-activation",{name:c,email:m,password:f});if(t)return r(0,m=""),r(1,f=""),r(6,c=""),we.push(t.message,"success"),Oe("login")}catch(t){return we.push(t.message)}}function A(t){p&&t.keyCode===13&&U()}const N=t=>r(6,c=t.target.value),F=t=>r(0,m=t.target.value),R=t=>r(1,f=t.target.value),i=t=>r(2,w=t.target.value);return s.$$.update=()=>{s.$$.dirty&1&&r(5,g=De(m)),s.$$.dirty&2&&r(4,h=Me(f)),s.$$.dirty&6&&r(3,_=f===w),s.$$.dirty&56&&r(7,p=g&&h&&_)},[m,f,w,_,h,g,c,p,U,A,N,F,R,i]}class Fe extends $e{constructor(b){super(),Ee(this,b,ke,Ue,Pe,{})}}export{Fe as default};

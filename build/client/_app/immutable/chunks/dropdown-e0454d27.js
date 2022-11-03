import{g as Mt,c as $t,d as jt}from"./api-c0e3e547.js";import{r as Bt,a as kt,b as Ht,c as Wt,d as Vt}from"./base-component-419522db.js";function It(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var We={exports:{}},$="top",V="bottom",I="right",j="left",Ne="auto",ye=[$,V,I,j],se="start",de="end",pt="clippingParents",Ve="viewport",le="popper",ut="reference",Be=ye.reduce(function(e,t){return e.concat([t+"-"+se,t+"-"+de])},[]),Ie=[].concat(ye,[Ne]).reduce(function(e,t){return e.concat([t,t+"-"+se,t+"-"+de])},[]),lt="beforeRead",dt="read",vt="afterRead",ht="beforeMain",mt="main",gt="afterMain",yt="beforeWrite",bt="write",wt="afterWrite",Et=[lt,dt,vt,ht,mt,gt,yt,bt,wt];function z(e){return e?(e.nodeName||"").toLowerCase():null}function Y(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function fe(e){var t=Y(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=Y(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function qe(e){if(typeof ShadowRoot>"u")return!1;var t=Y(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function qt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!q(a)||!z(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(p){var s=o[p];s===!1?a.removeAttribute(p):a.setAttribute(p,s===!0?"":s)}))})}function Yt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},p=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=p.reduce(function(i,u){return i[u]="",i},{});!q(o)||!z(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(i){o.removeAttribute(i)}))})}}const Ye={name:"applyStyles",enabled:!0,phase:"write",fn:qt,effect:Yt,requires:["computeStyles"]};function K(e){return e.split("-")[0]}var ie=Math.max,De=Math.min,ve=Math.round;function ke(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ot(){return!/^((?!chrome|android).)*safari/i.test(ke())}function he(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&q(e)&&(o=e.offsetWidth>0&&ve(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ve(n.height)/e.offsetHeight||1);var p=fe(e)?Y(e):window,s=p.visualViewport,i=!Ot()&&r,u=(n.left+(i&&s?s.offsetLeft:0))/o,f=(n.top+(i&&s?s.offsetTop:0))/a,d=n.width/o,E=n.height/a;return{width:d,height:E,top:f,right:u+d,bottom:f+E,left:u,x:u,y:f}}function Ue(e){var t=he(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function _t(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&qe(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(e){return Y(e).getComputedStyle(e)}function Ut(e){return["table","td","th"].indexOf(z(e))>=0}function re(e){return((fe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Se(e){return z(e)==="html"?e:e.assignedSlot||e.parentNode||(qe(e)?e.host:null)||re(e)}function rt(e){return!q(e)||J(e).position==="fixed"?null:e.offsetParent}function Ft(e){var t=/firefox/i.test(ke()),r=/Trident/i.test(ke());if(r&&q(e)){var n=J(e);if(n.position==="fixed")return null}var o=Se(e);for(qe(o)&&(o=o.host);q(o)&&["html","body"].indexOf(z(o))<0;){var a=J(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function xe(e){for(var t=Y(e),r=rt(e);r&&Ut(r)&&J(r).position==="static";)r=rt(r);return r&&(z(r)==="html"||z(r)==="body"&&J(r).position==="static")?t:r||Ft(e)||t}function Fe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Oe(e,t,r){return ie(e,De(t,r))}function Kt(e,t,r){var n=Oe(e,t,r);return n>r?r:n}function xt(){return{top:0,right:0,bottom:0,left:0}}function At(e){return Object.assign({},xt(),e)}function Tt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var zt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,At(typeof t!="number"?t:Tt(t,ye))};function Xt(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,s=K(r.placement),i=Fe(s),u=[j,I].indexOf(s)>=0,f=u?"height":"width";if(!(!a||!p)){var d=zt(o.padding,r),E=Ue(a),l=i==="y"?$:j,O=i==="y"?V:I,m=r.rects.reference[f]+r.rects.reference[i]-p[i]-r.rects.popper[f],g=p[i]-r.rects.reference[i],y=xe(a),_=y?i==="y"?y.clientHeight||0:y.clientWidth||0:0,A=m/2-g/2,v=d[l],w=_-E[f]-d[O],b=_/2-E[f]/2+A,x=Oe(v,b,w),D=i;r.modifiersData[n]=(t={},t[D]=x,t.centerOffset=x-b,t)}}function Gt(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!_t(t.elements.popper,o)||(t.elements.arrow=o))}const Pt={name:"arrow",enabled:!0,phase:"main",fn:Xt,effect:Gt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var Qt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Jt(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ve(t*o)/o||0,y:ve(r*o)/o||0}}function nt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,p=e.offsets,s=e.position,i=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,d=e.isFixed,E=p.x,l=E===void 0?0:E,O=p.y,m=O===void 0?0:O,g=typeof f=="function"?f({x:l,y:m}):{x:l,y:m};l=g.x,m=g.y;var y=p.hasOwnProperty("x"),_=p.hasOwnProperty("y"),A=j,v=$,w=window;if(u){var b=xe(r),x="clientHeight",D="clientWidth";if(b===Y(r)&&(b=re(r),J(b).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),b=b,o===$||(o===j||o===I)&&a===de){v=V;var P=d&&b===w&&w.visualViewport?w.visualViewport.height:b[x];m-=P-n.height,m*=i?1:-1}if(o===j||(o===$||o===V)&&a===de){A=I;var T=d&&b===w&&w.visualViewport?w.visualViewport.width:b[D];l-=T-n.width,l*=i?1:-1}}var N=Object.assign({position:s},u&&Qt),B=f===!0?Jt({x:l,y:m}):{x:l,y:m};if(l=B.x,m=B.y,i){var S;return Object.assign({},N,(S={},S[v]=_?"0":"",S[A]=y?"0":"",S.transform=(w.devicePixelRatio||1)<=1?"translate("+l+"px, "+m+"px)":"translate3d("+l+"px, "+m+"px, 0)",S))}return Object.assign({},N,(t={},t[v]=_?m+"px":"",t[A]=y?l+"px":"",t.transform="",t))}function Zt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,p=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,u={placement:K(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,nt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,nt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Zt,data:{}};var Pe={passive:!0};function er(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,p=n.resize,s=p===void 0?!0:p,i=Y(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(f){f.addEventListener("scroll",r.update,Pe)}),s&&i.addEventListener("resize",r.update,Pe),function(){a&&u.forEach(function(f){f.removeEventListener("scroll",r.update,Pe)}),s&&i.removeEventListener("resize",r.update,Pe)}}const ze={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:er,data:{}};var tr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ce(e){return e.replace(/left|right|bottom|top/g,function(t){return tr[t]})}var rr={start:"end",end:"start"};function ot(e){return e.replace(/start|end/g,function(t){return rr[t]})}function Xe(e){var t=Y(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ge(e){return he(re(e)).left+Xe(e).scrollLeft}function nr(e,t){var r=Y(e),n=re(e),o=r.visualViewport,a=n.clientWidth,p=n.clientHeight,s=0,i=0;if(o){a=o.width,p=o.height;var u=Ot();(u||!u&&t==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:p,x:s+Ge(e),y:i}}function or(e){var t,r=re(e),n=Xe(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=ie(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=ie(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Ge(e),i=-n.scrollTop;return J(o||r).direction==="rtl"&&(s+=ie(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:p,x:s,y:i}}function Qe(e){var t=J(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Ct(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:q(e)&&Qe(e)?e:Ct(Se(e))}function _e(e,t){var r;t===void 0&&(t=[]);var n=Ct(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=Y(n),p=o?[a].concat(a.visualViewport||[],Qe(n)?n:[]):n,s=t.concat(p);return o?s:s.concat(_e(Se(p)))}function He(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ar(e,t){var r=he(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function at(e,t,r){return t===Ve?He(nr(e,r)):fe(t)?ar(t,r):He(or(re(e)))}function ir(e){var t=_e(Se(e)),r=["absolute","fixed"].indexOf(J(e).position)>=0,n=r&&q(e)?xe(e):e;return fe(n)?t.filter(function(o){return fe(o)&&_t(o,n)&&z(o)!=="body"}):[]}function sr(e,t,r,n){var o=t==="clippingParents"?ir(e):[].concat(t),a=[].concat(o,[r]),p=a[0],s=a.reduce(function(i,u){var f=at(e,u,n);return i.top=ie(f.top,i.top),i.right=De(f.right,i.right),i.bottom=De(f.bottom,i.bottom),i.left=ie(f.left,i.left),i},at(e,p,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Dt(e){var t=e.reference,r=e.element,n=e.placement,o=n?K(n):null,a=n?me(n):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(o){case $:i={x:p,y:t.y-r.height};break;case V:i={x:p,y:t.y+t.height};break;case I:i={x:t.x+t.width,y:s};break;case j:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var u=o?Fe(o):null;if(u!=null){var f=u==="y"?"height":"width";switch(a){case se:i[u]=i[u]-(t[f]/2-r[f]/2);break;case de:i[u]=i[u]+(t[f]/2-r[f]/2);break}}return i}function ge(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,p=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?pt:s,u=r.rootBoundary,f=u===void 0?Ve:u,d=r.elementContext,E=d===void 0?le:d,l=r.altBoundary,O=l===void 0?!1:l,m=r.padding,g=m===void 0?0:m,y=At(typeof g!="number"?g:Tt(g,ye)),_=E===le?ut:le,A=e.rects.popper,v=e.elements[O?_:E],w=sr(fe(v)?v:v.contextElement||re(e.elements.popper),i,f,p),b=he(e.elements.reference),x=Dt({reference:b,element:A,strategy:"absolute",placement:o}),D=He(Object.assign({},A,x)),P=E===le?D:b,T={top:w.top-P.top+y.top,bottom:P.bottom-w.bottom+y.bottom,left:w.left-P.left+y.left,right:P.right-w.right+y.right},N=e.modifiersData.offset;if(E===le&&N){var B=N[o];Object.keys(T).forEach(function(S){var X=[I,V].indexOf(S)>=0?1:-1,k=[$,V].indexOf(S)>=0?"y":"x";T[S]+=B[k]*X})}return T}function fr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,p=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,u=i===void 0?Ie:i,f=me(n),d=f?s?Be:Be.filter(function(O){return me(O)===f}):ye,E=d.filter(function(O){return u.indexOf(O)>=0});E.length===0&&(E=d);var l=E.reduce(function(O,m){return O[m]=ge(e,{placement:m,boundary:o,rootBoundary:a,padding:p})[K(m)],O},{});return Object.keys(l).sort(function(O,m){return l[O]-l[m]})}function cr(e){if(K(e)===Ne)return[];var t=Ce(e);return[ot(e),t,ot(t)]}function pr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,p=r.altAxis,s=p===void 0?!0:p,i=r.fallbackPlacements,u=r.padding,f=r.boundary,d=r.rootBoundary,E=r.altBoundary,l=r.flipVariations,O=l===void 0?!0:l,m=r.allowedAutoPlacements,g=t.options.placement,y=K(g),_=y===g,A=i||(_||!O?[Ce(g)]:cr(g)),v=[g].concat(A).reduce(function(ee,F){return ee.concat(K(F)===Ne?fr(t,{placement:F,boundary:f,rootBoundary:d,padding:u,flipVariations:O,allowedAutoPlacements:m}):F)},[]),w=t.rects.reference,b=t.rects.popper,x=new Map,D=!0,P=v[0],T=0;T<v.length;T++){var N=v[T],B=K(N),S=me(N)===se,X=[$,V].indexOf(B)>=0,k=X?"width":"height",M=ge(t,{placement:N,boundary:f,rootBoundary:d,altBoundary:E,padding:u}),W=X?S?I:j:S?V:$;w[k]>b[k]&&(W=Ce(W));var ce=Ce(W),G=[];if(a&&G.push(M[B]<=0),s&&G.push(M[W]<=0,M[ce]<=0),G.every(function(ee){return ee})){P=N,D=!1;break}x.set(N,G)}if(D)for(var pe=O?3:1,Z=function(F){var ae=v.find(function(ue){var Q=x.get(ue);if(Q)return Q.slice(0,F).every(function(be){return be})});if(ae)return P=ae,"break"},ne=pe;ne>0;ne--){var oe=Z(ne);if(oe==="break")break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}}const Nt={name:"flip",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"],data:{_skip:!1}};function it(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function st(e){return[$,I,V,j].some(function(t){return e[t]>=0})}function ur(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,p=ge(t,{elementContext:"reference"}),s=ge(t,{altBoundary:!0}),i=it(p,n),u=it(s,o,a),f=st(i),d=st(u);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}const St={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ur};function lr(e,t,r){var n=K(e),o=[j,$].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=a[0],s=a[1];return p=p||0,s=(s||0)*o,[j,I].indexOf(n)>=0?{x:s,y:p}:{x:p,y:s}}function dr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,p=Ie.reduce(function(f,d){return f[d]=lr(d,t.rects,a),f},{}),s=p[t.placement],i=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=p}const Rt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:dr};function vr(e){var t=e.state,r=e.name;t.modifiersData[r]=Dt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Je={name:"popperOffsets",enabled:!0,phase:"read",fn:vr,data:{}};function hr(e){return e==="x"?"y":"x"}function mr(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,p=r.altAxis,s=p===void 0?!1:p,i=r.boundary,u=r.rootBoundary,f=r.altBoundary,d=r.padding,E=r.tether,l=E===void 0?!0:E,O=r.tetherOffset,m=O===void 0?0:O,g=ge(t,{boundary:i,rootBoundary:u,padding:d,altBoundary:f}),y=K(t.placement),_=me(t.placement),A=!_,v=Fe(y),w=hr(v),b=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,P=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,T=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(!!b){if(a){var S,X=v==="y"?$:j,k=v==="y"?V:I,M=v==="y"?"height":"width",W=b[v],ce=W+g[X],G=W-g[k],pe=l?-D[M]/2:0,Z=_===se?x[M]:D[M],ne=_===se?-D[M]:-x[M],oe=t.elements.arrow,ee=l&&oe?Ue(oe):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:xt(),ae=F[X],ue=F[k],Q=Oe(0,x[M],ee[M]),be=A?x[M]/2-pe-Q-ae-T.mainAxis:Z-Q-ae-T.mainAxis,Le=A?-x[M]/2+pe+Q+ue+T.mainAxis:ne+Q+ue+T.mainAxis,we=t.elements.arrow&&xe(t.elements.arrow),Me=we?v==="y"?we.clientTop||0:we.clientLeft||0:0,Ae=(S=N==null?void 0:N[v])!=null?S:0,$e=W+be-Ae-Me,je=W+Le-Ae,Te=Oe(l?De(ce,$e):ce,W,l?ie(G,je):G);b[v]=Te,B[v]=Te-W}if(s){var H,R=v==="x"?$:j,c=v==="x"?V:I,h=b[w],C=w==="y"?"height":"width",L=h+g[R],te=h-g[c],U=[$,j].indexOf(y)!==-1,Ee=(H=N==null?void 0:N[w])!=null?H:0,Ze=U?L:h-x[C]-D[C]-Ee+T.altAxis,et=U?h+x[C]+D[C]-Ee-T.altAxis:te,tt=l&&U?Kt(Ze,h,et):Oe(l?Ze:L,h,l?et:te);b[w]=tt,B[w]=tt-h}t.modifiersData[n]=B}}const Lt={name:"preventOverflow",enabled:!0,phase:"main",fn:mr,requiresIfExists:["offset"]};function gr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function yr(e){return e===Y(e)||!q(e)?Xe(e):gr(e)}function br(e){var t=e.getBoundingClientRect(),r=ve(t.width)/e.offsetWidth||1,n=ve(t.height)/e.offsetHeight||1;return r!==1||n!==1}function wr(e,t,r){r===void 0&&(r=!1);var n=q(t),o=q(t)&&br(t),a=re(t),p=he(e,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((z(t)!=="body"||Qe(a))&&(s=yr(t)),q(t)?(i=he(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=Ge(a))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function Er(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&o(i)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Or(e){var t=Er(e);return Et.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function _r(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function xr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function ct(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Re(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ft:o;return function(s,i,u){u===void 0&&(u=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},d=[],E=!1,l={state:f,setOptions:function(y){var _=typeof y=="function"?y(f.options):y;m(),f.options=Object.assign({},a,f.options,_),f.scrollParents={reference:fe(s)?_e(s):s.contextElement?_e(s.contextElement):[],popper:_e(i)};var A=Or(xr([].concat(n,f.options.modifiers)));return f.orderedModifiers=A.filter(function(v){return v.enabled}),O(),l.update()},forceUpdate:function(){if(!E){var y=f.elements,_=y.reference,A=y.popper;if(!!ct(_,A)){f.rects={reference:wr(_,xe(A),f.options.strategy==="fixed"),popper:Ue(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(T){return f.modifiersData[T.name]=Object.assign({},T.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var w=f.orderedModifiers[v],b=w.fn,x=w.options,D=x===void 0?{}:x,P=w.name;typeof b=="function"&&(f=b({state:f,options:D,name:P,instance:l})||f)}}}},update:_r(function(){return new Promise(function(g){l.forceUpdate(),g(f)})}),destroy:function(){m(),E=!0}};if(!ct(s,i))return l;l.setOptions(u).then(function(g){!E&&u.onFirstUpdate&&u.onFirstUpdate(g)});function O(){f.orderedModifiers.forEach(function(g){var y=g.name,_=g.options,A=_===void 0?{}:_,v=g.effect;if(typeof v=="function"){var w=v({state:f,name:y,instance:l,options:A}),b=function(){};d.push(w||b)}})}function m(){d.forEach(function(g){return g()}),d=[]}return l}}var Ar=Re(),Tr=[ze,Je,Ke,Ye],Pr=Re({defaultModifiers:Tr}),Cr=[ze,Je,Ke,Ye,Rt,Nt,Lt,Pt,St],Dr=Re({defaultModifiers:Cr});const Nr=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Re,detectOverflow:ge,createPopperBase:Ar,createPopper:Dr,createPopperLite:Pr,top:$,bottom:V,right:I,left:j,auto:Ne,basePlacements:ye,start:se,end:de,clippingParents:pt,viewport:Ve,popper:le,reference:ut,variationPlacements:Be,placements:Ie,beforeRead:lt,read:dt,afterRead:vt,beforeMain:ht,main:mt,afterMain:gt,beforeWrite:yt,write:bt,afterWrite:wt,modifierPhases:Et,applyStyles:Ye,arrow:Pt,computeStyles:Ke,eventListeners:ze,flip:Nt,hide:St,offset:Rt,popperOffsets:Je,preventOverflow:Lt},Symbol.toStringTag,{value:"Module"})),Sr=Mt(Nr);/*!
  * Bootstrap dropdown.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,t){(function(r,n){e.exports=n(Sr,Bt(),kt(),Ht(),Wt(),Vt())})(jt,function(r,n,o,a,p,s){const i=R=>R&&typeof R=="object"&&"default"in R?R:{default:R};function u(R){if(R&&R.__esModule)return R;const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(R){for(const h in R)if(h!=="default"){const C=Object.getOwnPropertyDescriptor(R,h);Object.defineProperty(c,h,C.get?C:{enumerable:!0,get:()=>R[h]})}}return c.default=R,Object.freeze(c)}const f=u(r),d=i(o),E=i(a),l=i(p),O=i(s),m="dropdown",y=".bs.dropdown",_=".data-api",A="Escape",v="Tab",w="ArrowUp",b="ArrowDown",x=2,D=`hide${y}`,P=`hidden${y}`,T=`show${y}`,N=`shown${y}`,B=`click${y}${_}`,S=`keydown${y}${_}`,X=`keyup${y}${_}`,k="show",M="dropup",W="dropend",ce="dropstart",G="dropup-center",pe="dropdown-center",Z='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ne=`${Z}.${k}`,oe=".dropdown-menu",ee=".navbar",F=".navbar-nav",ae=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ue=n.isRTL()?"top-end":"top-start",Q=n.isRTL()?"top-start":"top-end",be=n.isRTL()?"bottom-end":"bottom-start",Le=n.isRTL()?"bottom-start":"bottom-end",we=n.isRTL()?"left-start":"right-start",Me=n.isRTL()?"right-start":"left-start",Ae="top",$e="bottom",je={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Te={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class H extends O.default{constructor(c,h){super(c,h),this._popper=null,this._parent=this._element.parentNode,this._menu=l.default.findOne(oe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return je}static get DefaultType(){return Te}static get NAME(){return m}toggle(){return this._isShown()?this.hide():this.show()}show(){if(n.isDisabled(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!d.default.trigger(this._element,T,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(F))for(const C of[].concat(...document.body.children))d.default.on(C,"mouseover",n.noop);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(k),this._element.classList.add(k),d.default.trigger(this._element,N,c)}}hide(){if(n.isDisabled(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!d.default.trigger(this._element,D,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))d.default.off(C,"mouseover",n.noop);this._popper&&this._popper.destroy(),this._menu.classList.remove(k),this._element.classList.remove(k),this._element.setAttribute("aria-expanded","false"),E.default.removeDataAttribute(this._menu,"popper"),d.default.trigger(this._element,P,c)}}_getConfig(c){if(c=super._getConfig(c),typeof c.reference=="object"&&!n.isElement(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${m.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(typeof f>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:n.isElement(this._config.reference)?c=n.getElement(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const h=this._getPopperConfig();this._popper=f.createPopper(c,this._menu,h)}_isShown(){return this._menu.classList.contains(k)}_getPlacement(){const c=this._parent;if(c.classList.contains(W))return we;if(c.classList.contains(ce))return Me;if(c.classList.contains(G))return Ae;if(c.classList.contains(pe))return $e;const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains(M)?h?Q:ue:h?Le:be}_detectNavbar(){return this._element.closest(ee)!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(h=>Number.parseInt(h,10)):typeof c=="function"?h=>c(h,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(E.default.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...typeof this._config.popperConfig=="function"?this._config.popperConfig(c):this._config.popperConfig}}_selectMenuItem({key:c,target:h}){const C=l.default.find(ae,this._menu).filter(L=>n.isVisible(L));!C.length||n.getNextActiveElement(C,h,c===b,!C.includes(h)).focus()}static jQueryInterface(c){return this.each(function(){const h=H.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof h[c]>"u")throw new TypeError(`No method named "${c}"`);h[c]()}})}static clearMenus(c){if(c.button===x||c.type==="keyup"&&c.key!==v)return;const h=l.default.find(ne);for(const C of h){const L=H.getInstance(C);if(!L||L._config.autoClose===!1)continue;const te=c.composedPath(),U=te.includes(L._menu);if(te.includes(L._element)||L._config.autoClose==="inside"&&!U||L._config.autoClose==="outside"&&U||L._menu.contains(c.target)&&(c.type==="keyup"&&c.key===v||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const Ee={relatedTarget:L._element};c.type==="click"&&(Ee.clickEvent=c),L._completeHide(Ee)}}static dataApiKeydownHandler(c){const h=/input|textarea/i.test(c.target.tagName),C=c.key===A,L=[w,b].includes(c.key);if(!L&&!C||h&&!C)return;c.preventDefault();const te=l.default.findOne(Z,c.delegateTarget.parentNode),U=H.getOrCreateInstance(te);if(L){c.stopPropagation(),U.show(),U._selectMenuItem(c);return}U._isShown()&&(c.stopPropagation(),U.hide(),te.focus())}}return d.default.on(document,S,Z,H.dataApiKeydownHandler),d.default.on(document,S,oe,H.dataApiKeydownHandler),d.default.on(document,B,H.clearMenus),d.default.on(document,X,H.clearMenus),d.default.on(document,B,Z,function(R){R.preventDefault(),H.getOrCreateInstance(this).toggle()}),n.defineJQueryPlugin(H),H})})(We);const Rr=$t(We.exports),$r=It({__proto__:null,default:Rr},[We.exports]);export{$r as d};

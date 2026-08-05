import{_ as e,t,v as n}from"./index-OxKSAT33.js";var r=`-ms-`,i=`-moz-`,a=`-webkit-`,o=`comm`,s=`rule`,c=`decl`,l=`@import`,u=`@namespace`,d=`@keyframes`,f=`@layer`,p=Math.abs,m=String.fromCharCode,h=Object.assign;function g(e,t){return x(e,0)^45?(((t<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}function _(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function x(e,t){return e.charCodeAt(t)|0}function S(e,t,n){return e.slice(t,n)}function C(e){return e.length}function w(e){return e.length}function T(e,t){return t.push(e),e}function E(e,t){return e.map(t).join(``)}function D(e,t){return e.filter(function(e){return!v(e,t)})}var O=1,k=1,A=0,j=0,M=0,N=``;function ee(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:O,column:k,length:o,return:``,siblings:s}}function P(e,t){return h(ee(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=P(e.root,{children:[e]});T(e,e.siblings)}function te(){return M}function ne(){return M=j>0?x(N,--j):0,k--,M===10&&(k=1,O--),M}function I(){return M=j<A?x(N,j++):0,k++,M===10&&(k=1,O++),M}function L(){return x(N,j)}function re(){return j}function ie(e,t){return S(N,e,t)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ae(e){return O=k=1,A=C(N=e),j=0,[]}function oe(e){return N=``,e}function se(e){return _(ie(j-1,ue(e===91?e+2:e===40?e+1:e)))}function ce(e){for(;(M=L())&&M<33;)I();return R(e)>2||R(M)>3?``:` `}function le(e,t){for(;--t&&I()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return ie(e,re()+(t<6&&L()==32&&I()==32))}function ue(e){for(;I();)switch(M){case e:return j;case 34:case 39:e!==34&&e!==39&&ue(M);break;case 40:e===41&&ue(e);break;case 92:I();break}return j}function de(e,t){for(;I()&&e+M!==57&&!(e+M===84&&L()===47););return`/*`+ie(t,j-1)+`*`+m(e===47?e:I())}function fe(e){for(;!R(L());)I();return ie(e,j)}function pe(e){return oe(me(``,null,null,null,[``],e=ae(e),0,[0],e))}function me(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,h=0,g=0,_=1,v=1,w=1,E=0,D=``,O=i,k=a,A=r,j=D;v;)switch(g=E,E=I()){case 40:if(g!=108&&x(j,d-1)==58){b(j+=y(se(E),`&`,`&\f`),`&\f`,p(l?s[l-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:j+=se(E);break;case 9:case 10:case 13:case 32:j+=ce(g);break;case 92:j+=le(re()-1,7);continue;case 47:switch(L()){case 42:case 47:T(ge(de(I(),re()),t,n,c),c),(R(g||1)==5||R(L()||1)==5)&&C(j)&&S(j,-1,void 0)!==` `&&(j+=` `);break;default:j+=`/`}break;case 123*_:s[l++]=C(j)*w;case 125*_:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:w==-1&&(j=y(j,/\f/g,``)),h>0&&(C(j)-d||_===0&&g===47)&&T(h>32?_e(j+`;`,r,n,d-1,c):_e(y(j,` `,``)+`;`,r,n,d-2,c),c);break;case 59:j+=`;`;default:if(T(A=he(j,t,n,l,u,i,s,D,O=[],k=[],d,a),a),E===123)if(u===0)me(j,t,A,A,O,a,d,s,k);else{switch(f){case 99:if(x(j,3)===110)break;case 108:if(x(j,2)===97)break;default:u=0;case 100:case 109:case 115:}u?me(e,A,A,r&&T(he(e,A,A,0,0,i,s,D,i,O=[],d,k),k),i,k,d,s,r?O:k):me(j,A,A,A,[``],k,0,s,k)}}l=u=h=0,_=w=1,D=j=``,d=o;break;case 58:d=1+C(j),h=g;default:if(_<1){if(E==123)--_;else if(E==125&&_++==0&&ne()==125)continue}switch(j+=m(E),E*_){case 38:w=u>0?1:(j+=`\f`,-1);break;case 44:s[l++]=(C(j)-1)*w,w=1;break;case 64:L()===45&&(j+=se(I())),f=L(),u=d=C(D=j+=fe(re())),E++;break;case 45:g===45&&C(j)==2&&(_=0)}}return a}function he(e,t,n,r,i,a,o,c,l,u,d,f){for(var m=i-1,h=i===0?a:[``],g=w(h),v=0,b=0,x=0;v<r;++v)for(var C=0,T=S(e,m+1,m=p(b=o[v])),E=e;C<g;++C)(E=_(b>0?h[C]+` `+T:y(T,/&\f/g,h[C])))&&(l[x++]=E);return ee(e,t,n,i===0?s:c,l,u,d,f)}function ge(e,t,n,r){return ee(e,t,n,o,m(te()),S(e,2,-2),0,r)}function _e(e,t,n,r,i){return ee(e,t,n,c,S(e,0,r),S(e,r+1,-1),r,i)}function ve(e,t,n){switch(g(e,t)){case 5103:return a+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return a+e+e;case 4855:return a+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return a+e+i+e+r+e+e;case 5936:switch(x(e,t+11)){case 114:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return a+e+r+y(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return a+e+r+e+e;case 6165:return a+e+r+`flex-`+e+e;case 5187:return a+e+y(e,/(\w+).+(:[^]+)/,a+`box-$1$2`+r+`flex-$1$2`)+e;case 5443:return a+e+r+`flex-item-`+y(e,/flex-|-self/g,``)+(v(e,/flex-|baseline/)?``:r+`grid-row-`+y(e,/flex-|-self/g,``))+e;case 4675:return a+e+r+`flex-line-pack`+y(e,/align-content|flex-|-self/g,``)+e;case 5548:return a+e+r+y(e,`shrink`,`negative`)+e;case 5292:return a+e+r+y(e,`basis`,`preferred-size`)+e;case 6060:return a+`box-`+y(e,`-grow`,``)+a+e+r+y(e,`grow`,`positive`)+e;case 4554:return a+y(e,/([^-])(transform)/g,`$1`+a+`$2`)+e;case 6187:return y(y(y(e,/(zoom-|grab)/,a+`$1`),/(image-set)/,a+`$1`),e,``)+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,a+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,a+`box-pack:$3`+r+`flex-pack:$3`),/space-between/,`justify`)+a+e+e;case 4200:if(!v(e,/flex-|baseline/))return r+`grid-column-align`+S(e,t)+e;break;case 2592:case 3360:return r+y(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,v(e.props,/grid-\w+-end/)})?~b(e+(n=n[t].value),`span`,0)?e:r+y(e,`-start`,``)+e+r+`grid-row-span:`+(~b(n,`span`,0)?v(n,/\d+/):v(n,/\d+/)-+v(e,/\d+/))+`;`:r+y(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return v(e.props,/grid-\w+-start/)})?e:r+y(y(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,a+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(e)-1-t>6)switch(x(e,t+1)){case 109:if(x(e,t+4)!==45)break;case 102:return y(e,/(.+:)(.+)-([^]+)/,`$1`+a+`$2-$3$1`+i+(x(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~b(e,`stretch`,0)?ve(y(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,i,a,o,s,c){return r+n+`:`+i+c+(a?r+n+`-span:`+(o?s:s-+i)+c:``)+e});case 4949:if(x(e,t+6)===121)return y(e,`:`,`:`+a)+e;break;case 6444:switch(x(e,x(e,14)===45?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+a+(x(e,14)===45?`inline-`:``)+`box$3$1`+a+`$2$3$1`+r+`$2box$3`)+e;case 100:return y(e,`:`,`:`+r)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,`scroll-`,`scroll-snap-`)+e}return e}function ye(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function be(e,t,n,r){switch(e.type){case f:if(e.children.length)break;case l:case u:case c:return e.return=e.return||e.value;case o:return``;case d:return e.return=e.value+`{`+ye(e.children,r)+`}`;case s:if(!C(e.value=e.props.join(`,`)))return``}return C(n=ye(e.children,r))?e.return=e.value+`{`+n+`}`:``}function xe(e){var t=w(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Se(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ce(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case c:e.return=ve(e.value,e.length,n);return;case d:return ye([P(e,{value:y(e.value,`@`,`@`+a)})],o);case s:if(e.length)return E(n=e.props,function(t){switch(v(t,o=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:F(P(e,{props:[y(t,/:(read-\w+)/,`:`+i+`$1`)]})),F(P(e,{props:[t]})),h(e,{props:D(n,o)});break;case`::placeholder`:F(P(e,{props:[y(t,/:(plac\w+)/,`:`+a+`input-$1`)]})),F(P(e,{props:[y(t,/:(plac\w+)/,`:`+i+`$1`)]})),F(P(e,{props:[y(t,/:(plac\w+)/,r+`input-$1`)]})),F(P(e,{props:[t]})),h(e,{props:D(n,o)});break}return``})}}var z=n(e()),B=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,we=`active`,Te=`data-styled-version`,V=`6.4.4`,Ee=`/*!sc*/
`,H=typeof window<`u`&&typeof document<`u`;function De(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Oe=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:De(`REACT_APP_SC_DISABLE_SPEEDY`)??De(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),ke=`sc-keyframes-`;function U(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var W=new Map,Ae=new Map,je=1,Me=e=>{if(W.has(e))return W.get(e);for(;Ae.has(je);)je++;let t=je++;return W.set(e,t),Ae.set(t,e),t},Ne=e=>Ae.get(e),Pe=(e,t)=>{je=t+1,W.set(e,t),Ae.set(t,e)},Fe=Object.freeze([]),G=Object.freeze({});function Ie(e,t,n=G){return e.theme!==n.theme&&e.theme||t||n.theme}var Le=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function ze(e){return e.replace(Le,`-`).replace(Re,``)}var Be=/(a)(d)/gi,Ve=e=>String.fromCharCode(e+(e>25?39:97));function He(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Ve(t%52)+n;return(Ve(t%52)+n).replace(Be,`$1-$2`)}var Ue=5381,K=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},We=e=>K(Ue,e);function Ge(e){return He(We(e)>>>0)}function Ke(e){return e.displayName||e.name||`Component`}function qe(e){return typeof e==`string`&&!0}function Je(e){return qe(e)?`styled.${e}`:`Styled(${Ke(e)})`}var Ye=Symbol.for(`react.memo`),Xe=Symbol.for(`react.forward_ref`),Ze={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Qe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},et={[Xe]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ye]:$e};function tt(e){return(`type`in(t=e)&&t.type.$$typeof)===Ye?$e:`$$typeof`in e?et[e.$$typeof]:Ze;var t}var nt=Object.defineProperty,rt=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,at=Object.getOwnPropertyDescriptor,ot=Object.getPrototypeOf,st=Object.prototype;function ct(e,t,n){if(typeof t!=`string`){let r=ot(t);r&&r!==st&&ct(e,r,n);let i=rt(t).concat(it(t)),a=tt(e),o=tt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Qe||n&&n[s]||o&&s in o||a&&s in a)){let n=at(t,s);try{nt(e,s,n)}catch{}}}}return e}function lt(e){return typeof e==`function`}var ut=Symbol.for(`react.forward_ref`);function dt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===ut&&`styledComponentId`in e}function q(e,t){return e&&t?e+` `+t:e||t||``}function ft(e,t){return e.join(t||``)}function J(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function pt(e,t,n=!1){if(!n&&!J(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=pt(e[n],t[n]);else if(J(t))for(let n in t)e[n]=pt(e[n],t[n]);return e}function mt(e,t){Object.defineProperty(e,"toString",{value:t})}var ht=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw U(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ee;return t}},gt=`style[${B}][${Te}="${V}"]`,_t=RegExp(`^${B}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),vt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,yt=e=>{if(!e)return document;if(vt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(vt(t))return t}return document},bt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},xt=(e,t)=>{let n=(t.textContent??``).split(Ee),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(_t);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Pe(n,t),bt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},St=e=>{let t=yt(e.options.target).querySelectorAll(gt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(B)!==we&&(xt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Y=!1;function Ct(){if(!1!==Y)return Y;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Y=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Y=t.getAttribute(`content`)||void 0}return Y=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var wt=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${B}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(B,we),i.setAttribute(Te,V);let s=t||Ct();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Tt=class{constructor(e,t){this.element=wt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw U(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Et=class{constructor(e,t){this.element=wt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Dt=H,Ot={isServer:!H,useCSSOMInjection:!Oe},kt=class e{static registerId(e){return Me(e)}constructor(e=G,t={},n){this.options=Object.assign(Object.assign({},Ot),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&H&&Dt&&(Dt=!1,St(this)),mt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ne(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=B+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&H&&St(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&H&&t.target!==this.options.target&&yt(this.options.target)!==yt(t.target)&&St(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Tt(t,n):new Et(t,n))(this.options),new ht(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Me(e),e.startsWith(ke)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Me(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Me(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},At=new WeakSet,jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in jt||e.startsWith(`--`)?String(t).trim():t+`px`}var X=47;function Nt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Pt=Symbol.for(`sc-keyframes`);function Ft(e){return typeof e==`object`&&!!e&&Pt in e}function It(e){return lt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Lt=e=>e==null||!1===e||e===``,Rt=Symbol.for(`react.client.reference`);function zt(e){return e.$$typeof===Rt}function Bt(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Lt(r)&&(Array.isArray(r)&&At.has(r)||lt(r)?t.push(Nt(n)+`:`,r,`;`):J(r)?(t.push(n+` {`),Bt(r,t),t.push(`}`)):t.push(Nt(n)+`: `+Mt(n,r)+`;`))}}function Z(e,t,n,r,i=[]){if(Lt(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return zt(e)?i:It(e)&&t?Z(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)Z(e[a],t,n,r,i);return i}return dt(e)?(i.push(`.${e.styledComponentId}`),i):Ft(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):zt(e)?i:J(e)&&e.toString===Object.prototype.toString?(Bt(e,i),i):(i.push(e.toString()),i)}var Vt=We(V),Ht=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=K(Vt,t),this.baseStyle=n,kt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(It(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=ft(Z(r,e,t,n)))}else i+=ft(Z(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=He(K(K(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=q(r,a)}}return r}},Ut=/&/g;function Wt(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Gt(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==X||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===X&&(o=!1,c++);else if(l!==34&&l!==39||Wt(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Kt(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Kt(a.children,t)}return e}function qt({options:e=G,plugins:t=Fe}=G){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Ut,r).replace(i,a))}),e.prefix&&o.push(Ce),o.push(be);let s=[],c=xe(o.concat(Se(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Gt(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Wt(e,o))if(s===0)if(t===X&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==X);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===X)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===X&&o+1<r&&e.charCodeAt(o+1)===X){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Gt(i)):l===0?e:Gt(e)}(t),d=pe(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Kt(d,e.namespace)),s=[],ye(d,c),s},u=e,d=Ue;for(let e=0;e<t.length;e++)t[e].name||U(15),d=K(d,t[e].name);return u!=null&&u.namespace&&(d=K(d,u.namespace)),u!=null&&u.prefix&&(d=K(d,`p`)),l.hash=d===Ue?``:d.toString(),l}var Jt=new kt,Yt=qt(),Xt=z.createContext({shouldForwardProp:void 0,styleSheet:Jt,stylis:Yt,stylisPlugins:void 0});Xt.Consumer;function Zt(){return z.useContext(Xt)}var Qt=z.createContext(void 0);Qt.Consumer;var $t=Object.prototype.hasOwnProperty,en={};function tn(e,t){let n=typeof e==`string`?ze(e):`sc`;en[n]=(en[n]||0)+1;let r=n+`-`+Ge(V+n+en[n]);return t?t+`-`+r:r}function nn(e,t,n){let r=dt(e),i=e,a=!qe(e),{attrs:o=Fe,componentId:s=tn(t.displayName,t.parentComponentId),displayName:c=Je(e)}=t,l=t.displayName&&t.componentId?ze(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Ht(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=z.useContext(Qt),u=Zt(),d=e.shouldForwardProp||u.shouldForwardProp,f=Ie(t,l,a)||G,p,m;{let e=z.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if($t.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=lt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=q(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=q(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)$t.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=q(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[qe(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,z.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=z.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?q(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)pt(e,n,!0);return e}({},i.defaultProps,e):e}}),mt(m,()=>`.${m.styledComponentId}`),a&&ct(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var rn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function an(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var on=e=>(At.add(e),e);function sn(e,...t){if(lt(e)||J(e))return on(Z(an(Fe,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?Z(n):on(Z(an(n,t)))}function cn(e,t,n=G){if(!t)throw U(1,t);let r=(r,...i)=>e(t,n,sn(r,...i));return r.attrs=r=>cn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>cn(e,t,Object.assign(Object.assign({},n),r)),r}var ln=e=>cn(nn,e),Q=ln;rn.forEach(e=>{Q[e]=ln(e)}),`${B}`,`${B}`,`${B}`;var $=t(),un=Q.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 0;

  @media (min-width: 768px) {
    padding: 16px 0;
  }
`,dn=Q.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* Відступ 16px на мобільці (320px) */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 32px; /* Відступ на планшетах */
  }

  @media (min-width: 1200px) {
    padding: 0 33px; /* Твій відступ 33px для ПК */
  }
`,fn=Q.a`
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    opacity: 0.9;
  }
`,pn=Q.span`
  position: relative;
  font-family: "Roboto", "Montserrat Alternates", sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.5px;
  padding-left: 12px;
  display: inline-block;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -4px;
    width: 48px;
    height: 36px;
    background-color: #fde5d4;
    border-radius: 12px;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 4px;
    width: 48px;
    height: 36px;
    background-color: #ff751d;
    border-radius: 12px;
    z-index: -1;
  }

  /* Адаптив лого для планшетів та десктопів */
  @media (min-width: 768px) {
    font-size: 28px;
    padding-left: 18px;
    letter-spacing: 1px;

    &::before {
      top: -10px;
      left: -4px;
      width: 62px;
      height: 46px;
      border-radius: 16px;
    }

    &::after {
      top: -2px;
      left: 6px;
      width: 62px;
      height: 46px;
      border-radius: 16px;
    }
  }
`,mn=Q.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,hn=Q.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f4f6;
  color: #52555f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`,gn=Q.span`
  display: none; /* За замовчуванням ховаємо на мобілці */

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    position: relative;
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #52555f;
    padding-right: 16px;

    /* Вертикальна паличка після імені */
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 20px;
      border-radius: 10px;
      background-color: #e5e7eb;
    }
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`,_n=Q.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #52555f;

  /* На мобільці показуємо тільки іконку двері зі стрілкою */
  .logout-text {
    display: none;
  }
  .logout-icon {
    display: block;
    width: 18px;
    height: 18px;
  }

  /* На планшетах і десктопах ховаємо іконку, показуємо текст "Вийти" */
  @media (min-width: 768px) {
    .logout-text {
      display: inline;
      text-decoration: underline;
      font-weight: 400;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 14px;
      color: #52555f;
    }
    .logout-icon {
      display: none;
    }
  }
`,vn=()=>(0,$.jsxs)(`svg`,{className:`logout-icon`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,$.jsx)(`path`,{d:`M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6`,stroke:`#9C9EAE`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,$.jsx)(`path`,{d:`M10.6665 11.3333L13.9998 8.00001L10.6665 4.66667`,stroke:`#9C9EAE`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,$.jsx)(`path`,{d:`M14 8H6`,stroke:`#9C9EAE`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),yn=({userName:e,onLogout:t})=>{let n=e&&e.trim()?e.trim()[0].toUpperCase():``;return(0,$.jsx)(un,{children:(0,$.jsxs)(dn,{children:[(0,$.jsx)(fn,{href:`/`,children:(0,$.jsx)(pn,{children:`INVESTIQ`})}),e&&(0,$.jsxs)(mn,{children:[(0,$.jsx)(hn,{children:n}),(0,$.jsx)(gn,{children:e}),(0,$.jsxs)(_n,{onClick:t,title:`Вийти`,children:[(0,$.jsx)(`span`,{className:`logout-text`,children:`Вийти`}),(0,$.jsx)(vn,{})]})]})]})})};export{Q as n,yn as t};
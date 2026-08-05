import{_ as e,c as t,d as n,g as r,n as i,r as a,t as o,u as s,v as c}from"./index-OxKSAT33.js";import{n as l,t as u}from"./Header-BgpSbniM.js";var d=c(e(),1),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=d.createContext&&d.createContext(f),m=[`attr`,`size`,`title`];function h(e,t){if(e==null)return{};var n,r,i=g(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(null,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?v(Object(n),!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=S(e,`string`);return typeof t==`symbol`?t:t+``}function S(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function C(e){return e&&e.map((e,t)=>d.createElement(e.tag,y({key:t},e.attr),C(e.child)))}function w(e){return t=>d.createElement(T,_({attr:y({},e.attr)},t),C(e.child))}function T(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=h(e,m),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),d.createElement(`svg`,_({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:y(y({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&d.createElement(`title`,null,i),e.children)};return p===void 0?t(f):d.createElement(p.Consumer,null,e=>t(e))}function E(e){return w({tag:`svg`,attr:{version:`1.1`,x:`0px`,y:`0px`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#FFC107`,d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:`path`,attr:{fill:`#FF3D00`,d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:`path`,attr:{fill:`#4CAF50`,d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:`path`,attr:{fill:`#1976D2`,d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}var D=o(),O=l.div`
  display: flex;
  justify-content: center;
  background-color: #f7f9fc;
  padding: 40px 0;
`,k=l.div`
  display: flex;
  width: 100%;
  max-width: 80%;
  @media (max-width: 868px) {
    flex-direction: column;
  }
`,A=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,j=l.h1`
  font-size: 102px;
  margin: 0;
`,M=l.h2`
  font-size: 16px;
  color: #52555f;
  letter-spacing: 3px;
  margin-top: 6px;
`,N=l.div`
  flex: 1;
  display: flex;
  justify-content: center;
`,P=l.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  max-width: 420px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`,F=l.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  margin-bottom: 20px;
`,I=l.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #aab2c533;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,L=l.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  margin: 30px 0 20px;
`,R=l.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,z=l.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,B=l.label`
  font-size: 13px;
`,V=l.input`
  padding: 15px 20px;
  background-color: #f6f7fb;
  border: 1px solid transparent;
  border-radius: 30px;
  font-size: 14px;
  color: #52555f;
  outline: none;
  transition: border 0.2s ease, color 0.2s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    border-color: #ff6b00;
    background-color: #fff;
  }
`,H=l.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`,U=l.button`
  flex: 1;
  background: #ff751d;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.25);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,W=l.button`
  flex: 1;
  background-color: #f5f6fb;
  color: #52555f;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e2e8f0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,G=l.p`
  color: #e53e3e;
  font-size: 13px;
  text-align: center;
  margin: 10px 0 0 0;
`,K=l.p`
  color: #38a169;
  font-size: 13px;
  text-align: center;
  margin: 10px 0 0 0;
`,q=e=>typeof e==`object`&&e?e:{message:String(e)},J=()=>{let[e,o]=(0,d.useState)(``),[c,l]=(0,d.useState)(``),[f,p]=(0,d.useState)(!1),[m,h]=(0,d.useState)(null),[g,_]=(0,d.useState)(null),v=r();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{}),(0,D.jsx)(O,{children:(0,D.jsxs)(k,{children:[(0,D.jsxs)(A,{children:[(0,D.jsx)(j,{children:`InvestIQ`}),(0,D.jsx)(M,{children:`SMART FINANCE`})]}),(0,D.jsx)(N,{children:(0,D.jsxs)(P,{children:[(0,D.jsx)(F,{children:`Ви можете авторизуватися за допомогою акаунта Google`}),(0,D.jsxs)(I,{type:`button`,onClick:async()=>{h(null),_(null),p(!0);try{await n(i,a),_(`Успішний вхід через Google!`),v(`/home`)}catch(e){let t=q(e);h(`Помилка авторизації через Google: `+(t.message||`Неочікувана помилка.`))}finally{p(!1)}},disabled:f,children:[(0,D.jsx)(E,{size:20}),(0,D.jsx)(`span`,{children:`Google`})]}),(0,D.jsx)(L,{children:`Або увійти за допомогою ел. пошти та паролю після реєстрації`}),(0,D.jsxs)(R,{onSubmit:async t=>{t.preventDefault(),h(null),_(null),p(!0);try{await s(i,e,c),_(`Успішний вхід!`),v(`/home`)}catch(e){let t=q(e);t.code===`auth/invalid-credential`||t.code===`auth/user-not-found`||t.code===`auth/wrong-password`?h(`Невірний email або пароль.`):t.code===`auth/invalid-email`?h(`Некоректний формат email.`):h(`Помилка входу: `+(t.message||`Неочікувана помилка.`))}finally{p(!1)}},children:[(0,D.jsxs)(z,{children:[(0,D.jsx)(B,{children:`Електронна пошта:`}),(0,D.jsx)(V,{type:`email`,placeholder:`your@email.com`,value:e,onChange:e=>o(e.target.value),required:!0})]}),(0,D.jsxs)(z,{children:[(0,D.jsx)(B,{children:`Пароль:`}),(0,D.jsx)(V,{type:`password`,placeholder:`••••••••`,value:c,onChange:e=>l(e.target.value),required:!0})]}),m&&(0,D.jsx)(G,{children:m}),g&&(0,D.jsx)(K,{children:g}),(0,D.jsxs)(H,{children:[(0,D.jsx)(U,{type:`submit`,disabled:f,children:`УВІЙТИ`}),(0,D.jsx)(W,{type:`button`,onClick:async()=>{if(!e||!c){h(`Будь ласка, вкажіть email та пароль для реєстрації.`);return}h(null),_(null),p(!0);try{await t(i,e,c),_(`Реєстрація успішна! Ви авторизовані.`),v(`/home`)}catch(e){let t=q(e);t.code===`auth/email-already-in-use`?h(`Користувач з таким email вже існує.`):t.code===`auth/weak-password`?h(`Пароль має містити щонайменше 6 символів.`):t.code===`auth/invalid-email`?h(`Некоректний формат email.`):h(`Помилка реєстрації: `+(t.message||`Неочікувана помилка.`))}finally{p(!1)}},disabled:f,children:`РЕЄСТРАЦІЯ`})]})]})]})})]})})]})};export{J as default};
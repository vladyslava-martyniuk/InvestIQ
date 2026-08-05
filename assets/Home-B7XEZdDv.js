import{_ as e,a as t,f as n,h as r,i,l as a,m as o,n as s,o as c,p as l,s as u,t as d,v as f}from"./index-OxKSAT33.js";import{n as p,t as m}from"./Header-BgpSbniM.js";var h=f(e(),1),g=d(),_=({initialBalance:e=0,onConfirm:t})=>{let[n,r]=(0,h.useState)(e?`${e.toFixed(2)} UAH`:`00.00 UAH`),[i,a]=(0,h.useState)(!e);return(0,g.jsxs)(v,{children:[(0,g.jsx)(y,{htmlFor:`balance-input`,children:`Баланс:`}),(0,g.jsxs)(ee,{onSubmit:e=>{e.preventDefault();let r=parseFloat(n.replace(/[^0-9.]/g,``));isNaN(r)||(t&&t(r),a(!1))},children:[(0,g.jsxs)(te,{children:[(0,g.jsx)(ne,{id:`balance-input`,type:`text`,value:n,onChange:e=>{r(e.target.value)},placeholder:`00.00 UAH`}),(0,g.jsx)(b,{type:`submit`,children:`ПІДТВЕРДИТИ`})]}),i&&(0,g.jsxs)(x,{children:[(0,g.jsx)(S,{}),(0,g.jsx)(C,{children:`Привіт! Для початку роботи внесіть свій поточний баланс рахунку!`}),(0,g.jsx)(w,{children:`Ви не можете витрачати гроші, поки їх у Вас немає :)`})]})]})]})},v=p.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Центруємо вміст */
  gap: 20px;
  width: 100%;
  position: relative;
  font-family: 'Roboto', 'Open Sans', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  margin-top: 40px;
`,y=p.label`
  font-size: 12px;
  font-weight: 500;
  color: rgba(82, 85, 95, 0.7);
  letter-spacing: 0.02em;
`,ee=p.form`
  display: flex;
  align-items: center;
  position: relative;
`,te=p.div`
  display: flex;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
`,ne=p.input`
  width: 125px;
  height: 44px;
  background-color: #f6f7fb;
  border: none;
  border-radius: 16px 0 0 16px;
  padding: 0 16px;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #000000;
  }
`,b=p.button`
  height: 44px;
  padding: 0 20px;
  background-color: transparent;
  border: none;
  border-left: 2px solid #ffffff;
  border-radius: 0 16px 16px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
`,x=p.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%); /* Відцентрування підказки відносно форми */
  width: 288px;
  padding: 28px 20px 20px 20px;
  background: linear-gradient(117.84deg, #1d2e4a 2.84%, #0b1524 99.39%);
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
  z-index: 100;
  color: #ffffff;
`,S=p.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1d2e4a;
`,C=p.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin: 0 0 12px 0;
`,w=p.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`,T=c(o().length?l():r({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0})),E=({onSubmit:e,type:n=`expense`})=>{let[r,a]=(0,h.useState)(`2019-11-21`),[o,s]=(0,h.useState)(``),[c,l]=(0,h.useState)(``),[d,f]=(0,h.useState)(``),p=()=>{s(``),l(``),f(``)};return(0,g.jsxs)(D,{onSubmit:async a=>{a.preventDefault();let s=parseFloat(d.replace(`,`,`.`));if(!o||!c||isNaN(s)||s<=0)return;let l={date:r,description:o,category:c,amount:s,type:n};try{await i(t(T,`transactions`),{...l,createdAt:u()}),e&&e(l),p()}catch(e){console.error(`Помилка при додаванні в Firebase:`,e)}},children:[(0,g.jsxs)(O,{children:[(0,g.jsx)(k,{viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,g.jsx)(`path`,{d:`M6 2V4M14 2V4M3 8H17M4 4H16C17.1046 4 18 4.89543 18 6V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4Z`,stroke:`#52555F`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,g.jsx)(A,{type:`date`,value:r,onChange:e=>a(e.target.value)})]}),(0,g.jsxs)(j,{children:[(0,g.jsx)(N,{type:`text`,placeholder:`Опис товару`,value:o,onChange:e=>s(e.target.value)}),(0,g.jsxs)(P,{children:[(0,g.jsxs)(F,{value:c,onChange:e=>l(e.target.value),children:[(0,g.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:`Категорія товару`}),(0,g.jsx)(`option`,{value:`Транспорт`,children:`Транспорт`}),(0,g.jsx)(`option`,{value:`Продукти`,children:`Продукти`}),(0,g.jsx)(`option`,{value:`Здоров'я`,children:`Здоров'я`}),(0,g.jsx)(`option`,{value:`Алкоголь`,children:`Алкоголь`}),(0,g.jsx)(`option`,{value:`Розваги`,children:`Розваги`}),(0,g.jsx)(`option`,{value:`Все для дому`,children:`Все для дому`}),(0,g.jsx)(`option`,{value:`Техніка`,children:`Техніка`}),(0,g.jsx)(`option`,{value:`Комуналка, зв'язок`,children:`Комуналка, зв'язок`}),(0,g.jsx)(`option`,{value:`Спорт, хобі`,children:`Спорт, хобі`}),(0,g.jsx)(`option`,{value:`Навчання`,children:`Навчання`}),(0,g.jsx)(`option`,{value:`Інше`,children:`Інше`})]}),(0,g.jsx)(I,{viewBox:`0 0 12 7`,fill:`none`,children:(0,g.jsx)(`path`,{d:`M1 1L6 5L11 1`,stroke:`#52555F`,strokeWidth:`2`,strokeLinecap:`round`})})]}),(0,g.jsxs)(L,{children:[(0,g.jsx)(R,{type:`text`,placeholder:`0,00`,value:d,onChange:e=>f(e.target.value)}),(0,g.jsxs)(z,{viewBox:`0 0 20 20`,fill:`none`,children:[(0,g.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`16`,rx:`2`,stroke:`#52555F`,strokeWidth:`2`}),(0,g.jsx)(`rect`,{x:`6`,y:`5`,width:`8`,height:`3`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`7`,cy:`11`,r:`1`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`10`,cy:`11`,r:`1`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`13`,cy:`11`,r:`1`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`7`,cy:`14`,r:`1`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`10`,cy:`14`,r:`1`,fill:`#52555F`}),(0,g.jsx)(`circle`,{cx:`13`,cy:`14`,r:`1`,fill:`#52555F`})]})]})]}),(0,g.jsxs)(re,{children:[(0,g.jsx)(V,{type:`submit`,children:`ВВЕСТИ`}),(0,g.jsx)(H,{type:`button`,onClick:p,children:`ОЧИСТИТИ`})]})]})},D=p.form`
  display: flex;
  align-items: center;
  gap: 32px;
  font-family: 'Roboto', sans-serif;
  margin-top: 100px;

  @media (max-width: 1280px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`,O=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`,k=p.svg`
  width: 20px;
  height: 20px;
`,A=p.input`
  border: none;
  background: transparent;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;
  outline: none;
  cursor: pointer;
`,j=p.div`
  display: flex;
  align-items: center;
  border: 2px solid #f5f6fb;
  border-radius: 16px 16px 16px 0px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    border-radius: 16px;
  }
`,M=p.input`
  height: 44px;
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #52555f;

  &::placeholder {
    color: #c7ccdc;
  }
`,N=p(M)`
  width: 290px;
  padding: 0 20px;
  border-radius: 16px 0 0 16px;
  border-right: 2px solid #f5f6fb;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #f5f6fb;
    border-radius: 16px 16px 0 0;
  }
`,P=p.div`
  position: relative;
  display: flex;
  align-items: center;
`,F=p.select`
  width: 170px;
  height: 44px;
  padding: 0 35px 0 20px;
  border: none;
  border-right: 2px solid #f5f6fb;
  background: transparent;
  outline: none;
  font-size: 12px;
  color: #c7ccdc;
  appearance: none;
  cursor: pointer;

  &:valid {
    color: #52555f;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #f5f6fb;
  }
`,I=p.svg`
  position: absolute;
  right: 18px;
  width: 10px;
  height: 6px;
  pointer-events: none;
`,L=p.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: relative;
`,R=p(M)`
  width: 110px;
  padding: 0 40px 0 12px;
  text-align: right;
  font-weight: 700;
  border-radius: 0 16px 16px 0;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 16px 16px;
  }
`,z=p.svg`
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  pointer-events: none;
`,re=p.div`
  display: flex;
  gap: 16px;
`,B=p.button`
  width: 136px;
  height: 44px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,V=p(B)`
  background: #ff751d;
  border: none;
  color: #ffffff;
  box-shadow: 1px 2px 5px rgba(255, 117, 29, 0.35);

  &:hover {
    background: #f56c11;
  }
`,H=p(B)`
  background: #ffffff;
  border: 2px solid #f5f6fb;
  color: #52555f;

  &:hover {
    background: #f5f6fb;
  }
`,U=p.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    height: 278px;
    width: 230px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 0px;
    overflow: hidden;
    gap: 2px;
    `,W=p.div`
font-family: Roboto;
font-weight: 700;
font-size: 12px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 2%;
text-align: center;
vertical-align: middle;
text-transform: uppercase;
margin: auto;
`,G=p.div`
    display: flex;
    align-items: center;
    padding: 0px 22px;
    justify-content: space-between;
    background: #F5F6FB;
    width: 186px;
    height: 38px;
`,K=p.div`
font-family: Roboto;
font-weight: 400;
font-size: 12px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 4%;
vertical-align: middle;
text-transform: uppercase;
`,q=()=>(0,g.jsxs)(U,{children:[(0,g.jsx)(G,{children:(0,g.jsx)(W,{children:`Зведення`})}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]}),(0,g.jsxs)(G,{children:[(0,g.jsx)(K,{children:`lorem1`}),(0,g.jsx)(K,{children:`lorem2`})]})]}),J=new Intl.DateTimeFormat(`uk-UA`,{day:`2-digit`,month:`short`}),Y=new Intl.NumberFormat(`uk-UA`,{style:`currency`,currency:`UAH`,minimumFractionDigits:2}),X=p.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`,ie=p.div`
  max-height: 420px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ff751d transparent;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff751d;
    border-radius: 25px;
    border: 2px solid #ffffff;
  }

  @media (max-width: 640px) {
    max-height: none;
    overflow: visible;
  }
`,ae=p.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 640px) {
    min-width: 0;
  }
`,oe=p.thead`
  @media (max-width: 640px) {
    display: none;
  }
`,Z=p.th`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #f7f9fc;
  color: #52555f;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 20px;
  white-space: nowrap;
`,se=p.tr`
  &:hover td {
    background-color: #fafbfd;
  }

  @media (max-width: 640px) {
    display: grid;
    padding: 14px 16px;
    border-top: 1px solid #f0f1f5;

    &:hover td {
      background-color: transparent;
    }
  }
`,Q=p.td`
  padding: 18px 20px;
  border-top: 1px solid #f0f1f5;
  vertical-align: middle;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 2px 0;
    border: none;

    &::before {
      content: attr(data-label);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #52555f;
    }
  }
`,ce=p(Q)`
  width: 15%;
  color: #52555f;
  white-space: nowrap;
`,le=p(Q)`
  width: 40%;
  font-weight: 500;
`,$=p(Q)`
  width: 25%;
`,ue=p(Q)`
  width: 20%;
  text-align: right;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:e})=>e?`#38a169`:`#e53e3e`};

  @media (max-width: 640px) {
    text-align: left;
  }
`,de=p.span`
  display: inline-block;
  padding: 5px 12px;
  border-radius: 25px;
  background-color: #aab2c533;
  color: #52555f;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`,fe=p.p`
  font-size: 13px;
  color: #52555f;
  text-align: center;
  padding: 40px 20px;
  margin: 0;
`,pe=({items:e})=>e.length===0?(0,g.jsx)(X,{children:(0,g.jsx)(fe,{children:`Транзакцій поки немає`})}):(0,g.jsx)(X,{children:(0,g.jsx)(ie,{children:(0,g.jsxs)(ae,{children:[(0,g.jsx)(oe,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(Z,{children:`Дата`}),(0,g.jsx)(Z,{children:`Опис`}),(0,g.jsx)(Z,{children:`Категорія`}),(0,g.jsx)(Z,{children:`Сума`})]})}),(0,g.jsx)(`tbody`,{children:e.map(e=>(0,g.jsxs)(se,{children:[(0,g.jsx)(ce,{"data-label":`Дата`,children:J.format(new Date(e.date))}),(0,g.jsx)(le,{"data-label":`Опис`,children:e.description}),(0,g.jsx)($,{"data-label":`Категорія`,children:(0,g.jsx)(de,{children:e.category})}),(0,g.jsxs)(ue,{"data-label":`Сума`,$positive:e.amount>=0,children:[e.amount>0?`+`:``,Y.format(e.amount)]})]},e.id))})]})})}),me=[{id:`1`,date:`2023-08-01`,amount:100,category:`Food`,description:`Burger`,type:`expense`},{id:`2`,date:`2023-08-02`,amount:50,category:`Entertainment`,description:`Movie`,type:`expense`}],he=()=>{let[e,t]=(0,h.useState)(null),[r,i]=(0,h.useState)(!0);return(0,h.useEffect)(()=>{let e=a(s,e=>{t(e),i(!1)});return()=>e()},[]),r?(0,g.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100vh`,fontFamily:`sans-serif`},children:`Завантаження...`}):(0,g.jsxs)(`div`,{children:[(0,g.jsx)(m,{userName:e?.displayName||e?.email||void 0,onLogout:async()=>{try{await n(s)}catch(e){console.error(`Error logging out:`,e)}}}),(0,g.jsx)(_,{}),(0,g.jsx)(E,{}),(0,g.jsx)(pe,{items:me}),(0,g.jsx)(q,{})]})};export{he as default};
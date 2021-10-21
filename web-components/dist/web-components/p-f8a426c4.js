import{g as t,c as n}from"./p-c4f93636.js";import{c as e,a as o,b as a,g as s}from"./p-8fe5c065.js";import{OVERLAY_BACK_BUTTON_PRIORITY as i}from"./p-f2660943.js";let r=0;const c=new WeakMap,d=t=>({create:n=>b(t,n),dismiss:(n,e,o)=>w(document,n,e,t,o),getTop:async()=>g(document,t)}),u=d("ion-alert"),p=d("ion-action-sheet"),l=d("ion-modal"),m=d("ion-picker"),f=d("ion-popover"),y=t=>{"undefined"!=typeof document&&h(document);const n=r++;t.overlayIndex=n,t.hasAttribute("id")||(t.id=`ion-overlay-${n}`)},b=(t,n)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const o=document.createElement(t);return o.classList.add("overlay-hidden"),Object.assign(o,n),A(document).appendChild(o),new Promise((t=>e(o,t)))})):Promise.resolve(),v='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',x="input:not([type=hidden]), textarea, button, select",h=t=>{0===r&&(r=1,t.addEventListener("focus",(n=>((t,n)=>{const e=g(n),o=t.target;if(e&&o)if(e===o)e.lastFocus=void 0;else{const t=s(e);if(!t.contains(o))return;const a=t.querySelector(".ion-overlay-wrapper");if(!a)return;if(a.contains(o))e.lastFocus=o;else{const t=e.lastFocus;((t,n)=>{let e=t.querySelector(v);const o=e&&e.shadowRoot;o&&(e=o.querySelector(x)||e),e?e.focus():n.focus()})(a,e),t===n.activeElement&&((t,n)=>{const e=Array.from(t.querySelectorAll(v));let o=e.length>0?e[e.length-1]:null;const a=o&&o.shadowRoot;a&&(o=a.querySelector(x)||o),o?o.focus():n.focus()})(a,e),e.lastFocus=n.activeElement}}})(n,t)),!0),t.addEventListener("ionBackButton",(n=>{const e=g(t);e&&e.backdropDismiss&&n.detail.register(i,(()=>e.dismiss(void 0,I)))})),t.addEventListener("keyup",(n=>{if("Escape"===n.key){const n=g(t);n&&n.backdropDismiss&&n.dismiss(void 0,I)}})))},w=(t,n,e,o,a)=>{const s=g(t,o,a);return s?s.dismiss(n,e):Promise.reject("overlay does not exist")},g=(t,n,e)=>{const o=((t,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(n)).filter((t=>t.overlayIndex>0))))(t,n);return void 0===e?o[o.length-1]:o.find((t=>t.id===e))},k=async(e,o,a,s,i)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const r=t(e),c=e.enterAnimation?e.enterAnimation:n.get(o,"ios"===r?a:s);await B(e,c,e.el,i)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&j(e.el),e.keyboardClose&&e.el.focus()},j=async t=>{let n=document.activeElement;if(!n)return;const e=n&&n.shadowRoot;e&&(n=e.querySelector(x)||n),await t.onDidDismiss(),n.focus()},P=async(e,o,a,s,i,r,d)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:o,role:a});const u=t(e),p=e.leaveAnimation?e.leaveAnimation:n.get(s,"ios"===u?i:r);"gesture"!==a&&await B(e,p,e.el,d),e.didDismiss.emit({data:o,role:a}),c.delete(e)}catch(t){console.error(t)}return e.el.remove(),!0},A=t=>t.querySelector("ion-app")||t.body,B=async(t,e,o,a)=>{o.classList.remove("overlay-hidden");const s=e(o.shadowRoot||t.el,a);t.animated&&n.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}));const i=c.get(t)||[];return c.set(t,[...i,s]),await s.play(),!0},E=(t,n)=>{let e;const o=new Promise((t=>e=t));return O(t,n,(t=>{e(t.detail)})),o},O=(t,n,e)=>{const s=o=>{a(t,n,s),e(o)};o(t,n,s)},T=t=>"cancel"===t||t===I,z=t=>t(),G=(t,e)=>{if("function"==typeof t)return n.get("_zoneGate",z)((()=>{try{return t(e)}catch(t){console.error(t)}}))},I="backdrop";export{I as B,y as a,m as b,c,P as d,E as e,f,p as g,u as h,T as i,l as m,k as p,G as s}
import{r as o,c as a,w as i,h as t,H as r,a as s}from"./p-094f34cc.js";import{g as e,c as n}from"./p-c4f93636.js";import{k as d}from"./p-8fe5c065.js";import{g as l}from"./p-7840618d.js";import{c}from"./p-f25da3b3.js";import{d as h}from"./p-c57cb88d.js";import{g as m}from"./p-8f72be08.js";import"./p-8fc9298a.js";import{createGesture as p}from"./p-101feae9.js";import"./p-f2660943.js";import{B as f,a as b,p as x,c as w,d as u,e as v}from"./p-f8a426c4.js";import{a as g,d as y}from"./p-aff3440a.js";const k=(o,a)=>{const i=c().addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=c().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=c().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(t);if(a){const o=window.innerWidth<768,s="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${s?"-10px":o}) scale(0.93)`;e.afterStyles({transform:i}).beforeAddWrite((()=>n.style.setProperty("background-color","black"))).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"}]),r.addAnimation(e)}else if(r.addAnimation(i),s){const o=`translateY(-10px) scale(${s?.93:1})`;e.afterStyles({transform:o}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:o}]);const i=c().afterStyles({transform:o}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:o}]);r.addAnimation([e,i])}else t.fromTo("opacity","0","1")}else r.addAnimation(i);return r},D=(o,a,i=500)=>{const t=c().addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=c().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=c().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(r);if(a){const o=window.innerWidth<768,i="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((o=>{1===o&&(a.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter((o=>void 0!==o.presentingElement)).length<=1&&n.style.setProperty("background-color",""))})),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",t=`translateY(${i?"-10px":o}) scale(0.93)`;e.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:t,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(e)}else if(s.addAnimation(t),i){const o=`translateY(-10px) scale(${i?.93:1})`;e.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:o},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const t=c().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:o},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([e,t])}else r.fromTo("opacity","1","0")}else s.addAnimation(t);return s},Y=o=>{const a=c(),i=c(),t=c();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),a.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,t])},M=o=>{const a=c(),i=c(),t=c(),r=o.querySelector(".modal-wrapper");return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),a.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,t])},j=class{constructor(i){o(this,i),this.didPresent=a(this,"ionModalDidPresent",7),this.willPresent=a(this,"ionModalWillPresent",7),this.willDismiss=a(this,"ionModalWillDismiss",7),this.didDismiss=a(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,f)},this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onLifecycle=o=>{const a=this.usersElement,i=C[o.type];if(a&&i){const t=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});a.dispatchEvent(t)}}}swipeToCloseChanged(o){this.gesture?this.gesture.enable(o):o&&this.initSwipeToClose()}connectedCallback(){b(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".modal-wrapper");if(!o)throw new Error("container is undefined");const a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await g(this.delegate,o,this.component,["ion-page"],a),await h(this.usersElement),i((()=>this.el.classList.add("show-modal"))),await x(this,"modalEnter",k,Y,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==e(this))return;const o=this.leaveAnimation||n.get("modalLeave",D),a=this.animation=o(this.el,this.presentingElement);this.gesture=((o,a,i)=>{const t=o.offsetHeight;let r=!1;const s=p({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o=>{const a=o.event.target;return null===a||!a.closest||null===a.closest("ion-content")},onStart:()=>{a.progressStart(!0,r?1:0)},onMove:o=>{const i=d(1e-4,o.deltaY/t,.9999);a.progressStep(i)},onEnd:o=>{const e=o.velocityY,n=d(1e-4,o.deltaY/t,.9999),l=(o.deltaY+1e3*e)/t>=.5;let c=l?-.001:.001;l?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=m([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=m([0,0],[1,0],[.68,.28],[1,1],n)[0]);const h=((o,a)=>d(400,o/Math.abs(1.1*a),500))(l?n*t:(1-n)*t,e);r=l,s.enable(!1),a.onFinish((()=>{l||s.enable(!0)})).progressEnd(l?1:0,c,h),l&&i()}});return s})(this.el,a,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(o,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;const i=w.get(this)||[],t=await u(this,o,a,"modalLeave",D,M,this.presentingElement);return t&&(await y(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),i.forEach((o=>o.destroy()))),this.animation=void 0,t}onDidDismiss(){return v(this.el,"ionModalDidDismiss")}onWillDismiss(){return v(this.el,"ionModalWillDismiss")}render(){const o=e(this);return t(r,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[o]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===o},l(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&t("div",{class:"modal-shadow"}),t("div",{tabindex:"0"}),t("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),t("div",{tabindex:"0"}))}get el(){return s(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},C={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};j.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{transform:translate3d(0,  40px,  0);opacity:0.01}"};export{j as ion_modal}
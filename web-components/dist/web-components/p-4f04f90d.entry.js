import{r as i,c as t,h as e,H as s,a as o}from"./p-094f34cc.js";import{g as r}from"./p-c4f93636.js";const n={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},d=class{constructor(e){i(this,e),this.ionSplitPaneVisible=t(this,"ionSplitPaneVisible",7),this.visible=!1,this.disabled=!1,this.when=n.lg}visibleChanged(i){const t={visible:i,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)}connectedCallback(){this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const i=this.when;if("boolean"==typeof i)return void(this.visible=i);const t=n[i]||i;if(0!==t.length){if(window.matchMedia){const i=i=>{this.visible=i.matches},e=window.matchMedia(t);e.addListener(i),this.rmL=()=>e.removeListener(i),this.visible=e.matches}}else this.visible=!1}isPane(i){return!!this.visible&&i.parentElement===this.el&&i.classList.contains("split-pane-side")}styleChildren(){const i=this.contentId,t=this.el.children,e=this.el.childElementCount;let s=!1;for(let o=0;o<e;o++){const e=t[o],r=void 0!==i&&e.id===i;if(r){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}a(e,r)}s||console.warn("split pane does not have a specified main node")}render(){const i=r(this);return e(s,{class:{[i]:!0,[`split-pane-${i}`]:!0,"split-pane-visible":this.visible}},e("slot",null))}get el(){return o(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},a=(i,t)=>{let e,s;t?(e="split-pane-main",s="split-pane-side"):(e="split-pane-side",s="split-pane-main");const o=i.classList;o.add(e),o.remove(s)};d.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}"};export{d as ion_split_pane}
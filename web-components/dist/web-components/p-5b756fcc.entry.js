import{r as i,c as o,h as t,H as e,a as r}from"./p-094f34cc.js";import{g as n}from"./p-c4f93636.js";import{a,b as l,e as s}from"./p-8fe5c065.js";import{c as d,h}from"./p-7840618d.js";const c=class{constructor(t){i(this,t),this.ionColor=o(this,"ionColor",7),this.ionStyle=o(this,"ionStyle",7),this.inRange=!1,this.noAnimate=!1}componentWillLoad(){this.inRange=!!this.el.closest("ion-range"),this.noAnimate="floating"===this.position,this.emitStyle(),this.emitColor()}componentDidLoad(){this.noAnimate&&setTimeout((()=>{this.noAnimate=!1}),1e3)}colorChanged(){this.emitColor()}positionChanged(){this.emitStyle()}emitColor(){const{color:i}=this;this.ionColor.emit({"item-label-color":void 0!==i,[`ion-color-${i}`]:void 0!==i})}emitStyle(){const{inRange:i,position:o}=this;i||this.ionStyle.emit({label:!0,[`label-${o}`]:void 0!==o})}render(){const i=this.position,o=n(this);return t(e,{class:d(this.color,{[o]:!0,[`label-${i}`]:void 0!==i,"label-no-animate":this.noAnimate})})}get el(){return r(this)}static get watchers(){return{color:["colorChanged"],position:["positionChanged"]}}};c.style={ios:".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{align-self:baseline}.label-fixed.sc-ion-label-ios-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;transform:translate3d(0,  27px,  0);transform-origin:left top;transition:transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{transform-origin:right top}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{transform:translate3d(0,  0,  0) scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s>p,.ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",md:".item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{align-self:baseline}.label-fixed.sc-ion-label-md-h{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{transform-origin:left top;transform:translateY(50%) scale(0.75);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-stacked.sc-ion-label-md-h,[dir=rtl].label-stacked.sc-ion-label-md-h,[dir=rtl] .label-stacked.sc-ion-label-md-h{transform-origin:right top}.label-floating.sc-ion-label-md-h{transform:translateY(96%);transform-origin:left top;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl].sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl] .sc-ion-label-md-h -no-combinator.label-floating.sc-ion-label-md-h,[dir=rtl].label-floating.sc-ion-label-md-h,[dir=rtl] .label-floating.sc-ion-label-md-h{transform-origin:right top}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{transform:translateY(50%) scale(0.75)}.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s>p,.ion-color .sc-ion-label-md-h.sc-ion-label-md-s>p{color:inherit}"};const b=class{constructor(o){i(this,o)}render(){const{lines:i}=this,o=n(this);return t(e,{class:d(this.color,{[o]:!0,[`list-header-lines-${i}`]:void 0!==i})},t("div",{class:"list-header-inner"},t("slot",null)))}};b.style={ios:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-color-step-850, #262626);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));padding-left:calc(var(--ion-safe-area-left, 0px) + 20px);position:relative;align-items:flex-end;font-size:22px;font-weight:700;letter-spacing:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 20px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}}::slotted(ion-button),::slotted(ion-label){margin-top:29px;margin-bottom:6px}::slotted(ion-button){margin-left:3px;margin-right:3px;height:1.4em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-button){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:3px;margin-inline-end:3px}}:host(.list-header-lines-full){--border-width:0 0 0.55px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 0.55px 0}",md:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-text-color, #000);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));padding-left:calc(var(--ion-safe-area-left, 0) + 16px);min-height:45px;font-size:14px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0) + 16px)}}:host(.list-header-lines-full){--border-width:0 0 1px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 1px 0}"};const m=class{constructor(t){i(this,t),this.ionStyle=o(this,"ionStyle",7),this.ionFocus=o(this,"ionFocus",7),this.ionBlur=o(this,"ionBlur",7),this.inputId="ion-rb-"+g++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}async setFocus(i){i.stopPropagation(),i.preventDefault(),this.el.focus()}async setButtonTabindex(i){this.buttonTabindex=i}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const i=this.radioGroup=this.el.closest("ion-radio-group");i&&(this.updateState(),a(i,"ionChange",this.updateState))}disconnectedCallback(){const i=this.radioGroup;i&&(l(i,"ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:o,checked:r,color:a,el:l,buttonTabindex:c}=this,b=n(this),{label:m,labelId:g,labelText:p}=s(l,i);return t(e,{"aria-checked":`${r}`,"aria-hidden":o?"true":null,"aria-labelledby":m?g:null,role:"radio",tabindex:c,onFocus:this.onFocus,onBlur:this.onBlur,class:d(a,{[b]:!0,"in-item":h("ion-item",l),interactive:!0,"radio-checked":r,"radio-disabled":o})},t("div",{class:"radio-icon",part:"container"},t("div",{class:"radio-inner",part:"mark"}),t("div",{class:"radio-ripple"})),t("label",{htmlFor:i},p),t("input",{type:"radio",checked:r,disabled:o,tabindex:"-1",id:i}))}get el(){return r(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let g=0;m.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));transform:scale3d(0, 0, 0);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};const p=class{constructor(t){i(this,t),this.ionChange=o(this,"ionChange",7),this.inputId="ion-rg-"+f++,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=i=>{const o=this.getRadios(),t=o.find((i=>!i.disabled)),e=o.find((o=>o.value===i&&!o.disabled));if(!t&&!e)return;const r=e||t;for(const i of o)i.setButtonTabindex(i===r?0:-1)},this.onClick=i=>{i.preventDefault();const o=i.target&&i.target.closest("ion-radio");if(o){const i=o.value;i!==this.value?this.value=i:this.allowEmptySelection&&(this.value=void 0)}}}valueChanged(i){this.setRadioTabindex(i),this.ionChange.emit({value:i})}componentDidLoad(){this.setRadioTabindex(this.value)}async connectedCallback(){const i=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(i){const o=this.label=i.querySelector("ion-label");o&&(this.labelId=o.id=this.name+"-lbl")}}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}onKeydown(i){const o=!!this.el.closest("ion-select-popover");if(i.target&&!this.el.contains(i.target))return;const t=Array.from(this.el.querySelectorAll("ion-radio")).filter((i=>!i.disabled));if(i.target&&t.includes(i.target)){const e=t.findIndex((o=>o===i.target)),r=t[e];let n;["ArrowDown","ArrowRight"].includes(i.code)&&(n=e===t.length-1?t[0]:t[e+1]),["ArrowUp","ArrowLeft"].includes(i.code)&&(n=0===e?t[t.length-1]:t[e-1]),n&&t.includes(n)&&(n.setFocus(i),o||(this.value=n.value)),["Space"].includes(i.code)&&(this.value=r.value,i.preventDefault())}}render(){const{label:i,labelId:o}=this,r=n(this);return t(e,{role:"radiogroup","aria-labelledby":i?o:null,onClick:this.onClick,class:r})}get el(){return r(this)}static get watchers(){return{value:["valueChanged"]}}};let f=0;export{c as ion_label,b as ion_list_header,m as ion_radio,p as ion_radio_group}
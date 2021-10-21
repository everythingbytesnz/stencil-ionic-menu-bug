import { r as registerInstance, h } from './index-b6944460.js';
import './ionic-global-0ae2c4ce.js';
import './helpers-4ec226d9.js';
import './hardware-back-button-508e48cf.js';
import { m as modalController } from './overlays-2879c546.js';

const helpModalCss = ":host{display:block}.flex-end{align-items:center;justify-content:flex-end}ion-modal.helpModal{--height:auto !important;--width:400px;--min-height:200px}ion-modal.helpModal .modal-wrapper .ion-page{position:relative;contain:content;max-height:90vh;overflow-y:auto}ion-modal.helpModal .modal-wrapper ion-header{position:sticky;top:0}@media (max-width: 576px){ion-modal.helpModal{--height:100% !important;--width:100%}ion-modal.helpModal .modal-wrapper .ion-page{max-height:100vh}}";

const HelpModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  _focusDialogContent() {
    this._container.focus();
  }
  componentDidLoad() {
    setTimeout(() => {
      this._focusDialogContent();
    }, 10);
  }
  _close() {
    modalController.dismiss();
  }
  render() {
    return [
      h("div", { tabindex: "0", role: "dialog", "aria-label": this.modalTitle, ref: el => (this._container = el) }, h("ion-header", null, h("ion-toolbar", { color: "light" }, h("ion-title", null, h("h1", { class: "font-default margin-0", id: "title" }, h("a", { innerHTML: this.modalTitle }, " "))), h("ion-buttons", { slot: "primary" }, h("ion-button", { color: "dark", onClick: () => this._close(), "icon-only": true }, h("ion-icon", { name: "close" }))))), h("div", { class: "margin-top-m margin-left-m margin-right-m" }, h("div", { innerHTML: this.htmlContent })), h("div", { class: "display-flex flex-end" }, h("ion-button", { fill: "clear", color: "primary", onClick: () => this._close() }, "Close"))),
    ];
  }
};
HelpModal.style = helpModalCss;

export { HelpModal as help_modal };

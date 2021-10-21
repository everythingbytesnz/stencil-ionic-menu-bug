'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eff8f523.js');
require('./ionic-global-5f4aee1b.js');
require('./helpers-d7660b7e.js');
require('./hardware-back-button-ca468aae.js');
const overlays = require('./overlays-fc5ca4b7.js');

const helpModalCss = ":host{display:block}.flex-end{align-items:center;justify-content:flex-end}ion-modal.helpModal{--height:auto !important;--width:400px;--min-height:200px}ion-modal.helpModal .modal-wrapper .ion-page{position:relative;contain:content;max-height:90vh;overflow-y:auto}ion-modal.helpModal .modal-wrapper ion-header{position:sticky;top:0}@media (max-width: 576px){ion-modal.helpModal{--height:100% !important;--width:100%}ion-modal.helpModal .modal-wrapper .ion-page{max-height:100vh}}";

const HelpModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    overlays.modalController.dismiss();
  }
  render() {
    return [
      index.h("div", { tabindex: "0", role: "dialog", "aria-label": this.modalTitle, ref: el => (this._container = el) }, index.h("ion-header", null, index.h("ion-toolbar", { color: "light" }, index.h("ion-title", null, index.h("h1", { class: "font-default margin-0", id: "title" }, index.h("a", { innerHTML: this.modalTitle }, " "))), index.h("ion-buttons", { slot: "primary" }, index.h("ion-button", { color: "dark", onClick: () => this._close(), "icon-only": true }, index.h("ion-icon", { name: "close" }))))), index.h("div", { class: "margin-top-m margin-left-m margin-right-m" }, index.h("div", { innerHTML: this.htmlContent })), index.h("div", { class: "display-flex flex-end" }, index.h("ion-button", { fill: "clear", color: "primary", onClick: () => this._close() }, "Close"))),
    ];
  }
};
HelpModal.style = helpModalCss;

exports.help_modal = HelpModal;

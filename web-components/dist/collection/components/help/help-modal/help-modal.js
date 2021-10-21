import { Component, h, Prop } from '@stencil/core';
import { modalController } from '@ionic/core';
export class HelpModal {
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
      h("div", { tabindex: "0", role: "dialog", "aria-label": this.modalTitle, ref: el => (this._container = el) },
        h("ion-header", null,
          h("ion-toolbar", { color: "light" },
            h("ion-title", null,
              h("h1", { class: "font-default margin-0", id: "title" },
                h("a", { innerHTML: this.modalTitle }, " "))),
            h("ion-buttons", { slot: "primary" },
              h("ion-button", { color: "dark", onClick: () => this._close(), "icon-only": true },
                h("ion-icon", { name: "close" }))))),
        h("div", { class: "margin-top-m margin-left-m margin-right-m" },
          h("div", { innerHTML: this.htmlContent })),
        h("div", { class: "display-flex flex-end" },
          h("ion-button", { fill: "clear", color: "primary", onClick: () => this._close() }, "Close"))),
    ];
  }
  static get is() { return "help-modal"; }
  static get originalStyleUrls() { return {
    "$": ["help-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["help-modal.css"]
  }; }
  static get properties() { return {
    "modalTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Title of the modal"
      },
      "attribute": "modal-title",
      "reflect": false
    },
    "htmlContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Html Content of the modal"
      },
      "attribute": "html-content",
      "reflect": false
    }
  }; }
}

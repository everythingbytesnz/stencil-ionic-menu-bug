import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { modalController } from '@ionic/core';
export class UoaHelp {
  constructor() {
    /**
     * Clickable text of Link
     */
    this.linkText = 'Help';
    /**
     * Title of the modal
     */
    this.modalTitle = 'Help';
  }
  async _presentModal() {
    if (!this.htmlContent) {
      this.htmlContent = this.el.innerHTML;
    }
    const modal = await modalController.create({
      component: 'help-modal',
      cssClass: 'helpModal',
      componentProps: {
        modalTitle: this.modalTitle,
        htmlContent: this.htmlContent,
      },
    });
    await modal.present();
    modal.onDidDismiss().then(_ => {
      this._setLinkFocus();
    });
  }
  handleKeyDown(ev) {
    if ('Enter' === ev.code) {
      this._presentModal();
    }
  }
  _setLinkFocus() {
    this.helpLink.focus();
  }
  render() {
    return h("a", { class: "link", tabindex: "0", onClick: () => this._presentModal(), ref: el => (this.helpLink = el), color: "primary", innerHTML: this.linkText });
  }
  static get is() { return "uoa-help"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["help.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["help.css"]
  }; }
  static get properties() { return {
    "linkText": {
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
        "text": "Clickable text of Link"
      },
      "attribute": "link-text",
      "reflect": false,
      "defaultValue": "'Help'"
    },
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
      "reflect": false,
      "defaultValue": "'Help'"
    },
    "htmlContent": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Html Content of the modal. It can be passed as a property/attribute or as html content inside uoa-help tag."
      },
      "attribute": "html-content",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}

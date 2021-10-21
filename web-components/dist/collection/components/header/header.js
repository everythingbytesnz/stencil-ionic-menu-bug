import { Component, Host, h, Prop } from '@stencil/core';
/**
 * @slot  - Content is placed along with end slot if provided without a slot. Slot moves left or right depends on logo Position.
 * @slot start - Content is placed to the left of the Logo
 * @slot end -  Content is placed to the right of the Logo
 */
export class UoaHeader {
  constructor() {
    /**
     * Logo Position: left, right or middle. Default is middle.
     */
    this.logoPosition = 'middle';
    /**
     * Type of logo. Default options are: "vertical" and "horizontal"
     */
    this.logoType = 'vertical';
    /**
     * The color to use from your application's color palette.
     */
    this.color = 'primary';
    /**
     * The size of logo
     */
    this.size = 'small';
  }
  render() {
    let classes = `logo-wrapper ${this.logoType}`;
    const slotLogo = (h("a", { href: "/", class: classes },
      h("uoa-logo", { color: this.color, logoType: this.logoType, size: this.size, "aria-label": "The University of Auckland logo" })));
    const slotStart = (h("div", { class: "flex-same-size" },
      h("slot", { name: "start" }, "\u00A0 ")));
    const slotEnd = (h("div", { class: "flex-same-size" },
      h("slot", { name: "end" }, "\u00A0"),
      h("slot", null)));
    switch (this.logoPosition) {
      case 'start': {
        return (h(Host, { class: {
            [`${this.logoType}-${this.size}`]: true,
            [`${this.logoType}`]: this.logoType === 'horizontal',
          } },
          slotLogo,
          " ",
          slotStart,
          " ",
          slotEnd));
      }
      case 'end': {
        return (h(Host, { class: {
            [`${this.logoType}-${this.size}`]: true,
            [`${this.logoType}`]: this.logoType === 'horizontal',
          } },
          slotStart,
          " ",
          slotEnd,
          " ",
          slotLogo));
      }
    }
    return (h(Host, { class: {
        [`${this.logoType}-${this.size}`]: true,
        [`${this.logoType}`]: this.logoType === 'horizontal',
      } },
      slotStart,
      " ",
      slotLogo,
      " ",
      slotEnd));
  }
  static get is() { return "uoa-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["header.css"]
  }; }
  static get assetsDirs() { return ["../assets"]; }
  static get properties() { return {
    "logoPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'middle' | 'end'",
        "resolved": "\"end\" | \"middle\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Logo Position: left, right or middle. Default is middle."
      },
      "attribute": "logo-position",
      "reflect": false,
      "defaultValue": "'middle'"
    },
    "logoType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Logo['logoType']",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {
          "Logo": {
            "location": "import",
            "path": "../../interface/logo"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of logo. Default options are: \"vertical\" and \"horizontal\""
      },
      "attribute": "logo-type",
      "reflect": false,
      "defaultValue": "'vertical'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Logo['color']",
        "resolved": "\"dark\" | \"inverted\" | \"light\" | \"primary\"",
        "references": {
          "Logo": {
            "location": "import",
            "path": "../../interface/logo"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Logo['size']",
        "resolved": "\"default\" | \"large\" | \"small\"",
        "references": {
          "Logo": {
            "location": "import",
            "path": "../../interface/logo"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The size of logo"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'small'"
    }
  }; }
}

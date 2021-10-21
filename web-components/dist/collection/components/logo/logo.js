import { Component, Host, h, getAssetPath, Prop } from '@stencil/core';
export class UoaLogo {
  constructor() {
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
    this.size = 'default';
  }
  render() {
    const logoFolder = this.size === 'small' || window.innerWidth < 577 ? `no-translation` : 'translation';
    let logo_generic = `${logoFolder}/${this.logoType}/uoa-logo.svg`;
    const classes = `logo-${this.color} ${this.size} ${this.logoType}`;
    return (h(Host, null,
      h("ion-icon", { name: "university of Auckland Logo", src: getAssetPath(`../assets/logo/${logo_generic}`), class: classes })));
  }
  static get is() { return "uoa-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["logo.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["logo.css"]
  }; }
  static get assetsDirs() { return ["../assets"]; }
  static get properties() { return {
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
      "defaultValue": "'default'"
    }
  }; }
}

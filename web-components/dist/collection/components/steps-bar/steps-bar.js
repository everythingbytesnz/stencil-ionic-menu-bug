import { Component, Host, h, Prop, Event, Watch } from '@stencil/core';
export class StepsBar {
  constructor() {
    /**
     * Current Step on the progress/step bar.
     */
    this.currentStep = 1;
    this._stepsInfo = [];
    /**
     * Array of description of steps for aria-labels.
     */
    this.stepsInfo = [];
    this.getStepsContent = () => {
      if (this.steps) {
        return this.createDefaultSteps();
      }
    };
  }
  stepsInfoWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._stepsInfo = JSON.parse(newValue);
    }
    else {
      this._stepsInfo = newValue;
    }
  }
  componentWillLoad() {
    this.stepsInfoWatcher(this.stepsInfo);
  }
  clickEventHandler(step) {
    this.stepClicked.emit(step);
  }
  createDefaultSteps() {
    let content = [];
    for (let i = 0; i < this.steps; i++) {
      content.push(h("ion-button", { fill: "clear", class: {
          [`step-bar`]: true,
          [`done`]: this.currentStep >= i + 1,
        }, onClick: () => {
          this.clickEventHandler(i + 1);
        }, disabled: this.currentStep < i + 1, "aria-label": this.getAriaLabel(i) }, this.currentStep > i + 1 ? h("ion-icon", { "aria-label": "", name: "checkmark" }) : h("span", null, i + 1)));
    }
    return content;
  }
  getAriaLabel(stepNo) {
    let ariaLabel = 'Step ' + (stepNo + 1);
    if (this._stepsInfo[stepNo]) {
      ariaLabel += ', ' + this._stepsInfo[stepNo];
    }
    if (this.currentStep > stepNo + 1) {
      ariaLabel += ', complete';
    }
    else if (this.currentStep == stepNo + 1) {
      ariaLabel += ', in progress';
    }
    ariaLabel += '.';
    console.debug('aria-label :', ariaLabel);
    return ariaLabel;
  }
  render() {
    return (h(Host, null,
      h("div", { class: "flex-space-between" }, this.getStepsContent())));
  }
  static get is() { return "uoa-steps-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["steps-bar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["steps-bar.css"]
  }; }
  static get properties() { return {
    "currentStep": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Current Step on the progress/step bar."
      },
      "attribute": "current-step",
      "reflect": false,
      "defaultValue": "1"
    },
    "steps": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Total Number of Steps."
      },
      "attribute": "steps",
      "reflect": false
    },
    "stepsInfo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string[] | string",
        "resolved": "string | string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array of description of steps for aria-labels."
      },
      "attribute": "steps-info",
      "reflect": false,
      "defaultValue": "[]"
    }
  }; }
  static get events() { return [{
      "method": "stepClicked",
      "name": "stepClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Step number emitted when component is clicked."
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "stepsInfo",
      "methodName": "stepsInfoWatcher"
    }]; }
}

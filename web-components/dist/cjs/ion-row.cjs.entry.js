'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eff8f523.js');
const ionicGlobal = require('./ionic-global-5f4aee1b.js');

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Row.style = rowCss;

exports.ion_row = Row;

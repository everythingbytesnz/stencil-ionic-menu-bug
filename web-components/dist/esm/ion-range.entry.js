import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-b6944460.js';
import { g as getIonMode } from './ionic-global-0ae2c4ce.js';
import { k as clamp, d as debounceEvent, j as renderHiddenInput } from './helpers-4ec226d9.js';
import { c as createColorClasses, h as hostContext } from './theme-12606872.js';

const rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;transition:transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";

const rangeMdCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{transform:scale(0.67);transition-duration:120ms;transition-property:transform, background-color, border;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;transition:transform 120ms ease, background 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;transform:rotate(-45deg);transition:background 120ms ease;background:var(--pin-background);content:\"\";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}";

const Range = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.ratioA = 0;
    this.ratioB = 0;
    /**
     * How long, in milliseconds, to wait to trigger the
     * `ionChange` event after each change in the range value.
     * This also impacts form bindings such as `ngModel` or `v-model`.
     */
    this.debounce = 0;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = '';
    /**
     * Show two knobs.
     */
    this.dualKnobs = false;
    /**
     * Minimum integer value of the range.
     */
    this.min = 0;
    /**
     * Maximum integer value of the range.
     */
    this.max = 100;
    /**
     * If `true`, a pin with integer value is shown when the knob
     * is pressed.
     */
    this.pin = false;
    /**
     * If `true`, the knob snaps to tick marks evenly spaced based
     * on the step property value.
     */
    this.snaps = false;
    /**
     * Specifies the value granularity.
     */
    this.step = 1;
    /**
     * If `true`, tick marks are displayed based on the step value.
     * Only applies when `snaps` is `true`.
     */
    this.ticks = true;
    /**
     * If `true`, the user cannot interact with the range.
     */
    this.disabled = false;
    /**
     * the value of the range.
     */
    this.value = 0;
    this.clampBounds = (value) => {
      return clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper)
        };
      }
      else {
        return this.clampBounds(value);
      }
    };
    this.setupGesture = async () => {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (await import('./index-b2ad0f1a.js')).createGesture({
          el: rangeSlider,
          gestureName: 'range',
          gesturePriority: 100,
          threshold: 0,
          onStart: ev => this.onStart(ev),
          onMove: ev => this.onMove(ev),
          onEnd: ev => this.onEnd(ev),
        });
        this.gesture.enable(!this.disabled);
      }
    };
    this.handleKeyboard = (knob, isIncrease) => {
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === 'A') {
        this.ratioA = clamp(0, this.ratioA + step, 1);
      }
      else {
        this.ratioB = clamp(0, this.ratioB + step, 1);
      }
      this.updateValue();
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
        this.emitStyle();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
        this.emitStyle();
      }
    };
  }
  debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }
  minChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
    this.emitStyle();
  }
  valueChanged(value) {
    if (!this.noUpdate) {
      this.updateRatio();
    }
    value = this.ensureValueInBounds(value);
    this.ionChange.emit({ value });
  }
  componentDidLoad() {
    this.setupGesture();
    this.didLoad = true;
  }
  connectedCallback() {
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    /**
     * If we have not yet rendered
     * ion-range, then rangeSlider is not defined.
     * But if we are moving ion-range via appendChild,
     * then rangeSlider will be defined.
     */
    if (this.didLoad) {
      this.setupGesture();
    }
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  getValue() {
    const value = this.value || 0;
    if (this.dualKnobs) {
      if (typeof value === 'object') {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    }
    else {
      if (typeof value === 'object') {
        return value.upper;
      }
      return value;
    }
  }
  emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'interactive-disabled': this.disabled
    });
  }
  onStart(detail) {
    const rect = this.rect = this.rangeSlider.getBoundingClientRect();
    const currentX = detail.currentX;
    // figure out which knob they started closer to
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (document.dir === 'rtl') {
      ratio = 1 - ratio;
    }
    this.pressedKnob =
      !this.dualKnobs ||
        Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
        ? 'A'
        : 'B';
    this.setFocus(this.pressedKnob);
    // update the active knob's position
    this.update(currentX);
  }
  onMove(detail) {
    this.update(detail.currentX);
  }
  onEnd(detail) {
    this.update(detail.currentX);
    this.pressedKnob = undefined;
  }
  update(currentX) {
    // figure out where the pointer is currently at
    // update the knob being interacted with
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (document.dir === 'rtl') {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      // snaps the ratio to the current value
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    // update which knob is pressed
    if (this.pressedKnob === 'A') {
      this.ratioA = ratio;
    }
    else {
      this.ratioB = ratio;
    }
    // Update input value
    this.updateValue();
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    return 0;
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const { min, max } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    }
    else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const { valA, valB } = this;
    this.value = !this.dualKnobs
      ? valA
      : {
        lower: Math.min(valA, valB),
        upper: Math.max(valA, valB)
      };
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  render() {
    const { min, max, step, el, handleKeyboard, pressedKnob, disabled, pin, ratioLower, ratioUpper } = this;
    const mode = getIonMode(this);
    const barStart = `${ratioLower * 100}%`;
    const barEnd = `${100 - ratioUpper * 100}%`;
    const doc = document;
    const isRTL = doc.dir === 'rtl';
    const start = isRTL ? 'right' : 'left';
    const end = isRTL ? 'left' : 'right';
    const tickStyle = (tick) => {
      return {
        [start]: tick[start]
      };
    };
    const barStyle = {
      [start]: barStart,
      [end]: barEnd
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const tick = {
          ratio,
          active: ratio >= ratioLower && ratio <= ratioUpper,
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return (h(Host, { onFocusin: this.onFocus, onFocusout: this.onBlur, class: createColorClasses(this.color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'range-disabled': disabled,
        'range-pressed': pressedKnob !== undefined,
        'range-has-pin': pin
      }) }, h("slot", { name: "start" }), h("div", { class: "range-slider", ref: rangeEl => this.rangeSlider = rangeEl }, ticks.map(tick => (h("div", { style: tickStyle(tick), role: "presentation", class: {
        'range-tick': true,
        'range-tick-active': tick.active
      }, part: tick.active ? 'tick-active' : 'tick' }))), h("div", { class: "range-bar", role: "presentation", part: "bar" }), h("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle, part: "bar-active" }), renderKnob(isRTL, {
      knob: 'A',
      pressed: pressedKnob === 'A',
      value: this.valA,
      ratio: this.ratioA,
      pin,
      disabled,
      handleKeyboard,
      min,
      max
    }), this.dualKnobs && renderKnob(isRTL, {
      knob: 'B',
      pressed: pressedKnob === 'B',
      value: this.valB,
      ratio: this.ratioB,
      pin,
      disabled,
      handleKeyboard,
      min,
      max
    })), h("slot", { name: "end" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "min": ["minChanged"],
    "max": ["maxChanged"],
    "disabled": ["disabledChanged"],
    "value": ["valueChanged"]
  }; }
};
const renderKnob = (isRTL, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }) => {
  const start = isRTL ? 'right' : 'left';
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  return (h("div", { onKeyDown: (ev) => {
      const key = ev.key;
      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      }
      else if (key === 'ArrowRight' || key === 'ArrowUp') {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, class: {
      'range-knob-handle': true,
      'range-knob-a': knob === 'A',
      'range-knob-b': knob === 'B',
      'range-knob-pressed': pressed,
      'range-knob-min': value === min,
      'range-knob-max': value === max
    }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && h("div", { class: "range-pin", role: "presentation", part: "pin" }, Math.round(value)), h("div", { class: "range-knob", role: "presentation", part: "knob" })));
};
const ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  return clamp(min, value, max);
};
const valueToRatio = (value, min, max) => {
  return clamp(0, (value - min) / (max - min), 1);
};
Range.style = {
  ios: rangeIosCss,
  md: rangeMdCss
};

export { Range as ion_range };

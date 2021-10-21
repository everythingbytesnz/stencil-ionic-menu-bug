import { Component, Event, h, Host, Prop, State, Watch } from '@stencil/core';
export class SearchAutocomplete {
  constructor() {
    /**
     * Place holder text for search field..
     */
    this.placeholder = 'Search ...';
    /**
     * Show Search button with search field.
     */
    this.searchButton = true;
    this._previousValue = '';
    this._searchValue = '';
    this._options = [];
    this.filteredOptions = [];
  }
  optionsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._options = JSON.parse(newValue);
    }
    else {
      this._options = newValue;
    }
  }
  componentWillLoad() {
    this.optionsWatcher(this.options);
    if (this.searchValue && this._options.length > 0) {
      this._previousValue = this.searchValue;
      this.handleChange(this.searchValue);
    }
  }
  _filter(value) {
    const filterValue = value.toLocaleLowerCase();
    return this._options.filter(option => {
      return option.toLowerCase().indexOf(filterValue) !== -1;
    });
  }
  updateInputValue(value) {
    this._searchValue = value;
  }
  resetOptions() {
    this.filteredOptions = [];
  }
  handleChange(value) {
    this._searchValue = value;
    this.filteredOptions = value.trim() != '' ? this._filter(this._searchValue) : [];
  }
  emitSearchValue(value) {
    this.updateInputValue(value);
    this.resetOptions();
    this.searchedText.emit(this._searchValue);
    this.focusSearchField();
    this._previousValue = this._searchValue;
    console.debug('Search Value Emitted', this._searchValue);
  }
  resetSearchField() {
    this._searchValue = '';
    this.focusSearchField();
  }
  focusSearchField() {
    this.searchInput.setFocus();
  }
  showClearButton() {
    if (this._searchValue) {
      return (h("ion-button", { size: "small", fill: "clear", type: "reset", onClick: () => this.resetSearchField(), "aria-label": "Clear search field" },
        h("ion-icon", { src: "assets/icons/close-filled.svg", "aria-hidden": "true" })));
    }
  }
  showAutoComplete() {
    if (this.filteredOptions.length > 0) {
      return (h("ion-list", { class: "autocomplete-items" },
        h("ul", { role: "listbox", onKeyDown: e => this._handleKeydownListItem(e), ref: el => (this.ionList = el) }, this.filteredOptions.map((option, index) => {
          let id = 'items-' + index;
          return (h("li", { key: id, id: id, role: "option", onClick: _ => this.emitSearchValue(option) }, option));
        }))));
    }
  }
  AddAriaSuggestions() {
    if (this.filteredOptions.length > 0) {
      return 'There are ' + this.filteredOptions.length + ' suggestions. Use the up and down arrows to browse.';
    }
  }
  showSearchButton() {
    if (this.searchButton) {
      return (h("ion-button", { color: "primary", expand: "full", fill: "solid", onClick: _ => this.emitSearchValue(this._searchValue) },
        h("ion-icon", { name: "search", slot: "icon-only" })));
    }
  }
  render() {
    return (h(Host, null,
      h("ion-item", { lines: "none" },
        h("div", { class: "input-field" },
          h("div", { class: "suggestions-help", role: "status", "aria-live": "polite" }, this.AddAriaSuggestions()),
          h("ion-input", { placeholder: this.placeholder, "data-suggest": true, type: "text", autocomplete: "off", value: this._searchValue, onInput: e => this._handleInput(e), ref: el => (this.searchInput = el), onKeyDown: e => this._handleKeydown(e), "aria-autocomplete": "list" }),
          this.showClearButton()),
        this.showSearchButton()),
      this.showAutoComplete()));
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    // If the input has a placeholder, IE will fire the `input` event on page load,
    // focus and blur, in addition to when the user actually changed the value. To
    // filter out all of the extra events, we save the value on focus and between
    // `input` events, and we check whether it changed.
    // See: https://connect.microsoft.com/IE/feedback/details/885747/
    if (this._previousValue !== value) {
      this._previousValue = value;
      this.handleChange(value);
    }
  }
  _handleKeydown(event) {
    const code = event.keyCode;
    const keyCode = event.code;
    if (code == 40 || keyCode == 'ArrowDown') {
      if (this.ionList) {
        this.ionList.setAttribute('tabindex', '0');
        this.ionList.focus();
        this.ionList.firstElementChild.classList.add('autocomplete-active');
        this.newOption = this.ionList.firstElementChild;
        this.addAttributes();
        this.updateInputValue(this.filteredOptions[0]);
      }
    }
    else if (code == 9 || code == 13 || keyCode === 'Enter' || keyCode === 'Tab' || code === 27 || keyCode === 'Escape') {
      this.updateInputValue(this._searchValue + '  ');
      this.emitSearchValue(this._searchValue.trim());
    }
  }
  _handleKeydownListItem(event) {
    const code = event.keyCode;
    const keyCode = event.code;
    event.preventDefault();
    if (code === 27 || keyCode === 'Escape') {
      this.emitSearchValue(this._previousValue.trim());
      return;
    }
    if (code == 40 || keyCode == 'ArrowDown') {
      /*If the arrow DOWN key is pressed,   get next sibling:*/
      this.newOption = this.newOption ? (this.newOption.nextSibling ? this.newOption.nextSibling : this.ionList.firstElementChild) : undefined;
    }
    else if (code == 38 || keyCode == 'ArrowUp') {
      /*If the arrow UP key is pressed, get previous sibling:*/
      this.newOption = this.newOption ? this.newOption.previousSibling : this.ionList.lastElementChild;
    }
    else if (code == 13 || code == 9 || keyCode === 'Enter' || keyCode === 'Tab') {
      event.stopPropagation();
      this.focusSearchField();
      this.resetOptions();
      this.updateInputValue(this._previousValue);
      this.newOption.click();
    }
    if (this.newOption) {
      this.removeActive();
      this.newOption.classList.add('autocomplete-active');
      this.updateInputValue(this.newOption.innerText);
      this.addAttributes();
    }
  }
  addAttributes() {
    this.ionList.setAttribute('aria-activedescendant', this.newOption.getAttribute('id'));
  }
  removeActive() {
    /*a function to remove the "active" class from all autocomplete items:*/
    let list = this.ionList.getElementsByClassName('autocomplete-active');
    for (var i = 0; i < list.length; i++) {
      list[i].classList.remove('autocomplete-active');
    }
  }
  static get is() { return "uoa-search-autocomplete"; }
  static get originalStyleUrls() { return {
    "$": ["search-autocomplete.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["search-autocomplete.css"]
  }; }
  static get properties() { return {
    "searchValue": {
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
        "text": "Default Search string."
      },
      "attribute": "search-value",
      "reflect": false
    },
    "options": {
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
        "text": "List of data to use for auto complete."
      },
      "attribute": "options",
      "reflect": false
    },
    "placeholder": {
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
        "text": "Place holder text for search field.."
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "'Search ...'"
    },
    "searchButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show Search button with search field."
      },
      "attribute": "search-button",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "_previousValue": {},
    "_searchValue": {},
    "_options": {},
    "filteredOptions": {},
    "newOption": {}
  }; }
  static get events() { return [{
      "method": "searchedText",
      "name": "searchedText",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Searched string emitted."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "options",
      "methodName": "optionsWatcher"
    }]; }
}

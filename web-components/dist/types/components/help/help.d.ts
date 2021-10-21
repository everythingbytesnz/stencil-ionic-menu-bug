export declare class UoaHelp {
  /**
   * Clickable text of Link
   */
  linkText: string;
  /**
   * Title of the modal
   */
  modalTitle: string;
  /**
   * Html Content of the modal. It can be passed as a property/attribute or as html content inside uoa-help tag.
   */
  htmlContent?: string;
  el: HTMLElement;
  helpLink: HTMLAnchorElement;
  private _presentModal;
  handleKeyDown(ev: KeyboardEvent): void;
  private _setLinkFocus;
  render(): any;
}

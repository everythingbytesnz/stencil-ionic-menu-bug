import { ComponentDidLoad } from '../../../stencil-public-runtime';
export declare class HelpModal implements ComponentDidLoad {
  private _container;
  /**
   * Title of the modal
   */
  modalTitle: string;
  /**
   * Html Content of the modal
   */
  htmlContent: string;
  private _focusDialogContent;
  componentDidLoad(): void;
  private _close;
  render(): any[];
}

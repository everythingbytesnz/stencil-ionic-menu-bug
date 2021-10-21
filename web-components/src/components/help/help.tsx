import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'uoa-help',
  shadow: true,
})
export class UoaHelp {
  @Prop() linkText: string = 'Help';
  @Prop() modalTitle: string = 'Help';
  @Prop({ mutable: true }) htmlContent?: string;

  @Element() el: HTMLElement;

  render() {
    return <div>Test help</div>;
  }
}

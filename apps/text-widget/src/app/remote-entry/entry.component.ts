import { Component } from '@angular/core';

@Component({
  selector: 'mfe-text-widget-entry',
  template: `hello, I am text widget`,
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 auto;
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

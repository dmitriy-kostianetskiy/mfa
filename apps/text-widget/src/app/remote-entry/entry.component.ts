import { Component } from '@angular/core';

@Component({
  selector: 'mfe-text-widget-entry',
  template: `<div class="widget">hello, I am text widget</div>`,
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 auto;
      }

      .widget {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

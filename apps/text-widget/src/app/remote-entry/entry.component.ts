import { Component } from '@angular/core';

@Component({
  selector: 'mfe-text-widget-entry',
  template: `<div class="remote-entry">
    <h2>text-widget's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

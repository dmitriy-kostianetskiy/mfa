import { Component } from '@angular/core';

@Component({
  selector: 'mfe-image-widget-entry',
  template: ` <img
    src="https://angular.io/assets/images/logos/angular/angular.svg"
    alt="Full color logo Angular"
    width="80"
    height="80"
  />`,
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        background-color: #551414;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

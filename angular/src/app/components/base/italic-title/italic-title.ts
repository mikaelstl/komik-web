import { Component } from '@angular/core';

@Component({
  selector: 'italic-title',
  imports: [],
  template: `
    <i class="kmk-italic-title"><ng-content/></i>
  `,
  styles: `
    .kmk-italic-title {
      font-size: 24px;
      font-weight: 600;
    }
  `,
})
export class ItalicTitle {

}

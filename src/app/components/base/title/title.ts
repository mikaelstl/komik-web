import { Component } from '@angular/core';

@Component({
  selector: 'kmk-title',
  imports: [],
  template: `
    <h3 id="kmk-title"><ng-content/></h3>
  `,
  styles: `
    #kmk-title {
      font-weight: 600;
    }
  `,
})
export class Title {

}

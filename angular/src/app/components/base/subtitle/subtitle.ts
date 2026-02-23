import { Component } from '@angular/core';

@Component({
  selector: 'subtitle',
  imports: [],
  template: `
    <p id="kmk-subtitle"><ng-content/></p>
  `,
  styleUrl: './subtitle.scss',
})
export class Subtitle {

}

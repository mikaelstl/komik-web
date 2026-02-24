import { Component } from '@angular/core';

@Component({
  selector: 'highlight-caption',
  imports: [],
  template: `
    <p class="kmk-caption"><ng-content/></p>
  `,
  styleUrl: './highlight-caption.scss',
})
export class HighlightCaption {}

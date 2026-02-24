import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroBookOpenSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'read-btn',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroBookOpenSolid
    })
  ],
  template: `
    <input
      type="file"
      name="comic-picker"
      id="comic-picker"
      accept="cbz, cbr"
    >
    <button class="kmk-read-btn" type="button">
      <ng-icon name="heroBookOpenSolid" size="20"/>
      Read
    </button>
  `,
  styleUrl: './read-btn.scss',
})
export class ReadBtn {

}

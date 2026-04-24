import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroMagnifyingGlassSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'search-field',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      heroMagnifyingGlassSolid
    })
  ],
  templateUrl: './search-field.html',
  styleUrl: './search-field.scss',
})
export class SearchField {

}

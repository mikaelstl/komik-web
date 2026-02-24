import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBookOpenMini } from '@ng-icons/heroicons/mini';
import { heroBookOpenSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'comic-image',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      heroBookOpenSolid
    })
  ],
  templateUrl: './comic-image.html',
  styleUrl: './comic-image.scss',
})
export class ComicImage {
  @Input() image?: string = '';

  @Input() alt?: string;
}

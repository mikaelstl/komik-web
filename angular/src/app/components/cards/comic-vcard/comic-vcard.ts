import { Component } from '@angular/core';
import { Title } from '../../base/title/title';
import { ComicImage } from '../comic-image/comic-image';
import { Subtitle } from '../../base/subtitle/subtitle';

@Component({
  selector: 'comic-vcard',
  imports: [
    Title,
    Subtitle,
    ComicImage
  ],
  templateUrl: './comic-vcard.html',
  styleUrl: './comic-vcard.scss',
})
export class ComicVCard {

}

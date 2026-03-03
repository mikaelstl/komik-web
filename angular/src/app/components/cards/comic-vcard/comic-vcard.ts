import { Component, HostListener, Input } from '@angular/core';
import { Title } from '../../base/title/title';
import { ComicImage } from '../comic-image/comic-image';
import { Subtitle } from '../../base/subtitle/subtitle';
import { Router } from '@angular/router';
import { ComicInfos } from '../../misc/comic-infos/comic-infos';

@Component({
  selector: 'comic-vcard',
  imports: [
    ComicImage,
    ComicInfos
  ],
  templateUrl: './comic-vcard.html',
  styleUrl: './comic-vcard.scss',
})
export class ComicVCard {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() edition: string = '';

  @Input() cover?: Blob;

  constructor (private router: Router) {}

  @HostListener('click', ['$event'])
  read(event: MouseEvent) {
    console.log();
    
    this.router.navigate(['/reader'])
  }
}

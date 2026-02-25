import { Component } from '@angular/core';
import { Title } from '../../base/title/title';
import { Subtitle } from '../../base/subtitle/subtitle';

@Component({
  selector: 'comic-infos',
  imports: [
    Title,
    Subtitle,
  ],
  templateUrl: './comic-infos.html',
  styleUrl: './comic-infos.scss',
})
export class ComicInfos {

}

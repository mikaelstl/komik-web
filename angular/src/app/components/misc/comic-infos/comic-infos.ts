import { Component, Input } from '@angular/core';
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
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() edition: string = '';
}

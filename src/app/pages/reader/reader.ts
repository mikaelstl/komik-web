import { Component } from '@angular/core';
import { ComicInfos } from "../../components/misc/comic-infos/comic-infos";
import { ComicImage } from "../../components/cards/comic-image/comic-image";
import { ChangePageBtns } from "../../components/buttons/change-page-btns/change-page-btns";
import { Title } from "../../components/base/title/title";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroChevronLeftSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'reader',
  imports: [
    ComicInfos,
    ComicImage,
    ChangePageBtns,
    Title,
    NgIcon
  ],
  providers: [
    provideIcons({
      heroChevronLeftSolid
    })
  ],
  templateUrl: './reader.html',
  styleUrl: './reader.scss',
})
export class ReaderPage {

}

import { Component } from '@angular/core';
import { AppBar } from '../../components/toolbars/app-bar/app-bar';
import { ComicVCard } from '../../components/cards/comic-vcard/comic-vcard';
import { Title } from "../../components/base/title/title";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroBookmarkSolid, heroChevronDownSolid, heroChevronUpSolid } from '@ng-icons/heroicons/solid';
import { HighlightCaption } from "../../components/base/highlight-caption/highlight-caption";

@Component({
  selector: 'app-library',
  imports: [
    ComicVCard,
    AppBar,
    Title,
    NgIcon,
    HighlightCaption
],
  providers: [
    provideIcons({
      heroBookmarkSolid,
      heroChevronDownSolid,
      heroChevronUpSolid
    })
  ],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class LibraryPage {
  comics: number[] = Array.from({length: 12}, (_, i) => i);
}

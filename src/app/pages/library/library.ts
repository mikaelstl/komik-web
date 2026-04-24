import { Component } from '@angular/core';
import { AppBar } from '../../components/toolbars/app-bar/app-bar';
import { ComicVCard } from '../../components/cards/comic-vcard/comic-vcard';
import { Title } from "../../components/base/title/title";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroBookmarkSolid, heroChevronDownSolid, heroChevronUpSolid } from '@ng-icons/heroicons/solid';
import { HighlightCaption } from "../../components/base/highlight-caption/highlight-caption";
import { Comic } from '../../service/models/Comic';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { liveQuery } from 'dexie';
import { database } from '../../service/db/db';
import { ItalicTitle } from '../../components/base/italic-title/italic-title';

@Component({
  selector: 'app-library',
  imports: [
    ComicVCard,
    AppBar,
    Title,
    NgIcon,
    HighlightCaption,
    ItalicTitle
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
  comics = toSignal(
    from(liveQuery(() => database.comics.toArray())),
    { initialValue: [] as Comic[]}
  );

  createCoverURL(cover?: Blob): string {
    if (cover) {
      const url = URL.createObjectURL(cover)
      return url;
    } else {
      return '';
    }
  }
}

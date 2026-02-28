import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroBookOpenSolid } from '@ng-icons/heroicons/solid';
import { ComicLoaderService } from '../../../service/comic-loader.service';

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
      (change)="choseFile($event)"
    #hiddenfileinput>

    <button 
      class="kmk-read-btn"
      type="button"
      (click)="hiddenfileinput.click()">
      <ng-icon name="heroBookOpenSolid" size="20"/>
      Read
    </button>
  `,
  styleUrl: './read-btn.scss',
})
export class ReadBtn {
  private file: File | null = null;

  constructor(private comicLoader: ComicLoaderService) { }

  async choseFile(event: any) {
    event.preventDefault();
    this.file = event.target?.files[0];

    try {
      if (this.file) {
        const comic: Comic = this.comicLoader.extractInfos(this.file.name);
        console.log(comic);

        const result = await this.comicLoader.extractCover(this.file) as ArrayBuffer[];
        comic.cover = new Blob([new Uint8Array(result[0])], { type: this.file.type });
        
        console.log(comic);
      } else {
        alert('No file selected')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

type Comic = {
  title: string;
  subtitle: string;
  edition: string;
  cover: Blob | undefined;
  key: string;
  reading: boolean;
}
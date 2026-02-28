import { Injectable } from '@angular/core';
import { ComicLoaderService } from '../comic-loader.service';
import { Comic } from '../models/Comic';
import { ComicFile } from '../models/ComicFile';
import { database } from '../db/db';

@Injectable({
  providedIn: 'root',
})
export class ComicManager {

  constructor(private comicLoader: ComicLoaderService) { }
  
  async save(file: File) {
    try {
      const comic: Comic = this.comicLoader.extractInfos(file.name);
      console.log(comic)
      
      const result = await this.comicLoader.extractCover(file) as ArrayBuffer[];
      comic.cover = new Blob([new Uint8Array(result[0])], { type: file.type });
    
      await database.comics.add(comic);

      const comicfile: ComicFile = {
        filename: file?.name ?? 'Not name',
        comicKey: comic.key,
        blob: file
      }

      await database.files.add(comicfile);
    } catch (err: any) {
      console.log(err);
      alert('ERROR <'+err+'>')
    }
  }
}

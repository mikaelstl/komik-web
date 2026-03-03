import { Injectable, NgModule } from "@angular/core";
import { Archive } from "libarchive.js";
import { WorkerListnerData } from "./workers/archives.worker";

@Injectable({
  providedIn: 'root'
})
export class ComicLoaderService {
  private readonly worker: Worker;
  
  constructor () {
    this.worker = new Worker(
      new URL('./workers/archives.worker', import.meta.url)
    );
  }
  
  extractInfos(filename: string) {
    const ComicTypes = /\.(cbz|cbr)$/i;

    try {
      const [title, rest] = filename.replace(ComicTypes, '').split('#');
      const [edition, subtitle] = rest.split('-');

      return {
        title,
        subtitle,
        edition,
        cover: null,
        key: `${title}#${edition}`,
        reading: false
      }
    } catch (error) {
      console.error(error);

      const title = filename.replace('.cbz', '');

      return {
        title,
        subtitle:'',
        edition: '',
        cover: null,
        key: title,
        reading: false
      }
    }
  }

  async fetchCover(file: File) {
    return new Promise(
      (resolve, reject) => {
        if (!this.worker) {
          reject('Your browser no supports WebWorker')
          return;
        }

        this.worker.onmessage = ({ data }) => {
          if (data.error) {
            reject(data.error);
          } else {
            resolve(data);
          }
        }

        this.worker.postMessage({ action: 'cover', payload: file});
      }
    );
  }
}
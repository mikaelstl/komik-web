import { Injectable, NgModule } from "@angular/core";
import { Archive } from "libarchive.js";
import { WorkerListnerData } from "./workers/archives.worker";

@Injectable({
  providedIn: 'root'
})
export class ComicExtractorService {
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
        cover: undefined,
        key: `${title}#${edition}`,
        reading: true
      }
    } catch (error) {
      console.error(error);

      const [title, subtitle] = filename.replace('.cbz', '').split('-');

      return {
        title,
        subtitle,
        edition: '',
        cover: undefined,
        key: title,
        reading: true
      }
    }
  }

  async extractCover(file: File): Promise<Blob> {
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
            resolve(data.blob)
          }
        }

        this.worker.postMessage({ action: 'cover', payload: file});
      }
    );
  }

  async extractPages(file: File): Promise<Blob[] | undefined> {
    const ImageTypes = /\.(jpg|jpeg|png|gif)$/i;

    if (
      file.type !== "application/vnd.comicbook+zip"
      &&
      file.type !== "application/vnd.comicbook-rar"
      &&
      this.isSupportedFiles(file as File)
    ) {
      alert('Arquivo não suportado');
    }

    try {
      const archive = await Archive.open(file);

      const data = await archive.extractFiles();

      const content: File[] = Object.values(data);
      content.sort((a, b) => a.name.localeCompare(b.name));

      if (!content) {
        alert("Nenhuma imagem encontrada no arquivo.");
        return undefined;
      }

      const pages: Blob[] = [];

      for (const image of content) {
        if (image.name.match(ImageTypes)) {
          const buffer = await image.arrayBuffer()
          const blob = new Blob([new Uint8Array(buffer)], { type: file.type });
          pages.push(blob);
        }
      }

      archive.close();

      return pages;
    } catch (error) {
      console.error("Erro ao extrair capa:", error);

      throw error;
    }
  }

  private isSupportedFiles(file: File) {
    const ComicTypes = /\.(cbz|cbr)$/i;

    return !file.name.match(ComicTypes) ? false : true;
  }
}
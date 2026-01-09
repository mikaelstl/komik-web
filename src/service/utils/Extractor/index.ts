import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";
import { createExtractorFromData, Extractor } from "node-unrar-js";

class Decoder {
  private readonly reader: ZipReader<File>;
  // private readonly extractor;

  private readonly supportedTypes = /\.(jpg|jpeg|png|gif)$/i;


  constructor(file: File) {
    this.reader = new ZipReader(new BlobReader(file), { useWebWorkers: false });

    // file.arrayBuffer().then(
    //   (buff) => {
    //     this.extractor = createExtractorFromData({ data: buff })
    //   }
    // );
  }

  public async fromZip(): Promise<Blob | undefined> {
    try {
      const entries = await this.reader.getEntries();

      const entry: any = entries
        .filter(e => e.filename.match(this.supportedTypes) && !e.directory)
        .sort((a, b) => a.filename.localeCompare(b.filename))[0];

      console.log(entry);

      if (!entry) {
        alert("Nenhuma imagem encontrada no arquivo.");
        return undefined;
      }

      const blob = await entry.getData(new BlobWriter(entry.mimeType));
      return blob;
    } catch (error) {
      console.error("Erro ao extrair imagem:", error);

      throw error;
    } finally {
      await this.reader.close();
    }
  }

  // public fromRar() {
  //   try {
  //     const entries = await reader.getEntries();

  //     const entry: any = entries
  //       .filter(e => e.filename.match(supportedTypes) && !e.directory)
  //       .sort((a, b) => a.filename.localeCompare(b.filename))[0];

  //     console.log(entry);

  //     if (!entry) {
  //       alert("Nenhuma imagem encontrada no arquivo.");
  //       return null;
  //     }

  //     const blob = await entry.getData(new BlobWriter(entry.mimeType));
  //     return blob;
  //   } catch (error) {
  //     console.error("Erro ao extrair capa:", error);

  //     throw error;
  //   } finally {
  //     await reader.close();
  //   }
  // }
}
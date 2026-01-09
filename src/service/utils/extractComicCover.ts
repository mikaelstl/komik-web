import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

import { Archive } from "libarchive.js";

export async function extractComicCover(file: File): Promise<Blob | undefined> {
  Archive.init({
    workerUrl: 'libarchive.js/dist/worker-bundle.js'
  })

  const ImageTypes = /\.(jpg|jpeg|png|gif)$/i;
  const ComicTypes = /\.(cbz|cbr)$/i;

  if (
    file.type !== "application/vnd.comicbook+zip"
    &&
    file.type !== "application/vnd.comicbook-rar"
    &&
    !file.name.match(ComicTypes)) {
    alert('Arquivo não suportado');
  }

  const reader = new ZipReader(new BlobReader(file), { useWebWorkers: false });
  
  try {
    const archive = await Archive.open(file);

    const content = await archive.extractFiles();
    
    // const entries = await reader.getEntries();

    // const entry: any = entries
    //                 .filter(e => e.filename.match(supportedTypes) && !e.directory)
    //                 .sort((a, b) => a.filename.localeCompare(b.filename))[0];

    // console.log(entry);

    console.log("CONTENT >>>>>>>");
    console.log(content);
    

    if (!content) {
      alert("Nenhuma imagem encontrada no arquivo.");
      return undefined;
    }
    
    archive.close();
    // const blob = await entry.getData(new BlobWriter(entry.mimeType));
    return new Blob();
  } catch (error) {
    console.error("Erro ao extrair capa:", error);
    
    throw error;
  } finally {
    await reader.close();
  }
}
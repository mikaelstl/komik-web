import { Archive } from "libarchive.js";

export async function extractComicCover(file: File): Promise<ArrayBuffer[]> {
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

  const archive = await Archive.open(file);

  const data = await archive.extractFiles();
  
  const content = Object.values(data)[0] as Object;

  for (const key in content) {
    console.log(content[key]);
    
  }

  // const cover: File = files
  //   .filter(file => file.name.match(ImageTypes))
  //   .sort((a, b) => a.name.localeCompare(b.name))[0];

  // if (!content) {
  //   alert("Nenhuma imagem encontrada no arquivo.");
  //   return [];
  // }

  // archive.close();

  // const buffer = await cover.arrayBuffer();
  
  return [];
  // return [new Blob([new Uint8Array(buffer)], { type: file.type })];
}

type ComicTypesT = 'cbz' | 'cbr';
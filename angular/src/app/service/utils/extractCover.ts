import { Archive } from "libarchive.js";

type ArchiveResult = {
  [key: string]: any
}

export async function fetchCover(file: File):  Promise<ArrayBuffer[]> {
  const data = await extract(file);
  return extractCover(data);
}

async function extract(file: File): Promise<any> {
  const ComicTypes = /\.(cbz|cbr)$/i;

  if (
    file.type !== "application/vnd.comicbook+zip"
    &&
    file.type !== "application/vnd.comicbook-rar"
    &&
    !file.name.match(ComicTypes))
  {
    alert('Arquivo não suportado');
  }

  const archive = await Archive.open(file);

  const data = await archive.extractFiles();

  archive.close();

  return data;
}

async function extractCover(data: any): Promise<ArrayBuffer[]> {
  const ImageTypes = /\.(jpg|jpeg|png|gif)$/i;

  const keys = Object.keys(data);

  if (keys.length === 1) {
    return extractCover(data[keys[0]])
  }

  // PROBLEMA QUE ESTÁ OCORRENDO É QUE content PODE CAPTURAR UM OBJECT NÃO SÓ ARRAYS
  /* // GAMBIARRA
  for (const obj of content) {
    const keys = Object.keys(obj);

    if (keys.length > 0) {
      console.log(keys);
    }
  } */
  const files: File[] = Object.values(data);

  const cover: File = files
    .filter(file => file.name.match(ImageTypes))
    .sort((a, b) => a.name.localeCompare(b.name))[0];

  if (!files) {
    alert("No images found in the file.");
    return [];
  }

  const buffer = await cover.arrayBuffer();
  
  return [buffer];
}
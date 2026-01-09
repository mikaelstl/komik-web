import { Archive } from "libarchive.js";

function isSupportedFiles(file: File) {
  const ComicTypes = /\.(cbz|cbr)$/i;

  return !file.name.match(ComicTypes) ? false : true;
}

export async function extractPages(file: File): Promise<Blob[] | undefined> {
  Archive.init({
    workerUrl: '/libarchive/worker-bundle.js'
  })

  const ImageTypes = /\.(jpg|jpeg|png|gif)$/i;

  if (
    file.type !== "application/vnd.comicbook+zip"
    &&
    file.type !== "application/vnd.comicbook-rar"
    &&
    isSupportedFiles(file as File)
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
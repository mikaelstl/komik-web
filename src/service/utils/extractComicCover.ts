import { Archive } from "libarchive.js";

export async function extractComicCover(file: File): Promise<Blob | undefined> {
  Archive.init({
    workerUrl: '/libarchive/worker-bundle.js'
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

  try {
    const archive = await Archive.open(file);

    const data = await archive.extractFiles();

    const content: File[] = Object.values(data);
    
    const cover: File = content
                    .filter(file => file.name.match(ImageTypes))
                    .sort((a, b) => a.name.localeCompare(b.name))[0];

    if (!content) {
      alert("Nenhuma imagem encontrada no arquivo.");
      return undefined;
    }
    
    archive.close();
    // const blob = await entry.getData(new BlobWriter(entry.mimeType));
    const buffer = await cover.arrayBuffer()
    return new Blob([new Uint8Array(buffer)], { type: file.type });
  } catch (error) {
    console.error("Erro ao extrair capa:", error);
    
    throw error;
  }
}
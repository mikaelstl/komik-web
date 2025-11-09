import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

export async function extractComicCover(file: File) {
  const supportedTypes = /\.(jpg|jpeg|png|gif)$/i;

  if (file.type !== "application/vnd.comicbook+zip" && !file.name.toLowerCase().endsWith(".cbz")) {
    alert('Arquivo não suportado');
  }

  const reader = new ZipReader(new BlobReader(file));
  
  try {
    const entries = await reader.getEntries();

    const entry: any = entries
                    .filter(e => e.filename.match(supportedTypes) && !e.directory)
                    .sort((a, b) => a.filename.localeCompare(b.filename))[0];

    let cover;
    if (entry.getData) {
      const blob = await entry.getData(new BlobWriter(entry.mimeType));
      cover = URL.createObjectURL(blob)
    }

    return cover;
  } catch (error) {
    alert('ERRO: '+error);
  } finally {
    await reader.close();
  }
}
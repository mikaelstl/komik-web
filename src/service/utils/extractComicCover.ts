import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

export async function extractComicCover(file: File) {
  const supportedTypes = /\.(jpg|jpeg|png|gif)$/i;

  if (file.type !== "application/vnd.comicbook+zip" && !file.name.toLowerCase().endsWith(".cbz")) {
    alert('Arquivo não suportado');
  }

  const reader = new ZipReader(new BlobReader(file), { useWebWorkers: false });
  
  try {
    const entries = await reader.getEntries();

    const entry: any = entries
                    .filter(e => e.filename.match(supportedTypes) && !e.directory)
                    .sort((a, b) => a.filename.localeCompare(b.filename))[0];

    console.log(entry);
    
    if (!entry) {
      alert("Nenhuma imagem encontrada no arquivo.");
      return null;
    }
    
    const blob = await entry.getData(new BlobWriter(entry.mimeType));
    return blob;
  } catch (error) {
    console.error("Erro ao extrair capa:", error);
    
    throw error;
  } finally {
    await reader.close();
  }
}
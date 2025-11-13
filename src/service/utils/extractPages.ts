import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

function isSupportedFiles(file: File) {
  return !file.name.toLowerCase().endsWith(".cbz") ? false : true;
}

export async function extractPages(file: File | Blob): Promise<Blob[]> {
  const supportedTypes = /\.(jpg|jpeg|png|gif)$/i;

  if (file.type !== "application/vnd.comicbook+zip" && isSupportedFiles(file as File)) {
    alert('Arquivo não suportado');
  }

  const reader = new ZipReader(new BlobReader(file), { useWebWorkers: false });
  
  try {
    const entries = await reader.getEntries();

    const content: any = entries
                    .filter(e => e.filename.match(supportedTypes) && !e.directory)
                    .sort((a, b) => a.filename.localeCompare(b.filename));

    console.log(content);
    
    if (!content) {
      alert("No images found in file.");
      return [];
    }
    
    const pages: Blob[] = [];

    for (const image of content) {
      const blob = await image.getData(new BlobWriter(image.mimeType));
      pages.push(blob);
    }

    return pages;
  } catch (error) {
    console.error("ERROR to extract pages:", error);
    
    throw error;
  } finally {
    await reader.close();
  }
}
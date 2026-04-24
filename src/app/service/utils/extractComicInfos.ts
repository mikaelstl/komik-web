// import type { Comic } from "../models/Comic";

export function extractComicInfos(filename: string) {
  const ComicTypes = /\.(cbz|cbr)$/i;
  
  try {
    const [ title, rest ] = filename.replace(ComicTypes, '').split('#');
    const [ edition, subtitle ] = rest.split('-');
  
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

    const [ title, subtitle ] = filename.replace('.cbz', '').split('-');

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
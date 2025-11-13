import type { Comic } from "../models/Comic";

export function extractComicInfos(filename: string): Comic {
  const [ title, rest ] = filename.replace('.cbz', '').split('#');
  const [ edition, subtitle ] = rest.split('-');

  return {
    title,
    subtitle,
    edition,
    cover: null,
    key: filename,
    reading: true
  }
}
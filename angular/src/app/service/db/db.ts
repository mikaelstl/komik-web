import Dexie, { type EntityTable } from "dexie";
import type { Comic } from "../models/Comic";
import type { ComicFile } from "../models/ComicFile";
import type { ReadingComic } from "../models/Reading";

const database = new Dexie('komikDB') as Dexie & {
  comics: EntityTable<Comic, 'id'>,
  files: EntityTable<ComicFile, 'id'>,
  reading: EntityTable<ReadingComic, 'id'>
};

database.version(1).stores({
  comics: '++id, &key, title, subtitle, edition, cover, path, reading',
  files: '++id, &comicKey, filename, blob',
  reading: '++id, &comicKey, &comicId, actualPage'
});

export { database }
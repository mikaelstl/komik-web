import Dexie, { type EntityTable } from "dexie";
import type { Comic } from "../models/Comic";
import type { ComicFile } from "../models/ComicFile";

export const database = new Dexie('komikDB') as Dexie & {
  comics: EntityTable<Comic, 'id'>,
  files: EntityTable<ComicFile, 'id'>
};

database.version(1).stores({
  comics: '++id, &key, title, subtitle, edition, cover, path, reading',
  files: '++id, &comicKey, filename, subtitle, edition, cover, path, reading'
})
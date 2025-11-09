import Dexie, { type EntityTable } from "dexie";
import type { Comic } from "../models/Comic";

export const database = new Dexie('komikDB') as Dexie & {
  comics: EntityTable<Comic, 'id'>
};

database.version(1).stores({
  comics: '++id, title, subtitle, edition, cover, path, reading'
})
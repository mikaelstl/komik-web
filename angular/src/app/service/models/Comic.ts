export interface Comic {
  id?: number;
  key: string;
  title: string;
  subtitle: string;
  edition: string;
  cover: Blob | null;
  reading: boolean;
}
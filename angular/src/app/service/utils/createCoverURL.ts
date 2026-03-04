export const createCoverURL = (cover: Blob) => {
  return URL.createObjectURL(cover);
}
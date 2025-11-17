import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Button, Container } from "./style";
import { Title } from "../../base/Title";
import { useRef } from "react";
import { extractComicInfos } from "../../../service/utils/extractComicInfos";
import { extractComicCover } from "../../../service/utils/extractComicCover";
import { database } from "../../../service/db/db";
import type { ComicFile } from "../../../service/models/ComicFile";
import { useDevice } from "../../../hooks/useDevice";

export function ReadBtn() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const device = useDevice();

  const handleClick = () => {
    fileInputRef.current?.click();
  }

  const selectFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    try {
      const file = evt.target.files?.[0] as File;

      const comic = extractComicInfos(file?.name!);
      comic.cover = await extractComicCover(file!) ?? '';

      await database.comics.add(comic);

      const comicfile: ComicFile = {
        filename: file?.name ?? 'Not name',
        comicKey: comic.key,
        blob: file
      }

      await database.files.add(comicfile);
    } catch (error: any) {
      console.log(error);
      if (error.name === 'ConstraintError') {
        alert("Quadrinho já aberto");
        return;
      }
      
      alert("Erro ao extrair capa: Arquivo não suportado ou corrompido");
    }
  }

  return (
    <Container className="k-read-btn">
      <input
        type="file"
        ref={fileInputRef}
        onChange={selectFile}
        accept="cbz, cbr"
        style={{ display: 'none' }}
      />
      <Button onClick={handleClick}>
        <BookOpenIcon width={20} />
        {device === 'mobile' ? <Title>Read</Title> : <></>}
      </Button>
    </Container>
  )
}
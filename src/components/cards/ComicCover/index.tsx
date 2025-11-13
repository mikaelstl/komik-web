import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Container, Image } from "./style";
import { Palette } from "../../../assets/Palette";

interface ComicCoverProps {
  image?: string;
}

export function ComicCover({
  image
}: ComicCoverProps) {
  return (
    <Container className="k-comic-cover">
      {
        image || image !== '' ? <Image src={image}></Image> : <BookOpenIcon width={32} fill={Palette.comic_icon}/>
      }
    </Container>
  )
}
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Container, Image } from "./style";
import { Palette } from "../../../assets/Palette";

interface ComicPageProps {
  image?: string;
  alt?: string;
}

export function ComicPage({
  image,
}: ComicPageProps) {
  return (
    <Container className="k-comic-page">
      {
        image || image !== ''
          ? <Image
              src={image}
            />
          : <BookOpenIcon width={32} fill={Palette.comic_icon}/>
      }
    </Container>
  )
}
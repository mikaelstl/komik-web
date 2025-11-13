import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Container, Image } from "./style";
import { Palette } from "../../../assets/Palette";
import { useEffect, useRef, useState } from "react";

interface ComicCoverProps {
  image?: string;
  alt?: string;
}

export function ComicCover({
  image
}: ComicCoverProps) {
  return (
    <Container className="k-comic-cover">
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
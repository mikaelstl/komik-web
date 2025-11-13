import { useNavigate } from "react-router-dom";
import { ComicCover } from "../ComicCover";
import { Container, Cover } from "./style";
import { ComicInfos } from "../../ComicInfos";
import { useEffect, useState } from "react";

interface ComicCardProps {
  title: string;
  subtitle: string;
  edition: string;

  cover?: Blob;
}

export function ComicCard({
  title,
  subtitle,
  edition,
  cover,
}: ComicCardProps) {
  const navigate = useNavigate();

  const [ coverURL, setCoverURL ] = useState<string>('');
  
  useEffect(() => {
    if (cover) {
      setCoverURL(URL.createObjectURL(cover))
    }
  },[])

  return (
    <Container className="k-comic-v-card"
      onClick={() => navigate("/reader")}
    >
      <Cover>
        <ComicCover image={coverURL}/>
      </Cover>
      <ComicInfos
        title={title}
        subtitle={subtitle}
        edition={edition}
      />
    </Container>
  )
}
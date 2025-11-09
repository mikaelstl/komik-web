import { useNavigate } from "react-router-dom";
import { ComicCover } from "../ComicCover";
import { Container, Cover } from "./style";
import { ComicInfos } from "../../ComicInfos";

interface ComicCardProps {
  title: string;
  subtitle: string;
  edition: string;

  cover?: string;
}

export function ComicCard({
  title,
  subtitle,
  edition,
  cover,
}: ComicCardProps) {
  const navigate = useNavigate();

  return (
    <Container className="k-comic-v-card"
      onClick={() => navigate("/reader")}
    >
      <Cover>
        <ComicCover image={cover}/>
      </Cover>
      <ComicInfos
        title={title}
        subtitle={subtitle}
        edition={edition}
      />
    </Container>
  )
}
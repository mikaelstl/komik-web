import { Subtitle } from "../../base/Subtitle";
import { Title } from "../../base/Title";
import { ComicCover } from "../ComicCover";
import { Container, Cover, Infos } from "./style";

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
  return (
    <Container className="k-comic-v-card">
      <Cover>
        <ComicCover image={cover}/>
      </Cover>
      <Infos>
        <div>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
        <Subtitle>#{edition}</Subtitle>
      </Infos>
    </Container>
  )
}
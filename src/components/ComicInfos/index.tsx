import { Subtitle } from "../base/Subtitle";
import { Title } from "../base/Title";
import { Infos } from "./style";

interface ComicInfosProps {
  title: string;
  subtitle: string;
  edition: string;
}

export function ComicInfos({
  title,
  subtitle,
  edition
}: ComicInfosProps) {
  return (
    <Infos>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <Subtitle>#{edition}</Subtitle>
    </Infos>
  )
}
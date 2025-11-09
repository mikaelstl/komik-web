import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Title } from "../../components/base/Title";
import { ComicCover } from "../../components/cards/ComicCover";
import { ComicInfos } from "../../components/ComicInfos";
import { Screen } from "../../components/Screen";
import { Actions, ChangePage, Content, Cover, Infos } from "./style";
import { NextBtn } from "../../components/buttons/NextBtn";
import { PrevBtn } from "../../components/buttons/PrevBtn";
import { useNavigate } from "react-router-dom";

export function Reader() {
  const navigate = useNavigate();

  return (
    <Screen>
      <Content>
        <Infos>
          <button onClick={() => navigate('..')}>
            <ChevronLeftIcon width={32}/>
          </button>
          <ComicInfos
            title="Title"
            subtitle="Subtitle"
            edition="00"
          />
        </Infos>
        <Cover>
          <ComicCover/>
        </Cover>
        <Actions>
          <Title>00</Title>
          <ChangePage>
            <PrevBtn/>
            <NextBtn/>
          </ChangePage>
        </Actions>
      </Content>
    </Screen>
  )
}
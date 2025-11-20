import { useLiveQuery } from "dexie-react-hooks";
import { ComicCard } from "../../components/cards/ComicCard";
import { Screen } from "../../components/Screen";
import { Appbar } from "../../components/toolbars/Appbar";
import { Navbar } from "../../components/toolbars/NavBar";
import { Content, Grid, Main, ReadBtnContainer } from "./style";
import { database } from "../../service/db/db";
import { ItalicTitle } from "../../components/base/ItalicTitle";
import { useEffect, useState } from "react";
import { useDevice } from "../../hooks/useDevice";
import { ReadBtn } from "../../components/buttons/ReadBtn";

export function Library() {
  const comics = useLiveQuery(() => database.comics.toArray(), []);

  const [haveComics, setHaveComics] = useState<boolean>(false);

  const device = useDevice();

  useEffect(() => {
    if (comics && comics?.length !== 0) {
      setHaveComics(true);
    }
    
    console.log(device);
    
  }, [comics])

  return (
    <Screen>
      <Grid>
        <Appbar />
        <Navbar axis={device === "mobile" ? "horizontal" : "vertical"}/>
        <Main>
          <Content>
            {
              haveComics
                ? comics?.map(comic => <ComicCard key={comic.id}
                    title={comic.title}
                    subtitle={comic.subtitle}
                    edition={comic.edition}
                    cover={comic.cover}

                    ckey={encodeURIComponent(comic.key)}
                  />
                )
                : <ItalicTitle>Without comics</ItalicTitle>
            }
          </Content>
          {
            device === "mobile" ? <ReadBtnContainer><ReadBtn/></ReadBtnContainer> : <></>
          }
        </Main>
      </Grid>
    </Screen>
  )
}
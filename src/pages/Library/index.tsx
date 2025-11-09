import { useLiveQuery } from "dexie-react-hooks";
import { ComicCard } from "../../components/cards/ComicCard";
import { Screen } from "../../components/Screen";
import { Appbar } from "../../components/toolbars/Appbar";
import { Navbar } from "../../components/toolbars/NavBar";
import { Content, Grid, Main } from "./style";
import { database } from "../../service/db/db";
import { ItalicTitle } from "../../components/base/ItalicTitle";
import { useEffect, useState } from "react";

export function Library() {
  const comics = useLiveQuery(() => database.comics.toArray(), []);

  const [haveComics, setHaveComics] = useState<boolean>(false);

  useEffect(() => {
    if (comics && comics?.length !== 0) {
      setHaveComics(true);
    }
  }, [comics])

  return (
    <Screen>
      <Grid>
        <Navbar />
        <Appbar />
        <Main>
          <Content>
            {
              haveComics
                ? comics?.map(comic => <ComicCard key={comic.id}
                  title={comic.title}
                  subtitle={comic.subtitle}
                  edition={comic.edition}
                  cover={comic.cover ?? ''}
                />
                )
                : <ItalicTitle>Without comics</ItalicTitle>
            }
          </Content>
        </Main>
      </Grid>
    </Screen>
  )
}
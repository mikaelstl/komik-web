import { ComicCard } from "../../components/cards/ComicCard";
import { Screen } from "../../components/Screen";
import { Appbar } from "../../components/toolbars/Appbar";
import { Navbar } from "../../components/toolbars/NavBar";
import { Content, Grid, Main } from "./style";

export function Library() {
  const comics = Array.from({ length: 15 }, (_, i) => i);

  return (
    <Screen>
      <Grid>
        <Navbar />
        <Appbar />
        <Main>
          <Content>
            {
              comics.map(i => <ComicCard key={i}
                                title="Title"
                                subtitle="Subtitle"
                                edition="00"
                              />
              )
            }
          </Content>
        </Main>
      </Grid>
    </Screen>
  )
}
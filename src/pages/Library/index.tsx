import { Text } from "../../components/base/Text";
import { Screen } from "../../components/Screen";
import { Appbar } from "../../components/toolbars/Appbar";
import { Navbar } from "../../components/toolbars/NavBar";
import { Content, Grid } from "./style";

export function Library() {
  return (
    <Screen>
      <Grid>
        <Navbar/>
        <Appbar/>
        <Content>
          <Text>LIBRARY CONTENT</Text>
        </Content>
      </Grid>
    </Screen>
  )
}
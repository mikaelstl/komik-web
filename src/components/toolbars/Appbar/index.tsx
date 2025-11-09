import { ReadBtn } from "../../buttons/ReadBtn";
import { Logo } from "../../Logo";
import { SearchField } from "../../SearchField";
import { Container } from "./style";

export function Appbar() {
  return (
    <Container className="k-appbar">
      <Logo/>
      <SearchField/>
      <ReadBtn/>
    </Container>
  )
}
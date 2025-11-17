import { useDevice } from "../../../hooks/useDevice";
import { ReadBtn } from "../../buttons/ReadBtn";
import { Logo } from "../../Logo";
import { SearchField } from "../../SearchField";
import { Container } from "./style";

export function Appbar() {
  const device = useDevice();

  return (
    <Container className="k-appbar">
      <Logo/>
      <SearchField/>
      {device !== "mobile" ? <ReadBtn/> : <></>}
    </Container>
  )
}
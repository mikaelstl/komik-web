import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Container, Input } from "./style";

export function SearchField() {
  return (
    <Container className="k-search-field">
      <Input type="text" placeholder="Search..."/>
      <Button>
        <MagnifyingGlassIcon width={20}/>
      </Button>
    </Container>
  )
}
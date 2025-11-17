import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Container, Input } from "./style";
import { useDevice } from "../../hooks/useDevice";

export function SearchField() {
  const device = useDevice();

  return (
    <Container className="k-search-field">
      {
        device !== 'mobile'
          ? <Input
            type="text"
            placeholder="Search..."
          />
          : <></>
      }
      <Button>
        <MagnifyingGlassIcon width={20} />
      </Button>
    </Container>
  )
}
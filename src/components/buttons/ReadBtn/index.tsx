import { BookOpenIcon } from "@heroicons/react/16/solid";
import { Button } from "./style";
import { Title } from "../../base/Title";

export function ReadBtn() {
  return (
    <Button className="k-read-btn">
      <BookOpenIcon width={20} />
      <Title>Read</Title>
    </Button>
  )
}
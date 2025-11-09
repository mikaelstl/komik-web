import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChangePageBtn } from "../base";

export function PrevBtn() {
  return (
    <ChangePageBtn left className="k-prev-btn">
      <ChevronLeftIcon width={24}/>
    </ChangePageBtn>
  )
}
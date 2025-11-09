import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ChangePageBtn } from "../base";

export function NextBtn() {
  return (
    <ChangePageBtn right className="k-next-btn">
      <ChevronRightIcon width={24}/>
    </ChangePageBtn>
  )
}
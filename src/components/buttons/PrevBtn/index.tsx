import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChangePageBtn, type BtnProps } from "../base";

export function PrevBtn({
  onClick
}: BtnProps) {
  return (
    <ChangePageBtn className="k-prev-btn"
      left
      onClick={onClick}
    >
      <ChevronLeftIcon width={24}/>
    </ChangePageBtn>
  )
}
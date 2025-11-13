import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ChangePageBtn, type BtnProps } from "../base";

export function NextBtn({
  onClick
}: BtnProps) {
  return (
    <ChangePageBtn className="k-next-btn"
      right
      onClick={onClick}
    >
      <ChevronRightIcon width={24}/>
    </ChangePageBtn>
  )
}
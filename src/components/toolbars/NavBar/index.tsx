import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Nav, NavItem } from "./style";
import { Text } from "../../base/Text";
import { BookmarkIcon } from "@heroicons/react/20/solid";

export function Navbar() {
  return (
    <Nav className="k-navbar">
      <NavItem className="k-navitem">
        <BookOpenIcon width={22}/>
        <Text bold>Library</Text>
      </NavItem>
      <NavItem className="k-navitem">
        <BookmarkIcon width={22}/>
        <Text bold>Reading</Text>
      </NavItem>
    </Nav>
  )
}
import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

const Nav = styled.nav`
  grid-area: k-navbar;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &.horizontal {
    flex-direction: row;
    height: 95px; width: 100%;
    border-top: 1px solid ${Palette.details};
  }
  
  &.vertical {
    flex-direction: column;
    width: 95px; height: 100%;
    border-right: 1px solid ${Palette.details};
  }
`;

const NavItem = styled.button`
  padding: 10px 0px;
  width: 100%;
`;

export {
  NavItem,
  Nav
}
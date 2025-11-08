import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

const Nav = styled.nav`
  grid-area: k-navbar;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  width: 95px; height: 100%;

  border-right: 1px solid ${Palette.details};
`;

const NavItem = styled.button`
  padding: 10px 0px;
  width: 100%;
`;

export {
  NavItem,
  Nav
}
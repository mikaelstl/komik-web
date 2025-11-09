import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

export const Button = styled.button`
  display: flex;
  gap: 8px;

  padding: 8px 16px;

  border-radius: 50px;
  background-color: ${Palette.details};
`
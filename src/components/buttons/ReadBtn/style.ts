import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

const Container = styled.div`
  padding: 8px 16px;

  border-radius: 50px;
  background-color: ${Palette.details};
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
`

export {
  Container,
  Button
}
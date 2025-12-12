import styled from "styled-components";
import { Palette } from "../../../assets/Palette";
import { breakpoint } from "../../../service/types/breakpoints";

const Container = styled.div`
  padding: 8px 16px;

  border-radius: 50px;
  background-color: ${Palette.details};

  @media ${breakpoint.sm} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 52px; height: 52px;
  }
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
`

export {
  Container,
  Button
}
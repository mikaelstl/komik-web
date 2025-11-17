import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

const Container = styled.div`
  padding: 8px 16px;

  border-radius: 50px;
  background-color: ${Palette.details};

  @media (max-width: 768px) {
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
import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${Palette.white};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
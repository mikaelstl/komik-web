import styled from "styled-components";
import { Palette } from "../../../assets/Palette";
import { breakpoint } from "../../../service/types/breakpoints";

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${Palette.white};

  @media ${breakpoint.sm} {
    font-size: 16px;
  }
`
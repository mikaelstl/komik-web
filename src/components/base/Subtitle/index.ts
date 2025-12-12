import styled from "styled-components";
import { Palette } from "../../../assets/Palette";
import { breakpoint } from "../../../service/types/breakpoints";

export const Subtitle = styled.p`
  font-weight: 550;
  font-size: 16px;
  color: ${Palette.subtitles};

  @media ${breakpoint.sm} {
    font-size: 14px;
  }
`
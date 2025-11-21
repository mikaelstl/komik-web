import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

export const Subtitle = styled.p`
  font-weight: 550;
  font-size: 16px;
  color: ${Palette.subtitles};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
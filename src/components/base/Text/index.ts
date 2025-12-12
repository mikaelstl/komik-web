import styled from "styled-components";
import { breakpoint } from "../../../service/types/breakpoints";

interface TextProps {
  bold?: boolean
}

export const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: ${ props => props.bold ? 600 : 500};

  @media ${breakpoint.sm} {
    font-size: 12px;
  }
`
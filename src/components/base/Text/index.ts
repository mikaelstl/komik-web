import styled from "styled-components";

interface TextProps {
  bold?: boolean
}

export const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: ${ props => props.bold ? 600 : 500};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
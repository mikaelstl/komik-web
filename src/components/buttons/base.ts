import styled from "styled-components";
import { Palette } from "../../assets/Palette";

interface ChangePageBtnProps {
  left?: boolean;
  right?: boolean;
}

export const ChangePageBtn = styled.button<ChangePageBtnProps>`
  display: flex;
  justify-content: center;

  width: 36px; height: 36px;

  background-color: ${Palette.items};

  border-top-left-radius: ${props => props.left ? '4px' : 0 };
  border-bottom-left-radius: ${props => props.left ? '4px' : 0 };

  border-top-right-radius: ${props => props.right ? '4px' : 0 };
  border-bottom-right-radius: ${props => props.right ? '4px' : 0 };
`
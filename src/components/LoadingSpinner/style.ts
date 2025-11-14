import styled from "styled-components";
import { Palette } from "../../assets/Palette";

export const Spinner = styled.div`
  width: 42px; height: 42px;
  
  border: 4px solid ${Palette.comic_icon};
  border-top: 4px solid ${Palette.details};
  border-radius: 9999px;

  animation: spin 700ms linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
import styled from "styled-components";
import { breakpoint } from "../../service/types/breakpoints";

const Grid = styled.div`
  position: relative;

  display: grid;
  grid-template-areas: 
    "k-navbar k-appbar"
    "k-navbar k-library-content";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  height: 100%;

  @media ${breakpoint.sm} {
    grid-template-areas: 
      "k-appbar k-appbar"
      "k-library-content k-library-content"
      "k-navbar k-navbar"
    ;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: min-content 1fr;
  }
`;

const Main = styled.main`
  position: relative;
  
  grid-area: k-library-content;

  display: flex;
  justify-content: center;

  height: 100%;

  overflow: auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  
  width: min-content;
  height: fit-content;

  margin: 20px 0px;
  
  @media ${breakpoint.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin: 0px 10px;
    gap: 10px;
    
    overflow: auto;
  }
`;

const ReadBtnContainer = styled.div`
  position: fixed;

  bottom: 12%;
  left: 82%;
`;

export {
  Grid,
  Main,
  Content,
  ReadBtnContainer
}
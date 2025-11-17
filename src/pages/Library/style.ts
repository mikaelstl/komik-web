import styled from "styled-components";
import { Palette } from "../../assets/Palette";

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    "k-navbar k-appbar"
    "k-navbar k-library-content";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  height: 100%;

  @media (max-width: 768px) {
    grid-template-areas: 
      "k-appbar k-appbar"
      "k-library-content k-library-content"
      "k-navbar k-navbar"
    ;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: min-content 1fr;
  }
`;

const Main = styled.div`
  position: relative;
  
  grid-area: k-library-content;

  display: flex;
  justify-content: center;
  
  overflow: scroll;

  border: 1px solid yellow;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  
  width: 100%;
  height: fit-content;
  
  padding-top: 40px;
  padding-bottom: 20px;
  
  border: 1px solid yellow;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const ReadBtnContainer = styled.div`
  position: absolute;

  top: 90%;
  left: 82%;
`;

export {
  Grid,
  Main,
  Content,
  ReadBtnContainer
}
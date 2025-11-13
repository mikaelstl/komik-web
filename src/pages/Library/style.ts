import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    "k-navbar k-appbar"
    "k-navbar k-library-content";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  height: 100%;
`;

const Main = styled.div`
  grid-area: k-library-content;

  display: flex;
  justify-content: center;
  
  overflow: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  
  width: fit-content;
  max-width: 57%;
  
  height: fit-content;
  
  padding-top: 40px;
  padding-bottom: 20px;
`

export {
  Grid,
  Main,
  Content
}
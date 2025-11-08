import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    "k-navbar k-appbar"
    "k-navbar k-library-content";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  height: 100%;
`;

export const Content = styled.div`
  grid-area: k-library-content;
`
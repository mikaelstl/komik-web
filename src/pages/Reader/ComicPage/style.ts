import styled from "styled-components";
import { Palette } from "../../../assets/Palette";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 99px;

  height: 100%;
  min-height: 127px;

  border-radius: 4px;

  background-color: ${Palette.card};

  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  image-rendering: auto;

  height: 100%;
  width: auto;

  max-height: 150%;

  object-fit: contain;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export {
  Container,
  Image
}
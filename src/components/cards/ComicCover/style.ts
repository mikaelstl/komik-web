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
  /* display: block;
  object-fit: none;
  image-rendering: auto; */

  width: 100%;
  height: 100%;

  max-width: none;
  max-height: none;
`;

export {
  Container,
  Image
}
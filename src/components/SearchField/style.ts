import styled from "styled-components";
import { Palette } from "../../assets/Palette";

const Container = styled.div`
  display: flex;

  width: fit-content; height: fit-content;

  padding: 8px;
  padding-left: 18px;

  border-radius: 50px;

  background-color: ${Palette.items};
`;

const Input = styled.input`
  width: 520px;
  
  background: none;

  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 28px; height: 28px;
  
  border-radius: 50px;
  background-color: ${Palette.details};
`;

export {
  Container,
  Input,
  Button
}
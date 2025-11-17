import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  width: 155px;

  cursor: pointer;
`;

const Cover = styled.div`
  min-width: 100px; min-height: 130px;
  max-width: 150px; max-height: 195px;
`;

export {
  Container,
  Cover,
}
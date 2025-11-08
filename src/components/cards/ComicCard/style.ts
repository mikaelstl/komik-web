import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: fit-content;

  cursor: pointer;
`;

const Cover = styled.div`
  width: 150px; height: 195px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export {
  Container,
  Cover,
  Infos
}
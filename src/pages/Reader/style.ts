import styled from "styled-components";

const Main = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  aside {
    padding: 12px;
  }
`;

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Cover = styled.main`
  position: absolute;
`;

const Infos = styled.aside`
  display: flex;
  gap: 30px;

  min-width: 16%;

  z-index: 9999;

  border: 1px solid yellow;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Actions = styled.aside`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  width: fit-content; height: 100%;
  
  border: 1px solid green;

  z-index: 99999;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%; height: fit-content;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ChangePage = styled.div`
  display: flex;
  gap: 4px;

  @media (max-width: 768px) {
    position: absolute;
    top: 8%;

    justify-content: space-between;
    
    width: 100%; height: fit-content;
  }
`;

export {
  Cover,
  Infos,
  Actions,
  Main,
  ChangePage,
  Container
}
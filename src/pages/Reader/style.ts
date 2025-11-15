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
`;

const Cover = styled.main`
  position: absolute;

  display: block;

  min-width: auto;
  max-width: auto;

  min-height: 50%;
  max-height: 150%;
`;

const Infos = styled.aside`
  display: flex;
  gap: 30px;

  min-width: 16%;

  z-index: 9999;
`;

const Actions = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  width: fit-content; height: 100%;
`;

const ChangePage = styled.div`
  display: flex;
  gap: 4px;
`;

export {
  Cover,
  Infos,
  Actions,
  Main,
  ChangePage,
  Container
}
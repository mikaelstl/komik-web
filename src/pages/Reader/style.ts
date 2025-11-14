import styled from "styled-components";

const Main = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  height: 100%;

  aside {
    padding: 12px;
  }
`;

const Cover = styled.main`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  display: block;
  overflow: auto;

  width: auto;
  height: 100%;
  max-height: 100%;

  object-fit: contain;

  margin: 0 auto;
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
  ChangePage
}
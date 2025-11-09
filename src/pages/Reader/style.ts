import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100%;

  aside {
    padding: 12px;
  }
`;

const Cover = styled.main`
  width: 30%; height: 100%;
`;

const Infos = styled.aside`
  display: flex;
  gap: 30px;

  width: 12%;
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
  Content,
  ChangePage
}
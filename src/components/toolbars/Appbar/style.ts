import styled from "styled-components";
import { breakpoint } from "../../../service/types/breakpoints";

const Container = styled.div`
  grid-area: k-appbar;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  padding: 12px 20px;

  @media ${breakpoint.sm} {
    justify-content: space-between;
  }
`;

export {
  Container
}
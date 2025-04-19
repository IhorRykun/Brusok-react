import styled from "@emotion/styled";

export const Div = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  min-width: 320px;
  width: 100vw;
  margin: 0 auto;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

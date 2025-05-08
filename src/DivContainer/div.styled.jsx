import styled from "@emotion/styled";

export const DivContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  min-width: 320px;
  width: 100vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

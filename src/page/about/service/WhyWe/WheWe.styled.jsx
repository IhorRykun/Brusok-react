import styled from "@emotion/styled/macro";

export const SectionWheWe = styled.section`
  padding-top: 204px;
`;

export const DivContainerFlex = styled.div`
  display: flex;
  width: 1024px;
`;

export const LeftContainer = styled.div`
  padding-top: 80px;
  border-top: 1px solid black;
  width: 600px;
`;

export const LeftContainerText = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 50px;
  padding: 80px 80px 0 80px;
`;

export const RightList = styled.ul``;
export const RightItem = styled.li`
  padding-top: 90px;
  border-left: 1px solid black;
  border-top: 1px solid black;
  &:first-child {
    border-top: none;
  }
`;

export const RightTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 38px;
  line-height: 120%;

  margin-bottom: 12px;
`;

export const RightText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
`;

export const RightTextSpan = styled.span`
  margin: 0;
  width: 560px;
  display: block;
  margin-top: 0px;
`;

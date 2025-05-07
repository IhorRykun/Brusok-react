import styled from "@emotion/styled/macro";

export const Button = styled.button`
  width: 91px;
  height: 22px;
  border: 1px solid rgba(255, 255, 255, 1);
  cursor: pointer;
  background-color: transparent;
`;

export const WoodList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WoodItem = styled.li`
  margin: 0;
  width: 586px;

  &:nth-child(2n + 1) {
    margin-right: 22px;
  }
`;

export const Img = styled.img`
  width: 586px;
`;

import styled from "@emotion/styled/macro";

export const ListIconsNavigation = styled.ul`
  display: flex;
  margin-left: 360px;
  margin-bottom: 12px;
`;

export const ItemIconsNavigation = styled.li`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    outline: 2px solid orange;
    border: 1px solid orange;
  }
`;

// export const

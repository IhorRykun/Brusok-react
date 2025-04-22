import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

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

  &:hover,
  &:focus {
    color: #d9ac8d;
    border: 1px solid #d9ac8d;
    transform: cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
`;

export const LinkSVG = styled(Link)`
  &:hover {
    color: #d9ac8d;
    outline: none;
    transform: cubic-bezier(0.4, 0, 0.2, 1);
    
  }
  &:focus {
    color: #d9ac8d;
    outline: #d9ac8d;
    transform: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

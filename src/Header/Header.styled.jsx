import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.section`
  padding-top: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(184, 184, 184, 1);
  border-top: 2px solid rgba(184, 184, 184, 1);
  padding: 8px 0 8px 0;
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 1);
  font-family: "Sue Ellen Francisco", cursive;
  font-weight: 300;
  font-style: normal;
  width: 480px;
  font-size: 14px;
  line-height: 100%;
  margin-left: auto;

  &::first-letter {
    margin-left: 156px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 4px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #c38f63;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    background-color: #d9ac8d;
    color: white;
    outline: 1px solid #d9ac8d;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const DivNavigation = styled.dvi`
  margin-left: 340px;
`;

export const ButtonBasket = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
  &:hover {
    color: #d9ac8d;
    outline: none;
    transform: cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    color: #d9ac8d;
    outline: none;
    transform: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

import styled from "@emotion/styled/macro";

export const Header = styled.header`
  padding: 20px 130px;
  border-bottom: 1px solid black;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 64px;
  height: 56px;
  order: 2;
  margin: 0 182px;
`;

export const LogoImg = styled.img`
  width: 64px;
  height: 56px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  order: 1;
`;

export const NavItem = styled.li`
  margin-right: 35px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  order: 3;
  align-items: center;
  margin-left: auto;
`;

export const SocialItem = styled.li`
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

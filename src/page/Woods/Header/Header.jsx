import { Link } from "react-router-dom";
import Logo from "../../../img/logo/Logo2.png";
import { Container } from "../../../DivContainer/DivContainer";
import {
  ContainerFlex,
  Header,
  LogoContainer,
  LogoImg,
  Nav,
  NavItem,
  NavList,
  SocialItem,
  SocialList
} from "./Header.styled";
import { ButtonBasket, StyledLink } from "../../../Header/Header.styled";
import { LinkSVG } from "../../../Header/navigationIcon/navigationIcon.styled";
import { SlBasket } from "react-icons/sl";
import { CiMobile3 } from "react-icons/ci";
export const HeaderWood = () => {
  return (
    <Header>
      <Container>
        <ContainerFlex>
          <LogoContainer>
            <Link to="/">
              <LogoImg src={Logo} alt="Logo" />
            </Link>
          </LogoContainer>
          <Nav>
            <NavList>
              <NavItem>
                <StyledLink to="/">Про нас</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/wood">Пилометріали</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/work">Покрівельні</StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink to="/delivery">Логістичні послуги</StyledLink>
              </NavItem>
            </NavList>
          </Nav>
          <SocialList>
            <SocialItem>
              <LinkSVG to="tel:0977723871">
                <CiMobile3 style={{ width: 22, height: 22 }} />
              </LinkSVG>
            </SocialItem>
            <SocialItem>
              <ButtonBasket type="button">
                <SlBasket style={{ width: 22, height: 22 }} />
              </ButtonBasket>
            </SocialItem>
          </SocialList>
        </ContainerFlex>
      </Container>
    </Header>
  );
};

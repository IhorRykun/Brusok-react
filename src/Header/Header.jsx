import { Container } from "../DivContainer/DivContainer";
import {
  DivNavigation,
  HeaderSection,
  List,
  StyledLink,
  Text
} from "./Header.styled";
import { Logo } from "./Logo/Logo";
import { ContainerFlexHeader } from "./Logo/Logo.styled";
import { NavigationIcons } from "./navigationIcon/navigationIcon";

export const HeaderAbout = () => {
  return (
    <HeaderSection>
      <Container>
        <ContainerFlexHeader>
          <Logo />
          <DivNavigation>
            <NavigationIcons />
            <Text>
              Ми надійні партнери світі пиломатеріалів. Наші матеріали ідеально
              підходять для будівництва, ремонту та оздоблення.
              <br /> Ми працюємо згідно з принципів якості та професіоналізму.
            </Text>
          </DivNavigation>
        </ContainerFlexHeader>
        <List>
          <li>
            <StyledLink to="/">Про нас</StyledLink>
          </li>
          <li>
            <StyledLink to="wood">Пилометріали</StyledLink>
          </li>
          <li>
            <StyledLink to="work">Покрівельні роботи</StyledLink>
          </li>
          <li>
            <StyledLink to="delivery">Логічтичні послуги</StyledLink>
          </li>
        </List>
      </Container>
    </HeaderSection>
  );
};

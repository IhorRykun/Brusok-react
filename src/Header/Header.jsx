import { Div } from "../DivContainer/div.styled";
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

export const Header = () => {
  return (
    <HeaderSection>
      <Div>
        <ContainerFlexHeader>
          <Logo />
          <DivNavigation>
            <NavigationIcons />
            <Text>
              Ми надійні партнери світі пиломатеріалів. Наші матеріали ідеально
              підходять для будівництва, ремонту та оздоблення.
              <span>
                <br /> Ми працюємо згідно з принципів якості та професіоналізму.
              </span>
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
      </Div>
    </HeaderSection>
  );
};

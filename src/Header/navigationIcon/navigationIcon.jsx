import { CiMobile3 } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import {
  ItemIconsNavigation,
  LinkSVG,
  ListIconsNavigation
} from "./navigationIcon.styled";
import { ButtonBasket } from "../Header.styled";
export const NavigationIcons = () => {
  return (
    <ListIconsNavigation>
      <ItemIconsNavigation>
        <LinkSVG to="tel:0977723871">
          <CiMobile3 style={{ width: 22, height: 22 }} />
        </LinkSVG>
      </ItemIconsNavigation>
      <ItemIconsNavigation>
        <ButtonBasket type="button">
          <SlBasket style={{ width: 22, height: 22 }} />
        </ButtonBasket>
      </ItemIconsNavigation>
    </ListIconsNavigation>
  );
};

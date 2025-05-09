import { Container } from "../DivContainer/DivContainer";
import {
  Address,
  AddressSpan,
  DivFooter,
  FooterItem,
  FooterList,
  IconEmail,
  IconFaceBoock,
  IconInstagram,
  IconLocation,
  IconTelegram,
  IconTell,
  ItemAddress,
  LinkPage,
  ListAddress,
  PrivateContainer,
  PrivateLink,
  PrivateLinkTel1,
  SectionFooter,
  SocialContainer,
  SocialItem,
  SocialLink,
  SocialList,
  SocialTitle
} from "./Footer.styled";

export const Footer = () => {
  //
  return (
    <SectionFooter>
      <Container>
        <DivFooter>
          <FooterList>
            <FooterItem>
              <LinkPage to="/"> Про нас </LinkPage>
            </FooterItem>
            <FooterItem>
              <LinkPage to="/wood"> Пиломатеріали</LinkPage>
            </FooterItem>
            <FooterItem>
              <LinkPage to="/work"> Покрівельні роботи</LinkPage>
            </FooterItem>
            <FooterItem>
              <LinkPage to="/delivery">Доставка</LinkPage>
            </FooterItem>
            <FooterItem>
              <LinkPage to="/contacts">Контакти</LinkPage>
            </FooterItem>
          </FooterList>
          <ListAddress>
            <ItemAddress>
              <IconTell />
              <PrivateLinkTel1 to="tel:0977728371" target="_blank">
                +38 (097) 77 28 371 <br /> +38 (097) 87 49 673
              </PrivateLinkTel1>
            </ItemAddress>
            <ItemAddress>
              <Address>
                <IconLocation />
                c. Лісові Гринівці,
                <AddressSpan>
                  <br />
                  вул. Центральна
                </AddressSpan>
              </Address>
            </ItemAddress>
            <ItemAddress>
              <PrivateLink to="mailto:brusok.khm@gmail.com" target="_blank">
                <IconEmail />
                brusok.khm@gmail.com
              </PrivateLink>
            </ItemAddress>
          </ListAddress>
          <SocialContainer>
            <SocialTitle>Соціальні мережі</SocialTitle>
            <SocialList>
              <SocialItem>
                <SocialLink
                  target="_blank"
                  to="https://www.instagram.com/brusok.khm/">
                  <IconInstagram />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink
                  target="_blank"
                  to="https://www.facebook.com/Brusok.khm/?locale=uk_UA">
                  <IconFaceBoock />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink target="_blank">
                  <IconTelegram />
                </SocialLink>
              </SocialItem>
            </SocialList>
          </SocialContainer>
        </DivFooter>
        <PrivateContainer>
          <PrivateLink>
            Всі права захищено | Політика конфіденційності
          </PrivateLink>
        </PrivateContainer>
      </Container>
    </SectionFooter>
  );
};

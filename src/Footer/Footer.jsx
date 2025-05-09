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
              <SocialLink to="/"> Про нас </SocialLink>
            </FooterItem>
            <FooterItem>
              <SocialLink to="/wood"> Пиломатеріали</SocialLink>
            </FooterItem>
            <FooterItem>
              <SocialLink to="/work"> Покрівельні роботи</SocialLink>
            </FooterItem>
            <FooterItem>
              <SocialLink to="/delivery">Доставка</SocialLink>
            </FooterItem>
            <FooterItem>
              <SocialLink to="/contacts">Контакти</SocialLink>
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

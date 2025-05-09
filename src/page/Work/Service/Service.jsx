import { Container } from "../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../TitleH2/TitleH2";
import {
  ServiceItem,
  ServiceSection,
  ServiceText,
  ServiceTextSpan
} from "./Service.styled";

export const Service = () => {
  return (
    <ServiceSection>
      <Container>
        <TitleH2>Послуги</TitleH2>
        <ul>
          <ServiceItem>
            <ServiceText>Монтаж металочерепиці</ServiceText>
            <ServiceTextSpan>
              від 400грн/м<sup>2</sup>
            </ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж бітумної черепиці</ServiceText>
            <ServiceTextSpan>
              від 400грн/м<sup>2</sup>
            </ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж керамічної черепиці</ServiceText>
            <ServiceTextSpan>
              від 800грн/м<sup>2</sup>
            </ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж підсубійки</ServiceText>
            <ServiceTextSpan>від 250грн/м.пог</ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж утеплення</ServiceText>
            <ServiceTextSpan>
              від 250грн/м<sup>2</sup>
            </ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж панелів “Клік Фальц”</ServiceText>
            <ServiceTextSpan>
              від 600грн/м<sup>2</sup>
            </ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж водостічної системи</ServiceText>
            <ServiceTextSpan>від 150грн/м.пог</ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Монтаж мансардних вікон </ServiceText>
            <ServiceTextSpan>від 4000 грн/шт</ServiceTextSpan>
          </ServiceItem>
          <ServiceItem>
            <ServiceText>Послуги демонтажу</ServiceText>
            <ServiceTextSpan>Договірна ціна</ServiceTextSpan>
          </ServiceItem>
        </ul>
      </Container>
    </ServiceSection>
  );
};

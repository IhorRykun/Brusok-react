import { Container } from "../../../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../../../TitleH2/TitleH2";
import { ContainerFlexModal } from "../ComponentsModalWoods/FlexContainer/ContainerFlexModal";
import { RightsContainer } from "../ComponentsModalWoods/RightContainer/RightsContainer";
import girder from "../../../../../../src/img/wood/Modal/grider/grider.png";
import { ContainerLeftImg } from "../ComponentsModalWoods/LeftContainer/LeftContainer";

export const Girder = () => {
  return (
    <Container>
      <TitleH2>Обрізний брус</TitleH2>
      <ContainerFlexModal>
        <ContainerLeftImg props={girder}></ContainerLeftImg>
        <RightsContainer>
          Обрізний сосновий брус — це високоякісний пиломатеріал, виготовлений
          із натуральної соснової деревини. Він відзначається міцністю,
          естетичним виглядом і широкою сферою застосування, що робить його
          ідеальним вибором для будівництва та ремонту.Обрізний брус з сосни
          буде гарним вибором для внутрішніх і зовнішніх робіт. Легка, міцний,
          має гарний зовнішній вигляд і довговічний за правильного догляду.
        </RightsContainer>
      </ContainerFlexModal>
      {/* <img src={girder} alt={girder} /> */}
    </Container>
  );
};

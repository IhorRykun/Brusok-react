import { Container } from "../../../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../../../TitleH2/TitleH2";
import { ContainerFlexModal } from "../ComponentsModalWoods/FlexContainer/ContainerFlexModal";
import { ContainerLeftImg } from "../ComponentsModalWoods/LeftContainer/LeftContainer";
import { RightsContainer } from "../ComponentsModalWoods/RightContainer/RightsContainer";
import boardImg from "../../../../../img/wood/Modal/board/boardTitle.png";

export const Board = () => {
  return (
    <Container>
      <TitleH2>Обрізна Дошка</TitleH2>
      <ContainerFlexModal>
        <ContainerLeftImg props={boardImg}></ContainerLeftImg>
        <RightsContainer>
          Обрізна дошка — це якісний пиломатеріал, що виготовляється з
          натуральної деревини, спеціально оброблений для отримання рівних і
          гладких країв. Вона є ідеальним вибором для різноманітних будівельних
          і оздоблювальних проектів, завдяки своїм відмінним характеристикам і
          універсальності. Обрізна дошка з сосни буде гарним вибором для
          внутрішніх і зовнішніх робіт. Вона легка, міцна, має гарний зовнішній
          вигляд і довговічна за правильного догляду. Вибір обрізної дошки — це
          гарантія високої якості та естетики вашого проекту. Завдяки своїм
          відмінним характеристикам, вона залишається незамінним матеріалом у
          будівництві та ремонті.
        </RightsContainer>
      </ContainerFlexModal>
    </Container>
  );
};

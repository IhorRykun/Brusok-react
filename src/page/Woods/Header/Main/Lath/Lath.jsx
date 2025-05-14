import { Container } from "../../../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../../../TitleH2/TitleH2";
import { ContainerFlexModal } from "../ComponentsModalWoods/FlexContainer/ContainerFlexModal";
import { ContainerLeftImg } from "../ComponentsModalWoods/LeftContainer/LeftContainer";
import { RightsContainer } from "../ComponentsModalWoods/RightContainer/RightsContainer";
import lath from "../../../../../img/wood/Modal/lath/Lath.png";
export const Lath = () => {
  return (
    <Container>
      <TitleH2>Обрізна рейка</TitleH2>
      <ContainerFlexModal>
        <ContainerLeftImg props={lath} />
        <RightsContainer>
          Обрізна рейка — це тонкий дерев’яний пиломатеріал, який має рівно
          оброблені краї та зазвичай прямокутний переріз. Вона є незамінним
          матеріалом у будівництві та ремонті завдяки своїй легкості,
          універсальності та естетичному вигляду.Обрізна рейка з сосни буде
          гарним вибором для внутрішніх і зовнішніх робіт. Вона легка, міцна,
          має гарний зовнішній вигляд і довговічна за правильного
          догляду.Обрізна рейка ідеальне рішення для вашого проекту, яке поєднує
          в собі легкість, естетику та функціональність. Обирайте обрізні рейки
          для створення надійних і стильних конструкцій!
        </RightsContainer>
      </ContainerFlexModal>
    </Container>
  );
};

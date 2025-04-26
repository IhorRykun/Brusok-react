import {
  DivContainerFlex,
  LeftContainer,
  LeftContainerText,
  RightItem,
  RightList,
  RightText,
  RightTextSpan,
  RightTitle,
  SectionWheWe
} from "./WhyWe.styled";

export const WhyWe = () => {
  return (
    <SectionWheWe>
      <DivContainerFlex>
        <LeftContainer>
          <LeftContainerText>Чому варто обрати нас</LeftContainerText>
        </LeftContainer>
        <RightList>
          <RightItem>
            <RightTitle>Висока якість матеріалів</RightTitle>
            <RightText>
              Використовуємо ретельно відібрані сорти деревини, які проходять
              строгий контроль на кожному етапі обробки.
              <RightTextSpan>
                <br />
                Матеріали стійкі до зносу, зберігають природну красу та текстуру
                деревини, що гарантує надійність і довговічність кожного виробу.
              </RightTextSpan>
            </RightText>
          </RightItem>
          <RightItem>
            <RightTitle>Конкурентні ціни</RightTitle>
            <RightText>
              Завдяки прямій співпраці з постачальниками, ми можемо зберігати
              вигідні умови для наших клієнтів, забезпечуючи відмінне
              співвідношення ціни і якості.
            </RightText>
          </RightItem>
          <RightItem>
            <RightTitle>Оперативна доставка</RightTitle>
            <RightText>
              Ми цінуємо ваш час, тому організовуємо швидку та надійну доставку.
              Ваше замовлення буде доставлено в найкоротші терміни без затримок,
              незалежно від обсягу та віддаленості місця доставки.
            </RightText>
          </RightItem>
          <RightItem>
            <RightTitle>Наша міссія </RightTitle>
            <RightText>
              Наша місія — забезпечити клієнтів якісними та надійними
              матеріалами, які відповідають найвищим стандартам, за доступними
              цінами. Завдяки професійному підходу, індивідуальному сервісу та
              швидкій доставці, Brusok є надійним партнером у світі
              пиломатеріалів.
            </RightText>
          </RightItem>
          <RightItem>
            <RightTitle>Наша міссія </RightTitle>
            <RightText>
              Наша місія — забезпечити клієнтів якісними та надійними
              матеріалами, які відповідають найвищим стандартам, за доступними
              цінами. Завдяки професійному підходу, індивідуальному сервісу та
              швидкій доставці, Brusok є надійним партнером у світі
              пиломатеріалів.
            </RightText>
          </RightItem>
        </RightList>
      </DivContainerFlex>
    </SectionWheWe>
  );
};

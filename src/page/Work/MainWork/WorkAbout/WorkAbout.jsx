import WorkImg from "../../../../img/work/1.png";
import WorkAboutImg from "../../../../img/work/WorkAbout/1.png";
import {
  AdvantagesItemFlex,
  AdvantagesListFlex,
  AdvantagesTitle,
  ImgTitle,
  ProductImg,
  ProductItem,
  ProductList,
  TextAbout,
  TitleH3,
  WhayWeItem,
  WhayWeList,
  WhayWeTitle
} from "./WorkAbout.styled";

export const WorkAbout = () => {
  return (
    <>
      <ImgTitle src={WorkImg} alt="WorkImg" />
      <TextAbout>
        Ми підходимо до кожного проекта індивідуально, враховуючи всі побажання
        клієнта.  Завдяки нашому досвіду та професіоналізму, ми забезпечуємо
        надійність і довговічність кожного даху.
      </TextAbout>
      <TitleH3>Основні характеристики матеріалів:</TitleH3>
      <ProductList>
        <ProductItem>
          <ProductImg src={WorkAboutImg} alt="WorkAboutImg" />
          <AdvantagesListFlex>
            <AdvantagesTitle>Переваги металочерепиці:</AdvantagesTitle>
            <AdvantagesItemFlex>
              Довговічність: Завдяки оцинкованому шару та захисному покриттю,
              металочерепиця стійка до корозії та служить 30-50 років.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Мала вага: Легка конструкція знижує навантаження на крокви та
              фундамент будинку.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Швидкий монтаж: Великі листи
            </AdvantagesItemFlex>
          </AdvantagesListFlex>
        </ProductItem>
        <ProductItem>
          <ProductImg src={WorkAboutImg} alt="WorkAboutImg" />
          <AdvantagesListFlex>
            <AdvantagesTitle>Переваги бітумної черепиці:</AdvantagesTitle>
            <AdvantagesItemFlex>
              Гнучкість: Легко адаптується до різних форм дахів.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Шумоізоляція: Добре глушить шум, наприклад, під час дощу.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Стійкість до корозії: Не іржавіє, що є перевагою в порівнянні з
              металевими покриттями.
            </AdvantagesItemFlex>
          </AdvantagesListFlex>
        </ProductItem>
        <ProductItem>
          <ProductImg src={WorkAboutImg} alt="WorkAboutImg" />
          <AdvantagesListFlex>
            <AdvantagesTitle>Переваги керамічної черепиці:</AdvantagesTitle>
            <AdvantagesItemFlex>
              Довговічність: Керамічна черепиця може служити понад 100 років, що
              робить її одним з найбільш витривалих покрівельних матеріалів.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Екологічність: Виготовляється з натуральних матеріалів, таких як
              глина, і не містить шкідливих хімічних сполук.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Висока стійкість до зовнішніх впливів: Не
            </AdvantagesItemFlex>
          </AdvantagesListFlex>
        </ProductItem>
        <ProductItem>
          <ProductImg src={WorkAboutImg} alt="WorkAboutImg" />
          <AdvantagesListFlex>
            <AdvantagesTitle>Переваги підсубійки:</AdvantagesTitle>
            <AdvantagesItemFlex>
              Забезпечує вентиляцію піддахового простору, що подовжує термін
              служби покрівлі.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Захищає від зовнішніх факторів, таких як волога та комахи.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Поліпшує зовнішній вигляд будівлі.
            </AdvantagesItemFlex>
          </AdvantagesListFlex>
        </ProductItem>
        <ProductItem>
          <ProductImg src={WorkAboutImg} alt="WorkAboutImg" />
          <AdvantagesListFlex>
            <AdvantagesTitle>Переваги утеплення покрівлі:</AdvantagesTitle>
            <AdvantagesItemFlex>
              Зменшення втрат тепла: Добре утеплена покрівля може знизити
              тепловтрати до 25-30%.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Комфортний мікроклімат: Утеплення сприяє підтриманню комфортної
              температури всередині будинку.
            </AdvantagesItemFlex>
            <AdvantagesItemFlex>
              Захист конструкції: Утеплювач захищає дах від
            </AdvantagesItemFlex>
          </AdvantagesListFlex>
        </ProductItem>
      </ProductList>
      <WhayWeTitle>Чому обирають нас:</WhayWeTitle>
      <WhayWeList>
        <WhayWeItem>
          Професіоналізм і досвід: Наші фахівці мають багаторічний досвід і
          постійно підвищують свою кваліфікацію.
        </WhayWeItem>
        <WhayWeItem>
          Гарантія якості: Використовуємо тільки якісні матеріали та надаємо
          гарантію на всі види робіт.
        </WhayWeItem>
        <WhayWeItem>
          Індивідуальний підхід: Ми враховуємо всі побажання клієнта та
          пропонуємо оптимальні рішення під ваш бюджет і вимоги.
        </WhayWeItem>
        <WhayWeItem>
          Комплексний сервіс: Від первинної консультації до завершення монтажу –
          ми супроводжуємо вас на кожному етапі.
        </WhayWeItem>
      </WhayWeList>
    </>
  );
};

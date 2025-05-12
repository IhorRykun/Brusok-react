import { Container } from "../../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../../TitleH2/TitleH2";
import {
  ContainerImg,
  Img,
  Text,
  TextTitle,
  WoodItem,
  WoodList,
  WoodMain
} from "./Main.styled";
import { Button } from "./ButtonAbout/ButtonAbout.styled";
import img1 from "../../../../img/wood/1.png";
import img2 from "../../../../img/wood/2.png";
import img3 from "../../../../img/wood/3.png";
import img4 from "../../../../img/wood/4.png";
import { Modal } from "../../../../Modal/Modal";
export const Main = ({ onClick }) => {
  return (
    <main>
      <WoodMain>
        <Container>
          <TitleH2>Пиломатеріали</TitleH2>
          <Text>
            Ми спеціалізуємося на виготовленні пиломатеріалів виключно з
            деревини сосни. Ця порода деревини вирізняється своєю міцністю,
            стійкістю до зовнішніх впливів та легкою обробкою, що робить її
            ідеальним вибором для будівництва, оздоблювальних робіт. Завдяки
            природній смолистості, сосна має додатковий захист від вологи та
            шкідників, що підвищує довговічність наших виробів. Ми обираємо
            тільки якісну соснову деревину, щоб забезпечити надійність і
            екологічність нашої продукції.
          </Text>
          <ContainerImg>
            <WoodList>
              <WoodItem>
                <Img src={img1} alt="img1" />
                <TextTitle>Обрізна дошка</TextTitle>
                <Button onClick={onClick}>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img2} alt="img1" />
                <TextTitle>Обрізна Рейка</TextTitle>
                <Button onClick={onClick}>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img3} alt="img1" />
                <TextTitle>Обрізний брус</TextTitle>
                <Button>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img4} alt="img1" />
                <TextTitle style={{ marginLeft: 20 }}>Вагонка</TextTitle>
                <Button>Детальніше</Button>
              </WoodItem>
            </WoodList>
          </ContainerImg>
        </Container>
        <Modal>
          <TitleH2>вагонка</TitleH2>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                Вагонка — це оздоблювальний матеріал, який використовують для
                облицювання стін, стель і інших поверхонь як всередині
                приміщень, так і зовні. Вона являє собою вузькі дерев'яні або
                пластикові панелі зі з'єднанням типу "шип-паз", що дозволяє
                легко та швидко монтувати покриття. Найчастіше вагонку
                виготовляють з деревини хвойних порід (сосна, ялина), а також
                липи чи осики для внутрішнього оздоблення.
              </p>
              <h3>Переваги вагонки:</h3>
              <ul>
                <li> Легкість монтажу.</li>
                <li> Захист стін від пошкоджень.</li>
                <li> Поліпшення тепло- та звукоізоляції.</li>
                <li> Привабливий декоративний вигляд</li>
              </ul>
            </div>
          </div>
        </Modal>
      </WoodMain>
    </main>
  );
};

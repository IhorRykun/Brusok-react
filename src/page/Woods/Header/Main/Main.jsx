import { Container } from "../../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../../TitleH2/TitleH2";
import {
  Button,
  Img,
  WoodItem,
  WoodList
} from "./ButtonAbout/ButtonAbout.styled";
import { Text, WoodMain } from "./Main.styled";
import img1 from "../../../../img/wood/1.png";
import img2 from "../../../../img/wood/2.png";
import img3 from "../../../../img/wood/3.png";
import img4 from "../../../../img/wood/4.png";
export const Main = () => {
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
          <div>
            <WoodList>
              <WoodItem>
                <Img src={img1} alt="img1" />
                <h3>Обрізна дошка</h3>
                <Button>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img2} alt="img1" />
                <h3>Обрізна Рейка</h3>
                <Button>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img3} alt="img1" />
                <h3>Обрізний брус</h3>
                <Button>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img4} alt="img1" />
                <h3>Вагонка</h3>
                <Button>Детальніше</Button>
              </WoodItem>
            </WoodList>
          </div>
        </Container>
      </WoodMain>
    </main>
  );
};

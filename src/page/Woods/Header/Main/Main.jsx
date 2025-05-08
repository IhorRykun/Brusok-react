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
          <ContainerImg>
            <WoodList>
              <WoodItem>
                <Img src={img1} alt="img1" />
                <TextTitle>Обрізна дошка</TextTitle>
                <Button>Детальніше</Button>
              </WoodItem>
              <WoodItem>
                <Img src={img2} alt="img1" />
                <TextTitle>Обрізна Рейка</TextTitle>
                <Button>Детальніше</Button>
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
      </WoodMain>
    </main>
  );
};

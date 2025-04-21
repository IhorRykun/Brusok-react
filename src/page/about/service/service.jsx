import { Title } from "../../../TitleH2/TitleH2.styled";
import { DivImg, ServiceText } from "./service.styled";
import Img1 from "../../../img/about/service/1.png";
import Img2 from "../../../img/about/service/2.png";

export const Service = () => {
  return (
    <>
      <Title style={{ marginTop: 276 }}>Наші Послуги</Title>
      <ServiceText>
        Ми спеціалізуємося на продажі якісних пиломатеріалів та надаємо послуги
        з покрівельних робіт. Надійність, швидкість і професіоналізм – наші
        головні пріоритети.
      </ServiceText>
      <DivImg>
        <img src={Img1} alt="wood" />
        <img src={Img2} alt="man_Work" />
      </DivImg>
    </>
  );
};

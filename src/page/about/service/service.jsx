import { Title } from "../../../TitleH2/TitleH2.styled";
import {
  ItemImg,
  ListImg,
  SectionService,
  ServiceText
} from "./service.styled";
import Img1 from "../../../img/about/service/1.png";
import Img2 from "../../../img/about/service/2.png";
import { Link } from "react-router-dom";
import { Container } from "../../../DivContainer/div.styled";

export const Service = () => {
  return (
    <SectionService>
      <Container>
        <Title>Наші Послуги</Title>
        <ServiceText>
          Ми спеціалізуємося на продажі якісних пиломатеріалів та надаємо
          послуги з покрівельних робіт. Надійність, швидкість і професіоналізм –
          наші головні пріоритети.
        </ServiceText>
        <ListImg>
          <ItemImg>
            <Link to="wood">
              <img src={Img1} alt="wood" />
            </Link>
          </ItemImg>
          <ItemImg>
            <Link to="work">
              <img src={Img2} alt="man_Work" />
            </Link>
          </ItemImg>
        </ListImg>
      </Container>
    </SectionService>
  );
};

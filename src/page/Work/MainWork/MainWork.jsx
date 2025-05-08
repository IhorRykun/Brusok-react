import { Container } from "../../../DivContainer/DivContainer";
import { TitleH2 } from "../../../TitleH2/TitleH2";
import { SectionWork } from "./MainWork.styled";
import { WorkAbout } from "./WorkAbout/WorkAbout";

export const MainWork = () => {
  return (
    <SectionWork>
      <Container>
        <TitleH2>Покрівельні роботи</TitleH2>
        <WorkAbout />
      </Container>
    </SectionWork>
  );
};

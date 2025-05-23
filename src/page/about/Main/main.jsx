import { Container } from "../../../DivContainer/DivContainer";
import woodPicture from "../../../img/about/wood.jpg";
import {
  DivNatural,
  FaArrowRightLongSVG,
  ImgFirstAbout,
  LinkNatural,
  LinkNaturalSpan,
  SectionMain
} from "./main.styled";

export const Main = () => {
  return (
    <SectionMain>
      <Container>
        <ImgFirstAbout src={woodPicture} alt="wood_picture" />
        <DivNatural>
          <LinkNatural to="/wood">
            Натуральні матеріали для довговічних <br />
            рішень
            <LinkNaturalSpan>
              <FaArrowRightLongSVG />
            </LinkNaturalSpan>
          </LinkNatural>
        </DivNatural>
      </Container>
    </SectionMain>
  );
};

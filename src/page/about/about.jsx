import { Div } from "../../DivContainer/div.styled";
import woodPicture from "../../img/about/wood.jpg";
import {
  DivNatural,
  FaArrowRightLongSVG,
  ImgFirstAbout,
  LinkNatural,
  LinkNaturalSpan
} from "./about.styled";
import { Service } from "./service/service";

export const AboutPage = () => {
  return (
    <Div>
      <ImgFirstAbout src={woodPicture} alt="wood_picture" />
      <DivNatural>
        <LinkNatural>
          Натуральні матеріали для довговічних <br />
          рішень
          <LinkNaturalSpan>
            <FaArrowRightLongSVG />
          </LinkNaturalSpan>
        </LinkNatural>
      </DivNatural>
      <Service />
    </Div>
  );
};

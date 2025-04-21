import { Link } from "react-router-dom";
import { Div } from "../../DivContainer/div.styled";
import woodPicture from "../../img/about/wood.jpg";
import { ImgFirstAbout } from "./about.styled";

export const AboutPage = () => {
  return (
    <Div>
      <ImgFirstAbout src={woodPicture} alt="wood_picture" />
      <Link>Натуральні матеріали для довговічних рішень</Link>
    </Div>
  );
};

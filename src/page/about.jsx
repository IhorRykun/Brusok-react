import { Link, NavLink } from "react-router-dom";
import { Div } from "../DivContainer/div.styled";
import woodPicture  from "../img/about/wood.jpg";

export const AboutPage = () => {
  return (
    <Div>
      <img src={woodPicture} alt="wood_picture" />
      <Link>Натуральні матеріали для довговічних рішень</Link>
    </Div>
  );
};

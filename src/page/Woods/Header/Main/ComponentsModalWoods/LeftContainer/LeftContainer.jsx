import { Container, Img } from "./LeftContainer.styled";
// import Slider from "react-slick";
export const ContainerLeftImg = ({ props, children }) => {
  return (
    <Container>
      <Img src={props} alt={children} />
    </Container>
  );
};

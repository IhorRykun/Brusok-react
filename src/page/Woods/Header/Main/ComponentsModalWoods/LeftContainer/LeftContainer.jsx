import { Container, Img } from "./LeftContainer.styled";

export const ContainerLeftImg = ({ props, children }) => {
  return (
    <Container>
      <Img src={props} alt={children} />
    </Container>
  );
};

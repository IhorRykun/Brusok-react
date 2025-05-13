import ContainerLeft from "./LeftContainer.styled";
import Img from "./LeftContainer.styled";

export const ContainerLeft = ({ children }) => {
  return (
    <ContainerLeft>
      <Img src={children} alt={children} />
    </ContainerLeft>
  );
};
W;

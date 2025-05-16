import { ContainerRight } from "./RightsContainer.styled";
import { Text } from "./RightsContainer.styled";

export const RightsContainer = ({ children }) => {
  return (
    <ContainerRight>
      <Text>{children}</Text>
    </ContainerRight>
  );
};

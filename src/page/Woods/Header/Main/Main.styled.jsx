import styled from "@emotion/styled/macro";

export const WoodMain = styled.section`
  padding-top: 88px;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 680px;
  font-weight: 400;
  margin-top: 22px;
  margin-bottom: 49px;
`;

export const ListWoodMain = styled.ul`
  display: flex;
`;

export const WoodList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const WoodItem = styled.li`
  position: relative;
  margin-right: 6px;
  margin-bottom: 6px;

  flex-basis: calc((100% - 2 * 3px) / 2);

  &:nth-child(n + 3) {
    margin-bottom: 0;
  }

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ContainerImg = styled.div`
  position: relative;
`;

export const TextTitle = styled.h3`
  position: absolute;
  top: 10%;
  left: 40%;
  transform: (-50%, -50%);
  color: rgba(255, 255, 255, 0.88);
  font-family: Roboto sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
`;

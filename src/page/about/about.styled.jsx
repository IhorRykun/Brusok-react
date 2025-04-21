import styled from "@emotion/styled";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
export const ImgFirstAbout = styled.img`
  margin-top: 19px;
`;

export const DivNatural = styled.div`
  display: flex;
  width: 318px;
  position: relative;
  margin-top: 21px;
`;

export const LinkNatural = styled(Link)`
  font-size: 24px;
  font-weight: 316px;
  text-transform: Uppercase;
  text-align: center;

  &:hover,
  &:focus {
    color: orange;
    outline: orange;
  }
`;

export const LinkNaturalSpan = styled.span`
  position: absolute;
  bottom: -4px;
  right: 74px;
`;

export const FaArrowRightLongSVG = styled(MdOutlineKeyboardDoubleArrowRight)``;

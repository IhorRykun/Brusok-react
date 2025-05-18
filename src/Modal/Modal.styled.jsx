import styled from "@emotion/styled/macro";
import { IoMdClose } from "react-icons/io";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
`;

export const ModalContainer = styled.div`
  width: 76%;
  margin-top: 100px;
  background-color: white;
  padding: 65px 175px 65px 72px;
  position: absolute;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
  position: absolute;
  top: 36%;
  right: 50%;
  transform: translate(50%, -50%);
  height: 520px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ButtonClose = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 4px;
`;

export const IconClose = styled(IoMdClose)`
  position: absolute;
  color: white;
  width: 28px;
  height: 28px;
  display: block;

  &:hover,
  &:focus {
    transform: scale(0.8);
    color: red;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

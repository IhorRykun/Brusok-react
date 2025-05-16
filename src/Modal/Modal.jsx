import { useEffect } from "react";
import {
  ButtonClose,
  IconClose,
  ModalContainer,
  Wrapper
} from "./Modal.styled";

export const Modal = ({ children, isOpen, isClose }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains("wrapper-modal")) {
      isClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          isClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, isClose]);

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <Wrapper onClick={onWrapperClick} className="wrapper-modal">
          <ModalContainer>{children}</ModalContainer>
          <ButtonClose onClick={isClose}>
            <IconClose />
          </ButtonClose>
        </Wrapper>
      )}
    </>
  );
};

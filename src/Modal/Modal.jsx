import {
  ButtonClose,
  IconClose,
  ModalContainer,
  Wrapper
} from "./Modal.styled";

export const Modal = ({ children, isOpen, isClose }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains("css-1n7gf50-Wrapper")) {
      isClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Wrapper onClick={onWrapperClick}>
          <ModalContainer>{children}</ModalContainer>
          <ButtonClose onClick={isClose}>
            <IconClose />
          </ButtonClose>
        </Wrapper>
      )}
    </>
  );
};

import { ModalWrapper, ModalBackdrop, ModalContainer } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper $isOpen={isOpen}>
      <ModalBackdrop onClick={onClose} />
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;

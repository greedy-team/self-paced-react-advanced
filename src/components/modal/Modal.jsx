import { useRef, useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";
import styled from "styled-components";

export default function Modal({ title, children }) {
  const { closeModal } = useContext(AppContext);
  const containerRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeModal();
    }
  };

  return (
    <ModalContainer open={true}>
      <ModalBackDrop onClick={closeModal} />
      <ModalContent
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  ${(props) =>
    props.open
      ? `
    display : block;
  `
      : `
    display : none;
  `}
`;

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const ModalTitle = styled.h2`
  margin-bottom: 36px;
`;

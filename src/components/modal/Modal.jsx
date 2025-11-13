import { useRef } from "react";
import styled from "styled-components";

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

export default function Modal({ title, children, onBackdropClick }) {
  const containerRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onBackdropClick();
    }
  };

  return (
    <ModalContainer open={true}>
      <ModalBackDrop onClick={onBackdropClick} />
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

import React, { useRef } from 'react';

import {
  ModalBackdrop, ModalContainer,
} from './Modal.styles';

function Modal({ children, onClose }) {
  const modalContentRef = useRef(null);

  const handleBackdropClick = (event) => {
    if (!modalContentRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <ModalBackdrop
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <ModalContainer ref={modalContentRef}>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
}

export default Modal;

import React, { useRef } from 'react';
import styles from './Modal.module.css';

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
    <div
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div ref={modalContentRef} className={styles.modalContainer}>
        {children}
      </div>
    </div>
  );
}

export default Modal;

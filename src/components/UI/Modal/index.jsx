import React, { useRef } from 'react';
import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  const modalContentRef = useRef(null);

  const handleBackdropClick = (event) => {
    if (!modalContentRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div ref={modalContentRef} className={styles.modalContainer}>
        {children}
      </div>
    </div>
  );
}

export default Modal;

import styles from './Modal.module.css';

function Modal({ children }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modalContainer}>
        {children}
      </div>
    </div>
  );
}

export default Modal;

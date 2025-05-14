import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles["modal--open"] : ""}`}>
      <div className={styles["modal-backdrop"]} onClick={onClose}></div>

      <div
        className={styles["modal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

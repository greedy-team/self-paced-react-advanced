import styles from "/src/styles/Modal.module.css";

export default function Modal({ title, children, onClose, onSubmit, isButtonOpen = true }) {
    return (
        <div className={`${styles["modal"]} ${styles["modal--open"]}`}>
            <div className={`${styles["modal-backdrop"]}`} onClick={onClose}></div>
            <div className={`${styles["modal-container"]}`}>
                {title && <h2 className={`${styles["modal-title"]} text-title`}>{title}</h2>}
                <form onSubmit={onSubmit || ((e) => e.preventDefault())}>
                    {children}
                    {isButtonOpen && (
                        <div className={`${styles["button-container"]}`}>
                            <button type={onSubmit ? "submit" : "button"} onClick={!onSubmit ? onClose : undefined} className={`${styles["button"]} ${styles["button--primary"]} text-caption`}>
                                {onSubmit ? "추가하기" : "닫기"}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

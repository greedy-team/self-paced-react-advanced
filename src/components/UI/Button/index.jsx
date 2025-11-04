import styles from './Button.module.css';

function Button({
  className, label, onClick, children,
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

import styles from './Button.module.css';

function Button() {
  return (
    <button type="button" className={styles.button} aria-label="button">
      <img src="templates\add-button.png" alt="button" />
    </button>
  );
}

export default Button;

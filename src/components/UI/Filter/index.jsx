import styles from './Filter.module.css';

function Filter({ label, options, onChange }) {
  return (
    <select
      className={styles.select}
      aria-label={label}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Filter;

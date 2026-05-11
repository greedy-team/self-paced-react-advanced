import styles from "./CategoryFilter.module.css";
import { ALL_CATEGORIES } from "../constants/categories";

export default function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className={styles.container}>
      <select
        name="category"
        id="category-filter"
        className={styles.filter}
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {ALL_CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </section>
  );
}

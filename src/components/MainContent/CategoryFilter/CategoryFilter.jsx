import styles from './CategoryFilter.module.css';
import categoryList from '../../../Data/categoryList';

export default function CategoryFilter({ category, onChangeCategory }) {
  const optionList = categoryList.map((value) => (
    <option value={value} key={value}>{value}</option>
  ));

  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        name="category"
        id="category-filter"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
        className={styles.restaurantFilter}
        aria-label="음식점 카테고리 필터"
      >
        {optionList}
      </select>
    </section>
  );
}

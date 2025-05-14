import styles from "/src/styles/RestaurantFilter.module.css"
import FilteredCategoryOptions from "../category/FilteredCategoryOptions";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

export default function RestaurantFilter() {
    const { setSelectedCategory } = useRestaurantContext();

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <section className={`${styles["restaurant-filter-container"]}`}>
            <select name="category" id="category-filter" className={`${styles["restaurant-filter"]}`}
                aria-label="음식점 카테고리 필터" onChange={handleChange}>
                <FilteredCategoryOptions excludedCategories={"선택해 주세요"} />
            </select>
        </section>
    );
}
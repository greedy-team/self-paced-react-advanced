import { useContext } from "react";
import {
  RestaurantListContainer,
  Restaurant,
  RestaurantCategory,
  RestaurantInfo,
} from "../style/RestaurantListStyle";
import { RestaurantListContext } from "../contexts/RestaurantListContext";
import { ModalContext } from "../contexts/ModalContext";
import { CategoryContext } from "../contexts/CategoryContext";

const CATEGORY_IN_ENGLISH = Object.freeze({
  한식: "korean",
  중식: "chinese",
  일식: "japanese",
  양식: "western",
  아시안: "asian",
  기타: "etc",
});

function RestaurantList() {
  const { restaurantList } = useContext(RestaurantListContext);
  const { detailModal, setDetailModal } = useContext(ModalContext);
  const { category } = useContext(CategoryContext);

  const filterRestaurants = (category) => {
    if (category === "전체") return restaurantList;
    else return restaurantList.filter((restaurant) => restaurant.category === category);
  };
  const filteredRestaurants = filterRestaurants(category);

  const handleRestaurantClick = (restaurant) => {
    setDetailModal({
      ...detailModal,
      isOpen: true,
      restaurant: {
        name: restaurant.name,
        description: restaurant.description,
      },
    });
  };

  return (
    <RestaurantListContainer>
      <ul className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} onClick={() => handleRestaurantClick(restaurant)}>
            <RestaurantCategory>
              <img
                src={`/category-${CATEGORY_IN_ENGLISH[restaurant.category]}.png`}
                alt=""
                className="category-icon"
              />
            </RestaurantCategory>
            <RestaurantInfo>
              <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
              <p className="restaurant__description text-body">{restaurant.description}</p>
            </RestaurantInfo>
          </Restaurant>
        ))}
      </ul>
    </RestaurantListContainer>
  );
}

export default RestaurantList;

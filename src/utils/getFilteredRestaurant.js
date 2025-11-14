export default function getFilteredRestaurant(restaurants, category) {
  return restaurants.filter((restaurant) => {
    return category === "전체" || restaurant.category === category;
  });
}

import { useState, useEffect } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList/RestaurantList';
import GlobalStyle from './GlobalStyle';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';
import restaurantApi from './api/restaurantApi';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const fetchedRestaurants = await restaurantApi.fetchAllRestaurants();
    setRestaurants(fetchedRestaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const filteredRestaurants = selectedCategory === '전체'
    ? restaurants
    : restaurants.filter((e) => e.category === selectedCategory);

  const handleAddRestaurant = async (restaurant) => {
    await restaurantApi.postRestaurant(restaurant);
    fetchRestaurants();
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <HomeHeader />

        <main>
          <RestaurantCategoryFilter setSelectedCategory={setSelectedCategory} />
          <RestaurantList restaurants={filteredRestaurants} />
        </main>
        <RestaurantDetailModal />
        <AddRestaurantModal onAddRestaurant={handleAddRestaurant} />
      </div>
    </>
  );
}
export default App;

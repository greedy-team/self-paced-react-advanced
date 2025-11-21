import { useState, useEffect } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/restaurantList/RestaurantList';
import ModalRenderer from './components/Aside/ModalRenderer';
import GlobalStyle from './GlobalStyle';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const LOCAL_SERVER_URL = 'http://localhost:3000';

  const fetchRestaurants = async () => {
    const restaurantsResponse = await fetch(`${LOCAL_SERVER_URL}/restaurants`);
    const fetchedRestaurants = await restaurantsResponse.json();
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
    await fetch(`${LOCAL_SERVER_URL}/restaurants`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurant),
    });
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

        <ModalRenderer onAddRestaurant={handleAddRestaurant} />
      </div>
    </>
  );
}
export default App;

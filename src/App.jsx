import { useState, useEffect } from 'react';
import HomeHeader from './components/header/HomeHeader';
import RestaurantCategoryFilter from './components/main/RestaurantCategoryFilter';
import RestaurantList from './components/main/restaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const restaurantsResponse = await fetch('http://localhost:3000/restaurants');
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

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] = useState(false);
  const handleRestaurantClick = (restaurant) => {
    setIsRestaurantDetailModalOpen(true);
    setSelectedRestaurant(restaurant);
  };

  const [isAddRestaurantModalOpen, setIsAddRestaurantModalOpen] = useState(false);
  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants((restaurantList) => [newRestaurant, ...restaurantList]);
  };

  return (
    <div>

      <HomeHeader onRestaurantAddButtonClick={() => {
        setIsAddRestaurantModalOpen(true);
      }}
      />

      <main>
        <RestaurantCategoryFilter
          setSelectedCategory={setSelectedCategory}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={handleRestaurantClick}
        />
      </main>

      {isRestaurantDetailModalOpen && (
      <RestaurantDetailModal
        restaurant={selectedRestaurant}
        onClose={() => setIsRestaurantDetailModalOpen(false)}
      />
      )}
      {
        isAddRestaurantModalOpen && (
          <AddRestaurantModal
            onAddRestaurant={handleAddRestaurant}
            onClose={() => setIsAddRestaurantModalOpen(false)}
          />
        )
      }
    </div>
  );
}
export default App;

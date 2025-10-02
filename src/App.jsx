import { useState } from 'react';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';
import restaurants from './data/restaurantsData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredRestaurants = selectedCategory === '전체'
    ? restaurants
    : restaurants.filter((e) => e.category === selectedCategory);

  return (
    <div>

      <HomeHeader />

      <main>
        <RestaurantCategoryFilter
          setSelectedCategory={setSelectedCategory}
        />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>

      <RestaurantDetailModal />
      <AddRestaurantModal />

    </div>
  );
}
export default App;

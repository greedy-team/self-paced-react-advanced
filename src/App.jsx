import { useState } from 'react';
import restaurants from './data/restaurants';
import Header from './components/Header/Header';
import CategoryFilter from './components/Main/CategoryFilter';
import RestaurantList from './components/Main/RestaurantList';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  // 상태값
  const [category, setCategory] = useState('전체');

  const [detailModal, setDetailModal] = useState(false);

  const [filteredRestaurantDetail, setFilteredRestaurantDetail] = useState(null);

  const [addModal, setAddModal] = useState(false);

  // 파생값
  const filteredRestaurants =
    category === '전체' ? restaurants : restaurants.filter((r) => r.category === category);

  const selectedRestaurant = restaurants.find((r) => r.id === filteredRestaurantDetail);

  //  핸들러
  const handleClickRestaurantList = (r) => {
    setDetailModal(true);
    setFilteredRestaurantDetail(r.id);
  };

  return (
    <>
      <Header setAddModal={setAddModal} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          handleClickRestaurantList={handleClickRestaurantList}
        />
      </main>
      <aside>
        {detailModal && (
          <RestaurantDetailModal
            setDetailModal={setDetailModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {addModal && <AddRestaurantModal setAddModal={setAddModal} />}
      </aside>
    </>
  );
}

export default App;

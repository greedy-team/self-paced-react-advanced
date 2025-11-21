import { useState, useEffect } from 'react';
import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import RestaurantDetailModal from './components/AsideContent/RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './components/AsideContent/AddRestaurantModal/AddRestaurantModal';
import { getRestaurantInfoList, addNewRestaurantInfo } from './api/restaurantApi';
import { RestaurantDetailModalProvider } from './contexts/RestaurantDetailModalContext';
import './App.css';

function App() {
  const [restaurantInfoList, setRestaurantInfoList] = useState([]);

  const fetchRestaurantInfoList = async () => {
    const response = await getRestaurantInfoList();
    if (response.success) {
      setRestaurantInfoList(response.data);
    } else {
      alert(response.error);
    }
  };
  const addRestaurantInfo = async (restaurantInfo) => {
    const response = await addNewRestaurantInfo(restaurantInfo);

    if (response.success) {
      fetchRestaurantInfoList();
    } else {
      alert(response.error);
    }
  };

  useEffect(() => {
    fetchRestaurantInfoList();
  }, []);

  const [isVisibleAddRestaurantModal, setIsVisibleAddRestaurantModal] = useState(false);
  const showAddRestaurantModal = () => {
    setIsVisibleAddRestaurantModal(true);
  };
  const closeAddRestaurantModal = () => {
    setIsVisibleAddRestaurantModal(false);
  };

  return (
    <div>
      <RestaurantDetailModalProvider restaurantInfoList={restaurantInfoList}>
        <MainContent
          restaurantInfoList={restaurantInfoList}
          showAddRestaurantModal={showAddRestaurantModal}
        />
        <AsideContent>
          <AddRestaurantModal
            isVisible={isVisibleAddRestaurantModal}
            closeModal={closeAddRestaurantModal}
            addRestaurantInfo={addRestaurantInfo}
          />
          <RestaurantDetailModal />
        </AsideContent>
      </RestaurantDetailModalProvider>
    </div>
  );
}

export default App;

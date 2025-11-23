import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import RestaurantDetailModal from './components/AsideContent/RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './components/AsideContent/AddRestaurantModal/AddRestaurantModal';
import { RestaurantDetailModalProvider } from './contexts/RestaurantDetailModalContext';
import { AddRestaurantModalProvider } from './contexts/AddRestaurantModalContext';
import useRestaurantInfoList from './hooks/useRestaurantInfoList';
import './App.css';

function App() {
  const { restaurantInfoList, addRestaurantInfo } = useRestaurantInfoList();

  return (
    <div>
      <RestaurantDetailModalProvider restaurantInfoList={restaurantInfoList}>
        <AddRestaurantModalProvider>
          <MainContent restaurantInfoList={restaurantInfoList} />

          <AsideContent>
            <AddRestaurantModal onAddRestaurantInfo={addRestaurantInfo} />
            <RestaurantDetailModal />
          </AsideContent>

        </AddRestaurantModalProvider>
      </RestaurantDetailModalProvider>
    </div>
  );
}

export default App;

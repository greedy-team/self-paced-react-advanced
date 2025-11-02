import { useEffect } from 'react';
import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import StyleProvider from './styles/StyleProvider';
import { useRestaurantActions } from './store/appStore';

const App = () => {
  const { fetchRestaurants } = useRestaurantActions();

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <StyleProvider>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </StyleProvider>
  );
};

export default App;

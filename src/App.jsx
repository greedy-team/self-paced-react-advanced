import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList/RestaurantList';
import GlobalStyle from './GlobalStyle';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <HomeHeader />
        <main>
          <RestaurantCategoryFilter />
          <RestaurantList />
        </main>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </div>
    </>
  );
}
export default App;

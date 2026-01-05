import { ToastContainer } from 'react-toastify';
import HomeHeader from './components/Header/HomeHeader';
import RestaurantCategoryFilter from './components/Main/RestaurantCategoryFilter';
import RestaurantList from './components/Main/RestaurantList/RestaurantList';
import GlobalStyle from './GlobalStyle';
import RestaurantDetailModal from './components/Aside/RestaurantDetailModal';
import AddRestaurantModal from './components/Aside/AddRestaurantModal';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
      />
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

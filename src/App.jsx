import "./App.css";
import RestaurantProvider from "./contexts/RestaurantProvider";
import Gnb from "./components/headers/Gnb";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter";
import RestaurantList from "./components/mains/RestaurantList";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal";
import AddRestaurantModal from "./components/asides/AddRestaurantModal";
import categoryIcons from "./data/categoryIcons";
import categoryOptions from "./data/categoryOptions";
import ModalTypes from "./constants/modalTypes";

function App() {
  return (
    <RestaurantProvider>
      <Gnb />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList categoryIcons={categoryIcons} />
      </main>
      <aside>
        <RestaurantInfoModal />
        <AddRestaurantModal categoryOptions={categoryOptions} />
      </aside>
    </RestaurantProvider>
  );
}

export default App;

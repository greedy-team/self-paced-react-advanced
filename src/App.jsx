import "./App.css";
import RestaurantProvider from "./contexts/RestaurantProvider";
import Gnb from "./components/headers/Gnb";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter";
import RestaurantList from "./components/mains/RestaurantList";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal";
import AddRestaurantModal from "./components/asides/AddRestaurantModal";
import categoryOptions from "./data/categoryOptions";

function App() {
  return (
    <RestaurantProvider>
      <Gnb />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantInfoModal />
        <AddRestaurantModal categoryOptions={categoryOptions} />
      </aside>
    </RestaurantProvider>
  );
}

export default App;

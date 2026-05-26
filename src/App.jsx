import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import { useModalContext } from "./contexts/ModalContext";
import { useRestaurantContext } from "./contexts/RestaurantContext";

function App() {
  const { activeModal } = useModalContext();
  const { addRestaurant } = useRestaurantContext();

  function renderModal() {
    switch (activeModal) {
      case "detail":
        return <RestaurantDetailModal />;
      case "add":
        return <AddRestaurantModal onAddRestaurant={addRestaurant} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>{renderModal()}</aside>
    </>
  );
}

export default App;

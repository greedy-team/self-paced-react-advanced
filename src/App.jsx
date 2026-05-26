import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import { useModalContext } from "./contexts/ModalContext";

function App() {
  // 모달 분기해야해서 못 뻄
  const { activeModal } = useModalContext();

  function renderModal() {
    switch (activeModal) {
      case "detail":
        return <RestaurantDetailModal />;
      case "add":
        return <AddRestaurantModal />;
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

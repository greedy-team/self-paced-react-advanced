import "./App.css";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import Body from "./pages/Body";
import Header from "./pages/Header";
import { ModalStateProvider } from "./store/ModalStateContext";
import { RestaurantProvider } from "./store/RestaurantProvider";
import { SelectedRestaurantProvider } from "./store/SelectedRestaurantProvider";

function App() {
  return (
    <>
      <RestaurantProvider>
        <ModalStateProvider>
          <Header />
          <SelectedRestaurantProvider>
            <Body />
            <RestaurantInfoModal />
            <AddRestaurantModal />
          </SelectedRestaurantProvider>
        </ModalStateProvider>
      </RestaurantProvider>
    </>
  );
}

export default App;

import GlobalStyle from "./styles/Globalstyle.jsx";
import Header from "./components/head/Header.jsx";
import RestaurantList from "./components/main/RestaurantList.jsx";
import RestaurantFilter from "./components/main/RestaurantFilter.jsx";
import RestaurantDetailModal from "./components/aside/RestaurantDetailModal.jsx";
import RestaurantAddModal from "./components/aside/RestaurantAddModal.jsx";
import { RestaurantProvider } from "./context/RestaurantContext.jsx";
import { ModalProvider, useModalContext } from "./context/ModalContext.jsx";

function ModalContainer() {
  const { modalState } = useModalContext();

  return (
    <aside>
      {modalState === 'detail' && <RestaurantDetailModal />}
      {modalState === 'add' && <RestaurantAddModal />}
    </aside>
  );
}

function RestaurantContainer() {
  return (
    <main>
      <RestaurantFilter />
      <RestaurantList />
    </main>
  );
}

function App() {
  return (
    <ModalProvider>
      <GlobalStyle />
      <Header />
      <RestaurantProvider>
        <RestaurantContainer />
        <ModalContainer />
      </RestaurantProvider>
    </ModalProvider>
  );
}

export default App;

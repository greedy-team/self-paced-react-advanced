import GlobalStyle from "./styles/Globalstyle.jsx";
import Header from "./components/head/Header.jsx";
import RestaurantList from "./components/main/RestaurantList.jsx";
import RestaurantFilter from "./components/main/RestaurantFilter.jsx";
import RestaurantDetailModal from "./components/aside/RestaurantDetailModal.jsx";
import RestaurantAddModal from "./components/aside/RestaurantAddModal.jsx";
import { RecoilRoot } from "recoil";
import { useRecoilValue } from "recoil";
import { modalState } from "./recoil/ModalState.jsx";

function ModalContainer() {
  const modalStateValue = useRecoilValue(modalState);

  return (
    <aside>
      {modalStateValue === "detail" && <RestaurantDetailModal />}
      {modalStateValue === "add" && <RestaurantAddModal />}
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
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <RestaurantContainer />
      <ModalContainer />
    </RecoilRoot>
  );
}

export default App;

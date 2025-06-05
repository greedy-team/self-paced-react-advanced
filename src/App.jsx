import { Suspense } from "react";
import "./App.css";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import Body from "./pages/Body";
import Header from "./pages/Header";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Body />
      <Suspense fallback={<div>Loading RestaurantInfoModal...</div>}>
        <RestaurantInfoModal />
      </Suspense>
      <AddRestaurantModal />
    </RecoilRoot>
  );
}

export default App;

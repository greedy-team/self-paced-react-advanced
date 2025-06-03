import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import StyleProvider from './styles/StyleProvider';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

const App = () => {
  return (
    <RecoilRoot>
      <StyleProvider>
        <Header />
        <main>
          <CategoryFilter />
          <Suspense fallback={<div>레스토랑 목록 불러오는중...</div>}>
            <RestaurantList />
          </Suspense>
        </main>
        <aside>
          <RestaurantDetailModal />
          <AddRestaurantModal />
        </aside>
      </StyleProvider>
    </RecoilRoot>
  );
};

export default App;

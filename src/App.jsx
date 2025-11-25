import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import { RestaurantDetailModalProvider } from './contexts/RestaurantDetailModalContext';
import { AddRestaurantModalProvider } from './contexts/AddRestaurantModalContext';
import { RestaurantInfoListProvider } from './contexts/RestaurantInfoListContext';
import './App.css';

function App() {
  return (
    <div>
      <Composer
        providers={[
          RestaurantInfoListProvider,
          RestaurantDetailModalProvider,
          AddRestaurantModalProvider,
        ]}
      >
        <MainContent />
        <AsideContent />

      </Composer>
    </div>
  );
}

function Composer({ providers, children }) {
  return providers.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, children);
}

export default App;

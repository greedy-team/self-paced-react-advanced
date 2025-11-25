import MainContent from './components/MainContent/MainContent';
import AsideContent from './components/AsideContent/AsideContent';
import RestaurantDetailModal from './components/AsideContent/RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './components/AsideContent/AddRestaurantModal/AddRestaurantModal';
import { RestaurantDetailModalProvider } from './contexts/RestaurantDetailModalContext';
import { AddRestaurantModalProvider } from './contexts/AddRestaurantModalContext';
import useRestaurantInfoList from './hooks/useRestaurantInfoList';
import './App.css';

function App() {
  const { restaurantInfoList, addRestaurantInfo } = useRestaurantInfoList();

  return (
    <div>
      <Composer
        providers={[
          [RestaurantDetailModalProvider, { restaurantInfoList }],
          [AddRestaurantModalProvider, {}],
        ]}
      >
        <MainContent restaurantInfoList={restaurantInfoList} />

        <AsideContent>
          <AddRestaurantModal handleAddRestaurantInfo={addRestaurantInfo} />
          <RestaurantDetailModal />
        </AsideContent>

      </Composer>
    </div>
  );
}

function Composer({ providers, children }) {
  return providers.reduceRight((acc, provider) => {
    const [Component, props] = provider;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props}>{acc}</Component>;
  }, children);
}

export default App;

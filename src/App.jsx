import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import StyleProvider from './styles/StyleProvider';
import { Toaster } from 'react-hot-toast';
import { startRestaurantUpdateSimulator } from './sim/startRestaurantUpdateSimulator';

startRestaurantUpdateSimulator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider>
        <Header />
        <main>
          <CategoryFilter />
          <RestaurantList />
        </main>
        <aside>
          <RestaurantDetailModal />
          <AddRestaurantModal />
        </aside>
      </StyleProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;

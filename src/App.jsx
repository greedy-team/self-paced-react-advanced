import RestaurantListPage from './pages/RestaurantListPage';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RestaurantListPage />
    </Provider>
  );
}

export default App;

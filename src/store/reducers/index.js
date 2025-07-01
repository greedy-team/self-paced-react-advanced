import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import modalReducer from './modalReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  restaurants: restaurantReducer,
  modal: modalReducer,
});

export default rootReducer;

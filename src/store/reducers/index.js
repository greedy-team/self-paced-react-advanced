import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import modalReducer from './modalReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  restaurantReducer,
  modalReducer,
  categoryReducer,
});

export default rootReducer;

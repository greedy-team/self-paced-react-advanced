import { combineReducers } from 'redux';
import modalReducer from './slice/modalSlice';
import restaurantReducer from './slice/restaurantSlice';

const rootReducer = combineReducers({
    modal: modalReducer,
    restaurants: restaurantReducer,
});

export default rootReducer;

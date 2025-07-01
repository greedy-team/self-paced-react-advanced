import { 
  FETCH_RESTAURANTS,
  SET_SELECTED_RESTAURANT,
} from '../actions/type';

const initialState = {
  restaurants: [],
  selectedRestaurant: 0,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      };
    case SET_SELECTED_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload
      }
    default:
      return state;
  }
};

export default restaurantReducer;

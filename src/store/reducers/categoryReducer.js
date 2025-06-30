import { 
  SET_CATEGORY,
} from '../actions/type';

const initialState = {
  category: '',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;

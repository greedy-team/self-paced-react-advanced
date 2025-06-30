import { 
  SET_ADD_MODAL,
  SET_INFO_MODAL,
} from '../actions/type';

const initialState = {
  addModalState: false,
  infoModalState: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_MODAL:
      return {
        ...state,
        addModalState: action.payload
      };
    case SET_INFO_MODAL:
      return {
        ...state,
        infoModalState: action.payload
      }
    default:
      return state;
  }
};

export default modalReducer;

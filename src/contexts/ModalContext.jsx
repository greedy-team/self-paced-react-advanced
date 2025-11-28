import {
  createContext, useContext, useReducer,
} from 'react';

const ModalStateContext = createContext(null);
const ModalDispatchContext = createContext(null);

export const RESTAURANT_MODAL_ACTION_TYPES = {
  OPEN_RESTAURANT_DETAIL: 'open_restaurant_detail',
  CLOSE_RESTAURANT_DETAIL: 'close_restaurant_detail',
  OPEN_ADD_RESTAURANT: 'open_add_restaurant',
  CLOSE_ADD_RESTAURANT: 'close_add_restaurant',
};

function modalReducer(state, action) {
  switch (action.type) {
    case RESTAURANT_MODAL_ACTION_TYPES.OPEN_RESTAURANT_DETAIL:
      return {
        ...state,
        isRestaurantDetailModalOpen: true,
      };
    case RESTAURANT_MODAL_ACTION_TYPES.CLOSE_RESTAURANT_DETAIL:
      return {
        ...state,
        isRestaurantDetailModalOpen: false,
      };
    case RESTAURANT_MODAL_ACTION_TYPES.OPEN_ADD_RESTAURANT:
      return {
        ...state,
        isAddRestaurantModalOpen: true,
      };
    case RESTAURANT_MODAL_ACTION_TYPES.CLOSE_ADD_RESTAURANT:
      return {
        ...state,
        isAddRestaurantModalOpen: false,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const initialState = {
  isRestaurantDetailModalOpen: false,
  isAddRestaurantModalOpen: false,
};

export function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export function useModalState() {
  const context = useContext(ModalStateContext);
  if (context === null) {
    throw new Error('useModalState는 ModalProvider 내에서 사용되어야 합니다.');
  }
  return context;
}

export function useModalDispatch() {
  const context = useContext(ModalDispatchContext);
  if (context === null) {
    throw new Error('useModalDispatch는 ModalProvider 내에서 사용되어야 합니다.');
  }
  return context;
}

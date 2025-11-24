import {
  createContext, useContext, useReducer,
} from 'react';

const ModalStateContext = createContext(null);
const ModalDispatchContext = createContext(null);

function modalReducer(state, action) {
  switch (action.type) {
    case 'open_restaurant_detail':
      return {
        ...state,
        isRestaurantDetailModalOpen: true,
      };
    case 'close_restaurant_detail':
      return {
        ...state,
        isRestaurantDetailModalOpen: false,
      };
    case 'open_add_restaurant':
      return {
        ...state,
        isAddRestaurantModalOpen: true,
      };
    case 'close_add_restaurant':
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

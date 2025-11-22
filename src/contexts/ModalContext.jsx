import {
  createContext, useMemo, useContext, useReducer,
} from 'react';

const ModalContext = createContext(null);

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

  const setIsRestaurantDetailModalOpen = (isOpen) => {
    dispatch({
      type: isOpen ? 'open_restaurant_detail' : 'close_restaurant_detail',
    });
  };

  const setIsAddRestaurantModalOpen = (isOpen) => {
    dispatch({
      type: isOpen ? 'open_add_restaurant' : 'close_add_restaurant',
    });
  };

  const value = useMemo(
    () => ({
      isRestaurantDetailModalOpen: state.isRestaurantDetailModalOpen,
      setIsRestaurantDetailModalOpen,

      isAddRestaurantModalOpen: state.isAddRestaurantModalOpen,
      setIsAddRestaurantModalOpen,
    }),
    [state.isRestaurantDetailModalOpen, state.isAddRestaurantModalOpen],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModalContext는 ModalProvider 내에서 사용되어야 합니다.');
  }
  return context;
};

export default ModalContext;

import { createContext, useState } from 'react';

export const SelectedCategoryContext = createContext();
export const RestaurantsContext = createContext();
export const SetRestaurantsContext = createContext();
export const SelectedRestaurantValueContext = createContext();
export const SelectedRestaurantActionContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      <SetRestaurantsContext.Provider value={setRestaurants}>
        <RestaurantsContext.Provider value={restaurants}>
          {children}
        </RestaurantsContext.Provider>
      </SetRestaurantsContext.Provider>
    </SelectedCategoryContext.Provider>
  );
};

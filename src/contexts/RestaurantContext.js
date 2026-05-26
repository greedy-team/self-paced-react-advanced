import { createContext, useContext } from "react";

// App.jsx에서 관리하던 category 상태와 restaurants 상태를 RestaurantProvider로 이동
export const RestaurantContext = createContext(null);

export function useRestaurantContext() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("잘못된 RestaurantContext 사용");
  }
  return context;
}

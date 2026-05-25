import { createContext, useState } from "react";
import { CATEGORY_LIST } from "../RestaurantData";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("전체");

  const filterCategories = ["전체", ...CATEGORY_LIST];

  return (
    <CategoryContext.Provider
      value={{ category, setCategory, filterCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

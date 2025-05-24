import { useState, createContext, useContext } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => useContext(CategoryContext);

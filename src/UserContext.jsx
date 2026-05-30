import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("전체");
  return (
    <UserContext.Provider value={{ category, setCategory }}>
      {children}
    </UserContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Provider 밖에서 사용함");
  }
  return context;
}

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

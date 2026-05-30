import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({
  category: "전체",
  setCategory: () => {},
});

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("전체");
  return (
    <UserContext.Provider value={{ category, setCategory }}>
      {children}
    </UserContext.Provider>
  );
}

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

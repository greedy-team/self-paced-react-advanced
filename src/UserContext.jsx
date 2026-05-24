import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({
  category: "전체",
  setCategory: () => {},
});

export function UserProvider({ children }) {
  const [category, setCategory] = useState("전체");
  return (
    <UserContext.Provider value={{ category, setCategory }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

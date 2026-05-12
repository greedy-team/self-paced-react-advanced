import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [category, setCategory] = useState("전체");

  return (
    <UserContext.Provider value={{ category, setCategory }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

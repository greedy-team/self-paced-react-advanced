import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState("null"); // detail, add, null 3가지로 관리

  return (
    <ModalContext.Provider
      value={{
        modalState,
        setModalState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  // detail, add, add-success, null 4가지로 관리
  const [modalState, setModalState] = useState("null");

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

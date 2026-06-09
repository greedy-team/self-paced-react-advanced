import { createContext, useContext } from "react";

// App.jsx에서 관리하던 activeModal 상태를 ModalProvider로 이동
export const ModalContext = createContext(null);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("잘못된 ModalContext 사용");
  }
  return context;
}

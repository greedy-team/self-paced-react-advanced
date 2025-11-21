import { useState } from "react";

export default function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalType, setModalType] = useState(null);

  const open = (modalType) => {
    setIsOpen(true), setModalType(modalType);
  };
  const close = () => {
    setIsOpen(false), setModalType(null);
  };

  return { isOpen, modalType, open, close };
}

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalState, setModalState] = useState('list'); // detail, add, list 3가지로 관리

    return (
        <ModalProvider.Provider
            value={{
                modalState,
                setModalState
            }}
        >
            {children}
        </ModalProvider.Provider>
    );
}

export const useModalContext = () => useContext(ModalContext);

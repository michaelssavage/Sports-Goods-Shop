import { createContext, useMemo, useState } from "react";

export const ModalContext = createContext({
  modalOpen: false,
  setModalOpen: () => undefined,
});

export const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      modalOpen,
      setModalOpen,
    }),
    [modalOpen, setModalOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

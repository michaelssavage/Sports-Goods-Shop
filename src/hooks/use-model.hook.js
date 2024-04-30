import { useContext } from "react";
import { ModalContext } from "src/context";

export const useModal = () => {
  return useContext(ModalContext);
};

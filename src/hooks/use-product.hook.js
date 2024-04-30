import { useContext } from "react";
import { ShopDataContext } from "src/context";

export const useProduct = () => {
  return useContext(ShopDataContext);
};

import { useContext } from "react";
import { ShopDataContext } from "src/context";

export const useShopData = () => {
  return useContext(ShopDataContext);
};

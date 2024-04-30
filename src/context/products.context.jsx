import { createContext, useMemo, useState } from "react";
import data from "src/assets/shop_data.json";

export const ShopDataContext = createContext({
  name: "",
  logo: "",
  products: [],
});

export const ShopDataContextProvider = ({ children }) => {
  const [shopData] = useState(data);

  const value = useMemo(() => ({ shopData }), [shopData]);

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  );
};

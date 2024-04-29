import { useContext } from "react";
import { ShopDataContext } from "../context/products.context";

export const Home = () => {
  const { shopData } = useContext(ShopDataContext);

  return (
    <main>
      <h1>{shopData.name}</h1>
    </main>
  );
};

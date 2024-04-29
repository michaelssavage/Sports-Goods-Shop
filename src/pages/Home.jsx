import { useContext } from "react";
import { ShopDataContext } from "../context/products.context";
import { Products } from "../components/Products";

export const Home = () => {
  const { shopData } = useContext(ShopDataContext);

  return (
    <main className="page">
      <h1>{shopData.name}</h1>
      <Products products={shopData.products} />
    </main>
  );
};

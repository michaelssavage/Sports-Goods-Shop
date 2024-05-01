import { Products } from "src/components/Products";
import { useShopData } from "src/hooks";

export const Home = () => {
  const { shopData } = useShopData();

  return (
    <main className="page">
      <h1>{shopData.name}</h1>
      <Products products={shopData.products} />
    </main>
  );
};

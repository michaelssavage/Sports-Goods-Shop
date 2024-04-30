import { Products } from "src/components/Products";
import { useProduct } from "src/hooks";

export const Home = () => {
  const { shopData } = useProduct();

  return (
    <main className="page">
      <h1>{shopData.name}</h1>
      <Products products={shopData.products} />
    </main>
  );
};

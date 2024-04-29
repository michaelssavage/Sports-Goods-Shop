import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopDataContext } from "src/context/products.context";
import { collection, getDocs } from "firebase/firestore";
import { randomID } from "src/utils/randomID";
import { db } from "src/store/Firebase";

export const View = () => {
  const { shopData } = useContext(ShopDataContext);
  let { id } = useParams();
  const [product] = useState(
    shopData.products.find((p) => p.productId === parseInt(id))
  );

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      await getDocs(collection(db, "ads")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAds(newData);
      });
      console.log(ads);
    };
    fetchAds();
    console.log(ads);
  }, [ads]);

  return (
    <main>
      <h1>{product.productName ?? "Not Found"} </h1>
      <div>
        {ads.map((ad) => {
          return <p key={randomID()}>{ad.description}</p>;
        })}
      </div>
    </main>
  );
};

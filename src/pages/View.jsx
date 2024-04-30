import { useParams } from "react-router-dom";
import { getDocs, where, query } from "firebase/firestore";
import { randomID } from "src/utils/randomID";
import { collectionName } from "src/store/Firebase";
import { useQuery } from "@tanstack/react-query";
import { Ad } from "src/components/Ad/Ad";
import { useContext } from "react";
import { ShopDataContext } from "src/context/products.context";
import styles from "src/assets/styles/View.module.css";

export const View = () => {
  const { shopData } = useContext(ShopDataContext);
  let { id } = useParams();
  const product = shopData.products.find((p) => p.productId === parseInt(id));

  const fetchAds = async () => {
    const q = query(
      collectionName,
      where("productId", "==", product.productId)
    );
    const docs = await getDocs(q).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    });
    return docs;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["userAds"],
    queryFn: fetchAds,
  });

  if (isPending) return <span>Loading...</span>;

  if (error) {
    console.log(error);
    return <span>{`An error has occurred: ${error.message}`}</span>;
  }

  return (
    <main className={styles.container}>
      <h1>{product.productName ?? "Not Found"} </h1>
      <button className={styles.createBtn}>Create New Ad</button>
      {data.length === 0 ? (
        <p className={styles.noAds}>
          No Ads have been created for this product yet
        </p>
      ) : (
        data.map((ad) => {
          return (
            <div key={randomID()} className={styles.adInfo}>
              <Ad
                cta={ad.cta}
                img={ad.pics}
                description={ad.description}
                headline={ad.headline}
              />
              <div className={styles.actions}>
                <h2>Ad Actions</h2>
                <div>
                  <button>Update</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </main>
  );
};

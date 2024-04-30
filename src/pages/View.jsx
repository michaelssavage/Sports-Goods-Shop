import { useParams } from "react-router-dom";
import { randomID } from "src/utils/randomID";
import { fetchAds } from "src/store/Firebase";
import { useQuery } from "@tanstack/react-query";
import { Ad } from "src/components/Ad/Ad";
import styles from "src/assets/styles/View.module.css";
import { DeleteModal } from "src/components/View";
import { useModal, useProduct } from "src/hooks";

export const View = () => {
  const { shopData } = useProduct();
  const { modalOpen, setModalOpen } = useModal();
  let { id } = useParams();

  const product = shopData.products.find((p) => p.productId === parseInt(id));

  const { isPending, error, data } = useQuery({
    queryKey: ["ads", product.productId],
    queryFn: () => fetchAds(product.productId),
  });

  if (isPending) return <span>Loading...</span>;

  if (error) {
    console.log(error);
    return <span>{`An error has occurred: ${error.message}`}</span>;
  }

  return (
    <main className={styles.container}>
      <DeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <h1>{product.productName ?? "Not Found"} </h1>
      <button className={styles.createBtn}>Create New Ad</button>
      {data.length === 0 ? (
        <p className={styles.noAds}>
          No Ads have been created for this product yet
        </p>
      ) : (
        data.map((ad) => {
          return (
            <div key={randomID()}>
              <div className={styles.adInfo}>
                <Ad
                  cta={ad.cta}
                  img={ad.pics}
                  description={ad.description}
                  headline={ad.headline}
                />
                <div className={styles.actions}>
                  <h2>Ad Actions</h2>
                  <div>
                    <button>Edit</button>
                    <button onClick={() => setModalOpen(true)}>Delete</button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })
      )}
    </main>
  );
};

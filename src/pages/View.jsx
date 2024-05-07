import { useParams } from "react-router-dom";
import { fetchAds } from "src/store/Firebase";
import { useQuery } from "@tanstack/react-query";
import { Ad } from "src/components/Ad/Ad";
import styles from "src/assets/styles/View.module.css";
import { CreateView, DeleteView, EditView } from "src/components/View";
import { useModal, useShopData } from "src/hooks";
import { useState } from "react";
import { Modal } from "src/components/Modal";
import { Button } from "src/components/Button";

export const View = () => {
  const { shopData } = useShopData();
  const { modalOpen, setModalOpen } = useModal();
  let { id } = useParams();

  const product = shopData.products.find((p) => p.productId === parseInt(id));

  const [modalMode, setModalMode] = useState("CREATE");

  const [ad, setAd] = useState({});

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["ads", product.productId],
    queryFn: () => fetchAds(product.productId),
  });

  const handleDelete = (ad) => {
    setModalMode("DELETE");
    setAd(ad);
    setModalOpen(true);
  };
  const handleEdit = (ad) => {
    setModalMode("EDIT");
    setAd(ad);
    setModalOpen(true);
  };
  const handleCreate = () => {
    setModalMode("CREATE");
    setModalOpen(true);
  };

  const renderModal = (type) => {
    if (type === "CREATE") {
      return (
        <CreateView
          setModalOpen={setModalOpen}
          product={product}
          refetch={refetch}
        />
      );
    }
    if (type === "EDIT") {
      return <EditView setModalOpen={setModalOpen} ad={ad} refetch={refetch} />;
    }

    if (type === "DELETE") {
      return <DeleteView setModalOpen={setModalOpen} docId={ad.id} />;
    } else {
      return <div>There was an error rendering correct modal</div>;
    }
  };

  if (isPending) return <span>Loading...</span>;

  if (error) {
    console.log(error);
    return <span>{`An error has occurred: ${error.message}`}</span>;
  }

  return (
    <main className={styles.container}>
      <Modal title={modalMode} isOpen={modalOpen} setIsOpen={setModalOpen}>
        {renderModal(modalMode)}
      </Modal>
      <div className={styles.titleBox}>
        <h1>{product.productName ?? "Not Found"} </h1>
        <Button text="Create New Ad" onClick={handleCreate} />
      </div>

      {data.length === 0 ? (
        <p className={styles.noAds}>
          No Ads have been created for this product yet
        </p>
      ) : (
        data.map((ad) => {
          return (
            <div key={ad.id}>
              <div className={styles.adInfo}>
                <Ad
                  cta={ad.cta}
                  img={ad.pics}
                  description={ad.description}
                  headline={ad.headline}
                />
                <div className={styles.actions}>
                  <p>What action would you like to perform?</p>
                  <div>
                    <Button text="Edit Ad" onClick={() => handleEdit(ad)} />
                    <Button text="Delete Ad" onClick={() => handleDelete(ad)} />
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

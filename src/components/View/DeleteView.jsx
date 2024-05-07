import { useNotification } from "src/hooks";
import styles from "./View.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useMutation } from "@tanstack/react-query";
import { deleteAd } from "src/store/Firebase";

export const DeleteView = ({ docId, setModalOpen }) => {
  const navigate = useNavigate();
  const { notify } = useNotification();

  const { mutate } = useMutation({
    mutationFn: deleteAd,
    onSuccess: () => {
      setModalOpen(false);
      notify({
        type: "success",
        title: "The ad was deleted",
      });
      setTimeout(() => {
        navigate("/");
      }, 0);
    },
    onError: (err) => {
      console.log(err);
      notify({
        type: "error",
        title: "There was a problem deleting the ad",
      });
    },
  });

  const handleDelete = async () => {
    try {
      mutate(docId);
    } catch (err) {
      notify({
        type: "error",
        title: "There was an error deleting the ad",
      });
      console.log(err);
      setModalOpen(false);
    }
  };
  return (
    <div className={styles.modalChild}>
      <p>Are you sure you want to delete this ad?</p>
      <div>
        <Button onClick={handleDelete} text="Delete" />
        <Button
          styling={styles.cancel}
          onClick={() => setModalOpen(false)}
          text="Cancel"
        />
      </div>
    </div>
  );
};

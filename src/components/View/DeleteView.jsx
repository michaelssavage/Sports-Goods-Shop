import { useNotification } from "src/hooks";
import styles from "./View.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const DeleteView = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const { notify } = useNotification();

  const handleDelete = async () => {
    try {
      setModalOpen(false);
      navigate("/");
      notify({
        type: "success",
        title: "The ad has been deleted",
      });
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

import { useNotification } from "src/hooks";
import { Modal } from "../Modal";
import styles from "./View.module.css";
import { useNavigate } from "react-router-dom";

export const DeleteModal = ({ modalOpen, setModalOpen }) => {
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
    <Modal title="Delete Ad" isOpen={modalOpen} setIsOpen={setModalOpen}>
      <div className={styles.modalChild}>
        <p>Are you sure you want to delete this ad?</p>
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button className={styles.cancel} onClick={() => setModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

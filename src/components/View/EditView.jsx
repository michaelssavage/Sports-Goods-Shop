import styles from "./View.module.css";

export const EditView = ({ ad }) => {
  return (
    <div className={styles.modalChild}>
      <p>{ad.headline}</p>
    </div>
  );
};

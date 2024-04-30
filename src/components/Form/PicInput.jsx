import styles from "./Form.module.css";
import { Button } from "../Button";

export const PicInput = ({ pics, setPics }) => {
  const handlePicInputChange = (index, value) => {
    const newInputs = [...pics];
    newInputs[index] = value;
    setPics(newInputs);
  };

  const handleAddPicInput = () => {
    setPics((prevInputs) => [...prevInputs, ""]);
  };

  const handleRemovePicInput = (index) => {
    const newInputs = [...pics];
    newInputs.splice(index, 1);
    setPics(newInputs);
  };

  return (
    <div className={styles.formItem}>
      <label htmlFor="pics">Pics:</label>
      {pics.map((pic, index) => (
        <div key={index} className={styles.urlInput}>
          <input
            type="text"
            value={pic}
            placeholder="Enter URL"
            onChange={(e) => handlePicInputChange(index, e.target.value)}
          />
          {index > 0 && (
            <Button
              onClick={() => handleRemovePicInput(index)}
              text="Remove"
              ghost
              styling={styles.formBtn}
            />
          )}
        </div>
      ))}
      <Button
        onClick={handleAddPicInput}
        text="Add More"
        styling={`${styles.formBtn} ${styles.addMoreBtn}`}
      />
    </div>
  );
};

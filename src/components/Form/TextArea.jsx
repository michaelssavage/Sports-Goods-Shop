import styles from "./Form.module.css";

export const TextArea = ({ title, label, placeholder, value, onChange }) => {
  return (
    <div className={styles.formItem}>
      <label htmlFor={label}>{title}:</label>
      <textarea
        type="text"
        cols="0"
        rows="5"
        id={label}
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

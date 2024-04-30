import styles from "./Form.module.css";

export const TextInput = ({ title, label, placeholder, value, onChange }) => {
  return (
    <div className={styles.formItem}>
      <label htmlFor={label}>{title}:</label>
      <input
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

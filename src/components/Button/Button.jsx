import styles from "./Button.module.css";

export const Button = ({
  ghost = false,
  type = "button",
  text,
  onClick,
  styling,
  icon,
}) => {
  let classNames = `${styles.btn} ${ghost ? styles.ghost : ""} ${
    styling ? styling : ""
  }`;

  return (
    <button className={classNames} role={type} onClick={onClick}>
      {icon} {text}
    </button>
  );
};

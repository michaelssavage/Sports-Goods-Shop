import { useCallback, useEffect, useRef } from "react";
import { CrossIcon, TickIcon, WarningTriangle } from "src/components/Icon";
import styles from "./Notifications.module.css";
import { Button } from "../Button";

const displayDuration = 5000;

const typeMap = {
  success: {
    style: styles.success,
  },
  error: {
    style: styles.error,
  },
};

export const NotificationItem = ({ notification, onRemove }) => {
  const { id, type, title } = notification;
  const { style } = typeMap[type];

  const displayDurationTimeoutId = useRef();

  const onMouseEnter = () => {
    clearTimeout(displayDurationTimeoutId.current);
  };

  const onMouseLeave = () => {
    displayDurationTimeoutId.current = window.setTimeout(
      removeItem,
      displayDuration / 2
    );
  };

  const removeItem = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  useEffect(() => {
    displayDurationTimeoutId.current = window.setTimeout(
      removeItem,
      displayDuration
    );
    return () => clearTimeout(displayDurationTimeoutId.current);
  }, [removeItem]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${style} ${styles.notification}`}
      role="log"
    >
      <div>
        {type === "error" ? <WarningTriangle /> : <TickIcon />}

        <h5 className={styles.title}>{title}</h5>
        <Button
          styling={styles.close}
          onClick={removeItem}
          icon={<CrossIcon size="20" color="#fafffc" />}
        />
      </div>
    </div>
  );
};

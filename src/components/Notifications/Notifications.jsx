import { createPortal } from "react-dom";
import { useNotification } from "src/hooks/use-notification.hook";
import styles from "./Notifications.module.css";
import { NotificationItem } from "./NotificationItem";

export const Notifications = () => {
  const { notifications, remove } = useNotification();

  return createPortal(
    <div className={styles.container}>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={remove}
        />
      ))}
    </div>,
    document.body
  );
};

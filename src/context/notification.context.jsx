import { createContext, useCallback, useMemo, useState } from "react";
import { randomID } from "src/utils/randomID";

export const NotificationContext = createContext({
  notifications: [],
  notify: () => undefined,
  remove: () => undefined,
});

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback(
    (notification) => {
      const newNotification = { ...notification, id: randomID() };
      setNotifications((oldNotifications) => [
        ...oldNotifications,
        newNotification,
      ]);
    },
    [setNotifications]
  );

  const remove = useCallback(
    (id) => {
      setNotifications((oldNotifications) =>
        oldNotifications.filter((item) => item.id !== id)
      );
    },
    [setNotifications]
  );

  const value = useMemo(
    () => ({ notifications, notify, remove }),
    [notifications, notify, remove]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

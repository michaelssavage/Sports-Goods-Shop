import { useContext } from "react";
import { NotificationContext } from "src/context";

export const useNotification = () => {
  return useContext(NotificationContext);
};

import "client-only";

import { showNotification } from "@mantine/notifications";
import {
  IconCheck,
  IconExclamationMark,
  IconInfoSmall,
  IconX,
} from "@tabler/icons-react";
import { useCallback } from "react";
import { labels } from "../../config/labels";
import { Toast } from "./useToasts.types";

export function useToasts() {
  const error: Toast = useCallback((message) => {
    showNotification({
      title: labels.toasts.titles.error,
      message: message,
      color: "red",
      icon: <IconX />,
    });
  }, []);

  const warning: Toast = useCallback((message) => {
    showNotification({
      title: labels.toasts.titles.warning,
      message: message,
      color: "yellow",
      icon: <IconExclamationMark />,
    });
  }, []);

  const success: Toast = useCallback((message) => {
    showNotification({
      title: labels.toasts.titles.success,
      message: message,
      color: "green",
      icon: <IconCheck />,
    });
  }, []);

  const info: Toast = useCallback((message) => {
    showNotification({
      title: labels.toasts.titles.info,
      message: message,
      color: "blue",
      icon: <IconInfoSmall />,
    });
  }, []);

  return { error, warning, success, info };
}

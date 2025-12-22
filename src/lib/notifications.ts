import { notifications } from "@mantine/notifications";

export function showNotification({
  title,
  message,
  color,
}: {
  title: string;
  message?: string;
  color?: string;
}) {
  notifications.show({
    title: title,
    message: message,
    position: "top-right",
    autoClose: 3000,
    color: color,
  });
}

export function showErrorNotification(title: string, message?: string) {
  notifications.show({
    title: title,
    message: message,
    position: "top-right",
    autoClose: 3000,
    color: "red",
  });
}

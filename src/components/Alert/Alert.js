import * as Notification from '@mantine/notifications';
import { CheckIcon, CrossCircledIcon } from '@modulz/radix-icons';

export const showNotification = (title, message) => {
  Notification.showNotification({
    title: title,
    message: message,
    /*styles: (theme) => ({
      root: {
        backgroundColor: theme.colors.blue[6],
        borderColor: theme.colors.blue[6],
        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: theme.colors.blue[7] },
      },
    }),*/
  })
}

export const alertMessage = (message) => {
  Notification.showNotification({
    title: 'Error',
    message: message,
    color: 'red'
  })
}

export const startNotification = (id, title, message) => {
  Notification.showNotification({
    id: id,
    loading: true,
    title: title,
    message: message,
    autoClose: false,
    disallowClose: true,
  })
}

export const updateSuccessNotification = (id, message) => {
  Notification.updateNotification({
    id: id,
    color: 'teal',
    title: 'Success',
    message: message,
    icon: <CheckIcon />,
    autoClose: 2000,
  });
}

export const updateErrorNotification = (id, message) => {
  Notification.updateNotification({
    id: id,
    color: 'red',
    title: 'Error',
    message: message,
    icon: <CrossCircledIcon />,
    autoClose: 2000,
  });
}

export const hideNotification = (id) => {
  Notification.hideNotification(id);
}
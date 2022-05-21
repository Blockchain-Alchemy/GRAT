import { showNotification, updateNotification } from '@mantine/notifications';
import { CheckIcon, CrossCircledIcon } from '@modulz/radix-icons';

export const notify = (title, message) => {
  showNotification({
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
  showNotification({
    title: 'Error',
    message: message,
    color: 'red'
  })
}

export const startNotification = (title, message) => {
  showNotification({
    id: 'load-data',
    loading: true,
    title: title,
    message: message,
    autoClose: false,
    disallowClose: true,
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

export const finishNotification = (message, success = true) => {
  updateNotification({
    id: 'load-data',
    color: success? 'teal' : 'red',
    title: success? 'Success' : 'Error',
    message: message,
    icon: success? <CheckIcon /> : <CrossCircledIcon /> ,
    autoClose: 2000,
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
  });
}
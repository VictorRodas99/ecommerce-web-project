import { useState } from 'react'

export function useNotification() {
  const [notifications, setNotifications] = useState([])

  const createNotification = (color, message, icon) => {
    setNotifications([
      ...notifications,
      { id: notifications.length, color, message, icon }
    ])
  }

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
  }

  return { notifications, createNotification, deleteNotification }
}

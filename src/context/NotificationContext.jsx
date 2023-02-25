import { createContext } from 'react'
import { useNotification } from '@hooks/context/useNotification'

export const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const { notifications, createNotification, deleteNotification } =
    useNotification()

  return (
    <NotificationContext.Provider
      value={{ notifications, createNotification, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

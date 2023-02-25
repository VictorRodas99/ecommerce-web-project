import { useContext } from 'react'
import { NotificationContext } from '@context/NotificationContext'

/**
 * @returns {{
 *    notifications: Array<any>,
 *    createNotification: { ({ color, message, icon }: { color: string, message: string, icon: { () => JSX.Element } }) => void },
 *    deleteNotification: { (id: string) => void }
 * }}
 */
export function useNotification() {
  const context = useContext(NotificationContext)

  if (context === undefined) {
    throw new Error('useNotification must be used within a provider')
  }

  return context
}

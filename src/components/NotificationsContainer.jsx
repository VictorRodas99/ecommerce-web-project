import { NotificationCart } from '@components/Notification'
import { useNotification } from '@hooks/useNotification'

export function Notifications() {
  const { notifications, deleteNotification } = useNotification()

  return notifications.map(({ id, color, message, icon }) => (
    <NotificationCart
      key={`${id}-notification`}
      message={message}
      color={color}
      icon={icon}
      onDelete={() => deleteNotification(id)}
      autoClose={true}
    />
  ))
}

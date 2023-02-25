import { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { createPortal } from 'react-dom'
import createContainer from '@utils/createContainer'
import '@css/notification-container.css'
import '@css/notification.css'

const container = createContainer()
const timeToDelete = 300
const timeToClose = 1500

export function NotificationCart({
  icon: Icon,
  message,
  color,
  onDelete,
  autoClose = false
}) {
  const [isClosing, setIsClosing] = useState(false)
  const slideClass = isClosing ? 'slide-out' : 'slide-in'
  const shrinkClass = isClosing ? 'shrink' : undefined

  useEffect(() => {
    if (autoClose) {
      const timeOutId = setTimeout(() => setIsClosing(true), timeToClose)

      return () => {
        clearTimeout(timeOutId)
      }
    }
  }, [autoClose])

  useEffect(() => {
    if (isClosing) {
      const timeOutId = setTimeout(onDelete, timeToDelete)

      return () => {
        clearTimeout(timeOutId)
      }
    }
  }, [isClosing])

  return createPortal(
    <div className={`container ${shrinkClass}`}>
      <div className={`notification ${color} ${slideClass}`}>
        <Icon />
        {message}
        {autoClose && (
          <button onClick={() => setIsClosing(true)} className="close-button">
            <MdClose />
          </button>
        )}
      </div>
    </div>,
    container
  )
}

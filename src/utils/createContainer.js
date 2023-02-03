/**
 * Creates an instance of an element that it'll contain the notifications
 * @returns { HTMLElement }
 */
export default function createContainer() {
  const portalId = 'notify-container'
  let container = document.getElementById(portalId)

  if (container) return container

  container = document.createElement('div')
  container.setAttribute('id', portalId)
  container.className = 'container'

  document.body.appendChild(container)
  return container
}

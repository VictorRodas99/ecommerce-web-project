/**
 * @param {{
 *  id: 'back' | 'next',
 *  icon: React.JSX.Element
 *  page: number | undefined,
 *  eventHandler: (event: Event) => void
 * }} props
 */
export function Arrow({ id, page, icon, eventHandler }) {
  return (
    <div
      id={id}
      className={page ? 'arrow-container' : `arrow-disabled`}
      onClick={eventHandler}
    >
      <div className="page-message">{page ? `Pág. ${page}` : '🛇'}</div>
      {icon}
    </div>
  )
}

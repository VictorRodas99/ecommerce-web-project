export function Arrow({ id, page, icon, eventHandler }) {
  const handeClick = (event) => eventHandler(event)

  return (
    <div
      id={id}
      className={page ? 'arrow-container' : `arrow-disabled`}
      onClick={handeClick}
    >
      <div className="page-message">{page ? `Pág. ${page}` : '🛇'}</div>
      {icon}
    </div>
  )
}

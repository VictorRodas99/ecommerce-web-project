export function Arrow({ id, page, icon, eventHandler }) {
  const handleClick = (event) => eventHandler(event)

  return (
    <div
      id={id}
      className={page ? 'arrow-container' : `arrow-disabled`}
      onClick={handleClick}
    >
      <div className="page-message">{page ? `Pág. ${page}` : '🛇'}</div>
      {icon}
    </div>
  )
}

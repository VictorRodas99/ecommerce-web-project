export function Shadow({ displayControl }) {
  return (
    <div
      className="shadow-block"
      style={{ display: displayControl ? 'block' : 'none' }}
    ></div>
  )
}

export function ScrollController({ children }) {
  return <div className="scroll-control">{children}</div>
}

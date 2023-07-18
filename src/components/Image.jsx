/**
 * @param {HTMLImageElement} imageProps
 */
export function Image({ children, ...props }) {
  const existsLoadPriority = props.fetchPriority === 'high'

  return (
    <img
      src={props.src}
      loading={existsLoadPriority ? 'lazy' : 'eager'}
      decoding={existsLoadPriority ? 'async' : 'auto'}
      alt={props.alt || 'Generic image'}
      role="presentation"
      fetchPriority={props.fetchPriority}
      {...props}
    >
      {children}
    </img>
  )
}

export function Image({ src, alt, role, priority, events }) {
  const isBackground = role === 'presentation'

  return (
    <img
      src={src}
      loading={priority === 'high' ? 'lazy' : undefined}
      decoding={priority === 'high' ? 'async' : 'auto'}
      alt={alt}
      role={isBackground ? 'presentation' : undefined}
      fetchpriority={priority}
      {...events}
    />
  )
}

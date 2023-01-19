/**
 * @param {import('hono').Context} ctx
 * @param {import('hono').Next} next
 */
export const optionalSlash = (ctx, next) => {
  const { pathname } = new URL(ctx.req.url)

  if (pathname.at(-1) === '/') {
    return ctx.redirect(pathname.slice(0, -1))
  }

  return ctx.json(
    {
      error: 'Not found'
    },
    404
  )
}

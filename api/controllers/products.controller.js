export const getData = (ctx) => {
  return ctx.json(ctx.res.paginated)
}

export const getProductsById = (ctx) => {
  const { result, statusCode } = ctx.req.response
  return ctx.json(result, statusCode)
}

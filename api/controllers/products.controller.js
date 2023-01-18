export const getProductsById = (ctx) => {
  const { result, statusCode } = ctx.req.response
  return ctx.json(result, statusCode)
}

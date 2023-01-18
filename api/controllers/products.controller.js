import { data } from '../data/data-products.js'

export const getProductsById = (ctx) => {
  const id = Number(ctx.req.param('id'))

  if (isNaN(id)) {
    return ctx.json(
      {
        error: 'id parameter must be a number!'
      },
      400
    )
  }

  const foundProduct = data.homeProducts.find((product) => product.id === id)

  return foundProduct
    ? ctx.json(foundProduct)
    : ctx.json({ message: `Product with id ${id} not found!` }, 404)
}

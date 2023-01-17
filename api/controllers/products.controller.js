import homeProducts from '../../db/home-products.json'

export const getProducts = (ctx) => {
  return ctx.json(homeProducts)
}

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

  const foundProduct = homeProducts.find((product) => product.id === id)

  return foundProduct
    ? ctx.json(foundProduct)
    : ctx.json({ message: `Product with id ${id} not found!` }, 404)
}

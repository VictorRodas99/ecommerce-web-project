import { getTopicFromURL } from '../utils/tools.js'
import { data } from '../data/data-products.js'
import { parseId } from '../utils/parse-id.js'

/**
 *
 * @param {import('hono').Context} ctx
 * @param {import('hono').Next} next
 */
export const catchProduct = async (ctx, next) => {
  const dirtyId = ctx.req.param('id')

  if (!dirtyId) {
    return await next()
  }

  const { type, result } = parseId(dirtyId)
  if (type === 'invalid') {
    ctx.req.response = {
      result,
      statusCode: 400
    }
    return await next()
  }

  const topic = getTopicFromURL(ctx.req.url)
  const givenId = result //Result is the id if is a valid number
  const foundKey = Object.keys(data).find((key) =>
    key.toLowerCase().includes(topic)
  )

  const foundProduct = data[foundKey].find((product) => product.id === givenId)

  ctx.req.response = foundProduct
    ? { result: foundProduct, statusCode: 200 }
    : {
        result: { error: `Product with id ${givenId} not found!` },
        statusCode: 404
      }

  return await next()
}

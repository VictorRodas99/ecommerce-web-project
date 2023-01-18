import { Hono } from 'hono'
import { data } from '../data/data-products.js'
import { getProductsById } from '../controllers/products.controller'

const router = new Hono()

router.get('/', (ctx) => ctx.json(data.homeProducts))
router.get('/:id', getProductsById)

export default router

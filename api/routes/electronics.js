import { Hono } from 'hono'
import { getProductsById } from '../controllers/products.controller.js'
import { data } from '../data/data-products.js'

const router = new Hono()

router.get('/smartphones', (ctx) => ctx.json(data.smartphones))
router.get('/televisions', (ctx) => ctx.json(data.televisions))
router.get('/audio', (ctx) => ctx.json(data.audioDevices))

/* GET by Id */
router.get('/smartphones/:id', getProductsById)
router.get('/televisions/:id', getProductsById)
router.get('/audio/:id', getProductsById)

export default router

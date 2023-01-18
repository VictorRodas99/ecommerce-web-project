import { Hono } from 'hono'
import { getProductsById } from '../controllers/products.controller.js'
import { data } from '../data/data-products.js'

const router = new Hono()

router
  .get('/processors', (ctx) => ctx.json(data.processors))
  .get('/motherboards', (ctx) => ctx.json(data.motherboards))
  .get('/ram-devices', (ctx) => ctx.json(data.RAMDevices))
  .get('/graphics', (ctx) => ctx.json(data.graphicsCards))
  .get('/keyboards', (ctx) => ctx.json(data.keyboards))

/* GET by Id */
router
  .get('/processors/:id', getProductsById)
  .get('/motherboards/:id', getProductsById)
  .get('/ram-devices/:id', getProductsById)
  .get('/graphics/:id', getProductsById)
  .get('/keyboards/:id', getProductsById)

export default router

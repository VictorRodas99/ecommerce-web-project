import { Hono } from 'hono'
import { data } from '../data/data-products.js'

const router = new Hono()

router
  .get('/processors', (ctx) => ctx.json(data.processors))
  .get('/motherboards', (ctx) => ctx.json(data.motherboards))
  .get('/ram-devices', (ctx) => ctx.json(data.productsRAM))
  .get('/graphics', (ctx) => ctx.json(data.graphicsCards))
  .get('/keyboards', (ctx) => ctx.json(data.keyboards))

export default router

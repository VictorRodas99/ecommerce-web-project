import { Hono } from 'hono'
import { getProductsById } from '../controllers/products.controller.js'
import { data } from '../data/data-products.js'

const router = new Hono()

router
  .get('/notebooks', (ctx) => ctx.json(data.notebooks))
  .get('/printers', (ctx) => ctx.json(data.printers))
  .get('/monitors', (ctx) => ctx.json(data.monitors))
  .get('/storage', (ctx) => ctx.json(data.storageData))
  .get('/internet-devices', (ctx) => ctx.json(data.internetDevices))

/* Get by Id */
router
  .get('/notebooks/:id', getProductsById)
  .get('/printers/:id', getProductsById)
  .get('/monitors/:id', getProductsById)
  .get('/storage/:id', getProductsById)
  .get('/internet-devices/:id', getProductsById)

export default router

import { Hono } from 'hono'
import { data } from '../data/data-products.js'

const router = new Hono()

router
  .get('/notebooks', (ctx) => ctx.json(data.notebooks))
  .get('/printers', (ctx) => ctx.json(data.printers))
  .get('/monitors', (ctx) => ctx.json(data.monitors))
  .get('/storage', (ctx) => ctx.json(data.storageData))
  .get('/internet-devices', (ctx) => ctx.json(data.internetData))

export default router

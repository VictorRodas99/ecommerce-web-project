import { Hono } from 'hono'
import { data } from '../data/data-products.js'

const router = new Hono()

router.get('/smartphones', (ctx) => ctx.json(data.smartphones))
router.get('/televisions', (ctx) => ctx.json(data.televisions))
router.get('/audio', (ctx) => ctx.json(data.audioDevices))

export default router

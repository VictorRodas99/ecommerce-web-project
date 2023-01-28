import { Hono } from 'hono'
import { data } from '../data/data-products.js'
import { paginate } from '../middleware/pagination.js'
import { getData, getProductsById } from '../controllers/products.controller.js'

const router = new Hono()
const { notebooks, printers, monitors, storageData, internetDevices } = data

router
  .get('/notebooks', paginate(notebooks), getData)
  .get('/printers', paginate(printers), getData)
  .get('/monitors', paginate(monitors), getData)
  .get('/storage', paginate(storageData), getData)
  .get('/internet-devices', paginate(internetDevices), getData)

/* Get by Id */
router
  .get('/notebooks/:id', getProductsById)
  .get('/printers/:id', getProductsById)
  .get('/monitors/:id', getProductsById)
  .get('/storage/:id', getProductsById)
  .get('/internet-devices/:id', getProductsById)

export default router

import { Hono } from 'hono'
import { data } from '../data/data-products.js'
import { paginate } from 'api/middleware/pagination.js'
import { getData, getProductsById } from '../controllers/products.controller.js'


const router = new Hono()
const { processors, motherboards, RAMDevices, graphicsCards, keyboards } = data

router
  .get('/processors', paginate(processors), getData)
  .get('/motherboards', paginate(motherboards), getData)
  .get('/ram-devices', paginate(RAMDevices), getData)
  .get('/graphics', paginate(graphicsCards), getData)
  .get('/keyboards', paginate(keyboards), getData)

/* GET by Id */
router
  .get('/processors/:id', getProductsById)
  .get('/motherboards/:id', getProductsById)
  .get('/ram-devices/:id', getProductsById)
  .get('/graphics/:id', getProductsById)
  .get('/keyboards/:id', getProductsById)

export default router

import { Hono } from 'hono'
import { data } from '../data/data-products.js'
import { getData, getProductsById } from '../controllers/products.controller'
import { paginate } from '../middleware/pagination.js'

const router = new Hono()

router.get('/', paginate(data.homeProducts), getData)
router.get('/:id', getProductsById)

export default router

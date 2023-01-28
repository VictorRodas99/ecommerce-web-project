import { paginate } from 'api/middleware/pagination.js'
import { Hono } from 'hono'
import { getData, getProductsById } from '../controllers/products.controller.js'
import { data } from '../data/data-products.js'

const router = new Hono()
const { smartphones, televisions, audioDevices } = data

router.get('/smartphones', paginate(smartphones), getData)
router.get('/televisions', paginate(televisions), getData)
router.get('/audio', paginate(audioDevices), getData)

/* GET by Id */
router.get('/smartphones/:id', getProductsById)
router.get('/televisions/:id', getProductsById)
router.get('/audio/:id', getProductsById)

export default router

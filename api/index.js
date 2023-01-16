import { Hono } from 'hono'
import { infoEndpoints } from './controllers/info.controller'
import { getProducts, getProductsById } from './controllers/products.controller'

const app = new Hono()

app.get('/', infoEndpoints)
app.get('/products', getProducts)
app.get('/products/:id', getProductsById)

export default app

import { Hono } from 'hono'
import products from '../db/products.json'

const app = new Hono()

app.get('/', (ctx) => {
	return ctx.json([
		{
			endpoint: '/products',
			description: 'Returns the current list of products',
			method: 'GET'
		}
	])
})

app.get('/products', (ctx) => {
	return ctx.json(products)
})

export default app

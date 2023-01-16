import { Hono } from 'hono'
import products from '../db/products.json'

const app = new Hono()

app.get('/', (ctx) => {
	return ctx.json([
		{
			endpoint: '/products',
			description: 'Returns the current list of products',
			method: 'GET'
		},
		{
			endpoint: '/products/:id',
			description: 'Returns product by id',
			method: 'GET',
			parameters: {
				id: 'number'
			}
		}
	])
})

app.get('/products', (ctx) => {
	return ctx.json(products)
})

app.get('/products/:id', (ctx) => {
	const id = Number(ctx.req.param('id'))

	if(isNaN(id)) {
		return ctx.json({
			error: 'id parameter must be a number!'
		}, 400)
	}

	const foundProduct = products.find(product => product.id === id)

	return foundProduct 
			? ctx.json(foundProduct)
			: ctx.json({ message: `Product with id ${id} not found!` }, 404)
})

export default app

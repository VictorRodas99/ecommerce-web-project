export const infoEndpoints = (ctx) => {
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
}
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
    },
    {
      endpoint: '/computing/notebooks',
      description: 'Returns all the notebooks available',
      method: 'GET'
    },
    {
      endpoint: '/computing/printers',
      description: 'Returns all the printers available',
      method: 'GET'
    },
    {
      endpoint: '/computing/monitors',
      description: 'Returns all the monitors available',
      method: 'GET'
    },
    {
      endpoint: '/computing/storage',
      description: 'Returns all the storage available',
      method: 'GET'
    },
    {
      endpoint: '/computing/internet-devices',
      description: 'Returns all the internet related devices available',
      method: 'GET'
    },
    {
      endpoint: '/hardware/processors',
      description: 'Returns all the processors available',
      method: 'GET'
    },
    {
      endpoint: '/hardware/motherboards',
      description: 'Returns all the motherboards available',
      method: 'GET'
    },
    {
      endpoint: '/hardware/ram-devices',
      description: 'Returns all the memories RAM available',
      method: 'GET'
    },
    {
      endpoint: '/hardware/graphics',
      description: 'Returns all the graphics cards available',
      method: 'GET'
    },
    {
      endpoint: '/hardware/keyboards',
      description: 'Returns all the keyboards available',
      method: 'GET'
    },
    {
      endpoint: '/electronics/smartphones',
      description: 'Returns all the smartphones available',
      method: 'GET'
    },
    {
      endpoint: '/electronics/televisions',
      description: 'Returns all the televisions available',
      method: 'GET'
    },
    {
      endpoint: '/electronics/audio',
      description: 'Returns all the audio devices available',
      method: 'GET'
    }
  ])
}

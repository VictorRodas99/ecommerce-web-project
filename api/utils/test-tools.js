import { unstable_dev as unstableDev } from 'wrangler'
import { expect, beforeAll, afterAll, it } from 'vitest'

const requiredProperties = [
  { field: 'name', type: 'string' },
  { field: 'price', type: 'string' },
  { field: 'details', type: 'object' },
  { field: 'label', type: 'string' },
  { field: 'srcImages', type: 'object' },
  { field: 'id', type: 'number' }
]

export const setup = async () => {
  const worker = await unstableDev('api/index.js', {
    experimental: { disableExperimentalWarning: true }
  })

  return worker
}

/**
 * @param {*} givenData
 * @param {[ { field: string, type: string } ]} schema
 */
export const checkProperties = (givenData, schema) => {
  schema.forEach((expected) => {
    const { field, type } = expected
    expect(givenData).toHaveProperty(field)
    expect(givenData[field]).toBeTypeOf(type)
  })
}

export const compareArray = (a, b) => {
  if (a.length !== b.length) return false

  const uniqueValues = new Set([...a, ...b])

  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length
    const bCount = b.filter((e) => e === v).length
    if (aCount !== bCount) return false
  }

  return true
}

export const testEndpoint = (givenEndpoint) => {
  let worker

  beforeAll(async () => {
    worker = await setup()
  })

  afterAll(async () => {
    await worker.stop()
  })

  it('should have all required properties', async () => {
    if (givenEndpoint === '/products') {
      const res = await worker.fetch(givenEndpoint)
      if (!res) return

      const products = await res.json()
      products.forEach((product) => {
        checkProperties(product, requiredProperties)
      })

      return
    }

    const response = await worker.fetch()
    if (!response) return

    const allEndpoints = await response.json()
    const selectedEndpoints = allEndpoints
      .filter(({ endpoint }) => endpoint.includes(givenEndpoint))
      .map((object) => object.endpoint) //Takes only the endpoints and nothing else

    for (const endpoint of selectedEndpoints) {
      const res = await worker.fetch(endpoint)
      if (!res) return

      const products = await res.json()
      products.forEach((product) => {
        checkProperties(product, requiredProperties)
      })
    }
  })
}

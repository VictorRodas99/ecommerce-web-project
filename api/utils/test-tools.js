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

/**
 * @param {string} givenEndpoint
 */
export const testEndpoint = (givenEndpoint) => {
  let worker

  beforeAll(async () => {
    worker = await setup()
  })

  afterAll(async () => {
    await worker.stop()
  })

  const getRandomId = () => Math.floor(Math.random() * 20) + 1

  it('should have all required properties', async () => {
    if (givenEndpoint === '/products') {
      const res = await worker.fetch(givenEndpoint)
      if (!res) return

      const paginated = await res.json()
      expect(paginated).toHaveProperty('data')

      const products = paginated.data

      products.forEach((product) => {
        checkProperties(product, requiredProperties)
      })

      return
    }

    const response = await worker.fetch()
    if (!response) return

    const topic = givenEndpoint.replace('/', '')
    const allEndpoints = await response.json()
    const selectedEndpoints = allEndpoints[topic]

    for (const { endpoint } of selectedEndpoints) {
      const res = await worker.fetch(endpoint)
      if (!res) return

      const paginated = await res.json()
      expect(paginated).toHaveProperty('data')

      const products = paginated.data
      
      products.forEach((product) => {
        checkProperties(product, requiredProperties)
      })
    }
  })

  it('should return a specific product if the id is given as parameter', async () => {
    if (givenEndpoint === '/products') {
      const finalEndpoint = `${givenEndpoint}/${getRandomId()}`

      const res = await worker.fetch(finalEndpoint)
      expect(res.status, `Fetch failed at ${finalEndpoint}`).toBe(200)

      const product = await res.json()
      checkProperties(product, requiredProperties)

      return
    }

    const response = await worker.fetch()
    if (!response) return

    const topic = givenEndpoint.replace('/', '')
    const allEndpoints = await response.json()
    const selectedEndpoints = allEndpoints[topic]

    for (const { endpoint } of selectedEndpoints) {
      const finalEndpoint = `${endpoint}/${getRandomId()}`

      const res = await worker.fetch(finalEndpoint)
      expect(res.status, `Fetch failed at ${finalEndpoint}`).toBe(200)

      const product = await res.json()
      checkProperties(product, requiredProperties)
    }
  })
}

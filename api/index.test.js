import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import {
  compareArray,
  checkProperties,
  testEndpoint,
  setup
} from './utils/test-tools'

describe('/ endpoint', () => {
  let worker

  beforeAll(async () => {
    worker = await setup()
  })

  afterAll(async () => {
    await worker.stop()
  })

  it('should return a json with available endpoints', async () => {
    const res = await worker.fetch()
    expect(res).toBeDefined()

    if (!res) return

    const jsonResponse = await res.json()
    const expectedProperties = [
      { field: 'endpoint', type: 'string' },
      { field: 'description', type: 'string' },
      { field: 'method', type: 'string' }
    ]

    Object.values(jsonResponse).forEach((endpoints) => {
      endpoints.forEach((endpoint) => {
        checkProperties(endpoint, expectedProperties)
      })
    })
  })

  it('should return endpoints with parameters', async () => {
    const res = await worker.fetch()
    if (!res) return

    const jsonResponse = await res.json()
    const { endpointsWithParams } = jsonResponse

    expect(endpointsWithParams).toBeDefined()

    endpointsWithParams.forEach((endpoint) => {
      const hasParams = endpoint.endpoint.split('/').at(-1).includes(':')

      expect(hasParams).toBe(true)
      expect(endpoint).toHaveProperty('parameters')
      expect(endpoint.parameters).toBeTypeOf('object')
    })
  })

  it('should return the endpoint with all their parameters if it had them', async () => {
    const res = await worker.fetch()
    if (!res) return

    const jsonResponse = await res.json()
    const { endpointsWithParams } = jsonResponse

    endpointsWithParams.forEach((endpnt) => {
      const { endpoint, parameters: paramsDescriber } = endpnt
      const paramsDescribed = Object.keys(paramsDescriber)

      const paramsInRoute = endpoint
        .split('/')
        .filter((e) => e[0] === ':')
        .map((e) => e.replace(':', ''))

      const areEquals = compareArray(paramsDescribed, paramsInRoute)
      expect(areEquals).toBe(true)
    })
  })
})

describe('home endpoint', () => testEndpoint('/products'))
describe('computing endpoint', () => testEndpoint('/computing'))
describe('hardware endpoint', () => testEndpoint('/hardware'))
describe('electronics endpoint', () => testEndpoint('/electronics'))

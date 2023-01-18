import { unstable_dev as unstableDev } from 'wrangler'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import {
  compareArray,
  checkProperties,
  checkValuesType
} from './utils/test-tools'

const setup = async () => {
  const worker = await unstableDev('api/index.js', {
    experimental: { disableExperimentalWarning: true }
  })

  return worker
}

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
      { field: 'endpoint' },
      { field: 'description' },
      { field: 'method' }
    ]

    jsonResponse.forEach((endpoint) => {
      checkProperties(endpoint, expectedProperties)
    })
  })

  it('should return a json with valid types and fields', async () => {
    const res = await worker.fetch()
    if (!res) return

    const jsonResponse = await res.json()
    jsonResponse.forEach((endpoint) => {
      const hasParams = endpoint.endpoint.split('/').at(-1).includes(':')

      if (!hasParams) {
        checkValuesType(endpoint, 'string')
        return
      }

      expect(endpoint).toHaveProperty('parameters')
      const { parameters, ...restOfData } = endpoint
      checkValuesType(restOfData, 'string')
      expect(parameters).toBeTypeOf('object')
    })
  })

  it('should return the endpoint with all their parameters if it had them', async () => {
    const res = await worker.fetch()
    if (!res) return

    const jsonResponse = await res.json()
    const endpointsWithParams = jsonResponse.filter(
      (endpoint) => endpoint.parameters
    )

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

import { expect } from 'vitest'

/**
 * @param {*} givenData
 * @param {[ { field: string } ]} schema
 */
export const checkProperties = (givenData, schema) => {
  schema.forEach((expected) => {
    expect(givenData).toHaveProperty(expected.field)
  })
}

export const checkValuesType = (givenData, type) => {
  Object.values(givenData).forEach((value) => {
    expect(value).toBeTypeOf(type)
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

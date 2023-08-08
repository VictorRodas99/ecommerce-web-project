import { isLiteralObject } from '@utils/tools'

/**
 * 
 * @param {{ data: { [x]: string }, validFields: { key: string, type: string, itCanBe?: 'null' | 'undefined' }[] }} params 
 */
export function validateObjectSchema({ data, validFields }) {
    if (!isLiteralObject(data)) {
        return false
    }

    const paramEntries = Object.entries(data)

    for (const field of validFields) {
        const existsField = paramEntries.find(
            ([key, value]) => {
                if (field.key !== key) {
                    return false
                }

                const validType = field.type === typeof value

                if (field.itCanBe) {
                    return validType || JSON.stringify(value) === field.itCanBe
                }

                return validType
            }
        )

        if (!existsField) {
            return false
        }
    }

    return true
}

/**
 * Returns true if given param has this schema:
 * 
 * ```ts
 * type Product = {
 *  id: number,
 *  name: string,
 *  price: string,
 *  srcImages: string[],
 *  details: { [x]: string }
 * }
 * ```
 */
export function validateProductFields({ product }) {
    if (!isLiteralObject(product)) {
        return false
    }

    const validFields = [
        { key: 'id', type: 'number' },
        { key: 'name', type: 'string' },
        { key: 'price', type: 'string' },
        { key: 'srcImages', type: 'object' },
        { key: 'details', type: 'object' }
    ]

    const isValid = validateObjectSchema({ data: product, validFields })

    if (!isValid) {
        return false
    }

    const srcImages = product.srcImages
    const details = product.details

    if (!Array.isArray(srcImages) || !isLiteralObject(details)) {
        return false
    }

    const isString = (value) => typeof value === 'string'

    const isValidObject = Object.values(details).every(isString)
    const isValidArray = srcImages.every(isString)

    if (!isValidArray || !isValidObject) {
        return false
    }

    return true
}

export function validateSortingOptions(newOptions) {
    if (!Array.isArray(newOptions)) {
        throw new Error('Expected new sorting options to be Array')
    }

    if (newOptions.length <= 0) {
        throw new Error('Expected newOptions Array to be non empty')
    }

    const eachIsObject = newOptions.every(isLiteralObject)

    if (!eachIsObject) {
        throw new Error(
            'Expected every item of newOptions array to be Literal Objects'
        )
    }

    const expectedSchema = [
        { key: 'value', type: 'string' },
        { key: 'text', type: 'string' },
        { key: 'sortingCallback', type: 'function', itCanBe: 'null' }
    ]

    const itHasValidSchema = newOptions.every((option) =>
        validateObjectSchema({ data: option, validFields: expectedSchema })
    )

    if (!itHasValidSchema) {
        throw new Error(
            'Expected type { value: string, text: string, sortingCallback: () => Product | null } in newOption'
        )
    }
}
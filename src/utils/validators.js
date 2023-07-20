import { isLiteralObject } from '@utils/tools'

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

    const paramEntries = Object.entries(product)

    for (const field of validFields) {
        const existsField = paramEntries.find(
            ([key, value]) => field.key === key && field.type === typeof value
        )

        if (!existsField) {
            return false
        }
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
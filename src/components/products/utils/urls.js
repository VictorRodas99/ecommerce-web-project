import { parseNameToURI } from '@utils/tools'

/**
 * @param {{ page: number, slugFrom: string }} param
 */
export function createProductUrl({ page, slugFrom }) {
  return `/product/${page ?? 1}/${parseNameToURI(slugFrom)}`
}
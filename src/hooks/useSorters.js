import { useContext } from 'react'
import { SorterContext } from '@context/CategoryContext'

/**
 * @typedef {import('@services/getProducts').Product} Product
 * @typedef {() => null | Product} SortCallback
 * @typedef {{ value: string, text: string, sortingCallback: SortCallback | null }} SortOption
 * @typedef {{ value: string, text: string }} Option
 */

/**
 * @returns {{
 *  callback: () => (products: Product[]) => Product[]
 *  sortingOptions: SortOption[],
 *  getOnlyOptions: () => Option,
 *  saveSortingOptions: (newOptions: SortOption[]) => void,
 *  saveSorterCallback: (callback: (product: Product) => void) => void
 * }}
 */
export function useSorters() {
  return useContext(SorterContext)
}
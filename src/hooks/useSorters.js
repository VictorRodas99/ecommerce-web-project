import { useContext } from 'react'
import { SorterContext } from '@context/CategoryContext'

/**
 * @typedef {import('@services/getProducts').Product} Product
 * @typedef {() => null | Product} SortCallback
 * @typedef {{ value: string, text: string, sortingCallback: SortCallback | null }} SortOption
 * @typedef {{ value: string, text: string }} Option
 *
 * @typedef {{
 *  callback: () => (products: Product[]) => Product[]
 *  sortingOptions: SortOption[],
 *  currentOption: Option,
 *  saveSelectedOption: (newOption: Option) => void,
 *  saveSortingOptions: (newOptions: SortOption[]) => void,
 *  saveSorterCallback: (callback: (product: Product) => void) => void
 * }} SorterContext
 */

/**
 * @returns {SorterContext}
 */
export function useSorters() {
  return useContext(SorterContext)
}

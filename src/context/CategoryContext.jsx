import { validateObjectSchema, validateSortingOptions } from '@utils/validators'
import { createContext, useState } from 'react'

export const SorterContext = createContext()

/**
 * This works with a select, to sort products based on the given criteria
 */
export default function SorterProvider({ children }) {
  const [sortingOptions, setSortingOptions] = useState([])
  const [currentSorterCallback, setCurrentSorterCallback] = useState(null)
  const [currentOption, setCurrentOption] = useState()

  const saveSortingOptions = (newOptions) => {
    validateSortingOptions(newOptions)
    setSortingOptions(newOptions)
  }

  const saveSorterCallback = (givenParam) => {
    if (givenParam !== null && typeof givenParam !== 'function') {
      throw new Error('newCallback for sorters must be of type function')
    }

    setCurrentSorterCallback(() => givenParam)
  }

  const saveSelectedOption = (newOption) => {
    validateObjectSchema({
      data: newOption,
      validFields: [
        { key: 'value', type: 'string' },
        { key: 'text', type: 'string' },
        { key: 'sortingCallback', type: 'function', itCanBe: 'null' }
      ]
    })

    setCurrentOption(newOption)
  }

  return (
    <SorterContext.Provider
      value={{
        callback: currentSorterCallback,
        sortingOptions,
        currentOption,
        saveSelectedOption,
        saveSortingOptions,
        saveSorterCallback
      }}
    >
      {children}
    </SorterContext.Provider>
  )
}

import { isLiteralObject } from '@utils/tools'
import { createContext, useState } from 'react'

export const SorterContext = createContext()

/**
 * This works with a select, to sort products based on the given criteria
 */
export default function SorterProvider({ children }) {
  const [sortingOptions, setSortingOptions] = useState([])
  const [currentSorterCallback, setCurrentSorterCallback] = useState(null)

  const saveSortingOptions = (newOptions) => {
    // console.log('saving data')

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

    //TODO: validar que el formato sea Array<{ value: string, text: string, sortCallback: null | () => Product }>
    setSortingOptions(newOptions)
  }

  const saveSorterCallback = (givenParam) => {
    if (givenParam !== null && typeof givenParam !== 'function') {
      throw new Error('newCallback for sorters must be of type function')
    }

    setCurrentSorterCallback(() => givenParam)
  }

  const getOnlyOptions = () => {
    return sortingOptions.map((option) => {
      const { sortingCallback, ...onlyTextAndValue } = option
      return onlyTextAndValue
    })
  }

  return (
    <SorterContext.Provider
      value={{
        callback: currentSorterCallback,
        sortingOptions,
        getOnlyOptions,
        saveSortingOptions,
        saveSorterCallback
      }}
    >
      {children}
    </SorterContext.Provider>
  )
}
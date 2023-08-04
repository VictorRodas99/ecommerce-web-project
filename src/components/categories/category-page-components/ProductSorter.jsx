import { Select } from '@components/page-elements/Select'

import { useSorters } from '@hooks/useSorters'
import optionsForSort from '../config/sortingOptions'
import ProductViewsOptions from './ProductViews'

export default function ProductSorter() {
  const { sortingOptions, saveSorterCallback } = useSorters()

  const getValueforSorting = (selectedption) => {
    if (selectedption.value !== 'default') {
      const currentOption = sortingOptions.find(
        (option) => option.value === selectedption.value
      )

      return saveSorterCallback(currentOption.sortingCallback)
    }

    saveSorterCallback(null)
  }

  return (
    <>
      <form className="category-section sorters">
        <Select
          label="Ordenar por: "
          options={optionsForSort}
          valueSetter={getValueforSorting}
        />
      </form>
      <ProductViewsOptions />
    </>
  )
}

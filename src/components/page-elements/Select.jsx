import './styles/select.css'
import { SelectIcon, Options } from './select/Components'
import { useSelect } from './hooks/useSelect'
import { useEffect } from 'react'

import { useSorters } from '@hooks/useSorters'

export function Select({ label, options, valueSetter }) {
  const sorterContext = useSorters() // returns undefined if is not wrapped on a Provider
  const { optionsVisibility, currentOption, value } = useSelect({ options })

  useEffect(() => {
    if (sorterContext) {
      const { saveSortingOptions } = sorterContext
      saveSortingOptions(options)
    }
  }, [])

  useEffect(() => {
    if (!value) {
      return
    }

    valueSetter(value)
  }, [value])

  return (
    <>
      <strong>{label}</strong>
      <div className="select-container" tabIndex="0">
        <div className="selector-label-container">
          <p className="selector-label">{currentOption.text}</p>
          <SelectIcon mode={optionsVisibility} />
        </div>

        <Options options={options} />
      </div>
    </>
  )
}

import './styles/select.css'
import { SelectIcon, Options } from './select/Components'
import { useSelect } from './hooks/useSelect'
import { useEffect } from 'react'

export function Select({ label, options, valueSetter }) {
  const { optionsVisibility, currentOption, value } = useSelect({ options })
  useEffect(() => valueSetter(value), [value])

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

import { selectReducer, SELECT_ACTIONS } from '../select/reducer/select.reducer'
import { getSelectElements } from '@utils/tools'
import { useEffect, useReducer } from 'react'

/**
 * @param {{ options: { value: string, text: string }[] }} options
 */
export function useSelect({ options }) {
  const [selectStates, dispatch] = useReducer(selectReducer, {
    optionsVisibility: false,
    selectValue: options[0].value,
    selectedOption: options[0]
  })

  const changeDropdownVisibility = () => {
    dispatch({
      type: SELECT_ACTIONS.dropdownVisibility
    })
  }

  const changeSelectOption = (event) => {
    dispatch({
      type: SELECT_ACTIONS.changeOption,
      payload: { event }
    })
  }

  const handleClickOutsideSelect = (event) => {
    const { dropdown, labelContainer } = getSelectElements()

    if (event.target !== labelContainer && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show')
    }
  }

  useEffect(() => {
    const { labelContainer, dropdownValues } = getSelectElements()

    window.addEventListener('click', handleClickOutsideSelect)
    labelContainer.addEventListener('click', changeDropdownVisibility)

    dropdownValues.forEach((option) => {
      option.addEventListener('click', changeSelectOption)
    })

    return () => {
      window.removeEventListener('click', handleClickOutsideSelect)
      labelContainer.removeEventListener('click', changeDropdownVisibility)

      dropdownValues.forEach((option) => {
        option.removeEventListener('click', changeSelectOption)
      })
    }
  }, [])

  return {
    optionsVisibility: selectStates.optionsVisibility,
    currentOption: selectStates.selectedOption,
    value: selectStates.selectValue
  }
}

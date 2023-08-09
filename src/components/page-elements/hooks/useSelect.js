import { selectReducer, SELECT_ACTIONS } from '../select/reducer/select.reducer'
import { getSelectElements } from '@utils/tools'
import { useEffect, useReducer } from 'react'

/**
 * @typedef {import('@hooks/useSorters').Option} Option
 */

/**
 * @param {{ options: { value: string, text: string }[], context: { existsProvider: boolean, data: Option } }} options
 */
export function useSelect({ options, context }) {
  const [selectStates, dispatch] = useReducer(selectReducer, {
    optionsVisibility: false,
    selectValue: options[0].value,
    selectedOption: options[0]
  })

  const setContextData = (data) => {
    dispatch({
      type: SELECT_ACTIONS.context,
      payload: { data }
    })
  }

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

    if (
      event.target !== labelContainer &&
      dropdown.classList.contains('show')
    ) {
      dropdown.classList.remove('show')
    }
  }

  useEffect(() => {
    const { existsProvider } = context
    const existsSavedOption = existsProvider && Boolean(context.data)

    if (existsSavedOption) {
      setContextData({
        data: context.data,
        value: context.data.value
      })
    }

    return () => {
      setContextData({
        data: selectStates,
        value: selectStates.selectValue
      })
    }
  }, [])

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

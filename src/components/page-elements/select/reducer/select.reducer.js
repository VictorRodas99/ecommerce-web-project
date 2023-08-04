import { getSelectElements } from '@utils/tools'

export const SELECT_ACTIONS = {
  dropdownVisibility: 'change select\'s dropdown visibility',
  changeOption: 'select a current option, with its value and text',
  context: 'set context data (saved options) if exists'
}

/**
 * @typedef {{
 *   optionsVisibility: boolean
 *   selectValue: string
 *   selectedOption: {
 *       value: string
 *       text: string
 *   }
 *  }} SelectState
 * 
 * @param {SelectState} state 
 * @param {{ type: string, payload?: any }} action
 * 
 * @returns {SelectState}
 */
export function selectReducer(state, action) {
  const { type } = action

  switch (type) {
    case SELECT_ACTIONS.dropdownVisibility: {
      const { dropdown } = getSelectElements()

      dropdown.classList.toggle('show')

      return {
        optionsVisibility: !state.optionsVisibility,
        ...state
      }
    }

    case SELECT_ACTIONS.changeOption: {
      const { payload } = action
      const { event } = payload

      if (!event instanceof Event) {
        throw new Error('Expected payload for changeValue reducer to be Event type')
      }

      const selectedOption = event.currentTarget ?? event.target
      const { dropdownValues } = getSelectElements()

      dropdownValues.forEach((option) => {
        option.classList.remove('option-active')
      })

      selectedOption.classList.add('option-active')

      const currentHTMLLiData = selectedOption.getAttribute('data')
      const HTMLLiTextContent = selectedOption.textContent

      const finalOption = {
        value: currentHTMLLiData,
        text: HTMLLiTextContent
      }

      return {
        selectValue: currentHTMLLiData,
        selectedOption: finalOption,
        optionsVisibility: !state.optionsVisibility
      }
    }
    case SELECT_ACTIONS.context: {
      const { payload } = action
      const { data: context } = payload

      return {
        ...state,
        selectValue: context.value,
        selectedOption: context.data
      }
    }
  }
}

import { useState, useEffect } from 'react'

export function useSelect({ options }) {
  const [optionsVisibility, setOptionsVisibility] = useState(false)
  const [value, setValue] = useState(options[0].value)
  const [currentOption, setCurrentOption] = useState(options[0])

  useEffect(() => {
    const optionValues = document.querySelectorAll('.select-dropdown__value')
    const labelContainer = document.querySelector('.selector-label-container')
    const dropdown = document.querySelector('.select-dropdown')

    const dropdownHandler = () => {
      dropdown.classList.toggle('show')
      setOptionsVisibility((previous) => !previous)
    }

    const updateSelector = ({ selectedOption }) => {
      optionValues.forEach((option) => option.classList.remove('option-active'))

      selectedOption.classList.add('option-active')
      dropdownHandler()
      setCurrentOption({
        value: selectedOption.getAttribute('data'),
        text: selectedOption.textContent
      })
    }

    const handleClickOption = ({ currentTarget }) => {
      const currentValue = currentTarget.getAttribute('data')
      setValue(currentValue)
      updateSelector({ selectedOption: currentTarget })
    }

    const handleClickOutsideSelect = (event) => {
      if (event.target !== labelContainer) {
        dropdown.classList.remove('show')
        setOptionsVisibility(false)
      }
    }

    window.addEventListener('click', handleClickOutsideSelect)
    labelContainer.addEventListener('click', dropdownHandler)
    optionValues.forEach((option) =>
      option.addEventListener('click', handleClickOption)
    )

    return () => {
      window.removeEventListener('click', handleClickOutsideSelect)
      labelContainer.removeEventListener('click', dropdownHandler)
      optionValues.forEach((option) =>
        option.removeEventListener('click', handleClickOption)
      )
    }
  }, [])

  return {
    optionsVisibility,
    currentOption,
    value
  }
}

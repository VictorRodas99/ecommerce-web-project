import { useState, useEffect } from 'react'

const SHOW_FORM_CLASSES = {
  homeIcon: 'deactive-home-icon',
  icon: 'active-icon',
  form: 'active-form',
  input: 'search-container'
}

const HIDDEN_FORM_CLASSES = {
  homeIcon: 'active-home-icon',
  icon: '',
  form: 'deactive-form',
  input: 'deactive-input'
}

export function useMobileForm() {
  const [displayFormMode, setDisplayFormMode] = useState(HIDDEN_FORM_CLASSES)

  const changeFormVisibility = ({ mode }) => {
    if (mode === 'hidden') setDisplayFormMode(HIDDEN_FORM_CLASSES)
    else if (mode === 'show') setDisplayFormMode(SHOW_FORM_CLASSES)
    else {
      throw new Error('Invalid display mode for form')
    }
  }

  const onHeaderBlur = () => {
    const main = document.querySelector('main')
    const resetHeader = () => changeFormVisibility({ mode: 'hidden' })

    main.addEventListener('click', resetHeader)

    return () => {
      main.removeEventListener('click', resetHeader)
    }
  }

  useEffect(onHeaderBlur, [])

  return {
    displayFormMode,
    changeFormVisibility
  }
}

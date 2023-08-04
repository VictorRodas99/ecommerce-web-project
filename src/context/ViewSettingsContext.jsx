import { createContext, useState } from 'react'

export const ViewSettingsContext = createContext()

export default function ViewSettingsProvider({ children }) {
  const [viewOption, setViewOption] = useState('grid')

  const changeViewOption = (newOption) => {
    if (typeof newOption !== 'string') {
      throw new TypeError('Expected newOption param to be string')
    }

    if (newOption !== 'grid' && newOption !== 'col') {
      throw new TypeError('Expected newOption to be "grid" or "col"')
    }

    setViewOption(newOption)
  }

  return (
    <ViewSettingsContext.Provider value={{ viewOption, changeViewOption }}>
      {children}
    </ViewSettingsContext.Provider>
  )
}

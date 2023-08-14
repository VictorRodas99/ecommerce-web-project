import { mobileSections } from '@components/MobileComponents'
import { createContext, useState } from 'react'

export const MobileMenuContext = createContext()

export default function MobileMenuProvider({ children }) {
  const [section, setSection] = useState({
    wasClicked: {
      [mobileSections.categories]: false,
      [mobileSections.mainSections]: false
    }
  })

  const resetMobileItems = () => {
    setSection({
      wasClicked: {
        [mobileSections.categories]: false,
        [mobileSections.mainSections]: false
      }
    })
  }

  return (
    <MobileMenuContext.Provider
      value={{ section, resetMobileItems, setSection }}
    >
      {children}
    </MobileMenuContext.Provider>
  )
}

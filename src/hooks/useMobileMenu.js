import { useContext } from "react";
import { MobileMenuContext } from "@context/MobileMenuContext";

/**
 * @returns {{
 *  section: { wasClicked: { [x: string]: boolean } },
 *  resetMobileItems: () => void,
 *  setSection: React.Dispatch<React.SetStateAction<{ wasClicked: { [x: string]: boolean } }>
 * }}
 */
export function useMobileMenu() {
  const context = useContext(MobileMenuContext)

  if (context === undefined) {
    throw new Error('useMobileMenu must be used within a provider')
  }

  return context
}
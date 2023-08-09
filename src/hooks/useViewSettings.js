import { useContext } from 'react'
import { ViewSettingsContext } from '@context/ViewSettingsContext'

/**
 * @returns {{
 *  viewOption: 'grid' | 'col',
 *  changeViewOption: (newOption: 'grid' | 'col') => void
 * }}
 */
export function useViewSettings() {
  const context = useContext(ViewSettingsContext)

  if (context === undefined) {
    throw new Error('useViewSettings must be used within a provider')
  }

  return context
}

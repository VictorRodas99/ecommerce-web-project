import { useContext } from 'react'
import { PageContext } from '@context/PageContext'

/**
 * @returns {{
 *  page: number,
 *  savePage: { (page: number) => void }
 * }}
 */
export function usePage() {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('usePage must be used within a provider')
  }

  return context
}

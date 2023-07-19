import { useContext, useEffect } from 'react'
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

/**
 * @param {{ urlBase: string, refreshMethod: (url: string) => void }} param
 */
export function usePageRederingHandler({ urlBase, refreshMethod }) {
  const { page: currentPage } = usePage()

  useEffect(() => {
    if (!currentPage) {
      return // First render
    }

    refreshMethod(`${urlBase}?page=${currentPage}`)
  }, [])
}
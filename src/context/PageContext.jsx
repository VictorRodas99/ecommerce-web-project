import { createContext, useState } from 'react'

export const PageContext = createContext()

export function PageProvider({ children }) {
  const [page, setPage] = useState(null)

  const savePage = (page) => {
    if (typeof page !== 'number')
      throw new Error('A number must be provided as a page')
    setPage(page)
  }

  return (
    <PageContext.Provider value={{ page, savePage }}>
      {children}
    </PageContext.Provider>
  )
}

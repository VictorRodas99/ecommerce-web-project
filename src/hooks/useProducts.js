import { useState, useEffect } from 'react'
import { getProducts } from '@services/getProducts'

export function useProducts({ apiUrl }) {
  const [products, setProducts] = useState([])
  const [previousPage, setPreviuosPage] = useState(undefined)
  const [nextPage, setNextPage] = useState(undefined)

  const refreshPage = (previous, next) => {
    setPreviuosPage(previous)
    setNextPage(next)
  }

  const refreshProducts = ({ apiUrl }) => {
    getProducts(apiUrl).then((page) => {
      setProducts(page.data)
      refreshPage(page.previousPage, page.nextPage)
    })
  }

  useEffect(() => {
    refreshProducts({ apiUrl })
  }, [])

  return {
    products,
    pages: { previousPage, nextPage },
    refreshProducts
  }
}

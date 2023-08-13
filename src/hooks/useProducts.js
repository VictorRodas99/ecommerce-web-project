import { useState, useEffect } from 'react'
import { getProducts } from '@services/getProducts'

/**
 * @typedef {import('@services/getProducts').Product} Product
 * @param {{ apiUrl: string }} param
 * @returns {{ products: Product[], pages: { previousPage: number, nextPage: number }, refreshProducts: ({ apiUrl }: { apiUrl: string }) => void }}
 */
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
  }, [apiUrl])

  return {
    products,
    pages: { previousPage, nextPage },
    refreshProducts
  }
}

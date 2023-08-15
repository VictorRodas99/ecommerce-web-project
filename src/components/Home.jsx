import { Categories } from '@components/Categories'
import { Products } from '@components/Products'
import { API_URLS } from 'src/config'

import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    document.title = 'Info-Shop | Ecommerce'
  }, [])

  return (
    <>
      <Categories />
      <Products apiUrl={API_URLS.home} category="Productos" />
    </>
  )
}

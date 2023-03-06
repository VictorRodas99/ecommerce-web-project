import '@css/products.css'
import { ProductCard } from './products/ProductCard'
import { useProducts } from '@hooks/useProducts'
import { PageController } from '@components/PageController'
import { API_URLS } from 'src/config'

import { useEffect, useRef } from 'react'
import { usePage } from '@hooks/usePage'

export function Products() {
  const { products, pages, refreshProducts } = useProducts({
    apiUrl: API_URLS.home
  })

  const { page: savedPage, savePage } = usePage()
  const productsContainer = useRef(undefined)

  const changePage = (event) => {
    const { id } = event.currentTarget
    const numberPage = id === 'back' ? pages.previousPage : pages.nextPage
    const newPageUrl = `${API_URLS.base}/products?page=${numberPage}`

    savePage(numberPage)
    refreshProducts({
      apiUrl: newPageUrl
    })

    window.scroll(0, productsContainer.current.offsetTop)
  }

  useEffect(() => {
    if (!savedPage) return // First render

    refreshProducts({
      apiUrl: `${API_URLS.base}/products?page=${savedPage}`
    })
  }, [])

  return (
    <section className="products-container" ref={productsContainer}>
      <div className="products-container__title">
        <h2>Productos</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <PageController pages={pages} handleChangePage={changePage} />
    </section>
  )
}

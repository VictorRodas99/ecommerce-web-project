import '@css/products.css'
import { ProductCard } from './products/ProductCard'
import { useProducts } from '@hooks/useProducts'
import { Notifications } from '@components/NotificationsContainer'
import { PageController } from '@components/PageController'
import { API_URLS } from 'src/config'

export function Products() {
  const { products, pages, refreshProducts } = useProducts({
    apiUrl: API_URLS.home
  })

  const changePage = (event) => {
    const { id } = event.currentTarget
    const numberPage = id === 'back' ? pages.previousPage : pages.nextPage
    const newPageUrl = `${API_URLS.base}/products?page=${numberPage}`

    refreshProducts({
      apiUrl: newPageUrl
    })
  }

  return (
    <section className="products-container">
      <div className="products-container__title">
        <h2>Productos</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <Notifications />
      <PageController pages={pages} handleChangePage={changePage} />
    </section>
  )
}

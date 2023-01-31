import '@css/products.css'
import { ProductCard } from './products/ProductCard'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { Arrow } from './products/Arrow'
import { useProducts } from '@hooks/useProducts'

const API_URL_HOME =
  'https://ecommerce-products-api.vik-apps.workers.dev/products?page=1'
const API_URL = 'https://ecommerce-products-api.vik-apps.workers.dev'

export function Products() {
  const { products, pages, refreshProducts } = useProducts({
    apiUrl: API_URL_HOME
  })

  const changePage = (event) => {
    const { id } = event.currentTarget
    const numberPage = id === 'back' ? pages.previousPage : pages.nextPage
    const newPageUrl = `${API_URL}/products?page=${numberPage}`

    console.log(newPageUrl)

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

      <div className="page-controller">
        <Arrow
          id="back"
          page={pages.previousPage}
          icon={<MdArrowBack className="icon" />}
          eventHandler={changePage}
        />

        <Arrow
          id="next"
          page={pages.nextPage}
          icon={<MdArrowForward className="icon" />}
          eventHandler={changePage}
        />
      </div>
    </section>
  )
}

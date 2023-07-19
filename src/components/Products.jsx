import '@css/products.css'
import { PageController } from '@components/PageController'
import { usePageRederingHandler } from '@hooks/usePage'
import { ProductCard } from './products/ProductCard'
import { useProducts } from '@hooks/useProducts'
import { useRef } from 'react'

export function Products({ apiUrl, ...props }) {
  const { pages, products, refreshProducts } = useProducts({
    apiUrl: `${apiUrl}?page=1`
  })

  usePageRederingHandler({
    urlBase: apiUrl,
    refreshMethod: (url) => refreshProducts({ apiUrl: url })
  })

  const productsContainer = useRef(undefined)

  return (
    <section className="products-container" ref={productsContainer}>
      {props.category && (
        <div className="products-container__title">
          <h2>{props.category}</h2>
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <PageController
        urlBase={apiUrl}
        totalPages={pages}
        refreshMethod={(url) => refreshProducts({ apiUrl: url })}
        containerReference={productsContainer}
      />
    </section>
  )
}

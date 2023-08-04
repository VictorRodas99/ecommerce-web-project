import '@css/products.css'
import { PageController } from '@components/PageController'
import { usePageRederingHandler } from '@hooks/usePage'
import { useProducts } from '@hooks/useProducts'
import { useEffect, useRef, useState, lazy } from 'react'
import ProductsGrid from './products/ProductsGrid'

const ProductsCol = lazy(() => import('./products/ProductsCol'))

/**
 * @param {{ apiUrl: string, viewOption: 'grid' | 'col' }} props
 */
export function Products({ apiUrl, viewOption = 'grid', ...props }) {
  const [finalProducts, setFinalProducts] = useState()
  const { pages, products, refreshProducts } = useProducts({
    apiUrl: `${apiUrl}?page=1`
  })

  usePageRederingHandler({
    urlBase: apiUrl,
    refreshMethod: (url) => refreshProducts({ apiUrl: url })
  })

  const productsContainer = useRef(undefined)

  useEffect(() => {
    const finalProductList =
      typeof props.callback === 'function'
        ? props.callback(products)
        : undefined

    setFinalProducts(finalProductList)
  }, [products, props.callback])

  return (
    <section className="products-container" ref={productsContainer}>
      {props.category && (
        <div className="products-container__title">
          <h2>{props.category}</h2>
        </div>
      )}

      {viewOption === 'grid' ? (
        <ProductsGrid
          sortedProducts={finalProducts}
          defaultOrderProducts={products}
        />
      ) : (
        <ProductsCol products={products} />
      )}

      <PageController
        urlBase={apiUrl}
        totalPages={pages}
        refreshMethod={(url) => refreshProducts({ apiUrl: url })}
        containerReference={productsContainer}
      />
    </section>
  )
}

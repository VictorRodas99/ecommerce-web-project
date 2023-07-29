import '@css/products.css'
import { PageController } from '@components/PageController'
import { usePageRederingHandler } from '@hooks/usePage'
import { ProductCard } from './products/ProductCard'
import { useProducts } from '@hooks/useProducts'
import { useEffect, useRef, useState } from 'react'

export function Products({ apiUrl, ...props }) {
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

      <div className="products-grid">
        {finalProducts?.map((product) => (
          <ProductCard key={product.id} data={product} />
        )) ||
          products.map((product) => (
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

import { Link } from 'react-router-dom'
import { usePage } from '@hooks/usePage'
import { useCartCheckers } from '@hooks/useCartCheckers'
import ProductCardHeader from './card-components/ProductCardHeader'
import ProductCardBody from './card-components/ProductCardBody'
import ProductCardFooter from './card-components/ProductCardFooter'

import { useProductCard } from '@hooks/useProductCard'
import { createProductUrl } from './utils/urls'
import { useMemo } from 'react'

/**
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {{ data: Product }} param
 */
export function ProductCard({ data }) {
  const { cardStates, cardMethods } = useProductCard()
  const { page } = usePage()
  const productUrl = useMemo(
    () => createProductUrl({ page, slugFrom: data.name }),
    []
  )

  useCartCheckers({
    currentProduct: data,
    cardStates,
    cardMethods
  })

  return (
    <div className="product-card">
      <Link to={productUrl} state={data}>
        <ProductCardHeader productData={data} />
        <ProductCardBody productData={data} />
      </Link>

      <ProductCardFooter
        productData={data}
        cardStates={cardStates}
        cardMethods={cardMethods}
      />
    </div>
  )
}

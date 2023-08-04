import { ProductCard } from '@components/products/ProductCard'

/**
 * @typedef {import("@services/getProducts").Product} Product
 */

/**
 * @param {{ sortedProducts: Product[] | null, defaultOrderProducts: Product[] }} props
 */
export default function ProductsGrid({ sortedProducts, defaultOrderProducts }) {
  return (
    <div className="products-grid">
      {sortedProducts?.map((product) => (
        <ProductCard key={product.id} data={product} />
      )) ||
        defaultOrderProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
    </div>
  )
}

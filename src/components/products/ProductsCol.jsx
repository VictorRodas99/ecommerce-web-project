import ProductCardCol from './ProductCardCol'
import '@css/cards.css'

/**
 * @typedef {import("@services/getProducts").Product} Product
 */

/**
 * @param {{ products: Product[] }} props
 */
export default function ProductsCol({ products }) {
  return (
    <div className="products-col">
      {products.map((product) => (
        <ProductCardCol key={product.id} data={product} />
      ))}
    </div>
  )
}

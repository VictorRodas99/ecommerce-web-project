import ProductCardCol from './ProductCardCol'
import '@css/cards.css'

/**
 * @typedef {import("@services/getProducts").Product} Product
 */

/**
 * @param {{ sortedProducts: Product[], defaultOrderProducts: Product[] }} props
 */
export default function ProductsCol({ sortedProducts, defaultOrderProducts }) {
  return (
    <div className="products-col">
      {
        sortedProducts?.map((product) => <ProductCardCol key={product.id} data={product}/>) ||
        defaultOrderProducts.map((product) => <ProductCardCol key={product.id} data={product}/>)
      }
    </div>
  )
}

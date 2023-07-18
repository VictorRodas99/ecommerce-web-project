/**
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {{ productData: Product }} props
 */
export default function ProductCardBody({ productData }) {
  return (
    <div className="card-body">
      <h4>{productData.name}</h4>
    </div>
  )
}

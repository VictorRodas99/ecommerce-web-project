import DetailsFooter from './DetailsFooter'

/**
 * @typedef {import('../utils/details.tools').ProductDetail} ProductDetail
 */

/**
 * @param {{ product: ProductDetail }} props
 */
export default function DetailsBody({ product }) {
  return (
    <div className="product-main-details">
      <h2>{product.name}</h2>
      <p>
        Marca: <strong>{product.label}</strong>
      </p>
      <div className="categories-container">
        <p>Categorías</p>

        <div className="categories-details">
          {product.categories.map((category) => {
            const categoryId = category

            return (
              <div className="category" key={categoryId}>
                {category}
              </div>
            )
          })}
        </div>
      </div>
      <DetailsFooter product={product} />
    </div>
  )
}

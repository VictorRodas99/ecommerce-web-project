import '@css/products.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../services/getProducts.js'
import { MdAddShoppingCart } from 'react-icons/md'

export function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(
      'https://ecommerce-products-api.vik-apps.workers.dev/products'
    ).then((data) => setProducts(data))
  }, [])

  return (
    <section className="products-container">
      <div className="products-container__title">
        <h2>Productos</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          const { id, name, price } = product
          const image = product.srcImages[0]

          return (
            <div className="product-card" key={id}>
              <div className="card-header">
                <img src={image} alt={name} />
              </div>
              <div className="card-body">
                <h4>{name}</h4>
              </div>
              <div className="card-footer">
                <p className="price">{price}</p>
                <div className="add-icon">
                  <MdAddShoppingCart className="icon" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

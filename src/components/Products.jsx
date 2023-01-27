import '@css/products.css'
import { useState, useEffect } from 'react'
import { getProducts } from '@services/getProducts.js'
import { ProductCard } from './products/ProductCard'

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
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  )
}

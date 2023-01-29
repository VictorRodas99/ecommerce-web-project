import '@css/products.css'
import { useState, useEffect } from 'react'
import { getProducts } from '@services/getProducts.js'
import { ProductCard } from './products/ProductCard'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { Arrow } from './products/Arrow'

export function Products() {
  const [products, setProducts] = useState([])
  const [previousPage, setPreviuosPage] = useState(undefined)
  const [nextPage, setNextPage] = useState(undefined)

  useEffect(() => {
    getProducts(
      'https://ecommerce-products-api.vik-apps.workers.dev/products?page=1'
    ).then((page) => {
      const { data: products, previousPage, nextPage } = page

      setProducts(products)
      setPreviuosPage(previousPage)
      setNextPage(nextPage)
    })
  }, [])

  const changePage = (event) => {
    const { id } = event.target
    const numberPage = id === 'back' ? previousPage : nextPage

    getProducts(
      `https://ecommerce-products-api.vik-apps.workers.dev/products?page=${numberPage}`
    ).then((page) => {
      const {
        data: products,
        previousPage: newPreviousPage,
        nextPage: newNextPage
      } = page

      setProducts(products)
      setPreviuosPage(newPreviousPage)
      setNextPage(newNextPage)
    })
  }

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

      <div className="page-controller">
        <Arrow
          id="back"
          page={previousPage}
          icon={<MdArrowBack className="icon" />}
          eventHandler={changePage}
        />

        <Arrow
          id="next"
          page={nextPage}
          icon={<MdArrowForward className="icon" />}
          eventHandler={changePage}
        />
      </div>
    </section>
  )
}

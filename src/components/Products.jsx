import '@css/products.css'
import { ProductCard } from './products/ProductCard'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { Arrow } from './products/Arrow'
import { useProducts } from '@hooks/useProducts'
import { useNotification } from '@hooks/useNotification'
import { NotificationCart } from '@components/Notification'
import { API_URLS } from 'src/config'

export function Products() {
  const { products, pages, refreshProducts } = useProducts({
    apiUrl: API_URLS.home
  })

  const { notifications, createNotification, deleteNotification } =
    useNotification()

  const changePage = (event) => {
    const { id } = event.currentTarget
    const numberPage = id === 'back' ? pages.previousPage : pages.nextPage
    const newPageUrl = `${API_URLS.base}/products?page=${numberPage}`

    refreshProducts({
      apiUrl: newPageUrl
    })
  }

  const launchNotification = ({ color, message, icon }) => {
    createNotification(color, message, icon)
  }

  return (
    <section className="products-container">
      <div className="products-container__title">
        <h2>Productos</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            notificationEvent={launchNotification}
          />
        ))}
      </div>

      {notifications.map(({ id, color, message, icon }) => (
        <NotificationCart
          key={`${id}-notification`}
          message={message}
          color={color}
          icon={icon}
          onDelete={() => deleteNotification(id)}
          autoClose={true}
        />
      ))}

      <div className="page-controller">
        <Arrow
          id="back"
          page={pages.previousPage}
          icon={<MdArrowBack className="icon" />}
          eventHandler={changePage}
        />

        <Arrow
          id="next"
          page={pages.nextPage}
          icon={<MdArrowForward className="icon" />}
          eventHandler={changePage}
        />
      </div>
    </section>
  )
}

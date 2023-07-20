import { useCart } from '@hooks/useCart'
import { useNotification } from '@hooks/useNotification'
import { notificationIcons } from '@components/icons/NotificationIcons'

/**
 * @typedef {import('../utils/details.tools').ProductDetail} ProductDetail
 */

/**
 * @param {{ product: ProductDetail }} props
 */
export default function DetailsFooter({ product }) {
  const { addProduct } = useCart()
  const { createNotification } = useNotification()

  const handleClickOnAdd = () => {
    addProduct({
      ...product,
      image: product.images[1] ?? product.images[0]
    })

    createNotification({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: notificationIcons.done
    })
  }

  return (
    <div className="details-footer">
      <div className="product-price">
        <h4>{product.price}</h4>
        <p>Stock disponible</p>
      </div>

      <button
        className={`add-to-cart-btn ${product.wasAdded && 'added'}`}
        onClick={!product.wasAdded ? handleClickOnAdd : null}
      >
        {!product.wasAdded ? 'Añadir' : 'Añadido'} a carrito
      </button>
    </div>
  )
}

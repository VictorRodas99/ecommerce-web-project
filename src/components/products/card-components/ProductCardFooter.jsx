import { notificationIcons } from '@components/icons/NotificationIcons'
import { useNotification } from '@hooks/useNotification'
import { useCart } from '@hooks/useCart'

/**
 * @typedef {import('@services/getProducts').Product} Product
 * @typedef {import('@hooks/useProductCard').ProductCardMethods} ProductCardMethods
 * @typedef {import('@hooks/useProductCard').ProductCardStates} ProductCardStates
 */

/**
 * @param {{
 *  productData: Product,
 *  cardStates: ProductCardStates,
 *  cardMethods: ProductCardMethods
 * }} props
 */
export default function ProductCardFooter({
  productData,
  cardStates,
  cardMethods
}) {
  const { createNotification } = useNotification()
  const { addProduct } = useCart()

  const { CardIcon } = cardStates

  const handleClickOnCart = () => {
    addProduct({
      ...productData,
      image: productData.srcImages[1] ?? productData.srcImages[0]
    })

    cardMethods.changeIconInAdd()

    createNotification({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: notificationIcons.done
    })
  }

  return (
    <div className="card-footer">
      <p className="price">{productData.price}</p>
      <div className="add-icon">
        <div
          className="product-card-icon"
          onClick={!cardStates.productWasAdded ? handleClickOnCart : null}
        >
          <CardIcon className="icon" />
        </div>
      </div>
    </div>
  )
}

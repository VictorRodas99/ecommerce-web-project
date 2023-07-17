import { Ring } from '@uiball/loaders'
import { Image } from '@components/Image'
import { useProductCard } from '@hooks/useProductCard'
import { useCart } from '@hooks/useCart'
import { notificationIcons } from '@components/icons/NotificationIcons'
import { useEffect } from 'react'
import { useNotification } from '@hooks/useNotification'
import { getCartFromStorage } from '@utils/localStorage'

import { Link } from 'react-router-dom'
import { parseNameToURI } from '@utils/tools'
import { usePage } from '@hooks/usePage'

/**
 * @param {{ data: import('@services/getProducts').Product }} param
 */
export function ProductCard({ data }) {
  const { cardStates, cardMethods, handleImageLoad } = useProductCard()
  const { createNotification } = useNotification()
  const { cartProducts, addProduct } = useCart()
  const { page } = usePage()

  const { CardIcon } = cardStates

  const handleClickOnCart = () => {
    addProduct({
      ...data,
      image: data.srcImages[1] ?? data.srcImages[0]
    })

    cardMethods.changeIconInAdd()

    createNotification({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: notificationIcons.done
    })
  }

  useEffect(() => {
    if (cardStates.productWasAdded) {
      const existsCurrentProduct = cartProducts.some(
        (product) => product.id === data.id
      )

      if (!existsCurrentProduct) {
        cardMethods.changeIconInDelete()
      }
    }
  }, [cartProducts])

  useEffect(() => {
    const savedCart = getCartFromStorage()
    const wasSavedInStorage = savedCart?.some(
      (product) => product.price === data.price && product.name === data.name
    )

    if (wasSavedInStorage) {
      cardMethods.changeIconInAdd()
    }
  }, [])

  const { name, price } = data
  const image = data.srcImages[0]

  return (
    <div className="product-card">
      <Link to={`/product/${page ?? 1}/${parseNameToURI(name)}`} state={data}>
        <div className="card-header">
          <Image
            src={image}
            alt={name}
            style={{ display: 'none' }}
            events={{ onLoad: handleImageLoad }}
          />
          <div
            className="loader"
            style={{ display: cardStates.imageIsLoading ? 'flex' : 'none' }}
          >
            <Ring size={70} lineWeight={3} speed={2} color="#7c828d2a" />
          </div>
        </div>
        <div className="card-body">
          <h4>{name}</h4>
        </div>
      </Link>

      <div className="card-footer">
        <p className="price">{price}</p>
        <div className="add-icon">
          <div
            className="product-card-icon"
            onClick={!cardStates.productWasAdded ? handleClickOnCart : null}
          >
            <CardIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

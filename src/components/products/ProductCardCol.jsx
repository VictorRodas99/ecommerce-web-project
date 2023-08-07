import { Image } from '@components/Image'
import Loader from '@components/page-elements/Loader'
import { useProductCard } from '@hooks/useProductCard'
import { usePage } from '@hooks/usePage'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { createProductUrl } from './utils/urls'

import { useCart } from '@hooks/useCart'
import { useNotification } from '@hooks/useNotification'
import { notificationIcons } from '@components/icons/NotificationIcons'
import { useCartCheckers } from '@hooks/useCartCheckers'

/**
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {{ data: Product }} param
 */
export default function ProductCardCol({ data }) {
  const { cardStates, cardMethods, handleImageLoad } = useProductCard()
  const { createNotification } = useNotification()
  const { page } = usePage()
  const { addProduct } = useCart()
  const productUrl = useMemo(
    () => createProductUrl({ page, slugFrom: data.name }),
    []
  )

  useCartCheckers({
    cardStates,
    cardMethods,
    currentProduct: data
  })

  const image = data.srcImages[0]

  // TODO: refactor

  const parseProductName = (name) => {
    if (typeof name !== 'string') {
      return name
    }

    const splittedName = name.split(' ')

    if (splittedName.length < 3) {
      return name
    }

    return splittedName.slice(0, 3).join(' ')
  }

  const handleClickOnAdd = () => {
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

  return (
    <div className="card-col-container">
      <Link to={productUrl} state={data} className="product-card card-col">
        <picture className="product-card-image-container">
          <Image
            src={image}
            alt="Product Image"
            className="product-card-image"
            style={{ display: 'none' }}
            onLoad={handleImageLoad}
          />
          <Loader trigger={cardStates.imageIsLoading} />
        </picture>

        <div className="card-col-body">
          <p
            className="card-col-body__name card-col-data noselect"
            data-hover={data.name}
          >
            {parseProductName(data.name)} . . .
          </p>
          <p className="card-col-body__price card-col-data">{data.price}</p>
        </div>
      </Link>
      <div
        className={`card-col-add-container card-col-add-btn ${
          cardStates.productWasAdded
            ? 'card-col-btn-after-add'
            : 'card-col-btn-before-add'
        }`}
      >
        <button onClick={!cardStates.productWasAdded ? handleClickOnAdd : null}>
          {cardStates.productWasAdded ? 'Added' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

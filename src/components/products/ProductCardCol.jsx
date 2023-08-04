import { Image } from '@components/Image'
import Loader from '@components/page-elements/Loader'
import { useProductCard } from '@hooks/useProductCard'
import { usePage } from '@hooks/usePage'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { createProductUrl } from './utils/urls'

/**
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {{ data: Product }} param
 */
export default function ProductCardCol({ data }) {
  const { cardStates, handleImageLoad } = useProductCard()
  const { page } = usePage()
  const productUrl = useMemo(
    () => createProductUrl({ page, slugFrom: data.name }),
    []
  )

  const image = data.srcImages[0]

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
      <div className="card-col-add-button">
        <button>Add to cart</button>
      </div>
    </div>
  )
}

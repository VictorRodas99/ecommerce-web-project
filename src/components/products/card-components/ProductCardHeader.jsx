import { Image } from '@components/Image'
import { useProductCard } from '@hooks/useProductCard'
import Loader from '@components/page-elements/Loader'

/**
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {{ productData: Product }} product
 */
export default function ProductCardHeader({ productData }) {
  const { cardStates, handleImageLoad } = useProductCard()
  const image = productData.srcImages[0]

  return (
    <div className="card-header">
      <Image
        src={image}
        alt={productData.name}
        style={{ display: 'none' }}
        onLoad={handleImageLoad}
      />

      <Loader trigger={cardStates.imageIsLoading} />
    </div>
  )
}

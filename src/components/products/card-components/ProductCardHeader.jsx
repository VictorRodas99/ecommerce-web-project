import { Ring } from '@uiball/loaders'
import { Image } from '@components/Image'
import { useProductCard } from '@hooks/useProductCard'

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
      <div
        className="loader"
        style={{ display: cardStates.imageIsLoading ? 'flex' : 'none' }}
      >
        <Ring size={70} lineWeight={3} speed={2} color="#7c828d2a" />
      </div>
    </div>
  )
}

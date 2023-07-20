import '@css/product-details.css'
import { useEffect } from 'react'
import { useProductDetails } from '@hooks/useProductDetails'
import GalleryImage from './details-page-components/ImageGallery'
import DetailsBody from './details-page-components/DetailsBody'
import Specifications from './details-page-components/Specifications'
import NisseiLink from './details-page-components/NisseiLink'
import { refreshPage } from './utils/details.tools'

export default function ProductDetails() {
  const { product } = useProductDetails()
  useEffect(refreshPage, [])

  return (
    <>
      <section className="details-presentation">
        <GalleryImage mainImage={product.mainImage} images={product.images} />
        <DetailsBody product={product} />
      </section>

      <section className="product-specification">
        <div className="section-title">
          <h2>Detalles</h2>
        </div>

        <Specifications product={product} />
      </section>

      <NisseiLink />
    </>
  )
}

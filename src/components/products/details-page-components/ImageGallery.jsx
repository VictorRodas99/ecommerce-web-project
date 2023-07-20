import { Image } from '@components/Image'
import { useRef, useEffect } from 'react'
import { toggleClass, simulateScroll } from '@utils/tools'
import { getGalleryElements, getImageNumber } from '../utils/gallery'

/**
 * @typedef {import('../utils/details.tools').ProductDetail} ProductDetail
 */

/**
 * @param {{ mainImage: ProductDetail['mainImage'], images: ProductDetail['images'] }} props
 */
export default function GalleryImage({ mainImage, images }) {
  const lastClickedImageContainer = useRef(null)
  const timesToScroll = useRef(0)

  useEffect(() => {
    const firstImageContainer = document.querySelector('.gallery-image')
    lastClickedImageContainer.current = firstImageContainer
  }, [])

  const handleClickImage = (event) => {
    if (lastClickedImageContainer.current) {
      toggleClass({
        element: lastClickedImageContainer.current,
        classes: { add: 'deactive', remove: 'active' }
      })
    }

    const { containers, images } = getGalleryElements(event)
    const { gallery, mainImage } = images

    mainImage.setAttribute('src', gallery.current.src)
    lastClickedImageContainer.current = containers.currentImage

    const lastImageWasClicked = gallery.lastImage === gallery.current

    timesToScroll.current = getImageNumber(
      containers.gallery,
      lastClickedImageContainer.current
    )

    simulateScroll({
      container: containers.gallery,
      condition: lastImageWasClicked,
      relativeTo: lastClickedImageContainer.current,
      timesToScroll: timesToScroll.current
    })

    if (
      lastImageWasClicked ||
      containers.gallery.offsetTop === 0 ||
      containers.gallery.offsetLeft === 0
    ) {
      timesToScroll.current = 1
    }

    toggleClass({
      element: lastClickedImageContainer.current,
      classes: {
        add: 'active',
        remove: 'deactive'
      }
    })
  }

  return (
    <div className="product-images">
      <div className="product-gallery">
        {images.map((image, index) => {
          const isFirst = index === 0

          return (
            <div
              className={`gallery-image ${isFirst ? 'active' : 'deactive'}`}
              key={image}
              onClick={handleClickImage}
            >
              <Image src={image} />
            </div>
          )
        })}
      </div>
      <div className="main-image">
        <Image src={mainImage} alt="Imagen 1 del producto" />
      </div>
    </div>
  )
}

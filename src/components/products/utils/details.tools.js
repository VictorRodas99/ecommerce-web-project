import { API_URLS } from 'src/config'
import { getProducts } from '@services/getProducts'
import { parseNameToURI } from '@utils/tools'

export const categoryForAPI = {
  product: 'products',
  informatica: 'computing',
  hardware: 'hardware',
  electronica: 'electronics'
}

export const productInitialState = {
  name: undefined,
  price: undefined,
  categories: [],
  details: [],
  images: [],
  mainImage: undefined,
  wasAdded: false
}

export const fetchProductData = async ({ url, productName }) => {
  const { data } = await getProducts(url)
  const currentProduct = data.filter(
    (product) => parseNameToURI(product.name) === productName
  )[0]

  const wasFound = Boolean(currentProduct)

  return {
    currentProduct,
    found: wasFound
  }
}

export const getGalleryImages = ({ srcImages }) => {
  // return srcImages.length > 4 ? srcImages.slice(1, 4) : srcImages // Temporal
  return srcImages
}

export const structureData = (rawData) => {
  const images = getGalleryImages(rawData)
  const { srcImages, ...restOfData } = rawData

  return {
    ...restOfData,
    mainImage: srcImages[0],
    images
  }
}

export const getProductURLForAPI = ({ category, page }) => {
  return `${API_URLS.base}/${categoryForAPI[category]}?page=${page}`
}

export const getGalleryElements = (event) => {
  const currentImageContainer = event.currentTarget
  const gallery = currentImageContainer.parentElement
  const firstImageInGallery = gallery.firstChild.firstChild
  const lastImageInGallery = gallery.lastChild.firstChild
  const mainImageContainer = gallery.nextElementSibling

  const currentImage = event.target
  const [mainImage] = mainImageContainer.children

  return {
    containers: {
      currentImage: currentImageContainer,
      mainImageContainer,
      gallery
    },
    images: {
      gallery: {
        first: firstImageInGallery,
        current: currentImage,
        lastImage: lastImageInGallery
      },
      mainImage
    }
  }
}

export const getImageNumber = (gallery, imageContainer) => {
  return Array.from(gallery.children).indexOf(imageContainer) + 1
}

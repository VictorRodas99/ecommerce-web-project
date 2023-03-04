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
  return srcImages.length > 4 ? srcImages.slice(1, 4) : srcImages // Temporal
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

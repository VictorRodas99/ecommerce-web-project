import { API_URLS, availableCategories } from 'src/config'
import { getProducts } from '@services/getProducts'
import { parseNameToURI } from '@utils/tools'

export const refreshPage = () => {
  document.title = 'Info-Shop | Producto'
  window.scrollTo(0, 0)
}

/**
 * @typedef {{
 *  name: string,
 *  price: string,
 *  categories: string[],
 *  details: string[],
 *  images: string[],
 *  mainImage: string,
 *  wasAdded: boolean
 * }} ProductDetail
 *
 * @type {ProductDetail}
 */
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

export const structureData = (rawData) => {
  const images = rawData.srcImages
  const { srcImages, ...restOfData } = rawData

  return {
    ...restOfData,
    mainImage: srcImages[0],
    images
  }
}

export const getProductURLForAPI = ({ category, page }) => {
  return `${API_URLS.base}/${availableCategories[category]}?page=${page}`
}

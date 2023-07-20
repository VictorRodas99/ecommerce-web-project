import { isValidURL } from "@utils/tools"

/**
 * @typedef {{
 *  id: number, name: string, price: string,
 *  srcImages: string[], label: string,
 *  categories: string[], details: { [x]: string }
 * }} Product
 * @typedef {{ previousPage?: number, nextPage?: number, data: Product[] }} APIMainResponse
 * 
 * @param {{ url: string, data: APIMainResponse }} param
 */
const saveProductsInStorage = ({ url, data }) => {
  const key = window.btoa(url) // Encondes in base64 the url to use it as a key

  try {
    window.sessionStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(
      `An error has ocurred while trying to save data in sessionStorage: ${error.message}`
    )
  }
}

/**
 * @param {string} url 
 * @returns {APIMainResponse | null}
 */
const getSavedProductInStorage = (url) => {
  const key = window.btoa(url)
  const data = window.sessionStorage.getItem(key)

  return JSON.parse(data)
}

/** 
 * @param {string} url 
 * @returns {Promise<APIMainResponse>}
 */
export const getProducts = async (url) => {
  if (!isValidURL(url)) {
    throw new Error('Expected argument to be a valid HTTP URL')
  }

  const savedData = getSavedProductInStorage(url)

  if (savedData) return savedData

  const response = await fetch(url)

  if (!response.ok) return []

  const data = await response.json()
  saveProductsInStorage({ url, data })

  return data
}

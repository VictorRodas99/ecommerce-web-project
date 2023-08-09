const LOCAL_STORAGE_CART_KEY = 'cart'

/**
 * Types
 * @typedef {import('@services/getProducts').Product} Product
 */

/**
 * @param {Product[]} cart
 */
export const saveCartToStorage = (cart) => {
  window.localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart))
}

/**
 * @returns {Product[] | null}
 */
export const getCartFromStorage = () => {
  const rawData = window.localStorage.getItem(LOCAL_STORAGE_CART_KEY)
  return JSON.parse(rawData)
}

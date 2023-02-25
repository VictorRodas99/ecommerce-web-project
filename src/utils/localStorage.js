const LOCAL_STORAGE_CART_KEY = 'cart'

export const saveCartToStorage = (cart) => {
  window.localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart))
}

export const getCartFromStorage = () => {
  const rawData = window.localStorage.getItem(LOCAL_STORAGE_CART_KEY)
  return JSON.parse(rawData)
}

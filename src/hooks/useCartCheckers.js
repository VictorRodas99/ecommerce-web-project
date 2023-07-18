import { getCartFromStorage } from '@utils/localStorage'
import { useEffect } from 'react'
import { useCart } from './useCart'

/**
 * @typedef {import('@services/getProducts').Product} Product
 * @typedef {import('@hooks/useProductCard').ProductCardMethods} ProductCardMethods
 * @typedef {import('@hooks/useProductCard').ProductCardStates} ProductCardStates
 */

/**
 * Check if the product has been removed from the cart in order to determine whether or not to change the icon of the current card.
 * @param {{
 *  currentProduct: Product,
 *  cardStates: ProductCardStates,
 *  cardMethods: ProductCardMethods
 * }} dependencies
 */
export function useCartCheckers({ currentProduct, cardStates, cardMethods }) {
  const { cartProducts: cart } = useCart()

  useEffect(() => {
    if (cardStates.productWasAdded) {
      const existsCurrentProduct = cart.some(
        (product) => product.id === currentProduct.id
      )

      if (!existsCurrentProduct) {
        cardMethods.changeIconInDelete()
      }
    }
  }, [cart])

  useEffect(() => {
    const savedCart = getCartFromStorage()
    const wasSavedInStorage = savedCart?.some(
      (product) =>
        product.price === currentProduct.price &&
        product.name === currentProduct.name
    )

    if (wasSavedInStorage) {
      cardMethods.changeIconInAdd()
    }
  }, [])
}
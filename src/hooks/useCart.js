import { useContext, useState, useEffect } from 'react'
import { CartContext } from '@context/CartContext'
import { getTotalPriceOf } from '@utils/tools'

/**
 * @returns {{
 *  cartProducts: Array<{}>,
 *  addProduct: { (newProduct: {}) => void },
 *  deleteProduct: { (givenProduct: {}) => void },
 *  cartIsVisible: boolean,
 *  modifyCartVisibility: { (mode?:boolean) => void }
 * }}
 */
export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a provider')
  }

  return context
}

export function useTotalPrice({ cartProducts }) {
  const [totalPrice, setTotalPrice] = useState(0)
  const totalProducts = cartProducts.length

  useEffect(() => {
    if (cartProducts.length > 0) {
      const totalParsed = getTotalPriceOf(cartProducts)
      setTotalPrice(totalParsed)
    }
  }, [cartProducts])

  return {
    totalPrice,
    totalProducts,
    amountDescription: `${totalProducts} ${
      totalProducts === 1 ? ' Item' : ' Items'
    }`
  }
}

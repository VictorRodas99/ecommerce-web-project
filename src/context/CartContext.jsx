import { createContext } from 'react'
import { useCartReducer } from '@hooks/context/useCartReducer'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const { cartStates, addProduct, deleteProduct, modifyCartVisibility } =
    useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cartProducts: cartStates.cart,
        addProduct,
        deleteProduct,
        cartIsVisible: cartStates.visibility,
        modifyCartVisibility
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

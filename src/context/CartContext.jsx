import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  const addProduct = (newProduct) => {
    const newCartProducts = [...cartProducts]
    newCartProducts.push(newProduct)

    setCartProducts(newCartProducts)
  }

  const deleteProduct = (givenProduct) => {
    const { id: givenId, name: givenName } = givenProduct
    const existingProducts = [...cartProducts]

    const newCartProducts = existingProducts.filter(
      (product) => product.id !== givenId && product.name !== givenName
    )

    setCartProducts(newCartProducts)
  }

  return (
    <CartContext.Provider value={{ cartProducts, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  )
}

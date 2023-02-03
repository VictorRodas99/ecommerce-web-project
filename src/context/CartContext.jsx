import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])
  const [cartVisibility, setCartVisbility] = useState(false)

  const modifyCartVisibility = (mode = false) => setCartVisbility(mode)

  const addProduct = (newProduct) => {
    newProduct.id = cartProducts.length - 1
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
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        deleteProduct,
        cartVisibility,
        modifyCartVisibility
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

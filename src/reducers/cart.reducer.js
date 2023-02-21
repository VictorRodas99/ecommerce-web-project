export const initialCartState = {
  cart: [],
  visibility: false
}

export const CART_ACTIONS = {
  add: 'Add to cart',
  delete: 'Delete from cart',
  visibility: 'Change cart visibility'
}

export function cartReducer(state, action) {
  const { type, payload } = action
  const { cart, visibility } = state

  switch (type) {
    case CART_ACTIONS.add: {
      const newCartProducts = [...cart]
      newCartProducts.push(payload)

      return {
        cart: newCartProducts,
        visibility
      }
    }

    case CART_ACTIONS.delete: {
      const { id: givenId, name: givenName } = payload
      const existingProducts = [...cart]

      const newCartProducts = existingProducts.filter(
        (product) => product.id !== givenId && product.name !== givenName
      )

      return {
        cart: newCartProducts,
        visibility
      }
    }

    case CART_ACTIONS.visibility: {
      const mode = payload

      return {
        cart,
        visibility: mode
      }
    }
  }
}

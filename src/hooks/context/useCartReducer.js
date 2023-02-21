import { useReducer } from 'react'
import {
  cartReducer,
  initialCartState,
  CART_ACTIONS
} from '@reducers/cart.reducer'

export function useCartReducer() {
  const [cartStates, dispatch] = useReducer(cartReducer, initialCartState)

  const addProduct = (newProduct) =>
    dispatch({
      type: CART_ACTIONS.add,
      payload: newProduct
    })

  const deleteProduct = (givenProduct) =>
    dispatch({
      type: CART_ACTIONS.delete,
      payload: givenProduct
    })

  const modifyCartVisibility = (mode = false) =>
    dispatch({
      type: CART_ACTIONS.visibility,
      payload: mode
    })

  return {
    cartStates,
    addProduct,
    deleteProduct,
    modifyCartVisibility
  }
}

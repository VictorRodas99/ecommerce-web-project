import { useReducer } from 'react'
import {
  initialCardState,
  PRODUCT_CARD_ACTIONS,
  productCardReducer
} from '@reducers/productCard.reducer'

/**
 * @returns {{
 *  cardStates: {
 *    productWasAdded: boolean,
 *    imageIsLoading: boolean,
 *    CardIcon: () => JSX.Element
 * },
 *  cardMethods: {
 *    changeIconInAdd: () => void,
 *    changeIconInDelete: () => void
 * }
 * handleImageLoad: (event: Event) => void
 * }}
 */
export function useProductCard() {
  const [cardStates, dispatch] = useReducer(
    productCardReducer,
    initialCardState
  )

  const changeIconInAdd = () =>
    dispatch({
      type: PRODUCT_CARD_ACTIONS.changeIconInAdd
    })

  const changeIconInDelete = () =>
    dispatch({
      type: PRODUCT_CARD_ACTIONS.changeIconInDelete
    })

  const handleImageLoad = (event) =>
    dispatch({
      type: PRODUCT_CARD_ACTIONS.imageLoaded,
      payload: event
    })

  return {
    cardStates,
    cardMethods: {
      changeIconInAdd,
      changeIconInDelete
    },
    handleImageLoad
  }
}

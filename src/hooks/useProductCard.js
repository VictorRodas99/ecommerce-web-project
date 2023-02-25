import { useReducer } from 'react'
import {
  initialCardState,
  PRODUCT_CARD_ACTIONS,
  productCardReducer
} from '@reducers/productCard.reducer'

/**
 * @returns {{
 * productWasAdded: boolean,
 * imageIsLoading: boolean,
 * CardIcon: { () => JSX.Element },
 * changeIconInAdd: { () => void },
 * changeIconInDelete: { () => void },
 * handleImageLoad: { () => void }
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

  const handleImageLoad = () =>
    dispatch({
      type: PRODUCT_CARD_ACTIONS.imageLoaded
    })

  return {
    productWasAdded: cardStates.productWasAdded,
    imageIsLoading: cardStates.imageIsLoading,
    CardIcon: cardStates.CardIcon,
    changeIconInAdd,
    changeIconInDelete,
    handleImageLoad
  }
}

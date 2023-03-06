import { ShoppingCartIcon } from '@components/icons/Cart'
import { DoneIcon } from '@components/icons/NotificationIcons'

const cardIcons = {
  cart: ShoppingCartIcon,
  checked: DoneIcon
}

//TODO: poner todos los iconos que se usan en componentes en un directorio específico sin usar react-icons
export const initialCardState = {
  productWasAdded: false,
  imageIsLoading: true,
  CardIcon: cardIcons.cart
}

export const PRODUCT_CARD_ACTIONS = {
  changeIconInAdd: 'change the card icon when the product is added',
  changeIconInDelete: 'delete product from cart and change card icon',
  imageLoaded: 'set image as loaded'
}

export function productCardReducer(state, action) {
  const { type } = action

  switch (type) {
    case PRODUCT_CARD_ACTIONS.changeIconInAdd: {
      return {
        ...state,
        productWasAdded: true,
        CardIcon: cardIcons.checked
      }
    }

    case PRODUCT_CARD_ACTIONS.changeIconInDelete: {
      return {
        ...state,
        productWasAdded: false,
        CardIcon: cardIcons.cart
      }
    }

    case PRODUCT_CARD_ACTIONS.imageLoaded: {
      const { payload: event } = action
      const image = event.target

      image.style.display = 'block' // set image as visible when is completely loaded

      return {
        ...state,
        imageIsLoading: false
      }
    }
  }
}

import { useParams, useLocation } from 'react-router-dom'
import { validateProductFields } from '@utils/validators'

/**
 * Returns the state of previous navigation and params from the URL
 * @returns {{
 *  state: Product | null,
 *  params: { category: string, page: string, productName: string }
 * }}
 */
export function getNavigationData() {
  const { category, page, name } = useParams()
  const currentState = useLocation().state

  const isValidProduct = validateProductFields({ product: currentState })

  if (isValidProduct || currentState === null) {
    return {
      state: useLocation().state,
      params: {
        category,
        page,
        productName: name
      }
    }
  }

  throw new Error('Expected useLocation().state to return a Product type or null')
}

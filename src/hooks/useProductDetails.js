import { useState, useEffect } from 'react'
import { useCart } from '@hooks/useCart'
import {
  productInitialState,
  getProductURLForAPI,
  fetchProductData,
  structureData
} from '@components/products/utils/details.tools'
import { getNavigationData } from '@utils/pageBehaviors'

/**
 * @typedef {import('@services/getProducts').Product} Product
 */

export function useProductDetails() {
  const [product, setProduct] = useState(productInitialState)
  const { state, params } = getNavigationData()
  const { cartProducts } = useCart()

  const setProductExitence = () => {
    const wasAdded =
      cartProducts.some(
        (product) => product.price === state.price && product.name === state.name
      )

    setProduct((prevProduct) => ({
      ...prevProduct,
      wasAdded
    }))
  }

  const setProductData = async () => {
    if (state !== null) {
      const product = structureData(state)
      return setProduct(product)
    }

    const url = getProductURLForAPI({
      category: params.category,
      page: params.page
    })

    const { currentProduct: rawData, found } = await fetchProductData({
      url,
      productName: params.productName
    })

    if (!found) {
      return window.location.replace('/product-not-found')
    }

    const product = structureData(rawData)
    return setProduct(product)
  }

  useEffect(() => {
    setProductExitence()
    setProductData()
  }, [])

  useEffect(setProductExitence, [cartProducts])

  return { product }
}

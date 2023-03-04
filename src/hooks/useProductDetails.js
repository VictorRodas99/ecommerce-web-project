import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useCart } from '@hooks/useCart'
import {
  productInitialState,
  getProductURLForAPI,
  fetchProductData,
  structureData
} from '@components/products/utils/details.tools'

export function useProductDetails() {
  const [product, setProduct] = useState(productInitialState)
  const { category, page, name: productName } = useParams()
  const { state } = useLocation()
  const { cartProducts } = useCart()

  const setProductExitence = () => {
    const wasAdded =
      cartProducts.filter(
        (product) => product.price === state.price && product.name && state.name
      ).length > 0

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

    const url = getProductURLForAPI({ category, page })
    const { currentProduct: rawData, found } = await fetchProductData({
      url,
      productName
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

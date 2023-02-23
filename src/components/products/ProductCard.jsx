import { useState } from 'react'
import { MdAddShoppingCart, MdDone, MdClose } from 'react-icons/md'
import { Ring } from '@uiball/loaders'
import { useEffect } from 'react'
import { useCart } from '@hooks/useCart'
import { Image } from '@components/Image'

export function ProductCard({ data, notificationEvent }) {
  const { cartProducts, addProduct } = useCart()
  const [productWasAdded, setProductWasAdded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [iconCart, setIconCart] = useState(undefined)

  const { id, name, price } = data
  const image = data.srcImages[0]

  useEffect(() => {
    if (productWasAdded) {
      // verificar si ya no existe el id de este producto de esta card
      const existsCurrentProduct = cartProducts.some(
        (product) => product.id === id
      )

      if (!existsCurrentProduct) {
        setClicked(false)
        setProductWasAdded(false)
        changeIcon(iconCart)

        notificationEvent({
          color: 'error',
          message: 'Eliminado del carrito!',
          icon: <MdClose className="icon" />
        })
      }
    }
  }, [cartProducts])

  const handleLoad = () => {
    setLoading(false)
  }

  const changeIcon = (target) => {
    const currentIcon = target
    const checkIcon = target.nextElementSibling

    currentIcon.classList.toggle('visible-icon')
    checkIcon.classList.toggle('visible-icon')
  }

  const handleClickOnCart = ({ currentTarget }) => {
    setIconCart(currentTarget)
    setClicked(true)
    addProduct({
      id,
      name,
      price,
      image: data.srcImages[1] ?? data.srcImages[0]
    })
    notificationEvent({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: <MdDone className="icon" />
    })
    changeIcon(currentTarget)
    setProductWasAdded(true)
  }

  return (
    <div className="product-card">
      <div className="card-header">
        <Image src={image} alt={name} events={{ onLoad: handleLoad }} />
        <div className="loader" style={{ display: loading ? 'flex' : 'none' }}>
          <Ring size={70} lineWeight={3} speed={2} color="#7c828d2a" />
        </div>
      </div>
      <div className="card-body">
        <h4>{name}</h4>
      </div>
      <div className="card-footer">
        <p className="price">{price}</p>
        <div className="add-icon">
          <div
            className="product-card-icon visible-icon"
            onClick={!clicked ? handleClickOnCart : null}
          >
            <MdAddShoppingCart className="icon" />
          </div>
          <div className="product-card-icon">
            <MdDone className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { MdAddShoppingCart, MdDone } from 'react-icons/md'
import { Ring } from '@uiball/loaders'
import { useContext } from 'react'
import { CartContext } from '@context/CartContext'

export function ProductCard({ data, notificationEvent }) {
  const { addProduct } = useContext(CartContext)
  const [loading, setLoading] = useState(true)
  const [clicked, setClicked] = useState(false)

  const { name, price } = data
  const image = data.srcImages[0]

  const handleLoad = () => {
    setLoading(false)
  }

  const changeIconToChek = (target) => {
    const currentIcon = target
    const checkIcon = target.nextElementSibling

    currentIcon.classList.toggle('visible-icon')
    checkIcon.classList.toggle('visible-icon')
  }

  const handleClickOnCart = ({ currentTarget }) => {
    setClicked(true)
    addProduct({ name, price, image: data.srcImages[1] ?? data.srcImages[0] })
    notificationEvent({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: <MdDone className="icon" />
    })
    changeIconToChek(currentTarget)
  }

  return (
    <div className="product-card">
      <div className="card-header">
        <img src={image} alt={name} onLoad={handleLoad} />
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

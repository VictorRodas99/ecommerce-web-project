import { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { Ring } from '@uiball/loaders'

export function ProductCard({ data }) {
  const [loading, setLoading] = useState(true)
  const { name, price } = data
  const image = data.srcImages[0]

  const handleLoad = () => {
    setLoading(false)
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
          <MdAddShoppingCart className="icon" />
        </div>
      </div>
    </div>
  )
}

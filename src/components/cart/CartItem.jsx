import { MdClose } from 'react-icons/md'
import { useCart } from '@hooks/useCart'

export function CartItem({ data: product }) {
  const { deleteProduct } = useCart()
  const { name, price, image } = product

  return (
    <div className="cart-product-card" key={name}>
      <div className="product-cart-image">
        <img src={image} alt="Producto del carrito" />
      </div>
      <div className="product-cart-details">
        <h4>
          {name} <span className="dots">...</span>
        </h4>
        <p className="product-cart-price">{price}</p>
      </div>
      <div
        className="delete-icon"
        onClick={() => {
          deleteProduct(product)
        }}
      >
        <MdClose />
      </div>
    </div>
  )
}

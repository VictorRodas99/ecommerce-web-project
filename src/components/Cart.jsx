import { MdClose, MdShoppingBag, MdRemoveShoppingCart } from 'react-icons/md'
import { useContext } from 'react'
import { CartContext } from '@context/CartContext'
import '@css/cart.css'

export function Cart() {
  const { cartProducts, deleteProduct } = useContext(CartContext)

  return (
    <aside className="cart-container" style={{ display: 'none' }}>
      <div className="cart-header">
        <MdShoppingBag />
        <MdClose />
      </div>

      <div className="cart-body">
        <div
          className="message-empty-cart"
          style={{ display: cartProducts.length === 0 ? 'grid' : 'none' }}
        >
          <div className="message-content">
            <MdRemoveShoppingCart />
            <p>Tu carrito está vacío</p>
            <p>Empieza a comprar</p>
          </div>
        </div>

        <div className="cart-products">
          {cartProducts.map((product) => (
            <div className="cart-product-card">{JSON.stringify(product)}</div>
          ))}
        </div>
      </div>

      <div
        className="cart-footer"
        style={{ display: cartProducts.length > 0 ? 'block' : 'none' }}
      ></div>
    </aside>
  )
}

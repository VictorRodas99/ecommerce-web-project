import { MdClose, MdShoppingBag, MdRemoveShoppingCart } from 'react-icons/md'
import { useContext } from 'react'
import { CartContext } from '@context/CartContext'
import '@css/cart.css'
import { CartItem } from '@components/cart/CartItem'

export function Cart() {
  const { cartProducts, cartVisibility, modifyCartVisibility } =
    useContext(CartContext)

  const totalProducts = cartProducts.length
  const displayMode = cartVisibility ? 'cart-visible' : 'cart-invisible'
  const amountDescription = `${totalProducts} ${
    totalProducts === 1 ? ' Item' : ' Items'
  }`

  return (
    <>
      <div
        className="shadow-block"
        style={{ display: cartVisibility ? 'block' : 'none' }}
      ></div>
      <aside className={`cart-container ${displayMode}`}>
        <div className="cart-header">
          <div className="cart-amount">
            <MdShoppingBag />
            {Boolean(totalProducts) && <p>{amountDescription}</p>}
          </div>

          <button
            className="cart-close"
            onClick={() => modifyCartVisibility(false)}
          >
            <MdClose />
          </button>
        </div>

        <div className="cart-body">
          <div
            className="message-empty-cart"
            style={{ display: totalProducts === 0 ? 'grid' : 'none' }}
          >
            <div className="message-content">
              <MdRemoveShoppingCart />
              <p>Tu carrito está vacío</p>
              <p>Empieza a comprar</p>
            </div>
          </div>

          <div className="cart-products">
            {cartProducts.map((product) => (
              <CartItem key={product.name} data={product} />
            ))}
          </div>
        </div>

        <div
          className="cart-footer"
          style={{ display: totalProducts > 0 ? 'block' : 'none' }}
        ></div>
      </aside>
    </>
  )
}

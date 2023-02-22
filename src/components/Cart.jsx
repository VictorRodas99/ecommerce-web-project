import '@css/cart.css'
import { MdClose, MdShoppingBag, MdRemoveShoppingCart } from 'react-icons/md'
import { CartItem } from '@components/cart/CartItem'
import { useCart, useTotalPrice } from '@hooks/useCart'

export function Cart() {
  const { cartProducts, cartIsVisible, modifyCartVisibility } = useCart()
  const { totalPrice, totalProducts, amountDescription } = useTotalPrice({
    cartProducts
  })

  const displayMode = cartIsVisible ? 'cart-visible' : 'cart-invisible'

  return (
    <>
      <div
        className="shadow-block"
        style={{ display: cartIsVisible ? 'block' : 'none' }}
      ></div>
      <aside className={`cart-container ${displayMode}`}>
        <div className="scroll-control">
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
        </div>

        <div
          className="cart-footer"
          style={{ display: totalProducts > 0 ? 'flex' : 'none' }}
        >
          <button className="btn-cart-footer checkout">
            Ver Carrito ({totalPrice})
          </button>
          <button className="btn-cart-footer buy">Finalizar pedido</button>
        </div>
      </aside>
    </>
  )
}

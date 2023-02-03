import { MdClose, MdShoppingBag, MdRemoveShoppingCart } from 'react-icons/md'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '@context/CartContext'
import '@css/cart.css'
import { CartItem } from '@components/cart/CartItem'
import { getTotalPriceOf } from '@utils/tools'

export function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartProducts, cartVisibility, modifyCartVisibility } =
    useContext(CartContext)

  const totalProducts = cartProducts.length
  const displayMode = cartVisibility ? 'cart-visible' : 'cart-invisible'
  const amountDescription = `${totalProducts} ${
    totalProducts === 1 ? ' Item' : ' Items'
  }`

  useEffect(() => {
    if (cartProducts.length > 0) {
      const totalParsed = getTotalPriceOf(cartProducts)
      setTotalPrice(totalParsed)
    }
  }, [cartProducts])

  return (
    <>
      <div
        className="shadow-block"
        style={{ display: cartVisibility ? 'block' : 'none' }}
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

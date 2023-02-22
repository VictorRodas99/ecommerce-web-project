import { MdClose, MdShoppingBag, MdRemoveShoppingCart } from 'react-icons/md'
import { useCart } from '@hooks/useCart'

export function CartHeader({ totalProducts, amountDescription }) {
  const { modifyCartVisibility } = useCart()

  return (
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
  )
}

export function CartBody({ children, totalProducts }) {
  return (
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

      <div className="cart-products">{children}</div>
    </div>
  )
}

export function CartFooter({ totalPrice, totalProducts }) {
  return (
    <div
      className="cart-footer"
      style={{ display: totalProducts > 0 ? 'flex' : 'none' }}
    >
      <button className="btn-cart-footer checkout">
        Ver Carrito ({totalPrice})
      </button>
      <button className="btn-cart-footer buy">Finalizar pedido</button>
    </div>
  )
}

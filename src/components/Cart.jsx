import {
  MdClose,
  MdDelete,
  MdShoppingBag,
  MdRemoveShoppingCart
} from 'react-icons/md'
import { useContext } from 'react'
import { CartContext } from '@context/CartContext'
import '@css/cart.css'

export function Cart() {
  const { cartProducts, deleteProduct, cartVisibility, modifyCartVisibility } =
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
            {cartProducts.map((product) => {
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
                    <MdDelete />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="cart-footer"
          style={{ display: cartProducts.length > 0 ? 'block' : 'none' }}
        ></div>
      </aside>
    </>
  )
}

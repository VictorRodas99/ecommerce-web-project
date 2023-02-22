import '@css/cart.css'
import { CartItem } from '@components/cart/CartItem'
import { useCart, useTotalPrice } from '@hooks/useCart'
import { Shadow, ScrollController } from './cart/CartBehaviors'
import { CartBody, CartFooter, CartHeader } from './cart/CartElements'

export function Cart() {
  const { cartProducts, cartIsVisible } = useCart()
  const dataPrice = useTotalPrice({ cartProducts })
  const displayMode = cartIsVisible ? 'cart-visible' : 'cart-invisible'

  return (
    <>
      <Shadow displayControl={cartIsVisible} />
      <aside className={`cart-container ${displayMode}`}>
        <ScrollController>
          <CartHeader {...dataPrice} />

          <CartBody {...dataPrice}>
            {cartProducts.map((product) => (
              <CartItem key={product.name} data={product} />
            ))}
          </CartBody>
        </ScrollController>

        <CartFooter {...dataPrice} />
      </aside>
    </>
  )
}

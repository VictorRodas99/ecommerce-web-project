import { useCart } from '@hooks/useCart'
import { MdLocalMall } from 'react-icons/md'

export function CartIcon() {
  const { modifyCartVisibility, cartProducts } = useCart()

  return (
    <div
      className="cart-logo-container"
      onClick={() => modifyCartVisibility(true)}
    >
      <div className="cart-icon" total-products={cartProducts.length}>
        <MdLocalMall />
      </div>
    </div>
  )
}

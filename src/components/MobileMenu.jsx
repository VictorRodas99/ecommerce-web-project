import '@css/mobile/menu.css'
import {
  MdHome,
  MdViewComfy,
  MdDashboard,
  MdOutlineShoppingCart
} from 'react-icons/md'

export function MobileMenu() {
  return (
    <section className="menu-mobile">
      <button className="menu-mobile__item">
        <MdHome />
        Home
      </button>
      <button className="menu-mobile__item">
        <MdViewComfy />
        Categorías
      </button>
      <button className="menu-mobile__item">
        <MdDashboard />
        Secciones
      </button>
      <button className="menu-mobile__item">
        <MdOutlineShoppingCart />
        Ver Carrito
      </button>
    </section>
  )
}

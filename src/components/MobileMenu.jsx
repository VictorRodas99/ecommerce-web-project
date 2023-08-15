import '@css/mobile/menu.css'
import {
  MdHome,
  MdViewComfy,
  MdDashboard,
  MdOutlineShoppingCart
} from 'react-icons/md'

import { Link } from 'react-router-dom'
import { mobileSections } from './MobileComponents'

/**
 * @param {{ sectionController: ({ topic }: { topic: 'categories' | 'mainSections' | 'cart' }) => void }} props
 */
export default function MobileMenu({ sectionController }) {
  return (
    <section className="menu-mobile">
      <Link className="menu-mobile__item menu-mobile-home" to="/">
        <MdHome />
        Home
      </Link>
      <button
        className="menu-mobile__item"
        onClick={() => sectionController({ topic: mobileSections.categories })}
      >
        <MdViewComfy />
        Categorías
      </button>
      <button
        className="menu-mobile__item"
        onClick={() =>
          sectionController({ topic: mobileSections.mainSections })
        }
      >
        <MdDashboard />
        Secciones
      </button>
      <Link className="menu-mobile__item menu-mobile-watch-cart" to="/cart">
        <MdOutlineShoppingCart />
        Carrito
      </Link>
    </section>
  )
}

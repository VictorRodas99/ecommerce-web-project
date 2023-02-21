import { PageIcon } from './icons/PageIcon'
import { MdLocalMall, MdSearch } from 'react-icons/md'
import { CartContext } from '@context/CartContext'
import { useContext, useEffect, useState } from 'react'
import '@css/header.css'
import { useMobileForm } from '@hooks/mobile/useHeader'

export function Header() {
  const { displayFormMode, changeFormVisibility } = useMobileForm()
  const [mode, setMode] = useState(false)
  const { modifyCartVisibility, cartProducts } = useContext(CartContext)

  useEffect(() => {
    modifyCartVisibility(mode)
  }, [mode])

  const handleCartIconClick = () => setMode(!mode)

  return (
    <header className="header-container">
      <nav>
        <div className={displayFormMode.homeIcon}>
          <PageIcon />
        </div>
        <form className="form-container">
          <div className="search-container">
            <div className="search-input">
              <MdSearch className="search-icon" />
              <input placeholder="Busca aquí..." />
            </div>
            <button type="submit" className="btn-submit">
              Buscar
            </button>
          </div>
        </form>

        <form className={`form-mobile ${displayFormMode.form}`}>
          <button
            className={`search-icon-mobile ${displayFormMode.icon}`}
            type="button"
            onClick={() => changeFormVisibility({ mode: 'show' })}
          >
            <MdSearch />
          </button>

          <div className={displayFormMode.input}>
            <div className="search-input">
              <input type="text" placeholder="Busca aquí..." />
            </div>
            <button type="submit" className="btn-submit">
              Buscar
            </button>
          </div>
        </form>

        <div className="cart-logo-container" onClick={handleCartIconClick}>
          <div className="cart-icon" total-products={cartProducts.length}>
            <MdLocalMall />
          </div>
        </div>
      </nav>
    </header>
  )
}

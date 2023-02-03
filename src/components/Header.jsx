import { PageIcon } from './icons/PageIcon'
import { MdLocalMall, MdSearch } from 'react-icons/md'
import { CartContext } from '@context/CartContext'
import { useContext, useEffect, useState } from 'react'
import '@css/header.css'

export function Header() {
  const [mode, setMode] = useState(false)
  const { modifyCartVisibility } = useContext(CartContext)

  useEffect(() => {
    modifyCartVisibility(mode)
  }, [mode])

  const handleCartIconClick = () => setMode(!mode)

  return (
    <header className="header-container">
      <nav>
        <PageIcon />
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

        <div className="cart-logo-container" onClick={handleCartIconClick}>
          <div className="cart-icon">
            <MdLocalMall />
          </div>
        </div>
      </nav>
    </header>
  )
}

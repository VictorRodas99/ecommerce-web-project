import { PageIcon } from './icons/PageIcon'
import { MdLocalMall, MdSearch } from 'react-icons/md'
import { CartContext } from '@context/CartContext'
import { useContext, useEffect, useState } from 'react'
import '@css/header.css'

export function Header() {
  const [homeIconVisibility, setHomeIconVisibility] = useState(true)
  const [mode, setMode] = useState(false)
  const { modifyCartVisibility, cartProducts } = useContext(CartContext)
  const [activeClass, setActiveClass] = useState({
    icon: !homeIconVisibility ? 'active-icon' : '',
    form: !homeIconVisibility ? 'active-form' : 'deactive-form',
    input: !homeIconVisibility ? 'search-container' : 'deactive-input'
  })

  useEffect(() => {
    modifyCartVisibility(mode)
  }, [mode])

  useEffect(() => {
    const main = document.querySelector('main')
    const resetHeader = () => setHomeIconVisibility(true)

    main.addEventListener('click', resetHeader)

    return () => {
      main.removeEventListener('click', resetHeader)
    }
  }, [])

  useEffect(() => {
    setActiveClass({
      icon: !homeIconVisibility ? 'active-icon' : '',
      form: !homeIconVisibility ? 'active-form' : 'deactive-form',
      input: !homeIconVisibility ? 'search-container' : 'deactive-input'
    })
  }, [homeIconVisibility])

  const handleCartIconClick = () => setMode(!mode)

  return (
    <header className="header-container">
      <nav>
        <div style={{ display: homeIconVisibility ? 'block' : 'none' }}>
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

        <form className={`form-mobile ${activeClass.form}`}>
          <button
            className={`search-icon-mobile ${activeClass.icon}`}
            type="button"
            onClick={() => setHomeIconVisibility(false)}
          >
            <MdSearch />
          </button>

          <div className={activeClass.input}>
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

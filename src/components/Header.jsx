import { PageIcon } from './PageIcon'
import { MdLocalMall, MdSearch } from 'react-icons/md'
import '@css/header.css'

export function Header() {
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

        <div className="cart-logo-container">
          <div className="cart-icon">
            <MdLocalMall className="icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}

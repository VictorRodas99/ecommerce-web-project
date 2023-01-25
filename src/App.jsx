import './App.css'
import { MdStorefront, MdLocalMall, MdSearch } from 'react-icons/md'
import './css/header.css'

function App() {
  return (
    <header className="header-container">
      <nav>
        <div className="home-icon-container">
          <a href="/">
            <MdStorefront className="icon home-icon" />
          </a>
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

        <div className="cart-logo-container">
          <div className="cart-icon">
            <MdLocalMall className="icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default App

import { MdSearch } from 'react-icons/md'

export function DesktopForm() {
  return (
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
  )
}

export function MobileForm({ displayMode, handleSearchClick }) {
  return (
    <form className={`form-mobile ${displayMode.form}`}>
      <button
        className={`search-icon-mobile ${displayMode.icon}`}
        type="button"
        onClick={handleSearchClick}
      >
        <MdSearch />
      </button>

      <div className={displayMode.input}>
        <div className="search-input">
          <input type="text" placeholder="Busca aquí..." />
        </div>
        <button type="submit" className="btn-submit">
          Buscar
        </button>
      </div>
    </form>
  )
}

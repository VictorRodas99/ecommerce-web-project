import '@css/not-found.css'
import { Link, useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <section className="not-found-container">
      <div className="not-found-messages">
        <h1>404...</h1>
        <h4>No se encontró la página que buscas</h4>
        <div className="buttons">
          <Link to="/" className="not-found-button home">
            Volver al Inicio
          </Link>
          <button className="not-found-button back" onClick={goBack}>
            Volver atrás
          </button>
        </div>
      </div>
    </section>
  )
}

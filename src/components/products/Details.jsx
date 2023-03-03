import { useLocation } from 'react-router-dom'
import { Image } from '@components/Image'
import { useId, useEffect } from 'react'
import '@css/product-details.css'
import { useCart } from '@hooks/useCart'
import { useNotification } from '@hooks/useNotification'
import { notificationIcons } from '@components/icons/NotificationIcons'

export default function ProductDetails() {
  const { addProduct } = useCart()
  const { createNotification } = useNotification()
  const { state } = useLocation()
  const images =
    state.srcImages.length > 4 ? state.srcImages.slice(1, 4) : state.srcImages // Temporal

  useEffect(() => {
    document.title = 'Info-Shop | Producto'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="details-presentation">
        <div className="product-images">
          <div className="product-gallery">
            {images.map((image) => (
              <div className="gallery-image active" key={useId()}>
                <Image src={image} /> {/* Solo mostrar tres */}
              </div>
            ))}
          </div>
          <div className="main-image">
            <Image src={state.srcImages[0]} alt="Imagen 1 del producto" />
          </div>
        </div>

        <div className="product-main-details">
          <h2>{state.name}</h2>
          <p>
            Marca: <strong>{state.label}</strong>
          </p>

          <div className="categories-container">
            <p>Categorías</p>

            <div className="categories-details">
              {state.categories.map((category) => {
                const categoryId = useId()

                return (
                  <div className="category" key={categoryId}>
                    {category}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="details-footer">
            <div className="product-price">
              <h4>{state.price}</h4>
              <p>Stock disponible</p>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={() => {
                addProduct({
                  ...state,
                  image: state.srcImages[1] ?? state.srcImages[0]
                })

                createNotification({
                  color: 'success',
                  message: 'Agregado a carrito!',
                  icon: notificationIcons.done
                })
              }}
            >
              Añadir a carrito
            </button>
          </div>
        </div>
      </section>

      <section className="product-specification">
        <div className="section-title">
          <h2>Detalles</h2>
        </div>

        <table className="specification-details">
          <tbody>
            {Object.entries(state.details).map(([key, name]) => (
              <tr key={useId()}>
                <th className="specification-label">{key}</th>
                <td className="specification-data">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <a href="https://nissei.com/py" target="_blank" className="credits">
        <p className="credits-text">Disponible en</p>
        <Image
          className="nissei-icon"
          src="https://nissei.com/media/favicon/stores/1/ELS-ORIGINAL.png"
          role="presentation"
          alt="Icono de la página nissei, en donde se obtuvieron todos los datos"
        ></Image>
      </a>
    </>
  )
}

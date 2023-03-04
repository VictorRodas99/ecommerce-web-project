import { Image } from '@components/Image'
import '@css/product-details.css'
import { useCart } from '@hooks/useCart'
import { useNotification } from '@hooks/useNotification'
import { notificationIcons } from '@components/icons/NotificationIcons'
import { useEffect } from 'react'
import { useProductDetails } from '@hooks/useProductDetails'

export default function ProductDetails() {
  const { product } = useProductDetails()
  const { addProduct } = useCart()
  const { createNotification } = useNotification()

  useEffect(() => {
    document.title = 'Info-Shop | Producto'
    window.scrollTo(0, 0)
  }, [])

  const handleClickOnAdd = () => {
    addProduct({
      ...product,
      image: product.images[1] ?? product.images[0]
    })

    createNotification({
      color: 'success',
      message: 'Agregado a carrito!',
      icon: notificationIcons.done
    })
  }

  return (
    <>
      <section className="details-presentation">
        <div className="product-images">
          <div className="product-gallery">
            {product.images.map((image) => (
              <div className="gallery-image active" key={image}>
                <Image src={image} /> {/* Solo mostrar tres */}
              </div>
            ))}
          </div>
          <div className="main-image">
            <Image src={product.mainImage} alt="Imagen 1 del producto" />
          </div>
        </div>

        <div className="product-main-details">
          <h2>{product.name}</h2>
          <p>
            Marca: <strong>{product.label}</strong>
          </p>

          <div className="categories-container">
            <p>Categorías</p>

            <div className="categories-details">
              {product.categories.map((category) => {
                const categoryId = category

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
              <h4>{product.price}</h4>
              <p>Stock disponible</p>
            </div>

            <button
              className={`add-to-cart-btn ${product.wasAdded && 'added'}`}
              onClick={!product.wasAdded ? handleClickOnAdd : null}
            >
              {!product.wasAdded ? 'Añadir' : 'Añadido'} a carrito
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
            {Object.entries(product.details).map(([key, name]) => (
              <tr key={name}>
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

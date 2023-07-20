import { Image } from '@components/Image'

export default function NisseiLink() {
  return (
    <a href="https://nissei.com/py" target="_blank" className="credits">
      <p className="credits-text">Disponible en</p>
      <Image
        className="nissei-icon"
        src="https://nissei.com/media/favicon/stores/1/ELS-ORIGINAL.png"
        role="presentation"
        alt="Icono de la página nissei, en donde se obtuvieron todos los datos"
      ></Image>
    </a>
  )
}

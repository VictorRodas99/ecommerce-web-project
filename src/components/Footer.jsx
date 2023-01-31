import '@css/footer.css'
import { PageIcon } from './icons/PageIcon'
import { LogoGithubIcon } from './icons/LogoGithub'
import { MdFavorite } from 'react-icons/md'
import { FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import { footerInfo } from '@utils/footerInfo'
import { useState } from 'react'
import { useEffect } from 'react'

const { author, project } = footerInfo

const randomNumber = () => Math.floor(Math.random() * 255)

export function Footer() {
  const [nameColor, setNameColor] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

  const getColorFormat = (color) => {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`
  }

  useEffect(() => {
    const handleMove = (event) => {
      const newColor = {
        red: randomNumber(),
        green: randomNumber(),
        blue: randomNumber()
      }

      setNameColor(newColor)
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <footer>
      <div className="info-container">
        <div className="about-project">
          <PageIcon
            parentClass="footer-icon-container"
            iconClass="footer-icon"
          />
          <p className="project-description">
            Este sitio web ha sido creado con fines de aprendizaje, todos los
            datos de los productos fueron recabados desde
            <a href="https://nissei.com/py"> nissei.com</a>
          </p>
          <div className="project-repo">
            Repositorio de
            <a href={project.repo}>
              <LogoGithubIcon />
            </a>
            con el código fuente
          </div>
        </div>

        <div className="about-author">
          <h4 className="author-name-container">
            Hecho con <MdFavorite className="icon heart" /> por
            <span
              style={{
                color: getColorFormat(nameColor),
                transition: 'all 0.2s ease'
              }}
            >
              Víctor Rodas
            </span>
          </h4>

          <div className="author-info">
            <div className="socials">
              <ul>
                <li>
                  <a href={`mailto:${author.email}`}>
                    <FaEnvelope className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href={author.instagram}>
                    <FaInstagram className="social-icon" />
                  </a>
                </li>
                <li>
                  <a href={author.github}>
                    <FaGithub className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

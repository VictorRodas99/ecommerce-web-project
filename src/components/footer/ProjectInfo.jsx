import { PageIcon } from './icons/PageIcon'
import { LogoGithubIcon } from './icons/LogoGithub'

export function ProjectInfo({ repoLink }) {
  return (
    <div className="about-project">
      <PageIcon parentClass="footer-icon-container" iconClass="footer-icon" />

      <p className="project-description">
        Este sitio web ha sido creado con fines de aprendizaje, todos los datos
        de los productos fueron recabados desde
        <a href="https://nissei.com/py"> nissei.com</a>
      </p>

      <div className="project-repo">
        Repositorio de
        <a href={repoLink}>
          <LogoGithubIcon />
        </a>
        con el código fuente
      </div>
    </div>
  )
}

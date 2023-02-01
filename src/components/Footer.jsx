import '@css/footer.css'
import { ProjectInfo } from './footer/ProjectInfo'
import { footerInfo } from '@utils/footerInfo'
import { AuthorInfo } from './footer/AuthorInfo'

const { author, project } = footerInfo

export function Footer() {
  return (
    <footer>
      <div className="info-container">
        <ProjectInfo repoLink={project.repo} />
        <AuthorInfo author={author} />
      </div>
    </footer>
  )
}

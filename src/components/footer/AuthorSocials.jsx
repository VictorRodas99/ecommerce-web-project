import { FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'

export function AuthorSocials({ email, instagram, github }) {
  return (
    <div className="author-info">
      <div className="socials">
        <ul>
          <li>
            <a href={`mailto:${email}`}>
              <FaEnvelope className="social-icon" />
            </a>
          </li>
          <li>
            <a href={instagram}>
              <FaInstagram className="social-icon" />
            </a>
          </li>
          <li>
            <a href={github}>
              <FaGithub className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

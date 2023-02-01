import { MdFavorite } from 'react-icons/md'
import { getColorFormat } from '@utils/tools'
import { useChangingColor } from '@hooks/useChangingColor'
import { AuthorSocials } from './AuthorSocials'

export function AuthorInfo({ author }) {
  const { color } = useChangingColor()

  return (
    <div className="about-author">
      <h4 className="author-name-container">
        Hecho con <MdFavorite className="icon heart" /> por
        <span
          style={{
            color: getColorFormat(color),
            transition: 'all 0.2s ease'
          }}
        >
          Víctor Rodas
        </span>
      </h4>

      <AuthorSocials
        email={author.email}
        instagram={author.instagram}
        github={author.instagram}
      />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { parseNameToURI } from '@utils/tools'

export function CategoryCard({ itemNumber, bgNumber, name }) {
  return (
    <Link
      to={`/${parseNameToURI(name)}`}
      className={`top-categories__card ${itemNumber}`}
    >
      <div className={`category-image ${bgNumber}`}></div>
      <div className="category-name">{name}</div>
    </Link>
  )
}

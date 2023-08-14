import '@css/mobile/categories.css'
import { CATEGORIES } from '@utils/categoriesIcons'
import { capitalize, parseNameToURI } from '@utils/tools'
import { Link } from 'react-router-dom'
import { useMobileMenu } from '@hooks/useMobileMenu'

function CategoryCards() {
  const { resetMobileItems } = useMobileMenu()
  const categoryEntries = Object.entries(CATEGORIES)

  return (
    <div className="categories-mobile-cards">
      {categoryEntries.map(([topic, icon]) => {
        const categoryUrl = `/category/${parseNameToURI(topic)}`
        const title = capitalize(topic)

        return (
          <Link
            className="category-mobile-card"
            key={topic}
            to={categoryUrl}
            onClick={resetMobileItems}
          >
            {icon}
            <p>{title}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default function CategoryProductsMobile() {
  return (
    <section className="categories-mobile-container">
      <h2>Categorías</h2>
      <CategoryCards />
    </section>
  )
}

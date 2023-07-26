import CategorySectionHeader from './category-page-components/CategorySectionHeader'
import { CategoriesBox } from '@components/categories/CategoriesBox'
import { getAPIUrlFromCategory } from '@utils/tools'
import { CATEGORIES } from '@utils/categoriesIcons'
import { Products } from '@components/Products'
import { useParams } from 'react-router-dom'
import '@css/category-page.css'

export default function CategoryProducts() {
  const { category } = useParams()
  const apiUrl = getAPIUrlFromCategory(category)

  return (
    <section className="category-section-container">
      <CategorySectionHeader category={category} />

      <div className="category-section-body">
        <aside className="category-section__options">
          <div className="categories-sub-section">
            <CategoriesBox title="Otras categorías" topics={CATEGORIES} />
          </div>
          <div className="sub-section-filters">
            {/* TODO: inputs with its respectives filters */}
            <div className="price-range"></div>
            <div className="brands filters"></div>
          </div>
        </aside>
        <Products apiUrl={apiUrl} />
      </div>
    </section>
  )
}

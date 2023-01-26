import { CategoriesBox } from './CategoriesBox'
import { TOPICS, CATEGORIES } from '../../utils/categories-icons'
import '../../css/categories.css'

export function Categories() {
  return (
    <section className="categories">
      <div className="menu-categories">
        <CategoriesBox title="topics" topics={TOPICS} />
        <CategoriesBox title="Categorías" topics={CATEGORIES} />
      </div>

      <div className="top-categories"></div>
    </section>
  )
}

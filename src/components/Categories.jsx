import { CategoriesBox } from './categories/CategoriesBox'
import { CategoryCard } from './categories/TopCategories'
import { TOPICS, CATEGORIES, topTopics } from '@utils/categoriesIcons'
import '@css/categories.css'

export function Categories() {
  return (
    <section className="categories">
      <div className="menu-categories">
        <CategoriesBox title="Secciones" topics={TOPICS} />
        <CategoriesBox title="Categorías" topics={CATEGORIES} />
      </div>

      <div className="top-categories">
        {topTopics.map((obj) => {
          const [item, bg] = obj.classes

          return (
            <CategoryCard
              key={item}
              itemNumber={item}
              bgNumber={bg}
              name={obj.topic}
            />
          )
        })}
      </div>
    </section>
  )
}

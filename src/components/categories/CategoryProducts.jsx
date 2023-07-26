import { useParams } from 'react-router-dom'
import { Products } from '@components/Products'
import { getAPIUrlFromCategory, capitalize } from '@utils/tools'
import { useEffect, useMemo } from 'react'
import { CategoriesBox } from '@components/categories/CategoriesBox'
import { CATEGORIES } from '@utils/categoriesIcons'

import '@css/category-page.css'
import ProductSorter from './category-page-components/ProductSorter'

export default function CategoryProducts() {
  const { category } = useParams()
  const apiUrl = getAPIUrlFromCategory(category)
  const capitalizedCategory = useMemo(() => capitalize(category), [])

  useEffect(() => {
    document.title = `Info-Shop | ${capitalizedCategory}`
  }, [])

  return (
    <section className="category-section-container">
      <div className="category-section-header">
        <h4>Resultados para... {capitalizedCategory}</h4>

        <div className="category-section options">
          <ProductSorter />
        </div>
      </div>

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

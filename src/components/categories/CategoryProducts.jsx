import { useParams } from 'react-router-dom'
import { Products } from '@components/Products'
import { getAPIUrlFromCategory, capitalize } from '@utils/tools'
import { useEffect, useMemo, useState } from 'react'
import { CategoriesBox } from '@components/categories/CategoriesBox'
import { CATEGORIES } from '@utils/categoriesIcons'

import { MdGridView, MdViewList } from 'react-icons/md'
import { Select } from '@components/page-elements/Select'

import '@css/category-page.css'

export default function CategoryProducts() {
  const { category } = useParams()
  const [sortBy, setSortBy] = useState('default')
  const apiUrl = getAPIUrlFromCategory(category)
  const capitalizedCategory = useMemo(() => capitalize(category), [])

  useEffect(() => {
    document.title = `Info-Shop | ${capitalizedCategory}`
  }, [])

  const getValueforSorting = (value) => setSortBy(value)

  // useEffect(() => console.log(sortBy), [sortBy])

  return (
    <section className="category-section-container">
      <div className="category-section-header">
        <h4>Resultados para... {capitalizedCategory}</h4>

        <div className="category-section options">
          <form className="category-section sorters">
            <Select
              label="Ordenar por: "
              options={[
                { value: 'default', text: 'Defecto' },
                { value: 'name', text: 'Nombre' },
                { value: 'brand', text: 'Marca' },
                { value: 'majorPrice', text: 'Precio mayor' },
                { value: 'minorPrice', text: 'Precio menor' }
              ]}
              valueSetter={getValueforSorting}
            />
          </form>
          <div className="category-section views">
            <p>Vista: </p>
            <MdGridView />
            <MdViewList />
          </div>
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

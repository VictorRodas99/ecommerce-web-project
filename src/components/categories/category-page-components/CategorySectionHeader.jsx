import { useEffect, useMemo } from 'react'
import ProductSorter from './ProductSorter'
import { capitalize } from '@utils/tools'

export default function CategorySectionHeader({ category }) {
  const capitalizedCategory = useMemo(() => capitalize(category), [])

  useEffect(() => {
    document.title = `Info-Shop | ${capitalizedCategory}`
  }, [])

  return (
    <div className="category-section-header">
      <h4>Resultados para... {capitalizedCategory}</h4>

      <div className="category-section options">
        <ProductSorter />
      </div>
    </div>
  )
}

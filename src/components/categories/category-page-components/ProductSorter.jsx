import { MdGridView, MdViewList } from 'react-icons/md'
import { Select } from '@components/page-elements/Select'

import { useState, useEffect } from 'react'

export default function ProductSorter() {
  const [sortBy, setSortBy] = useState('default')
  const getValueforSorting = (value) => setSortBy(value)

  // useEffect(() => console.log(sortBy), [sortBy])

  return (
    <>
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
    </>
  )
}

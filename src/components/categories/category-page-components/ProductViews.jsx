import { MdGridView, MdViewList } from 'react-icons/md'
import { useViewSettings } from '@hooks/useViewSettings'

export default function ProductViewsOptions() {
  const { viewOption, changeViewOption } = useViewSettings()

  const handleClick = (event, option) => {
    changeViewOption(option)

    const { currentTarget } = event
    const { parentElement } = currentTarget

    const svgElements = Array.from(parentElement.getElementsByTagName('svg'))

    svgElements.forEach((svgElement) => {
      svgElement.classList.remove('view-active')
    })

    currentTarget.classList.add('view-active')
  }

  return (
    <div className="category-section views">
      <p>Vista: </p>
      <MdGridView
        className={`view-option ${viewOption === 'grid' ? 'view-active' : ''}`}
        onClick={(e) => handleClick(e, 'grid')}
      />
      <MdViewList
        className={`view-option ${viewOption === 'col' ? 'view-active' : ''}`}
        onClick={(e) => handleClick(e, 'col')}
      />
    </div>
  )
}

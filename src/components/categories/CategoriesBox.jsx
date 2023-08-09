import { capitalize, parseNameToURI } from '@utils/tools.js'
import { Link } from 'react-router-dom'

function BoxBodyMainSection({ topics }) {
  const topicsEntries = Object.entries(topics)

  return (
    <div className="box-body">
      {topicsEntries.map(([topic, icon]) => (
        <div className="box-body__item" key={topic}>
          {icon}
          {capitalize(topic)}
        </div>
      ))}
    </div>
  )
}

function BoxBody({ topics }) {
  const topicsEntries = Object.entries(topics)

  return (
    <div className="box-body">
      {topicsEntries.map(([topic, icon]) => (
        <Link
          className="box-body__item"
          key={topic}
          to={`/category/${parseNameToURI(topic)}`}
        >
          {icon}
          {capitalize(topic)}
        </Link>
      ))}
    </div>
  )
}

export function CategoriesBox({ title, topics }) {
  const isCustom = title === 'Secciones'

  return (
    <div className="menu-box">
      <div className="box-title">
        <h3>{title}</h3>
      </div>
      {isCustom ? (
        <BoxBodyMainSection topics={topics} />
      ) : (
        <BoxBody topics={topics} />
      )}
    </div>
  )
}

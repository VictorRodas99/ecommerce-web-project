import { capitalize } from '@utils/tools.js'

export function CategoriesBox({ title, topics }) {
  return (
    <div className="menu-box">
      <div className="box-title">
        <h3>{title}</h3>
      </div>
      <div className="box-body">
        {Object.entries(topics).map(([topic, icon]) => (
          <div key={topic}>
            {icon}
            {capitalize(topic)}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CategoryCard({ itemNumber, bgNumber, name }) {
  return (
    <div className={`top-categories__card ${itemNumber}`}>
      <div className={`category-image ${bgNumber}`}></div>
      <div className="category-name">{name}</div>
    </div>
  )
}

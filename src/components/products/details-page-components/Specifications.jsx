/**
 * @typedef {import('../utils/details.tools').ProductDetail} ProductDetail
 */

/**
 * @param {{ product: ProductDetail }} props
 */
export default function Specifications({ product }) {
  return (
    <table className="specification-details">
      <tbody>
        {Object.entries(product.details).map(([key, name]) => (
          <tr key={name}>
            <th className="specification-label">{key}</th>
            <td className="specification-data">{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

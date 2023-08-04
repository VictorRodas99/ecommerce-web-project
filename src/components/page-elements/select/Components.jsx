import { MdExpandMore, MdExpandLess } from 'react-icons/md'

export function SelectIcon({ mode }) {
  return (
    <div>
      {mode ? (
        <MdExpandLess className="select-icon" />
      ) : (
        <MdExpandMore className="select-icon" />
      )}
    </div>
  )
}

/**
 * @param {{ options: { value: string, text: string }[] }} props
 */
export function Options({ options }) {
  return (
    <ul className="select-dropdown">
      {options.map((option, index) => {
        const isFirst = index === 0

        return (
          <li
            key={option.value}
            className={`select-dropdown__value ${
              isFirst ? 'option-active' : ''
            }`}
            data={option.value}
          >
            {option.text}
          </li>
        )
      })}
    </ul>
  )
}

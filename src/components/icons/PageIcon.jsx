import { MdStorefront } from 'react-icons/md'
import '@css/page-icon.css'

export function PageIcon({ parentClass, iconClass }) {
  return (
    <div className={`home-icon-container ${parentClass && parentClass}`}>
      <a href="/">
        <MdStorefront className={`icon ${iconClass ?? 'home-icon'}`} />
      </a>
    </div>
  )
}

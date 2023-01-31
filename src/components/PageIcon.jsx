import { MdStorefront } from 'react-icons/md'
import '@css/page-icon.css'

export function PageIcon() {
  return (
    <div className="home-icon-container">
      <a href="/">
        <MdStorefront className="icon home-icon" />
      </a>
    </div>
  )
}

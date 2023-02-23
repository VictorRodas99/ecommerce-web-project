import '@css/header.css'
import { PageIcon } from './icons/PageIcon'
import { CartIcon } from './header/CartIcon'
import { useMobileForm } from '@hooks/mobile/useHeader'
import { DesktopForm, MobileForm } from './header/Forms'

export function Header() {
  const { displayFormMode, changeFormVisibility } = useMobileForm()

  const handleSearchClick = () => {
    changeFormVisibility({ mode: 'show' })
  }

  return (
    <header className="header-container">
      <nav>
        <div className={displayFormMode.homeIcon}>
          <PageIcon />
        </div>

        <DesktopForm />
        <MobileForm
          displayMode={displayFormMode}
          handleSearchClick={handleSearchClick}
        />

        <CartIcon />
      </nav>
    </header>
  )
}

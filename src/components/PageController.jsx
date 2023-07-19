import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { Arrow } from './products/Arrow'
import { usePage } from '@hooks/usePage'

/**
 * Renders a page controller component with arrows for navigating between pages
 * @param {{
 *  urlBase: string
 *  totalPages: { previousPage?: number, nextPage?: number }
 *  refreshMethod: (url: string) => void,
 *  containerReference?: React.MutableRefObject<HTMLElement> | null,
 * }} props
 */
export function PageController({
  urlBase,
  totalPages,
  refreshMethod,
  containerReference = null
}) {
  const { savePage } = usePage()

  const changePage = (event) => {
    const { id } = event.currentTarget
    const numberPage =
      id === 'back' ? totalPages.previousPage : totalPages.nextPage

    const newPageUrl = `${urlBase}?page=${numberPage}`

    savePage(numberPage)
    refreshMethod(newPageUrl)

    if (containerReference) {
      window.scroll(0, containerReference.current.offsetTop)
    }
  }

  return (
    <div className="page-controller">
      <Arrow
        id="back"
        page={totalPages.previousPage}
        icon={<MdArrowBack className="icon" />}
        eventHandler={changePage}
      />

      <Arrow
        id="next"
        page={totalPages.nextPage}
        icon={<MdArrowForward className="icon" />}
        eventHandler={changePage}
      />
    </div>
  )
}

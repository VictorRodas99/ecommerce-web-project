import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { Arrow } from './products/Arrow'

export function PageController({ pages, handleChangePage }) {
  return (
    <div className="page-controller">
      <Arrow
        id="back"
        page={pages.previousPage}
        icon={<MdArrowBack className="icon" />}
        eventHandler={handleChangePage}
      />

      <Arrow
        id="next"
        page={pages.nextPage}
        icon={<MdArrowForward className="icon" />}
        eventHandler={handleChangePage}
      />
    </div>
  )
}

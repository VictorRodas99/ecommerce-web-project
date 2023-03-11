import { Categories } from '@components/Categories'
import { Products } from '@components/Products'
import { API_URLS } from 'src/config'

export function Home() {
  return (
    <>
      <Categories />
      <Products apiUrl={API_URLS.home} category="Productos" />
    </>
  )
}

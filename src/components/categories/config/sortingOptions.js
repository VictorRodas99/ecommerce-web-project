import { parseNumber } from "@utils/tools"

/**
 * @typedef {import("@services/getProducts").Product} Product
 */

/**
 * @param {Product[]} products 
 */
const sortByName = (products) => {
  if (!products) {
    return ''
  }

  return [...products].sort((a, b) => {
    const first = a.name.toLocaleLowerCase()
    const second = b.name.toLocaleLowerCase()

    if (first < second) {
      return -1
    }

    if (first > second) {
      return 1
    }

    return 0
  })
}

/**
 * @param {Product[]} products 
 */
const sortByBrand = (products) => {
  if (!products) {
    return ''
  }

  return [...products].sort((a, b) => {
    const first = a.label.toLocaleLowerCase()
    const second = b.label.toLocaleLowerCase()

    if (first < second) {
      return -1
    }

    if (first > second) {
      return 1
    }

    return 0
  })
}

/**
 * @param {Product[]} products
 * @param {'asc' | 'desc'} ascOrDesc 
 */
const sortByPrice = (products, ascOrDesc) => {
  if (!products) {
    return ''
  }

  if (ascOrDesc === 'asc') {
    return [...products].sort((a, b) => parseNumber(a.price) - parseNumber(b.price))
  }

  if (ascOrDesc === 'desc') {
    return [...products].sort((a, b) => parseNumber(b.price) - parseNumber(a.price))
  }

  throw new Error('Expected second param to be "asc" | "desc" type')
}


const optionsForSort = [
  { value: 'default', text: 'Defecto', sortingCallback: null },
  {
    value: 'name',
    text: 'Nombre',
    sortingCallback: sortByName
  },
  { value: 'brand', text: 'Marca', sortingCallback: sortByBrand },
  {
    value: 'majorPrice',
    text: 'Precio mayor',
    sortingCallback: (products) => sortByPrice(products, 'desc')
  },
  {
    value: 'minorPrice',
    text: 'Precio menor',
    sortingCallback: (products) => sortByPrice(products, 'asc')
  }
]

export default optionsForSort
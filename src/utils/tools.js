import { API_URLS } from 'src/config'

export const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Given argument is not a string!')
  }

  if (!string.trim()) {
    return ''
  }

  const words = string.split(' ')
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )

  return capitalizedWords.join(' ')
}

export const randomNumber = () => {
  return Math.floor(Math.random() * 255)
}

export const getColorFormat = (color) => {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`
}

export const parseNumber = (number) => {
  const parsedNumber = Number(number.replace(/\D/g, ''))
  return isNaN(parsedNumber) ? 0 : parsedNumber
}

export const normalizeString = (string) => {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
}

export const pricesToNumber = (products) => {
  const prices = products.map((product) => {
    const parsedPrice = Number(product.price.replace(/\D/g, ''))
    return isNaN(parsedPrice) ? 0 : parsedPrice
  })

  return prices
}

export const getTotalPriceOf = (products) => {
  const parsedPrices = pricesToNumber(products)
  const totalPrice = parsedPrices.reduce(
    (accmulator, currentPrice) => accmulator + currentPrice
  )

  return `Gs. ${totalPrice.toLocaleString('de-DE')}`
}

export const parseNameToURI = (givenName) => {
  givenName = normalizeString(givenName)
  return encodeURIComponent(givenName).replaceAll('%20', '-').toLowerCase()
}

export const getAPIUrlFromCategory = (category) => {
  const matches = {
    notebooks: API_URLS.computing.notebooks,
    smartphones: API_URLS.electronics.smartphones,
    impresoras: API_URLS.computing.printers,
    almacenamiento: API_URLS.computing.storage,
    perifericos: API_URLS.computing.monitors
  }

  const url = matches[category]
  if (!url) {
    throw new Error('Invalid category name')
  }

  return url
}

/**
 * @param {{
 *  element: HTMLElement,
 *  classes: { add: string, remove: string }
 *  }}
 */
export const toggleClass = ({ element, classes }) => {
  // bc classList.toggle doesn't work for some reason...
  element.classList.add(classes.add)
  element.classList.remove(classes.remove)
}

/**
 *
 * @param {{
 *   container: HTMLElement,
 *   condition: boolean,
 *   relativeTo?: HTMLElement,
 *   pxToScroll?: number,
 *   timesToScroll?: number
 * }}
 */
export const simulateScroll = ({
  container,
  condition,
  relativeTo = undefined,
  pxToScroll = 0,
  timesToScroll = 0
}) => {
  if (isNaN(pxToScroll)) {
    throw new TypeError('pixels to scroll must be only a number')
  }

  if (!pxToScroll && !relativeTo) {
    throw new Error('Provide at least one method of scrolling')
  }

  const TABLET_SCREEN_WIDTH_PX = 768
  const isDesktopScreen = window.innerWidth > TABLET_SCREEN_WIDTH_PX

  const scrollBevavior = isDesktopScreen ? 'scrollTop' : 'scrollLeft'
  const offSetValue = isDesktopScreen ? 'offsetHeight' : 'offsetWidth'
  let scrollController

  if (pxToScroll) {
    const containerGap = parseNumber(getComputedStyle(container).gap)
    pxToScroll += containerGap
    scrollController = pxToScroll
  } else {
    scrollController = relativeTo[offSetValue]
  }

  if (timesToScroll) {
    scrollController *= timesToScroll
  }

  container[scrollBevavior] = condition ? 0 : scrollController
}

export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1)
}

export const randomNumber = () => {
  return Math.floor(Math.random() * 255)
}

export const getColorFormat = (color) => {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`
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
  return encodeURIComponent(givenName).replaceAll('%20', '-').toLowerCase()
}

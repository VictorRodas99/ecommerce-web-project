import { scrape } from './index.js'
import {
  removeEmptyData,
  parseString,
  validateURL
} from './utils/data-treatment.js'
import { findImageLinks } from './utils/scraper-tools.js'

export async function getProductsLinks(url) {
  const $ = await scrape(url)
  const rawLinks = []

  $('ol .product-item .product-item-info').each((_, el) => {
    const rawProductLink = $(el).find('.product-item-link').attr('href')
    rawLinks.push(rawProductLink)
  })

  const links = removeEmptyData(rawLinks)
  return links
}

export async function getProductData(productLink) {
  const $ = await scrape(productLink)

  const getDetails = (html) => {
    const rawDetails = []
    const details = {}

    $(html).each((_, el) => rawDetails.push($(el).text()))

    const parsedDetails = removeEmptyData(rawDetails)

    parsedDetails.forEach((detail) => {
      const [key, value] = detail.split(':')
      details[key] = parseString(value)
    })

    return details
  }

  const getLabel = (html) => {
    return parseString($(html).text()).split(' ')[1]
  }

  const getParsedData = (rawObjectData) => {
    const rawData = Object.values(rawObjectData)
    const existsUndefined = rawData.includes(undefined)

    if (existsUndefined) {
      return {}
    }

    const [name, price, detailsHTML, labelHTML, srcImages] = rawData
    const details = getDetails(detailsHTML)
    const label = getLabel(labelHTML)

    const areValidURLs = srcImages.every(validateURL)

    if (!areValidURLs) {
      return {}
    }

    return {
      name: parseString(name),
      price: parseString(price),
      details,
      label,
      srcImages
    }
  }

  const $container = $('.main')

  const rawProductName = $container.find('.page-title-wrapper h1').text()
  const rawImageLinks = findImageLinks(
    $,
    $container,
    '.product-info-main-content .media script'
  )
  const rawPrice = $container
    .find('.product-info-main .product-info-price .price')
    .text()
  const rawDetails = $container.find('.product-info-main .overview ul').html()
  const rawLabel = $container
    .find('.data .additional-attributes tbody tr')
    .html()

  const productData = getParsedData({
    rawProductName,
    rawPrice,
    rawDetails,
    rawLabel,
    rawImageLinks
  })

  return productData
}

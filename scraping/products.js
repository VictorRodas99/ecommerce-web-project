import { scrape } from './index.js'
import { removeEmptyData } from './utils/data-treatment.js'
import {
  findImageLinks,
  getParsedData,
  getLiteralObjectFrom
} from './utils/scraper-tools.js'

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
  const rawCategories = $container
    .find('.product-info-main-content .cat-links')
    .text()

  const rawSpecs = $container.find('.detailed #description .value ul').html()

  const productData = getParsedData($, {
    rawProductName,
    rawPrice,
    rawDetails,
    rawLabel,
    rawCategories,
    rawImageLinks
  })

  // sometimes there aren't specifications the for product
  if (rawSpecs) {
    const specs = getLiteralObjectFrom($, rawSpecs)
    productData.specifications = specs
  }

  return productData
}

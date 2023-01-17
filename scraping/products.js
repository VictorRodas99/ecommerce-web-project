import { scrape } from './index.js'
import { removeEmptyData } from './utils/data-treatment.js'
import { findImageLinks, getParsedData } from './utils/scraper-tools.js'

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

  const productData = getParsedData($, {
    rawProductName,
    rawPrice,
    rawDetails,
    rawLabel,
    rawImageLinks
  })

  return productData
}

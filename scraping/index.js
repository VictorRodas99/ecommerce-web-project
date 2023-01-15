import * as cheerio from 'cheerio'
import { removeEmptyData, parseString, printProcess, writeJSON } from './utils.js'

const baseURL = 'https://nissei.com/py/informatica'

async function scrape (url) {
  const response = await fetch(url)
  const html = await response.text()

  return cheerio.load(html)
}

async function getProductsLinks (url) {
  const $ = await scrape(url)
  const rawLinks = []
  const rawSrcImages = []

  $('ol .product-item .product-item-info').each((_, el) => {
    const rawProductLink = $(el).find('.product-item-link').attr('href')
    const rawImageLink = $(el).find('.product-image-photo').attr('data-src')

    rawLinks.push(rawProductLink)
    rawSrcImages.push(rawImageLink)
  })

  const links = removeEmptyData(rawLinks)
  const srcImages = removeEmptyData(rawSrcImages)

  return {
    links,
    srcImages
  }
}

async function getProductData (productLink) {
  const $ = await scrape(productLink)

  const getDetails = (html) => {
    const rawDetails = []
    const details = {}

    $(html).each((_, el) => rawDetails.push($(el).text()))

    const parsedDetails = removeEmptyData(rawDetails)
    
    parsedDetails.forEach(detail => {
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

    if(existsUndefined) {
      return {}
    }

    const [ name, price, detailsHTML, labelHTML ] = rawData
    const details = getDetails(detailsHTML)
    const label = getLabel(labelHTML)

    return {
      name: parseString(name),
      price: parseString(price),
      details,
      label
    }
  }

  const $container = $('.main')

  const rawProductName = $container.find('.page-title-wrapper h1').text()
  const rawPrice = $container.find('.product-info-main .product-info-price .price').text()
  const rawDetails = $container.find('.product-info-main .overview ul').html()
  const rawLabel = $container.find('.data .additional-attributes tbody tr').html()

  const productData = getParsedData({
    rawProductName, rawPrice,
    rawDetails, rawLabel
  })

  return productData
}

async function scraper (url, jsonFileName = 'products.json') {
  const { links, srcImages } = await getProductsLinks(url)
  const products = []
  let index = 0

  while(index < links.length) {
    const srcImage = srcImages[index]
    const link = links[index]
    const productData = await getProductData(link)

    if(Object.keys(productData).length > 0) {
      productData.image = srcImage
      products.push(productData)
      index++
      printProcess(index, links.length)
    }
  }

  await writeJSON(products, jsonFileName)
}

scraper(baseURL)

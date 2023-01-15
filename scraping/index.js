import * as cheerio from 'cheerio'

const baseURL = 'https://nissei.com/py/informatica'

async function scrape (url) {
  const response = await fetch(url)
  const html = await response.text()

  return cheerio.load(html)
}

async function getProductsLinks () {
  const $ = await scrape(baseURL)
  const rawLinks = []
  const rawSrcImages = []

  $('ol .product-item .product-item-info').each((_, el) => {
    const rawProductLink = $(el).find('.product-item-link').attr('href')
    const rawImageLink = $(el).find('.product-image-photo').attr('data-src')

    rawLinks.push(rawProductLink)
    rawSrcImages.push(rawImageLink)
  })

  const links = rawLinks.filter(link => link !== undefined)
  const srcImages = rawSrcImages.filter(src => src !== undefined)

  return {
    links,
    srcImages
  }
}

async function getProductData (productLink) {
  const $ = await scrape(productLink)
  let productData = {}

  const getDetails = (html) => {
    const rawDetails = []
    const details = {}

    $(html).each((_, el) => rawDetails.push($(el).text()))

    const filtered = rawDetails.filter(rawDetail => rawDetail && rawDetail !== '\n')
    const parsedDetails = filtered.map(e => e.trim())
    
    parsedDetails.forEach(detail => {
      const [key, value] = detail.split(':')
      details[key] = value
    })

    return details
  }

  const getLabel = (html) => $(html).first().text().replace(/\s+/g, ' ').trim()

  const getParsedData = (rawObjectData) => {
    const rawData = Object.values(rawObjectData)
    const existsUndefined = rawData.includes(undefined)

    if(existsUndefined) {
      return {}
    }

    const parsedData = rawData.map(data => data.trim())
    const [ name, price, detailsHTML, labelHTML ] = parsedData

    const details = getDetails(detailsHTML)
    const label = getLabel(labelHTML)

    return {
      name, price,
      details, label
    }
  }

  const $container = $('.main')

  const rawProductName = $container.find('.page-title-wrapper h1').text()
  const rawPrice = $container.find('.product-info-main .product-info-price .price').text()
  const rawDetails = $container.find('.product-info-main .overview ul').html()
  const rawLabel = $container.find('.data .additional-attributes tbody').html()

  const parsedProductData = getParsedData({
    rawProductName, rawPrice,
    rawDetails, rawLabel
  })

  if(Object.keys(parsedProductData).length > 0) {
    productData = parsedProductData
  }

  return productData
}

async function main () {
  const { links, srcImages } = await getProductsLinks()
  const products = []
  let index = 0

  while(index < links.length) {
    const srcImage = srcImages[index]
    const link = links[index]

    const productData = await getProductData(link)
    productData.image = srcImage

    products.push(productData)
    index++
  }

  console.log(products)
}

main()

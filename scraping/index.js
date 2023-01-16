import * as cheerio from 'cheerio'
import { getProductsLinks, getProductData } from './products.js'
import { printProcess, writeJSON } from './utils.js'

const baseURL = 'https://nissei.com/py/informatica'

export async function scrape(url) {
  const response = await fetch(url)
  const html = await response.text()

  return cheerio.load(html)
}

async function scraper(url, jsonFileName = 'products.json') {
  console.log(`---- Scraping ${url} ----`)
  const { links, srcImages } = await getProductsLinks(url)
  const products = []
  let index = 0

  while (index < links.length) {
    const srcImage = srcImages[index]
    const link = links[index]
    const productData = await getProductData(link)

    if (Object.keys(productData).length > 0) {
      productData.id = index + 1
      productData.image = srcImage
      products.push(productData)

      index++
      printProcess(index, links.length)
    }
  }

  await writeJSON(products, jsonFileName)
}

scraper(baseURL)

import * as cheerio from 'cheerio'
import { getProductsLinks, getProductData } from './products.js'
import { writeJSON } from './utils/data-treatment.js'
import { printProcess, log } from './utils/log.js'
import URLS from './scraper.config.js'

export async function scrape(url) {
  const response = await fetch(url)

  if (!response.ok) {
    log.error(response.statusText)
    process.exit(1)
  }

  const html = await response.text()

  return cheerio.load(html)
}

async function runScraper(
  url,
  jsonFileName = 'home-products.json',
  debugMode = false
) {
  log.info(`---- Scraping ${url} ----`)

  const links = await getProductsLinks(url)
  const totalAmount = debugMode ? 5 : links.length
  const products = []
  let index = 0

  while (index < totalAmount) {
    const link = links[index]
    const productData = await getProductData(link)

    if (Object.keys(productData).length > 0) {
      productData.id = index + 1
      products.push(productData)

      index++
      printProcess(index, totalAmount)
    }
  }

  await writeJSON(products, jsonFileName)
}

// this runs automatically when the script is called
;(() => {
  const args = process.argv
  const thirdArg = args[2]

  if (args.length < 3) {
    return runScraper(URLS.computing.home) // default search is the products for home
  }

  // show the available topics that it can be scraped
  if (thirdArg === '--topics') {
    Object.entries(URLS).forEach(([key, value]) => {
      console.log(`==== [${key}] ====`)
      Object.keys(value).forEach((topic) => console.log(`   * ${topic}`))
    })

    return
  }

  // debug mode
  if (thirdArg === '--debug') {
    const topicParam = args[3]
    const foundKey = Object.keys(URLS).find((key) => URLS[key][topicParam])

    if (!foundKey) {
      return log.error(`"${topicParam}" is not a valid topic to search!`)
    }

    const foundTopicLink = URLS[foundKey][topicParam]
    return runScraper(foundTopicLink, `${topicParam}-debug.json`, true)
  }

  return log.error(`"${thirdArg}" is not a valid parametter`)
})()

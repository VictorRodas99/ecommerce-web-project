import { parseString, validateURL, removeEmptyData } from './data-treatment.js'

/**
 * @param { import('cheerio').CheerioAPI } $
 * @param {string} html
 * @returns { Object } literalObject
 */
export const getLiteralObjectFrom = ($, html) => {
  const rawData = []
  const cleanedData = {}

  $(html).each((_, el) => rawData.push($(el).text()))

  const parsedData = removeEmptyData(rawData)
  parsedData.forEach((field) => {
    const [key, value] = field.split(':')
    cleanedData[key] = parseString(value)
  })

  return cleanedData
}

/**
 * @param { import('cheerio').Element } parent
 * @param { import('cheerio').CheerioAPI } $
 * @param { string } selectors
 * @returns {Array<string>} linksImages
 */
export const findImageLinks = ($, parent, selectors) => {
  // the set of images are charged by JavaScript, so I take the script loader and parse it

  const rawText = $(parent).find(selectors).first().text() // it gives all the script in JSON format
  const infoScript = JSON.parse(rawText)
  const { '[data-gallery-role=gallery-placeholder]': scriptProperties } =
    infoScript
  const { 'mage/gallery/gallery': galleryData } = scriptProperties
  const { data } = galleryData

  return data.map((obj) => obj.full)
}

export function getParsedData($, rawObjectData) {
  const getLabel = (html) => {
    return parseString($(html).text()).split(' ')[1]
  }

  const rawData = Object.values(rawObjectData)
  const existsUndefined = rawData.includes(undefined || null)

  if (existsUndefined) {
    return {}
  }

  const [name, price, detailsHTML, labelHTML, rawCategories, rawSrcImages] =
    rawData
  const details = getLiteralObjectFrom($, detailsHTML)
  const label = getLabel(labelHTML)
  const categories = rawCategories
    .replace(/.*:\s/, '') //Removes all characters before ': ' including the colon and the whitespace
    .split(', ')

  const areValidURLs = rawSrcImages.every(validateURL)

  let srcImages = []
  if (areValidURLs) {
    srcImages = rawSrcImages
  }

  return {
    name: parseString(name),
    price: parseString(price),
    details,
    label,
    categories,
    srcImages
  }
}

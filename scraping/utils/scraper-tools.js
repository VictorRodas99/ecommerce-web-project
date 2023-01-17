import { parseString, validateURL, removeEmptyData } from './data-treatment.js'

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

  const rawData = Object.values(rawObjectData)
  const existsUndefined = rawData.includes(undefined || null)

  if (existsUndefined) {
    return {}
  }

  const [name, price, detailsHTML, labelHTML, rawSrcImages] = rawData
  const details = getDetails(detailsHTML)
  const label = getLabel(labelHTML)

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
    srcImages
  }
}

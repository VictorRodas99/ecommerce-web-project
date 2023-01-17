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

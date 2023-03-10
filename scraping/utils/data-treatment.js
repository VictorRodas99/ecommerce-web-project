import path from 'node:path'
import { writeFile } from 'node:fs/promises'

/**
 * @param {Array<{}>} data
 * @param {string} fileName
 */
export const writeJSON = async (data, fileName) => {
  const filePath = path.join(process.cwd(), 'db', fileName)
  await writeFile(filePath, JSON.stringify(data, null, 4), 'utf-8')
  console.log(`\nCreated successfully JSON\n(Path: ${filePath})`)
}

/**
 * @param {string} dirtyString
 */
export const parseString = (dirtyString) => {
  if (!dirtyString) return ''

  return dirtyString
    .replace(/[\r\n]/gm, '') //Removes all the line breaks
    .replace(/\s+/g, ' ') //Removes all the blank spaces
    .trim()
}

export const validateURL = (string) => {
  try {
    const givenURL = new URL(string)
    return true
  } catch (error) {
    return false
  }
}

/**
 * @param {Array<string>} array
 * @returns {Array<string>} filteredArray
 */
export const removeEmptyData = (array) => {
  const parsed = array.map((element) => parseString(element))
  return parsed.filter((element) => Boolean(element))
}

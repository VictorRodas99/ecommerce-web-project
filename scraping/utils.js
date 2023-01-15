/**
 * @param {string} dirtyString 
*/
export const parseString = (dirtyString) => {
    if(!dirtyString) return ''

    return dirtyString
            .replace(/[\r\n]/gm, '') //Removes all the line breaks
            .replace(/\s+/g, ' ') //Removes all the blank spaces
            .trim()
}

/** 
 * @param {Array<string>} array 
 * @returns {Array<string>} filteredArray
 */
export const removeEmptyData = (array) => {
    const parsed = array.map(element => parseString(element))
    return parsed.filter(element => Boolean(element))
}

export const printProcess = (current, final) => {
    const percent = Math.floor((current * 100) / final)
    process.stdout.write(`\rScraping process (${percent}%)...`)
}
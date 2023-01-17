import outColor from 'picocolors'

export const log = {
  info: (msg) => console.log(outColor.blue(`[INFO]: ${msg}`)),
  success: (msg) => console.log(outColor.green(`[SUCCESS]: ${msg}`)),
  warning: (msg) => console.log(outColor.yellow(`[WARNING]: ${msg}`)),
  error: (msg) => console.log(outColor.red(`[ERROR]: ${msg}`))
}

/**
 *
 * @param {number} current
 * @param {number} final
 */
export const printProcess = (current, final) => {
  const percent = Math.floor((current * 100) / final)
  process.stdout.write(`\rScraping process (${percent}%)...`)
}

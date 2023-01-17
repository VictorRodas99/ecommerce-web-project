import URLS from '../scraper.config.js'

export const getTopicLink = (topicParam) => {
  const foundKey = Object.keys(URLS).find((key) => URLS[key][topicParam])

  if (!foundKey) {
    return {
      type: 'error',
      result: `"${topicParam}" is not a valid topic to search!`
    }
  }

  return {
    type: 'success',
    result: URLS[foundKey][topicParam]
  }
}

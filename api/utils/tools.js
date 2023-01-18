export const getTopicFromURL = (url) => {
  return url
    .split('/')
    .at(-2)
    .replace(/[^a-zA-Z ]/g, '')
}

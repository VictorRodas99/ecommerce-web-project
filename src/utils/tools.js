export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1)
}

export const randomNumber = () => {
  return Math.floor(Math.random() * 255)
}

export const getColorFormat = (color) => {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`
}

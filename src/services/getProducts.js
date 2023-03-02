const saveProductsInStorage = ({ url, data }) => {
  const key = window.btoa(url) // Encondes in base64 the url to use it as a key

  try {
    window.sessionStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(
      `An error has ocurred while trying to save data in sessionStorage: ${error.message}`
    )
  }
}

const getSavedProductInStorage = (url) => {
  const key = window.btoa(url)
  const data = window.sessionStorage.getItem(key)

  return JSON.parse(data)
}

export const getProducts = async (url) => {
  const savedData = getSavedProductInStorage(url)

  if (savedData) return savedData

  const response = await fetch(url)

  if (!response.ok) return []

  const data = await response.json()
  saveProductsInStorage({ url, data })

  return data
}

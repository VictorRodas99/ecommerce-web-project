export const getProducts = async (url) => {
  const response = await fetch(url)

  if (!response.ok) return []

  const data = await response.json()
  return data
}

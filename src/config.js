const BASE_URL = 'https://ecommerce-products-api.vik-apps.workers.dev'

export const API_URLS = {
  home: `${BASE_URL}/products`,
  base: BASE_URL,
  computing: {
    notebooks: `${BASE_URL}/computing/notebooks`,
    printers: `${BASE_URL}/computing/printers`,
    monitors: `${BASE_URL}/computing/monitors`,
    storage: `${BASE_URL}/computing/storage`,
    internet: `${BASE_URL}/computing/internet-devices`
  },
  electronics: {
    smartphones: `${BASE_URL}/electronics/smartphones`
  }
}

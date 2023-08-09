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
  hardware: {
    graphics: `${BASE_URL}/hardware/graphics`,
    keyboards: `${BASE_URL}/hardware/keyboards`,
    processors: `${BASE_URL}/hardware/processors`,
    motherboards: `${BASE_URL}/hardware/motherboards`,
    ram: `${BASE_URL}/hardware/ram-devices`
  },
  electronics: {
    smartphones: `${BASE_URL}/electronics/smartphones`,
    televisions: `${BASE_URL}/electronics/televisions`,
    audio: `${BASE_URL}/electronics/audio`
  }
}

export const MAPPED_API_URLS = {
  redes: API_URLS.computing.internet,
  audio: API_URLS.electronics.audio,
  'tarjetas-graficas': API_URLS.hardware.graphics,
  teclados: API_URLS.hardware.keyboards,
  monitores: API_URLS.computing.monitors,
  'placas-madre': API_URLS.hardware.motherboards,
  notebooks: API_URLS.computing.notebooks,
  smartphones: API_URLS.electronics.smartphones,
  impresoras: API_URLS.computing.printers,
  procesadores: API_URLS.hardware.processors,
  'memorias-ram': API_URLS.hardware.ram,
  almacenamiento: API_URLS.computing.storage,
  perifericos: API_URLS.computing.monitors,
  televisiones: API_URLS.electronics.televisions
}

/**
 * ```{ [categorySpanish]: [categoryValidForAPI] }```
 */
export const availableCategories = {
  product: 'products',
  informatica: 'computing',
  hardware: 'hardware',
  electronica: 'electronics'
}
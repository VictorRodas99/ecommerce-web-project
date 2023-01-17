const SCRAPER_URLS = {
  computing: {
    home: 'https://nissei.com/py/informatica?product_list_limit=40',
    notebooks:
      'https://nissei.com/py/informatica/notebooks?product_list_limit=40',
    printers:
      'https://nissei.com/py/informatica/impresoras-y-suplementos?product_list_limit=40',
    monitors:
      'https://nissei.com/py/informatica/accesorios-y-componentes/monitores?product_list_limit=40',
    storage: 'https://nissei.com/py/informatica/almacenamiento',
    internet:
      'https://nissei.com/py/informatica/redes-e-internet?product_list_limit=40'
  },
  components: {
    processors:
      'https://nissei.com/py/informatica/accesorios-y-componentes/procesadores-cpu?product_list_limit=40',
    motherboards:
      'https://nissei.com/py/informatica/accesorios-y-componentes/placas-madres?product_list_limit=40',
    ram: 'https://nissei.com/py/informatica/accesorios-y-componentes/memorias-ram',
    graphicsCards:
      'https://nissei.com/py/informatica/accesorios-y-componentes/tarjetas-graficas?product_list_limit=40',
    keyboards:
      'https://nissei.com/py/informatica/accesorios-y-componentes/teclados?product_list_limit=40'
  },
  electronics: {
    smartphones:
      'https://nissei.com/py/electronica/celulares-tabletas/celulares-accesorios/telefonos-inteligentes?cat=140%2C285%2C753%2C286&product_list_limit=40',
    televisions:
      'https://nissei.com/py/electronica/televisores-home-theaters?product_list_limit=40',
    audio: 'https://nissei.com/py/audio?product_list_limit=40'
  }
}

export default SCRAPER_URLS

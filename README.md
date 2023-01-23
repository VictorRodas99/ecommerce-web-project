<div align="center">

# ⚡ Ecommerce Web Project 💻

<h3 style="font-style: italic">Proyecto creado con fines de aprendizaje que utiliza la técnica del <a href="https://es.wikipedia.org/wiki/Web_scraping">"scraping"</a> para extraer información de productos relacionados a la informática y electrónica</h3>

<hr>

![Deploy API](https://github.com/VictorRodas99/ecommerce-web-project/actions/workflows/deploy-api.yml/badge.svg?branch=main)

![Scrape Nissei Website](https://github.com/VictorRodas99/ecommerce-web-project/actions/workflows/scrape-nissei-page.yml/badge.svg?branch=main)

<h3><a href="https://ecommerce-products-api.vik-apps.workers.dev/">API desplegada</a> | Website en progreso... 🔨</h3>

<hr>

</div>

## Descripción del proyecto

Este proyecto tiene como objectivo crear una API y una página web de productos electrónicos.

La API proporciona datos de diversos productos, desde los precios hasta las especificaciones. Y la página web tiene como objetivo servir dichos datos proporcionando en una interfaz agradable para el usuario.

**Todos los datos son recopilados de [nissei.com](https://nissei.com/py/) con propósitos de aprendizaje.**

## Tecnologias utilizadas 🔍

- [NodeJS](https://nodejs.org/es/): Entorno de ejecución
- [Cheerio](https://cheerio.js.org/): Librería de JavaScript para realizar el web scraping
- [Hono](https://honojs.dev/): Framework web para el desarrollo de la API
- [Cloudflare-Workers](https://workers.cloudflare.com/): Servicio de hosting de APIs
- [Vitest](https://vitest.dev/): Librería de pruebas para validar y testear el código
- [React](https://beta.es.reactjs.org/): Para construir la interfaz de la página web

## Pasos para correr el proyecto 🚀

1. Clonar el repositorio

```bash
git clone https://github.com/VictorRodas99/ecommerce-web-project.git
```

2. Instalar wrangler

```bash
npm install -g wrangler
```

3. Ingresar en la carpeta

```bash
cd ecommerce-web-project
```

4. Instalar las dependencias

```bash
npm install
```

5. Iniciar el proyecto

**(Web)**

```bash
npm run dev:page
```

**(API)**

```bash
npm run dev:api
```

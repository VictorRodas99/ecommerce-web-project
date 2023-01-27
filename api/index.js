import { infoEndpoints } from './controllers/info.controller'
import electronicsRoutes from './routes/electronics.js'
import computingRoutes from './routes/computing.js'
import { catchProduct } from './middleware/catch'
import { optionalSlash } from './middleware/trailing-slashes'
import hardwareRoutes from './routes/hardware.js'
import home from './routes/home.js'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

/* Middlewares */
app.use('*', cors({ origin: '*' }))
app.use('*', catchProduct)

/* Endpoints */
app.get('/', infoEndpoints)

app.route('/products', home)
app.route('/computing', computingRoutes)
app.route('/hardware', hardwareRoutes)
app.route('/electronics', electronicsRoutes)

app.notFound(optionalSlash)

export default app

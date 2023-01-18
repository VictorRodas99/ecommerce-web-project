import { infoEndpoints } from './controllers/info.controller'
import electronicsRoutes from './routes/electronics.js'
import computingRoutes from './routes/computing.js'
import hardwareRoutes from './routes/hardware.js'
import home from './routes/home.js'
import { Hono } from 'hono'

const app = new Hono()

/* Endpoints */
app.get('/', infoEndpoints)

app.route('/products', home)
app.route('/computing', computingRoutes)
app.route('/hardware', hardwareRoutes)
app.route('/electronics', electronicsRoutes)

export default app

import openapi from '#config/openapi'
import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'

router.get('/', async () => 'It works!')

router.get('/api-docs', async () => {
  return AutoSwagger.default.docs(router.toJSON(), openapi)
})

router.get('/api-docs/json', async () => {
  return AutoSwagger.default.json(router.toJSON(), openapi)
})

router.get('/api-docs/scalar', async () => {
  // scalar(path, proxyUrl?) — конфиг сюда передавать не нужно
  return AutoSwagger.default.scalar('/api-docs/json')
})

const ProductsController = () => import('#controllers/products_controller')
router.resource('products', ProductsController).apiOnly()

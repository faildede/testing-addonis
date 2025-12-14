import { defineConfig } from '@adonisjs/cors'

export default defineConfig({
  enabled: true,
  origin: true, // Разрешить все источники (для разработки)
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})
